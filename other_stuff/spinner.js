const spinnerArray = ['|', '/', '-', '\\'];
let counter = 0;

const interval = setInterval(() => {
  process.stdout.write('\r' + spinnerArray[counter % spinnerArray.length]);
  counter++;

  // Stop the spinner after a few seconds
  if (counter > 20) {
    clearInterval(interval);
    process.stdout.write('\rDone!\n');
  }
}, 100);

// \r brings the cursor back to the beginning of the line (so it overwrites itself).