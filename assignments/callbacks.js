// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

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


function getLength(arr, cb) {
  cb(arr.length);
};
getLength(items, length => {
  console.log(`The length of the array is ${length}.`);
})



function last(arr, cb) {
  cb(arr[arr.length - 1]);
};
last (items, lastitem => {
  console.log(`The last item in the array is ${lastitem}`);
})



function sumNums(x, y, cb) {
  
  cb(x + y);
}
sumNums(2,3, addition => {
  console.log(`the sum of the two numbers is ${addition}`)
} )


function multiplyNums(x, y, cb) {
  cb( x * y)
}
multiplyNums(2,3, multiplication => {
  console.log(`The multiplication of the two numbers is ${multiplication}`);
})

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
 let isInArray = () =>{
    if(list.includes(item)){
      return true;
    }
    return false;
  }
 

   cb(isInArray());
};
contains('Pencil', items, result => {
  console.log(result ? 'pencil is in the array' : 'pencil is not in the array');
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
