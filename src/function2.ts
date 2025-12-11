
export const findMax = (numbers: number[]): string => {
    let max = numbers[0]; // กำหนดค่าเริ่มต้นเป็นตัวแรกของ list

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max.toString(); // คืนค่าเป็น string
};
export default findMax;