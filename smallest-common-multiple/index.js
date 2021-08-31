// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let array = [];

  for (let i = min; i <= max; i++) {
    array.push(i)
  }

  let lowestCommon = (currentValue) => n % currentValue === 0;
  let n = max * (max - 1);
  let common = false;
  common = array.every(lowestCommon)
  while (common === false) {
    n++
    common = array.every(lowestCommon)
  }
  return n;
}

smallestCommons([1, 5]);