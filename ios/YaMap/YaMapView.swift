//
//  YaMapView.swift
//  YaMapTest
//
//  Created by Pavel on 16.08.2023.
//

import Foundation
import UIKit
import YandexMapsMobile
import React

@objcMembers
final class YaMapView: UIView {
  
  private enum Constants {
    static let defaultPoint: Point = Point(lat: 48.462793, lon: 135.083092)
    static let maxPriceOnMarker = 99999
    static let PLACEMARKS_NUMBER = 2000
    static let FONT_SIZE: CGFloat = 15
    static let MARGIN_SIZE: CGFloat = 3
    static let STROKE_SIZE: CGFloat = 3
    static let FONT_SCALE_ONE_LEN = 16
    static let stepZoom: Int = 2
    
    static let classicMarker = UIImage(named: "marker-classic")
    static let classicMarkerSelected = UIImage(named: "marker-classic-selected")
    static let autoMarker = UIImage(named: "marker-auto")
    static let autoMarkerSelected = UIImage(named: "marker-auto-selected")
    
    static let markerFont = UIFont.boldSystemFont(ofSize: 64)
    
    enum MarkerPadding {
      static let vertical: CGFloat = 16
      static let horizontal: CGFloat = 50
      static let proportion: CGFloat = 0.47
    }
  }
  
  private var startZoom: Float = 12.0
  private var currentZoom: Float?
  
  private var clusterZoom: Float? {
    if let currentZoom, startZoom == currentZoom ||
        currentZoom < startZoom {
      return startZoom + Float(Constants.stepZoom)
    }
    if let currentZoom {
      let currentZoomInt = Int(floor(currentZoom))
      switch isEven(number: currentZoomInt) {
      case true:
        return Float(currentZoomInt + Constants.stepZoom)
      case false:
        return Float(currentZoomInt + 1 + Constants.stepZoom)
      }
    }
    return nil
  }
  
  private var mapView: YMKMapView!
  private var yaMkCluster: YMKCluster?
  
  private var selectedPlacemarkMapObject: YMKPlacemarkMapObject?
  private var selectedPoint: PointItem?
  private var selectedId: Int?
  
