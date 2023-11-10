// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() {
   console.log("Hello, what is your name?");
  }

askForName();
 
// I returned after the open curly brace and added a semicolon to the end of each line of code to match conventional syntax for calling a functions. 

// EX 2:
function addThreeNums(first, second, third) {
return first + second + third;
      }

var sum1= addThreeNums(1, 2, 3);
var sum2= addThreeNums(4, 2, 7);

console.log(sum1);
console.log(sum2);
// I removed the var sum declaration and replaced the return line to return the 1st number plus the second number plus the 3rd number. Then I declared two variables (sum1 & sum2) and called on the addThreeNums function for two different sets of parameters. Last, I added console.logs for both variables so that the return values for both callings of the function would print to the console. I did the first couple changes so that printing return values would be quicker.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();

// I replaced "func" with "function" to correct the "unexpected identifer" error then I returned before the closeing curly brace so that it looks like the rest of the code written :D.


//  EX 4:
function average(num1, num2) {
  return (num1 + num2) / 2;
}

var result1 = average(10, 20);
var result2 = average(5,5);

console.log(result1);
console.log(result2);

  // I moved the closing curly brace to the end of the function return line. I then updated the return line so that the return value would be the sum of the parameters divided by two. Then I declared to variables that called the average function with two different sets of arguments, and added a console.log line for both variables to print the return values for each function call.