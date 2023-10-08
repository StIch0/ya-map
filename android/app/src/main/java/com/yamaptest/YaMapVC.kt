package com.yamaptest

import android.content.Context
import android.util.Log
import android.widget.TextView
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.google.gson.Gson
import com.yandex.mapkit.MapKitFactory
import com.yandex.mapkit.geometry.Point
import com.yandex.mapkit.layers.ObjectEvent
import com.yandex.mapkit.map.CameraListener
import com.yandex.mapkit.map.CameraPosition
import com.yandex.mapkit.map.CameraUpdateReason
import com.yandex.mapkit.map.ClusterListener
import com.yandex.mapkit.map.ClusterTapListener
import com.yandex.mapkit.map.IconStyle
import com.yandex.mapkit.map.InputListener
import com.yandex.mapkit.map.Map
import com.yandex.mapkit.map.MapLoadStatistics
import com.yandex.mapkit.map.MapLoadedListener
import com.yandex.mapkit.map.MapObjectCollection
import com.yandex.mapkit.map.MapObjectTapListener
import com.yandex.mapkit.map.PlacemarkMapObject
import com.yandex.mapkit.map.TextStyle
import com.yandex.mapkit.mapview.MapView
import com.yandex.mapkit.user_location.UserLocationLayer
import com.yandex.mapkit.user_location.UserLocationObjectListener
import com.yandex.mapkit.user_location.UserLocationView
import com.yandex.runtime.image.ImageProvider
import com.yandex.runtime.ui_view.ViewProvider
import java.text.NumberFormat
import java.util.Locale


class YaMapVC(context: Context) : MapView(context), CameraListener, MapLoadedListener {
    private var pointList: YaMapPointModel = YaMapPointModel()
    private var mapObjectCollection: MapObjectCollection
    private var locationPlace: PlacemarkMapObject? = null
    private var userLocationLayer: UserLocationLayer
    private val moneyFormatter = NumberFormat.getCurrencyInstance(Locale("RU", "RU"))
    private var lastClickedMarker: PlacemarkMapObject? = null

    private val placemarkTapListener = MapObjectTapListener { mapObject, point ->
        (mapObject.userData as? YaMapPointModelItem)?.let {
            val map = WritableNativeMap()
            map.putInt("id", it.id)
            val reactContext = context as ReactContext
            reactContext
                .getJSModule(RCTEventEmitter::class.java)
                .receiveEvent(id, "onPressMarker", map)
        }
        (mapObject as? PlacemarkMapObject)?.let {
            lastClickedMarker?.setIcon(
                ImageProvider.fromResource(context, R.drawable.pin),
                IconStyle().apply { scale = 0.4f })
            lastClickedMarker = it
            it.setIcon(
                ImageProvider.fromResource(context, R.drawable.clicked_pin),
                IconStyle().apply { scale = 0.4f })
        }
        true
    }

    private val inputListener = object : InputListener {
        override fun onMapTap(map: Map, point: Point) {
            lastClickedMarker?.setIcon(
                ImageProvider.fromResource(context, R.drawable.pin),
                IconStyle().apply { scale = 0.4f })
            lastClickedMarker = null
            val reactContext = context as ReactContext
            reactContext
                .getJSModule(RCTEventEmitter::class.java)
                .receiveEvent(id, "onMapPressed", WritableNativeMap())
        }

        override fun onMapLongTap(map: Map, point: Point) {}
    }

    private val userLocationObjectListener = object : UserLocationObjectListener {
        override fun onObjectAdded(userLocationView: UserLocationView) {
            updateUserLocationIcon(userLocationView)
        }

        override fun onObjectRemoved(p0: UserLocationView) {
        }

        override fun onObjectUpdated(userLocationView: UserLocationView, p1: ObjectEvent) {
            updateUserLocationIcon(userLocationView)
        }
    }

    private val clusterListener = ClusterListener { cluster ->
        cluster.appearance.setView(
            ViewProvider(
                TextView(context).apply {
                    width = 100
                    height = 100
                    setBackgroundColor(context.resources.getColor(android.R.color.holo_green_light))
                    text = "${cluster.placemarks.size}"
                }
            )
        )
        cluster.addClusterTapListener(clusterTapListener)
    }

    private val clusterTapListener = ClusterTapListener {
        setZoom(map.cameraPosition.zoom + 2)
        true
    }
    private val clusterizedCollection =
        map.mapObjects.addClusterizedPlacemarkCollection(clusterListener)

    init {
        map.addCameraListener(this)
        map.addInputListener(inputListener)
        mapObjectCollection = map.mapObjects.addCollection()
        val mapKit = MapKitFactory.getInstance()

        userLocationLayer = mapKit.createUserLocationLayer(mapWindow)
        userLocationLayer.setObjectListener(userLocationObjectListener)
        userLocationLayer.isVisible = true
        userLocationLayer.isHeadingEnabled = false
    }

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

    fun setZoom(zoom: Float) {
        map.move(
            CameraPosition(
                map.cameraPosition.target,
                zoom,
                map.cameraPosition.azimuth,
                map.cameraPosition.tilt
            )
        )
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

    fun setPointsJson(points: String) {
        val gson = Gson()
        try {
            pointList = gson.fromJson(points, YaMapPointModel::class.java)
        } catch (e: Exception) {
            Log.e("Error", e.message, e)
        }
        clusterizedCollection.clear()
        pointList.forEach {
            val point = Point(it.pos.lat, it.pos.lon)
            clusterizedCollection.addPlacemark().apply {
                geometry = point
                setIcon(ImageProvider.fromResource(context, R.drawable.pin))
                setIconStyle(IconStyle().apply { scale = 0.4f })
                setText(moneyFormatter.format(88888), TextStyle().apply { size = 12f })
                userData = it
                addTapListener(placemarkTapListener)
            }
        }
        clusterizedCollection.clusterPlacemarks(60.0, 15)
    }

    private fun updateUserLocationIcon(userLocationView: UserLocationView) {
        userLocationView.pin.setIcon(ImageProvider.fromResource(context, R.mipmap.ic_user_location))
    }

    override fun onMapLoaded(p0: MapLoadStatistics) {
    }
}