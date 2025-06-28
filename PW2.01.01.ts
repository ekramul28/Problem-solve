function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Example usage
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// removeDuplicates
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

// Example usage
let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1); // Output: 2, nums = [1,2,_]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2); // Output: 5, nums = [0,1,2,3,4,_]

// searchInsert

function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// Example usage:
console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4

// nextPermutation

function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let left = i + 1,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

// Example usage:
let nums3 = [1, 2, 3];
nextPermutation(nums3);
console.log(nums3); // Output: [1,3,2]

let nums4 = [3, 2, 1];
nextPermutation(nums4);
console.log(nums4); // Output: [1,2,3]

let nums5 = [1, 1, 5];
nextPermutation(nums5);
console.log(nums5); // Output: [1,5,1]

// PW2.01.07 Integer to Roman

function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];
    }
  }

  return result;
}

// Test cases
console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));

// PW2.01.08 Roman to Integer

function romanToInt(s) {
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
      total -= romanMap[s[i]];
    } else {
      total += romanMap[s[i]];
    }
  }

  return total;
}

// Test cases
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// PW2.01.09 Longest Common Prefix

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  strs.sort();
  let first = strs[0],
    last = strs[strs.length - 1];

  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.substring(0, i);
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// PW2.01.10 Valid Parentheses

function isValid(s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (map[char]) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false

// nextPermutation

function nextPermutation2(nums: number[]): void {
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let left = i + 1,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (substring "abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 (substring "b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 (substring "wke")
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("abcdef")); // Output: 6 (substring "abcdef")
console.log(lengthOfLongestSubstring("aab")); // Output: 2 (substring "ab")
