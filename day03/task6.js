let number = prompt("Enter a number");
number = Number(number);

let result = (number % 2 === 0) ? "Even" : "Odd";

console.log("The number is " + result);