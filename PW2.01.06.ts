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
