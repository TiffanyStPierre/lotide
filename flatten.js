const flatten = function(arr) {
  const newArray = [];

  if (arr.length === 0) {
    return newArray;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArray.push(arr[i][j]);
      }
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

module.exports = flatten;