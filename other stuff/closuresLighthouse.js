const outer = function () {
  const x = 10;

  const inner = function () {
    console.log("The value of x is: " + x);
  };
  return inner;
};

// Console logging the result of the function
console.log(outer()); // which happens to be a function

// Aliasing the result of outer
const foo = outer();

// Then invoking the inner funciton of outer
foo();

// The key attribute of closures is demonstrated here: the inner function accesses variable x,
// which is defined within the parent function outer.
// Closures definition
// JavaScript will retain the context of parent functions, meaning that it will retain references to any variables in parent functions (this is referred to as Lexical Scoping 1).
// When a function retains the context of a parent function, we call that a "closure".

// Immediately-invoked function expression
// You can alternatively use an immediately-invoked function expression (IIFE) to achieve a similar result.

const foo = (function () {
  const x = 10;

  const inner = function () {
    console.log("Value of x is: " + x);
  };
  return inner;
})(); // Notice the () at the end,
// which will immediately invoke the function,
// assigning the returned value (inner) to foo

foo();

Question;
// What are the limitations of this approach? Could you create multiple instances of the closure using this approach?
