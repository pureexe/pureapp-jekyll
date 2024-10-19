---
layout: post
title: เพิ่มความยาวให้สายอินเตอร์เน็ต ลากไฟเบอร์ซะเลย
date: '2024-10-19T17:54:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
- diary 
thumbnail: /assets/images/thumbnail/extend-internet-range-with-fiber.jpg
modified_time: '2024-10-19T17:54:00.000+07:00'
---

ตอนนี้มีเหตุต้องย้ายหอใหม่ เสร็จแล้วห้องที่หอใหม่เป็นห้องคู่ A/B ตัวเองได้อยู่ห้อง B ไม่มีรูให้เสียบสาย Internet (RJ45) ต้องไปเสียบกับห้อง A แต่พอเสียบแล้ว เน็ตก็ติดๆ ดับซะเหลือเกิน ไม่แน่ใจเป็นที่อะไรสงสัยหนูกัดสาย ก็เลยจะเดินสายมาจากสวิทของหอซะเลย แต่ด้วยความที่อยู่ชั้น 3 สวิทมันอยู่ชั้น 1 ไกลพอควรเลยทีเดียว

## เลือกซื้อของ

ก่อนอื่นเลย ต้องเลือกว่าจะเดินสายแบบไหน ในห้องมีเดินเข้ามาแต่สายไฟ หน้าห้องมีสาย Coaxial ดังนั้นการเชื่อมต่อที่เราจะมี ทำให้การเชื่อมต่อที่เป็นไปได้น่าจะมีดังนี้ โดยสายจะใช้วิธีมุดลอดเข้าใต้ประตูเข้ามา

