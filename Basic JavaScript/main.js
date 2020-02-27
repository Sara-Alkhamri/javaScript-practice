//1 Assignment with a Returned Value
// If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

// Assume we have pre-defined a function sum which adds two numbers together, then:

// ourSum = sum(5, 12);

// will call sum function, which returns a value of 17 and assigns it to ourSum variable.

// Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

{/* <---------------------------------------> */}

//2 Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
    // Your code here
    arr.push(item) //push item to end or array
    var removed = arr.shift() //remove first item in array
    return removed;  // Change this line
  }
  
  
  