---
layout: post
title: อัปเดต nvidia driver ให้เครื่องการ์ดจอใน slurm
date: '2024-10-27T03:10:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/update-nvidia-in-slurm.jpg
modified_time: '2024-10-27T03:10:00.000+07:00'
---

เครื่องการ์ดจอใน slurm ตอนนี้ใช้ driver 470 แต่ pytorch ตอนนี้ใช้ CUDA12 มันฟ้องว่า driver เก่าไปเลยจำเป็นต้องอัปเดต driver แม้ว่าภายในเครื่องการ์ดจอเหล่านี้จะรัน singularity เพื่อแยก library ต่างๆ อีกทีก็ตาม 

โดยการอัปเดตจะเป็นการลง CUDA12.2 ซึ่งมาพร้อมกับ driver 535 ซึ่งใช้คำสั่งตามด้านล่างเลย คอมเม้นคำอธิบายไว้ตามรายบรรทัดแล้ว

```
# reserve the node
scontrol create reservation user=root starttime=now duration=infinite flags=maint nodes={MACHINE_NAME}

# copy driver from frontend node to gpu node
rsync -avP cuda_12.2.0_535.54.03_linux.run {MACHINE_NAME}:~/

# login to gpu node
ssh {MACHINE_NAME}

# stop GPU serverce
systemctl stop nvidia-persistenced
rmmod nvidia_drm nvidia_uvm nvidia_modeset nvidia

# install driver 
bash cuda_12.2.0_535.54.03_linux.run

# change CUDA11.4 to CUDA12.2 in bashrc
nano /etc/bashrc 

# load nvidia service back
systemctl start nvidia-persistenced

# logout from gpu node
exit 

# unreserved gpu ndoe
scontrol delete reservation={RESERVATION_NAME}
```