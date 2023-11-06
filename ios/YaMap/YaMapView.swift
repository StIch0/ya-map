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
    static let stepZoom: Int = 2
    static let userPositionImage: UIImage = UIImage(named:"user-position")!
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
  
  private var map: Map!
  
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
    configureUserPosition()
  }
  
  private func configureUserPosition() {
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
    
    getPoints(json: json) { result in
      switch result {
      case .success(let points):
        
        clearMapObjects()
        makePlaceMarks(points: points)
        
      case .failure(let error):
        debugPrint(error.localizedDescription)
      }
    }
    
  }
  
  private func getPoints(
    json: String,
    handler: (Result<[PointItem], Error>) -> Void
  ) {
    do {
      let data = Data(json.utf8)
      let decoder = JSONDecoder()
      decoder.keyDecodingStrategy = .convertFromSnakeCase
      let throwables = try decoder.decode([Throwable<PointItem>].self, from: data)
      let points = throwables.compactMap { try? $0.result.get() }
      
      handler(.success(points))
    } catch let error as Error {
      
      handler(.failure(error))
    }
  }

  func setMarkerType(_ markerType: String) {
    map = MapFactory().makeMap(mapType: markerType)
  }
  
  private func clearMapObjects() {
    clearSelectedMark()
    let mapObjects = mapView.mapWindow.map.mapObjects
    mapObjects.clear()
  }
  
  // вынести создание в протокол?
  private func makePlaceMarks(points: [PointItem]) {
    let collection = mapView?.mapWindow.map.mapObjects.addClusterizedPlacemarkCollection(with: self)
    
    points.forEach {
      guard let marker = map.makeMarkerImage($0, selectedMarker: false) else { return }
      
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
    
    guard let image = map.makeMarkerImage(
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
  
  private func isEven(number: Int) -> Bool {
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
    
    guard let image = map.makeMarkerImage(
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
    onPressMarker?(["id": pointItem.id])
    
    return true
  }
}

extension YaMapView: YMKClusterListener {
  
  func onClusterAdded(with cluster: YMKCluster) {
    let clusterImage = map.makeClusterImage(cluster: cluster)
    
    cluster.appearance.setIconWith(
      clusterImage,
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
  
  func onMapLongTap(with map: YMKMap, point: YMKPoint) {}
  
  func onMapTap(with map: YMKMap, point: YMKPoint) {
    onMapPressed?([:])
    clearSelectedMark()
  }
}

extension YaMapView: YMKUserLocationObjectListener {
  
  func onObjectAdded(with view: YMKUserLocationView) {
    view.arrow.setIconWith(Constants.userPositionImage)
    let pinPlacemark = view.pin.useCompositeIcon()
    pinPlacemark.setIconWithName("user-position",
                                 image: Constants.userPositionImage,
                                 style: YMKIconStyle(
                                  anchor: CGPoint(x: 0.5, y: 0.5) as NSValue,
                                  rotationType: YMKRotationType.rotate.rawValue as NSNumber,
                                  zIndex: 0,
                                  flat: true,
                                  visible: true,
                                  scale: 1,
                                  tappableArea: nil))
    view.accuracyCircle.fillColor = .clear
  }
  
  func onObjectRemoved(with view: YMKUserLocationView) {}
  func onObjectUpdated(with view: YMKUserLocationView, event: YMKObjectEvent) {}
}
