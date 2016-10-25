package controllers
import java.text.SimpleDateFormat
import java.util.{Calendar, Date, GregorianCalendar}
import com.mohiva.play.silhouette.api.{Environment, LogoutEvent, Silhouette}
import play.api._
import play.api.mvc._

import scala.concurrent.Future
import daos._
/**
  * Created by chenweigen on 2016/8/11.
  */
object LoanControllers extends Controller{
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
    val datedata=getDateFromRequest(request.getQueryString("date01"),request.getQueryString("date02"))
    val datalist=MessageDB.getDataList(datedata._1,datedata._2)
    if(datedata._1.isEmpty||datedata._2.isEmpty){
      Ok(views.html.loaninfo(Nil,datedata._1,datedata._2))
    }else{
      Ok(views.html.loaninfo(datalist,datedata._1,datedata._2))
    }
  }
}
