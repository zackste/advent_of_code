package org.aoc.puzzles.solutions.mine
package aoc2024

import math._

object Day2 extends AocBase[Int, Int]:
  override def doPart1(inputLines: Array[String]): Int =
    parseLevelSets(inputLines) count isSafe

  override def doPart2(inputLines: Array[String]): Int =
    parseLevelSets(inputLines) count isSafeWithDampener

  private def parseLevelSets(inputLines: Array[String]) =
    inputLines.map(_.trim().split("\\s+").map(_.toInt))

  private def isSafe(levels: Array[Int]): Boolean = {
    if levels.length <= 1 then return true

    val diffs = levels.zipWithIndex.drop(1).map((level, i) => level - levels(i - 1))
    // Non-stable slope
    (diffs.forall(0 <= _) || diffs.forall(_ <= 0)) &&
      // Not in tolerance
      diffs.forall(d => 1 <= abs(d) && abs(d) <= 3)
  }

  private def isSafeWithDampener(levels: Array[Int]): Boolean = {
    if isSafe(levels) || levels.length == 2 then return true

    // We're fast enough that we can brute-force it.
    levels.indices.exists(i => isSafe(levels.slice(0, i) ++ levels.slice(i + 1, levels.length)))
  }