/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const supNoodleBar = {
  name: "Sup Noodle Bar",
  cuisines: ["Vietnamese", "American"],
  numberOfStars: 3,
  favorited: false,
};

// console.log(supNoodleBar);

supNoodleBar.address = "5141 Beach Blvd Unit B";
supNoodleBar.zipcode = 90621;
supNoodleBar.acceptsReservations = true;

supNoodleBar.numberOfStars = 5;
supNoodleBar.favorited = true;
supNoodleBar.cuisines.push("Soup");

// console.log(supNoodleBar);

function retrieveProperty(obj, key) {
  if (obj[key]) {
    return obj[key];
  } else {
    return "The information you requested does not exist.";
  }
}

console.log("Name:", retrieveProperty(supNoodleBar, "name"));
console.log("Types of Cuisine:", retrieveProperty(supNoodleBar, "cuisines"));
console.log("Favorite?:", retrieveProperty(supNoodleBar, "favorited"));
console.log("Nickname:", retrieveProperty(supNoodleBar, "nickName"));
console.log("State:", retrieveProperty(supNoodleBar, "state"));
