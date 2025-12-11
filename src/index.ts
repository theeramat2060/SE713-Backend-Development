// let x:number = 11
// let y:number = 11
// let z:number = 0
//
// if (x > 5  &&  y > 12) {
//     console.log('ค่ามากจัง')
// }else {
//     z =((x*y) +(x/y))
//     console.log(z)
// }

//
// let x =7
// if (x > 10) {
//     console.log('x is more than 10')
// } else if (x < 5){
//     console.log('x is less than 5')
// }
// else {
//     console.log('x is between 5 and 10')
// }
//
// let score = 75;
//
// if (score > 80) {
//     console.log("A");
// } else if (score > 60) {
//     console.log("B");
// } else if (score > 50) {
//     console.log("C");
// } else {
//     console.log("F");
// }\
import add, { subtract } from './function';
import findMax from './function2';


const result = add(1,2) + 0;
const result2 = subtract(1,2) + 0;
const result3 = findMax([10, 20, 99, 5, 15]);
console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);
console.log(result3, 'type of result3:', typeof result3);
