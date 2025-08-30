// Build Array from Permutation

function buildArray(nums: number[]): number[] {
  return nums.map((num) => nums[num]);
}

// Example usage:
console.log(buildArray([0, 2, 1, 5, 3, 4])); // Output: [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // Output: [4,5,0,1,2,3]

// Concatenation of Array

function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
}

// Example usage:
console.log(getConcatenation([1, 2, 1])); // Output: [1,2,1,1,2,1]
console.log(getConcatenation([1, 3, 2, 1])); // Output: [1,3,2,1,1,3,2,1]

// Number of Good Pairs

function numIdenticalPairs(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
}

// Example usage:
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // Output: 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // Output: 6
console.log(numIdenticalPairs([1, 2, 3])); // Output: 0

// Final Value of Variable After Performing Operations

function finalValueAfterOperations(operations: string[]): number {
  let x = 0;
  for (let op of operations) {
    if (op.includes("++")) {
      x++;
    } else {
      x--;
    }
  }
  return x;
}

// Example usage:
console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // Output: 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // Output: 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // Output: 0

// Deep Clone with Cyclic Reference

function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj);

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }
  return clone;
}

// Test
const a = { val: 1 };
a.self = a;

const b = deepClone(a);
console.log(b); // { val: 1, self: [Circular] }
console.log(b.self === b); // true

// Shuffle Array (Fisher-Yates Algorithm)
function shuffleArray(nums: number[]): number[] {
  const array = [...nums];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example usage:
console.log(shuffleArray([1, 2, 3, 4, 5])); // Output will be random permutation
console.log(shuffleArray([1, 2, 3, 4, 5])); // Output will be different random permutation

// Longest Common Prefix
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"])
); // Output: "inters"

// Maximum Subarray Sum (Kadane's Algorithm)
function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (subarray [4,-1,2,1])
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([-1, -2, -3, -4])); // Output: -1 (single element)

// First Non-Repeating Character
function firstUniqChar(s: string): number {
  const charCount = new Map<string, number>();

  // Count frequency of each character
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find first character with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// Example usage:
console.log(firstUniqChar("leetcode")); // Output: 0 (l is the first non-repeating character)
console.log(firstUniqChar("loveleetcode")); // Output: 2 (v is the first non-repeating character)
console.log(firstUniqChar("aabb")); // Output: -1 (no non-repeating character exists)

// Longest Palindromic Substring
function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  // Expand around center for both odd and even length palindromes
  for (let i = 0; i < s.length; i++) {
    // Check for odd length palindromes
    let len1 = expandAroundCenter(s, i, i);
    // Check for even length palindromes
    let len2 = expandAroundCenter(s, i, i + 1);

    let maxLen = Math.max(len1, len2);

    if (maxLen > maxLength) {
      start = i - Math.floor((maxLen - 1) / 2);
      maxLength = maxLen;
    }
  }

  return s.substring(start, start + maxLength);
}

function expandAroundCenter(s: string, left: number, right: number): number {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Output: "bb"
console.log(longestPalindrome("a")); // Output: "a"
console.log(longestPalindrome("ac")); // Output: "a"
console.log(longestPalindrome("racecar")); // Output: "racecar"
console.log(longestPalindrome("abba")); // Output: "abba"
console.log(longestPalindrome("")); // Output: ""
console.log(longestPalindrome("")); // Output: ""

//having some code in added some code in ui also
