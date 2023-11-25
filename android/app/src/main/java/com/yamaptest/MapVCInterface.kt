package com.yamaptest

import com.yandex.mapkit.map.ClusterizedPlacemarkCollection
import com.yandex.mapkit.map.PlacemarkMapObject

interface MapVCInterface {
    fun setPointsJson(points: String)
    fun resetSelectedId()

    fun updatePoints(
        pointList: MutableMap<Int, PlacemarkMapObject>,
        newPoints: Set<Int>,
        clusterizedCollection: ClusterizedPlacemarkCollection,
        createPoints: (Set<Int>) -> Map<Int, PlacemarkMapObject>
    ) {
        val diff = pointList - newPoints
        diff.keys.forEach {
            pointList.remove(it)
        }
        diff.values.forEach {
            clusterizedCollection.remove(it)
        }

        pointList.putAll(createPoints(newPoints - pointList.keys))
    }
}