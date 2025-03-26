const myMap = new Map();
myMap.set(4, "a");
myMap.set(3, "b");
myMap.set(8, "c");

myMap.forEach((value, key) => {
  console.log(key, value);
});

const myObj = {};

myObj[2] = "test";
myObj[9] = "test";
myObj[1] = "test";

Object.keys(myObj).forEach((key) => {
  console.log(key, myObj[key]);
});
