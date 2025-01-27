// 2. Task: Object Manipulation
const books = [
  { title: "Book A", author: "Author A", year: 1990 },
  { title: "Book B", author: "Author B", year: 2000 },
  { title: "Book C", author: "Author C", year: 2010 },
];
const getBookTitles = (books) => books.map((book) => book.title);
console.log("Book Titles:", getBookTitles(books));
