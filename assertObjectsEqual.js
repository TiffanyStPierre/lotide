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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if(!keys2.includes(key)) {
      return false;
    }
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if(Array.isArray(value1)) {
      if (eqArrays(value1, value2) === false){
        return false;
      };
    } else if (value1 !== value2) {
      return false;
    }
  }
  
  return true;

};

// New Function

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

assertObjectsEqual(shirtObject, anotherShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(shirtObject, longSleeveMultiColorShirtObject);