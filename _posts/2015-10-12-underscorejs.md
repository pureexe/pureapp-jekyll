---
layout: post
title: "รู้จักกับ underscore.js แหล่งรวมฟังก์ชันน่าใช้"
date: '2015-10-12T23:40:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- "สอน"
- "web"
modified_time: '2015-10-12T23:43:00.000+07:00'
thumbnail: /assets/images/thumbnail/underscorejs.png
---
นึกย้อนไปสมัยหัดเขียนโปรแกรมใหม่ๆ ผมได้หัดเขียนภาษาซี อัลกอริทึมบางอย่าง เช่น การเรียงลำดับ การค้นหา ล้วนแล้วแต่ต้องเขียนขึ้นมาเองเท่านั้น แรกๆผมก็สนุกนะ แต่หลังๆยอมรับว่าไม่ไหม เนื่องจากมันยาวมาก และต้องพิมพ์ซ้ำเดิมทุกรอบ หลังๆดีขึ้นมาหน่อยที่ผมเริ่มรู้จักไลบารี่มากขึ้น อยากเรียงลำดับก็สามารถ Include ไฟล์เพื่อนำฟังก์ชันเข้ามาใช้งานได้เลย ซึ่งในกรณีของการเขียนเว็บ แม้ว่าเว็บจะมีคำสั่งเรียงลำดับ คำสั่งค้นหา จะสามารถใช้งานได้ทันทีโดยไม่ต้อง Include ไฟล์เข้ามาแต่ก็มีบางคำสั่งซึ่งเป็นคำสั่งนอกเหนือจากที่พื้นฐานมี ทำให้เราต้องเขียนมันขึ้นมาใหม่เอง ซึ่งเราจะต้องเหนื่อยในการเขียนโค้ดขึ้นอีกมาก

แต่ปัญหานี้ก็หมดไปเมื่อผมได้รู้จักกับ underscore.js ซึ่งเจ้าตัว underscore.js คือชุดไลบารี่ที่รวมคำสั่งสำเร็จรูปที่จะรวมคำสั่งที่เราใช้งานบ่อยไว้ มีมากกว่า 100 ฟังก์ชันให้เลือกใช้งาน อีกทั้งยังมีขนาดไฟล์ที่เล็กมากเพียง 5.7kb เท่านั้น และข้อดีอีกอย่างของ underscore.js คือสามารถใช้งานร่วมกับไลบรารี่อย่าง Jquery และ Backbone ได้เป็นอย่างดี ซึ่งผมเดิมใช้ Jquery อยู่แล้วทำให้รู้สึกว่า underscore.js นี้น่าใช้เป็นอย่างมาก

ตัวอย่างคำสั่งเช่น การสลับอาเรย์สามารถทำได้โดยใช้คำสั่ง
{% highlight javascript %}
_.shuffle([1, 2, 3, 4, 5, 6]);
{% endhighlight %}
แม้ว่าการสลับค่าในอาเรย์นั้นเหมือนทำได้โดยง่าย แต่ท่านที่เคยเขียนขึ้นมาคงทราบดีว่ามันไม่ง่ายเท่าใดนักที่จะเขียนคำสั่งชุดนี้ขึ้น ดังนั้นไลบารี่ underscore.js  จึงช่วยเราได้เยอะ

สำหรับท่านที่สนใจสามารถอ่านเพิ่มเติมได้ที่ [underscorejs.org](http://underscorejs.org)