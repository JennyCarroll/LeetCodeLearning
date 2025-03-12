var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    let element = "";
    if (i % 3 === 0) {
      element += "Fizz";
    }
    if (i % 5 === 0) {
      element += "Buzz";
    }
    if (element === "") {
      element += i.toString();
    }
    answer.push(element);
  }
  return answer;
};

// time complexity O(n)
// space complexity O(n)

// the modulo operator works by giving us the remainder of dividing a number by a chosen divisor
// time complexity O(n) because we have to perform our logic on each element of the array (n)
// space complexity is constant O(1) because only data structures, proportional in size to our input, that are used to aid in our solution contribute to the space complexity, not data structures used for our output
// it think the space complexity is O(n) because of the answer array i create...Auxiliary space generally refers to the space used by the algorithm apart from the input and the output.
