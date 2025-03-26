/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[output] = nums[i];
      output++;
    }
  }
  return output;
};

// time complexity = O(n) because we have to iterate through the array exactly once
// space complexity = O(1) because we don't create a data structure proportional in size to our input
