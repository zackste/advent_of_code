package org.aoc.puzzles.solutions.mine

abstract class AocBase[T1, T2]:
  def doPart1(inputLines: Array[String]): T1

  def doPart2(inputLines: Array[String]): T2