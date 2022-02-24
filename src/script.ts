/*
  1. if you have functions that use similar types or similar group of types (in the
    case of union types), it can get very repeatitive and cumbersome.
  2. typescript solves this kind of problems using "type aliases" to reduce code
  duplication
  3. define it once, use it anywhere and as many times as you want
*/

// Example
const longDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

longDetails(123456, 'plunger')


const greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} with ${user.uid} says Hello!`)
}

console.log(greet({name: 'musa abugi', uid: 123456}))

/* Now instaed of alwasy repeating "string | number" union type, we can
write a type alias for it as follows
*/

type stringOrNum = string | number

const longDetails2 = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

longDetails2(123456, 'quidward')


const greet2 = (user: {name: string, uid: stringOrNum}) => {
    console.log(`${user.name} with ${user.uid} says Hello!`)
}

console.log(greet2({name: 'jonjo shelvey', uid: 123456}))