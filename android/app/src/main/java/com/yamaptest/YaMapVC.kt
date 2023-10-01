package com.yamaptest

import android.R.attr
import android.R.attr.duration
import android.content.Context
import android.widget.Toast
import com.yandex.mapkit.geometry.Point
import com.yandex.mapkit.map.CameraListener
import com.yandex.mapkit.map.CameraPosition
import com.yandex.mapkit.map.CameraUpdateReason
import com.yandex.mapkit.map.Map
import com.yandex.mapkit.mapview.MapView


class YaMapVC(context: Context) : MapView(context), CameraListener {

    init {
        map.addCameraListener(this);
    }

    override fun onCameraPositionChanged(
        map: Map,
        cameraPosition: CameraPosition,
        cameraUpdateReason: CameraUpdateReason,
        p3: Boolean
    ) {

    }

    fun setZoom(zoom: Int) {
//        map.move(
//            CameraPosition(
//                map.cameraPosition.target,
//                zoom.toFloat(),
//                map.cameraPosition.azimuth,
//                map.cameraPosition.tilt
//            )
//        )
    }

    fun setCenter(lat: Double, lon: Double, zoom: Float) {
        Toast.makeText(context, "zoom", Toast.LENGTH_SHORT).show()
        val centerPosition = Point(lat, lon)
        val pos = CameraPosition(
            centerPosition,
            zoom,
            map.cameraPosition.azimuth,
            map.cameraPosition.tilt
        )
        map.move(pos)
    }

    fun setPointsJson(points: String) {

    }
}