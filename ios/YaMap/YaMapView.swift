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
class YaMapView: UIView, YMKClusterListener, YMKClusterTapListener, YMKMapObjectTapListener, YMKMapCameraListener {
  private let defaultPoint: Point = Point(lat: 48.462793, lon: 135.083092)

  private let maxPriceOnMarker = 99999
  
  func onCameraPositionChanged(with map: YMKMap, cameraPosition: YMKCameraPosition, cameraUpdateReason: YMKCameraUpdateReason, finished: Bool) {
    if (finished && cameraUpdateReason == .gestures){
      let region: YMKVisibleRegion? = map.visibleRegion
      
      onCameraPositionChangedEnd?([
        "center": [
          "lat":cameraPosition.target.latitude,
          "lon": cameraPosition.target.longitude],
        "zoom":cameraPosition.zoom,
        "visibleRegion": ["topRight": [
          "lat": region?.topRight.latitude, "lon": region?.topRight.longitude],
                          "topLeft": [
          "lat": region?.topLeft.latitude, "lon": region?.topLeft.longitude],
                          "bottomRight": [
          "lat": region?.bottomRight.latitude, "lon": region?.bottomRight.longitude],
                          "bottomLeft": [
          "lat": region?.bottomLeft.latitude, "lon": region?.bottomLeft.longitude]]])
    }
  }
  
  
  func onMapObjectTap(with mapObject: YMKMapObject, point: YMKPoint) -> Bool {
    guard let pointItem = mapObject.userData as? PointItem else { return false }
    selectedId = pointItem.id
    onPressMarker?(["id":pointItem.id])
    
    return true
  }

  
  private let PLACEMARKS_NUMBER = 2000
  private let FONT_SIZE: CGFloat = 15
  private let MARGIN_SIZE: CGFloat = 3
  private let STROKE_SIZE: CGFloat = 3
  private let FONT_SCALE_ONE_LEN = 16
  private var zoom: Float = 14.0
  @Published private var selectedId: Int?
  
  private var mapView: YMKMapView?
  private var yaMkCluster: YMKCluster?
  var onCameraPositionChangedEnd: RCTBubblingEventBlock?
  var onPressMarker: RCTBubblingEventBlock?
  
  override init(frame: CGRect) {

    
    super.init(frame: frame)
     
    mapView = YMKMapView(frame: frame)
    mapView?.mapWindow.map.addCameraListener(with: self)
    setupView()
  }
   
    required init?(coder aDecoder: NSCoder) {
      super.init(coder: aDecoder)
    }
  
  func setZoom(_ zoom: NSNumber){
    self.zoom = Float(truncating: zoom)
  }
  
  func setPointsJson(_ json: String) {
    do {

      let data = Data(json.utf8)

      let decoder = JSONDecoder()
      decoder.keyDecodingStrategy = .convertFromSnakeCase
      let throwables = try decoder.decode([Throwable<PointItem>].self, from: data)
      let points = throwables.compactMap { try? $0.result.get() }
 
      let collection = mapView?.mapWindow.map.mapObjects.addClusterizedPlacemarkCollection(with: self)
      
      points.forEach {
        let placemark = collection?.addPlacemark(with:
                                  YMKPoint(latitude: $0.pos.lat,
                                               longitude: $0.pos.lon),
                                image: markerImage($0),
                                style: YMKIconStyle(anchor: .init(cgVector: .init(dx: 0, dy: 1)), rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil))
        placemark?.userData = $0
        placemark?.addTapListener(with: self)
      }
      
      collection?.clusterPlacemarks(withClusterRadius: 20, minZoom: 20)
    } catch let error as NSError {
        print("Failed to load: \(error.localizedDescription)")
    }
  }
   
  
  func markerImage(_ pointItem: PointItem)->UIImage {
        
    let isClassic = pointItem.apartmentAccessType.id == .classic
    
  
    var price = 0
    pointItem.apartTariffs.forEach{
      switch $0.code {
        case "sum":
          price = $0.priceFewDays
          break
        case "per_24h":
          price = $0.priceDay
          break
        case "per_3h":
          price = $0.priceHour
          break
        default:
          price = 0
          break
        }
    }
    
    let imageSize = price > maxPriceOnMarker ? "XX" : "X"
    
    let imageName = isClassic ? "map-pin-\(imageSize)-K-classic" : "map-pin-\(imageSize)-K-auto"
    var imageTintColor = UIColor.white
    var textColor = UIColor.black
    
    $selectedId.receive(on: DispatchQueue.main)
      .sink { [weak self] id in
        let isChosen = id == pointItem.id
        if (isChosen) {
          imageTintColor = isClassic ? UIColor(hexString: "#4FAC6D") : UIColor(hexString: "#5663F6")
          textColor = UIColor.white
        }
      }
    
   
    
    if let image = UIImage(named: imageName) {
      let text = "\(price.formattedWithSeparator) ₽"
       
      let scale = UIScreen.main.scale * 0.2
      let font = UIFont.systemFont(ofSize: 64)
      UIGraphicsBeginImageContextWithOptions(image.size, false, scale)
      
      let textFontAttributes = [
        NSAttributedString.Key.font: font,
        NSAttributedString.Key.foregroundColor: textColor,
      ] as [NSAttributedString.Key : Any]
      image.draw(in: CGRect(origin: CGPoint.zero, size: image.size))
      
      let rect = CGRect(origin: CGPoint(x:CGPoint.zero.x + 40, y: CGPoint.zero.y + 25), size: image.size)
      text.draw(in: rect, withAttributes: textFontAttributes)
       
      let newImage = UIGraphicsGetImageFromCurrentImageContext()?.withTintColor(imageTintColor)
    
      UIGraphicsEndImageContext()
      
      return newImage!
    }
    
    return UIImage()
  }
  
