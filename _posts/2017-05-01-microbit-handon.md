---
layout: post
title: "สัมผัสกับ Micro:Bit"
date: '2017-05-01T00:15:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
- Review
modified_time: '2017-05-01T00:15:00.000+07:00'
thumbnail: /assets/images/thumbnail/microbit-handon.jpg
---
หลังจากได้พูดถึง Micro:Bit กันไปแล้ว วันนี้ได้มาสัมผัสกับเข้า Micro:Bit จริงๆ เสียที คราวนี้จะมีรีวิวกันให้เห็นๆ ไปเลยว่าแท้จริงเจ้านี่มันเป็นอย่างไรบ้าง จะเด็ดจริง ดังที่ผมได้กล่าวไว้ในโพสก่อนหน้าไหม

## ฮาร์ดแวร์

ด้านฮาร์ดแวร์ อย่างที่บอกว่าเป็นบอร์ดสำหรับการศึกษาจากเท่าที่จับๆ ดูพบว่าปลอดภัยดี สามารถให้เด็กเล่นได้ ไม่เหมือนบอร์ดบางรุ่นที่จะมี socket ตัวผู้แหลมยื่นออกมา ถ้าเหยียบเข้าไปล่ะก็เป็นเรื่องแน่นอน แต่ว่าก็ไม่แนะนำให้เหยียบเจ้า Micro:Bit เช่นกันเนื่องจากตัวบอร์ดนั้นมีปุ่มที่ยื่นออกมา ทำให้วางไม่สนิทแนบกับพื้น ถ้าเหยียบอาจทำให้บอร์ดหักได้ ส่วนเรื่องของขนาดนั้นใหญ่เทียบเท่ากับ NodeMCU 2 ตัวเลยทีเดียว

## ซอฟแวร์

ประสบการณ์การใช้งานซอฟแวร์ นี่ถือเป็นอะไรที่สุดยอดมาจริงๆ เนื่องจาก Micro:Bit สามารถเขียนโปรแกรมได้ผ่านเว็บไซต์เมื่อสร้างโปรแกรมเสร็จสามารถกดดาวน์โหดลงมาในเครื่องแล้วทำการคัดลอกไปยังตัว Micro:Bit ที่เสียบอยู่กับคอมพิวเตอร์ได้ทันที โดย Micro:bit นั้นจะขึ้นมาในรูปแบบของ Storage ที่ถูกเสียบอยู่ แต่เมื่อทำการคัดลอกไฟล์มาวางจะเป็นการแฟลชโปรแกรมลงไปนั่นเอง

<center>
  <img src="/assets/images/post/microbit-handon/mass-storage.png" />
</center>

