// Drop it
// Given the array arr, iterate through and remove each element starting from the first element(the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements (arr, func) {
  const newArr = [...arr];
  while (newArr.length) {
    const current = newArr.shift();
    if (func(current) === true) {
      return [current, ...newArr];
    }
  }
  return newArr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });
