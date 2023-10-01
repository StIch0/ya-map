package com.yamaptest

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.JavaScriptModule
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class YaMapPackage : ReactPackage {
    override fun createViewManagers(reactContext: ReactApplicationContext) =
        listOf(YaMapManager(reactContext))

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> = listOf(YaMapModule(reactContext)).toMutableList()

    fun createJSModules(): List<Class<out JavaScriptModule?>> {
        return ArrayList()
    }
}