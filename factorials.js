// factorials.js

// Méthode itérative
const computeFactorialIt = (n) => {
  if (n < 0) return 0;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Méthode récursive
const computeFactorialRec = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return n * computeFactorialRec(n - 1);
}

module.exports = { computeFactorialIt, computeFactorialRec };
