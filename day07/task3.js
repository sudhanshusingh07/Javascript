//Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book={
    title:"js book",
    author:"Hitesh",
    year:2024,
    getTitleAuthor: function(){
        return `${book.title} by ${book.author}`;
    },
};

console.log(book.getTitleAuthor());
