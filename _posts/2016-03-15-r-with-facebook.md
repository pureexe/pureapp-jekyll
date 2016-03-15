---
layout: post
title: ใช้ภาษา R ดึงข้อมูล Facebook
date: '2016-03-15T15:22:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2016-03-15T15:22:00.000+07:00'
thumbnail: /assets/images/thumbnail/r-with-facebook.png
---
เราสามารถทำการดึงข้อมูลจากเฟสบุ๊คได้จาก Graph API แต่ว่าตัว Graph API ของเฟสบุ๊คนั้นถูกออกแบบมาเพื่อให้แอปพลิเคชั่นดึงข้อมูลจากเฟสบุ๊ค ซึ่งเราจะมาดึงตัว Graph API เข้ามาใช้งานในภาษา R กัน

## เข้าใจโครงสร้าง Graph API

เราจะติดต่อกับเฟสบุ๊คผ่านข้อมูลรูปแบบของกราฟ โดยจะมีข้อมูลอยู่ 3 แบบได้แก่ จุดยอด (Node) ใช้แทนสิ่งของบนเว็บเฟสบุ๊ค เช่น รูปภาพหรือโพส, เส้นเชื่อม (Edge) ใช้แทนการที่ผู้คนบนเฟสบุ๊คมีปฏิสัมพันธ์กัน เช่นการกดไลค์และการคอมเม้น และข้อมูล (Field) จะอธิบายข้อมูลของแต่ละจุดยอด เช่น ชื่ออะไร ทำงานที่ไหน เป็นต้น ซึ่งต่างจากรูปแบบตารางที่ใช้วิเคราะห์ข้อมูลในภาษา R จึงจำเป็นต้องทำการแปลงข้อมูลให้อยู่ในรูปแบบของตารางก่อนนำไปวิเคราะห์อีกที แต่จะขอละหัวข้อนี้ไว้ เนื่องจากการเข้าถึงจุดยอดที่ต่างกัน ทำให้การแปลงข้อมูลเป็นตารางทำได้ยาก

ท่านสามารถอ่านรายละเอียดเต็มได้ที่ [Graph API Overview](https://developers.facebook.com/docs/graph-api/overview/)

## การสร้างแอป

เราจะเข้าถึงข้อมูลของเฟสบุ๊ค โดยใช้วิธีเดียวกันกับที่แอปเฟสบุ๊คโดยกดที่ปุ่มที่ลิ้งนี้ [Add a New app](https://developers.facebook.com/quickstarts/?platform=web) พร้อมตั้งชื่อแอปให้เรียบร้อย

![](/assets/images/post/r-with-facebook/addapp.png){: .middle-image .medium-image .z-depth-1}

## การรับกุญแจ

การรับ กุญแจ (Access Token) เพื่อเข้าถึงข้อมูล โดยแต่ละผู้ใช้จะได้รับกุญแจที่แตกต่างกัน แม้ว่าจะเป็นแอปเดียวกัน โดยเราสามารถรับกุญแจได้ง่ายๆ โดยเข้าไปที่ [Graph Explorer](https://developers.facebook.com/tools/explorer/)

ที่มุมขวามือจะมีปุ่มเขียนว่า application จะถูกเซ็ตเป็น Graph Explorer อยู่ให้เราทำการเปลี่ยนปุ่มนี้ให้เป็นชื่อแอปที่เราสร้างขึ้น

![](/assets/images/post/r-with-facebook/app-button.png){: .middle-image .z-depth-1}

ต่อไปกดปุ่ม Get User Access Token เพื่อรับกุญแจ

![](/assets/images/post/r-with-facebook/get-user-token.png){: .middle-image .z-depth-1}

ขั้นนี้แอปจะถามสิทธิในการเข้าถึง เราเลือกข้อมูลที่เราต้องการเข้าถึง ซึ่งเลือกทั้งหมดเลยก็ได้

![](/assets/images/post/r-with-facebook/app-permission.png){: .middle-image .z-depth-1}

ในขั้นนี้มันจะขึ้นขอสิทธิ์ต่างๆ พร้อมกับคำเตือนว่ายังไม่สามารถใช้สิทธิ์บางอย่างได้เนื่องจากยังไม่อนุมัติ แต่ไม่ต้องกังวลไปครับ ยังสามารถใช้สิทธิทั้งหมดได้ ถ้าเจ้าของกุญแจนั้นเป็นเจ้าของแอป ดังนั้นกดปุ่ม Okay ได้เลยครับ

![](/assets/images/post/r-with-facebook/press-ok.png){: .middle-image .z-depth-1}

คราวนี้ในช่อง access token ด้านบนจะปรากฏกุญแจสำหรับการเข้าถึงข้อมูลขึ้นมาแล้ว ขอให้รักษากุญแจนี้ไว้ให้ดีๆด้วยนะครับ

![](/assets/images/post/r-with-facebook/key.png){: .middle-image .z-depth-1}

## การดึงข้อมูล

เราสามารถดึงข้อมูลจากเฟสบุ๊คได้โดยการเข้าไปที่
```
  https://graph.facebook.com/จุดยอด/เส้นเชื่อม?fields=ชื่อข้อมูล&access_token=กุญแจ
```

ตัวอย่างผมจะดึงข้อมูลชื่อของผมผ่านทาง จุดยอด me ชื่อข้อมูล name ผ่านโปรแกรม chrome
```
  https://graph.facebook.com/me/?fields=name&access_token=กุญแจของผม
```

![](/assets/images/post/r-with-facebook/my-name.png){: .middle-image .z-depth-1}

ข้อมูลที่ปรากฏขึ้นนี้เรียกว่า JSON ซึ่งเราสามารถดึงข้อมูลนี้มาใช้ในภาษา R ได้

## การเข้าถึงในภาษา R

มี 2 ไลบรารี่ที่จำเป็นต้องใช้งานนั่นคือ Rcurl และ RJSONIO สั่งติดตั้งโดยใช้คำสั่ง

{% highlight r %}
install.packages("RCurl");
install.packages("RJSONIO");
{% endhighlight %}

เรียกทั้ง 2 ไลบรารีเข้ามาใช้งานโดยใช้คำสั่ง

{% highlight r %}
library("RCurl");
library("RJSONIO");
{% endhighlight %}

ดึงข้อมูล json เก็บไว้ในตัวแปรชื่อ data โดยใช้คำสั่ง

{% highlight r %}
data<-getURL("https://graph.facebook.com/จุดยอด/เส้นเชื่อม?fields=ชื่อข้อมูล&access_token=กุญแจ")
{% endhighlight %}

แปลงข้อมูลจาก JSON ให้อยู่ในรูปของภาษา R โดยใช้คำสั่ง

{% highlight r %}
data<-fromJSON(data)
{% endhighlight %}

ผมลองดึงข้อมูลจากจุดยอด me และนี้คือข้อมูลที่ผมดึงออกมาได้
[![](/assets/images/post/r-with-facebook/namedata.png){: .middle-image .z-depth-1}](/assets/images/post/r-with-facebook/namedata.png)

ลองใช้คำสั่ง `data["name"]` เพื่อดูชื่อ และ `data["languages"]` เพื่อดูภาษาที่ใช้งาน
![](/assets/images/post/r-with-facebook/access_data.png){: .middle-image .z-depth-1}

## การต่อยอด

ซึ่งท่านสามารถอ่านรายละเอียดของจุดยอดเส้นเชื่อมและข้อมูลของ Graph API ได้ที่ [Graph API reference](https://developers.facebook.com/docs/graph-api/reference) เพื่อประยุกต์ใช้กับงานของท่านต่อไปครับ
