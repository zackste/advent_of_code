package org.aoc.puzzles.solutions.mine
package aoc2024

class Day14Test extends AocTestBase(2024, 14, Day14):
  private val exampleData1 = exampleData(1)

  "Part 1" should "pass example 1" in {
    testClass.setup(7, 11)
    val result = testClass doPart1 exampleData1
    result should equal(12)
  }
  it should "pass input" in {
    testClass.setup(103, 101)
    val result = testClass doPart1 inputData
    result should equal(226932048 + 1)
  }

  "Part 2" should "pass example 1" in {
    testClass.setup(7, 11)
    val result = testClass doPart2 exampleData1
    result should equal(9)
  }
  it should "pass input" in {
    testClass.setup(103, 101)
    val result = testClass doPart2 inputData
    result should equal(1796)
  }