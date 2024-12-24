---
layout: post
title: ให้ podman ทำงานอัตโนมัติเมื่อเครื่องดับ
date: '2024-12-24T22:00:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/podman-autostart-after-boot.jpg
modified_time: '2024-12-24T22:00:00.000+07:00'
---

มีเหตุต้องใช้ podman ในการรัน container แต่เจอปัญหาว่าเวลาเครื่องดับแล้วมันไม่เปิดตัวเอง หลังจากที่่ลองหาดูพบว่า podman สามารถทำให้เปิดตัวเองขึ้นมาด้วยเมื่อเปิดเครื่องโดยการสร้าง service ผ่าน systemd โดยใช้คำสั่งสามบรรทัดดังนี้

```
sudo podman generate systemd --name <ชื่อคอนเทนเนอร์> > /etc/systemd/system/podman-<ชื่อคอนเทนเนอร์>.service

sudo systemctl enable podman-<ชื่อคอนเทนเนอร์>.service

sudo systemctl start podman-<ชื่อคอนเทนเนอร์>.service
```