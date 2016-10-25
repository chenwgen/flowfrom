package daos
import java.text.SimpleDateFormat

import anorm.SQL
import anorm.SqlQuery
import play.api.Play.current
import play.api.db.DB
/**
  * Created by chenweigen on 2016/8/18.
  */
case class WarnInfoDB(f_id:Int,f_product:String,f_recall_reason:Option[String],f_fromdate:Option[String],f_enddate:Option[String],f_num:Option[Int])
object  WarnInfoDB {
  val sql: SqlQuery = SQL(
    """
    select f_id,
       f_product,
       f_recall_reason,
       f_fromdate,
       f_enddate,
       f_num
  from t_recall_warn where f_fromdate>={F_DATE_BEGIN} and f_enddate<{F_DATE_END}
    """.stripMargin
  )

  def getDataList(startdate:String,enddate:String): List[WarnInfoDB] = DB.withConnection("mysql") {
    implicit connection =>
//      println("sql:"+startdate+";"+enddate)
      (sql.on("F_DATE_BEGIN" -> startdate, "F_DATE_END" -> enddate))().map(row =>
        WarnInfoDB(row[Int]("f_id"), row[String]("f_product"),
          row[Option[String]]("f_recall_reason"), row[Option[String]]("f_fromdate"), row[Option[String]]("f_enddate"),
          row[Option[Int]]("f_num")
        )).toList
  }
}

case class RecallDB(f_id:Int,f_product:String,f_recall_reason:Option[String],f_fromdate:Option[String],f_enddate:Option[String],f_num:Option[Int])
object  RecallDB {
  val sql: SqlQuery = SQL(
    """
    select f_id,
       f_product,
       f_recall_reason,
       f_fromdate,
       f_enddate,
       f_num
  from t_recall_recall where f_enddate>={F_DATE_BEGIN} and f_enddate<{F_DATE_END}
    """.stripMargin
  )

  def getDataList(startdate:String,enddate:String): List[RecallDB] = DB.withConnection("mysql") {
    implicit connection =>
            println("sql:"+startdate+";"+enddate)
      (sql.on("F_DATE_BEGIN" -> startdate.replace("-",""), "F_DATE_END" -> enddate.replace("-","")))().map(row =>
        RecallDB(row[Int]("f_id"), row[String]("f_product"),
          row[Option[String]]("f_recall_reason"), row[Option[String]]("f_fromdate"), row[Option[String]]("f_enddate"),
          row[Option[Int]]("f_num")
        )).toList
  }
}
