/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

const joinList = (list) => {
  let result = "";
  for (let word of list) {
    word !== list[list.length - 1] ? (result += word + ", ") : (result += word);
  }
  return result;
};

console.log(joinList(["test", "ing"]));

// .join() is optimized internally, using O(n) time complexity instead of O(n²)
