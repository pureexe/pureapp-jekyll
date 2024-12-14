---
layout: post
title: หลอก Windows ว่ามีจอ โดยเพิ่มใน Device manager ไม่ต้องเอา Dummy Dongle มาเสียบ
date: '2024-12-14T10:13:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/dummy-monitor-for-windows.jpg
modified_time: '2024-12-14T10:13:00.000+07:00'
---

มีหลายสถานการณ์ที่ต้องการจะมีจอปลอมๆ ขึ้นมาหลอกซอฟแวร์ โดยต่อจาก Huawei CV10 โพสที่แล้ว ก็อยากจะมี 3 จอใช้แบบเหมือนตอนใช้แว่น Xreal แต่ว่าเมื่อใช้ซอฟแวร์ Virtual Desktop ปรากฏว่า Huawei CV10 ไม่อยู่ในรายชื่อที่รองรับ Multi-monitor แต่ทว่าถ้ามีจอจริงๆ แยก ก็ยังเห็นหลายจอใน Virtual Desktop ได้อยู่ ทางเลือกหนึ่งคือไปซื้อ Dummy ของ HDMI / DP มาเสียบ ซึ่งเป็นเรื่องที่ทำกันมากในวงการขุดเหมือง แต่ทว่ายังมีอีกหนทางหนึ่งคือจริงๆ เราสามารถเพิ่มจอหลอกๆ เข้าทาง Device Manager ได้เลย 

โดยเราจะใช้ Driver จาก [VirtualDisplay/Virtual-Display-Driver](https://github.com/VirtualDisplay/Virtual-Display-Driver) มาเพื่อหลอก Windows โดยสามารถเข้าไปโหลดที่ Github Repo ได้เลย 

[![Repo VirtualDisplay/Virtual-Display-Driver](/assets/images/post/dummy-monitor-for-windows/repo.png)](https://github.com/VirtualDisplay/Virtual-Display-Driver)

เมื่อโหลดไฟล์มาแล้ว ทำการแตกไฟล์ แล้วรัน `installCert.bat` ให้เรียบร้อย (อย่าลืมรันเป็น admin ด้วยละ)

![ลงใบ cert](/assets/images/post/dummy-monitor-for-windows/install_cert.png)

จากนั้นให้ก็อปไฟล์ `option.txt` ไปวางไว้ที่ `C:\IddSampleDriver`

![ก็อป option.txt](/assets/images/post/dummy-monitor-for-windows/copy-option.png)

จากนั้นเปิด Device Manager ขึ้นมา ที่ด้านบน เลือก `Action > Add legacy hardware`

![เพิ่ม legacy hardware](/assets/images/post/dummy-monitor-for-windows/add_driver.png)

จะเจอหน้าต่าง Wizard ให้กด Next

![หน้าต่าง Wizard](/assets/images/post/dummy-monitor-for-windows/03_hardware_wizard.png)

เลือก Advance (ตัวเลือกล่าง)

![เลือก Advance (ตัวเลือกล่าง)](/assets/images/post/dummy-monitor-for-windows/04_advance.png)

เลือก Display Adapters 

![เลือก Display Adapters ](/assets/images/post/dummy-monitor-for-windows/05_add_display_adapter.png)

ด้านขวาจะมีปุ่มเขียนว่า Have Disk กดเลือก 

![เลือก  Have Disk ](/assets/images/post/dummy-monitor-for-windows/06_havedisk.png)

ให้เลือกไฟล์ inf ในโฟลเดอร์ที่เราโหลดมาจาก Github Repo 

![เลือกไฟล์ inf](/assets/images/post/dummy-monitor-for-windows/08_select_inf.png)

จากนั้นที่หน้า Have Disk มันจะมี Virtual Display Driver ขึ้นมา 


![Virtual Display Drivers](/assets/images/post/dummy-monitor-for-windows/09_visual_display_driver.png)

กด Next ต่อไปเพื่อลง Driver 

![Install Virtual Display Drivers](/assets/images/post/dummy-monitor-for-windows/10_wait_to_add.png)

ถ้าลงสำเร็จจะขึ้นแบบนี้

![ลงเสร็จสมบูรณ์](/assets/images/post/dummy-monitor-for-windows/11_install_success.png)

ตอนนี้จะมีหน้าจอใหม่ปรากฏขึ้นมาแล้วใน Settings

![หน้าจอใหม่](/assets/images/post/dummy-monitor-for-windows/12_new_display_appear.png)

ใน Device Manager ก็จะมี Monitor เพิ่มมาอีกตัว


![หน้าจอใน device manager](/assets/images/post/dummy-monitor-for-windows/13_device_manager_new_monitor.png)


แน่นอนว่าอยากได้ 3 จอเราก็สมารถทำซ้ำขั้นตอนเดิมได้จนมี 3 จอ

![add nore monitor](/assets/images/post/dummy-monitor-for-windows/14_3monitor.png)

เพียงเท่านี้เราก็มี 3 จอไว้ใช้ใน Virtual Desktop แล้ว ที่นี่ก็จะสามารถใช้แว่นของ Huawei แทน XREAL ได้สักที 
