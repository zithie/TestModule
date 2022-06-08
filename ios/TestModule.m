#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TestModule, NSObject)

RCT_EXTERN_METHOD(getPlatformAndVersion:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

@end
