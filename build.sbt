ThisBuild / version := "0.1.0-SNAPSHOT"

ThisBuild / scalaVersion := "3.3.4"

libraryDependencies += "org.scalactic" %% "scalactic" % "3.2.19"
libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.19" % "test"

lazy val root = (project in file("."))
  .settings(
    name := "advent_of_code",
    idePackagePrefix := Some("org.aoc.puzzles.solutions.mine")
  )
