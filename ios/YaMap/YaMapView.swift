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
    
    enum Image {
      static let classicMarker = UIImage(named: "marker-classic")
      static let classicMarkerSelected = UIImage(named: "marker-classic-selected")
      static let autoMarker = UIImage(named: "marker-auto")
      static let autoMarkerSelected = UIImage(named: "marker-auto-selected")
      
      static let clusterCircle = UIImage(named: "cluster-circle")
      static let clusterSubstrate = UIImage(named: "cluster-substrate")
    }
    
    static let markerFont = UIFont.boldSystemFont(ofSize: 64)
    static let clusterCountFont = UIFont.boldSystemFont(ofSize: 13)
    
    enum MarkerPadding {
      static let vertical: CGFloat = 16
      static let horizontal: CGFloat = 50
      static let proportion: CGFloat = 0.47
    }
    
    enum ClusterPricePadding {
      static let horizontal: CGFloat = 20
    }
  }
  
  private var startZoom: Float = 2.0
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
    
    let scale = UIScreen.main.scale
    let mapKit = YMKMapKit.sharedInstance()
    let userLocationLayer = mapKit.createUserLocationLayer(with: mapView.mapWindow)
    userLocationLayer.setVisibleWithOn(true)
    userLocationLayer.isHeadingEnabled = true
    userLocationLayer.setObjectListenerWith(self)
  }
  
  func setZoom(_ zoom: NSNumber) {
    self.startZoom = Float(truncating: zoom)
    self.currentZoom = self.startZoom
  }
  
  func setStyleJson(_ styleJson: String){
    mapView.mapWindow.map.setMapStyleWithStyle(styleJson)
  }
  
  func setPointsJson(_ json: String) {
    do {
      let data = Data(json.utf8)
      let decoder = JSONDecoder()
      decoder.keyDecodingStrategy = .convertFromSnakeCase
      let throwables = try decoder.decode([Throwable<PointItem>].self, from: data)
      let points = throwables.compactMap { try? $0.result.get() }
      
      clearMapObjects()
      makePlaceMarks(points: points)
      
    } catch let error as NSError {
      print("Failed to load: \(error.localizedDescription)")
    }
  }
  
  private func clearMapObjects() {
    clearSelectedMark()
    let mapObjects = mapView.mapWindow.map.mapObjects
    mapObjects.clear()
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
          anchor: CGPoint(x: 0.0, y: 1.0) as NSValue,
          rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil)
      )
      
      placemark?.userData = $0
      placemark?.addTapListener(with: self)
    }
    collection?.clusterPlacemarks(withClusterRadius: 35, minZoom: 20)
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
    let textMarker = configurePriceText(price: price, selected: selectedMarker)
    
    let scale = UIScreen.main.scale * 0.2
    let widthImage = textMarker.size.width + Constants.MarkerPadding.horizontal * 2
    let heightImage = widthImage * Constants.MarkerPadding.proportion + Constants.MarkerPadding.vertical
    
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
        x: widthImage / 2 - textMarker.size.width / 2,
        y: (heightImage / 2 - textMarker.size.height / 2) - 16
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
  
  private func configurePriceText(
    price: Int,
    selected: Bool = false
  ) -> (text: String, size: CGSize, attributes:[NSAttributedString.Key: Any] ) {
    
    let text = "\(price.formattedWithSeparator) ₽"
    var textColor: UIColor = .black
    let font = Constants.markerFont
    
    if selected {
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
      return Constants.Image.classicMarkerSelected
    case (true, false):
      return Constants.Image.classicMarker
    case (false, true):
      return Constants.Image.autoMarkerSelected
    case (false, false):
      return Constants.Image.autoMarker
    }
  }
  
  private func clusterImage(
    price: Int,
    _ clusterSize: UInt
  ) -> UIImage {
    let scale = UIScreen.main.scale
    
    let circleImage = Constants.Image.clusterCircle!
    let substrateImage = Constants.Image.clusterSubstrate!
    
    let countText = String(clusterSize)
    let countTextAttributes: [NSAttributedString.Key: Any] = [
      .foregroundColor: UIColor.black,
      .font: UIFont.boldSystemFont(ofSize: 11)
    ]
    let countTextSize = countText.size(withAttributes: countTextAttributes)
    
    
    let priceText = "от \(price.formattedWithSeparator) ₽"
    let priceTextAttributes: [NSAttributedString.Key: Any] = [
      .foregroundColor: UIColor.black,
      .font: Constants.clusterCountFont
    ]
    let priceTextSize = priceText.size(withAttributes: priceTextAttributes)
    
    
    let widthSubstrateImage = priceTextSize.width + Constants.ClusterPricePadding.horizontal * 2
    
    let newImageSize = CGSize(
      width: circleImage.size.width / 2  + widthSubstrateImage,
      height: circleImage.size.height)
    
    UIGraphicsBeginImageContextWithOptions(newImageSize, false, scale)
    
    substrateImage.draw(in: CGRect(
      origin: CGPoint(
        x: circleImage.size.width / 2 - 10,
        y: 0.3
      ),
      size: CGSize(
        width: widthSubstrateImage,
        height: substrateImage.size.height))
    )
    
    circleImage.draw(in: CGRect(
      origin: CGPoint.zero,
      size: circleImage.size)
    )
    
    let clusterCountTextRect = CGRect(
      origin: CGPoint(
        x: (circleImage.size.width / 2 - countTextSize.width / 2),
        y: (circleImage.size.height / 2 - countTextSize.height / 2)
      ),
      size: circleImage.size
    )
    
    countText.draw(in: clusterCountTextRect, withAttributes: countTextAttributes)
    
    let centerPriceText = CGPoint(
      x: (widthSubstrateImage / 2 - priceTextSize.width / 2) + circleImage.size.width / 2,
      y: (substrateImage.size.height / 2) - (priceTextSize.height / 2)
    )
    
    priceText.draw(in: CGRect(
      origin: centerPriceText,
      size: newImageSize
    ), withAttributes: priceTextAttributes)
    
    let newImage = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    
    return newImage!
  }
  
  func setCenter(center: Point, zoom: Float) {
    mapView?.mapWindow.map.move(
      with: YMKCameraPosition.init(target: .init(latitude: center.lat, longitude: center.lon), zoom: zoom, azimuth: 0, tilt: 0),
      animationType: .init(type: .linear, duration: 0.5))
  }

  func resetSelectedId(){
    clearSelectedMark()
  }
  
  private func clearSelectedMark() {
    guard let selectedPoint, let selectedPlacemarkMapObject else { return }
    
    guard let image = makeMarkerImage(
      selectedPoint,
      selectedMarker: false
    )
    else { return }
    
    selectedPlacemarkMapObject.setIconWith(image, style: YMKIconStyle(
      anchor: CGPoint(x: 0.0, y: 1.0) as NSValue,
      rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil))
    
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
    
    placeMark.setIconWith(image, style: YMKIconStyle(
      anchor: CGPoint(x: 0.0, y: 1.0) as NSValue,
      rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil))
    
    self.selectedPlacemarkMapObject = placeMark
    self.selectedPoint = pointItem
    
    selectedId = pointItem.id
    onPressMarker?(["id":pointItem.id])
    
    return true
  }
}

