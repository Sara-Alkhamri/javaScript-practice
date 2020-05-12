// Accessing Nested Arrays
// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

// Here is an example of how to access a nested array:

// var ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];
// ourPets[0].names[1]; // "Fluffy"
// ourPets[1].names[0]; // "Spot"
// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.

//Solution:

// Setup
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  // Only change code below this line
  
  var secondTree = myPlants[1].list[1]; // Change this line



//   Basic JavaScript: Record Collection
//   You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.
  
//   Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.
  
//   If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
  
//   Your function must always return the entire collection object.
  
//   There are several rules for handling incomplete data:
  
//   If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
  
//   If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
  
//   If value is empty (""), delete the given prop property from the album.
  
//   Hints
//   Use bracket notation when accessing object properties with variables.
  
//   Push is an array method you can read about on Mozilla Developer Network.
  
//   You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.  

//Solution:

// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
    if(value === "") delete collection[id][prop];
    else if(prop === "tracks") {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = value;
    }
  
    return collection;
  }
  
  updateRecords(5439, "artist", "ABBA");

//First checks if prop is equal to tracks AND if value isn’t a blank string. If both tests pass, value is pushed into the tracks array.
//If that first check doesn’t pass, it next checks only if value isn’t a blank string. If that test passes, either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
//If both these checks fail (meaning value must be an empty string), then the key (prop) is removed from the object. 

//While Loops:

// Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a while loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

// var ourArray = [];
// var i = 0;
// while(i < 5) {
//   ourArray.push(i);
//   i++;
// }
// In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

// Let's try getting a while loop to work by pushing values to an array.

// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// Solution:

// Setup
var myArray = [];

// Only change code below this line

var i = 5;
while(i >= 0) {
  myArray.push(i)
  i--
}

//Iterate with JavaScript For Loops
// You can run the same code multiple times by using a loop.

// The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times.

// For loops are declared with three optional expressions separated by semicolons:

// for ([initialization]; [condition]; [final-expression])

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.

// The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression.

// var ourArray = [];
// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
// ourArray will now contain [0,1,2,3,4].

// Use a for loop to work to push the values 1 through 5 onto myArray.

//Solution:

// Setup
var myArray = [];

// Only change code below this line

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

// Iterate Odd Numbers With a For Loop
// For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

// We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

// var ourArray = [];
// for (var i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }
// ourArray will now contain [0,2,4,6,8]. Let's change our initialization so we can count by odd numbers.

// Push the odd numbers from 1 through 9 to myArray using a for loop.

//Solution:

// Setup
var myArray = [];

// Only change code below this line

for (var i = 1; i <10; i +=2) {
  myArray.push(i);
}

// Count Backwards With a For Loop
// A for loop can also count backwards, so long as we can define the right conditions.

// In order to count backwards by twos, we'll need to change our initialization, condition, and final-expression.

// We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

// var ourArray = [];
// for (var i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }
// ourArray will now contain [10,8,6,4,2]. Let's change our initialization and final-expression so we can count backward by twos by odd numbers.

// Push the odd numbers from 9 through 1 to myArray using a for loop.


//Solution:

// Setup
var myArray = [];

// Only change code below this line
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// Iterate Through an Array with a For Loop
// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

// var arr = [10, 9, 8, 7, 6];
// for (var i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
// Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length and outputs 6 to the console.

// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

//Solution:

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nesting For Loops
// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

// var arr = [
//   [1,2], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {
//   for (var j=0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

//Solution:

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  
   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  // Counting Cards
  // In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
  
  // Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
  
  // Count Change	Cards
  // +1	2, 3, 4, 5, 6
  // 0	7, 8, 9
  // -1	10, 'J', 'Q', 'K', 'A'
  // You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
  
  // Example Output
  // -3 Hold
  // 5 Bet
  
  // Hint
  // Do NOT reset count to 0 when value is 7, 8, or 9.
  // Do NOT return an array.
  // Do NOT include quotes (single or double) in the output.  

  // Solution:

  var count = 0;

  function cc(card) {
    // Only change code below this line
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
    if (count > 0) {
      return count + " Bet";
    } else {
      return count + " Hold";
    }
    // Only change code above this line
  }

  
  // Nesting For Loops
  // If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
  
  // var arr = [
  //   [1,2], [3,4], [5,6]
  // ];
  // for (var i=0; i < arr.length; i++) {
  //   for (var j=0; j < arr[i].length; j++) {
  //     console.log(arr[i][j]);
  //   }
  // }
  // This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.
  
  // Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr  

//Solution:

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



// Iterate with JavaScript Do...While Loops
// The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

// var ourArray = [];
// var i = 0;
// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);
// The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5:

// var ourArray = []; 
// var i = 5;
// while (i < 5) {
//   ourArray.push(i);
//   i++;
// }
// In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

// var ourArray = []; 
// var i = 5;
// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);
// In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.

// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

//Solution:

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i <= 10);

// Generate Random Fractions with JavaScript
// Random numbers are useful for creating random behavior.

// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1

// Note
// Like Storing Values with the Equal Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

// Change randomFraction to return a random number instead of returning 0.

//Solution:

function randomFraction() {
  // Only change code below this line.
  var result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
  while (result === 0) {
    result = Math.random();
  }

  return result;
  // Only change code above this line.
}

// Generate Random Whole Numbers with JavaScript
// It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

// Use Math.random() to generate a random decimal.
// Multiply that random decimal by 20.
// Use another function, Math.floor() to round the number down to its nearest whole number.
// Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

// Putting everything together, this is what our code looks like:

// Math.floor(Math.random() * 20);

// We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

// Use this technique to generate and return a random whole number between 0 and 9.

//Solution:

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range
// Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.

// To do this, we'll define a minimum number min and a maximum number max.

// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min

// Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

//Solution:

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

// Use the parseInt Function
// The parseInt() function parses a string and returns an integer. Here's an example:

// var a = parseInt("007");

// The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

//Solution:

function convertToInteger(str) {
  return parseInt(str)
}

convertToInteger("56");

