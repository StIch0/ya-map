package com.yamaptest

import android.graphics.Color
import android.graphics.PointF
import android.text.TextUtils
import android.util.Log
import android.view.Gravity
import android.widget.FrameLayout
import android.widget.LinearLayout
import android.widget.LinearLayout.LayoutParams
import android.widget.LinearLayout.TEXT_ALIGNMENT_CENTER
import android.widget.LinearLayout.VERTICAL
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


internal class PartnersMapVC(yaMapVC: YaMapVC) : MapVCInterface {
    private val context = yaMapVC.context
    private val id = yaMapVC.id
    private val map = yaMapVC.map
    private val density = yaMapVC.context.resources.displayMetrics.density
    private var pointList = mutableMapOf<Int, PlacemarkMapObject>()
    private val font = ResourcesCompat.getFont(context, R.font.roboto_medium)
    private var lastClickedMarker: Pair<PlacemarkMapObject, PartnersPointModelItem>? = null

    private val placemarkTapListener = MapObjectTapListener { mapObject, point ->
        (mapObject.userData as? PartnersPointModelItem)?.let { userData ->
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
                    setBackgroundResource(R.mipmap.partners_group)
                    orientation = VERTICAL
                    gravity = Gravity.CENTER
                    val params = LayoutParams(
                        LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT
                    )
                    params.width = (31 * density).toInt()
                    params.height = (31 * density).toInt()
                    layoutParams = params
                    addView(TextView(context).apply {
                        val textParams = LayoutParams(
                            LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT
                        )
                        layoutParams = textParams
                        text = cluster.placemarks.size.toString()
                        setTextColor(Color.WHITE)
                        textSize = when (cluster.placemarks.size.toString().length) {
                            5 -> 6f
                            4 -> 8f
                            else -> 10f
                        }
                        textAlignment = TEXT_ALIGNMENT_CENTER
                        typeface = font
                        gravity = Gravity.CENTER
                    })
                }
            ),
            IconStyle().apply {
                anchor = PointF(0.5f, 0.5f)
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
            gson.fromJson(points, PartnersPointModel::class.java).associateBy { it.id }
        } catch (e: Exception) {
            Log.e("Error", e.message, e)
            mapOf()
        }
        updatePoints(pointList, newPoints.keys, clusterizedCollection) { keys ->
            keys.mapNotNull { key ->
                newPoints[key]?.let {
                    val point = Point(it.point.lat, it.point.lon)
                    it.id to clusterizedCollection.addPlacemark(point).apply {
                        setMarkerIcon(it, false)
                        //setIcon(ImageProvider.fromResource(context, R.drawable.test_point))
                        userData = it
                        addTapListener(placemarkTapListener)
                    }
                }
            }.toMap()
        }
        clusterizedCollection.clusterPlacemarks(100.0, 17)
    }

    override fun resetSelectedId() {
        lastClickedMarker?.let { (marker, item) ->
            marker.setMarkerIcon(item, false)
        }
        lastClickedMarker = null
    }

    private fun PlacemarkMapObject.setMarkerIcon(item: PartnersPointModelItem, isClicked: Boolean) =
        setView(ViewProvider(
            FrameLayout(context).apply {
                val isBig = item.name.length >= 10
                val frameParams = LayoutParams(
                    LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT
                )
                frameParams.width = ((if (isBig) 102 else 81) * density).toInt()
                layoutParams = frameParams
                frameParams.gravity = Gravity.CENTER
                setBackgroundResource(
                    if (isClicked) {
                        if (isBig) {
                            R.mipmap.clicked_big_partner
                        } else {
                            R.mipmap.clicked_partner
                        }
                    } else {
                        if (isBig) {
                            R.mipmap.big_partner
                        } else {
                            R.mipmap.partner
                        }
                    }
                )
                addView(TextView(context).apply {
                    val params = LayoutParams(
                        LayoutParams.WRAP_CONTENT, LayoutParams.MATCH_PARENT
                    )
                    params.width = ((if (isBig) 106 else 80) * density).toInt()
                    params.height = ((if (isBig) 38 else 27) * density).toInt()
                    layoutParams = params
                    text = item.name
                    setTextColor(if (isClicked) Color.WHITE else Color.BLACK)
                    textSize = 12f
                    typeface = font
                    gravity = Gravity.CENTER_VERTICAL
                    maxLines = 2
                    ellipsize = TextUtils.TruncateAt.END
                    setPadding(
                        (20 * density).toInt(),
                        (4 * density).toInt(),
                        (4 * density).toInt(),
                        (4 * density).toInt()
                    )
                })
            }),
            IconStyle().apply {
                anchor = PointF(0.09f, 0.45f)
            }
        )
}