/*
   We have previously mentioned that you don't have to specify the data type on a
   variable because typescript does that automatically using inference. 
   Well this is only true if the said variable is initialized with a value.
   But when a variable is not initialized, then type inference will not be
   possible and this makes it possible to assign the variable any value in the
   future which defeats the purpose of using typescript.
*/

// Example
let laptop

laptop = 'makbook pro'

laptop = 'lenovo tinkpad'

laptop = ['macbook pro', 780000, 'lenovo tink pad', 620000]

console.log(laptop)


/* To get around this, we can explicitly give the variable a type so that only
that type can be assigned to it in the future
*/

// Example
let device: string // now only string values can be assing to this variable
let quantity: number // only number can be assigned in the future
let isAvailable: boolean // only boolean values can be assigned


// to initialize these variables
device = 'macbook pro 2022' // correct
// device = 2022 // wrong

quantity = 2 // correct
// quantity = '2'

isAvailable = true // correct ✔
// isAvailable = 'true' // wrong ❌

console.log(device)
console.log(quantity)
console.log(isAvailable)


// Explicit type in Arrays

//   To declare a variable that only accepts an array of strings
let devices: string[]
devices = ['macbook pro', 'airpods pro'] // correct ✓

// devices = [1,2,3] // wrong ❌


console.log(devices)

/*
   Note: Array methods like .push(), .splice() etc. will not work on
   devides array because the variable has not been initialized
*/

// Declare an array that only accept numbers and initialize with empty array
let ages: number[] = []
ages = [19, 20, 21, 22]
ages.push(25)
ages.shift()

console.log(ages)

// Union types
/*
   this allows us to declare a variable that stores an array of mixed data types.

*/

let mixed:(string|number)[] = [] // this variable will store string and number types
mixed = ['musa abugi', 30, 'black hair', 6.7] // correct ✔️

// mixed = ['musa abugi', 30, true, ['abugi']] // wrong ❌
// mixed.push(false) // wrong ❌

// Union type on primitives
let uid: string|number  // the value of uid can either be a string or number

uid = '123456' // correct ✔️
uid = 123456 // correct ✔️
// uid = false // wrong ❌

console.log(uid)


// Explicit type in Objects
let object1: object // object1 can only hold values which are objects

// Examples
object1 = {             // correct
name: 'peter rabbit',
occupation: 'actor'
}

object1 = [] // this is also correct because Array is a form of object 

object1 = function(){} // this is also correct because is an object type

// object1 = 12 // wrong ❌

console.log(object1)

// If you wnat to be more specific on the type object
let object2: {
   name: string,
   role: string,
   age: number,
   isAlive: boolean
} // now only actual objects can be store in this variable and must have the same structure and defined data types

object2 = {
   name: 'umar bn affan',
   role: 'caliph',
   age: 71,
   isAlive: false
}

// object2 = {
//    name: 'yahaya haifan',
//    role: 'da\'i',
//    age: '70',
//    isAlive: true
// }  // this is not correct because the age property must be a number and not a string

console.log(object2)