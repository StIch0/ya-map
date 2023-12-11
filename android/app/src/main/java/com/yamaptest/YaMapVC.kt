package com.yamaptest

import android.content.Context
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.yandex.mapkit.MapKitFactory
import com.yandex.mapkit.map.CameraListener
import com.yandex.mapkit.map.CameraPosition
import com.yandex.mapkit.map.CameraUpdateReason
import com.yandex.mapkit.map.Map
import com.yandex.mapkit.mapview.MapView

class YaMapVC(context: Context) : MapView(context), CameraListener {
    private val mapController = MapVCController(this)
    private var mapVC: MapVCInterface? = null

    override fun onCameraPositionChanged(
        map: Map,
        cameraPosition: CameraPosition,
        cameraUpdateReason: CameraUpdateReason,
        finished: Boolean
    ) {
        if (finished && cameraUpdateReason == CameraUpdateReason.GESTURES) {
            val region = map.visibleRegion
            val data = WritableNativeMap().apply {
                putMap("center", WritableNativeMap().apply {
                    putDouble("lat", cameraPosition.target.latitude)
                    putDouble("lon", cameraPosition.target.longitude)
                }
                )
                putDouble("zoom", cameraPosition.zoom.toDouble())
                putMap("visibleRegion", WritableNativeMap().apply {
                    putMap("topRight", WritableNativeMap().apply {
                        putDouble("lat", region.topRight.latitude)
                        putDouble("lon", region.topRight.longitude)
                    }
                    )
                    putMap("topLeft", WritableNativeMap().apply {
                        putDouble("lat", region.topLeft.latitude)
                        putDouble("lon", region.topLeft.longitude)
                    }
                    )
                    putMap("bottomRight", WritableNativeMap().apply {
                        putDouble("lat", region.bottomRight.latitude)
                        putDouble("lon", region.bottomRight.longitude)
                    }
                    )
                    putMap("bottomLeft", WritableNativeMap().apply {
                        putDouble("lat", region.bottomLeft.latitude)
                        putDouble("lon", region.bottomLeft.longitude)
                    }
                    )
                }
                )
            }
            val reactContext = context as ReactContext
            reactContext
                .getJSModule(RCTEventEmitter::class.java)
                .receiveEvent(id, "onCameraPositionChangedEnd", data)
        }
    }

    fun setStyle(style: String) {
        mapController.setStyle(style)
    }

    fun setCenter(lat: Double, lon: Double, zoom: Float) {
        mapController.setCenter(lat, lon, zoom)
    }

    fun setPointsData(points: ReadableMap) {
        val type = points.getString("markerType")
        if (mapVC == null) {
            mapVC = when (type) {
                "apartments" -> ApartmentMapVC(this)
                "partners" -> PartnersMapVC(this)
                else -> null
            }
        }
        points.getString("pointsJson")?.let { mapVC?.setPointsJson(it) }
    }

    fun resetSelectedId() {
        mapVC?.resetSelectedId()
    }

    fun onMapDestroy() {
        mapController.onMapDestroy()
        onStop()
        MapKitFactory.getInstance().onStop()
    }
}