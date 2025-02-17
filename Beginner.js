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

// Print numbers from 1 to 100. If a number is divisible by 3, print "Fizz"; if it's divisible by 5, print "Buzz"; if it's divisible by both, print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}

// Write a function that checks whether a given number is even or odd.

function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEvenOrOdd(7));

// Write a function that returns the larger of two numbers.

const maxNumber = (a, b) => {
  return a > b ? a : b;
};
console.log(maxNumber(10, 20));

// Write a function that calculates the factorial of a number.

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5)); // Output: 120

// Write a function that counts the number of vowels in a given string.

function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("hello world"));
