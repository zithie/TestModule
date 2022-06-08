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

class TestModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  private val _reactContext = reactContext
  private val _info = TestClass("Android", android.os.Build.VERSION.SDK_INT.toString())

  @ReactMethod
  fun getPlatformAndVersion(promise: Promise) {
    promise.resolve("Platform: ${_info.platform}, Version: ${_info.version}")
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
  fun dispatchSimpleEvent() {
    val params = Arguments.createMap().apply {
      putString("info", "Platform: ${_info.platform}, Version: ${_info.version}")
    }
    sendEvent(_reactContext, "simple-event", params)
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
