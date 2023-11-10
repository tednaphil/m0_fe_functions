// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(){
return "What's Shaking"
}
var salutations = greeting();

console.log(greeting());


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name){
    console.log (`What's shaking, ${name}!`);
}

var greeting1 = customGreeting("Bellamy");
var greeting2 = customGreeting("Taylor");


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last){
    console.log (`Good to see you, ${first} ${middle} ${last}. How was your day?`);
}
var greeting1 = greetPerson("Saint", "Nicholas", "Kringle");
var greeting2 = greetPerson("Tony", "Toni", "Tone");



// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num){
    var numSquared = num * num;
    console.log(numSquared);
    console.log(`The square of ${num} is ${numSquared}!`);
}

// I ran `square(2)' to test the function. The console printed "4" and "The square of 2 is 4!"

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(num, item){
    var inventory = num;
    if (inventory >= 4) {
        console.log (`${item} is stocked`);
    }  else if (inventory === 0) {
        console.log (`${item} - OUT of stock!`);
    } else if (inventory <= 3) {
        console.log (`${item} - running LOW`);
    }}


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"