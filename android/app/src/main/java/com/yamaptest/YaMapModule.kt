package com.yamaptest;

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.yandex.mapkit.MapKitFactory
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch


class YaMapModule internal constructor(private val context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {
    override fun initialize() {
        CoroutineScope(Dispatchers.Main).launch {
            try {
                try {
                    MapKitFactory.setApiKey(MAP_KEY)
                } catch (exception: Throwable) {
                    Log.e("Error", exception.message.orEmpty(), exception)
                }
                MapKitFactory.initialize(context)
                MapKitFactory.getInstance().onStart()
            } catch (exception: Exception) {
                Log.e("Error", exception.message.orEmpty(), exception)
            }
        }
        super.initialize()
    }

    override fun getName() = "YaMapModule"

    companion object {
        private const val MAP_KEY = "e55b564b-23c9-4ba2-887a-101e650f486d"
    }
}