// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2 to the power of x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 2 to the power of 0 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 2 to the power of 4 = 16
// Example 3:

// Input: n = 3
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(16));

// time complexity is Logarithmic O(log n) because each recursive call is dividing n by 2 So, the number of recursive calls is proportional to the logarithm of n.
// space complexity is O(log n), because of the recursive stack. Each time the function calls itself, it adds a new frame to the call stack. Since the recursion depth is proportional to the number of times n can be divided by 2, the maximum depth of recursion is log n
