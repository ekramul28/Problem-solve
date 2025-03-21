// Longest Substring Without Repeating Characters

const longestUniqueSubstring = (str) => {
  let set = new Set();
  let left = 0,
    maxLength = 0;
  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(longestUniqueSubstring("abcabcsflfdkssdnskjdsdjsdsdjsnfsdklcbb"));

// Two Sum (Pair with Given Sum)

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

// Find the Second Largest Number in an Array

function secondLargest(arr) {
  let uniqueArr = [...new Set(arr)];
  if (uniqueArr.length < 2) return null;

  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
}

// Example usage:
console.log(secondLargest([10, 20, 4, 45, 99, 99])); // Output: 45

// Find the Missing Number in an Array

function findMissingNumber(arr) {
  let n = arr.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage:
console.log(findMissingNumber([3, 0, 1])); // Output: 2
console.log(findMissingNumber([0, 1, 2, 4, 5, 6])); // Output: 3

// Find the Longest Word in a Sentence

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
// Output: "jumped"

// Check for an Anagram

function isAnagram(str1, str2) {
  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false

// Find the Missing Number in an Array

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));
// Output: 3

// Palindrome Rearrangement

function canFormPalindrome(s) {
  const freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let oddCount = 0;
  for (let count of Object.values(freq)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) return false;
  }

  return true;
}

console.log(canFormPalindrome("civic")); // true
console.log(canFormPalindrome("ivicc")); // true
console.log(canFormPalindrome("hello")); // false
console.log(canFormPalindrome("aabbcc")); // true

// Custom Hook - useDebounce

import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage Example:
const debouncedSearch = useDebounce(searchTerm, 500);
