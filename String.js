let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Sudhanshu'
console.log(firstName.length)  // 9

let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t


// toUpperCase(): this method changes the string to uppercase letters.

console.log(string.toUpperCase())     // JAVASCRIPT


// toLowerCase(): this method changes the string to lowercase letters.

console.log(string.toLowerCase())     // javascript


// substr(): It takes two arguments, the starting index and number of characters to slice.

console.log(string.substr(4,6))    // Script

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the stopping index.


console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script


// split(): The split method splits a string at a specified place.
let st = '30 Days Of JavaScript'

console.log(st.split())     // ["30 Days Of JavaScript"]
console.log(st.split(' '))  // ["30", "Days", "Of", "JavaScript"]

let firstName = 'Sudhanshu'

console.log(firstName.split())    // ["Sudhanshu"]
console.log(firstName.split(''))  // ["S", "u", "d", "h", "a", "n", "s", "h" , "u"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]


// trim(): Removes trailing space in the beginning or the end of a string.
let name = '   Raj   '

     
console.log(name.trim(' '))  //Raj

// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
// let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true


// replace(): takes to parameter the old substring and new substring.
string.replace(oldsubstring, newsubstring)
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python


// charAt(): Takes index and it returns the value at that index
string.charAt(index)
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3


// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index
string.charCodeAt(index)
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 51
