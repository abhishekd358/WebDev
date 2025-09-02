function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(15)); // false




// method 2
function isPrime2(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime2(29)); // true
console.log(isPrime2(100)); // false


