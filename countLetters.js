const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {}

  for (const letter of sentence) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }

  return results;
}

// Tests

const string1 = "LHL";
const string2 = "Lighthouse Labs";
const string3 = "Harry Potter";
const string4 = "";
const string5 = "I";
const string6 = "I went to the store yesterday and bought some ice cream"

const result1 = countLetters(string1);
const result2 = countLetters(string2);
const result3 = countLetters(string3);
const result4 = countLetters(string4);
const result5 = countLetters(string5);
const result6 = countLetters(string6);

assertEqual(result1["L"], 2);
assertEqual(result2["i"], 1);
assertEqual(result3["r"], 3);
assertEqual(result4["r"], undefined);
assertEqual(result5["t"], undefined);
assertEqual(result5["I"], 1);
assertEqual(result6["e"], 8);