package org.aoc.puzzles.solutions.mine
package aoc2024

import math._

object Day1 extends AocBase[Int, Int]:
  override def doPart1(inputLines: Array[String]): Int = {
    val (leftUnsorted, rightUnsorted) = parseLists(inputLines)
    val left = leftUnsorted.sorted
    val right = rightUnsorted.sorted
    left.indices.map(i => abs(right(i) - left(i))).sum
  }

  override def doPart2(inputLines: Array[String]): Int = {
    val (left, right) = parseLists(inputLines)
    left.map(l => l * right.count(_ == l)).sum
  }

  private def parseLists(inputLines: Array[String]) = {
    assert(inputLines.nonEmpty)
    val parsedLines = inputLines.map(_.trim().split("\\s+").map(_.toInt))
    assert(parsedLines.forall(_.length == 2))
    val leftList = parsedLines.map(_(0))
    val rightList = parsedLines.map(_(1))
    assert(leftList.length == rightList.length)
    (leftList, rightList)
  }