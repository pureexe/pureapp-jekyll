---
layout: post
title: รูปจาก SDXL ดูเป็นสีเทาเพราะ VAE
date: '2024-12-08T12:20:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/image-look-gray-because-of-vae-in-sdxl.jpg
modified_time: '2024-12-08T12:20:00.000+07:00'
---
 หลังจากพยายามงมมานานว่าทำไมพยายาม gen รูปตาม prompt ที่ได้มาแล้วรูปมันดูเทาๆ แบบในภาพตัวอย่างด้านบน ต่างจากตัวอย่าง เป็นเพราะว่า SDXL มีปัญหาที่ VAE จำเป็นต้องใช้ VAE ที่แก้ไขแล้ว โดยโหลดได้จาก [CivitAi SDXL VAE](https://civitai.com/models/296576/sdxl-vae) อันนี้ขอจดเก็บไว้หน่อยเผื่อมีคนเจอปัญหาเดียวกัน