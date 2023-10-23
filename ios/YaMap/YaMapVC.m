//
//  YaMapVC.m
//  YaMapTest
//
//  Created by Pavel on 16.08.2023.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

#import <React/RCTViewManager.h>
 
@interface RCT_EXTERN_MODULE(YaMapVC, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(pointsJson, NSString)
RCT_EXPORT_VIEW_PROPERTY(styleJson, NSString)
RCT_EXPORT_VIEW_PROPERTY(zoom, NSNumber)
RCT_EXPORT_VIEW_PROPERTY(onPressMarker, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onMapPressed, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onCameraPositionChangedEnd, RCTBubblingEventBlock)
RCT_EXTERN_METHOD(setCenter:(nonnull NSNumber *)reactTag center:(NSDictionary *_Nonnull)center zoom:(NSNumber *_Nonnull)zoom)
RCT_EXTERN_METHOD(resetSelectedId:(nonnull NSNumber *)reactTag)
@end
