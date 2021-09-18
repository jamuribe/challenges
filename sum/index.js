// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  let result = 0;
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      result += i;
    }
  }
  return result;
}

function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);

// Sum of two strings. In the test there are really big numbers remember that

// my solution
function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

// somebody else solution
function sumStrings(a, b) {
  var A = a.split(""), B = b.split(""), C = 0, R = "";

  while (A.length || B.length || C) {
    C = C + (~~A.pop() + ~~B.pop());
    R = (C % 10) + R;
    C = C > 9;
  }

  return R.replace(/^0+/, "");
}

// ~~it's using for convert any value to integer. For example:

// ~~undefined = 0, ~~1.1 = 1, ~~"test" = 0 and even ~~null = 0 etc.

//   It's good hack if you don't want write various conditions such as

//     if (a != null || a != undefined) you just write c = ~~a and if variable is incorrect,
//       it's just return 0 in any case without any exception.

// C = C > 9 probably it's something like carry flag. There are column addition like as

// 4 +
//   4
// 8`

// you get just 8 and addition is over, but if you add

// 5 +
// 5
// 10

// You add 5 + 5 and get 10, but you can write only one digit, the 0. You have to write 1 too.
// But cycle is over because A and B arrays already empty. And result will be 0.
// In this case you need check if you have reminder from adding.

// C = C > 9 just check if number more 9. I.e C = 5 + 5, C = 10, and then C = 10 > 9, C = true.

// In this case a script have to run more one cycle.
// And C now is Boolean, true or false then C = C + (~~A.pop() + ~~B.pop()); considering as C = 1 + (number + number) or C = 0 + (number + number)
// I.e true + 1 == 2 or true + 0 == 1