package org.aoc.puzzles.solutions.mine
package aoc2024

object Day3 extends AocBase[Int, Int]:
  private val mulRegex = "mul\\((?<l>\\d+),(?<r>\\d+)\\)".r
  private val doDontRegex = "do\\(\\)(?<m>.+?)don't\\(\\)".r

  override def doPart1(inputLines: Array[String]): Int =
    doMulSumming(inputLines.mkString)

  override def doPart2(inputLines: Array[String]): Int = {
    val input = s"do()${inputLines.mkString}don't()"
    doDontRegex.findAllMatchIn(input).map(doDont => doMulSumming(doDont.group("m"))).sum
  }

  private def doMulSumming(data: String) = {
    mulRegex.findAllMatchIn(data).map(m =>
      m.group("l").toInt * m.group("r").toInt
    ).sum
  }