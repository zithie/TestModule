import Foundation;
import UIKit;

struct TestClass {
    let platform: String
    let version: String
}

@objc(TestModule)
class TestModule: NSObject {
    
    var info = TestClass(platform: "iOS", version: UIDevice.current.systemVersion)

    @objc(getPlatformAndVersion:withRejecter:)
    func getPlatformAndVersion(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(String(format: "Platform: %@, Version: %@", info.platform, info.version))
    }
}
