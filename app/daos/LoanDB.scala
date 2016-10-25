package daos
import anorm.SQL
import anorm.SqlQuery
import play.api.Play.current
import play.api.db.DB
/**
  * Created by chenweigen on 2016/8/11.
  */
case class MessageDB(startdate:Option[String],tempname:Option[String],productname:Option[String],title:Option[String],rescount:Option[Int],reach:Option[Int],reach_ratio:Option[BigDecimal],click:Option[Int],click_ratio:Option[BigDecimal])
object  MessageDB {
  val sql: SqlQuery = SQL(
    """
    select f_realstart,
       f_tempname,
       f_product,
       f_title,
       f_rescount,
       f_reach,
       f_reach_ratio,
       f_click,
       f_click_ratio
  from t_message_stat where f_realstart>={F_DATE_BEGIN} and f_realstart<={F_DATE_END}
    """.stripMargin
  )

  def getDataList(startdate:String,enddate:String): List[MessageDB] = DB.withConnection("mysql") {
    implicit connection =>
            println("sql:"+startdate+";"+enddate)
      (sql.on("F_DATE_BEGIN" -> startdate, "F_DATE_END" -> enddate))().map(row =>
        MessageDB(row[Option[String]]("f_realstart"), row[Option[String]]("f_tempname"),
          row[Option[String]]("f_product"), row[Option[String]]("f_title"), row[Option[Int]]("f_rescount"),
          row[Option[Int]]("f_reach"), row[Option[BigDecimal]]("f_reach_ratio"), row[Option[Int]]("f_click"),
          row[Option[BigDecimal]]("f_click_ratio")
        )).toList
  }
}
