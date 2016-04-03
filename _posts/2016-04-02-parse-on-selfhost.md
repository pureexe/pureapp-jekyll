---
layout: post
title: ใช้งาน Parse บนเครื่องของตัวเอง
date: '2016-04-03T09:45:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2016-04-03T09:45:00.000+07:00'
thumbnail: /assets/images/thumbnail/parse-on-selfhost.png
---
หลังจากที่ [Parse](http://parse.com) ได้ประกาศปิดตัวไป ก็ได้ประกาศโครงการ Parse server เพื่อให้ผู้ที่ใช้งานเดิม สามารถย้ายออกไปตั้งอยู่บนเซิฟเวอร์ของตัวเองได้

## เตรียมความพร้อม

สิ่งที่ต้องใช้ในการติดตั้ง Parse server ได้แก่

1. Node.js (รุ่น 4.3 หรือใหม่กว่า)
2. MongoDB

เมื่อมีทั้ง 2 อย่างพร้อมแล้วก็จะสามารถติดตั้งได้โดยใช้คำสั่ง

{% highlight shell %}
npm install -g parse-server parse-dashboard mongodb-runner
{% endhighlight %}

## เริ่มใช้งาน

ก่อนอื่นต้องเรียก MongoDB ขึ้นมาใช้งานด้วยการใช้คำสั่ง

{% highlight shell %}
mongodb-runner start
{% endhighlight %}

แล้วจากนั้นเรียกใช้งานตัว Parse server ด้วยคำสั่ง

{% highlight shell %}
parse-server --appId แอปไอดี --masterKey กุญแจ
{% endhighlight %}

โดยถ้าทำการย้ายระบบ Parse มาจากเซิฟเวอร์เดิมก็ให้ตั้งแอปไอดีและกุญแจให้เหมือนเดิม แต่ถ้าจะสร้างแอปใหม่ สามารถตั้งแอปไอดี และกุญแจเองได้เลย

จากนั้นเรียกหน้าควบคุมขึ้นมาโดยการใช้คำสั่ง

{% highlight shell %}
parse-dashboard --appId แอปไอดี --masterKey กุญแจ --serverURL "ที่อยู่Parse" --appName ชื่อแอป
{% endhighlight %}

โดยให้ใช้แอปไอดี กับกุญแจเหมือน parse-server และที่อยู่Parse นั้นถ้าเราไม่ได้แก้การตั้งค่าอะไรให้กรอกเป็น http://localhost:1337/parse ส่วนชื่อแอปก็สุดแล้วแต่จะตั้ง

ในที่สุดแล้วเราก็จะพบกับหน้าควบคุมของ Parse ปรากฏขึ้นมาที่ http://localhost:4040

![](/assets/images/post/parse-on-selfhost/parse-dashboard.png){: .middle-image .medium-image z-depth-1}
