/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1 , number2 )

// Step 2: In the function, return the sum of the parameters number1 and number2
{
  const sum = number1 + number2;

  return sum;
};
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers()
{
  const add1 = parseInt( document.getElementById("addend1").value) ;
  const add2 = parseInt( document.getElementById("addend2").value) ;


  const sum =  add(add1, add2);
  document.getElementById("sum").value = sum;
 

}

  




// Step 4: Assign the return value to an HTML form element with an ID of sum


// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
 
document.getElementById("addNumbers").addEventListener("click", addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

  const subtracting = function (no1, no2){return  no1 - no2}

  const subtractNumbers = function() {
  const sub1 = parseInt( document.getElementById("minuend").value);
  const sub2 = parseInt( document.getElementById("subtrahend").value);

  const subracted = subtracting(sub1, sub2);
   
   document.getElementById("difference").value = subracted;


}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


const multiply =  Function('a', 'b', "return a * b");

const multiplyNumbers = function() {
  const sub1 = parseInt( document.getElementById("factor1").value);
  const sub2 = parseInt( document.getElementById("factor2").value);

  const multiplied = multiply(sub1, sub2);
   
   document.getElementById("product").value = multiplied;


}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide =  Function('a', 'b', "return a / b");

const divideNumbers = function() {
  const sub1 = parseInt( document.getElementById("dividend").value);
  const sub2 = parseInt( document.getElementById("divisor").value);

  const divided = subtracting(sub1, sub2);
   
   document.getElementById("quotient").value = divided;


}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentYear = new  Date()

let day = currentYear.getDate()
let year = currentYear.getFullYear() 
let month = currentYear.getMonth() + 1

document.getElementById("year").textContent = `${day} - ${month} - ${year}`


// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

 numbers = [1,2,3,4, 5,6,7, 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.getElementById("array").value = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = numbers.filter((num) => num % 2 === 1);

document.getElementById("odds").textContent = odds
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const even =  numbers.filter((num) => num % 2 === 0);
document.getElementById("evens").textContent = even

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = numbers.reduce((num) => num + num );
document.getElementById("sumOfArray").textContent = sumOfArray

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiple = numbers.map((num) => num * 2 )
document.getElementById("multiplied").textContent = multiple

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const summultiple = multiple.reduce((num)=> num + num) 
document.getElementById("sumOfMultiplied").textContent = summultiple
