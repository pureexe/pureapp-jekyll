---
layout: post
title: สร้างบอทโต้ตอบเฟสบุ๊คด้วย PHP แบบไม่ใช้ Framework
date: '2016-07-10T17:00:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2016-07-10T17:00:00.000+07:00'
thumbnail:
---
บทความนี้เขียนขึ้นเพื่อให้นักเขียนโปรแกรมมือใหม่สามารถสร้างระบบโต้ตอบบนเฟสบุ๊คเป็นของตัวเองได้ เนื่องจากพวกเรายังเป็นมือใหม่ ไม่มีงบในการเช่าโฮสดีๆ ดังนั้นเราจึงใช้ได้แค่ของฟรี แต่ของฟรีส่วนใหญ่มักจะได้ PHP เวอร์ชั่นไม่ใหม่นัก อีกพวกเรายังใช้ Framework ไม่เป็นอีก ทำให้บทความนี้เป็นประโบชน์อย่างมาก หากพร้อมแล้วก็เริ่มกันเลย

## หาโฮสฟรี

สำหรับท่านที่มีโฮสอยู่แล้ว สามารถข้ามขั้นตอนนี้ไปได้เลยนะครับ

ทำไมเราต้องมีโฮส ทำไมใช้ทำในเครื่องเหมือนเดิมไม่ได้หรือไง คำตอบคือได้ครับ แต่ว่ามันจะค่อนข้างลำบากในการตั้งค่า เนื่องจากเฟสบุ๊คจะเป็นคนส่ง request ข้อความของผู้ใช้มาหาเครื่องเรา ดังนั้นเครื่องที่ใช้ทำจำเป็นต้องรับ request เข้ามาจาก internet ภายนอกได้ ดังนั้นผมจึงแนะนำให้ทำบนโฮสเลยดีกว่าครับ โดยปกติแล้วผมจะใช้ โฮสฟรีของ [openshift.com](https://openshift.com) เนื่องจากมีความยืดหยุ่นสูงและทำโดย RedHat ดันนั้นเลยวางใจได้มาก แต่วิธีการใช้งานดูแล้วค่อนข้างยากเกินไป ดังนั้นครั้งนี้ผมจะใช้ [Hostinger](https://hostinger.in.th) แทนครับ โดยเลือกสมัครสมาชิกและสมัครโฮสติ้งให้เรียบร้อย

![](/assets/images/post/fbbot-php-no-framework/hostinger-regis.png){: .middle-image .medium-image .z-depth-1}

## เตรียมการเฟสบุ๊ค

สำหรับฝั่งเฟสบุ๊คนั่นบอทโต้ตอบตอนนี้ API ที่เป็น Official อนุญาตให้ทำได้เพียงกับเพจเท่านั้น (แน่นอนว่ามี Unofficial สำหรับใช้กับ user ด้วย) ดังนั้นเราจึงต้องสร้างเพจใหม่กันซะก่อน ซึ่งหลังจากสร้างเพจเสร็จแล้ว ให้ทำการตั้งค่าแอปต่อโดยเข้าเข้าไปสร้างแอปที่ [developers.facebook.com](https://developers.facebook.com) เลือก Add a New app ที่ด้านบนขวามือพร้อมตั้งชื่อให้เรียบร้อย

![](/assets/images/post/fbbot-php-no-framework/create-fb-app.png){: .middle-image .medium-image .z-depth-1}

ระบบจะพาเข้าสู่ Dashboard ให้ทำการเลือกปุ่ม Get started ที่หัวข้อ Messenger แล้วจากนั้นที่ซ้ายมือจะปรากฏหัวข้อ Product ว่ามี Messenger เพิ่มเข้ามาพร้อมกับถูกพาไปที่หน้าดังภาพ

![](/assets/images/post/fbbot-php-no-framework/fbapp-dashboard.png){: .middle-image .medium-image .z-depth-1}

จากนั้นให้ทำการเลือกเพจที่เราจะทำบอทโต้ตอบก่อนจะเริ่มการตั้งค่า Webhook ในลำดับถัดไป

![](/assets/images/post/fbbot-php-no-framework/fbapp-token-generate.png){: .middle-image .medium-image .z-depth-1}

## ตั้งค่า Webhook

Webhook คือบริการที่เมื่อมีคนส่งข้อความเข้ามาหาเพจเรา facebook จะส่ง request เข้ามาหาโฮสของเรา เลือก Setup Webhook จากนั้นใส่ URL ของโฮสเรา ซึ่งผมจะต่อท้าย URL ด้วย /Webhook เพื่อเผื่อนำหน้าเว็บไปใช้อย่างอื่นด้วย จากนั้นติ๊กถูกที่ message เพื่อบอกว่าเราต้องการรับ

![](/assets/images/post/fbbot-php-no-framework/fbapp-setup-webhook.png){: .middle-image .medium-image .z-depth-1}
