---
layout: post
title: "กฏโลปิตาล"
date: '2015-10-26T14:40:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- mathematics
modified_time: '2015-10-26T16:15:00.000+07:00'
thumbnail: /assets/images/thumbnail/lhopital-rule.png
mathjax: true
---
ในการหาลิมิตว่าเข้าใกล้ค่าใด แต่เดิมเราใช้การจัดรูปแต่ในบางครั้งค่าอยู่ในรูปแบบที่ไม่สามารถจัดรูปได้ เราสามารถใช้กฏของโลปิตาลในการหาค่าลิมิตออกมาว่าเข้าใกล้ค่าอะไรได้

ซึ่งยังมีรูปแบบไม่กำหนดที่จะเรียนในบทนี้มีทั้งสิ้น 7 แบบได้แก่ ![](/assets/images/post/lhopital-rule/case_zero_divide_zero.svg), ![](/assets/images/post/lhopital-rule/case_inf_divide_inf.svg), ![](/assets/images/post/lhopital-rule/case_inf_minus_inf.svg), ![](/assets/images/post/lhopital-rule/case_zero_dot_inf.svg), ![](/assets/images/post/lhopital-rule/case_zero_power_zero.svg), ![](/assets/images/post/lhopital-rule/case_one_power_inf.svg) และ ![](/assets/images/post/lhopital-rule/case_inf_power_zero.svg) ซึ่งแบ่งแยกกรณีออกเป็นแบบต่างๆได้ดังนี้

## กรณี ![](/assets/images/post/lhopital-rule/case_zero_divide_zero.svg) หรือ ![](/assets/images/post/lhopital-rule/case_inf_divide_inf.svg)

หากสมการอยู่ในรูปของ ![](/assets/images/post/lhopital-rule/case_zero_divide_zero.svg) หรือ ![](/assets/images/post/lhopital-rule/case_inf_divide_inf.svg) สามารถทำการหาอนุพันธ์ไปเรื่อยจนกว่าจะได้คำตอบของลิมิต ได้จากการหาอนุพันธ์ของตัวเศษและตัวส่วน

**ตัวอย่าง** เราจะหาอนุพันธ์ของ
![](/assets/images/post/lhopital-rule/sample_case01_file_01.svg)
ซึ่งเมื่อแทนค่าและจะพบว่าอยู่ในรูปแบบของ ![](/assets/images/post/lhopital-rule/case_zero_divide_zero.svg)

ทำการหาอนุพันธ์ทั้งเศษและส่วนได้ว่า
![](/assets/images/post/lhopital-rule/sample_case01_file_02.svg)

ซึ่งเมื่อทำการแทนค่าใน
![](/assets/images/post/lhopital-rule/sample_case01_file_03.svg)
จะพบว่ามีค่าเท่ากับ ![](/assets/images/post/lhopital-rule/sample_case01_file_04.svg)

หรือหากพบว่าค่ายังคงเป็น  ![](/assets/images/post/lhopital-rule/case_zero_divide_zero.svg)  หรือ ![](/assets/images/post/lhopital-rule/case_inf_divide_inf.svg) ก็ให้ทำการใช้กฏโลปิตาลต่อไปจนกว่าจะไม่สามารถใช้กฏโลปิตาลได้

## กรณี![](/assets/images/post/lhopital-rule/case_zero_dot_inf.svg)

เราไม่สามารถใช้งานกฏโลปิตาลกับรูปแบบนี้ได้โดยตรง แต่เราสามารถจัดรูปให้ ![](/assets/images/post/lhopital-rule/case_zero_dot_inf.svg) อยู่ในรูปแบบของ  ![](/assets/images/post/lhopital-rule/case_zero_divide_zero.svg) หรือ ![](/assets/images/post/lhopital-rule/case_inf_divide_inf.svg) ได้ โดยการเปลี่ยนรูปจาก ![](/assets/images/post/lhopital-rule/sample_case02_file_01.svg) หรือ  ![](/assets/images/post/lhopital-rule/sample_case02_file_02.svg)

## กรณี ![](/assets/images/post/lhopital-rule/case_inf_minus_inf.svg)
มักพบในโจทย์ที่เป็น **ตรีโกณมิติ** ดังนั้นจึงจำเป็นต้องใช้ความรู้ด้านเอกลักษณ์ตรีโกณมิติ และการหาอนุพันธ์ของตรีโกณมิติเข้าช่วยในการจัดรูปให้กลายเป็นรูปแบบของ ![](/assets/images/post/lhopital-rule/case_zero_divide_zero.svg) หรือ ![](/assets/images/post/lhopital-rule/case_inf_divide_inf.svg)

#### เอกลักษณ์ตรีโกณมิติที่ควรจำ เช่น  
-   ![](/assets/images/post/lhopital-rule/sample_case03_file_01.svg)
-   ![](/assets/images/post/lhopital-rule/sample_case03_file_02.svg)
-   ![](/assets/images/post/lhopital-rule/sample_case03_file_03.svg)


## กรณี ![](/assets/images/post/lhopital-rule/case_zero_power_zero.svg), ![](/assets/images/post/lhopital-rule/case_one_power_inf.svg) และ ![](/assets/images/post/lhopital-rule/case_inf_power_zero.svg)
สำหรับทั้ง 3 กรณีนี้เราต้องใช้การเทค ![](/assets/images/post/lhopital-rule/sample_case04_file_01.svg) เข้าไปในสมการเพื่อดึงตัวยกกำลังลงมาเพื่อให้ใช้กฏโลปิตาลได้ก่อนคืนสู่ค่าเดิมด้วยการนำคำตอบที่ได้ไปใช้ยกกำลังกับฐาน ![](/assets/images/post/lhopital-rule/sample_case04_file_02.svg) เพื่อให้ได้คำตอบที่ต้องการ

**ตัวอย่าง** ![](/assets/images/post/lhopital-rule/sample_case04_file_03.svg)

กำหนดให้ ![](/assets/images/post/lhopital-rule/sample_case04_file_04.svg)

ได้ว่า ![](/assets/images/post/lhopital-rule/sample_case04_file_05.svg)

จัดรูปได้ ![](/assets/images/post/lhopital-rule/sample_case04_file_06.svg)

จะเห็นว่าตอนนี้เมื่อนำ ![](/assets/images/post/lhopital-rule/sample_case04_file_07.svg) กับไปอยู่ในลิมิตจะอยู่ในรูปแบบของ ![](/assets/images/post/lhopital-rule/case_zero_divide_zero.svg)

จึงได้ว่า ![](/assets/images/post/lhopital-rule/sample_case04_file_08.svg)

ใช้กฏของโลปิตาลได้ว่า ![](/assets/images/post/lhopital-rule/sample_case04_file_09.svg)

จัดรูปได้ ![](/assets/images/post/lhopital-rule/sample_case04_file_10.svg)

นำ ![](/assets/images/post/lhopital-rule/sample_case04_file_01.svg) ออกไปได้ว่า ![](/assets/images/post/lhopital-rule/sample_case04_file_11.svg)

ดังนั้นตอบ ![](/assets/images/post/lhopital-rule/sample_case04_file_12.svg)

## สรุปโดยสังเขป
กฏโลปิตาลจะช่วยให้เราสามารถค่าของลิมิตได้เร็วขึ้นแต่เราจำเป็นต้องรู้วิธีการหาอนุพันธ์มาก่อนแล้วด้วยจึงจะช่วยให้เราสามารถหาค่าลิมิตได้ง่ายขึ้น
