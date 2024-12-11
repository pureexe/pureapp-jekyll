---
layout: post
title: ทำให้ภาพอนิเมะดูสมจริงด้วย Stable Diffusion (SDXL/ DAMN!)
date: '2024-12-12T01:13:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/make-anime-look-realistic-using-sd.jpg
modified_time: '2024-12-12T01:13:00.000+07:00'
---
แทนที่จะ denoise 1.0 แบบการสร้างภาพตามปกติ เราสามารถเอาภาพอนิเมะ มาเพิ่ม noise และ denoise เพียงบางส่วน เช่น 0.3 จากนั้น generate ด้วย model ที่เทรนมาสำหรับภาพจริงก็จะสามารถสร้างภาพที่ดูสมจริงจากอนิเมะได้ โดยไปเจอตัวที่ชื่อว่า [DAMN! [PonyXL Realistic Model]](https://civitai.com/models/428826/damn-ponyxl-realistic-model) มาใช้ได้ผลกว่า SDXL แบบปกติมาก โดย pipeline สามารถดูได้ตามรูปที่แสดงอยู่ด้านล่าง

![Pipeline สำหรับทำภาพสมจริง](/assets/images/post/make-anime-look-realistic-using-sd/atlanta_realistic_pipeline.jpg)