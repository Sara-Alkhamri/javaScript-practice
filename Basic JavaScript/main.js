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
  
  {/* <----------------------------------------------------> */}

//3   Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

// Examples

// 3 ===  3   // true
// 3 === '3'  // false
// In the second example, 3 is a Number type and '3' is a String type.

// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testStrict(10);


{/* <-------------------------------------------->  */}

//4 Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

// Examples

// 1 !=  2     // true
// 1 != "1"    // false
// 1 != '1'    // false
// 1 != true   // false
// 0 != false  // false
// Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testNotEqual(10);

{/* <-------------------------------------------->  */}

// 5  Comparison with the Strict Inequality Operator
//   The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.
  
//   Examples
  
//   3 !==  3   // false
//   3 !== '3'  // true
//   4 !==  3   // true
//   Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17  

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  // Change this value to test
  testStrictNotEqual(10);

  
{/* <-------------------------------------------->  */}

//6 Comparison with the Greater Than Operator
// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, greater than operator will convert data types of values while comparing.

// Examples

// 5   >  3   // true
// 7   > '3'  // true
// 2   >  3   // false
// '1' >  9   // false
// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(10);

{/* <-------------------------------------------->  */}

//7   Comparison with the Greater Than Or Equal To Operator
//   The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
  
//   Like the equality operator, greater than or equal to operator will convert data types while comparing.
  
//   Examples
  
//   6   >=  6   // true
//   7   >= '3'  // true
//   2   >=  3   // false
//   '7' >=  9   // false
//   Add the greater than or equal to operator to the indicated lines so that the return statements make sense.  
  
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  testGreaterOrEqual(10);

{/* <-------------------------------------------->  */}

//8   Comparisons with the Logical And Operator
//   Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
  
//   The same effect could be achieved by nesting an if statement inside another if:
  
//   if (num > 5) {
//     if (num < 10) {
//       return "Yes";
//     }
//   }
//   return "No";
//   will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:
  
//   if (num > 5 && num < 10) {
//     return "Yes";
//   }
//   return "No";
//   Replace the two if statements with one statement, using the && operator, which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".
  
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  // Change this value to test
  testLogicalAnd(10);  
  