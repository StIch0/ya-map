//
//  MapFactory.swift
//  YaMapTest
//
//  Created by Александр Григорьев on 29.10.2023.
//

import YandexMapsMobile

protocol Map {
  func makeMarkerImage(_ pointItem: Decodable, selectedMarker: Bool) -> UIImage?
  func makeClusterImage(cluster: YMKCluster) -> UIImage
  
  func makePlaceMarks(
    points: [Decodable],
    collection: YMKClusterizedPlacemarkCollection,
    listener: YMKMapObjectTapListener) -> [Int: YMKPlacemarkMapObject]?
  
  func clearMapObjects(
    newPoints: [Decodable],
    collection: YMKClusterizedPlacemarkCollection?,
    currentPoints: inout [Int: YMKPlacemarkMapObject],
    mapObjects: YMKMapObjectCollection?
  )
}

enum MapType: String {
  case apartments = "apartments"
  case partners = "partners"
}

struct MapFactory {

  func make(mapType: MapType) -> Map {
    switch mapType {
    case .apartments:
      return ApartmentMap()
    case .partners:
      return PartnerMap()
    }
  }
}
