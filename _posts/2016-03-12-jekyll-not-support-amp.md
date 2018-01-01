---
layout: post
title: Jekyll มันไม่รองรับ AMP
date: '2016-03-12T22:36:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2016-03-12T22:36:00.000+07:00'
thumbnail: /assets/images/thumbnail/jekyll-not-support-amp.png
---
ตอนนี้ Google กำลังผลักดันให้เราไปใช้ AMP หรือ Accelerated Mobile Page เพื่อให้หน้าเว็บเมื่อเปิดบนมือถือสามารถโหลดได้เร็วขึ้น ผมเลยจำเป็นต้องพยายามปรับเว็บตามด้วย แต่ว่าปัญหามันก็เกิดตามมาอย่างรวดเร็ว

## เว็บในตอนนี้

ก่อนอื่นเลยผมลองเอาเว็บผมไปเช็คกับ Google Structured Data Testing Tool เมื่อสัก ครึ่งปีที่ผ่านผมทดสอบผ่านหมดทุกอย่าง แต่ว่าทุกวันนี้มันเปลี่ยนไปแล้ว ผมมีข้อผิดพลาดเกี่ยวกับข้อมูล Structured มากถึง 45 จุดและมันก็ผิดผลาดเรื่องของ AMP ทั้งนั้น

![](/assets/images/post/jekyll-not-support-amp/structer-test-failed.png){: .middle-image .medium-image }

## Jekyll ว่าอย่างไร

อย่างที่ผมได้เคยบอกไปในโพสก่อนหน้าแล้วว่าเว็บผมใช้ Jekyll เป็น CMS ในการเปลี่ยนข้อความที่ผมพิมพ์เป็นบล็อกให้ทุกท่านได้อ่านกัน แต่ว่าใน Github นั้นได้มีคนแจ้ง issue เข้าไปหาทางทีมงาน Jekyll แล้ว แต่กลับได้รับการตอบมาว่า มันเป็นเรื่องของตัวแสดงผล markdown เลยจะไม่ทำอะไรให้

![](/assets/images/post/jekyll-not-support-amp/jekyll-issue.png){: .middle-image .medium-image}

## ความคิดเห็นของผม

จริงๆแล้ว Jekyll ควรจะสร้างให้มีคำสั่งสำหรับรองรับกับแม่แบบที่จะใช้งานกับ AMP ได้ ไม่ใช่ปัญหาของตัวแสดงผล Markdown แต่ถ้าเขาไม่ทำให้ ผมก็อาจจะต้องทำใจและไม่รองรับ AMP ในบล็อกนี้ครับ
