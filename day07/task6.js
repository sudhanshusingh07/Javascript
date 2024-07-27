// Access and log the name of the library and the titles of all the books in the library.


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

            getAllBooks: function () {
                return library.books.map((book) => book.title);
              },

};


console.log(library.name);
console.log(library.getAllBooks());

