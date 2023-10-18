const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(submittedObject, value) {
  for (const key in submittedObject) {
    if (submittedObject.hasOwnProperty(key)){
      if (submittedObject[key] === value) {
        return key;
      }
    } else if (!submittedObject.hasOwnProperty(key)) {
      return undefined;
    }
  }
}

//Tests

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestDogNames = { 
  formal: "Winston",
  cute: "Sprinkles",
  food:  "Sprinkles",
  movie: "Dobby"
};

assertEqual(findKeyByValue(bestDogNames, "Sprinkles"), "cute");
assertEqual(findKeyByValue(bestDogNames, "Dobby"), "movie");

const bestFoodsByType = { 
  dessert: "ice cream",
  pasta: "spaghetti",
  cold:  "ice cream",
  snack: "muffin"
};

assertEqual(findKeyByValue(bestFoodsByType, "ice cream"), "dessert");
assertEqual(findKeyByValue(bestFoodsByType, "tuna"), undefined);
assertEqual(findKeyByValue(bestFoodsByType, "muffin"), "snack");