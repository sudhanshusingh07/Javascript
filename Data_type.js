// Check Data types: To check the data type of a certain data type we use the typeof and we also change one data type to another. Example:
// Different javascript data types
// Let's declare different data types

let firstName = 'Sudhanshu'      // string
let lastName = 'Singh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 25                    // number
let job                         // undefined, because a value was not assigned

console.log(typeof 'Sudhanshu')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

//Casting
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10

let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
let num = '10'
let numInt = +num

console.log(numInt) // 10

// String to Float
// We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

// parseFloat()
// Number()
// Plus sign(+)
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
let num = '9.81'
let numFloat = +num

console.log(numInt) // 9.81


// Float to Int
// We can convert float numbers to integers. We use the following method to convert float to int:

parseInt()
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9