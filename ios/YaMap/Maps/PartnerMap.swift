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
      }

      enum Cluster {
        
      }
    }
    
    static let markerFont = UIFont.boldSystemFont(ofSize: 64)
    
    enum MarkerPadding {
      static let vertical: CGFloat = 16
      static let horizontal: CGFloat = 50
      static let proportion: CGFloat = 0.47
    }
    
  }
  
  func makeMarkerImage(_ pointItem: PointItem, selectedMarker: Bool) -> UIImage? {
    guard let pointName = pointItem.name else { return nil }

    let textMarker = componentTextMarker(name: pointName)
    let firstLineText = configureTextMarker(name: textMarker.firstLine, selected: selectedMarker)
    let secondaryLineText = textMarker.secondaryLine.map { configureTextMarker(name: $0, selected: selectedMarker)}
    
    let scale = UIScreen.main.scale * 0.2
    let maxWidtSubstrateImage = 94 - Constants.MarkerPadding.horizontal * 2
    
    let circleImage = Constants.Image.Marker.circle!
    let substrateImage = Constants.Image.Marker.substrate!
    
    let widthTextMaker = secondaryLineText != nil ? firstLineText.text.width() : maxWidtSubstrateImage
    let widthSubstrateImage = widthTextMaker + Constants.MarkerPadding.horizontal * 2
    
    let newImageSize = CGSize(
      width: circleImage.size.width / 2  + widthSubstrateImage,
      height: substrateImage.size.height
    )
    
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
    
    return UIImage()
    
  }
  
  private func componentTextMarker(name: String) -> (firstLine: String, secondaryLine: String?) {
    let maxWidth: CGFloat = 94.0 - Constants.MarkerPadding.horizontal * 2
    let widthName = name.width()

    guard widthName > maxWidth else {
      return (firstLine: name, secondaryLine: nil)
    }
    
    let names = name.components(separatedBy: " ")
    
    var firstLine: String = ""
    var secondaryLine: String = ""
    var currentWidth: CGFloat = 0.0
    
    names.forEach { text in
      currentWidth += text.width()
      
      if currentWidth < maxWidth {
        firstLine += text
      } else {
        if currentWidth / 2 > maxWidth {
          let currentWidthNotLastText = currentWidth / 2 - text.width()
            addThreeDots(
              text: text,
              currentWidth: currentWidthNotLastText,
              maxWidth: maxWidth,
              completion: { newTextWithDots in
                secondaryLine += newTextWithDots
              })
          return
        }
        secondaryLine += text
      }
    }
    
    guard !secondaryLine.isEmpty else {
      return (firstLine: firstLine, secondaryLine: secondaryLine)
    }
    
    return (firstLine: firstLine, secondaryLine: secondaryLine)
  }

  private func addThreeDots(
    text: String,
    currentWidth: CGFloat,
    maxWidth: CGFloat,
    completion: ((String) -> Void)
  ) {
    let threeDots = "..."
    let newText = text.dropLast()
    
    if ((newText + threeDots).width() + currentWidth) > maxWidth {
      addThreeDots(text: String(newText), currentWidth: currentWidth, maxWidth: maxWidth, completion: completion)
    } else {
      completion(newText + threeDots)
    }
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
    return UIImage()
  }
  
}
