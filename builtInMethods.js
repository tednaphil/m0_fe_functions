// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
// The .toLowerCase is being called on the string "Hello World". The purpose of the method is to change all letters in the String to lowercase.
// The return value will be "hello world"
.
"Hello World".includes("Hello");
// The .includes method is being called on the string "Hello World". The purpose of this method is to check if the string contains the provided characters.
// No arguments are passed - since the string does include "Hello", the return value will be the Boolean "true"

"Hello World".endsWith("Hello");
// The .endsWith method is being called on the string "Hello World". The purpose of the method is to check if a String ends with the same provided string of characters.
// There are no arguments passed - since the string does not end with "Hello", the return value will be the Booleon "false".


"Hello World".endsWith("rld");
// The .endsWith method is being called on the string "Hello World". The purpose of the method is to check if a String ends with the same provided string of characters.
// There are no arguments passed - since the string ends with "rld", the return value will be the Booleon "true".


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The .repeat() method is called on the cheer variable, which stores the string "geaux!".
// The .repeat() method returns the object assigned to the variable however many times is defined by the number provided as an argument.
// In this example, the return value is "geaux!geaux!geaux!geaux!" because the argument passed was 4.
// The console.log() statement prints the return value of the .repeat() method to the console.
var cheer = "geaux!";
console.log(cheer.repeat(4));

// The .replaceAll method is called on the sentence variable that stores the string "I love the way the snow falls in my snow globe."
// The .replaceAll method returns a new string with the pattern passed as an argument with the replacement passed as an argument.
// In this example, the return value is "I love the way the lava falls in my lava globe." because the arguments passed were ('snow', 'lava').
// The console.log() statement prints the return value of the .replaceAll method (a new string) to the console.
var sentence = "I love the way the snow falls in my snow globe";
console.log(sentence.replaceAll('snow', 'lava')); 


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.