package com.yamaptest

import android.util.Log
import android.view.View
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.yandex.mapkit.map.CameraPosition


class YaMapManager(
    private val callerContext: ReactApplicationContext
) : SimpleViewManager<YaMapVC>() {
    override fun getName() = "YaMapVC"

    override fun createViewInstance(context: ThemedReactContext): YaMapVC {
        return YaMapVC(context)
    }


    @ReactProp(name = "pointsJson")
    fun setPointsJson(view: View?, points: String?) {
        Log.e("Batman", "points")
        if (points != null) {
            (view as? YaMapVC)?.setPointsJson(points)
        }
    }

    @ReactProp(name = "zoom")
    fun setZoom(view: View?, zoom: Int?) {
        Log.e("Batman", "setZoom")
        if (zoom != null) {
            (view as? YaMapVC)?.setZoom(zoom)
        }
    }

//    @ReactMethod()
//    fun setCenter(view: YaMapVC, center: ReadableMap, zoom: Int) {
//        Log.e("Batman", "setCenter")
//        view.setCenter(
//            center.getDouble("lat"),
//            center.getDouble("lon"),
//            zoom.toFloat()
//        )
//    }

    override fun getCommandsMap(): MutableMap<String, Int> {
        Log.e("Batman", "getCommandsMap")
        return mutableMapOf("setCenter" to 1)
    }

    override fun receiveCommand(view: YaMapVC, commandId: String, args: ReadableArray?) {
       // super.receiveCommand(view, commandId, args)
        Log.e("Batman", "receiveCommand")
        if (commandId == "setCenter" && args != null) {
//            val center = args.getMap(0)
//            view.setCenter(
//                center.getDouble("lat"),
//                center.getDouble("lon"),
//                args.getDouble(1).toFloat()
//            )
        }
    }
}