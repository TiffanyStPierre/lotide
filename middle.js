const middle = function(arr) {
  const middleElements = [];

  if (arr.length < 3) {
    return middleElements;
  }else if (arr.length > 2 && arr.length % 2 === 0) {
    middleElements.push(arr[Math.floor(arr.length / 2)- 1]);
    middleElements.push(arr[Math.floor(arr.length / 2)]);
    return middleElements;
  }else if (arr.length > 2 && arr.length % 2 !== 0) {
    middleElements.push(arr[Math.floor(arr.length / 2)]);
    return middleElements;
  }
}

module.exports = middle;

