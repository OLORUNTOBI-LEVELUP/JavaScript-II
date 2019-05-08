// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  cb(arr.length);
}
getLength(items, length => {
  console.log(`The length of the array is ${length}.`);
});

// last passes the last item of the array into the callback.
function last(arr, cb) {
  cb(arr[arr.length - 1]);
}
last(items, lastitem => {
  console.log(`The last item in the array is ${lastitem}`);
});

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  cb(x + y);
}
sumNums(2, 3, addition => {
  console.log(`the sum of the two numbers is ${addition}`);
});

// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  cb(x * y);
}
multiplyNums(2, 3, multiplication => {
  console.log(`The multiplication of the two numbers is ${multiplication}`);
});

// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  let isInArray = () => {
    if (list.includes(item)) {
      return true;
    }
    return false;
  };

  cb(isInArray());
}
contains("Pencil", items, result => {
  console.log(result ? "pencil is in the array" : "pencil is not in the array");
});

/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

let duplicates = [1, 3, 4, 4, 4, 5, 5, 5, 7, 7, 8, 8, 0];
function removeDuplicates(array, cb) {
  let newArray = new Set(array);
  cb([...newArray]);
}

removeDuplicates(duplicates, noDuplicates => {
  console.log(`numbers with duplicates removed: ${noDuplicates}`);
});
