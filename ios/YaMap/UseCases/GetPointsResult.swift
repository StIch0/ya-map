//
//  GetPointsRsult.swift
//  YaMapTest
//
//  Created by Александр Григорьев on 06.11.2023.
//

import Foundation

struct GetPointsResult {
 
  func callAsFunction<ResponseType: Decodable>(responseType: ResponseType.Type, json: String) -> Result<[ResponseType], Error> {
    do {
      let data = Data(json.utf8)
      let decoder = JSONDecoder()
      decoder.keyDecodingStrategy = .convertFromSnakeCase
      let throwables = try decoder.decode([Throwable<ResponseType>].self, from: data)
      let points = throwables.compactMap { try? $0.result.get() }
      
      return .success(points)
    } catch (let error) {
      
      return .failure(error)
    }
  }
}
