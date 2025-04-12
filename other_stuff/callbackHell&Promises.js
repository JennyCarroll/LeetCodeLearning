const readline = require("readline");
// readline is a node library that allows us to read what the user types in the terminal

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's an activity you like doing? ", (answer1) => {
  rl.question("What do you listen to while doing that? ", (answer2) => {
    rl.question("Which meal is your favourite?", (answer3) => {
      rl.question("Favourite thing to eat for that meal? ", (answer4) => {
        rl.question("Which sport is your absolute favourite? ", (answer5) => {
          rl.question("What are you amazing at! ", (answer6) => {
            console.log(
              `I love to ${answer1} while listening to ${answer2} and eating ${answer3} and showering with ${answer4} before taking out a loan for a ${answer5} and then ${answer6}`
            );
            rl.close();
          });
        });
      });
    });
  });
});

new Promise((resolve) => {
  rl.question(
    "What's an activity you like doing? ",
    (input) => rl.close() && resolve(input)
  );
}).then((result) => {
  console.log(result);
});

// https://stackoverflow.com/questions/47998851/node-js-readline-inside-of-promises
