//
//  YaMapView.swift
//  YaMapTest
//
//  Created by Pavel on 16.08.2023.
//

import Foundation
import UIKit
import YandexMapsMobile

@objcMembers
class YaMapView: UIView, YMKClusterListener, YMKClusterTapListener, YMKMapObjectTapListener, YMKMapCameraListener {
  
  
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
    
    if let index = points?.firstIndex(where: { item in
      return item.id == pointItem.id
    }) {
      collection?.remove(with: mapObject)
       
//      collection?.setVisibleWithVisible(false, animation: .init(type: .linear, duration: 0))
//      points?.remove(at: index)
      
      let center = YMKPoint(latitude: pointItem.point.lat, longitude: pointItem.point.lon)
      collection?.addPlacemark(with: center, image: markerImage(pointItem, currentPoint: pointItem))
    }
    
    return true
  }

  
  private let PLACEMARKS_NUMBER = 2000
  private let FONT_SIZE: CGFloat = 15
  private let MARGIN_SIZE: CGFloat = 3
  private let STROKE_SIZE: CGFloat = 3
  private let FONT_SCALE_ONE_LEN = 16
  private var zoom: Float = 2.0
  
  private var mapView: YMKMapView?
  private var yaMkCluster: YMKCluster?
  private var points: [PointItem]?
  var onCameraPositionChangedEnd: RCTBubblingEventBlock?
  var collection: YMKClusterizedPlacemarkCollection?
  var placeMarkes: [YMKMapObject?]?
 
  override init(frame: CGRect) {

    
    super.init(frame: frame)
     
    mapView = YMKMapView(frame: frame)
    
    mapView?.mapWindow.map.addCameraListener(with: self)
    points = []
    setupView()
  }
   
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }
  
  private func setCollectionPoints(_ points: [PointItem], center: YMKPoint, currentPoint: PointItem?){
    
   self.points = points
   
   
   let collection = mapView?.mapWindow.map.mapObjects.addClusterizedPlacemarkCollection(with: self)
   
   self.collection = collection
   
   mapView?.mapWindow.map.move(
           with: YMKCameraPosition.init(target: center, zoom: zoom, azimuth: 0, tilt: 0),
           animationType: YMKAnimation(type: YMKAnimationType.smooth, duration: 5),
           cameraCallback: nil)
   
   points.forEach {
     let placemark = collection?.addPlacemark(with:
                               YMKPoint(latitude: $0.point.lat,
                                            longitude: $0.point.lon),
                                              image: markerImage($0, currentPoint: currentPoint),
                             style: YMKIconStyle(anchor: .init(cgVector: .init(dx: 0, dy: 1)), rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil))
     placemark?.userData = $0
     placemark?.addTapListener(with: self)
     placeMarkes?.append(placemark)
   }
   
   collection?.clusterPlacemarks(withClusterRadius: 20, minZoom: 20)
  }
  
  func setPointsJson(_ newData: String) {
    do {
      let data = Data(newData.utf8)
      
      let decoder = JSONDecoder()
      decoder.keyDecodingStrategy = .convertFromSnakeCase
      let throwables = try decoder.decode([Throwable<PointItem>].self, from: data)
      let points = throwables.compactMap { try? $0.result.get() }
      let point = YMKPoint(latitude: points.first?.point.lat ?? 0, longitude: points.first?.point.lon ?? 0)
      self.setCollectionPoints(points,center: point, currentPoint: nil)
       
    } catch let error as NSError {
        print("Failed to load: \(error.localizedDescription)")
    }
  }
   
  
  func markerImage(_ pointItem: PointItem, currentPoint: PointItem?)->UIImage {
        
    let isClassic = pointItem.apartmentAccessType.id == .classic
    let imageName = isClassic ? "map-pin-X-K-classic" : "map-pin-X-K-auto"
    if var image = UIImage(named: imageName) {
      var price = 0
      pointItem.apartmentsTariffs.forEach {
        price += $0.code == "sum" ? $0.price : 0
      }
       
      let text = "\(price.formattedWithSeparator) ₽"
      
      let textColor = currentPoint?.id == pointItem.id ? UIColor.white : UIColor.black
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
      
      let newImage = UIGraphicsGetImageFromCurrentImageContext()
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
