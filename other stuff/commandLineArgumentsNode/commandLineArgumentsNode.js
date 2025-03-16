const args = process.argv;
const sum = Number(args.slice(2)[0]) + Number(args.slice(2)[1]);
console.log(sum);

// to test put 2 numbers in the command line after using node to run the file (script)

const args = process.argv.slice(2);

// process.argv is an array that contains command-line arguments passed to a Node.js script. The first two elements in this array are not user-provided arguments:

// process.argv[0] → The path to the Node.js executable (e.g., /usr/local/bin/node)
// process.argv[1] → The path to the script being executed (e.g., /Users/jenny/script.js)

// Write a program that takes any number of command line arguments,
// converts each to pig latin, by taking its first letter,
// moving it to the end of the word, then adding "ay" after it all.
// then puts the translated words together into one sentence logged to the console.

const pigLatin = (args) => {
  //translate words
  const output = [];
  let string = "";
  for (let word of args) {
    string += word.slice(1) + word[0] + "ay";
    output.push(string);
    string = "";
  }
  //put words together into a sentence
  return output.join(" ");
};

console.log(pigLatin(args));
