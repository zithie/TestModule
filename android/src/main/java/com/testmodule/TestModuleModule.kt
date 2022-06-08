package com.testmodule

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class TestModuleModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "TestModule"
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun multiply(a: Int, b: Int, promise: Promise) {

    promise.resolve(a * b)

  }

  @ReactMethod
  fun getPlatformAndVersion(promise: Promise) {
    val version = android.os.Build.VERSION.SDK_INT
    promise.resolve("Platform is Android and version is $version")
  }


}
