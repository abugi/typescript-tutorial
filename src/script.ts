let func = () => console.log('this is a funciton') 

/*
    1. typescript automatically gives the variable func a type Function
    due to type inference as it applies to string and numbers
    2. assigning a value of another type will not be allowed
*/

// Example
// func = 'this is illegal' // wrong ❌


// Explicit function type
let greet: Function // only function ca be assigned to greet

greet = () => 'Hello there!' // correct

// greet = {name: 'musa abugi'} // wrong ❌


// Implicit function parameter type
const add = (param1: number, param2: number) => {
    console.log(param1 + param2)
}  // only numbers can be passed into the function as parameters

// Examples
add(12, 8) // correct

// add(7, '23') // wrong ❌


// Passing optional parameters
const minus = (x: number, y: number, z?: string | number) => {
    console.log(x - y)
    console.log(z)
}

/*
 1. adding a question mark in front of the 3rd parameter makes it optional
 2. the 3rd parameter is a union type of either a string or a number
 3. when the 3rd parameter is not provided, the funciton returns undefined for it
*/

minus(56, 8) // z = undefined


// the return key word
const multiply = (a: number, b: number) => {
    return a * b
}

/* 
    1. when a function returns a value, the type of that funciton is the
    value it returns (inference)
*/

let result = multiply(12, 13)

result = 23 // correct
// result = '23'

console.log(result)



/*
    When a funtion does not explicitly return  a value,
    the return type for such funtion is "void"
*/

// Example
const devide = function (a:number, b:number){
    console.log(a / b)
}

console.log(devide(12,3))

// the type of devide is void