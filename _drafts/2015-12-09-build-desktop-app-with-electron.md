---
layout: post
title: สร้างแอปให้คอมพิวเตอร์ด้วย Electron
date: '2015-12-09T11:20:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2015-12-09T11:20:55.259+07:00'
thumbnail: /assets/images/thumbnail/build-desktop-app-with-electron.png
---
Electron คือเครื่องมือที่จะช่วยให้เราสร้าง Desktop app โดยใช้เทคโนโลยีของเว็บนั่นคือ Chromium และ Node.js ซึ่งเมื่อสร้างออกมาแล้วสามารถใช้ได้กับทั้ง Windows, Mac และ Linux โดยที่เขียนโค้ดเพียงแค่ครั้งเดียวเท่านั้น โดยที่เจ้าตัว Electron นั้นสร้างขึ้นโดยบริษัท Github โดยใช้กับแอปดังๆ หลายตัว เช่น [Atom.io](https://atom.io/), [Slack](https://slack.com),  [Visual Studio Code](https://code.visualstudio.com/) ดังนั้นผมจึงสามารถวางใจได้ระดับหนึ่งว่าถ้า Electron เกิดบัคขึ้นมาจะได้รับการแก้ไขอย่างทันท่วงที

## การติดตั้ง Electron
เริ่มติดตั้ง Electron ไว้บนคอมพิวเตอร์ของเราโดยใช้คำสั่ง
{% highlight shell %}
npm install -g electron-prebuilt
{% endhighlight%}
