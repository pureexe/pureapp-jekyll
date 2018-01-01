---
layout: post
title: ไดโนเสาร์โครมบน OLED
date: '2016-10-18T08:43:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2016-10-18T08:43:00.000+07:00'
thumbnail: /assets/images/thumbnail/chrome-dino.jpg
---

ผมได้ลองพอร์ตโค้ดไดโนเสาร์โครม จาก Arduboy มาเล่นได้สักพักแล้วละครับ และนี่คือตัวอย่างโค้ดหลังจากที่พอร์ตออกมานะครับ โดยผมได้ใช้เล่นกับ จอ OLED 128x64 แบบ I2C พร้อมกับใช้ WeMOSd1Mini เป็นตัวประมวลผล อาจจะเห็นว่าเกมส์ค่อนข้างมีความหน่วงเนื่องจาก I2C ไม่สามารถรับข้อมูลเข้าได้ทันนะครับ

<!--
<div style="width:100%" class="center">
<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpureexe%2Fvideos%2F1411130432234670%2F&show_text=0&width=560" class="center" width="560" height="315" style="border:none;overflow:hidden;max-width:100%;" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
</div>
-->

<div class="fb-video" data-href="https://www.facebook.com/pureexe/videos/1411130432234670/" data-show-text="false"><blockquote cite="https://www.facebook.com/pureexe/videos/1411130432234670/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pureexe/videos/1411130432234670/"></a><p>พรุ่งนี้มีสอบ ทำไมยังไม่นอน?!
#WeMOSd1mini พอร์ตโค้ดมาจาก #Arduboy
พบว่าแลคมาก ใน Arduboy ลื่นกว่านี้ สงสัย CPU เร็วไม่พอ</p>Posted by <a href="https://www.facebook.com/pureexe">Pakkapon Phongthawee</a> on Saturday, October 8, 2016</blockquote></div>

และนี่คือซอร์สโค้ดหลังจากพอร์ตแล้วหาท่านมีอุปกรณ์เหมือนกับผมสามารถทำไปเล่นกันได้ครับ สำหรับการต่อพอร์ตก็เหมือนกับที่ได้เห็นในวิดีโอ SDA ต่อเข้า D2, SCK ต่อเข้า D1,VCC ต่อเข้า 5V, GND ต่อเข้า GND, ปุ่ม pull up ต่ออยู่ระหว่าง D3 และ GND

<script src="https://gist.github.com/pureexe/9dc845ed76631c03724816fb43f32522.js"></script>
