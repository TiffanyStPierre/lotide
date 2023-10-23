# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tiffanystp/lotide`

**Require it:**

`const _ = require('@tiffanystp/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Takes in an array and returns the first element.
* `tail(arr)`: Takes in an array and returns a new array with the first element removed.
* `middle(arr)`: Takes in an array and returns the element at the middle index if the array length is odd. If the array length is even it returns the 2 middle elements.
* `assertArraysEqual(arr1, arr2)`: Takes in 2 arrays and checks to see if they are equal. Returns a boolean. Intended for use in testing functions (actual vs expected).
* `assertEqual(actual, expected)`: Takes in actual and expected values and checks to see if they are equal. Returns a boolean. Intended for use in testing functions.
* `countLetters(str)`: Takes in a sentence as a string and returns the number of letters in the string.
* `assertObjectsEqual(obj1, obj2)`: Takes in 2 objects and checks to see if they are equal. Returns a boolean. Intended for use in testing functions (actual vs expected).
* `countOnly(arr, obj)`: Takes in an array and an object. Loops through the array and counts only the items specified with a true value in the object.
* `eqArrays(arr1, arr2)`: Takes in 2 arrays and checks to see if they are equal. Returns a boolean.
* `eqObjects(obj1, obj2)`: Takes in 2 objects and checks to see if they are equal. Returns a boolean.
* `findKey(obj, callback)`: Takes in an object and a callback function. Checks to see if the object has the key identified in the callback function and if it does, returns the value associated with that key. If no key is found then undefined is returned.
* `findKeyByValue(obj, value)`: Takes in an object and a value. Checks to see if that value exists in the object and if it does, returns the key associated to that value. If value is not found it returns undefined.
* `letterPositions(str)`: Takes in a sentence as a string and returns an object containing the count of all letters in the string.
* `map(arr, callback)`: Takes in an array and a callback function. Returns a new array with the results of the callback function called on each element in the original array. 
* `takeUntil(arr, callback)`: Takes in an array and a callback function. Returns a new array with elements from the original array, only up to and not including the index of the element specified in the callback function.
* `without(arr1, arr2)`: Takes in 2 arrays. Returns a new array that is a copy of the original array with items from the second array removed from it.
* `flatten(arr)`: Takes in an array with up to one level of nested arrays and returns a new flattened array with nested arrays removed and all values from the previously nested array included in the new array.