//
//  PartnerMap.swift
//  YaMapTest
//
//  Created by Александр Григорьев on 29.10.2023.
//

import YandexMapsMobile

struct PartnerMap: Map {
  private enum Constants {
    
    enum Image {
      
      enum Marker {
        static let circle = UIImage(named: "partner-marker-circle")
        static let substrate = UIImage(named: "partner-marker-substrate")
        
        static let selectedCircle = UIImage(named: "partner-marker-circle-selected")
        static let selectedSubstrate = UIImage(named: "partner-marker-substrate-selected")
        static let maxWidth: CGFloat = 94
        static let maxWidthText: CGFloat = 72
      }
      static let clusterCircle = UIImage(named: "partner-cluster")
    }
    static let threeDots: String = "..."
    static let markerFont = UIFont.boldSystemFont(ofSize: 12)
    static let clusterCountFont = UIFont.boldSystemFont(ofSize: 13)
    
    enum MarkerPadding {
      static let vertical: CGFloat = 2
      static let horizontal: CGFloat = 2
      static let proportion: CGFloat = 0.47
      static let leftPadding: CGFloat = 10
      static let rigtPadding: CGFloat = 12
    }
  }
  
  
  func filterMapObjects(
    newPoints: [Decodable],
    collection: YMKClusterizedPlacemarkCollection?,
    currentPoints: inout [Int: YMKPlacemarkMapObject],
    mapObjects: YMKMapObjectCollection?,
    listener: YMKMapObjectTapListener
  ) -> [Int: YMKPlacemarkMapObject]? {
    guard
      let newPoints = newPoints as? [PointPartners],
      let collection
    else { return nil }
    
    let objectsSet = Set(newPoints.map { $0.id })
    
    var placemarksToRemove = [YMKPlacemarkMapObject]()
    var newPlaceMarks = [PointPartners]()

    for point in newPoints {
      if currentPoints[point.id] == nil {
         newPlaceMarks.append(point)
      }
    }
    
    for (id, placemark) in currentPoints {
      guard let userData = placemark.userData as? PointPartners else { continue }
      
      if !objectsSet.contains(userData.id) {
        placemarksToRemove.append(placemark)
        currentPoints.removeValue(forKey: id)
      }
    }
    
    for placemark in placemarksToRemove {
      collection.remove(with: placemark)
    }
    
    guard !newPlaceMarks.isEmpty else { return nil }
    
    return self.makePlaceMarks(points: newPlaceMarks, collection: collection, listener: listener)
  }
  
  func makePlaceMarks(points: [Decodable], collection: YMKClusterizedPlacemarkCollection, listener:  YMKMapObjectTapListener) -> [Int: YMKPlacemarkMapObject]?  {
    guard let points = points as? [PointPartners] else { return nil }
    
    var collectionPlaceMarks = [Int: YMKPlacemarkMapObject]()
    
    points.forEach {
      guard let marker = makeMarkerImage($0, selectedMarker: false) else { return }
      
      let placemark = collection.addPlacemark(
        with: YMKPoint(
          latitude: $0.pos.lat,
          longitude: $0.pos.lon
        ),
        image: marker,
        style: YMKIconStyle(
          anchor: CGPoint(x: 0.0, y: 0.5) as NSValue,
          rotationType: nil, zIndex: nil, flat: nil, visible: nil, scale: nil, tappableArea: nil)
      )
      placemark.userData = $0
      placemark.addTapListener(with: listener)
      collectionPlaceMarks[$0.id] = placemark
    }
    collection.clusterPlacemarks(withClusterRadius: 35, minZoom: 20)
    
    return collectionPlaceMarks
  }
  
  func makeMarkerImage(_ pointItem: Decodable, selectedMarker: Bool) -> UIImage? {
    guard let point = pointItem as? PointPartners else { return nil }
    
    let scale = UIScreen.main.scale
    let textMarker = trimmingTextMarker(name: point.name)
    let firstLineText = configureTextMarker(name: textMarker.firstLine, selected: selectedMarker)
    let secondaryLineText = textMarker.secondaryLine.map { configureTextMarker(name: $0, selected: selectedMarker)}
    let circleImage = selectedMarker ? Constants.Image.Marker.selectedCircle! : Constants.Image.Marker.circle!
    let substrateImage = selectedMarker ?  Constants.Image.Marker.selectedSubstrate! : Constants.Image.Marker.substrate!
    let maxWidthSubstrate = Constants.Image.Marker.maxWidth
    
    let widthSubstrateImage: CGFloat = {
      if firstLineText.size.width < maxWidthSubstrate,
          let secondaryLineText,
          secondaryLineText.size.width < maxWidthSubstrate {
        
        if firstLineText.size.width <= secondaryLineText.size.width {
          return secondaryLineText.size.width
        } else {
          return firstLineText.size.width
        }
        
      } else if secondaryLineText == nil {
        if firstLineText.size.width < maxWidthSubstrate {
          return firstLineText.size.width
        } else {
          return maxWidthSubstrate
        }
      }
      return maxWidthSubstrate
    }() + Constants.MarkerPadding.leftPadding +
    Constants.MarkerPadding.rigtPadding
    
    let heightSubstrateImage: CGFloat = {
      guard let secondaryLineText else {
        return firstLineText.size.height + 10
      }
     return secondaryLineText.size.height + firstLineText.size.height + 2
    }() + Constants.MarkerPadding.vertical * 2
    
    let newImageSize = CGSize(
      width: circleImage.size.width / 2  + widthSubstrateImage,
      height: heightSubstrateImage.rounded()
    )

    UIGraphicsBeginImageContextWithOptions(newImageSize, false,  scale)
    
    substrateImage.draw(
      in: CGRect(origin: CGPoint(
        x: circleImage.size.width / 2,
        y: .zero),
      size: CGSize(
        width: widthSubstrateImage,
        height: heightSubstrateImage
      )))
    
    circleImage.draw(in: CGRect(
      origin: CGPoint(
        x: .zero,
        y: (heightSubstrateImage / 2) - (circleImage.size.height / 2)),
      size: circleImage.size)
    )
    
    let firstLinePointY = {
      guard secondaryLineText != nil else {
        return ((heightSubstrateImage / 2) - (firstLineText.size.height / 2)).rounded()
      }
      return (((heightSubstrateImage / 2) - (firstLineText.size.height / 2)) / 2).rounded() - 2
    }()
    
    let firstLinePoint = CGPoint(
      x: circleImage.size.width / 2 + Constants.MarkerPadding.leftPadding,
      y: firstLinePointY
    )
    
    firstLineText.text.draw(in: CGRect(
      origin: firstLinePoint,
      size: firstLineText.size
    ), withAttributes: firstLineText.attributes)

    guard let secondaryLineText else {
      let newImage = UIGraphicsGetImageFromCurrentImageContext()
      UIGraphicsEndImageContext()
      
      let imageWithShadow = newImage?.withShadow(blur: 2, color: .lightGray)
      return imageWithShadow!
    }
    
    let secondaryLinePoint = CGPoint(
      x: circleImage.size.width / 2 + Constants.MarkerPadding.leftPadding,
      y: (((heightSubstrateImage / 2) - (secondaryLineText.size.height / 2)) * 2).rounded() - 2
    )
    
    secondaryLineText.text.draw(in: CGRect(
      origin: secondaryLinePoint,
      size: secondaryLineText.size
    ), withAttributes: secondaryLineText.attributes)
    
    let newImage = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    
    let imageWithShadow = newImage?.withShadow(blur: 2, color: .lightGray)
    return imageWithShadow!
  }
  
