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

{/* <-------------------------------------------->  */}

//9 Comparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints:

// if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

// if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";
// Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".
  
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  testLogicalOr(15);

{/* <-------------------------------------------->  */}


//10   Basic JavaScript: Golf Code
//   In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
  
//   Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
  
//   Strokes	Return
//   1	"Hole-in-one!"
//   <= par - 2	"Eagle"
//   par - 1	"Birdie"
//   par	"Par"
//   par + 1	"Bogey"
//   par + 2	"Double Bogey"
//   >= par + 3	"Go Home!"
//   par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
  
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);  

{/* <-------------------------------------------->  */}

//11 A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

// Here is an example of a switch statement:

// switch(lowercaseLetter) {
//   case "a":
//     console.log("A");
//     break;
//   case "b":
//     console.log("B");
//     break;
// }
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - "alpha"
// 2 - "beta"
// 3 - "gamma"
// 4 - "delta"

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
      switch(val) {
        case 1:
          // console.log("alpha");
          return "alpha";
          break;
        case 2:
          return "beta";
          break;
        case 3:
          return "gamma"
          break; 
        case 4:
          return "delta"
          break;     
      }
  
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  caseInSwitch(2);

// It is common to ignore that case values are tested with strict equality with any need of other expression, like so:
// case === value
  
{/* <-------------------------------------------->  */}

// Adding a Default Option in Switch Statements
// In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

// A default statement should be the last case.

// switch (num) {
//   case value1:
//     statement1;
//     break;
//   case value2:
//     statement2;
//     break;
// ...
//   default:
//     defaultStatement;
//     break;
// }
// Write a switch statement to set answer for the following conditions:
// "a" - "apple"
// "b" - "bird"
// "c" - "cat"
// default - "stuff"

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
      case "a":
      return "apple";
      break;
      case "b":
      return "bird";
      break;
      case "c":
      return "cat";
      break;
      default:
      return "stuff";
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  switchOfStuff(1);
  