const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char in sentence) {
  setTimeout(() => {
    if (sentence.length - 1 == char) {
      process.stdout.write(`${sentence[char]} \n`);
      return;
    }
    process.stdout.write(sentence[char]);
  }, time);
  time += 50;
}
//or I could take out the if statement and do the below
// setTimeout(() => {
//   process.stdout.write("\n");
// }, time + 1);
