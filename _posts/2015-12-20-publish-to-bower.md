---
layout: post
title: ส่งงานขึ้นสู่ bower
date: '2015-12-20T09:28:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2015-12-20T09:28:00.000+07:00'
thumbnail: /assets/images/thumbnail/publish-to-bower.png
---
**Bower** คือระบบจัดการ web framework ที่เป็นแหล่งรวม library ต่างๆเกี่ยวกับเว็บให้เราสามารถดาวน์โหลดลงได้ผ่านคำสั่งง่ายๆ ซึ่งถ้าวันนึงเราสร้าง library ขึ้นมาบ้าง เราจะส่งขึ้น bower ได้อย่างไร วันนี้ผมจะมาแสดงให้ดูครับ

##การเผยแพร่

ก่อนอื่นเลยเราจำเป็นต้อง login เข้าสู่ระบบ ของ bower โดยใช้คำสั่ง `bower login` โดยเจ้า bower จะถามชื่อผู้ใช้และรหัสผ่าน โดยให้ใช้ชื่อผู้ใช้และรหัสผ่านเป็นบัญชี Github ที่มี repository ของโค้ดโครงการที่เราจะนำขึ้นสู่ bower

![](/assets/images/post/publish-to-bower/bower-login.png){: .middle-image .medium-image}


แล้วให้เข้าไปที่หน้าเว็บของ Github เพื่อสร้าง branch ใหม่ขึ้นมาสำหรับเก็บโค้ดที่จะเอาขึ้น bower ซึ่งผมจะขอตั้งชื่อ branch ใหม่นี้ว่า release

![](/assets/images/post/publish-to-bower/new-branch.png){: .middle-image .z-depth-1}


จากนั้นกลับมาที่เครื่องเรา ทำการ pull ลงมาแล้วสลับ branch ไปใช้ branch release แล้วใช้คำสั่ง `bower init` เพื่อกรอกข้อมูล โดยข้อมูลที่ต้องกรอกจะมีประมาณนี้

![](/assets/images/post/publish-to-bower/bower-init.png){: .middle-image .medium-image}

จัดเตรียมไฟล์ใน repository ให้เรียบร้อยแล้ว commit ขึ้น branch release ของ github

![](/assets/images/post/publish-to-bower/bower-files.png){: .middle-image }

จากนั้นเข้าไปที่ repository ของเราที่ github ให้กดปุ่ม release และเลือก draft release เลื่อก branch เป็น release ตั้งชื่อ release ให้เรียนร้อยก่อนกด publish release

![](/assets/images/post/publish-to-bower/draft-release.png){: .middle-image .medium-image .z-depth-1 }

จากนั้นเราจะใช้คำสั่งในการอัปโหลดขึ้น bower โดยการใช้คำสั่ง `bower register ชื่อ urlของgit` โดยตัวอย่างโค้ดของภาษาไอรินผมก็จะพิมพ์ได้ตามโค้ดด้านล่างนี้

{% highlight text %}
bower register irin-lang git://github.com/pureexe/irin-lang.git
{% endhighlight %}

เพียงเท่านี้เราโค้ดของเรากจะขึ้นไปสู่ bower เรียบร้อยแล้ว สามารถให้ท่านอื่นสามารถโค้ดของเราไปใช้งานต่อโดยพิมพ์คำสั่ง `bower install ชื่อ` และสำหรับการอัปเดตโค้ดนั่นเพียงแค่กด draft release ใหม่ผ่านทางหน้าเว็บ github เมื่อเราทำการ publish release แล้วโค้ดของ bower จะอัปเดตตามทันที
