package org.aoc.puzzles.solutions.mine
package aoc2024

class Day3Test extends AocTestBase(2024, 3, Day3):
  private val exampleData1 = exampleData(1)

  "Part 1" should "pass example 1" in {
    val result = testClass doPart1 exampleData1
    result should equal(161)
  }
  it should "pass input" in {
    val result = testClass doPart1 inputData
    result should equal(156388521)
  }

  private val exampleData2 = exampleData(2)
  "Part 2" should "pass example 2" in {
    val result = testClass doPart2 exampleData2
    result should equal(48)
  }
  it should "pass input" in {
    val result = testClass doPart2 inputData
    result should equal(75920122)
  }