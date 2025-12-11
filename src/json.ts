// const object = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
//
// console.log(object)
//
//
// const object = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
//
// console.log(object.name)


// const object = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
//
// console.log(object.name)
// const jsonStr = JSON.stringify(object);
// console.log("Object: ", object)
// console.log("json String: ", jsonStr)

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    gpa: number;
};

export const checkStudentStatus = (student: Student): string => {
    if (student.gpa > 2) {
        return JSON.stringify(student); // แปลงเป็น string
    } else {
        return `คุณ ${student.firstName} พ้นสภาพ`;
    }
};

const student1: Student = {
    firstName: "Somchai",
    lastName: "Jaidee",
    age: 20,
    gpa: 3.1,
};

const student2: Student = {
    firstName: "Ann",
    lastName: "Siri",
    age: 19,
    gpa: 1.8,
};

console.log(checkStudentStatus(student1));
// {"firstName":"Somchai","lastName":"Jaidee","age":20,"gpa":3.1}

console.log(checkStudentStatus(student2));
// คุณ Ann พ้นสภาพ
