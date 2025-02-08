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