  var onCameraPositionChangedEnd: RCTBubblingEventBlock?
  var onPressMarker: RCTBubblingEventBlock?
  var onMapPressed: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
    addListeners()
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }
  
  private func setupView() {
    mapView = YMKMapView(frame: frame)
    self.addSubview(mapView)
  }
  
  private func addListeners() {
    mapView.mapWindow.map.addCameraListener(with: self)
    mapView.mapWindow.map.addInputListener(with: self)
  }
  
  func setZoom(_ zoom: NSNumber) {
    self.startZoom = Float(truncating: zoom)
    self.currentZoom = self.startZoom
  }
  
  func setPointsJson(_ json: String) {
    do {
      let data = Data(json.utf8)
      let decoder = JSONDecoder()
      decoder.keyDecodingStrategy = .convertFromSnakeCase
      let throwables = try decoder.decode([Throwable<PointItem>].self, from: data)
      let points = throwables.compactMap { try? $0.result.get() }
      
      makePlaceMarks(points: points)
      
    } catch let error as NSError {
      print("Failed to load: \(error.localizedDescription)")
    }
  }
  
  private func makePlaceMarks(points: [PointItem]) {
    let collection = mapView?.mapWindow.map.mapObjects.addClusterizedPlacemarkCollection(with: self)
    
    points.forEach {
      guard let marker = makeMarkerImage($0) else { return }
      
      let placemark = collection?.addPlacemark(
        with: YMKPoint(
          latitude: $0.pos.lat,
          longitude: $0.pos.lon
        ),
        image: marker,
        style: YMKIconStyle(
          anchor: CGPoint(x: 0.5, y: 0.5) as NSValue,
          rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil)
      )
      
      placemark?.userData = $0
      placemark?.addTapListener(with: self)
    }
    collection?.clusterPlacemarks(withClusterRadius: 20, minZoom: 20)
  }
  
  private func makeMarkerImage(
    _ pointItem: PointItem,
    selectedMarker: Bool = false
  ) -> UIImage? {
    guard
      let image = configureImageMarker(
        pointItem: pointItem,
        selectedMarker: selectedMarker
      )
    else { return nil}
    
    let price: Int = calculatePrice(pointItem: pointItem)
    let textMarker = configureTextMarker(price: price, selectedMarker: selectedMarker)
    
    let scale = UIScreen.main.scale * 0.2
    let widthImage = textMarker.size.width + Constants.MarkerPadding.horizontal * 2
    let heightImage = widthImage * Constants.MarkerPadding.proportion + Constants.MarkerPadding.vertical
    let paddingTop = (heightImage / 2 - 10)  * scale
    
    let sizeImage = CGSize(
      width: widthImage,
      height: heightImage
    )
    
    UIGraphicsBeginImageContextWithOptions(sizeImage, false, scale)
    
    image.draw(in: CGRect(
      origin: CGPoint.zero,
      size: sizeImage)
    )
    
    let rect = CGRect(
      origin: CGPoint(
        x: Constants.MarkerPadding.horizontal,
        y: paddingTop
      ),
      size: sizeImage)
    
    textMarker.text.draw(in: rect, withAttributes: textMarker.attributes)
    
    let newImage = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    
    return newImage
  }
  
  private func calculatePrice(pointItem: PointItem) -> Int {
    let tariff = pointItem.apartTariffs.first { $0.code == "sum" }
    return tariff?.priceFewDays ?? 0
  }
  
  private func configureTextMarker(
    price: Int,
    selectedMarker: Bool
  ) -> (text: String, size: CGSize, attributes:[NSAttributedString.Key: Any] ) {
    let text = "\(price.formattedWithSeparator) ₽"
    var textColor: UIColor = .black
    let font = Constants.markerFont
    
    if selectedMarker {
      textColor = .white
    }
    let textFontAttributes: [NSAttributedString.Key: Any] = [
      .foregroundColor: textColor,
      .font: font
    ]
    let textSize = (text as NSString).size(withAttributes: textFontAttributes)
    
    return (text: text, size: textSize, attributes: textFontAttributes)
  }
  
  private func configureImageMarker(
    pointItem: PointItem,
    selectedMarker: Bool
  ) -> UIImage? {
    let isClassic = pointItem.apartmentAccessType.id == .classic
    
    switch (isClassic, selectedMarker) {
    case (true, true):
      return Constants.classicMarkerSelected
    case (true, false):
      return Constants.classicMarker
    case (false, true):
      return Constants.autoMarkerSelected
    case (false, false):
      return Constants.autoMarker
    }
  }
  
  private func clusterImage(_ clusterSize: UInt) -> UIImage {
    let scale = UIScreen.main.scale
    
    let text = (clusterSize as NSNumber).stringValue
    
    let font = UIFont.systemFont(ofSize: Constants.FONT_SIZE * scale)
    let size = text.size(withAttributes: [NSAttributedString.Key.font: font])
    let textRadius = sqrt(size.height * size.height + size.width * size.width) / 2
    let internalRadius = textRadius + Constants.MARGIN_SIZE * scale
    let externalRadius = internalRadius + Constants.STROKE_SIZE * scale
    let iconSize = CGSize(width: externalRadius * 2, height: externalRadius * 2)
    
    UIGraphicsBeginImageContext(iconSize)
    
    let ctx = UIGraphicsGetCurrentContext()!
    ctx.setFillColor(UIColor(hexString: "#5663F6", alpha: 1).cgColor)
    
    ctx.fillEllipse(in: CGRect(
      origin: .zero,
      size: CGSize(width: 2 * externalRadius, height: 2 * externalRadius)));
    
    ctx.setFillColor(UIColor.white.cgColor)
    ctx.fillEllipse(in: CGRect(
      origin: CGPoint(x: externalRadius - internalRadius, y: externalRadius - internalRadius),
      size: CGSize(width: 2 * internalRadius, height: 2 * internalRadius)));
    
    (text as NSString).draw(
      in: CGRect(
        origin: CGPoint(x: externalRadius - size.width / 2, y: externalRadius - size.height / 2),
        size: size),
      withAttributes: [
        NSAttributedString.Key.font: font,
        NSAttributedString.Key.foregroundColor: UIColor.black])
    
    let image = UIGraphicsGetImageFromCurrentImageContext()!
    
    return image
  }
  
  func setCenter(center: Point, zoom: Float) {
    mapView?.mapWindow.map.move(
      with: YMKCameraPosition.init(target: .init(latitude: center.lat, longitude: center.lon), zoom: zoom, azimuth: 0, tilt: 0),
      animationType: .init(type: .linear, duration: 0.5))
  }
  
  private func clearSelectedMark() {
    guard let selectedPoint, let selectedPlacemarkMapObject else { return }
    
    guard let image = makeMarkerImage(
      selectedPoint,
      selectedMarker: false
    )
    else { return }
    
    selectedPlacemarkMapObject.setIconWith(image)
    self.selectedPoint = nil
    self.selectedPlacemarkMapObject = nil
  }
  
  func isEven(number: Int) -> Bool {
    return number % 2 == 0
  }
}

