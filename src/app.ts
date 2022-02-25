// Working with the DOM in typescript is just like in vanilla javascript with few notable differences as can be seen below...

const anchor = document.querySelector('a')

console.log(anchor) // log anchor to the console <a href="https://www.greenbrain.ng">Greenbrain</a>

/*
    Note:
    1. when you hover on anchor it shows "const anchor: HTMLAnchorElement | null" which means anchor
    is either a HTMLAnchorElement or null because typescript does not know for certain that such
    element exist in our HTML file during development

    2. because of point 1 above, typescript does not allow us to access any property on the anchor
    as we can in vanilla javascript
*/

// Example
// console.log(anchor.href) // this is not allowed

// we can get around this problem in 2 ways

// 1. do a runtime check to make sure the anchor tag actually in the DOM tree
if(anchor){
    console.log(anchor.href) // hover on anchor now shows "const anchor: HTMLAnchorElement" because we are sure it exists
} 

// 2. add an exclamation mark to end of the querySelector method 
const anchor2 = document.querySelector('a')!

console.log(anchor2)


/*
 another advantage of typescript is the it contains special types for every DOM element.
it recorgnizes these types and gives us all the properties available on them in an
in an intellisense 

*/

// Example
const form = document.querySelector('form')! // hover on form shows "const form: HTMLFormElement"


// Type casting
const formElement = document.querySelector('.new-item-form')!

/*
 Note:
 1. hover on formElement shows "const formElement: Element" because we a classs selector, typescript
 is not sure what element it is going to be because any element can bear a class name

 2. we can use type casting to tell typescript exaclty what element it is a shown below...
*/

const formElement2 = document.querySelector('.new-item-form') as HTMLFormElement
// hover on formElement2 now shows that it is a HTMLFormElement
// also notice that we took off the exclamation mark

// console.log(formElement2)

// Let's select the other elements in the page
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

formElement2.addEventListener('submit', (event: Event) => {
    event.preventDefault()

    console.log(
        type.value, tofrom.value, details.value, amount.valueAsNumber
    )
})