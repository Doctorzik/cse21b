/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myInfo = {
  name: "Ezekiel Happy. Jeremiah", 
  photo: "images/zik1.jpg", 
  favouriteFood: ["rice", "Beans", "Garri", "Soup", "Sweet"],
  hobbies: ["Reeading", "Swimming", "Outing", "Tennis Playing"],
  placesLived: [
    {
      place: "Yenegoa",
      length: "10 Years",
    }
  ]

}

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src =myInfo.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt =myInfo.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

const myFavourite = document.getElementById("favorite-foods")

const foodss = myInfo.favouriteFood

for (let i = 0; i < foodss.length; ++i)
{
  let lees = document.createElement("li");
  lees.textContent = foodss[i];
  myFavourite.append(lees);
  console.log(lees)
}

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const myHobbies = document.getElementById("hobbies")
const myHobbyList = myInfo.hobbies

for (let i = 0; i < myHobbyList.length; ++i)
{
  let createHobbiesList = document.createElement("li");
  createHobbiesList.textContent = myHobbyList[i];
  myHobbies.append(createHobbiesList);
}


// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
for (let i = 0; i < myInfo.placesLived.length; ++i){
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
   dt.innerHTML = myInfo.placesLived[i].place
   dd.innerHTML = myInfo.placesLived[i].length

  document.getElementById("places-lived").appendChild(dt);
  document.getElementById("places-lived").appendChild(dd);

}
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
