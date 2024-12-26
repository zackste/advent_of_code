package org.aoc.puzzles.solutions.mine
package aoc2024

class Day6Test extends AocTestBase(2024, 6, Day6):
  private val exampleData1 = exampleData(1)

  "Part 1" should "pass example 1" in {
    val result = testClass doPart1 exampleData1
    result should equal(41)
  }
  it should "pass input" in {
    val result = testClass doPart1 inputData
    result should equal(5101)
  }

  "Part 2" should "pass example 1" in {
    val result = testClass doPart2 exampleData1
    result should equal(6)
  }
  it should "pass input" in {
    val result = testClass doPart2 inputData
    result should equal(1951)
  }