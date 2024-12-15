package org.aoc.puzzles.solutions.mine

import utilities.Resources.{readExample, readInput}

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should.Matchers

abstract class AocTestBase[T](year: Int, day: Int, targetClass: T)
  extends AnyFlatSpec with Matchers:
  val testClass: T = targetClass
  val inputData: Array[String] = readInput(year, day)

  def exampleData(number: Int): Array[String] = readExample(year, day, number)

  "Input data" should "be valid" in {
    inputData should not be null
    inputData.length should be >= 1
    inputData.exists(_.trim.isEmpty) should not equal true
  }