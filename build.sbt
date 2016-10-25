name := "infotest"

version := "1.0"

lazy val `infotest` = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.10.5"

libraryDependencies ++= Seq( jdbc , cache , ws  , anorm  )

libraryDependencies ++= Seq(
  "mysql" % "mysql-connector-java" % "5.1.32",
  cache
)

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

  