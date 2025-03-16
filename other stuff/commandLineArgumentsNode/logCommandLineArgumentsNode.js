// node script.js hello world 123
"use strict";

for (let j = 0; j < process.argv.length; j++) {
  console.log(j + " -> " + process.argv[j]);
}

// type pwd in the command line to see what directory Im in (print working directory)
