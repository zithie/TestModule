#import <React/RCTBridgeModule.h>
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(TestModule, RCTEventEmitter)

RCT_EXTERN_METHOD(dispatchSimpleEvent)

RCT_EXTERN_METHOD(getPlatformAndVersion:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

@end
