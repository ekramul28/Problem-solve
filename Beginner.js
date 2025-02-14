// Write a function that takes a string and returns the reversed version.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("hello"));

// Write a function that checks if a given string is a palindrome (reads the same backward and forward).

const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join();
  return reversed === str;
};

// Write a function that takes an array of numbers and returns the largest number

const largestNumberOfArray = (array) => {
  return Math.max(...array);
};

console.log(largestNumberOfArray([2, 5, 767, 432, 2455]));
