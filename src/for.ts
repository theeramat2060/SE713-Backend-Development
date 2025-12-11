// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for (let i = 0; i < color.length; i++) {
//     console.log(color[i])
// }
//
// let names = ["Somchai", "Ann", "Waraporn", "Tom", "Suda"];
//
// for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//
//     if (name.length > 6) {
//         console.log(`สวัสดีคุณ ${name}`);
//     } else {
//         console.log(`Hello ${name}`);
//     }
// }

// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for (const c of color) {
//     console.log(c);
// }

let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
for (const index in color) {
    console.log(`Index: ${index}, Value: ${color[index]}`);
}
