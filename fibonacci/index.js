// Sum all odd Fibonacci Numbers

// Given a positive integer`num`, return the sum of all odd Fibonacci numbers that are less than or equal to`num`.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to`10` are 1, 1, 3, and 5.

function sumFibs(num) {
  if (num === 1) return num;
  let result = 0;
  let firstVal = 0;
  let secondVal = 1;
  let temp = 1;
  function recur() {
    if (secondVal > num) {
      return result;
    }
    else {
      if (temp == 1 || temp % 2 !== 0) result += temp;
      temp = firstVal + secondVal;
      firstVal = secondVal;
      secondVal = temp;
      return recur();
    }
  }
  recur();
  return result;
}

sumFibs(4);