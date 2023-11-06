//
//  PointItem.swift
//  YaMapTest
//
//  Created by Pavel on 16.08.2023.
//



struct Point: Decodable {
  let lat: Double
  let lon: Double
}

struct TariffItem: Decodable {
  let code: String
  let priceHour: Int
  let priceDay: Int
  let priceFewDays: Int
  let hourAmount: Int
}

/// wifi 1 - бесконтакт, classic　2 - классика
enum ApartmentAccessTypeId: Int, Decodable {
  case wifi = 1
  case classic = 2
}

struct ApartmentAccessType: Decodable {
  let id: ApartmentAccessTypeId
  let title: String
  let __typename: String
}

struct PointItem: Decodable {
  let id: Int
  let pos: Point
  let apartTariffs: [TariffItem]
  let apartmentAccessType: ApartmentAccessType
}

struct Throwable<T: Decodable>: Decodable {
    let result: Result<T, Error>

    init(from decoder: Decoder) throws {
        result = Result(catching: { try T(from: decoder) })
    }
}
