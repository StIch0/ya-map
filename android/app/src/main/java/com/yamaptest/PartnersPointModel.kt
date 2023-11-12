package com.yamaptest

import com.google.gson.annotations.SerializedName

class PartnersPointModel : ArrayList<PartnersPointModelItem>()

data class PartnersPointModelItem(
    @SerializedName("id")
    val id: Int,
    @SerializedName("name")
    val name: String,
    @SerializedName("point")
    val point: Point,
    @SerializedName("typename")
    val typename: String
)

data class Point(
    @SerializedName("lat")
    val lat: Double,
    @SerializedName("lon")
    val lon: Double,
    @SerializedName("typename")
    val typename: String?
)