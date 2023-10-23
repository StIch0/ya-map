//
//  YaMapVC.swift
//  YaMapTest
//
//  Created by Pavel on 16.08.2023.
//

import Foundation
import React
import YandexMapsMobile
import Combine
//import Apollo

//@available(iOS 15.0, *)
@objc(YaMapVC)
class YaMapVC: RCTViewManager  {
    
  let mapView = YaMapView()
 
  
  
  override init() {
    super.init()
//    let apolloClient = ApolloClient(url: URL(string: "https://apartshering.com/graphql")!)
//    apolloClient.fetch(query: apartments())
  }
   
  @objc func setCenter(_ reactTag: NSNumber, center: Dictionary<NSString, NSNumber>, zoom: NSNumber) {
    self.bridge.uiManager.addUIBlock { manager, dict in
      let view = dict?[reactTag] as? YaMapView
      let centerPoint: Point = Point(lat: center["lat"] as? Double ?? 0, lon: center["lon"] as? Double ?? 0 )
      view?.setCenter(center: centerPoint, zoom: Float(zoom))
    }
    
  }
  
  @objc func resetSelectedId(_ reactTag: NSNumber) {
    self.bridge.uiManager.addUIBlock { manager, dict in
      let view = dict?[reactTag] as? YaMapView
  
      view?.resetSelectedId()
    }

  }
   
   
  override static func requiresMainQueueSetup() -> Bool {
      return true
    }
  
  
  override func view() -> UIView! {
    return mapView
  }
}
