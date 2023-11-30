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
  
  enum Constants {
    static let stepZoom: Int = 2
    static let userPositionImage: UIImage = UIImage(named:"user-position")!
  }

  private var startZoom: Float = 2.0
  var currentZoom: Float = 2.0
  
  var clusterZoom: Float? {
    if startZoom == currentZoom ||
        currentZoom < startZoom {
      return startZoom + Float(Constants.stepZoom)
    }

    let currentZoomInt = Int(floor(currentZoom))
    switch isEven(number: currentZoomInt) {
    case true:
      return Float(currentZoomInt + Constants.stepZoom)
    case false:
      return Float(currentZoomInt + 1 + Constants.stepZoom)
    }
  }
  
  var map: Map!
  var mapType: MapType?
  
  var mapView: YMKMapView!
  private var yaMkCluster: YMKCluster?
  var selectedPlacemarkMapObject: YMKPlacemarkMapObject?
  var collection: YMKClusterizedPlacemarkCollection?
  
  var selectedPoint: PointCommon?
  var selectedId: Int?
  private var points: [Int: YMKPlacemarkMapObject]?
  
  var onCameraPositionChangedEnd: RCTBubblingEventBlock?
  var onPressMarker: RCTBubblingEventBlock?
  var onMapPressed: RCTBubblingEventBlock?
  
  lazy var mapObjects: YMKMapObjectCollection? = {
    self.mapView?.mapWindow.map.mapObjects
  }()
  
  private let getPointsResult = GetPointsResult()
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
    addListeners()
    configureUserPosition()
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
  
  private func configureUserPosition() {
    let mapKit = YMKMapKit.sharedInstance()
    let userLocationLayer = mapKit.createUserLocationLayer(with: mapView.mapWindow)
    userLocationLayer.setVisibleWithOn(true)
    userLocationLayer.isHeadingEnabled = true
    userLocationLayer.setObjectListenerWith(self)
  }
  
  func setStyleJson(_ styleJson: String) {
    mapView.mapWindow.map.setMapStyleWithStyle(styleJson)
  }

  func setPointsData(_ pointsData: Dictionary<String, String>) {
    guard let markerType = pointsData["markerType"],
          let pointsData = pointsData["pointsJson"],
          let mapType = MapType(rawValue: markerType)
    else { return }
    
    self.map = MapFactory().make(mapType: mapType)
    self.mapType = mapType
    
    switch mapType {
    case .apartments:
      getPoints(modelType: PointApartment.self, pointsData: pointsData)
    case .partners:
      getPoints(modelType: PointPartners.self, pointsData: pointsData)
    }
  }
  
  private func getPoints<T: Decodable>(modelType: T.Type, pointsData: String) {
    switch getPointsResult(responseType: modelType, json: pointsData) {
    case .success(let newPoints):
      guard self.points != nil else {
        self.points = makePlaceMarks(points: newPoints)
        return
      }
      clearSelectedMark()
      map.clearMapObjects(newPoints: newPoints, collection: collection, currentPoints: &points!, mapObjects: mapObjects)
    case .failure(let error):
      debugPrint(error.localizedDescription)
    }
  }
  
  private func makePlaceMarks(points: [Decodable]) -> [Int: YMKPlacemarkMapObject]? {
    guard let collection = mapView?.mapWindow.map.mapObjects.addClusterizedPlacemarkCollection(with: self) else { return nil }
    self.collection = collection

    return map?.makePlaceMarks(points: points, collection: collection, listener: self)
  }

  func setCenter(center: Point, zoom: Float) {
    mapView?.mapWindow.map.move(
      with: YMKCameraPosition.init(target: .init(latitude: center.lat, longitude: center.lon), zoom: zoom, azimuth: 0, tilt: 0),
      animationType: .init(type: .linear, duration: 0.5))
  }

  func resetSelectedId() {
    clearSelectedMark()
  }
  
  func clearSelectedMark() {
    guard let selectedPoint, let selectedPlacemarkMapObject else { return }
    
    guard let image = map?.makeMarkerImage(
      selectedPoint,
      selectedMarker: false
    )
    else { return }
    
    let ancorY: Double? = mapType.map {
      switch $0 {
      case .apartments:
        return 1.0
      case .partners:
        return 0.5
      }
    }
    
    selectedPlacemarkMapObject.setIconWith(image, style: YMKIconStyle(
      anchor: CGPoint(x: 0.0, y: ancorY ?? 0) as NSValue,
      rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil))
    
    self.selectedPoint = nil
    self.selectedPlacemarkMapObject = nil
  }
  
  private func isEven(number: Int) -> Bool {
    return number % 2 == 0
  }
}
