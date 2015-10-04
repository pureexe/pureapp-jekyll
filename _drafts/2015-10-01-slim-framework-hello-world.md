---
layout: post
title: 'Slim Framework : ติดตั้งและเริ่มต้นกับ Hello world'
date: '2015-10-01T07:21:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- "สอน"
- web
modified_time: '2015-10-01T07:21:32.026+07:00'
thumbnail: http://4.bp.blogspot.com/-DcAiEh9i8AU/Vgvcnz1kdvI/AAAAAAAAa_s/obm1iDoPak4/s72-c/slim_download.png
blogger_id: tag:blogger.com,1999:blog-3103072889085475591.post-3345512143416601813
blogger_orig_url: http://www.pureapp.in.th/2015/10/slim-framework-hello-world.html
---
จากที่ท่านได้ทำความรู้จักกับ Slim Framework ไปแล้วนั้นสิ่งต่อไปที่จะทำคือติดตั้ง Slim Framework ลงเครื่องเพื่อเริ่มใช้งานโดยหลังจากท่านได้ติดตั้งอุปกรณ์ที่จำเป็นในการเขียนเรียบร้อยแล้วให้ท่านดาวน์โหลด slim framework ได้จาก [http://slimframework.com](http://slimframework.com) เลื่อนลงมาด้านล่าง จะพบกับข้อความ Download ZIP Archive    

![https://4.bp.blogspot.com/-DcAiEh9i8AU/Vgvcnz1kdvI/AAAAAAAAa_s/obm1iDoPak4/s1600/slim_download.png](https://4.bp.blogspot.com/-DcAiEh9i8AU/Vgvcnz1kdvI/AAAAAAAAa_s/obm1iDoPak4/s1600/slim_download.png)

หลังจากนั้นที่โฟลเดอร์สำหรับเก็บไฟล์หน้าเว็บผมจะสร้างโฟลเดอร์ชื่อ test ขึ้นมาจากนั้นคัดลอกไฟล์ที่อยู่ในซิปของ Slim Framework เข้าไปวาง

![https://3.bp.blogspot.com/-4s0mJlOjdN0/Vgvg-VHV8aI/AAAAAAAAa_8/m90wLOMXwvI/s1600/slim_copy.png](https://3.bp.blogspot.com/-4s0mJlOjdN0/Vgvg-VHV8aI/AAAAAAAAa_8/m90wLOMXwvI/s1600/slim_copy.png)

หลังจากนั้นเข้าไปที่ localhost/test หรือ url อื่นตามที่ท่านได้กำหนดไว้ จะขึ้นหน้าต้อนรับของ Slim Framework

![https://4.bp.blogspot.com/-rsEQ5KDzclw/VgvjaZ1klAI/AAAAAAAAbAM/fG7zmwwqrn0/s1600/slim_welcome.png](https://4.bp.blogspot.com/-rsEQ5KDzclw/VgvjaZ1klAI/AAAAAAAAbAM/fG7zmwwqrn0/s1600/slim_welcome.png)

จากนั้นให้ลบไฟล์ที่ไม่จำเป็นออกไป (ตามภาพประกอบ)
หมายเหตุไฟล์ชื่อ .gitignore และ .travis.yml จะซ่อนอยู่หากใช้ linux

![https://1.bp.blogspot.com/-jla7K-ypLdY/Vgx3mdU-mtI/AAAAAAAAbAw/iB-9ChdZOVc/s1600/slim-no-require.png](https://1.bp.blogspot.com/-jla7K-ypLdY/Vgx3mdU-mtI/AAAAAAAAbAw/iB-9ChdZOVc/s1600/slim-no-require.png)

เมื่อเราเปิด index.php ขึ้นมาแล้วจะเห็นฟังก์ชั่นและคอมเม้นของ Slim Framework เต็มไปหมด

![https://2.bp.blogspot.com/-71HhqjEggk8/Vgx4yrxUCZI/AAAAAAAAbA8/qhbETom_FLc/s1600/slim_index.png](https://2.bp.blogspot.com/-71HhqjEggk8/Vgx4yrxUCZI/AAAAAAAAbA8/qhbETom_FLc/s1600/slim_index.png)

โดยผมจะแก้โค้ดของ index.php เป็นแบบนี้

<script src="https://gist.github.com/pureexe/53a401e144c72b02eb05.js"></script>

และนี่คือผลลัพธ์ที่ได้

![https://2.bp.blogspot.com/-lrsNy7Mm-bw/Vgx6d71Uw5I/AAAAAAAAbBI/HGAKIjIOlco/s1600/slim_test.png](https://2.bp.blogspot.com/-lrsNy7Mm-bw/Vgx6d71Uw5I/AAAAAAAAbBI/HGAKIjIOlco/s1600/slim_test.png)

อธิบายแบบง่ายๆ บรรทัดที่ 2-4 คือการเตรียมตัวแปร $app->get คือการกำหนด route ของหน้าเว็บ (ซึ่งจะอธิบายในโพสถัดไป) หลังจากนั้นเมื่อเรากำหนดทุกอย่างเสร็จก็สั่ง app->run(); เป็นการเสร็จสิ้น

เท่านี้การติดตั้งก็เสร็จสิ้นลงแล้วครับ บทต่อไปจะเป็นการอธิบายการใช้งาน Slim Framework ครับ
