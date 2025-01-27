// 2. Task: Object Manipulation
const books = [
  { title: "Book A", author: "Author A", year: 1990 },
  { title: "Book B", author: "Author B", year: 2000 },
  { title: "Book C", author: "Author C", year: 2010 },
];
const getBookTitles = (books) => books.map((book) => book.title);
console.log("Book Titles:", getBookTitles(books));

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
];
const getMaleNames = (people) =>
  people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
console.log("Male Names:", getMaleNames(people));