  private func trimmingTextMarker(name: String) -> (firstLine: String, secondaryLine: String?) {
    let textFontAttributes: [NSAttributedString.Key: Any] = [
      .font: Constants.markerFont
    ]
    let maxWidth: CGFloat = Constants.Image.Marker.maxWidthText
    let widthName = name.width(textFontAttributes)
    
    guard widthName > maxWidth else {
      return (firstLine: name, secondaryLine: nil)
    }
    
    let nameCommponents = name.components(separatedBy: " ")
    var firstLine: String = ""
    var secondaryLine: String = ""
    var currentWidth: CGFloat = 0.0
    
    for (i, text) in nameCommponents.enumerated() {
      currentWidth += text.width(textFontAttributes)
      
      if i == 0, currentWidth > maxWidth, nameCommponents.count >= 1 {
        let firstLineWidth = firstLine.width(textFontAttributes)
        
        let newTextWithDots = addThreeDots(
            text: text,
            currentWidth: firstLineWidth,
            maxWidth: maxWidth
         )
        firstLine += (" " + newTextWithDots)
        break
      }
      if currentWidth < maxWidth {
        firstLine += (" " + text)
      } else {
        let secondaryWidth = secondaryLine.width(textFontAttributes)
        
        if currentWidth / 2 > maxWidth {
          let newTextWithDots = addThreeDots(
            text: text,
            currentWidth: secondaryWidth,
            maxWidth: maxWidth
          )
          if newTextWithDots == Constants.threeDots {
            secondaryLine += Constants.threeDots
            break
          }
          secondaryLine += (" " + newTextWithDots)
          break
        }
        secondaryLine += (" " + text)
      }
    }
    
    let newFirstLine = String(firstLine.dropFirst())
    guard !secondaryLine.isEmpty else {
      return (firstLine: newFirstLine, secondaryLine: nil)
    }
    let newSecondaryLine = String(secondaryLine.dropFirst())
    return (firstLine: newFirstLine, secondaryLine: newSecondaryLine)
  }

  private func addThreeDots(
    text: String,
    currentWidth: CGFloat,
    maxWidth: CGFloat
  ) -> String {
    let textFontAttributes: [NSAttributedString.Key: Any] = [
      .font: Constants.markerFont
    ]
    let threeDots = Constants.threeDots
    let widthText = text.width(textFontAttributes)
    let widthDots = threeDots.width(textFontAttributes)
    let widthForDeled = currentWidth +  widthText + widthDots - maxWidth
    let widthOneChar = widthText / CGFloat(text.count)
    let contCharForDeleted = widthForDeled / widthOneChar
    let deletedCount = Int(contCharForDeleted.rounded())
    let countText = Int(text.count)
    
    guard deletedCount < countText else {
      return threeDots
    }
    let newText = text.dropLast(deletedCount)
    return newText + threeDots
  }
  
  private func configureTextMarker(
    name: String,
    selected: Bool = false
  ) -> (text: String, size: CGSize, attributes:[NSAttributedString.Key: Any]) {
    let text = name
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
  
  func makeClusterImage(cluster: YMKCluster) -> UIImage {
    let clusterSize = cluster.size
    let scale = UIScreen.main.scale
    let circleImage = Constants.Image.clusterCircle!
    let countText = String(clusterSize)
    let countTextAttributes: [NSAttributedString.Key: Any] = [
      .foregroundColor: UIColor.white,
      .font: UIFont.boldSystemFont(ofSize: 11)
    ]
    let countTextSize = countText.size(withAttributes: countTextAttributes)
        
    let newImageSize = CGSize(
      width: circleImage.size.width,
      height: circleImage.size.height
    )
    
    UIGraphicsBeginImageContextWithOptions(newImageSize, false, scale)
    
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
  
    let newImage = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    return newImage!
  }
  
}
