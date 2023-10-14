// findSupPrime.js

const { isPrimeNumber } = require('./isPrime');

const findSupPrime = (n) => {
  if (n < 2) return 2;
  let num = n;
  while (true) {
    if (isPrimeNumber(num)) {
      return num;
    }
    num++;
  }
}

module.exports = { findSupPrime };
