---
layout: post
title: ย้ายมูมู่ไปใช้ Messenger Platform
date: '2016-04-13T10:10:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
- ไอริน
modified_time: '2016-04-13T10:10:00.000+07:00'
thumbnail:
---
หลังจากที่เฟสบุ๊คได้เปิดตัว Messenger Platform ที่มี API สำหรับสร้างบอทบนเฟสบุ๊คโดยตรง ผมจึงได้ตัดสินใจย้ายมูมู่จากเดิมที่ใช้ Graph API ไปใช้ Messenger Platform ด้วยเพื่อความสะดวกในหลายๆด้านครับ

แต่เดิมผมสร้างแอปมูมู่ไว้อยู่แล้วโดยสร้างไว้สมัยเป็น API v2.2 ซึ่งปัจจุบัน Messenger Platform ใช้ได้ใน 2.6 ดังนั้นสร้างใหม่ก็ไม่มีปัญหาอะไร แต่ผมจะขอใช้ตัวเดิมเป็นตัวต่อเลยนะครับ

![](/assets/images/post/mumu-to-messenger-platform/mumu-appid.png){: .middle-image .medium-image .z-depth-1}

ที่หน้าตั้งค่าของแอปเองในแถบด้านซ้ายมือจะมีเมนูใหม่ขึ้นมานั่นคือ Messenger

![](/assets/images/post/mumu-to-messenger-platform/messenger-sidebar.png){: .middle-image .z-depth-1}

จากนั้นจะเห็นในส่วน Token Generation เพื่อใช้สร้างโทเคนของเพจเราขึ้นมาใช้งาน (ซึ่งเหมือนกับตอนใช้ Graph API นั่นละ)

![](/assets/images/post/mumu-to-messenger-platform/token-generation.png){: .middle-image .medium-image .z-depth-1}

โดยคราวนี้จะขอสิทธิ์ในการใช้งาน pages_messaging กับ pages_messaging_phone_number (จากเดิมที่มูมู่ใช้วิธีการขอ read_page_mailboxes กับ manage_pages มาใช้งาน)

![](/assets/images/post/mumu-to-messenger-platform/permissions.png){: .middle-image .medium-image .z-depth-1}

หลังจากนั้นผมก็นำโค้ดเดิมของมูมู่ที่คอยอ่านข้อความในเฟสบุ๊คออกไปก่อนเพื่อไม่ใช้มันตีกัน

![](/assets/images/post/mumu-to-messenger-platform/remove-old-code.png){: .middle-image .medium-image .z-depth-1}
