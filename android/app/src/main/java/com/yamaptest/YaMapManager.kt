package com.yamaptest

import android.view.View
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp


class YaMapManager(
    private val callerContext: ReactApplicationContext
) : SimpleViewManager<YaMapVC>() {
    override fun getName() = "YaMapVC"

    override fun createViewInstance(context: ThemedReactContext): YaMapVC {
        return YaMapVC(context)
    }


    @ReactProp(name = "pointsJson")
    fun setPointsJson(view: View?, points: String?) {
        if (points != null) {
            (view as? YaMapVC)?.setPointsJson(points)
        }
    }

    @ReactProp(name = "zoom")
    fun setZoom(view: View?, zoom: Int?) {
        if (zoom != null) {
            (view as? YaMapVC)?.setZoom(zoom.toFloat())
        }
    }

    override fun getCommandsMap(): MutableMap<String, Int> {
        return mutableMapOf("setCenter" to 1)
    }

    override fun receiveCommand(view: YaMapVC, commandId: String, args: ReadableArray?) {
        super.receiveCommand(view, commandId, args)
        if (commandId == "setCenter" && args != null) {
            val center = args.getMap(0)
            view.setCenter(
                center.getDouble("lat"),
                center.getDouble("lon"),
                args.getDouble(1).toFloat()
            )
        }
    }

    override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any> {
        return mapOf(
            "onPressMarker" to mapOf(
                "phasedRegistrationNames" to mapOf(
                    "bubbled" to "onPressMarker"
                )
            ),
            "onCameraPositionChangedEnd" to mapOf(
                "phasedRegistrationNames" to mapOf(
                    "bubbled" to "onCameraPositionChangedEnd"
                )
            ),
            "onMapPressed" to mapOf(
                "phasedRegistrationNames" to mapOf(
                    "bubbled" to "onMapPressed"
                )
            ),
        )
    }
}