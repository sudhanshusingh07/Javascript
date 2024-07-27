//Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.



const library={
    name: "School Library",
    books:[
        {
    title:"js book",
    author:"Hitesh",
    year:2024},

        {
        title:"c++ book",
        author:"dev",
        year:2010},

            {
            title:"java book",
            author:"deepak",
            year:2020},],

            getTitleAndYear: function () {
                return this.books.map((book) => {
                  return `${book.title}, ${book.year}`;
                });
              },

};


console.log(library.getTitleAndYear());

