/*
let roundUp = 1.5;
roundUp = Math.round(roundUp);
console.log(roundUp)

let n = 128;
n = n.toString()
console.log(n);
console.log(typeof n)

let fruit = "orange";
if (fruit.length > 5) {
  console.log("The fruit name has more than five characters");
} else {
  console.log("The fruit name has five characters or less");
}
console.log(fruit)

const hello = 'Hello World';
console.log(hello.charAt(6))

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
var my_string = "JJ";
console.log(my_string[0].charCodeAt()
);
var my_string = "Jenny";



var studentName = "John";
var haveEnrolledInCourse = 'yes';
var haveCompletedTheCourse = false;


if (haveEnrolledInCourse == 'yes') {console.log("Welcome "+studentName+" to Udacity!")}
    

let z = 1
let u = "2"

console.log(z + u)
//will be a string

console.log("1" == 1)
//will be true because "1" will be coerced to a number


var room = "dining room";

var suspect = "Mr. Parkes"; 

var weapon = "";
var solved = false;

if (room === 'ballroom') {
    weapon = 'poison'
    if (suspect === 'Mr. Kalehoff')
    solved = true
} 
else if (room === 'gallery') {
        weapon = 'trophy'
        if (suspect === 'Ms. Van Cleve')
        solved = true
} 
else if (room === 'billiards room') {
        weapon = 'pool stick'
        if (suspect === 'Mrs. Sparr')
        solved = true
} 
else if (room === 'dining room') {
         weapon = 'knife'
        if (suspect === 'Mr. Parkes')
        solved = true
}
/* ****************************************** */
// The code below will run only when `solved` is true
/*if (solved) {
	console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else {
  console.log('incorrect answer')
}
/* ****************************************** */

/*var balance = 100;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance) {
    if (isActive && balance > 0)
    console.log(`Your balance is ${balance.toFixed(2)}.`)
    if (!isActive)
    console.log("Your account is no longer active")
    if (balance === 0)
    console.log("Your account is empty")
    if (balance <0)
    console.log("Your balance is negative.  Please contact the bank")
} else {
    console.log("Thank you. Have a nice day!")
}


var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;

var size = "N/A"

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    size = "S"
} 
console.log(size)

if (0.0) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

const whichSchool  = function (age) {
  if (age < 13) {
    return 'Elementary School';
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
}
console.log(whichSchool(35))

var x = 1;

while (x <= 20) {
    if ((x % 3 === 0) && (x % 5 === 0)) {
      console.log("JuliaJames")
    } else if
    (x % 3 === 0) {
    console.log("Julia")
} else if (x % 5 === 0) {
    console.log("James")
} else {
    console.log(x)
}
    x++
}


while (x <= 20) {
    switch (x) {
    case (x % 3 === 0) && (x % 5 === 0) :
    console.log("JuliaJames")
    case (x % 3 === 0) :
    console.log("Julia");
    break;
    case (x % 5 === 0) :
    console.log("James");
    break;
    default:
    console.log(x)
}
    x++
}


var num = 99;

while (num >= 0) {
    if (num === 1) {
      console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
}   else if (num === 2) {
      console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!")
    } else if (num > 1) {
      console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    num--
}

let T = 60

while (T >= 0) {
  if (T === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (T === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (T === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (T === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (T === 6) {
    console.log("Main engine start");
  } else if (T === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log(`T-minus ${T} seconds`)
  }
  T--;
}


let solution = 12

for (let i = 11; i >= 1; i--){
    solution *= i;
}
console.log(solution)
or let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution); 


for (row = 0; row <=25; ++row) {
  for (seat = 0; seat <=99; ++seat) {
     console.log(row + "-" + seat)
  }
}
*/
/*let num = 100

for (let num = 100; num <=200; num++) {
    switch (num) {
    case (num % 3 === 0 && num % 4 === 0):
    console.log("LoopyLighthouse");
    break;
    case (num % 4 === 0):
    console.log("Lighthouse");
    break;
    case (num % 3 === 0):
    console.log("Loopy");
    break;
    default:
    console.log(num);
  } 
}
for (let num = 100; num <=200; ++num) {
    if (num % 3 === 0 && num % 4 === 0){
      console.log("LoopyLighthouse")
    } else if (num % 3 === 0) {
      console.log("Loopy")
    } else if (num % 4 === 0) {
      console.log("Lighthouse")
    } else {
    console.log(num);
    }
  } */

