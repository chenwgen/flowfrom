import java.text.SimpleDateFormat
import java.util.Calendar

import scala.math.BigDecimal.RoundingMode

val cal = Calendar.getInstance()
val format1=new SimpleDateFormat("yyyy-MM-dd")
cal.add(Calendar.DAY_OF_MONTH, -1)
val start=format1.format(cal.getTime())
cal.add(Calendar.DAY_OF_MONTH, -7)
val end=format1.format(cal.getTime())
BigDecimal(0.20545).setScale(4,RoundingMode.HALF_UP)
val a="'message','splash','capacity'"
a.contains("message")