extension YaMapView: YMKMapCameraListener {
  
  func onCameraPositionChanged(
    with map: YMKMap,
    cameraPosition: YMKCameraPosition,
    cameraUpdateReason: YMKCameraUpdateReason,
    finished: Bool
  ) {
    currentZoom = cameraPosition.zoom
    
    if (finished && cameraUpdateReason == .gestures) {
      let region: YMKVisibleRegion? = map.visibleRegion
      
      onCameraPositionChangedEnd?([
        "center": [
          "lat": cameraPosition.target.latitude,
          "lon": cameraPosition.target.longitude
        ],
        "zoom": cameraPosition.zoom,
        "visibleRegion": [
          "topRight": [
            "lat": region?.topRight.latitude,
            "lon": region?.topRight.longitude
          ],
          "topLeft": [
            "lat": region?.topLeft.latitude,
            "lon": region?.topLeft.longitude
          ],
          "bottomRight": [
            "lat": region?.bottomRight.latitude,
            "lon": region?.bottomRight.longitude
          ],
          "bottomLeft": [
            "lat": region?.bottomLeft.latitude,
            "lon": region?.bottomLeft.longitude
          ]
        ]
      ])
    }
  }
}
//
extension YaMapView: YMKClusterTapListener {
  
  func onClusterTap(with cluster: YMKCluster) -> Bool {
    guard let clusterZoom else { return false }
    
    mapView?.mapWindow.map.move(
      with: YMKCameraPosition(
        target: cluster.appearance.geometry,
        zoom: clusterZoom,
        azimuth: 0,
        tilt: 0),
      animationType: .init(
        type: .linear,
        duration: 0.5)
    )
    return true
  }
}

extension YaMapView: YMKMapObjectTapListener {
  
  func onMapObjectTap(with mapObject: YMKMapObject, point: YMKPoint) -> Bool {
    guard let pointItem = mapObject.userData as? PointItem,
          let placeMark = mapObject as? YMKPlacemarkMapObject
    else { return false }
    
    if selectedPoint != nil {
      clearSelectedMark()
    }
    
    guard let image = makeMarkerImage(
      pointItem,
      selectedMarker: true
    )
    else { return false }
    
    placeMark.setIconWith(image)
    
    self.selectedPlacemarkMapObject = placeMark
    self.selectedPoint = pointItem
    
    selectedId = pointItem.id
    onPressMarker?(["id":pointItem.id])
    
    return true
  }
}

extension YaMapView: YMKClusterListener {
  
  func onClusterAdded(with cluster: YMKCluster) {
    
    
    
    //    let minPrice: Int? = cluster.placemarks.map {
    //          let userData = $0.userData as? PointItem
    //          let price = userData?.apartmentsTariffs.first(where: {$0.code == "sum"})?.price
    //          return price ?? 0
    //
    //        }
    
    cluster.appearance.setIconWith(
      clusterImage(cluster.size),
      style: YMKIconStyle(
        anchor: .init(cgVector: .init(dx: 0, dy: 1)),
        rotationType: nil,
        zIndex: nil,
        flat: nil,
        visible: nil,
        scale: nil,
        tappableArea: nil))
    cluster.addClusterTapListener(with: self)
  }
}

extension YaMapView: YMKMapInputListener {
  
  func onMapLongTap(with map: YMKMap, point: YMKPoint) {
    
  }
  
  func onMapTap(with map: YMKMap, point: YMKPoint) {
    
    onMapPressed?([:])
    clearSelectedMark()
  }
}