// accepts no parameters! parentheses are empty
/*var sound = "" ; 
function laugh(num) {
  for (var x = 0 ; x < num ; x++) {
      sound += "ha" ;  
  }
  sound += "!"; 
  return sound; 
}

console.log(laugh(3)) 

let Ariel = [1, 2, 4, 6]
console.log(Ariel.length)
console.log(Ariel.indexOf(4))*/

/*function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

console.log(makeLine(10))


function buildTriangle(length) {
    var triangle = "";
    var lineNumber = 1;
    for(var lineNumber=1; lineNumber<=length; lineNumber++){
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

console.log(buildTriangle(10))

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}
// pass in catSays as a callback function
console.log(helloCat(catSays));

//anonymous function expression
var laugh = function (numOfHas) {
    let sound = ""
    for (let i = 1; i <= numOfHas; i++) {
    sound += "ha"
    }
    sound = sound + "!"
    return sound
}
console.log(laugh(3));

//named function expression
let cry = function namesAreStupid () {
    return "boohoo!"
}
console.log(cry)

//example of passing a function expression inline as a parameter
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function (numOfHas) {let sound = ""; for (let i = 1; i <= numOfHas; i++) { sound += "ha"
    }; sound = sound + "!"; return sound})

function isOdd (num) {
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}
}

isOdd(2)


function howManyHundreds (numOfBottles) {
    let container = numOfBottles/100
    return Math.floor(container)
  }

console.log(howManyHundreds(350))*/

/*function calculateRectangleArea (length, width) { 
  if (length >= 0 && width >= 0) {
return (length * width);
} else {
  return "undefined"
}
}
console.log(calculateRectangleArea(10, -5))

function calculateTriangleArea (base, height) {
  if (base >= 0 && height >= 0) {
return (base * height / 2);
} else {
  return "undefined"
}
}

console.log(calculateTriangleArea(10, -5))

function calculateCircleArea (radius) {
    if (radius >= 0) {
      radius *= radius
return (Math.PI * radius);
} else {
  return "undefined"
}
}
console.log(calculateCircleArea(-1))

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
let highest = points[points.length-1];
console.log(highest)

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(num, index) {
    if (num % 3 === 0) {
      test[index] += 100;
    }
})


var newTest = test.map(function(value) {
  value += 1;
  return value
});

console.log(newTest)

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
const totals = bills.map(function (value) {
    value += value * 0.15
    return Number(value.toFixed(3));
})
console.log(totals)

//i have to convert the value to a number because. to fixed() switches it to a string.

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var i = 0; i < donutBox.length; i++) {
  for (var ii = 0; ii < donutBox[i].length; ++ii) {
  console.log(donutBox[i][ii] + " is located at " + ii + " " + donutBox.indexOf(donutBox[i]))
  }
  }

  var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here

for (i = 0; i < numbers.length; ++i) {
    for (ii = 0; ii < numbers[i].length; ++ii) {
      if (numbers[i][ii] % 2 === 0) {
        numbers[i][ii] = "even"
      } else {
        numbers[i][ii] = "odd"
      }
    }
}
console.log(numbers)*/

// /*const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// let i = 0
// while (i < ingredients.length) {
//   console.log(ingredients[i]);
//   i++;
// }

// for (let i = 0; i < ingredients.length; ++i) {
//   console.log(ingredients[i]);
// }

// for (let i = 7; i >= 0; --i) {
//   console.log(ingredients[i]);
// }*/

// // function range (start, end, step) {
// //   let array = []
// //   if (step <=0) {
// //     return array;
// //   }
// //   for (let i = start; i <= end; i += step) {
// //       array.push(i)
// //     }
// //     return array
// // }

