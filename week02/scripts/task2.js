/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

let myName = "Ezekiel Happy Jeremiah";



// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
 
document.getElementById("name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year

const currentYear = new  Date()

let day = currentYear.getDate()
let year = currentYear.getFullYear() 
let month = currentYear.getMonth() + 1



// Step 4: place the value of the current year variable into the HTML file

document.getElementById("year").textContent = `${day} - ${month} - ${year}`


// Step 5: declare and instantiate a variable to hold the name of your picture

let myPicture = "images/zik1.jpg";


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())


document.getElementById("photo").src = "images/zik1.jpg";

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

const favFood = ["Rice", "Beans" , "Banga"]



// Step 2: place the values of the favorite foods variable into the HTML file

document.getElementById("food").textContent = favFood ;



// Step 3: declare and instantiate a variable to hold another favorite food

let favFoodSecond = "Groundnut Soup";


// Step 4: add the variable holding another favorite food to the favorite food array

    favFood.push(favFoodSecond)


// Step 5: repeat Step 2

document.getElementById("food").textContent = favFood ;



// Step 6: remove the first element in the favorite foods array

favFood.shift();


// Step 7: repeat Step 2

document.getElementById("food").textContent = favFood ;

// Step 8: remove the last element in the favorite foods array

favFood.pop()
// Step 7: repeat Step 2

document.getElementById("food").textContent = favFood ;


