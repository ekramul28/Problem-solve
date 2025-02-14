// Write a function that takes a string and returns the reversed version.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("hello"));

// Write a function that checks if a given string is a palindrome (reads the same backward and forward).

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("racecar"));

const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join();
  return reversed === str;
};
