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
  if (obj === null || typeof obj !== 'object') return obj;
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
console.log(b);          // { val: 1, self: [Circular] }
console.log(b.self === b); // true
