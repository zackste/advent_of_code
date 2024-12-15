package org.aoc.puzzles.solutions.mine
package aoc2024

class Day1Test extends AocTestBase(2024, 1, Day1):
  private val exampleData1 = exampleData(1)

  "Part 1" should "pass example 1" in {
    val result = testClass doPart1 exampleData1
    result should equal(11)
  }
  it should "pass input" in {
    val result = testClass doPart1 inputData
    result should equal(1834060)
  }

  "Part 2" should "pass example 1" in {
    val result = testClass doPart2 exampleData1
    result should equal(31)
  }
  it should "pass input" in {
    val result = testClass doPart2 inputData
    result should equal(21607792)
  }