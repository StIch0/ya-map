package com.yamaptest;

import android.Manifest
import android.R.attr.apiKey
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.yandex.mapkit.MapKitFactory
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withContext


class YaMapModule internal constructor(private val context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    //private var map: YaMapVC? = null
    override fun initialize() {
        CoroutineScope(Dispatchers.Main).launch {
            Log.e("Batman", "Load")
            try {
                try {
                    MapKitFactory.setApiKey(MAP_KEY)
                } catch (exception: Throwable) {
                    Log.e("Batman", exception.message.orEmpty(), exception)
                }
                MapKitFactory.initialize(context)
                MapKitFactory.getInstance().onStart()
            } catch (exception: Exception) {
                Log.e("Batman", exception.message.orEmpty(), exception)
            }
        }
        super.initialize()
    }

    override fun getName() = "YaMapModule"

//    @ReactMethod
//    fun setCenter(tag:Double, center: ReadableArray, zoom: Double) {
//        Log.e("Batman", "setCenter")
////        view.setCenter(
////            center.getDouble("lat"),
////            center.getDouble("lon"),
////            zoom.toFloat()
////        )
//    }

    //    @ReactMethod
//    fun createEvent(title: String?, startDate: Double, endDate: Double, address: String?) {
//        //map.createEvent(title, startDate, endDate, address)
//    }
    companion object {
        private const val MAP_KEY = "e55b564b-23c9-4ba2-887a-101e650f486d"
    }
}