// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function (breed, functionToRunWhenThingsAreDone) {
  console.log("breedDetailsFromFile: Calling readFile...");
  const filePath = `./data/${breed}.txt`;
  console.log("Looking for file:", filePath);

  fs.readFile(filePath, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      functionToRunWhenThingsAreDone(data); // Pass the data to the callback function
    } else {
      console.log("Error reading file:", error);
    }
  });
};
// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = (breed) => {
  console.log("Return Value: ", breed); // => print out details correctly.
};
// // CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile("Bombay", printOutCatBreed);
const bombay = breedDetailsFromFile("Bombay", printOutCatBreed);
console.log("Return Value: ", bombay); // => will NOT print out details, instead we will see undefined!

// Change the breedDetailsFromFile function to take in and use a callback.
// Then, modify our call to that function by passing in a callback.
