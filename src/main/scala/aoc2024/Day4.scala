package org.aoc.puzzles.solutions.mine
package aoc2024

object Day4 extends AocBase[Int, Int]:
  override def doPart1(inputLines: Array[String]): Int = {
    val word = "XMAS".toCharArray
    val input = parseData(inputLines)
    val directions = Array(
      (-1, -1),
      (-1, 0),
      (-1, 1),
      (0, -1),
      (0, 1),
      (1, -1),
      (1, 0),
      (1, 1),
    )
    val resultMap = new Array[Array[Char]](input.length)
    resultMap.indices.foreach(i => resultMap(i) = ("." * input(i).length).toCharArray)
    var count = 0
    for (y <- input.indices)
      for (x <- input(y).indices)
        for (dir <- directions)
          if search(input, word, (y, x), dir, resultMap) then count += 1
    resultMap.foreach(line => println(line.mkString))
    count
  }

  override def doPart2(inputLines: Array[String]): Int = {
    val input = parseData(inputLines)
    val resultMap = new Array[Array[Char]](input.length)
    resultMap.indices.foreach(i => resultMap(i) = ("." * input(i).length).toCharArray)
    var count = 0
    for (y <- 1 until (input.length - 1))
      for (x <- 1 until (input(y).length - 1))
        if (input(y)(x) == 'A' && (
          ((input(y - 1)(x - 1) == 'M' && input(y + 1)(x + 1) == 'S' ||
            input(y - 1)(x + 1) == 'M' && input(y + 1)(x - 1) == 'S') &&
            (input(y + 1)(x - 1) == 'M' && input(y - 1)(x + 1) == 'S' ||
              input(y + 1)(x + 1) == 'M' && input(y - 1)(x - 1) == 'S')) ||
            (input(y - 1)(x - 1) == 'M' && input(y + 1)(x + 1) == 'S' ||
              input(y + 1)(x - 1) == 'M' && input(y - 1)(x + 1) == 'S') &&
              (input(y - 1)(x + 1) == 'M' && input(y + 1)(x - 1) == 'S' ||
                input(y + 1)(x + 1) == 'M' && input(y - 1)(x - 1) == 'S')
          )) {
          count += 1
          resultMap(y)(x) = 'A'
        }

    resultMap.foreach(line => println(line.mkString))
    count
  }

  private def parseData(inputLines: Array[String]): Array[Array[Char]] =
    inputLines.map(_.toCharArray)

  private def search(input: Array[Array[Char]],
                     remaining: Array[Char],
                     start: (Int, Int),
                     dir: (Int, Int),
                     resultMap: Array[Array[Char]]
                    ): Boolean = {
    if remaining.isEmpty then return true

    if start._1 < 0 || start._1 >= input.length || start._2 < 0 || start._2 >= input(start._1).length then return false
    if input(start._1)(start._2) != remaining(0) then return false

    val result = search(input,
      remaining.drop(1),
      (start._1 + dir._1, start._2 + dir._2),
      dir,
      resultMap)
    if result then resultMap(start._1)(start._2) = input(start._1)(start._2)
    result
  }