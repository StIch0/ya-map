package com.yamaptest

import android.Manifest
import android.content.pm.PackageManager
import android.os.Looper
import androidx.core.app.ActivityCompat
import com.google.android.gms.location.LocationCallback
import com.google.android.gms.location.LocationRequest
import com.google.android.gms.location.LocationResult
import com.google.android.gms.location.LocationServices
import com.yandex.mapkit.geometry.Point
import com.yandex.mapkit.map.CameraPosition
import com.yandex.mapkit.map.PlacemarkMapObject
import com.yandex.runtime.image.ImageProvider

internal class MapVCController(yaMapVC: YaMapVC) {
    private val context = yaMapVC.context
    private val id = yaMapVC.id
    private val map = yaMapVC.map

    private var userLocationMarker: PlacemarkMapObject? = null

    private val fusedLocationClient = LocationServices.getFusedLocationProviderClient(context)

    private val locationRequest = LocationRequest.Builder(60000)
        .setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY)
        .build()
    private val locationCallback = object : LocationCallback() {
        override fun onLocationResult(locationResult: LocationResult) {
            for (location in locationResult.locations) {
                updateUserLocationIcon(Point(location.latitude, location.longitude))
            }
        }
    }

    init {
        yaMapVC.onStart()
        map.addCameraListener(yaMapVC)

        if (ActivityCompat.checkSelfPermission(
                context,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                context,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            fusedLocationClient.lastLocation.addOnSuccessListener {
                updateUserLocationIcon(Point(it.latitude, it.longitude))
            }
        }
        fusedLocationClient.requestLocationUpdates(
            locationRequest,
            locationCallback,
            Looper.getMainLooper()
        )
    }

    fun setStyle(style: String) {
        map.setMapStyle(style)
    }

    fun setCenter(lat: Double, lon: Double, zoom: Float) {
        val centerPosition = Point(lat, lon)
        val pos = CameraPosition(
            centerPosition,
            zoom,
            map.cameraPosition.azimuth,
            map.cameraPosition.tilt
        )
        map.move(pos)
    }

    private fun updateUserLocationIcon(point: Point) {
        userLocationMarker?.let {
            map.mapObjects.remove(it)
        }
        userLocationMarker = map.mapObjects.addPlacemark(point).apply {
            setIcon(ImageProvider.fromResource(context, R.mipmap.me))
        }
    }

    fun onMapDestroy() {
        fusedLocationClient.removeLocationUpdates(locationCallback)
    }
}