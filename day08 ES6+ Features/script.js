// Task 1: Use Template Literal to create a string that includes variables for a person's name and age, and log the string to the console.


const name="sudhanshu";
const age=21;

console.log(`person name of is ${name} age is ${age}`);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLine = `My Name is Sudhanshu Singh.
I had completed my graduation from utu.`

console.log(multiLine);

// Activity 2: Destructuring
// Task 3: Use Array destructuring to extract the first and second elements from a array of numbers and log them to the console.

let a=[1,2,3];
let [b,c]=a
console.log(b,c);


// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book={
    title:"js",
    author:"ram",
    year:2024
};
let {title,author}=book;
console.log(title,author);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional element, and log the new array to the console.


a=[1,2,3];
b=[...a,4,5];
console.log(b);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.
function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log('Sum:', result);

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.


let mul=(a,b=1)=>{
    return a*b;
}

console.log(mul(4,5))
console.log(mul(4))

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties and log the object to the console.
const name = 'sudhanshu';
const age = 21;

const person = {
    name, // Property shorthand
    age, // Property shorthand
    greet() { // Method shorthand
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    celebrateBirthday() {
        this.age += 1;
        return `Happy Birthday! I am now ${this.age} years old.`;
    }
};

console.log('Person object:', person);
console.log(person.greet()); // Logs: Hello, my name is sudhanshu and I am 21 years old.
console.log(person.celebrateBirthday()); // Logs: Happy Birthday! I am now 22 years old.
console.log('Updated Person object:', person);


// Task 9: Create an object with computed property names based on variables and log the object to the console. 
const propertyName1 = 'firstName';
const propertyName2 = 'lastName';
const propertyName3 = 'age1';

const firstName = 'sudhanshu';
const lastName = 'singh';
const age1 = 21;

const person1 = {
    [propertyName1]: firstName,
    [propertyName2]: lastName,
    [propertyName3]: age,
};

console.log('Person object:', person1);
