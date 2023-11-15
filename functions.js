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
    return (`What's shaking, ${name}!`);
}

var greetBellamy = customGreeting("Bellamy");
var greetTaylor = customGreeting("Taylor");

console.log(greetBellamy);


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last){
    return (`Good to see you, ${first} ${middle} ${last}. How was your day?`);
}
var greeting1 = greetPerson("Saint", "Nicholas", "Kringle");
var greeting2 = greetPerson("Tony", "Toni", "Tone");

console.log(greeting1);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num){
    var numSquared = num * num;
    return (`The square of ${num} is ${numSquared}!`);
}

console.log(square(4));

// I ran `square(2)' to test the function. The console printed "4" and "The square of 2 is 4!"

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(num, item){
    if (num >= 4) {
        return (`${item} is stocked`);
    }  else if (num === 0) {
        return (`${item} - OUT of stock!`);
    } else if (num <= 3) {
        return (`${item} - running LOW`);
    }}


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

console.log(checkStock(4, "Coffee"));