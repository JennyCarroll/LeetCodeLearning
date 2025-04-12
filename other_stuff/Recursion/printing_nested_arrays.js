const printItems = function (array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
};

const array = [
  "A",
  [
    ["B", ["C"]],
    [[["D"]], "E"],
  ],
];
printItems(array);

// The recursive case is when item is an array. We call the function again with that array.
// The base case is when the item is not an array. We just log it out.

//below is what it might look like using iteration instead
// const printItems = function(array) {
//   while (array.length > 0) {
//     const element = array.shift();

//     if (Array.isArray(element)) {
//       element.reverse().forEach((newElement)=> {
//         array.unshift(newElement);
//       });
//     } else {
//       console.log(element);
//     }
//   }
// }
