/*
   Note:
   1. the main difference between typescript and javascript is the type definition.
    Typescript uses strict type and javascript uses dynamic types. this means that
    when a variable is initialized in typescript with a certain datatype, it cannot
    be changed later. e.g
*/

let _name = 'Fatimah'
let height = 5.4
let isMarried = true

/*
   Looking at the exaxmples above...

   1. variable _name can never be reassigned to another value that is not a string
   2. height can be reassigned to a value that is a number datatype but never to a 
   different datatype
   3. the value of isMarried must always be a Boolean
*/

// So the following will not work in typescript

// _name = 2001 //number is not reassignable to a string
// height = '5.4' // string is not reassignable to a number
// isMarried = 'yes' // string is not reassignable to a boolean


/*
   Notice how we did not have to specify the types?

   Well, thats because typescript uses 'inference'
   In inference, typescript determines the type of a varibale based on the value
   assigned to it.
*/


//Specifying type passed in to a function
// const circ = (diameter) => {
//    return diameter * Math.PI
// }

// At the moment we can pass anything to this function because not type is specified
// console.log(circ('me'))

// but the only meaningful data type for this function is a number
const circ = (diameter: number) => { // now we cannot pass in any data except number
   return diameter * Math.PI
}

// console.log(circ('12')) // this is wrong
console.log(circ(12))