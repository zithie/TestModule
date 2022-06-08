package com.testmodule

import android.os.Handler
import android.os.Looper
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule

class TestModuleModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  private val _mainHandler = Handler(Looper.getMainLooper())
  private val _reactContext = reactContext
  var secondsCount = 0

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


  @ReactMethod
  fun addListener(eventName: String) {
    // Keep: Required for RN built in Event Emitter Calls.
  }

  @ReactMethod
  fun removeListeners(count: Int) {
    // Keep: Required for RN built in Event Emitter Calls.
  }

  @ReactMethod
  fun dispatchEventEverySecond() {
    _mainHandler.post(object : Runnable {
      override fun run() {
        secondsCount += 1
        val event = Arguments.createMap()
        event.putInt("count", secondsCount)
        sendEvent(
          _reactContext,
          "onTimeUpdated",
          event
        )
        _mainHandler.postDelayed(this, 1000)
      }
    })
  }

  private fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(eventName, params)
  }

  override fun getName(): String {
    return "TestModule"
  }
}
