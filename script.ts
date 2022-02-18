/*
 1. i typescript, 'any' is used to declare a variable to accept any type
   of data in the future
2. inference does not apply here which means the variable can be reassigned
   any type of data even after it is initialized
3. this is like reversing typescript to work just like javascript.
*/

// Examples
let gullible: any = 'billi'

console.log(gullible)

gullible = 1769

console.log(gullible)

// applying to arrays
let thundermans: any[] = [] // thundermans must be an array but can contain any type

thundermans = ['max', 'nora', 'chloe']

thundermans.push({dad: 'hank', mum: 'electress'})

thundermans.push(true)

thundermans.unshift('phoebe')

console.log(thundermans)


// applying to objects
let cast: {
   name: string, 
   featured: any, 
   episodes: any
} // cast must an object where name ppty is a string feature can be any type and episodes can be any type

// Examples
cast = {
   name: 'henry',
   featured: true,
   episodes: 'all'
} // correct

// cast = {
//    name: true,
//    featured: false,
//    episodes: 1
// } // wrong ❌ because name must be a string type

console.log(cast)