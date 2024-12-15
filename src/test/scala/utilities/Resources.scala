package org.aoc.puzzles.solutions.mine
package utilities

import scala.io.Source

object Resources:
  def readExample(year: Int, day: Int, number: Int): Array[String] =
    readPuzzleResource(buildPath(year, day, s"example$number"))

  def readInput(year: Int, day: Int): Array[String] =
    readPuzzleResource(buildPath(year, day, "input"))

  private def buildPath(year: Int, day: Int, fileName: String): String =
    s"aoc$year/Day$day/$fileName.txt"

  private def readPuzzleResource(resourcePath: String): Array[String] = {
    val buffer = Source fromResource resourcePath
    try {
      val result = buffer.getLines.toArray
      if result.nonEmpty && result(result.length - 1).isEmpty
      then result.dropRight(1)
      else result
    }
    finally buffer.close
  }