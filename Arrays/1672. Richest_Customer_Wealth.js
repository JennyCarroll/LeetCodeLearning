var maximumWealth = function (accounts) {
  let richestWealth = 0;

  for (let account of accounts) {
    let total = 0;
    for (let j = 0; j < account.length; j++) {
      total += account[j];
    }
    total > richestWealth && (richestWealth = total);
    total = 0;
  }

  return richestWealth;
};
// Time complexity O(nxm)
// Space complexity O(1) constant because we do not create a datastructure proportional in size to our input

input = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(input));
