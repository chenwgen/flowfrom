package daos

import anorm._
import play.api.db.DB
import play.api.Play.current
/**
  * Created by chenweigen on 2016/10/23.
  */
case class FlowTotalDB(
                        f_eventtime:String,
                        f_push:BigDecimal,
                        f_arrive:BigDecimal,
                        arrive_ratio:BigDecimal,
                        f_click:BigDecimal,
                        click_ratio:BigDecimal,
                        f_loanpage:BigDecimal,
                        loanpage_ratio:BigDecimal
                      )
object  FlowTotalDB {
  val sql: SqlQuery = SQL(
    """
    select f_eventtime,
       f_push,
       f_arrive,
       case when f_push=0 then 0.0 else f_arrive*1.0/f_push end as arrive_ratio,
       f_click,
       case when f_arrive=0 then 0.0 else f_click*1.0/f_arrive end as click_ratio,
       f_loanpage,
       case when f_click=0 then 0.0 else f_loanpage*1.0/f_click end as loanpage_ratio
  from t_flow_test where f_eventtime>={F_DATE_BEGIN} and f_eventtime<={F_DATE_END}
  and f_sourcetype='all' ORDER BY f_eventtime
    """.stripMargin
  )

  def getDataList(startdate:String,enddate:String): List[FlowTotalDB] = DB.withConnection("mysql") {
    implicit connection =>
//      println("sql:"+startdate+";"+enddate)
      (sql.on("F_DATE_BEGIN" -> startdate, "F_DATE_END" -> enddate))().map(row =>
        FlowTotalDB(row[String]("f_eventtime"), row[BigDecimal]("f_push"),
          row[BigDecimal]("f_arrive"), row[BigDecimal]("arrive_ratio"), row[BigDecimal]("f_click"),
          row[BigDecimal]("click_ratio"), row[BigDecimal]("f_loanpage"), row[BigDecimal]("loanpage_ratio")
        )).toList
  }
}
case class FlowDetailDB(
                        f_eventtime:String,
                        sourcetype:String,
                        f_tempname:String,
                        f_startdate:String,
                        f_push:BigDecimal,
                        f_arrive:BigDecimal,
                        arrive_ratio:BigDecimal,
                        f_click:BigDecimal,
                        click_ratio:BigDecimal,
                        f_loanpage:BigDecimal,
                        loanpage_ratio:BigDecimal )
object  FlowDetailDB {
//  val sql: SqlQuery = SQL(
//    """
//    select f_eventtime,
//      | f_sourcetype,
//      |f_tempname,f_startdate,f_push,f_arrive,
//      |case when f_push=0 then 0.0 else f_arrive*1.0/f_push end as arrive_ratio,
//      |f_click,case when f_arrive=0 then 0.0 else f_click*1.0/f_arrive end as click_ratio,
//      |f_loanpage,case when f_click=0 then 0.0 else f_loanpage*1.0/f_click end as loanpage_ratio
//      |from t_flow_test
//      |where f_sourcetype<>'all' and f_eventtime>={F_DATE_BEGIN} and f_eventtime<={F_DATE_END}
//      |and f_sourcetype in({SOURCE_TYPE})
//    """.stripMargin
//  )

  def getDataList(startdate:String,enddate:String,sourcetype:String): List[FlowDetailDB] = DB.withConnection("mysql") {
    implicit connection =>
      val query_sql="""
    select f_eventtime,
                      | f_sourcetype,
                      |f_tempname,f_startdate,f_push,f_arrive,
                      |case when f_push=0 then 0.0 else f_arrive*1.0/f_push end as arrive_ratio,
                      |f_click,case when f_arrive=0 then 0.0 else f_click*1.0/f_arrive end as click_ratio,
                      |f_loanpage,case when f_click=0 then 0.0 else f_loanpage*1.0/f_click end as loanpage_ratio
                      |from t_flow_test
                      |where f_sourcetype<>'all' and f_eventtime>='""".stripMargin+startdate+"' and f_eventtime<='" +enddate+
        "' and f_sourcetype in("+sourcetype+")"
//      println("query_sql:"+query_sql)
      val sql: SqlQuery = SQL(
        query_sql
      )
      sql().map(row =>
        FlowDetailDB(row[String]("f_eventtime"), row[String]("f_sourcetype"),row[String]("f_tempname"),
          row[String]("f_startdate"),row[BigDecimal]("f_push"),
          row[BigDecimal]("f_arrive"), row[BigDecimal]("arrive_ratio"), row[BigDecimal]("f_click"),
          row[BigDecimal]("click_ratio"), row[BigDecimal]("f_loanpage"), row[BigDecimal]("loanpage_ratio")
        )).toList
  }
}
