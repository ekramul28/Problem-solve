// Build Array from Permutation

function buildArray(nums: number[]): number[] {
  return nums.map((num) => nums[num]);
}

// Example usage:
console.log(buildArray([0, 2, 1, 5, 3, 4])); // Output: [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // Output: [4,5,0,1,2,3]
