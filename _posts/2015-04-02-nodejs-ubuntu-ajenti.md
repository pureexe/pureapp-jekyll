---
layout: post
title: "ติดตั้ง แอป Node.js สำหรับ VPS Ubuntu ของตนเองด้วย Ajenti"
date: '2015-04-02T12:00:00.003+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2015-09-27T19:19:38.413+07:00'
thumbnail: /assets/images/thumbnail/nodejs-ubuntu-ajenti.png
blogger_id: tag:blogger.com,1999:blog-3103072889085475591.post-217207736252831726
blogger_orig_url: http://www.pureapp.in.th/2015/04/nodejs-ubuntu-ajenti.html
---

เนื่องจากในเมืองไทยไม่ค่อยมีโฮสต์ที่รองรับ Node.js ดังนั้นวันนี้ผมจะมาสอนวิธีการติดตั้งแอปที่เขียนด้วย Node.js ด้วยโปรแกรม Ajenti บนโฮสต์ของตัวเองกันครับกันครับ

##ติดตั้ง Ajenti
ก่อนอื่นเลยเราต้องมี VPS(Virtual Private Server) กันก่อน ซึ่งผมเลือกใช้งาน VPS ของ Digital Ocean

![](https://1.bp.blogspot.com/-4MeRLtedM3M/VRy_3tiNfjI/AAAAAAAAYqg/Sq7g1OMkyYU/s1600/ajenti.png){: .middle-image }

หลังจากสร้าง VPS เรียบร้อยให้เราต่อเข้า VPS ด้วย SSH ครับ
แล้วติดตั้ง Ajenti โดยใช้คำสั่ง (สำหรับ Ubuntu เท่านั้น)

{% highlight bash %}
wget -O- https://raw.github.com/Eugeny/ajenti/master/scripts/install-ubuntu.sh | sudo sh
{% endhighlight %}

เสร็จแล้วลองเข้าไปที่ https://ไอพีเซิฟ:8000 แล้วต้องพบหน้า login แบบนี้ ชื่อผู้ใช้ คือ root รหัสผ่านคือ admin

![](https://4.bp.blogspot.com/-h30UTiB0pKk/VRzA2ni34XI/AAAAAAAAYqs/wgMD0rxyH-I/s1600/ajenti-login.png){: .middle-image }

ทำการติดตั้ง plugin ajenti V ด้วยคำสั่ง

{% highlight bash %}
apt-get install ajenti-v ajenti-v-nginx ajenti-v-mysql ajenti-v-php-fpm ajenti-v-nodejs php5-mysql nodejs npm
{% endhighlight %}

ทำการ symlink node.js ด้วยคำสั่ง

{% highlight bash %}
ln -s "$(which nodejs)" /usr/bin/node
{% endhighlight %}

จากทำการ restart ระบบ ajenti ด้วยคำสั่ง

{% highlight bash %}
service ajenti restart
{% endhighlight %}

หากทุกอย่างถูกต้องเมื่อ login เข้าหน้าเว็บ ajenti จะพบกับ แท็บ websites ด้านซ้าย
![](https://2.bp.blogspot.com/-MuRFGwNfkk4/VRzDA7jSkmI/AAAAAAAAYq4/kEsGC-F_PhI/s1600/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%99%E0%B8%B5%E0%B9%89.png){: .middle-image}

##ติดตั้ง PHPmyadmin
ต่อไปทำการติดตั้ง phpmyadmin

ให้กดที่แถบ Websites
ให้ตั้งค่าเว็บแบบนี้
![](https://2.bp.blogspot.com/-zY8sxOnWiTU/VRzDgE1WjEI/AAAAAAAAYrA/-qaEL_kG1N4/s1600/%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B9%88%E0%B8%B2.png){: .middle-image .medium-image}

หลังจากนั้นให้ใช้คำสั่ง
{% highlight bash %}
cd /srv
{% endhighlight %}

แล้ว download phpmyadmin จากคำสั่ง
{% highlight bash %}
wget http://ncu.dl.sourceforge.net/project/phpmyadmin/phpMyAdmin/4.4.0/phpMyAdmin-4.4.0-all-languages.zip
{% endhighlight %}

แล้ว download ตัว unzip จากคำสั่ง
{% highlight bash %}
apt-get install unzip
{% endhighlight %}

คลาย zip ด้วยคำสั่ง
{% highlight bash %}
unzip phpMyAdmin-4.4.0-all-languages.zip
{% endhighlight %}

เปลี่ยนชื่อโฟลเดอร์ด้วยคำสั่ง
{% highlight bash %}
mv phpMyAdmin-4.4.0-all-languages phpmyadmin
{% endhighlight %}

จากนั้นทำการเข้าไปในโฟลเดอร์ phpmyadmin ด้วยคำสั่ง
{% highlight bash %}
cd phpmyadmin
{% endhighlight %}

เปลี่ยนชื่อไฟล์ config.sample.inc.php เป็น config.inc.php
{% highlight bash %}
mv config.sample.inc.php config.inc.php
{% endhighlight %}

แก้ไฟล์ config.inc.php ด้วยคำสั่ง
{% highlight bash %}
nano config.inc.php
{% endhighlight %}

จากนั้นแก้บรรทัด **$cfg['blowfish_secret'] = '** โดยให้เติมรหัสผ่านสำหรับการ auth cookie ขึ้นมาใหม่เอง เช่น **$cfg['blowfish_secret'] = '123456'** และหากคุณใช้ SSL (เช่นผมใช้ของ cloudflare) ให้ใส่บรรทัดนี้เพิ่มไปด้วย **$cfg['ForceSSL'] = true;** จากนั้น กด Ctrl+X แล้วกด Y เพื่อบันทึก แล้วกดแถบ content แล้วกด create ตัว PHP FastCGI

![](https://3.bp.blogspot.com/-3LL0qoSImfQ/VRzIOH-F5EI/AAAAAAAAYrM/VpCgcoedpy4/s1600/fastCGI.png){: .middle-image .medium-image}

เมื่อได้ตามภาพแล้วกด Apply Change

![](https://1.bp.blogspot.com/-YyrQSi8iIX8/VRzIjojcj4I/AAAAAAAAYrU/1GhFBNHnX8k/s1600/apply.png){: .middle-image .medium-image}

ไปที่ แท็บ domain ให้เพิ่ม โดเมนที่ จะแสดง phpmyadmin แล้วกด apply change

![](https://2.bp.blogspot.com/-R-X6a9XUIcE/VRzI71__LpI/AAAAAAAAYrc/0Z4oqBk1qf8/s1600/pyp.png){: .middle-image .small-image}

จากนั้นไปที่บริการ DNS ของท่านแล้วชี้ A record มาที่โดเมนของ vps

![](https://1.bp.blogspot.com/-Hni_4HRKbiQ/VRzJgu13wlI/AAAAAAAAYrk/b8-_OFdlNt4/s1600/Screenshot%2Bfrom%2B2015-04-02%2B11%3A44%3A45.png){: .middle-image .small-image}

ถ้าเข้าได้แสดงว่าการติดตั้งเรียบร้อย
![](https://2.bp.blogspot.com/-4QcRWrYupzk/VRzJ2WgyNTI/AAAAAAAAYrs/PEz7z8_df34/s1600/phpmyad.png){: .middle-image .small-image}

##ติดตั้งแอป Node.js
กดแถบ website แล้ว เพิ่ม เว็บใหม่ตามนี้ (สมมติว่าชือ news ครับ)
![](https://4.bp.blogspot.com/-vOyfpwjVLTo/VRzKUjtZENI/AAAAAAAAYr0/fu0Em7JqKZU/s1600/news.png){: .middle-image .small-image}

กดแถบ content ให้ create Node.js ครับ
![](https://1.bp.blogspot.com/-6zUpMA2cBXg/VRzKqzT0OQI/AAAAAAAAYr8/rLaTBwJP0oM/s1600/%E0%B8%B2%E0%B8%AB.png){: .middle-image .small-image}

ตั้งค่าตามนี้โดย
Script HTTP port คือ port ที่ทำการ listen ไว้ใน Node.JS
Script name คือชื่อไฟล์ Node.js ที่วางไว้บริเวณโฟลเดอร์ของเว็บ (/srv/news/)

![](https://4.bp.blogspot.com/-EN4wIO2geTY/VRzK0fKziVI/AAAAAAAAYsE/viSkBTFcbvQ/s1600/%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B9%88%E0%B8%AB%E0%B8%B2.png){: .middle-image .medium-image}

นี่คือ script ใน server.js นะครับ
{% highlight javascript %}
var app = require('express')();
var server_port = 3000;
var server_ip_address = '127.0.0.1';

app.get("*",function(req,res){
  res.status(200).send("Hello world with Node.js");
});

app.listen(server_port, server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});
{% endhighlight %}

จากนั้นตั้งค่า ในแถบ domain
![](https://2.bp.blogspot.com/-iC5YeumyFq4/VRzLuLnDeKI/AAAAAAAAYsM/Y9UARrRscJs/s1600/domain.png){: .middle-image .small-image}

ทำการตั้ง DNS ให้ชี้มาที่ VPS
![](https://3.bp.blogspot.com/-m7Kk-NsvjQ4/VRzMF8GEIxI/AAAAAAAAYsU/SIXt5TJelZY/s1600/vvv.png){: .middle-image}

กดปุ่ม restart website ที่แถบ websites จะมีคำว่า Node.js service ขึ้นมา

![](https://2.bp.blogspot.com/-mxN1V1otNtU/VRzMcSe6API/AAAAAAAAYsc/pbcgyQhpf8M/s1600/restarts.png){: .middle-image}

ลองเข้าไปที่ Url ของเว็บไซต์ดูครับ ซึ่งในที่ผมทำนี้คือ https://news.pureapp.in.th
![](https://2.bp.blogspot.com/-EoVgEDR27uw/VRzMr9jmhqI/AAAAAAAAYsk/E1AqYG_SeGg/s1600/%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%81%E0%B9%87%E0%B8%A5%E0%B8%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99.png){: .middle-image}

เท่านี้คุณก็จะสามารถลง node.js บน vps ของคุณเองได้แล้ว
