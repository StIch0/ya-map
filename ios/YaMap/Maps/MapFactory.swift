//
//  MapFactory.swift
//  YaMapTest
//
//  Created by Александр Григорьев on 29.10.2023.
//

import YandexMapsMobile

struct MapFactory {
  
  enum MapType: String {
    case apartments = "apartments"
    case partners = "partners"
  }
  
  func makeMap(mapType: String) -> Map? {
    guard let map = MapType(rawValue: mapType) else {
      debugPrint("ОШИБКА - Карта не создана в методе \(#function)")
      return nil
    }
    switch map {
    case .apartments:
      return ApartmentMap()
    case .partners:
      return PartnerMap()
    }
  }
}

protocol Map {
  func makeMarkerImage(_ pointItem: PointItem, selectedMarker: Bool) -> UIImage?
  func makeClusterImage(cluster: YMKCluster) -> UIImage
}

