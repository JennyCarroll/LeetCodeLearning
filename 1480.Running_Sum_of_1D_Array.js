var runningSum = function (nums) {
  let total = nums[0];
  const firstNum = nums[0];
  const result = [firstNum];
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      result[i] = total += nums[i];
    }
  }

  return result;
};

nums = [1, 2, 3, 4];

console.log(runningSum(nums));

// time complexity O(n) because we have to perform an operation on each element
// space complexity O(1) is constant because we do not create a datastructure proportionate to our input
// best not to use recursion for this one as each call would add a frame to the call stack making space complexity O(n)