// // console.log(range(0, 10, -5))

// // function lastIndexOf (array, value) {
// //   let finalInstance;
// //   for (let i = 0; i < array.length; ++i) {
// //     if (array[i] === value) {
// //       finalInstance = i
// //     }
// //   }
// //   if (finalInstance >= 0) {
// //     return finalInstance
// //   } else {
// //     return -1
// //   }
// // }
// // console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 0))

// // function concat (array1, array2) {
// //   let newArray = array1.concat(array2)
// //   return newArray
// // }
// // console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]))

// var sister = {
//   name: "Sarah",
//   age: 23,
//   parents: [ "alice", "andy" ],
//   siblings: ["julia"],
//   favoriteColor: "purple",
//   pets: true,
//   paintPicture: function() { return "Sarah paints!"; }
// };
// console.log(typeof(sister.name))
// console.log(sister["name"])
// console.log(sister.name)

// console.log(typeof(sister.paintPicture))
// console.log(sister["paintPicture"])
// console.log(sister.paintPicture)

// console.log(sister.paintPicture())
// console.log(sister["paintPicture()"])

// let facebookProfile = {
//     name: "Jenny Carroll",
//     friends: 25,
//     messages: ["first", "second", "third"],
//     postMessage: function (message) {
//       facebookProfile.messages.push(message);
//     },
//     deleteMessage: function (index) {
//       facebookProfile.messages.splice(index, 1);
//     },
//     addFriend: function () {
//       facebookProfile.friends++
//     },
//     removeFriend: function () {
//       facebookProfile.friends--
//     }
// }

// // This is an array of objects.
// var donuts = [
//     { type: "Jelly", cost: 1.22 },
//     { type: "Chocolate", cost: 2.45 },
//     { type: "Cider", cost: 1.59 },
//     { type: "Boston Cream", cost: 5.99 }
// ];

// // your code goes here
// donuts.forEach(function(donut){
//     console.log(donut.type + " donuts cost $" + donut.cost + " each");
// })

// const car = {
//   make: "Honda",
//   model: "Accord",
//   year: 2020,
// };

// const keys = Object.keys(car);
// console.log(keys)

// const smartGarbage = function (trash, bins) {
//   if (trash === "waste") {
//     bins.waste++;
//   }
//   if (trash === "recycling") {
//     bins.recycling++;
//   }
//   if (trash === "compost") {
//     bins.compost++;
//   }
//   return bins
// }

// console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

// {
//   waste: 4,
//   recycling: 3,
//   compost: 5
// }

const fruits = ["mango", "papaya", "pineapple", "apple"];
// Iterate over fruits below

// fruits.forEach(function(fruit){
//  console.log(`-` + fruit);
// })

// const functionVariable = function (pmeter, pmeter) {
//      contents of function
// };

// fruits.forEach(fruit =>console.log(`I want to eat a ${fruit}.`));

// const identifier = pmeter => contents of function;

// let array = [1, 2, 3];

// array.forEach((_, index, arr) => arr[index] += 1);
// console.log(array)

function Ariel(word) {
  alert("Ariel");
}

Ariel();

console.log(Object.getOwnPropertyNames(Math));

let ariel = ["word"];

console.log(ariel.constructor);
console.log(typeof ariel);
console.log(ariel.valueOf());
console.log(ariel.constructor === Array);
console.log(ariel.constructor === Object);
//is this falst because Object is a keyword?
console.log(Object.valueOf(ariel));

let ariel = "ariel";

console.log(ariel.replace("i", " "));
console.log(ariel.length - 7);
console.log(ariel.indexOf("i", 3));

let Ariel = ["test", "test"];

console.log(Array.isArray(Ariel));

function Ariel() {
  return "word";
}
Ariel.newProperty = "cool";

console.log(Object.getOwnPropertyNames(Ariel));
console.log(Ariel.newProperty);
console.log(Object.keys(Ariel));