  func clusterImage(_ clusterSize: UInt) -> UIImage {
    let scale = UIScreen.main.scale
    let text = (clusterSize as NSNumber).stringValue
    let font = UIFont.systemFont(ofSize: FONT_SIZE * scale)
    let size = text.size(withAttributes: [NSAttributedString.Key.font: font])
    let textRadius = sqrt(size.height * size.height + size.width * size.width) / 2
    let internalRadius = textRadius + MARGIN_SIZE * scale
    let externalRadius = internalRadius + STROKE_SIZE * scale
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

  
//  func clusterImage(_ clusterSize: UInt, price: Int) -> UIImage {
//    if let image = UIImage(named: "map-pin") {
//
//      let text = "\(clusterSize)"
//      let priceText = "от \(price.formattedWithSeparator) ₽"
//
//      let priceTextColor = UIColor.black
//      let textColor = UIColor.white
//
//
//      let fontScale = CGFloat(18 - (2 * text.count))
//
//      let scale = UIScreen.main.scale * 0.7
//      let font = UIFont.systemFont(ofSize: fontScale)
//      let priceFont = UIFont.systemFont(ofSize: 9 * scale)
//      UIGraphicsBeginImageContextWithOptions(image.size, false, scale)
//
//      let textFontAttributes = [
//        NSAttributedString.Key.font: font,
//        NSAttributedString.Key.foregroundColor: textColor,
//      ] as [NSAttributedString.Key : Any]
//      let priceTextFontAttributes = [
//        NSAttributedString.Key.font: priceFont,
//        NSAttributedString.Key.foregroundColor: priceTextColor,
//      ] as [NSAttributedString.Key : Any]
//
//
//      image.draw(in: CGRect(origin: CGPoint.zero, size: image.size))
//
//      let priceRect = CGRect(origin: CGPoint(x:CGPoint.zero.x + 30, y: CGPoint.zero.y + 8), size: image.size)
//      let rect = CGRect(origin: CGPoint(x: CGPoint.zero.x + fontScale - 4, y: CGPoint.zero.y + 25 + CGFloat(text.count)), size: image.size)
//
//      text.draw(in: rect, withAttributes: textFontAttributes)
//      priceText.draw(in: priceRect, withAttributes: priceTextFontAttributes)
//
//      let newImage = UIGraphicsGetImageFromCurrentImageContext()
//      UIGraphicsEndImageContext()
//
//      return newImage!
//    }
//
//    return UIImage()
//  }
//
  func onClusterAdded(with cluster: YMKCluster) {
    
//    let minPrice: Int? = cluster.placemarks.map {
//      let userData = $0.userData as? PointItem
//      let price = userData?.apartmentsTariffs.first(where: {$0.code == "sum"})?.price
//      return price ?? 0
//    }.min()
//
    
    cluster.appearance.setIconWith(
      clusterImage(cluster.size), style: YMKIconStyle(anchor: .init(cgVector: .init(dx: 0, dy: 1)), rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil))
        cluster.addClusterTapListener(with: self)

  }
  
  func setCenter(center: Point, zoom: Float){
    mapView?.mapWindow.map.move(
      with: YMKCameraPosition.init(target: .init(latitude: center.lat, longitude: center.lon), zoom: zoom, azimuth: 0, tilt: 0),
      animationType: .init(type: .linear, duration: 0.5))
  }
  
  
  func onClusterTap(with cluster: YMKCluster) -> Bool {
    
    zoom+=2.0
    mapView?.mapWindow.map.move(
      with: YMKCameraPosition.init(target: cluster.appearance.geometry, zoom: zoom, azimuth: 0, tilt: 0),animationType: .init(type: .linear, duration: 0.5))
    return true
  }

   private func setupView() {
     guard let mapView = mapView else { return }
     self.addSubview(mapView)
   }
}
