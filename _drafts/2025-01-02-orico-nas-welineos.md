---
layout: post
title: รีวิว Orico NAS และ WelineOS 
date: '2025-01-02T16:09:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- review
thumbnail: /assets/images/thumbnail/orico-nas-welineos.jpg
modified_time: '2025-01-02T16:09:06.000+07:00'
---
 
เนื่องจาก Mini PC ที่ใช้โหลดไฟล์ ระเบิดไปแล้ว เลยมองหา NAS ใช้งานง่าย ราคาถูก มาใช้งาน โดย NAS ที่มองหาจะต้องรันบน  12V/2A ได้เพื่อให้ใช้งาน เลยจับผลัดจับพลูได้ [Orico CD3510](https://s.shopee.co.th/2fv8xpxoXc) จาก [Taobao](https://detail.tmall.com/item.htm?_u=120f691o9c6682&id=722934471777&spm=a1z09.2.0.0.22472e8d3UYZOc) มาราคา 359 หยวน หรือราคาประมาณ 1700 บาท รุ่นนี้มีใน [shopee](https://s.shopee.co.th/2fv8xpxoXc) เช่นกัน 

[![ราคา 359 หยวนบน Taobao](/assets/images/post/orico-nas-welineos/taobao-pricing.jpg)](https://detail.tmall.com/item.htm?_u=120f691o9c6682&id=722934471777&spm=a1z09.2.0.0.22472e8d3UYZOc)

## สรุปการใช้งาน

### ข้อดี 
- ใช้ง่าย เซ็ทไม่ปวดหัว 
- รองรับ SMB 
- สามารถโหลดบิทได้ในตัว
- มีระบบ user มาให้ เพื่อให้แต่ละ user มีไฟล์แยกกันได้

### ข้อเสีย 
- ไม่มี Web UI 
- ไม่รองรับ NFS
- ต้องใช้เซิฟเวอร์ในการ login ทำให้ไม่รู้ว่า อีกนานแค่ไหน NAS จะใช้ไม่ได้เพราะเซิฟเวอร์ปิด
- ไม่รองรับ docker (ทั้งๆ ที่หน้าเว็บ weline บอกว่ารองรับ)

## ตัว NAS 

ในกล่องประกอบด้วย NAS, สาย lan, สาย usb-c เป็น usb-A สำหรับต่อคอม และตัวแปลงไฟ

![ภายในกล่อง](/assets/images/post/orico-nas-welineos/what_in_box.jpg)

พอแกะ NAS ออกมาใต้ฝาก็จะมีรายละเอียดเขียนอยู่กรณีทำคู่มือหายเอามือถือแสกนโหลดแอปได้ทันที โดยฝาแกะง่ายมากมีเพียงแค่แม่เหล็กเกาะอยู่เบาๆ แตะทีแทบจะหลุด

![ภายใต้ฝา](/assets/images/post/orico-nas-welineos/instruction_under_cover.jpg)

พอใส่ disk เข้้าไปก็จะเห็นว่า NAS ใหญ่กว่า disk อยู่พอสมควร ถ้าเน้นประหยัดที่อาจจะมีออปชั่นอื่นที่เหมาะกว่า

![ภายใต้ฝา](/assets/images/post/orico-nas-welineos/inserted_disk.jpg)

## ตัวแอป

โดยแอปของ Weline OS มีอยู่ด้วยกัน 4 platform หลัก Android/iOS/Mac/Windows แต่ขาดหน้า webui หลักไปเฉยเลย

![หน้า download ของ weline](/assets/images/post/orico-nas-welineos/weline-download.jpg)

โดยหน้า Menu สำหรับ Windows ก็จะมีประมาณนี้ ซึ่งเมนูเดียวที่ใช้คือ Samba เพื่อเปิดแชร์ SMB

![หน้า เมนู ของ weline](/assets/images/post/orico-nas-welineos/weline-menu.jpg)

โดยหน้า Samba ก็จะมีให้ตั้ง Username กับ password ของ samba 

![หน้า samba ของ weline](/assets/images/post/orico-nas-welineos/weline-samba.jpg)

โดยตัว WelineOS ก็สามารถโหลดบิทได้ด้วยตัวเอง

![หน้า torrent ของ weline](/assets/images/post/orico-nas-welineos/weline-samba.jpg)