const numbers = [28, 77, 45];
numbers.forEach((number) => {
  console.log(number);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = numbers.filter(function evenNumbers(number) {
  return number % 2 === 0;
});
console.log(filtered);

let cat = { dog: "Ariel", fish: "bird" };
console.log(Object.keys(cat));
console.log(cat);
console.log(cat.dog);

let newCat = {};
for (let c in cat) {
  let newObject;
  newCat[c + 2] = cat[c] + 2;
  newCat[c] = "test";
}
console.log(newCat);

var guess = window.prompt("Enter your guess", "Number from 1 to 9");
console.log(guess);

var question = "How are you today, ";
var yourName = prompt("what is your name?", "name");
alert(question + yourName + "?");

let value = prompt("Write Something");

let charactersWritten = value.length;
let charactersRemaining = 100 - value.length;
alert(
  "You have written " +
    charactersWritten +
    " characters. You have " +
    charactersRemaining +
    " characters remaining."
);

let userWords = prompt("Write Something");
let message = userWords.slice(0, 15);
alert(message);
//or you could do
alert(prompt("Write Something").slice(0, 15));

let name = prompt("write your name", "here");
alert(
  name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase()
);

let humanAge = (prompt("enter dog's age", "years") - 2) * 4 + 21;
alert(humanAge);

let box = 5;

console.log(box++);
console.log(box);

console.log("____ \n");

let otherBox = 5;

console.log(++otherBox);

//We create a function that returns something, then we call that fuction with parameters and bind it in a variable, then we log the variable name

function bmiCalculator(weight, height) {
  return Math.floor(weight / (height * height));
}

var bmi = bmiCalculator(65, 1.8);

console.log(bmi);

prompt("first name?", "name");
prompt("second name?", "name");

function loveCalculator() {
  return Math.floor(Math.random() * 100 + 1);
}

alert("Your love score is " + loveCalculator());

function isLeap(year) {
  let no = "Not leap year.";
  let yes = "Leap year.";
  let answer = "";
  if (year % 4 === 0) {
    answer = yes;
    if (year % 100 === 0) {
      answer = no;
      if (year % 400 === 0) {
        answer = yes;
      }
    }
  } else {
    answer = no;
  }
  return answer;
}

isLeap(2400);

let guestList = ["ALYKHAN", "ARIEL", "JENNY"];
let person = prompt("What is your name?", "name").toUpperCase();
let message = "Sorry, maybe next time.";

function canIEnter(guestList) {
  for (let guest of guestList) {
    if (person === guest) {
      message = "Welcome!";
    }
  }
  alert(message);
}

canIEnter(guestList)[
  //names to input
  ("Angela", "Ben", "Jenny", "Michael", "Chloe")
];
function whosPaying(names) {
  let i = Math.floor(Math.random() * names.length);
  return `${names[i]} is going to buy lunch today!`;
}

let output = [];
function fizzBuzz() {
  for (let counter = 1; counter <= 100; counter += 1) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      output.push("FizzBuzz");
    } else if (counter % 3 === 0) {
      output.push("Fizz");
    } else if (counter % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(counter);
    }
  }
  return output;
}
console.log(fizzBuzz());

///the way that I did the below is weird

function fibonacciGenerator(n) {
  let answer = [];
  if (n === 1) {
    answer.push(0);
  } else if (n >= 2) {
    answer.push(0, 1);
    for (let i = 2; answer.length /*she put i here*/ < n; ++i) {
      answer.push(answer[answer.length - 1] + answer[answer.length - 2]);
    }
  }
  return answer;
}

let output = fibonacciGenerator(8);

console.log(output);

// lowest common ancestor of binary search tree https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
var lowestCommonAncestor = function (root, p, q) {
  // Base case: return the root if it's null or the LCA
  if (!root) return null;

  // If root is the LCA or the left and right are on different sides
  if (
    (p.val <= root.val && q.val >= root.val) ||
    (p.val >= root.val && q.val <= root.val)
  ) {
    return root;
  }

  // If both p and q are smaller than root, LCA is in the left subtree
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  // If both p and q are larger than root, LCA is in the right subtree
  return lowestCommonAncestor(root.right, p, q);
};
