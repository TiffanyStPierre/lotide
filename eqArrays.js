// Function to determine if 2 arrays are identical or not. Returns true if they match exactly, returns false if they do not match exactly

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Tests

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["dog", "cat", "monkey"], ["dog", "cat", "monkey"]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], ["dog", "cat", "monkey"]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], [12, 2, 3]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], [1, 12, 3]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], [2, 2, 13]), false); // => should NOT PASS
assertEqual(eqArrays(["dog", "cat", "monkey"], ["cat", "dog", "monkey"]), false); // => should NOT PASS