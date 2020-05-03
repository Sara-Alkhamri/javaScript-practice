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



