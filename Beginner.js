// Celsius to Fahrenheit conversion

const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
console.log(celsiusToFahrenheit(25));

// Check even or odd

const CheckEventOrOdd = (num) => {
  return num % 2 === 0 ? "Even" : "odd";
};

// Check leap year

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Check positive, negative, or zero

const checkNumber = (num) =>
  num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(checkNumber(-5));

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

// Write a function that removes duplicate elements from an array.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Write a function that returns the largest number in an array.

function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([3, 7, 2, 8, 10]));

function sleep(ms) {
  // Your code here
}

sleep(2000).then(() => console.log("Waited for 2 seconds"));

function findPairs(arr, target) {
  // Your code here
}

console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 6));
// Output: [[2,4], [3,3], [5,1]]

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10

// Count the Number of Vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
}
console.log(countVowels("Hello World")); // 3

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
