import Foundation;
import UIKit;

struct TestClass {
    let platform: String
    let version: String
}

@objc(TestModule)
class TestModule: RCTEventEmitter {
    
    private var _info = TestClass(platform: "iOS", version: UIDevice.current.systemVersion)
    
    @objc
    func dispatchSimpleEvent() {
      sendEvent(withName: "simple-event", body: ["info": String(format: "Platform: %@, Version: %@", _info.platform, _info.version)])
    }

    override func supportedEvents() -> [String]! {
      return ["simple-event"]
    }

    @objc(getPlatformAndVersion:withRejecter:)
    func getPlatformAndVersion(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(String(format: "Platform: %@, Version: %@", _info.platform, _info.version))
    }
}
