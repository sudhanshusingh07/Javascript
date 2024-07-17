let year = prompt("Enter a year");
year = Number(year);

let result = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? "Leap year" : "Not a leap year";

console.log("The year is " + result);
