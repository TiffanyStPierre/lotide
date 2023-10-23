const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual(["dog", "cat", "monkey"], ["dog", "cat", "monkey"]); // => should PASS
assertArraysEqual([1, 2, 3], ["1", "2", "3"]); // => should NOT PASS
assertArraysEqual([1, 2, 3], ["dog", "cat", "monkey"]); // => should NOT PASS
assertArraysEqual([1, 2, 3], [12, 2, 3]); // => should NOT PASS
assertArraysEqual([1, 2, 3], [1, 12, 3]); // => should NOT PASS
assertArraysEqual([1, 2, 3], [2, 2, 13]); // => should NOT PASS
assertArraysEqual(["dog", "cat", "monkey"], ["cat", "dog", "monkey"]); // => should NOT PASS