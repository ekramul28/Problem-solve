// 1. Task: Array Filtering and Mapping
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

// 2. Task: Object Manipulation
const books = [
  { title: "Book A", author: "Author A", year: 1990 },
  { title: "Book B", author: "Author B", year: 2000 },
  { title: "Book C", author: "Author C", year: 2010 },
];
const getBookTitles = (books) => books.map((book) => book.title);
console.log("Book Titles:", getBookTitles(books));

// 3. Task: Function Composition
const square = (num) => num ** 2;
const double = (num) => num * 2;
const addFive = (num) => num + 5;
const composedFunction = (num) => addFive(double(square(num)));
console.log("Composed Function Result:", composedFunction(3));

// 4. Task: Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2021 },
];
const sortCarsByYear = (cars) => cars.sort((a, b) => a.year - b.year);
console.log("Sorted Cars:", sortCarsByYear(cars));

// 5. Task: Find and Modify
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];
const updatePersonAge = (name, newAge, persons) => {
  const updatedPersons = persons.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );
  return updatedPersons;
};
console.log("Updated Persons:", updatePersonAge("Charlie", 23, persons));

// 6. Task: Array Reduction
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumEvenNumbers = (numbers) =>
  numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
console.log("Sum of Even Numbers:", sumEvenNumbers(numbers));

// 7. Task: Leap Year Checker
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log("Is 2024 a Leap Year?", isLeapYear(2024));
console.log("Is 2023 a Leap Year?", isLeapYear(2023));

// 8. Task: Unique Values
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const getUniqueValues = (numbers) => [...new Set(numbers)];
console.log("Unique Values:", getUniqueValues(numbersWithDuplicates));

// 9. Task: Advanced Sorting
const students = [
  { name: "Alice", grades: [80, 90, 85] },
  { name: "Bob", grades: [75, 85, 95] },
  { name: "Charlie", grades: [70, 80, 75] },
];
const sortByAverageGrade = (students) =>
  students.sort(
    (a, b) =>
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length -
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length
  );
console.log("Sorted Students:", sortByAverageGrade(students));

// 10. Task: Functional Programming - Reduce
const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 15 },
  { quantity: 1, price: 5 },
];
const calculateTotalValue = (items) =>
  items.reduce((total, item) => total + item.quantity * item.price, 0);
console.log("Total Value of Items:", calculateTotalValue(items));
