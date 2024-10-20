---
layout: post
title: ตั้ง bundle ให้กับ Jekyll ไว้เวลาย้ายเครื่องจะได้ไม่ลำบาก
date: '2024-10-16T18:59:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2024-10-16T18:59:00.000+07:00'
---

หลังจากได้โดเมนใหม่มา ก็มีเหตุทำให้ต้องล้างเครื่อง ทีนี้เว็บนี้ที่เป็น jekyll ก็ต้องลำบากลง package ที่ใช้ใหม่โดยไปเปิดไฟล์ _config.yml ของ repo นี้แล้วสั่ง gem install ทีละอัน เสียเวลามาก แต่เมื่อช่วงปี 2018 ทาง Jekyll ได้ย้ายมาใช้ Bundler พร้อม[โพสวิธีการใช้งาน](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/)ไว้ ทำให้การย้ายเครื่องไม่เป็นเรื่องยากอีกต่อไป หลัง clone มาแล้วใส่คำสั่้งเดียวแล้วรันได้เลย ซึ่งบล็อกนี้ดันใช้ Jekyll มาก่อนมี bundler เลยไม่ได้มีโอกาสเซ็ทซักที ก็ถือโอกาสนี้เซ็ทอัปเลยแล้วกัน 

โดยหลักๆ ผมก็ทำตามโพสของ jekyll เลยนั่นแหละ อย่างแรกคือการเซ็ทโฟสเดอร์ของ bundler ซะก่อน 

```
bundle config set --local path 'vendor/bundle'  
```

จากนั้นเราก็ทำการ เพิ่ม bundler ให้กับ repo ที่มีอยู่เดิมด้วยคำสั่ง

```
bundler init
```

ทีนี้ผมจะเพิ่มตัว Jekyll และ plugin ของ Jekyll ที่ผมใช้อยู่ 3 ตัวอันได้แก่ `jekyll-redirect-from`, `jekyll-sitemap` และ `jekyll-paginate`
```
bundle add jekyll
bundle add jekyll-redirect-from
bundle add jekyll-sitemap
bundle add jekyll-paginate
```

อย่าลืมตั้ง `.gitignore` ให้สิ่งที่ Jekyll ได้สร้างขึ้นอันได้แก่ 2 โฟลเดอร์นี้

```
# Ignore folders generated by Bundler
.bundle/
vendor/
```

ทีนี้มาลองกันว่า 2 คำสั่งจริงหรือเปล่า โดยผมจะทำการลบโฟลเดอร์ของ repo นี้ทิ้งไปจากเครื่อง เมื่อเราสั่งรัน jekll แล้วจะเห็นว่ามันหา Jekyll ไม่เจอ 

![หา Bundler ไม่เจอ](/assets/images/post/switch-to-bundler/bundler_missing.jpg)
 
จากนั้นก็สั่ง 2 คำสั่งตามนี้เลย 

```
bundle config set --local path 'vendor/bundle'  
bundle install
```

เพียงเท่านี้เราก็จะสามารถรัน Jekyll บนเครื่องใหม่ได้โดยไม่ต้องติดตั้ง package ทีละอันแล้ว

![ใช้ Jekyll ผ่าน bundler ได้แล้ว](/assets/images/post/switch-to-bundler/bundler_done.jpg)