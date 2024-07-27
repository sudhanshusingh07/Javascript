//  Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.


const book={
    title:"js book",
    author:"Hitesh",
    year:2024,
    updateYear: function(year){
        book.year=year;
    },
};
book.updateYear(2023);
console.log(book.year);

