---
layout: post
title: ใช้ Firebase สร้างเว็บย่อลิ้งค์
date: '2016-06-12T16:00:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
- เว็บ
modified_time: '2016-06-12T16:00:00.000+07:00'
thumbnail:
---
บทความนี้ผมจะมาแชร์ประสบการณ์ใช้ Firebase ในการทำเว็บย่อลิ้งค์ อย่างที่ว่าไปว่าต่อจากนี้ไปจะเป็นแชร์ประสบการณ์ ไม่ใช่การสอน ดังนั้นจะเขียนปัญหาที่พบต่างๆ ไว้ด้วย ให้ท่านลองคิดดู

## ความเดิมเกี่ยวกับย่อลิงค์

นานมาแล้วผมก็เคยทำเว็บย่อลิ้งค์มาแล้ว ตอนนั้นใช้ [yourls.org][http://yourls.org] ปลั๊กอินที่เขียนไว้เองก็ยังอยู่ใน [Repo](https://github.com/pureexe/Yourls-meta-redirect) ของผมบน Github แต่เสียดายที่ทำโดเมนหลุดไปซะแล้ว แต่ตอนนี้ได้รับรีเควสมาว่าอยากจะทำเว็บย่อลิ้งค์สักหน่อย ได้โดเมนมาแล้ว แต่ว่าต้องรีบทำให้เสร็จ เลยลองมองหาเทคโนโลยีที่เพิ่มความเร็วงานของเราขึ้น

## ทำงานยังไง

หลักการทำงาน เพียงแค่เมื่อเข้ามายังหน้าที่ไม่ใช่ / ก็ทำการใช้ javascript redirect ไปยังตำแหน่งที่กำหนดเพียงเท่านั้นเอง

มาเริ่มกันเลยดีกว่า ขั้นแรก สั่ง firebase init เพื่อสร้างไฟล์สำหรับ Firebase hosting ขึ้นมาบนเครื่อง

![](/assets/images/post/firebase-make-url-shortener-site/init-firebase.jpg)

โดยไม่ลืมที่จะ rewrite Url ให้เข้ามาที่ /index.html

![](/assets/images/post/firebase-make-url-shortener-site/rewriteurl.jpg)

จากนั้นสร้างไฟล์ชื่อ router.js ขึ้นมาแบบนี้

<script src="https://gist.github.com/pureexe/0c3be84198c29fab163bb902bf83e10a.js"></script>

แล้วแก้ไฟล์ public/index.html ตามนี้

<script src="https://gist.github.com/pureexe/a4151bedb115d03ddd1922b6da351249.js"></script>

ลองสร้างข้อมูลใน realtime database ตามนี้

![](/assets/images/post/firebase-make-url-shortener-site/path.jpg)

เมื่อลองเข้าไป เว็บเรา.friebsaseapp.com/a ก็จะ redirect ไปยัง Google และเมื่อไป เว็บเรา.friebsaseapp.com/a/b ก็จะ redirect มายังเว็บไซต์แห่งนี้ เมื่อนำ firebase ไปเปลี่ยนชื่อโดเมน ก็จะได้เว็บไซต์สำหรับย่อลิ้งอย่างง่ายแล้ว
