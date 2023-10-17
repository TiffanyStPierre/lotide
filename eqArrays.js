const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  let result;

  if (arr1.length !== arr2.length) {
    result = false;
    return result;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
      return result;
    }
    if (arr1[i] === arr2[i]) {
      result = true;
    }
  }

  return result;
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