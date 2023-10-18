const assertArraysEqual = function(arr1, arr2) {
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

// New Function

const letterPositions = function(sentence) {
  const results = {};

  for(let i = 0; i < sentence.length; i++) {
      const letter = sentence[i];

      if(letter === " ") {
        continue;
      }

      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
  }

  return results;
};


// Tests
result1 = letterPositions("hello");
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);