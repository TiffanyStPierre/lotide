// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(submittedObject, callback) {
  for (const key in submittedObject) {
    if (submittedObject.hasOwnProperty(key)){
      if (callback(submittedObject[key])) {
        return key;
      }
    } else if (!submittedObject.hasOwnProperty(key)) {
      return undefined;
    }
  }
}

//Tests

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Harry Potter":  { house: "Gryffindor" },
  "Ron Weasley":   { house: "Gryffindor" },
  "Luna Lovegood": { house: "Ravenclaw" },
  "Draco Malfoy":   { house: "Slytherin" },
}, x => x.house === "Ravenclaw"), "Luna Lovegood");

assertEqual(findKey({
  "Harry Potter":  { house: "Gryffindor" },
  "Ron Weasley":   { house: "Gryffindor" },
  "Luna Lovegood": { house: "Ravenclaw" },
  "Draco Malfoy":   { house: "Slytherin" },
}, x => x.house === "Hufflepuff"), undefined);

assertEqual(findKey({
  "Harry Potter":  { house: "Gryffindor", patronus: "stag" },
  "Ron Weasley":   { house: "Gryffindor", patronus: "jack russell terrier" },
  "Luna Lovegood": { house: "Ravenclaw", patronus: "hare" },
  "Draco Malfoy":   { house: "Slytherin", patronus: "dragon" },
}, x => x.patronus === "jack russell terrier"), "Ron Weasley");
