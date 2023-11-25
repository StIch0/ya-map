package com.yamaptest

import android.graphics.Color
import android.graphics.PointF
import android.util.Log
import android.view.Gravity
import android.widget.LinearLayout
import android.widget.LinearLayout.LayoutParams
import android.widget.TextView
import androidx.core.content.res.ResourcesCompat
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.google.gson.Gson
import com.yandex.mapkit.Animation
import com.yandex.mapkit.geometry.Point
import com.yandex.mapkit.map.CameraPosition
import com.yandex.mapkit.map.ClusterListener
import com.yandex.mapkit.map.ClusterTapListener
import com.yandex.mapkit.map.IconStyle
import com.yandex.mapkit.map.InputListener
import com.yandex.mapkit.map.Map
import com.yandex.mapkit.map.MapObjectTapListener
import com.yandex.mapkit.map.PlacemarkMapObject
import com.yandex.runtime.ui_view.ViewProvider
import java.text.NumberFormat
import java.util.Locale

internal class ApartmentMapVC(yaMapVC: YaMapVC) : MapVCInterface {
    private val context = yaMapVC.context
    private val id = yaMapVC.id
    private val map = yaMapVC.map
    private val density = yaMapVC.context.resources.displayMetrics.density
    private var pointList = mutableMapOf<Int, PlacemarkMapObject>()
    private val font = ResourcesCompat.getFont(context, R.font.roboto_medium)
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

    private val clusterListener = ClusterListener { cluster ->
        cluster.appearance.setView(
            ViewProvider(
                LinearLayout(context).apply {
                    setBackgroundResource(R.mipmap.group)
                    gravity = Gravity.CENTER_VERTICAL
                    val params = LayoutParams(
                        LayoutParams.WRAP_CONTENT, LayoutParams.MATCH_PARENT
                    )
                    params.width = 126
                    params.height = 40
                    layoutParams = params
                    addView(TextView(context).apply {
                        val textParams = LayoutParams(
                            LayoutParams.WRAP_CONTENT, LayoutParams.MATCH_PARENT
                        )
                        textParams.width = (34 * density).toInt()
                        layoutParams = textParams
                        text = cluster.placemarks.size.toString()
                        setTextColor(context.resources.getColor(R.color.dark))
                        textSize = when (cluster.placemarks.size.toString().length) {
                            5 -> 8f
                            4 -> 10f
                            else -> 14f
                        }
                        typeface = font
                        gravity = Gravity.CENTER
                        setPadding((5 * density).toInt(), 0, 0, (5 * density).toInt())
                    })
                    addView(TextView(context).apply {
                        val priceParams = LayoutParams(
                            LayoutParams.WRAP_CONTENT, LayoutParams.MATCH_PARENT
                        )
                        priceParams.weight = 1.0f
                        layoutParams = priceParams
                        text = "от " + (cluster.placemarks.minBy {
                            (it.userData as YaMapPointModelItem).getPrice()
                        }.userData as YaMapPointModelItem).getPrice()
                        //text = "от " + moneyFormatter.format(10000)
                        setTextColor(context.resources.getColor(R.color.dark))
                        textSize = 14f
                        typeface = font
                        gravity = Gravity.CENTER
                        setPadding(0, 0, 0, (10 * density).toInt())
                    })
                }
            ),
            IconStyle().apply {
                anchor = PointF(0.16f, 0.5f)
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
            ),
            Animation(Animation.Type.SMOOTH, 0.3f),
            null
        )
        true
    }
    private val clusterizedCollection =
        map.mapObjects.addClusterizedPlacemarkCollection(clusterListener)

    init {
        yaMapVC.onStart()
        map.addCameraListener(yaMapVC)
        map.addInputListener(inputListener)
    }

    override fun setPointsJson(points: String) {
        val gson = Gson()
        val newPoints = try {
            gson.fromJson(points, YaMapPointModel::class.java).associateBy { it.id }
        } catch (e: Exception) {
            Log.e("Error", e.message, e)
            mapOf()
        }
        updatePoints(pointList, newPoints.keys, clusterizedCollection) { keys ->
            keys.mapNotNull { key ->
                newPoints[key]?.let {
                    val point = Point(it.pos.lat, it.pos.lon)
                    it.id to clusterizedCollection.addPlacemark(point).apply {
                        setMarkerIcon(it, false)
                        //setIcon(ImageProvider.fromResource(context, R.drawable.test_point))
                        userData = it
                        addTapListener(placemarkTapListener)
                    }
                }
            }.toMap()
        }
//        val oldPoints = pointList
//
//        val diff = (oldPoints - newPoints)
//        diff.keys.forEach {
//            pointList.remove(it)
//        }
//        diff.values.forEach {
//            clusterizedCollection.remove(it)
//        }
//
//        pointList.putAll(
//            (newPoints - oldPoints).values.associate {
//                val point = Point(it.pos.lat, it.pos.lon)
//                it.id to clusterizedCollection.addPlacemark(point).apply {
//                    setMarkerIcon(it, false)
//                    //setIcon(ImageProvider.fromResource(context, R.drawable.test_point))
//                    userData = it
//                    addTapListener(placemarkTapListener)
//                }
//            })
        clusterizedCollection.clusterPlacemarks(100.0, 17)
    }

    override fun resetSelectedId() {
        lastClickedMarker?.let { (marker, item) ->
            marker.setMarkerIcon(item, false)
        }
        lastClickedMarker = null
    }

    private fun PlacemarkMapObject.setMarkerIcon(item: YaMapPointModelItem, isClicked: Boolean) =
        setView(ViewProvider(TextView(context).apply {
            val isBig = item.getPrice().length >= 8
            val params = LayoutParams(
                LayoutParams.WRAP_CONTENT, LayoutParams.MATCH_PARENT
            )
            params.width = if (isBig) 65 else 59
            params.height = if (isBig) 31 else 29
            layoutParams = params
            text = item.getPrice()
            //text = moneyFormatter.format(10000)
            setTextColor(if (isClicked) Color.WHITE else context.resources.getColor(R.color.dark))
            val isClassic = item.apartmentAccessType.id == 2
            setBackgroundResource(
                if (isClicked) {
                    if (isBig) {
                        if (isClassic) R.mipmap.clicked_green_big_pin else R.mipmap.clicked_blue_big_pin
                    } else {
                        if (isClassic) R.mipmap.clicked_green_pin else R.mipmap.clicked_blue_pin
                    }
                } else {
                    if (isBig) {
                        if (isClassic) R.mipmap.green_big_pin else R.mipmap.blue_big_pin
                    } else {
                        if (isClassic) R.mipmap.green_pin else R.mipmap.blue_pin
                    }
                }
            )
            textSize = 14f
            typeface = font
            gravity = Gravity.CENTER
            setPadding(0, 0, 0, (5 * density).toInt())
        }),
            IconStyle().apply {
                anchor = PointF(0.08f, 0.78f)
            }
        )

    private fun YaMapPointModelItem.getPrice() =
        moneyFormatter.format(apartTariffs.firstOrNull { it.code == "sum" }?.priceFewDays ?: 0)
}