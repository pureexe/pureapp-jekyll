---
layout: post
title: เขียนปลั๊กอินให้ Gulp.js
date: '2015-12-19T15:49:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2015-12-19T15:49:00.000+07:00'
thumbnail: /assets/images/thumbnail/try-gulp.png
---
ตอนนี้ผมกำลังพัฒนา library สำหรับใช้แปลภาษาไอรินให้ทำงานได้ ตอนแรกผมก็ใช้วิธีทดสอบด้วยมือครับ นั่งไปพิมพ์ไป หาบัคไปพลาง ผมก็เจอบัคบ้างประปราย แต่ผมก็มีปัญหาขึ้นมาคือ ผมจะรับประกันได้อย่างไรว่า library ที่สร้างขึ้นมาจะไม่มีบัค ซึ่งถ้าท่านใดเคยเรียนเขียนโปรแกรมมาละก็ผมมั่นใจว่าท่านจะต้องเคยเจอกับเกรดเดอร์ ที่จะคอยตรวจข้อสอบให้เราว่าโปรแกรมที่เราทำนั้นถูกต้องสมบูรณ์ดีหรือไม่ ดังนั้นผมจึงต้องหาตัวช่วยที่จะสร้างสิ่งที่เหมือนกับเกรดเดอร์ขึ้นมา นั่นก็คือ gulp.js

**หมายเหตุ:** ถ้าท่านเจอโพสนี้เป็นครั้งแรก ลองทำความรู้จักกับ Gulp.js เพิ่มเติมได้ที่โพส [ลองใช้ Gulp.js](/2015/11/try-gulp.html)

## การเขียนปลั๊กอินให้ Gulp.js
ก่อนอื่นเลยต้องขอบอกว่าผมจะใช้ coffeescript ในบทความต่อไปนี้ เนื่องจากผมใช้ coffeescript ในการทดสอบภาษาไอรินเพื่อจะได้เขียนโค้ดได้สั้นลง  แต่มีปัญหาอยู่เล็กน้อยคือ Gulp.js ไม่ลองรับการใช้ coffeescript โดยตรง จึงต้องใช้งานโดยการติดตั้ง coffeescript ลงในโฟลเดอร์ที่เราจะใช้ Gulp.js ก่อนโดยใช้คำสั่ง `npm install --save coffee-script` หลังจากนั้นให้สร้างไฟล์ `gulpfile.js` ขึ้นมาโดยด้านในมีเนื้อความว่า

{% highlight coffeescript %}
require('coffee-script/register');
require('./gulpfile.coffee');
{% endhighlight %}

จากนั้นสร้างไฟล์ `gulpfile.coffee` เพื่อเขียนงานที่ Gulp.js ต้องทำที่นัน โดยผมจะเขียนโค้ดไว้ว่า

{% highlight coffeescript %}
gulp = require("gulp")
gutil = require('gulp-util')
tester = require("./gulp-irin-tester.coffee")

gulp.task 'default', ->
  gutil.log "Running",gutil.colors.cyan("irin-lang"),"automated tester..."
  gulp.src(['case/**/config.json']).pipe(tester())
{% endhighlight %}

หลายท่านอาจสงสัยว่า `gulp-util` มีไว้ทำอะไรซึงนั่นก็มีไว้เพื่อแสดงสีออกทาง คอนโซลโดยการใช้งานคำสั่ง `gutil.log` ตามด้วย `gutil.colors.ชื่อสี` ตามที่ได้ปรากฏในโค้ดด้านบน โดยจะให้ผลลัพธ์เป็นเหมือนรูปภาพด้านล่าง โดยสีที่รองรับใน `gulp-util` ได้แก่ black,red,blue,green,yellow,magenta,cyan,white และ gray

![](/assets/images/post/create-plugin-for-gulpjs/gutil-for-color.png){: .middle-image .medium-image}

ซึ่งทาง Gulp.js ก็มี[วิธีการเขียนปลั๊กอิน](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/guidelines.md)แนะนำไว้ แต่ผมไม่เข้าใจเท่าใดนักจึงขอสรุปมาเป็นประเด็นข่าวๆ ในรูปแบบความเข้าใจของผม เพื่อให้ท่านผู้อ่านสามารถเข้าใจได้ง่ายตามไปด้วย

{% highlight coffeescript %}
  gulp.src(['case/**/config.json']).pipe(tester())
{% endhighlight %}

จากโค้ดจะสังเกตได้ว่า การส่งค่าของ Gulp.js จะใช้คำสั่ง pipe แต่กลับไม่มีอะไรส่งออกไปยังปลั๊กอินที่เราสร้างขึ้นเพราะว่า Gulp.js ใช้วิธีการส่งค่าผ่าน `steam` ซึ่งเราสามารถรับค่าได้โดยการเขียนโค้ดดังนี้

{% highlight coffeescript %}
through = require 'through2'
myPlugin = ->
  through.obj (file,enc,callback)->
    if file.isBuffer()
     callback(null,file)
module.exports = myPlugin
{% endhighlight %}
จะเห็นว่าต้องใช้ไลบารี่ชื่อ `through2` ช่วยในการทำงาน ซึ่งตัวแปร file นั้นจะเป็น buffer ของการอ่านไฟล์ที่ได้มาจากคำสั่ง `src` ของ Gulp.js โดยวิธีใช้ก็เหมือน buffer จากการอ่านไฟล์ทั่วไปใช้คำสั่ง `.toString()` เพื่อเข้าถึงเนื้อหาของไฟล์เป็นต้น แต่เมื่อทำงานเสร็จแล้วให้ทำการ `callback(null,file)` กลับไปเสมอ เพื่อบอก gulp ว่างานที่ได้รับมานั้นเสร็จสิ้นแล้ว

## สรุป
เพียงเท่านี้เราก็จะสามารถรับค่าจากที่ส่งมาจาก Gulp ได้แล้ว ซึ่งเราก็จะนำค่านี้ไปทำสิ่งต่างๆต่อไป ไม่ว่าจะเป็นการทดสอบไลบารี่แบบที่ผมนำไปใช้ หรือจะนำไปทำงานอื่นๆที่ต้องการให้ทำอัตโนมัติ ก็สามารถทำได้ตามที่ท่านต้องการเลยครับ
