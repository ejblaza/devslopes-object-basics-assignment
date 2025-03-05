/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

function grabCategories(obj) {
  console.log("Papa Johns Categories:", Object.keys(obj));
  console.log("List of Pizza Toppings:", Object.keys(obj.pizzaToppings));
}

grabCategories(papaJohns);

function verifyValues(obj, num) {
  if (num == Object.values(obj).length) {
    console.log(
      `Number of values in Object (${obj.name}) equal to ${num}?`,
      true
    );
  } else {
    console.log(
      `Number of values in Object (${obj.name}) equal to ${num}?`,
      false
    );
  }
}

verifyValues(papaJohns, 9);
verifyValues(papaJohns, 10);

function getToppingsInfo(obj) {
  console.log(Object.entries(obj.pizzaToppings));
}

getToppingsInfo(papaJohns);

papaJohns.printAd = function (topping) {
  console.log(
    `Welcome to ${papaJohns.name}! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}`
  );
};

papaJohns.printAd("bacon");

papaJohns.address = "123 Park Way";
papaJohns.slogan = "Our pizza is the best!";

papaJohns.printAd("pepperoni");
