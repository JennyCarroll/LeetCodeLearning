// You are given a grid represented by a 2D array, where each cell can either contain the letter 'X' or '.'. Your task is to write a function that counts how many times the letter 'X' appears in the grid.
// A 2D array grid with m rows and n columns (1 ≤ m, n ≤ 10).

function countXs(grid) {
  let Xcount = 0;
  for (let m = 0; m <= grid.length - 1; m++) {
    for (let n = 0; n <= grid[m].length - 1; n++) {
      if (grid[m][n] === "X") {
        console.log("found an X!");
        Xcount += 1;
      }
    }
  }
  return Xcount;
}

const input = [
  [".", "X", ".", "X"],
  ["X", "X", ".", "X"],
  [".", "X", ".", "."],
  ["X", ".", "X", "X"],
];

console.log(countXs(input));
