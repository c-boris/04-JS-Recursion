// squareRoot.js

const computeSquareRoot = (n, p = 2) => {
  if (n < 0 || p <= 0) return 0;
  return Math.pow(n, 1 / p);
}

module.exports = { computeSquareRoot };
