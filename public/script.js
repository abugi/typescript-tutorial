"use strict";
// We saw earlier how we can set variable types to function
let act;
// we can get more specific by defining the staructure of the function
// what arguments it takes in, and what it returns
// this is know as function signature
// Example 1
let greet; // this function can only take in 2 parameters both of which must be strings and returns nothing
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
}; // correct
// greet = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`)
// } // wrong ❌
// greet = (name: string, greeting: string, age: number) => {
//     console.log(`${name} says ${greeting}`)
// } // wrong ❌
greet('Uwais', 'Assallamun alaikum 🙏🏽');
// Example 2
let calc;
/*
    Facts:
    1. the function takes in 3 parameters
    2. x and y must be of number type and z a string type
    3. the function must reurn a number type
*/
// calc = (num1: number, num2: number, action: string) => {
//     if(action === 'add'){
//         return num1 + num2
//     }
// } // this will not work becasue when action is not "add" it will return undefine insatead of a number
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    } // correct
};
// calc = (num1: number, num2: boolean, action: string) => {
//     if(action === 'add'){
//         return num1 + num2
//     }else {
//         return num1 - num2
//     } // wrong because signature is not matched
// }
console.log(calc(12, 5, 'subtract'));
// Example 3
let logDetails;
logDetails = (person) => {
    console.log(`My name is ${person.name} and I'm ${person.age} years old.`);
};
logDetails({ name: 'Rawdah', age: 3 });
