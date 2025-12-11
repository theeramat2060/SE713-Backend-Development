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

function sumScores(scores: number[]): number {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total;
}

console.log(sumScores([10, 20, 30]));
