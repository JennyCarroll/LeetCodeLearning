// Problem: Sum of Numbers
// Write a recursive function that calculates the sum of all numbers from 1 to a given number n.

// For example:

// sumNumbers(5) should return 15 (because 1 + 2 + 3 + 4 + 5 = 15)

// sumNumbers(3) should return 6 (because 1 + 2 + 3 = 6)

function sumNumbers(n) {
  return n === 0 ? 0 : n + sumNumbers(--n);
}

console.log(sumNumbers(5));
