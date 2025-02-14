// Write a function that takes a string and returns the reversed version.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("hello"));
