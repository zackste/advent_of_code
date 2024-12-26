package org.aoc.puzzles.solutions.mine
package aoc2024

import scala.collection.mutable

object Day5 extends AocBase[Int, Int]:
  override def doPart1(inputLines: Array[String]): Int = {
    val (rules, lists) = parseData(inputLines)
    //    rules.foreach(println)
    //    lists.map(_ mkString ",").foreach(println)

    val filtered = lists.filter(checkOrder(_, rules))
    //    filtered.map(_ mkString ",").foreach(println)
    // Find and sum the middle pages
    filtered.map(order => order(order.length / 2)).sum
  }

  override def doPart2(inputLines: Array[String]): Int = {
    val (rules, lists) = parseData(inputLines)

    lists.filter(!checkOrder(_, rules)).map(_.sortWith((left, right) =>
        !rules.contains((right, left))
      ))
      // Find and sum the middle pages
      .map(order => order(order.length / 2)).sum
  }

  private def checkOrder(pages: Array[Int], rules: mutable.LinkedHashSet[(Int, Int)]) = {
    pages.dropRight(1).zipWithIndex.forall((testPage, i) => {
      pages.slice(i + 1, pages.length).forall(rules.contains(testPage, _))
    })
  }

  private def parseData(inputLines: Array[String]): (mutable.LinkedHashSet[(Int, Int)], Array[Array[Int]]) = {
    var parsingRules = true
    val rules = mutable.LinkedHashSet[(Int, Int)]()
    val lists = collection.mutable.Queue[Array[Int]]()
    for (row <- inputLines) {
      if row.trim.isEmpty then parsingRules = false
      else if (parsingRules) {
        val Array(a, b) = row.split("\\|").map(_.toInt)
        rules += ((a, b))
      }
      else lists.append(row.split(",").map(_.toInt))
    }
    (rules, lists.toArray)
  }