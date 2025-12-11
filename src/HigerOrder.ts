// const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);

// Output: [1, 4, 9, 16, 25]


// const n = [1, 2, 3, 4, 5];
// const even = n.filter((num) => num % 2 === 0);
// console.log(even);

function processNumbers(numbers: number[]): number[] {
    return numbers
        .filter((num) => num % 3 === 0)   // เลือกเลขที่หารด้วย 3 ลงตัว
        .map((num) => num ** 3);          // ยกกำลังสาม
}

const input = [1, 2, 3, 4, 5, 6, 9, 10];
console.log(processNumbers(input));
