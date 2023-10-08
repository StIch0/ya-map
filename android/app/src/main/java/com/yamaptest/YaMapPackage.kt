package com.yamaptest

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext

class YaMapPackage : ReactPackage {
    override fun createViewManagers(reactContext: ReactApplicationContext) =
        listOf(YaMapManager(reactContext))

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> = listOf(YaMapModule(reactContext)).toMutableList()
}