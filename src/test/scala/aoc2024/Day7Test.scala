package org.aoc.puzzles.solutions.mine
package aoc2024

class Day7Test extends AocTestBase(2024, 7, Day7):
  private val exampleData1 = exampleData(1)

  "Part 1" should "pass example 1" in {
    val result = testClass doPart1 exampleData1
    result should equal(3749)
  }
  it should "pass input" in {
    val result = testClass doPart1 inputData
    result should equal(5030892084481L)
  }

  "Part 2" should "pass example 1" in {
    val result = testClass doPart2 exampleData1
    result should equal(11387)
  }
  it should "pass input" in {
    val result = testClass doPart2 inputData
    result should equal(91377448644679L)
  }