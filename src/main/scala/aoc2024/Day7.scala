package org.aoc.puzzles.solutions.mine
package aoc2024

import scala.collection.mutable
import scala.util.boundary

object Day7 extends AocBase[Long, Long]:
  override def doPart1(inputLines: Array[String]): Long = {
    val data = parseData(inputLines)
    //    data.foreach((key, values) => println(s"$key (${calculateValues(values).contains(key)}) :: ${values.mkString(", ")} :: ${calculateValues(values).mkString(", ")}"))
    //    data.filter((key, values) => calculateValues(values).contains(key)).foreach((k, _) => println(k))
    data.filter((key, values) => calculateValues(values).contains(key)).map((key, _) => key).sum
  }

  override def doPart2(inputLines: Array[String]): Long = {
    val data = parseData(inputLines)
    //    data.foreach((key, values) => println(s"$key (${calculateValuesPart2(values).contains(key)}) :: ${values.mkString(", ")} :: ${calculateValuesPart2(values).mkString(", ")}"))
    //    data.filter((key, values) => calculateValues(values).contains(key)).foreach((k, _) => println(k))
    data.filter((key, values) => calculateValuesPart2(values).contains(key)).map((key, _) => key).sum
  }

  private def parseData(inputLines: Array[String]): Array[(Long, Array[Long])] =
    inputLines.map {
      case s"$key: $values" => (key.trim.toLong, values.split("\\s").map(_.trim.toLong))
    }

  private def calculateValues(values: Array[Long]): Array[Long] = {
    if values.isEmpty then return new Array[Long](0)
    if values.length == 1 then return values.take(1)
    val factors = values.take(2)

    val result1 = calculateValues((factors(0) + factors(1)) +: values.drop(2))
    val result2 = calculateValues((factors(0) * factors(1)) +: values.drop(2))

    result1 ++ result2
  }

  private def calculateValuesPart2(values: Array[Long]): Array[Long] = {
    if values.isEmpty then return new Array[Long](0)
    if values.length == 1 then return values.take(1)
    val factors = values.take(2)

    val result1 = calculateValuesPart2((factors(0) + factors(1)) +: values.drop(2))
    val result2 = calculateValuesPart2((factors(0) * factors(1)) +: values.drop(2))
    val result3 = calculateValuesPart2((factors(0).toString + factors(1).toString).toLong +: values.drop(2))

    result1 ++ result2 ++ result3
  }