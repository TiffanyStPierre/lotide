const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// TESTS 

const test1 = middle([2, 6, 8, 10, 13, 24]);
assertArraysEqual(test1, [8, 10]);

const test2 = middle([2, 5, 8, 12, 24]);
assertArraysEqual(test2, [8]);

const test3 = middle([]);
assertArraysEqual(test3, []);

const test4 = middle([2]);
assertArraysEqual(test4, []);

const test5 = middle([13, 24]);
assertArraysEqual(test5, []);

const test6 = middle([2, 16, 65, 120, 89, 6, 3, 900, 12, 6, 8, 10, 13, 24]);
assertArraysEqual(test6, [3, 900]);

const test7 = middle([2, 16, 65, 120, 89, 6, 3, 900, 16, 19, 87, 12, 6, 8, 10, 13, 24]);
assertArraysEqual(test7, [16]);