สำหรับเครื่องมือพัฒนาที่มีให้ใช้งานบนเว็บไซต์ [microbit.co.uk](https://www.microbit.co.uk) โดยไม่ต้องโหลดมาติดตั้งบนเครื่องนั้นมีอยู่ด้วยกันทั้งสิ้น 4 ตัวคือ

### Microsoft Block Editor

<center>
  <img src="/assets/images/post/microbit-handon/blockeditor.png" />
</center>

คือโปรแกรมที่เราใช้วิธีการลากและวางบล็อกลงไปเป็นคำสั่งต่างๆ เหมาะสำหรับผู้เริ่มต้นกับการเขียนโปรแกรม วิธีการใช้งานนั้นเข้าใจง่ายมาก อาจดูผิดแปลกจาก Flowchart ปกติไปสักหน่อย เพราะว่าโปรแกรมนั้นทำงานแบบ Event Base อาจจะไปเริ่มที่ Onpress โดยไม่จำเป็นต้องมี start ก็ได้ แต่นับได้ว่าสะดวกไม่น้อยเลยทีเดียว แล้วที่สำคัญตัว Block Editor นั้นสามารถกดสลับมาเขียนด้วย Javascript ได้ด้วย

### Microsoft Touch Dev

<center>
  <img src="/assets/images/post/microbit-handon/touchdev.png" />
</center>


เหมาะสำหรับหน้าจอสัมผัส โดยจะใช้วิธีแตะบนปุ่มแล้วระบบจะเขียนโค้ดลงมาเป็นบรรทัด แต่วิธีใช้ค่อนข้างงงมากต้องดำน้ำกันเยอะพอตัว ส่วนตัวแล้วผมไม่แนะนำให้ใช้เจ้านี่ ควรใช้ Microsoft Block Editor หรือถ้าขั้นสูงแล้วก็ใช้ MicroPython ไปเลยจะดีกว่า


### MicroPython

<center>
  <img src="/assets/images/post/microbit-handon/micropython.png" />
</center>

สำหรับขาใหญ่ที่ต้องการใช้ขั้นสูงของบอร์ด Micro:bit นี้สามารถเขียนได้โดยการใช้งาน MicroPython แม้วาจะไม่ใช่ Python เต็มขั้นเสียทีเดียวแต่ก็อุดมด้วยกลิ่นอายของ Python สามารถเขียนโค้ดภาษา Python ได้อย่างลื่นไหลโดยไม่มีปัญหา จากที่ลองอ่านเอกสารประกอบของ MicroPython แล้วสามารถแก้กันได้อย่างลื่นไหลมากเลยทีเดียว โดยเอกสารดังกล่าวสามารถอ่านได้ ที่นี่ [docs.micropython.org](http://docs.micropython.org/en/latest/pyboard/) แต่มีข้อเสียนิดหน่อยคือเป็นเพียงเครื่องมือเดียวที่ไม่สามารถจำลองเหตุการณ์บนเบราว์เซอร์ได้ ต้องโหลดมาใส่ตัว Micro:bit เท่านั้น

### Code Kingdom Javascript

<center>
  <img src="/assets/images/post/microbit-handon/codekingdomjavascript.png" />
</center>

ตอนแรกผมอยากจะใช้เข้า Micro:bit เพราะภาษา javascript ถึงแม้ว่าจะไม่สามารถใช้ได้เต็มขั้นขอแบบตัดสเปคแบบ MicroPython ก็ยังดีแต่พอลองใช้จริงแล้วพบว่าทำได้เพียงลากบล็อคของ javascript มาใช้งานเท่านั้น ไม่สามารถเขียนเพิ่มเองได้ ต่างจาก Microsoft Block Editor ที่สามารถทำได้

### หมายเหตุ

จากที่ลองใช้งานอุปกรณ์บนเว็บนั้นไม่สามารถเปิดพร้อมกันได้ เพราะจะทำให้อีกแท็บนึงที่เปิดไว้เกิด Error ขึ้นดังนั้นเลือกใช้ได้เพียงครั้งละ 1 อย่างเท่านั้น

## สรุป

เท่าที่ได้ลองจับ Micro:bit ส่วนตัวยังชอบอยู่ เหมาะสำหรับไว้สอนคนอื่นให้ก้าวเข้าสู่การใช้งานบอร์ดต่างๆ เพราะด้านซอฟแวร์ นั้นเรียกได้ว่าพร้อมเพียงมาก อีกทั้งฮาร์ดแวร์นั้น ก็ไม่ได้อันตรายต่อเด็ก แถมราคาก็ไม่แพงมากอีกด้วย ส่วนการเริ่มเขียนโปรแกรมนั้น เจอกันโพสหน้าครับ

## ช่วงขายของเน้นๆ

สำหรับบอร์ด Micro:bit ต้องขอบคุณ [IOXhop](http://www.ioxhop.com) ที่ส่งมาให้ผมฟรีโดยไม่คิดเงิน ซึ่งหากท่านสนใจสามารถสั่งซื้อกับทาง IOXhop ในราคา 580 บาท ได้ที่ [ลิ้งค์นี้](http://www.ioxhop.com/product/523/microbit-arm-base-embedded-for-education)