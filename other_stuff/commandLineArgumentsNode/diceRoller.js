// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

// > node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5

// Note
// To generate a random number, you'll have to use the built-in Math.random.

// In an earlier exercise, we had you create your own joinList function to achieve a similar goal. However, for this exercise you are free to use Array.prototype.join.

const arg = process.argv.slice(2);

const diceRoller = function (arg) {
  let output = "";
  for (let i = 1; i <= parseInt(arg[0]); ++i) {
    i === parseInt(arg[0])
      ? (output += Math.ceil(Math.random() * 6))
      : (output += Math.ceil(Math.random() * 6) + ", ");
  }
  return `Rolled ${arg[0]} dice: ${output}`;
};

console.log(diceRoller(arg));
