package org.aoc.puzzles.solutions.mine
package aoc2024

class Day5Test extends AocTestBase(2024, 5, Day5):
  private val exampleData1 = exampleData(1)

  "Part 1" should "pass example 1" in {
    val result = testClass doPart1 exampleData1
    result should equal(18)
  }
  it should "pass input" in {
    val result = testClass doPart1 inputData
    result should equal(2378)
  }

  "Part 2" should "pass example 1" in {
    val result = testClass doPart2 exampleData1
    result should equal(9)
  }
  it should "pass input" in {
    val result = testClass doPart2 inputData
    result should equal(1796)
  }