package controllers

import java.text.SimpleDateFormat
import java.util.Date

import daos._
import play.api.mvc._

/**
  * Created by chenweigen on 2016/8/11.
  */
object FlowControllers extends Controller{
  /**
    * 获取request提交的起始日期和结束日期参数
    *
    * @param request:Request, startdatename:Request中起始日期参数名称,enddatename:Request中结束日期参数名称
    * @return （startdate:String,enddate:String)
    *
    */
  def getDateFromRequest(startdatename: Option[String],enddatename:Option[String])={
    val format1=new SimpleDateFormat("yyyy-MM-dd")
    val format2=new SimpleDateFormat("yyyyMMdd")
    //val format3=new SimpleDateFormat("yyyy-MM-dd")
    val date01=startdatename match {
      case None=>""
      case dateget=>dateget.get match {
        case "请选择起始时间" => ""
        case date => format1.format(format1.parse(date))
      }
    }
    val date02=enddatename match{
      case None=>""
      case dateget=>dateget.get match {
        case "请选择结束时间" => ""
        case date => format1.format(format1.parse(date))
      }
    }
    val datedata=if(date01.isEmpty){
      if(date02.isEmpty) (format1.format(new Date()).substring(0,8)+"01",format1.format(new Date())) else (date02.substring(0,8)+"01",date02)
    }else{
      if(date02.isEmpty) (date01,format1.format(new Date())) else{
        if(format2.format(format1.parse(date01)).toInt>format2.format(format1.parse(date02)).toInt) ("","") else (date01,date02)
      }
    }
    datedata
  }
  def getMessageTable = Action { implicit request =>
//    println("all:"+request.getQueryString("all").getOrElse(""))
    val all_flag=request.getQueryString("all").getOrElse("")
    val mess_flag=request.getQueryString("mess").getOrElse("")
    val splash_flag=request.getQueryString("splash").getOrElse("")
    val cap_flag=request.getQueryString("cap").getOrElse("")
    var con_extend=""
    if(mess_flag=="mess") con_extend=con_extend+"'message',"
    if(splash_flag=="splash") con_extend=con_extend+"'splash',"
    if(cap_flag=="cap") con_extend=con_extend+"'capacity',"
    con_extend=if(con_extend.endsWith(",")) con_extend.substring(0,con_extend.length-1) else con_extend
    val query_con=if(all_flag==""&mess_flag==""&splash_flag==""&cap_flag==""||all_flag=="all") "'message','splash','capacity'" else con_extend
    println("query:"+query_con)
    val datedata=getDateFromRequest(request.getQueryString("date01"),request.getQueryString("date02"))
    val data_total_list=FlowTotalDB.getDataList(datedata._1,datedata._2)
    val data_detail_list=FlowDetailDB.getDataList(datedata._1,datedata._2,query_con)
    if(datedata._1.isEmpty||datedata._2.isEmpty){
      Ok(views.html.flow_chart(Nil,Nil,datedata._1,datedata._2,query_con))
    }else{
      Ok(views.html.flow_chart(data_total_list,data_detail_list,datedata._1,datedata._2,query_con))
    }
  }
}
