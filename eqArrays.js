const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let result;

  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        result = false;
        return result;
      }
      if (arr1[i] === arr2[j]) {
        result = true;
        i++;
      }
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