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
RCT_EXPORT_VIEW_PROPERTY(onCameraPositionChangedEnd, RCTBubblingEventBlock)
RCT_EXTERN_METHOD(setCenter:(nonnull NSNumber *)reactTag center:(NSDictionary *_Nonnull)center zoom:(NSNumber *_Nonnull)zoom)
@end
