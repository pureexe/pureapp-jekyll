---
layout: post
title: ชิป Intel QXQ4 บูทไม่ขึ้น เพราะ bios ใหม่ไป
date: '2024-11-08T11:45:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
- diary
thumbnail: /assets/images/thumbnail/QXQ4-intel-cpu-on-z690.jpg
modified_time: '2024-11-08T11:45:00.000+07:00'
---

เห็นช่วงนี้ CPU ตัว Intel ES gen 12 ราคาลดลงเยอะมาก ประกอบกับ CPU ที่ใช้อยู่ i7-13700k มีอาการติดๆ ดับๆ เลยซื้อ QXQ4 ที่เทียบเท่า I7-12700 (non-k) มาลองด้วยราคา 343 หยวน (ประมาณ 1500 บาท) ใน [Taobao](https://item.taobao.com/item.htm?id=764026246442) เลยเห็นว่าคุ้มค่าที่จะซื้้อมาลองเพราะเปลี่ยนเป็น gen ใหม่ก็ยังไม่พร้อม ต้องซื้อบอร์ดใหม่อีก 

ใน Taobao ก็มีอีกหลายรุ่น ถ้าสนใจก็ [จิ้มลิงค์นี้](https://item.taobao.com/item.htm?id=764026246442) ได้เลย แต่มีคำเตือนว่าช่อง PCIe ใช้ไม่ได้นะคิดดีๆ ก่อนซื้อ

[![ราคา QXQ4 บน Taobao](/assets/images/post/QXQ4-intel-cpu-on-z690/taobao-qxq4.jpg)](https://item.taobao.com/item.htm?id=764026246442)

พอของมาถึังก็ดีใจรีบเอามาใส่บอร์ด ปรากฏว่าบูทไม่ขึ้น มี Error เกี่ยวกับแรม ถึงกับหน้าซีดเลยทีเดียว นึกว่าเสียตังฟรี ก็เลยไล่หารีวิวชิป ES gen 12 ดู ก็ไปเจอคลิปของ linus tech tips ที่บอกไว้ตอน[วินาทีที่ 7:02](https://youtu.be/NBAs2H8I04M?t=422) ว่า เป็นปัญหาเกี่ยวกับ management engine ได้อัปเดตเป็นรุ่นใหม่ทำให้ใช้งานไม่ได้


<iframe style="margin-left:auto; margin-right:auto;display:block;" width="560" height="315" src="https://www.youtube.com/embed/NBAs2H8I04M?si=rTxFxhVZWD7g0ZTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ก็เลยจะลองถอย bios เป็นรุ่นเก่าๆ เพื่อจะใช้งานได้ แต่ก็ติดปัญหาว่าบอร์ดที่จะใช้งานด้วย [Asrock Z790 PG Sonic](https://pg.asrock.com/mb/Intel/Z790%20PG%20Sonic/Specification.th.asp) มันไม่มี bios flashback ก็เลยต้องสลับไปลองอีกบอร์ดหนึ่ง ซึ่งคือ [Gigabyte Z690 Aero D](https://www.gigabyte.com/th/Motherboard/Z690-AERO-D-rev-1x) แทน โดยพบว่า Bios ที่ทำให้เปิดขึ้นคือ รุ่น F8 ซึ่งเป็นรุ่นสุดท้ายก่อนจะขึ้น Gen 13 

[![Aero D F8 Bios](/assets/images/post/QXQ4-intel-cpu-on-z690/f8-bios.jpg)](https://www.gigabyte.com/th/Motherboard/Z690-AERO-D-rev-1x/support#support-dl-bios)

นั่นหมายความว่า Z790 ที่มาพร้อมกับ gen13 จะใช้ชิป ES ตัวนี้ไม่ได้ นั่นเอง 😢 แต่ว่า หลังจากการท่องตามรีวิวของ Taobao [มีคอมเม้น](https://item.taobao.com/item.htm?id=687627087323)บอกว่า Erying B760M เปิดขึ้นนะ น่าแปลกมาก แต่อันนี้ผมไม่ได้ลองเอง ไว้ท่านไหนลอง ทักมาบอกผมได้นะครับ

[![Erying B760M Comment](/assets/images/post/QXQ4-intel-cpu-on-z690/erying-comment.jpg)](https://item.taobao.com/item.htm?id=687627087323)

โพสนี้น่าจะพูดถึงเรื่อง Bios อย่างเดียว ไว้เดี๋ยวจะมาโพสเรื่องการประกอบอีก ถ้ามีโอกาสครับ