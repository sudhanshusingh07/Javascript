//Use a for... in loop to iterate over the properties of the book object and log each property and its value.
let book = {
    title:"js",
    author: "ram",
    year: 2020,
  };
  
  for (key in book) {
    console.log(book[key]);
  }
  
