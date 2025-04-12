const readline = require("readline");

const rockPaperScissors = ["rock", "paper", "scissors"];
numberOfOptions = rockPaperScissors.length;
const randomNumber = Math.floor(Math.random() * numberOfOptions);
const computerSelection = rockPaperScissors[randomNumber];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const determineWinner = (userSelection, computerSelection) => {
  if (!rockPaperScissors.includes(userSelection)) {
    return "Invalid selection. Please choose rock, paper, or scissors.";
  }
  console.log(
    `You selected ${userSelection} and the computer selected ${computerSelection}.`
  );
  return userSelection === computerSelection
      ? "It's a tie!"
      : (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
      ? "You win!"
      : "Computer wins!";
};

rl.question("rock, paper or scissors? ", (answer) => {
  userSelection = answer;
  rl.close();
  console.log(determineWinner(userSelection, computerSelection));
});
