---
layout: post
title: 'Jekyll : การติดตั้ง'
date: '2015-07-30T11:56:00.004+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2015-09-27T19:27:27.713+07:00'
thumbnail: https://3.bp.blogspot.com/-nykfLzxhjPk/VbmqVOLjFbI/AAAAAAAAZ-I/eSMfF91Xps0/s1600/jekyll2.png
blogger_id: tag:blogger.com,1999:blog-3103072889085475591.post-2942988230475434627
blogger_orig_url: http://www.pureapp.in.th/2015/07/jekyll-prepare.html
---


ในการใช้งาน Jekyll เราจำเป็นต้องมีเครื่องมือเพื่อที่จะใช้งาน Jekyll โดยประกอบด้วยเครื่องมือต่างๆ โดยผมจะทำการเขียน Jekyll บน Windows ซึ่งสิ่งที่ผมจะใช้งานมีดังนี้  
**หมายเหตุ:** หากท่านยังไม่รู้จักว่า Jekyll คืออะไรท่านสามารถอ่านที่ผมได้แนะนำไว้ได้[ที่นี่](/2015/07/introduce-jekyll.html)       

##เครื่องมือที่ใช้งาน

1. Editor ในที่นี้ผมแนะนำ atom [(https://atom.io)](ttps://atom.io) และนี้คือหน้าตาของ atom.io ที่ผมใช้   
![](https://4.bp.blogspot.com/-a3CGptn8WCA/VbmrCUclQ_I/AAAAAAAAZ-Q/pgDZFy5ZjRU/s1600/atomio.png){: .small-image .middle-image}  
2. เบราว์เซอร์ดีๆซักตัว ซึ่งถูกใจผมสุดตอนนี้คงหนีไม่พ้น Google Chrome  
![](https://3.bp.blogspot.com/-HRCcdy-iPKA/Vbmr2xJ-ClI/AAAAAAAAZ-c/-kFpLaYwS2g/s200/unnamed.png){: .small-image .middle-image}   
3. Ruby เนื่องจาก Jekyll นั้นถูกพัฒนาขึ้นมาด้วย Ruby เราจึงต้องใช้ Ruby ในการรันมัน ซึ่งเราสามารถดาวน์โหลด Ruby ได้ทาง [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/) โดยเลือกให้ตรงกับ bit ของ windows ที่ท่านใช้งาน
![](https://3.bp.blogspot.com/-9Sp-tTKACMc/VbmuvmLa40I/AAAAAAAAZ-o/ed2qoRupt7U/s400/%25E0%25B9%2580%25E0%25B8%2584%25E0%25B8%25A3%25E0%25B8%25B7%25E0%25B9%2588%25E0%25B8%25AD%25E0%25B8%2587%25E0%25B8%25A1%25E0%25B8%25B7%25E0%25B8%25AD.png){: .small-image .middle-image}   

##ขั้นตอนการติดตั้ง Jekyll

เริ่มมาจากการติดตั้ง Ruby ที่ได้ทำการโหลดมาโดยทำการ double click เปิดไฟล์ จากนั้นจะมี dialog ขึ้มาให้เลือกภาษา ให้เราเลือกภาษาที่ใช้เป็น English แล้วกด OK ครับ

![](https://3.bp.blogspot.com/-waELorDhHSQ/VbmvUla3C9I/AAAAAAAAZ-w/Jl1SB4xAezk/s1600/english.png){: .small-image .middle-image}

หน้า license ให้เรากด accept แล้วกด Next ไป เพื่อเป็นการยืนยันว่าเรายอมรับข้อตกลงในการใช้ ruby ครับ

![](https://2.bp.blogspot.com/-buzMpuqpchc/Vbmvv86PCAI/AAAAAAAAZ-4/8XIzX3geIq4/s320/english.png){: .small-image .middle-image}

จากนั้นให้เราเลือก add ruby execute able to path เพื่อให้เราสามารถสั่งใช้ ruby จาก command prompt ได้ จากนั้นจึงกด install

![](https://2.bp.blogspot.com/-dWrcfAAIOF4/VbmwR-VQt0I/AAAAAAAAZ_A/fletpudnjPQ/s320/add-path.png){: .small-image .middle-image}

แม้จะปรากฏหน้าต่างว่าเสร็จแล้ว (แบบในภาพ) ก็อย่าพึ่งรีบดีใจ การติดตั้ง Ruby ยังไม่เสร็จสิ้นเพียงเท่านี้

![](https://2.bp.blogspot.com/-RBsGT8GGoEU/VbmyWIT37uI/AAAAAAAAZ_M/r3c7z5WnKGA/s320/ruby.png){: .small-image .middle-image}

ที่หน้า [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/) จะมี development kit ให้ท่านทำการดาวน์โหลดมาเพื่อติดตั้งด้วย

![](https://3.bp.blogspot.com/-BsNPP389Orw/VbmzAYBqZqI/AAAAAAAAZ_U/iCA9jx2hUu0/s320/devkit.png){: .small-image .middle-image}

เมื่อเปิดไฟล์ติดตั้งของ development kit ขึ้นมาแล้ว มันจะให้เลือกที่อยู่ไฟล์ในการติดตั้ง ผมขอเลือกเป็นที่อยู่ในการติดตั้ง ruby/devkit (ตามภาพ) นะครับ

![](https://3.bp.blogspot.com/-K8Rh-n2_8I0/Vbmz_FK2GxI/AAAAAAAAZ_g/GrO3un6Nwg4/s320/devkit.png){: .small-image .middle-image}

จากนั้นไปที่โฟลเดอร์ที่ได้ทำการแตกไฟล์ development kit ไว้ ทำการรัน command prompt เป็น admin แล้วใช้คำสั่งว่า ruby dk.rb init

![](https://1.bp.blogspot.com/-RVXhDW8ZoJI/Vbm3EomEIdI/AAAAAAAAZ_s/TQLBcwJcWhY/s400/devkit-lo.png){: .small-image .middle-image}

จากจึงใช้คำสั่ง ruby dk.rb install เพื่อติดตั้ง development kit ให้พร้อมใช้งาน

![](https://1.bp.blogspot.com/-EI4PFpzsf_s/Vbm3oMAq5lI/AAAAAAAAZ_0/RX_bdEatPo4/s400/devkit-init.png){: .small-image .middle-image}

จากนั้นผมจะให้ command prompt กลับไปที่หน้าจอ (C:\user\pakkapon\desktop) เพื่อทำการติดตั้ง jekyll ด้วยคำสั่ง gem install jekyll โดยเมื่อสำเร็จแล้วจะขึ้นประมาณนี้

![](https://4.bp.blogspot.com/-IUv1yrpGeFc/Vbm5jv1F-eI/AAAAAAAAaAA/6bUFTwGrbQU/s320/%25E0%25B9%2580%25E0%25B8%25AA%25E0%25B8%25A3%25E0%25B9%2587%25E0%25B8%2588.png){: .small-image .middle-image}

หลังจากนั้นลองสร้างไซต์ของ jekyll ใหม่ด้วยคำสั่ง jekyll new ชื่อไซต์  อย่างผมจะสร้างไซต์ชื่อ hello ขึ้นมา ก็จะใช้คำสั่งดังภาพ

![](https://1.bp.blogspot.com/-YT06Z8nl1Bo/Vbm6YrLBjcI/AAAAAAAAaAI/s-03Z6vGh38/s320/newsite.png){: .small-image .middle-image}

แล้วก็มีโฟลเดอร์ที่เป็นชื่อเว็บไซต์ปรากฏขึ้นมา ภายในมีข้อมูลของเว็บไซต์ ที่เราจะเขียนในลำดับถัดไปบรรจุอยู่

![](https://1.bp.blogspot.com/-lNcqzO3Ue_o/Vbm6xPvXZAI/AAAAAAAAaAQ/riA7t_otki0/s400/hello-folder.png){: .small-image .middle-image}

จากนั้นให้ใช้ command prompt ทำการ cd เข้าไปในโฟลเดอร์เรา แล้วสั่ง jekyll serve เพื่อให้ทำการแปลงโค้ดให้กลายเป็น html แล้วนำมาแสดงผล โดยรอจนกระทั่งขึ้นคำว่า server runing (แบบในภาพ)

![](https://4.bp.blogspot.com/-uN3Iedb8Rns/Vbm9EEqxFQI/AAAAAAAAaAc/G1x3AUjgIYg/s400/server%2Bruning.png){: .small-image .middle-image}

หลังจากนั้นให้เข้าไปที่ Server address: ที่ปรากฏขึ้น (ในภาพเป็น http://127.0.0.1:4000/) จะปรากฏหน้าเว็บที่สร้างด้วย jekyll ขึ้นมา

![](https://4.bp.blogspot.com/-kOfDheqhWvY/Vbm9ihQ0sQI/AAAAAAAAaAk/r0xL4SfPfUg/s400/jekyll-dis.png){: .small-image .middle-image}

ก็เป็นอันว่าผมขอจบโพสนี้ลงที่ตรงนี้แล้วกันแล้วครั้งหน้าผมจะมาต่อวิธีการเขียน config และโพสต่างๆของ Jekyll นะครับ
