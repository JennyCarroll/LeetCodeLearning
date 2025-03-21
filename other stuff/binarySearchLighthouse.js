//binary search

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function search(array, item) {
  let min = 0; //1
  let max = array.length - 1; //1

  while (true) {
    //run until you are done (don't know the stopping condition)
    const middleIndex = Math.floor((min + max) / 2.0);
    const currentItem = array[middleIndex];
    // console.log("currentItem:", array[middleIndex]);
    if (currentItem === item) {
      // Found it
      return middleIndex;
    } else if (currentItem < item) {
      // Look at the right side
      min = middleIndex + 1;
    } else {
      // Look at the left side
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
  }
}
console.log(search(array, 2));

// time complexity O(log n)
