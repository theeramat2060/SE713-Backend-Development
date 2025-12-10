// let x:number = 10;
// x = 'hello';
// จะเห็นว่า ค่า x มีคำเตือน ทดลอง รันโปรแกรมเพื่อดูผลลัพธ์
// จะพบว่ามี TSError นั่นคือโปรแกรม compile ไม่ผ่านยังไม่เกิดการรันโปรแกรมขึ้น

// แก้ไข โดยอนุญาติให้ x เป็น string ได้ด้วย โดยแก้ไข code ดังนี้
// let x:number | string = 10;
// x = 'hello';
// จะเห็นว่า error หายไป
// ทดลอง run code จะเห็นว่า code สามารถ รันได้
// การตรวจสอบว่า ตัวแปรมีชนิดอะไร สามารถตรวจสอบได้ด้วยคำสั่ง typeof
//     let x:number | string = 10;
// x = 'hello';
// x = 10;
// if (typeof x === 'string') {
//     console.log('x is a string');
// }else if (typeof x === 'number') {
//     console.log('x is a number');
// }else {
//     console.log('x is neither a string nor a number');
// }
// ลองดูส่วนผลลัพธ์ที่ออกมา
// แล้วลองเปลี่ยน x เป็น ค่าตัวเลข ผลลัพธ์ที่ได้คืออะไร
// ทดสอบการเขียนโปรแกรมเพื่อเปลี่ยนชนิดข้อมูล
// let i = 0
// i = 'hello'
// console.log(i)
// จะพบว่ามีการฟ้อง error ขึ้นมาเนื่องจาก ‘hello’ เป็น String ไม่ใช่ number แต่เมื่อกดรัน โปรแกรมจะทำงานได้
// เพื่อนำคำเตือนออกแก้ไข code เป็น แล้วตรวจสอบชนิดของข้อมูล
let i =   0
i = 'hello' as any
console.log(i)
// โปรแกรมจะเปลี่ยน hello i ให้เป็น type any จึงสามารถ assign ไปใน i ได้ และ i จะถูกเปลี่ยยนชนิดของตนเองโดยอัตโนมัติ

