// waitAndPrint = (message, delay) => {
//     setTimeout(() => {
//         console.log(message);
//     }, delay);
// }
//
// // Example usage:
// waitAndPrint("Hello, world!", 2000);


const waitAndPrint = (count = 0) => {
    setTimeout(() => {
        const worlds = "world ".repeat(count).trim();
        console.log(`hello ${worlds}`);
        waitAndPrint(count + 1); // เรียกซ้ำเพื่อเพิ่มคำว่า world
    }, 3000);
};

waitAndPrint();
