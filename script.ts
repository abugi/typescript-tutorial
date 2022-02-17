// Array
let list = ['macbook', 'iWatch', 'iPadPro']

/*
   To typescript:
   1. the variable 'list' can only be assigned the a value that is an array
   2. the array can contain only string data types
*/

// So unlike javascript, the following will not work in typescript

// list = 'macbook'
// list.push(12)
// list[0] = {name: 'teema'}

// Instead
list = ['1','2','3']
list.push('12')
list[0] = '11'


// Lets look at another example
let mixed = ['one', 1, 'two', 2]

/*
   To typescript:
   1. the variable 'list' can only be assigned the a value that is an array
   2. the array contain a mixture of string and number data types only
*/

// So the following will be valid
mixed = ['sam dede', 49]
mixed.push('samson noah', 46)

// and this will be invalid
// mixed = ['age', 12, false]
// mixed.push(['next'])

console.log(list)
console.log(mixed)


// Object
let wife = {
   name: 'Neematallah',
   age: 27,
   isCute: true
}

/*
   Considering the object above, the following rules apply in typescript

   1. the variable wife can only be assigned an object
   2. any object assigned to the variable must have the same structure i.e
    the same of keys and same value types
   3. once an object is defined, we cannot add additional properties to it
   4. the existing properties of the object can be changed with a value of same type
*/

// So the following will not work

// wife = 'Neematallahi'

// wife = {
//    name: 'Neemat',
//    age: '27',
//    isCute: 'false'
// }

// wife.color = 'black'

// the following will be valid
wife.age = 19
wife.name = 'Neemat'

console.log(wife)
