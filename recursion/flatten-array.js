// Steamroller
// Flatten a nested array.You must account for varying levels of nesting.

function steamrollArray (arr) {
  const result = [];
  function recur (array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        recur(array[i]);
      } else {
        result.push(array[i]);
      }
    }
  }
  recur(arr);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
