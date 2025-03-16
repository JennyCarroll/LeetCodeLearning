/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  while (num !== 0) {
    steps += 1;
    num % 2 === 0 ? (num /= 2) : (num -= 1);
  }
  return steps;
};

// recursion
var numberOfSteps = function (num, steps = 0) {
  if (num === 0) return steps;
  return numberOfSteps(num % 2 === 0 ? num / 2 : num - 1, steps + 1);
};

// try it with recursion
// try it in ruby
// time complexity O(logn) as the number of steps we take depends on the number of times we half the input
// space complexity O(1) as we are not creating any datastructures proportional in size to our input

// this could also be done with:
// binary representation of integers
// bitwise shift operators
// bitwise logical operators
// bitmasks

number = 7;
console.log(number % 2);
