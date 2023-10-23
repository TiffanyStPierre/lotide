const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case 1:
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2:
const result2 = tail(["Hello"]);
assertEqual(result2.length, 0);

// Test Case 3:
const result3 = tail([]);
assertEqual(result3.length, 0);

// Test Case 4:
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
