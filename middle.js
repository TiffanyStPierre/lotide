// TEST/ASSERTION FUNCTIONS

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

// NEW FUNCTION

const middle = function(arr) {
  const middleElements = [];

  if (arr.length < 3) {
    return middleElements;
  }else if (arr.length > 2 && arr.length % 2 === 0) {
    middleElements.push(arr[Math.floor(arr.length / 2)- 1]);
    middleElements.push(arr[Math.floor(arr.length / 2)]);
    return middleElements;
  }else if (arr.length > 2 && arr.length % 1 === 0) {
    middleElements.push(arr[Math.floor(arr.length / 2)]);
    return middleElements;
  }
}

// TESTS 

const test1 = middle([2, 6, 8, 10, 13, 24]);
console.log(assertArraysEqual(test1, [8, 10]));

const test2 = middle([2, 5, 8, 12, 24]);
console.log(assertArraysEqual(test2, [8]));

const test3 = middle([]);
console.log(assertArraysEqual(test3, []));

const test4 = middle([2]);
console.log(assertArraysEqual(test4, []));

const test5 = middle([13, 24]);
console.log(assertArraysEqual(test5, []));

const test6 = middle([2, 16, 65, 120, 89, 6, 3, 900, 12, 6, 8, 10, 13, 24]);
console.log(assertArraysEqual(test6, [3, 900]));

const test7 = middle([2, 16, 65, 120, 89, 6, 3, 900, 16, 19, 87, 12, 6, 8, 10, 13, 24]);
console.log(assertArraysEqual(test7, [16]));