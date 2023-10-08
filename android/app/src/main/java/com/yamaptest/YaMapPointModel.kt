package com.yamaptest

import com.google.gson.annotations.SerializedName

class YaMapPointModel : ArrayList<YaMapPointModelItem>()

data class YaMapPointModelItem(
    @SerializedName("apartTariffs")
    val apartTariffs: List<ApartTariff>,
    @SerializedName("apartmentAccessType")
    val apartmentAccessType: ApartmentAccessType,
    @SerializedName("id")
    val id: Int,
    @SerializedName("pos")
    val pos: Pos
)

data class ApartTariff(
    @SerializedName("code")
    val code: String,
    @SerializedName("hourAmount")
    val hourAmount: Int,
    @SerializedName("priceDay")
    val priceDay: Int,
    @SerializedName("priceFewDays")
    val priceFewDays: Int,
    @SerializedName("priceHour")
    val priceHour: Int
)

data class ApartmentAccessType(
    @SerializedName("id")
    val id: Int,
    @SerializedName("title")
    val title: String,
    @SerializedName("__typename")
    val typename: String
)

data class Pos(
    @SerializedName("lat")
    val lat: Double,
    @SerializedName("lon")
    val lon: Double
)
