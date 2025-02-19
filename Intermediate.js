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

const sorter = (str) => {
  const value = new Set([...str]);
  return value.size;
};
console.log(sorter("abcabcsflfdkssdnskjdsdjsdsdjsnfsdklcbb"));
