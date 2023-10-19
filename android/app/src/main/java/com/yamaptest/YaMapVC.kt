package com.yamaptest

import android.content.Context
import android.graphics.Color
import android.graphics.PointF
import android.util.Log
import android.view.Gravity
import android.widget.LinearLayout
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
import com.yandex.mapkit.map.MapObjectTapListener
import com.yandex.mapkit.map.PlacemarkMapObject
import com.yandex.mapkit.mapview.MapView
import com.yandex.mapkit.user_location.UserLocationLayer
import com.yandex.mapkit.user_location.UserLocationObjectListener
import com.yandex.mapkit.user_location.UserLocationView
import com.yandex.runtime.image.ImageProvider
import com.yandex.runtime.ui_view.ViewProvider
import java.text.NumberFormat
import java.util.Locale
import com.yamaptest.R
import com.yandex.mapkit.location.LocationManager

class YaMapVC(context: Context) : MapView(context), CameraListener, MapLoadedListener {
    private var pointList: YaMapPointModel = YaMapPointModel()
    private var userLocationLayer: UserLocationLayer
    private var locationManager: LocationManager
    private val moneyFormatter = NumberFormat.getCurrencyInstance(Locale("RU", "RU")).apply {
        maximumFractionDigits = 0
    }
    private var lastClickedMarker: Pair<PlacemarkMapObject, YaMapPointModelItem>? = null

    private val placemarkTapListener = MapObjectTapListener { mapObject, point ->
        (mapObject.userData as? YaMapPointModelItem)?.let { userData ->
            val map = WritableNativeMap()
            map.putInt("id", userData.id)
            val reactContext = context as ReactContext
            reactContext
                .getJSModule(RCTEventEmitter::class.java)
                .receiveEvent(id, "onPressMarker", map)
            (mapObject as? PlacemarkMapObject)?.let {
                lastClickedMarker?.let { (marker, item) ->
                    marker.setMarkerIcon(item, false)
                }
                lastClickedMarker = it to userData
                it.setMarkerIcon(userData, true)
            }
        }
        true
    }

    private val inputListener = object : InputListener {
        override fun onMapTap(map: Map, point: Point) {
            lastClickedMarker?.let { (marker, item) ->
                marker.setMarkerIcon(item, false)
            }
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
        }
    }

    private val clusterListener = ClusterListener { cluster ->
        cluster.appearance.setView(
            ViewProvider(
                LinearLayout(context).apply {
                    setBackgroundResource(R.mipmap.group)
                    gravity = Gravity.CENTER_VERTICAL
                    addView(TextView(context).apply {
                        val params = LinearLayout.LayoutParams(
                            LayoutParams.WRAP_CONTENT, LayoutParams.MATCH_PARENT
                        )
                        params.width = 100
                        layoutParams = params
                        text = cluster.placemarks.size.toString()
                        setTextColor(context.resources.getColor(R.color.dark))
                        textSize = 14f
                        gravity = Gravity.CENTER
                    })
                    addView(TextView(context).apply {
                        val params = LinearLayout.LayoutParams(
                            LayoutParams.WRAP_CONTENT, LayoutParams.MATCH_PARENT
                        )
                        params.weight = 1.0f
                        layoutParams = params
                        text = "от " + (cluster.placemarks.minBy {
                            (it.userData as YaMapPointModelItem).getPrice()
                        }.userData as YaMapPointModelItem).getPrice()
                        //text = "от " + moneyFormatter.format(10000)
                        setTextColor(context.resources.getColor(R.color.dark))
                        textSize = 14f
                        gravity = Gravity.CENTER
                        setPadding(0, 0, 20, 15)
                    })
                    setPadding(4, 5, 5, 20)
                }
            ),
            IconStyle().apply {
                anchor = PointF(0.16f, 0.6f)
            }
        )
        cluster.addClusterTapListener(clusterTapListener)
    }

    private val clusterTapListener = ClusterTapListener {
        map.move(
            CameraPosition(
                it.appearance.geometry,
                map.cameraPosition.zoom + 2,
                map.cameraPosition.azimuth,
                map.cameraPosition.tilt
            )
        )
        true
    }
    private val clusterizedCollection =
        map.mapObjects.addClusterizedPlacemarkCollection(clusterListener)

    init {
        map.addCameraListener(this)
        map.addInputListener(inputListener)

        val mapKit = MapKitFactory.getInstance()
        userLocationLayer = mapKit.createUserLocationLayer(mapWindow)
        userLocationLayer.isVisible = true
        userLocationLayer.isHeadingEnabled = true
        userLocationLayer.setObjectListener(userLocationObjectListener)

        locationManager = mapKit.createLocationManager()
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
                setMarkerIcon(it, false)
                //setIcon(ImageProvider.fromResource(context, R.drawable.test_point))
                userData = it
                addTapListener(placemarkTapListener)
            }
        }
        clusterizedCollection.clusterPlacemarks(100.0, 17)
    }

    private fun updateUserLocationIcon(userLocationView: UserLocationView) {
        Log.d("Batman", "updateUserLocationIcon")
        setCenter(
            userLocationView.pin.geometry.latitude,
            userLocationView.pin.geometry.latitude,
            map.cameraPosition.zoom
        )
        userLocationView.pin.setIcon(ImageProvider.fromResource(context, R.mipmap.ic_user_location))
    }

    override fun onMapLoaded(p0: MapLoadStatistics) {
    }

    private fun PlacemarkMapObject.setMarkerIcon(item: YaMapPointModelItem, isClicked: Boolean) =
        setView(ViewProvider(TextView(context).apply {
            text = item.getPrice()
            //text = moneyFormatter.format(10000)
            setTextColor(if (isClicked) Color.WHITE else context.resources.getColor(R.color.dark))
            val isClassic = item.apartmentAccessType.id == 2
            setBackgroundResource(
                if (isClicked) {
                    if (isClassic) R.mipmap.clicked_green_pin else R.mipmap.clicked_blue_pin
                } else {
                    if (isClassic) R.mipmap.green_pin else R.mipmap.blue_pin
                }
            )
            textSize = 14f
            gravity = Gravity.CENTER
            setPadding(10, 10, 15, 20)
        }),
            IconStyle().apply {
                anchor = PointF(0.08f, 0.78f)
            }
        )

    private fun YaMapPointModelItem.getPrice() =
        moneyFormatter.format(apartTariffs.firstOrNull { it.code == "sum" }?.priceFewDays ?: 0)
}