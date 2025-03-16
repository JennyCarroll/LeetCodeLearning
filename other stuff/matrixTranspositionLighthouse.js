//jenny's code
const transpose = function (matrix) {
  let result = [];
  // let temp = []   I don't need to have this here if I have add line 7 and 15
  if (matrix.length === 1) {
    for (let i of matrix[0]) {
      let temp = [];
      temp.push(i);
      result.push(temp);
      // temp = [];   I don't need to have this here if I have add line 7 and 15
    }
    return result;
  }
  for (let x = 0; x < matrix.length; ++x) {
    let temp = [];
    for (let y = 0; y < matrix.length; ++y) {
      temp.push(matrix[y][x]);
    }
    result.push(temp);
    // temp = [];   I don't need to have this here if I have add line 7 and 15
  }
  return result;
};
//sooyeon's code
// const transpose = function (matrix) {
//   let result = [];

//   for (let x = 0; x < matrix[0].length; x++) {
//     /*matrix[x] gives you # of columns*/
//     result[x] = [];
//     for (let y = 0; y < matrix.length; y++) {
//       result[x].push(matrix[y][x]);
//     }
//   }

//   return result;
// };

// You'll be implementing a function called transpose, which will receive an array of arrays as its only parameter.
// Your function must return a new array with the columns and rows switched.
// Note that we've included a printMatrix function, which nicely prints out your 2D arrays.

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

// expected logs
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// ----
// 1 3 5
// 2 4 6
// ----
// 1
// 2
// 3
// 4
// 5
// 6
// 7
