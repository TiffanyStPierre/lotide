const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
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


const without = function(source, itemsToRemove) {
  let newArray = [];

  if (itemsToRemove.length === 0) {
    return source.slice();
  }

  for (let i = 0; i < source.length; i++) {
    let removeItem = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeItem = true;
        break;
      }
    }

    if(removeItem === false) {
      newArray.push(source[i]);
    }
  }

  return newArray;
}

// TESTS

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])) // => [2, 3]

console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

console.log(without(["banana", "apple", "pear"], ["apple"])); // => ["banana" "pear"]

console.log(without(["banana", "apple", "pear"], ["banana"])); // => ["apple" "pear"]

console.log(without(["banana", "apple", "pear"], [])); // => ["banana", "apple" "pear"]

console.log(without(["banana", "apple", "pear"], ["banana", "apple", "pear"])); // => []