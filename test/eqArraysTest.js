const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["dog", "cat", "monkey"], ["dog", "cat", "monkey"]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], ["dog", "cat", "monkey"]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], [12, 2, 3]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], [1, 12, 3]), false); // => should NOT PASS
assertEqual(eqArrays([1, 2, 3], [2, 2, 13]), false); // => should NOT PASS
assertEqual(eqArrays(["dog", "cat", "monkey"], ["cat", "dog", "monkey"]), false); // => should NOT PASS