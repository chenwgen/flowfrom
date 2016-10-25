package controllers
import java.text.SimpleDateFormat
import java.util.{Calendar, Date, GregorianCalendar}

import com.mohiva.play.silhouette.api.{Environment, LogoutEvent, Silhouette}
import play.api._
import play.api.mvc._

import scala.concurrent.Future
import daos._
/**
  * Created by chenweigen on 2016/8/18.
  */
object RecallControllers extends Controller{
  def getDateFromRequest(startdatename: Option[String],enddatename:Option[String],enddate_minu:Int=0,startdate_minu:Int=10)={
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
    val cal = Calendar.getInstance()
    cal.add(Calendar.DAY_OF_MONTH, -enddate_minu)
    val enddate=format1.format(cal.getTime())
    cal.add(Calendar.DAY_OF_MONTH, -(startdate_minu-enddate_minu))
    val startdate=format1.format(cal.getTime())

    val datedata=if(date01.isEmpty){
      if(date02.isEmpty) (startdate,enddate) else (startdate,date02)
    }else{
      if(date02.isEmpty) (date01,enddate) else{
        if(format2.format(format1.parse(date01)).toInt>format2.format(format1.parse(date02)).toInt) ("","") else (date01,date02)
      }
    }
    datedata
  }
  def getWarnTable = Action { implicit request =>
    val datedata=getDateFromRequest(request.getQueryString("date01"),request.getQueryString("date02"),0,1)
//    println(datedata.toString())
    if(datedata._1.isEmpty||datedata._2.isEmpty){
      Ok(views.html.recall_warn_info(Nil,datedata._1,datedata._2))
    }else{
      val datalist=WarnInfoDB.getDataList(datedata._1,datedata._2)
      val mapdata=datalist.map(p=>WarnInfoDB(p.f_id,p.f_product match {case "aiqianjin"=>"爱钱进";case "dingdang"=>"玖富叮当"},
        p.f_recall_reason.getOrElse("") match {
          case "electricityWarn"=>Option("电商验证")
          case "idNopageWarn"=>Option("身份验证")
          case "phoneWarn"=>Option("手机验证")
          case "identityWarn"=>Option("身份验证")
          case "mobileWarn"=>Option("手机验证")
          case "photoWarn"=>Option("照片验证")
          case "zhimaWarn"=>Option("芝麻认证")
          case _=>p.f_recall_reason
        },p.f_fromdate,p.f_enddate,p.f_num
      ))
      Ok(views.html.recall_warn_info(mapdata,datedata._1,datedata._2))
    }
  }
  def datechange(datestr:String):String={
    val srcdate=datestr.replace("-","")
    srcdate.substring(1,4)+"-"+srcdate.substring(5,6)+srcdate.substring(7)
  }
  def getRecallTable = Action { implicit request =>
    val datedata=getDateFromRequest(request.getQueryString("date01"),request.getQueryString("date02"),0,1)
    //    println(datedata.toString())
    val format1=new SimpleDateFormat("yyyy-MM-dd")
    val format2=new SimpleDateFormat("yyyyMMdd")
    if(datedata._1.isEmpty||datedata._2.isEmpty){
      Ok(views.html.recall_recall_info(Nil,datedata._1,datedata._2))
    }else{
      val datalist=RecallDB.getDataList(datedata._1,datedata._2)

      val gpdata=datalist.map(p=>(p,p.f_enddate.getOrElse("1900-01-01").replace("-","").toInt-p.f_fromdate.getOrElse("1800-01-01").replace("-","").toInt-10))
        .filter(p=>p._2<=0).groupBy(p=>p._1.f_fromdate)
      val first_page_data=datalist.filter(p=>p.f_recall_reason.getOrElse("")=="firstPageRecall").map(p=>(p,p.f_enddate.getOrElse("1900-01-01").replace("-","").toInt-p.f_fromdate.getOrElse("1800-01-01").replace("-","").toInt-10))
             .filter(p=>p._2<=0).groupBy(p=>(p._1.f_product,p._1.f_enddate))
      val first_page_filterdata=first_page_data.map(p=>(p._1._1,p._2.maxBy(_._2))).map(p=>p._2._1).toList
      val mergedata=first_page_filterdata.++(datalist.filter(p=>p.f_recall_reason.getOrElse("")!="firstPageRecall"))
      val resultdata=mergedata.map(p=>RecallDB(p.f_id,p.f_product match {case "aiqianjin"=>"爱钱进";case "dingdang"=>"玖富叮当"},
        p.f_recall_reason.getOrElse("") match{
          case "firstPageRecall"=>Option("首页召回")
          case "electricityRecall"=>Option("电商验证")
          case "idNopageRecall"=>Option("身份验证")
          case "phoneRecall"=>Option("手机验证")
          case "identityRecall"=>Option("身份验证")
          case "mobileRecall"=>Option("手机验证")
          case "zhimaRecall"=>Option("芝麻认证")
          case "photoRecall"=>Option("照片验证")
          case _=>p.f_recall_reason
        },Option(p.f_fromdate.getOrElse("").replace("-","")),Option(p.f_enddate.getOrElse("").replace("-","")),p.f_num ))
      Ok(views.html.recall_recall_info(resultdata,datedata._1,datedata._2))
    }
  }
}
