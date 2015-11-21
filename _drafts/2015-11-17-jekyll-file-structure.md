---
layout: post
title: "โครงสร้างไฟล์ของ Jekyll"
date: '2015-11-17T18:20:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- "สอน"
- "เว็บ"
modified_time: '2015-11-17T18:23:00.000+07:00'
thumbnail:
---
หลังจากตอนที่แล้วผมได้อธิบายไปถึงวิธีการติดตั้ง Jekyll ในตอนนี้ผมจะแนะนำให้รู้จักเกี่ยวกับโครงสร้างไฟล์ของ Jekyll ซึ่งเราจำเป็นจะต้องวางไฟล์ของเราให้ถูกที่เพื่อให้ Jekyll สามารถทำงานได้อย่างถูกต้องครับ

**หมายเหตุ:** หากยังไม่ได้อ่านวิธีการติดตั้งในโพสที่แล้วสามารถไปอ่านกันได้ที่ [การติดตั้ง Jekyll](https://www.pureapp.in.th/2015/07/jekyll-prepare.html)

เรามาเริ่มต้นการสร้างโปรเจค Jekyll ใหม่ด้วยการใช้คำสั่งผ่าน Terminal หรือ Command Prompt
{% highlight bash %}
jekyll new ชื่อโปรเจค
{% endhighlight %}

นี่คือไฟล์ที่ผมได้ออกมาหลังจากสร้างโปรเจคใหม่ชื่อ Simple
![](/assets/images/post/jekyll-file-structure/empty-project.png){: .middle-image}

จากไฟล์ชื่อโฟสเดอร์ที่เห็นเราก็พอจะเดาได้ถึงความหมายของมัน อย่าง css ก็ต้องเก็บไฟล์ css เพื่อจัดหน้า \_sass ก็มีไว้เก็บ sass ก่อนถูกแปลงเป็น css เป็นต้น

{:.striped}
| ไฟล์/โฟลเดอร์    | ความหมาย     |
| ------------- | ------------- |
| config.yml | สำหรับเก็บข้อมูลการตั้งค่าของ Jekyll |
|_drafts|สำหรับเก็บร่างของเรื่องที่เราจะโฟสลง Jekyll|
| _includes | สำหรับเก็บไฟล์ที่ต้องการใช้คำสั่ง include |
| _layouts | |
| _posts | |
| _data | |
| _site | |
| .jekyll-metadata | |
| index.html | |
| อื่นๆ  | |