extension YaMapView: YMKClusterListener {
  
  func onClusterAdded(with cluster: YMKCluster) {
    let pointItems: [Int] = cluster.placemarks.compactMap {
      guard let point = $0.userData as? PointItem else { return nil }
      return calculatePrice(pointItem: point)
    }
    
    let sortedPice = pointItems.lazy.sorted { $1 > $0 }
    let minPrice = sortedPice.first ?? 0

    cluster.appearance.setIconWith(
      clusterImage(price: minPrice, cluster.size),
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


extension YaMapView: YMKUserLocationObjectListener {
  
  func onObjectAdded(with view: YMKUserLocationView) {
    view.arrow.setIconWith(UIImage(named:"user-position")!)
    
    let pinPlacemark = view.pin.useCompositeIcon()
    
    pinPlacemark.setIconWithName("user-position",
        image: UIImage(named:"user-position")!,
        style:YMKIconStyle(
            anchor: CGPoint(x: 0.5, y: 0.5) as NSValue,
            rotationType: YMKRotationType.rotate.rawValue as NSNumber,
            zIndex: 0,
            flat: true,
            visible: true,
            scale: 1,
            tappableArea: nil))
    
    view.accuracyCircle.fillColor = .clear
  }
  
  func onObjectRemoved(with view: YMKUserLocationView) {
  }
  
  func onObjectUpdated(with view: YMKUserLocationView, event: YMKObjectEvent) {
  }
  
}
