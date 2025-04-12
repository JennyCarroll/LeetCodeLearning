// n^2 = n^n ie.4 * 4 or 4^2

// return true if two numbers in that array can be added together to equal
// that number. Otherwise, return false.
function arrayContainsSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];

    for (let ii = 0; ii < array.length; ii++) {
      const element2 = array[ii];

      if (element1 + element2 === sum) {
        return true;
      }
    }
  }
  return false;
}
//this is how it would be counted
function arrayContainsSum(array, sum) {
  for (
    // If we loop through an array of n items, that loop is going to execute the code inside of it n times:
    let i = 0; // 1
    i < array.length; // n + 1
    i++ // n
  ) {
    const element1 = array[i]; // n
    // If we loop through that array again inside this loop, the inner loop will execute the code inside of it n^2 times:
    for (
      let ii = 0; // n
      ii < array.length; //n + n^2
      ii++ // n^2
    ) {
      const element2 = array[ii]; // n^2

      if (element1 + element2 === sum) {
        // n^2
        return true;
      }
    }
  }
  return false; // 1
}
// Every time we nest another loop, the number executions in the inner most loop will be multiplied by n. This example becomes n^3:
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]); // n
//   for (let ii = 0; ii < array.length; ii++) {
//     console.log(array[ii]); // n^2
//     for (let iii = 0; iii < array.length; iii++) {
//       console.log(array[iii]); // n^3
//     }
//   }
// }

// Note that looping through a single array twice is different from looping through two separate arrays.
// Same Array:
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]); // n
//     for (let ii = 0; ii < array.length; ii++) {
//       console.log(array[ii]); // n^2
//     }
//   }
//the same array will run n^2 time

// Separate Arrays:
// for (let i = 0; i < arrayA.length; i++) {
//   console.log(arrayA[i]); // a
//   for (let ii = 0; ii < arrayB.length; ii++) {
//     console.log(arrayB[ii]); // a*b
//   }
// }
// the separate arrays will run in a * b time. (a=# of items of first array and b=# of items of second array)

// Time to make our algorithm more efficient (linear)! Let's get rid of that nested for loop and increase efficiency. Replace your current function with the following implementation:

function arrayContainsSum(array, sum) {
  let i = 0;
  let ii = array.length - 1;

  while (i <= ii) {
    const element1 = array[i];
    const element2 = array[ii];
    const currentSum = element1 + element2;

    if (currentSum === sum) {
      return true;
    } else if (currentSum > sum) {
      ii--;
    } else {
      i++;
    }
  }

  return false;
}
// This algorithm is similar to our second approach of finding the sum in the list of numbers,
// except it does expect the array to be pre-sorted.
// We check the smallest number and the largest number in the array until we find the sum.
// Let's evaluate the running time.

// function arrayContainsSum(array, sum) {
//   let i = 0; // 1
//   let ii = array.length-1; // 1

//   while (i <= ii) { // n + 1

//     const element1 = array[i]; // n
//     const element2 = array[ii]; // n
//     const currentSum = element1 + element2; // n

//     if (currentSum === sum) { // n
//       return true;
//     } else if(currentSum > sum) { // n
//       ii--; // n
//     } else {
//       i++;
//     }
//   }
//   return false; // 1
// }
// Add all the operations together to get a running time of 4 + 7n.

// the running time for algorithm b under the heading arbitrarily large input is incorrect.  it should read 4 n rather than 2 n.  I confirmed this with mentor Manali Bhattacharyya
