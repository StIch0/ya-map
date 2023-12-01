//
//  YaMapView + Listeners.swift
//  YaMapTest
//
//  Created by Александр Григорьев on 06.11.2023.
//

import YandexMapsMobile

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
    guard let pointItem = mapObject.userData as? PointCommon,
          let placeMark = mapObject as? YMKPlacemarkMapObject
    else { return false }
    
    if selectedPoint != nil {
      clearSelectedMark()
    }
    
    guard let image = map?.makeMarkerImage(
      pointItem,
      selectedMarker: true
    )
    else { return false }
    
    let ancorY: Double? = mapType.map {
      switch $0 {
      case .apartments:
        return 1.0
      case .partners:
        return 0.5
      }
    }
    
    placeMark.setIconWith(image, style: YMKIconStyle(
      anchor: CGPoint(x: 0.0, y: ancorY ?? 0) as NSValue,
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
    guard let clusterImage = map?.makeClusterImage(cluster: cluster) else { return }
    
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
