// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function pizzaPlace(obj) {
  for (const key in obj) {
    console.log(key, obj[key]);
  }
}

pizzaPlace(dominos);

function toppingsPriceRange(obj) {
  const { pizzaToppings } = obj;
  let highest = -Infinity;
  let lowest = Infinity;
  for (let key in pizzaToppings) {
    if (pizzaToppings[key] > highest) {
      highest = pizzaToppings[key];
    } else if (pizzaToppings[key] < lowest) {
      lowest = pizzaToppings[key];
    }
  }

  return [highest, lowest];
}

console.log(
  "Highest and Lowest prices of toppings respectively:",
  toppingsPriceRange(dominos)
);

function calculateAverageRating(obj) {
  const { starReviews } = obj;
  let total = 0;
  for (let key in starReviews) {
    total += starReviews[key];
  }
  let average = total / Object.keys(starReviews).length;
  console.log(`Average star reviews for ${obj.name}:`, average.toFixed(2));
}

calculateAverageRating(dominos);
