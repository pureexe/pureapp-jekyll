---
layout: post
title: ก็อปข้ามเครื่องผ่าน rsync มันช้า ใช้ rclone ดีกว่า
date: '2024-10-20T20:10:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2024-10-20T20:10:00.000+07:00'
---

พอต้องการก็อปปี้ไฟล์ข้ามเครื่อตัวเลือกหนึ่งที่เลือกใช้กันคือ rsync เพราะว่ามันติดมากับเครื่อง (Ubuntu) ไม่ต้องลงอะไรเพิ่ม แต่มันก็ก็อปช้ามาก ก็อปทีละไฟล์ จะให้ก็อปได้หลายไฟล์ย้ายมาใช้ rsync แทน

ก่อนอื่นก็ติดตั้งด้วยคำสั่ง

```
sudo apt install -y rclone 
```

จากนั้นก็เซ็ทอัป config ด้วยคำสั่ง

```
rclone config
```

จะได้หน้าตาขึ้นมาแบบนี้ กด n เพื่อสร้างใหม่

![](/assets/images/post/copy-faster-with-rclone/config01.jpg)

ตั้งชื่อเครื่องให้เรียบร้อย จากนั้นจะถึงตรงให้เลือก Storage เนื่องจากจะใช้แทน rsync ให้พิมพ์เลขของ SSH/SFTP โดยเวอร์ชั่นที่ใช้อยู่อันนี้เป็นเลข 24 แต่เลขอาจต่างไปตามเวอร์ชั่น

![](/assets/images/post/copy-faster-with-rclone/config02.jpg)

จากนั้นจะให้กรอก host ก็กรอกเลข ip ของเรา กรอก username กรอก port (อันนี้ให้ enter default ไปเลย) ต่อมาจะให้เลือก y/n/g ว่าจะช้รหัสบบไหน ของผมใช้แบบให้มันจำรหัสไว้เลยจึงกรอก y แล้วกรอกรหัสสองรอบ key file ไม่ได้ใช้ ให้เว้นว่างไว้เลน

![](/assets/images/post/copy-faster-with-rclone/config03.jpg)

จากนั้นมันจะถามพาสของ key file อีกที กด y แล้วตั้งรหัสโลด (พิมพ์สองรอบ)

![](/assets/images/post/copy-faster-with-rclone/config04.jpg)

จากนั้นมันก็จะถามเกี่บวกับ key file ต่ออันนี้ผมใช้ default หมด กด enter ไปรัวๆ ได้เลย 

![](/assets/images/post/copy-faster-with-rclone/config05.jpg)

จนถามว่าจะ edit advance config ไหม อันนี้ตอบไป n แล้วมันจะใช้ดูให้แน่ใจอีกครั้ง (ถาม y/e/d) ตอบ y ไปว่าเรียบร้อยแล้ว จากนั้นกด q  ออกมาจากหน้า config ได้เลย


![](/assets/images/post/copy-faster-with-rclone/config06.jpg)


ทีนี้ก็จะสามารถก็อปปี้ได้แล้ว! โดยใช้คำสั่ง 

```
rclone copy ชื่อเครื่อง:โฟลเดอร์ต้นทาง โฟลเดอร์ปลายทาง --progress --transfers 8
```
โดย --progress คือให้แสดงว่าก็อปถึงไหนแล้ว แล้ว --transfers 8 คือก็อปพร้อมกัน 8 ไฟล์ จากปกติมันจะก็อปทีละไฟล์ผ่าน rsync


![](/assets/images/post/copy-faster-with-rclone/copy_command.jpg)

ที่นี้การก็อปไฟล์ก็ไวขึ้นมากแล้ว 😊