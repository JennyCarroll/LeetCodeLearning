const args = process.argv;
const sum = Number(args.slice(2)[0]) + Number(args.slice(2)[1]);
console.log(sum);

// to test put 2 numbers in the command line after using node to run the file (script)