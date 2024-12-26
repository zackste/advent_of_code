package org.aoc.puzzles.solutions.mine
package aoc2024

import scala.collection.mutable
import scala.util.boundary

object Day6 extends AocBase[Int, Int]:
  override def doPart1(inputLines: Array[String]): Int = {
    val map = parseMap(inputLines)
    val start = dir.findStart(map).get
    var pos = start
    while (pos._1) {
      map(pos._3)(pos._4) = 'X'
      val newPos = pos._2.move(map, pos._3, pos._4)
      assert(newPos != start)
      pos = newPos
    }

    map.foreach(l => println(l.mkString))
    map.map(_.count(_ == 'X')).sum
  }

  override def doPart2(inputLines: Array[String]): Int = {
    val map = parseMap(inputLines)
    val start = dir.findStart(map).get
    val pathPosSet = mutable.HashSet[(Int, Int)]()
    var pos = start
    while (pos._1) {
      pathPosSet.add((pos._3, pos._4))
      pos = pos._2.move(map, pos._3, pos._4)
      assert(pos != start)
    }
    var count = 0
    val progress = mutable.HashSet[(Boolean, dir, Int, Int)]()
    for (test <- pathPosSet) {
      progress.clear
      map(test._1)(test._2) = '#'
      var pos = start
      boundary:
        while (pos._1) {
          progress.add(pos)
          pos = pos._2.move(map, pos._3, pos._4)
          if progress contains pos then {
            count += 1
            boundary.break()
          }
        }
      map(test._1)(test._2) = 'X'
    }
    count
  }

  enum dir(char: Char, y: Int, x: Int):
    private def rotate90c: dir =
      dir fromOrdinal (this.ordinal + 1) % dir.values.length

    def move(map: Array[Array[Char]], posY: Int, posX: Int): (Boolean, dir, Int, Int) = {
      val newY = y + posY
      val newX = x + posX

      if newY < 0 || newY >= map.length || newX < 0 || newX >= map(0).length then
        (false, this, posY, posX)
      else if map(newY)(newX) == '#' then
        (true, rotate90c, posY, posX)
      else
        (true, this, newY, newX)
    }

    private def isPos(c: Char): Boolean = char == c

    case l extends dir('<', 0, -1)
    case u extends dir('^', -1, 0)
    case r extends dir('>', 0, 1)
    case d extends dir('v', 1, 0)

  object dir:
    def findStart(map: Array[Array[Char]]): Option[(Boolean, dir, Int, Int)] = {
      var result: Option[(Boolean, dir, Int, Int)] = None
      for (posY <- map.indices) {
        for (posX <- map(posY).indices) {
          val foundDir = dir.values.find(_.isPos(map(posY)(posX)))
          if foundDir.nonEmpty then result = Some((true, foundDir.get, posY, posX))
        }
      }
      result
    }

  private def parseMap(inputLines: Array[String]): Array[Array[Char]] =
    inputLines.map(_.toCharArray)