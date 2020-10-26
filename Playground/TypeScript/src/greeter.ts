// // # This function is only for testing.
// function printResult(title, func) {
//     const p = document.createElement("p");
//     p.innerText = `# ${title} : ${func}`;
//     document.body.appendChild(p);
// }

// /** @description Learning Type annotations
//  * @param {string} user name
//  * @return {string} greeting
//  */
// function greeter01(person: string) {
//     return "Hello, " + person;
// }
// let userStr = "Krystal Yoo";
// // let userArr = ['a', 2, 3];

// printResult('annotation', greeter01(userStr));
// // printResult('annotation', greeter01(userArr)); // error
// // ![error] Argument of type '(string | number)[]' is not assignable to parameter of type 'string'.

// /** @description Learning Interface
//  * @param {object} user's  first name, last name interface
//  * @return {string} greeting
//  */
// interface Person01 {
//     firstName: string;
//     lastName: string;
// }
// function greeter02(person: Person01) {
//     return `Hello, ${person.firstName}  ${person.lastName}`;
// }

// let userObj = { firstName: "Krystal", lastName: "YOO" };

// printResult('interface', greeter02(userObj));

// /** @description Learning Classes
//  * @param {object} user's  first name, last name interface
//  * @return {string} greeting
//  */
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInital: string, public lastName: string) {
//         this.fullName = `${firstName} ${middleInital} ${lastName}`;
//     }
// }

// interface Person02 {
//     firstName: string;
//     lastName: string;
// }

// function greeter03(person: Person02) {
//     return `Hello, ${person.firstName} ${person.lastName}`;
// }

// let user = new Student("Krystal", "SJ", "YOO");
// printResult('Classes', greeter03(user));
