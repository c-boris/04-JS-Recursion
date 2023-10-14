const { computeFactorialIt, computeFactorialRec } = require('./factorials');
const { computePowerIt, computePowerRec } = require('./power');
const { computeSquareRoot } = require('./squareRoot');
const { isPrimeNumber } = require('./isPrime');
const { findSupPrime } = require('./findSupPrime');
// Importez d'autres fonctions si nécessaire

// Testez les fonctions
console.log('Exercice 1.1 - Factorielle (itérative) :', computeFactorialIt(5)); // Exemple : 120
console.log('Exercice 1.2 - Factorielle (récursive) :', computeFactorialRec(5)); // Exemple : 120

console.log('Exercice 2.1 - Puissance (itérative) :', computePowerIt(2, 3)); // Exemple : 8
console.log('Exercice 2.2 - Puissance (récursive) :', computePowerRec(2, 3)); // Exemple : 8

console.log('Exercice 3 - Racine carrée :', computeSquareRoot(16)); // Exemple : 4

console.log('Exercice 4 - Nombre premier :', isPrimeNumber(7)); // Exemple : true

console.log('Exercice 5 - Trouver un nombre premier :', findSupPrime(10)); // Exemple : 11
