//
//  ApartmentMap.swift
//  YaMapTest
//
//  Created by Александр Григорьев on 29.10.2023.
//

import YandexMapsMobile

struct ApartmentMap: Map {
  private enum Constants {
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
  
  func makePlaceMarks(
    points: [Decodable],
    collection: YMKClusterizedPlacemarkCollection,
    listener: YMKMapObjectTapListener
  ) {
    guard let points = points as? [PointApartment] else { return }
    
    points.forEach {
      guard let marker = makeMarkerImage($0, selectedMarker: false) else { return }
      
      let placemark = collection.addPlacemark(
        with: YMKPoint(
          latitude: $0.pos.lat,
          longitude: $0.pos.lon
        ),
        image: marker,
        style: YMKIconStyle(
          anchor: CGPoint(x: 0.0, y: 1.0) as NSValue,
          rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil)
      )
      
      placemark.userData = $0
      placemark.addTapListener(with: listener)
    }
    
    collection.clusterPlacemarks(withClusterRadius: 35, minZoom: 20)
  }
  
  func makeMarkerImage(_ pointItem: Decodable, selectedMarker: Bool) -> UIImage? {
    guard let pointItem = pointItem as? PointApartment else { return nil }
    
    guard
      let image = configureImageMarker(
        pointItem: pointItem,
        selectedMarker: selectedMarker
      )
    else { return nil }
    
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
  
  private func calculatePrice(pointItem: PointApartment) -> Int {
    let tariff = pointItem.apartTariffs.first { $0.code == "sum" }
    return tariff?.priceFewDays ?? 0
  }
  
  private func configurePriceText(
    price: Int,
    selected: Bool = false
  ) -> (text: String, size: CGSize, attributes:[NSAttributedString.Key: Any]) {
    
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
    pointItem: Decodable,
    selectedMarker: Bool
  ) -> UIImage? {
    guard let pointItem = pointItem as? PointApartment else { return nil }
    
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
  
  func makeClusterImage(cluster: YMKCluster) -> UIImage {
    let clusterSize = cluster.size
    let price = clusterMinPrice(cluster: cluster)
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
  
  private func clusterMinPrice(cluster: YMKCluster) -> Int {
    let pointItems: [Int] = cluster.placemarks.compactMap {
      guard let point = $0.userData as? PointApartment else { return nil }
      return calculatePrice(pointItem: point)
    }
    
    let sortedPice = pointItems.lazy.sorted { $1 > $0 }
    let minPrice = sortedPice.first ?? 0
    
    return minPrice
  }
}
