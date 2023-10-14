// power.js

// Méthode itérative
const computePowerIt = (n, p) => {
  if (p < 0) return 0;
  let result = 1;
  for (let i = 0; i < p; i++) {
    result *= n;
  }
  return result;
}

// Méthode récursive
const computePowerRec = (n, p) => {
  if (p < 0) return 0;
  if (p === 0) return 1;
  return n * computePowerRec(n, p - 1);
}

module.exports = { computePowerIt, computePowerRec };
