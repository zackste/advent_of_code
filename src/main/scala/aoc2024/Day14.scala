package org.aoc.puzzles.solutions.mine
package aoc2024

import math._

object Day14 extends AocBase[Int, Int]:
  private val inputRegex = "p=(?<pX>-?\\d+?),(?<pY>-?\\d+?)\\s+v=(?<vX>-?\\d+?),(?<vY>-?\\d+?)".r

  private var lenY: Int = 0
  private var lenX: Int = 0

  def setup(lenY: Int, lenX: Int): Unit = {
    this.lenY = lenY
    this.lenX = lenX
  }

  override def doPart1(inputLines: Array[String]): Int = {
    val robots = parseInstructions(inputLines)
    (0 until 100).foreach(tick => {
      robots.foreach(_.doTick(lenY, lenX))
//      val map = Array.fill(lenY) {
//        Array.fill(lenX)(0)
//      }
//      robots.foreach(_.updateMap(map))
//      map.foreach(r => println(r.map(s => if s == 0 then "." else s.toString).mkString))
    })

    //    val map = Array.ofDim[Int](lenY, lenX)
    val map = Array.fill(lenY) {
      Array.fill(lenX)(0)
    }
    robots.foreach(_.updateMap(map))
    map.foreach(r => println(r.map(s => if s == 0 then "." else s.toString).mkString))

    val quadY = floor(lenY / 2.0).toInt
    val quadX = floor(lenX / 2.0).toInt

    val quad1 = map.take(quadY).map(r => r.take(quadX).sum).sum
    val quad2 = map.take(quadY).map(r => r.takeRight(quadX).sum).sum
    val quad3 = map.takeRight(quadY).map(r => r.take(quadX).sum).sum
    val quad4 = map.takeRight(quadY).map(r => r.takeRight(quadX).sum).sum

    println(s"1:$quad1 2:$quad2 3:$quad3 4:$quad4 tot:${map.map(_.sum).sum}")

    quad1 * quad2 * quad3 * quad4
  }

  override def doPart2(inputLines: Array[String]): Int = {
    0
  }

  private def parseInstructions(input: Array[String]) = {
    input.map(l => inputRegex.findFirstMatchIn(l).get).map(m => Robot(
      m.group("pY").toInt,
      m.group("pX").toInt,
      m.group("vY").toInt,
      m.group("vX").toInt)
    )
  }

  private case class Robot(py: Int, px: Int, vy: Int, vx: Int):
    private var pY: Int = py
    private var pX: Int = px

    def doTick(lenY: Int, lenX: Int): Unit = {
      pY = (pY + vy + lenY) % lenY
      pX = (pX + vx + lenX) % lenX
    }

    def updateMap(map: Array[Array[Int]]): Unit = {
      map(pY)(pX) += 1
    }