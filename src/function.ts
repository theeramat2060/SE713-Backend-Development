// function greet(name){
//     console.log('Hello ' + name);
// }
// greet('John');


// function greet(name){
//     return 'Hello ' + name
// }
// greet('John');

//
// function greet(name){
//     return 'Hello ' + name
// }
//
// console.log(greet('John'))

// function sumScores(scores: number[]): number {
//     let total = 0;
//
//     for (let i = 0; i < scores.length; i++) {
//         total += scores[i];
//     }
//
//     return total;
// }
//
// console.log(sumScores([10, 20, 30]));


// const greet = function greet(name){
//     return 'Hello ' + name
// }
//
// console.log(greet('John'))

// Arrow function
// const greet = (name) => 'Hello ' + name
//
// console.log(greet('John'))

//arrow function with multiple parameters
// const multiply = (x,y) => { return x * y }
//
// console.log(multiply(5, 10))


// const maxValue = (a: number, b: number): number => {
//     return a > b ? a : b;
// };
//
// console.log(maxValue(10, 20)); // 20
// console.log(maxValue(50, 30)); // 50


// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(1,2));

//
// const add = (a:number,b:number) => {
//     return a+b;
// }
// const result = add(1,2) + 0;
// console.log(result, 'type of result:', typeof result);


// export const add = (a:number,b:number):string => {
//     const result =  a+b;
//     return result.toString();
// }
//
// const result = add(1,2) + 0;
// console.log(result, 'type of result:', typeof result);




export const  subtract = (a:number,b:number):string => {
    const result =  a-b;
    return result.toString();
}

const  add = (a:number,b:number):string => {
    const result =  a+b;
    return result.toString();
}
export default add;