1. สายไฟ (Powerline internet) เช่น [TPLink AV600](https://s.shopee.co.th/2LGPLIo3r6)
2. Coxial (MoCA) ซึ่งหาในไทย/จีน ยากมากๆ ไม่ค่อยมีคนใช้
3. ไร้สาย (Wireless/Wifi)
4. สายแลน CAT6/CAT7 
5. สายไฟเบอร์
 
สายไฟอาจจะง่ายเพราะไม่ต้องลากสายเพิ่ม แต่ด้วยความเป็นหอพัก ก็กลัวสัญญาณกวนจากไมโครเวฟ และราคาที่ค่อนข้างสู เลยข้ามตัวเลือกนี้ไป ส่วนสาย Coxial จะหาตาม แอปส้มแอปฟ้าก็หาไม่ได้เลย เลยถือว่าเปิดประสบการณ์แล้วกันเลือกสายไฟเบอร์ไปเลย

พอเลือกได้แล้วว่าจะใช้ไฟเบอร์ก็ต้องเลือกความเร็ว โดยท่ออินเตอร์เน็ตที่จะเข้าห้องเป็น 1G อยู่แล้ว แต่จะเลือก 10G เพื่ออนาคตเลยดีไหม เพราะเริ่มมีบางอุปกรณ์ใช้ 10G แล้ว ถึงราคา 10G จะลดลงมาค่อนข้างมาก แต่ด้วยราคาที่ต่างกันพอควร เลยเลือก 1G ไปก่อน 

### เลือกซื้อตัวแปลง

ส่องคร่าวๆ [สวิทที่รับ SFP 10G](https://detail.tmall.com/item.htm?id=663524083665) ตอนนี้ราคาลงมาที่แถวๆ 500 บาทแล้วแต่ต้องใช้ 2 ตัว

[![SFP switch](/assets/images/post/extend-internet-range-with-fiber/sfp-switch.jpg)](https://detail.tmall.com/item.htm?id=663524083665)

ยังไม่รวม [SFP Module 10G](https://item.taobao.com/item.htm?id=736982284579) อีกตัวละ 300 ต้องใช้อีก 2 ตัว

[![SFP Module](/assets/images/post/extend-internet-range-with-fiber/sfp-module.jpg)](https://item.taobao.com/item.htm?id=736982284579)

ขณะที่ [Media converter ขนาด 1G](https://s.shopee.co.th/5VDRRO0bL8) ราคาอยู่ที่ 300 บาทเท่านั้นแล้วซื้อทีได้เป็นคู่ไม่ต้องซื้อ 2 ชุด

[![SFP Module](/assets/images/post/extend-internet-range-with-fiber/media-converter-1g
.jpg)](https://s.shopee.co.th/5VDRRO0bL8)

### เลือกซื้อสาย 

เท่าที่ศึกษาดูคร่าวๆ สายไฟเบอร์ที่มีขายในแอปส้ม/แอปฟ้าจะมีด้วยกันหลักๆ อยู่ 4 ประเภท อาจมีมากกว่านี้เนื่องจากผมไม่ได้ศึกษาลึกด้านนี้ โดยตัว Media converter 1G ที่เลือกใช้จะรองรับเป็นแบบคอร์เดี่ยวและเลือกใช้สำหรับเดินภายนอก ดังนั้น จึงซื้อสาย [คอร์เดี่ยวภายนอก](https://s.shopee.co.th/5VDRSmIesf) มาใช้ 100 เมตร 500 บาท โดย 4 ประเภท คร่าวๆ มีตามนี้ เลือกใช้ได้ตามความต้องการของท่านเลย

|   | ภายใน  | ภายนอก  | 
|---|---|---|
| คอร์เดียว (SC) |  [![สายคอร์เดียว ภายใน](/assets/images/post/extend-internet-range-with-fiber/indoor-patch-cable.jpg)](https://s.shopee.co.th/5VDRSmIesf) |  [![สายคอร์เดียว ภายใน](/assets/images/post/extend-internet-range-with-fiber/outdoor-singlecore.jpg)](https://s.shopee.co.th/1VhIhpB06Q)  |
| คอร์คู่ (LC)  |  [![สายคอร์คู่ ภายใน](/assets/images/post/extend-internet-range-with-fiber/indoor-dual-core.jpg)](https://s.shopee.co.th/609i4HSxG9) |  [![สายคอร์คู่ ภายนอก](/assets/images/post/extend-internet-range-with-fiber/outdoor-dual-core.jpg)](https://s.shopee.co.th/9KQA2hHrWW) | 
{: .table .has-text-centered}

## เดินสาย

เมื่อเลือกซื้อของเสร็จแล้วก็ได้เวลามาเดิน ตอนแรกสายก็จะส่งมาให้เราเป็นม้วนกลมๆ แนะนำให้ค่อยๆ ไม่งั้นจะลำบากชีวิตแน่ๆ เวลาพันกัน เพราะเราไม่สามารถตัดต่อสายได้ ต้องใช้เครื่องต่อสายพิเศษที่ราคาค่อนข้างสูง

![สายไฟเบอร์ออปติก](/assets/images/post/extend-internet-range-with-fiber/shipped_cable.jpg)

และผมพลาดทำสายที่แกะแล้ว กลิ้งตก เรียบร้อยพันกันยับ ต้องค่อยๆ นั่งแกะส่วนที่พันออกจากกันเสียเวลาไปหลายชั่วโมงอยู่ 😂

![สายไฟเบอร์ออปติกที่พันกันยับ](/assets/images/post/extend-internet-range-with-fiber/messy_cable.jpg)

จากนั้นก็โยนสายไฟเบอร์ optic ลงช่องชาร์ปไปเลย แล้วค่อยเดินไปที่สวิทชั้น 1

![ช่องชาร์ป](/assets/images/post/extend-internet-range-with-fiber/sharp.jpg){: height="300px" width="400px"}

มาถึงที่ตัวสวิทแล้ว สายเหลือยาวพอควร (สีดำ ด้านขวา) ขดๆ เก็บไว้แล้วกัน

![ห้องสวิท](/assets/images/post/extend-internet-range-with-fiber/switch_room.jpg)

แน่นอนว่าสวิทที่หอใช้รองรับ SFP แทนที่ใช้ตัวแปลงทั้งคู่ลองเอาสายเราต่อตรงเข้าช่องนี้เลยแล้วกัน น่าเสียดายที่ลองแล้ว ไฟขึ้นที่ตัว media converter อยู่นะว่าหาคู่เจอ แต่อินเตอร์เน็ตกลับไม่วิ่ง หมือนว่าต้องไป config ใน switch แล้วไม่มีรหัสเข้า ก็เลยใช้ media converter เหมือนเดิมแล้วกัน

![ห้องสวิทรองรับ SFP](/assets/images/post/extend-internet-range-with-fiber/switch_support_sfp.jpg)

หลังจากนั้นก็เสียบตัว media converter ให้เรียบร้อยจนมีไฟเขียวขึ้น

![ฝั่งห้องสวิท](/assets/images/post/extend-internet-range-with-fiber/switch_room_done.jpg)

กลับมาที่ห้องพักเรา เสียบให้เรียบร้อยแล้วเช็คไฟสถานะ ไฟลิงค์ขึ้น วิ่งได้ 1G ปกติ เป็นอันเสร็จสิ้น

![ฝั่งห้องสวิท](/assets/images/post/extend-internet-range-with-fiber/media-converter-done.jpg)

เย้ ในที่สุดก็มีเน็ตใช้ในห้องใหม่แล้ว น้ำตาจะไหล 😂