---
layout: post
title: ติดตั้ง Boost เพื่อใช้งานกับ CodeBlocks
date: 2015-12-05T02:00:00.000+07:00
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: 2015-12-05T02:17:15.000+07:00
thumbnail: /assets/images/thumbnail/install-boost-on-codeblocks.png
---
**Boost** คือไลบารี่สำเร็จรูปสำหรับช่วยให้เราสามารถเขียนโปรแกรมภาษา C++ ได้ง่ายขึ้น โดยจะรวมคำสั่งที่ใช้บ่อยไว้มากมาย ไม่ว่าจะเป็นคำสั่งเกี่ยวกับการจัดการไฟล์ หรือคำสั่งการคำนวณทางคณิตศาสตร์ต่างๆ ดังนั้นการใช้งานไลบรารี่ Boost จึงช่วยอำนวยความสะดวกในการเขียนโปรแกรมเป็นอย่างมาก

โดยคอมพิวเตอร์ที่จะทำการติดตั้ง Boost ในครั้งนี้จะใช้ CodeBlocks รุ่น 13.12 ใช้งานคอมไพล์เลอร์  MinGW ที่ติดมากับโปรแกรม CodeBlocks โดยใช้ระบบปฏิบัติการ Windows 10

## การติดตั้ง

การติดตั้ง Boost สามารถโหลดตัวไลบารี่ได้จากเว็บไซต์ [Boost.org](http://boost.org) โดยให้เวอร์ชันล่าสุด หลังจากนั้นนำไฟล์ที่โหลดมาแตกไฟล์ลงเครื่อง

![](/assets/images/post/install-boost-on-codeblocks/002-inside-boost-zip.png){: .middle-image }

เมื่อแตกไฟล์ออกมาแล้วจะพบกับไฟล์ในซิปเป็นหน้าตาดังภาพ โดยผมจะแตกไฟล์ดังกล่าวไว้ที่ `C:\Program Files(x86)\CodeBlocks\MinGW\Boost` โดยท่านอาจใส่โฟลเดอร์นี้ไว้ที่อื่นก็ได้ แต่ควรทราบว่าโฟลเดอร์นี้จะต้องถูกใช้งานทุกครั้งที่คอมไพล์ ดังนั้นแล้วผมจึงวางไว้ใน MinGW จะได้สะดวกต่อการเรียกใช้งาน

![](/assets/images/post/install-boost-on-codeblocks/003-add-path-mingw.png){: .middle-image}

ก่อนอื่นเราจำเป็นต้องทำการตั้งพาธสำหรับเรียก gcc ขึ้นมาใช้งานขณะกำลังบิวด์ไฟล์ของไลบารี่ โดยให้ทำการคลิกขวาเลือก Properties ที่ This PC จากนั้นเลือก Advanced systelm settings > Advanced > Environment Variables... บริเวณช่อง System Variables ให้คลิกที่ช่อง Path จากนั้นเติมที่อยู่ไฟล์ของ MinGW ลงไป (ตามภาพประกอบ)

![](/assets/images/post/install-boost-on-codeblocks/004-gcc-after-restart.png){: .middle-image .medium-image}

เมื่อเราเปิด Command Prompt ขึ้นมาใช้คำสั่งว่า `gcc` ควรขึ้นข้อผิดพลาดดังภาพประกอบ หากไม่ใช่ให้ทำการรีสตาร์ทคอมพิวเตอร์ 1 รอบ หากยังไม่ได้อีกโปรดตรวจสอบให้แน่ใจว่าพาธของ MinGW นั้นถูกต้อง

![](/assets/images/post/install-boost-on-codeblocks/005-bootstrap-build.png){: .middle-image .medium-image}

จากนั้นเราจึงไปที่โฟลเดอร์ที่ได้ทำการแตกไฟล์ Boost ไว้ แล้วให้ทำการรันหน้าต่าง Command Prompt ขึ้นมาโดยใช้สิทธิของผู้ดูแลระบบแล้วใช้คำสั่ง
`bootstrap mingw`

![](/assets/images/post/install-boost-on-codeblocks/006-build-success.png){: .middle-image .medium-image}

แล้วจึงใช้คำสั่ง `b2 toolset=gcc` รอจนเสร็จสมบูรณ์ ขั้นตอนนี้ใช้เวลาประมาณครึ่งชั่วโมง

![](/assets/images/post/install-boost-on-codeblocks/007-enable-C11.png){: .middle-image .medium-image}

ต่อมาเราต้องเปิดใช้งานมาตราฐาน C++11 เนื่องจากตัวไลบรารี่ Boost ต้องการมาตราฐาน C++11 ในการใช้งาน โดยการเลือกที่ Settings > Compiler Settings แล้วเลือกหัวข้อที่ปรากฏในภาพประกอบ [C++11 คืออะไร](https://en.wikipedia.org/wiki/C%2B%2B11)

![](/assets/images/post/install-boost-on-codeblocks/008-add-dir.png){: .middle-image .medium-image}

จากนั้นทำการเพิ่มไลบรารี่เข้าสู่คอมไพล์เลอร์เพื่อให้สามารถทำการใช้คำสั่ง `#include` เพื่อดึงไลบรารี่เข้ามาใช้งานโดยการเลือกที่แท็บ Search Directory แล้วเพิ่มที่อยู่โฟลเดอร์ Boost ของเราลงไป

![](/assets/images/post/install-boost-on-codeblocks/009-add-linker.png){: .middle-image .medium-image}

ต่อมาจึงทำการเพิ่ม Linker สำหรับใช้คอมไพล์โค้ดให้เป็นไบนารี่ โดยเลือกที่แทบ Linker Settings จากนั้นเลือก Lineker ที่เราจะใช้งาน เช่นหากเราจะใช้ `boost:filesystem` ก็ให้เลือก Linker ที่ชื่อ filesystem แต่ผมจะทำการเพิ่ม Linker ทุกตัวเข้ามาใช้งาน โดนจะเลือกเฉพาะตัวที่ไม่มี -d ในชื่อ (ตามภาพประกอบ) เนื่องจาก -d หมายถึง debugging

## ทดสอบหลังติดตั้ง

หลังจากที่เราทำการติดตั้ง Boost เสร็จเรียบร้อยแล้วเราก็ควรตรวจสอบว่าการติดตั้ง Boost สามารถนำไปใช้งานได้แล้วหรือไม่ โดยการทดสอบรันโค้ดทั้ง 2 ชุดต่อไปนี้คือ

### ทดสอบการนำเข้า

ทดสอบว่าการนำเข้าหัวไฟล์ด้วยคำสั่ง `#include` สามารถทำงานได้ถูกต้องหรือไม่โดยการรันคำสั่งด้านล่างนี้ หากทุกอย่างถูกต้องผลลัพทธ์ที่แสดงออกทางคอนโซลคือ 7.67

{% highlight cpp %}
#include<iostream>
#include<boost/any.hpp>
int main(){
    boost::any a(5);
    a = 7.67;
    std::cout << boost::any_cast<double>(a) << std::endl;
}
{% endhighlight %}

### ทดสอบการเชื่อมต่อ

ทดสอบว่าการเชื่อมต่อของ Linker ปกติดีหรือไม่โดยการเรียกใช้ส่วนของ `boost:filesystem` ที่อยู่ใน Boost ซึ่งต้องเรียกผ่าน Linker ชื่อ filesystem หากทุกอย่างถูกต้อง ผลลัพธ์ที่แสดงออกทางคอนโซลคือ File Not Exist: "second.cpp"

{% highlight cpp %}
#include<iostream>
#include<boost/filesystem/operations.hpp>
namespace bfs=boost::filesystem;
int main(){
    bfs::path p("second.cpp");
    if(!bfs::exists(p)){
        std::cout << "File Not Exist: " << p.leaf() << std::endl;
    }
}
{% endhighlight %}

หากทุกอย่างปกติดี ท่านก็สามารถเริ่มใช้งานไลบารี่ Boost ได้แล้ว ขอให้สนุกครับ
