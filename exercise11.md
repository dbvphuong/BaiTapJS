```
function isPrime (number) {
  for (let i = 2; i < number; i++) {
    if (number%i === 0) return false;
  }
  return true;
}

function exercise11 (number1) {
  for (let i = 2; i< number1; i++) {
      if (isPrime(i) === true && isPrime (number1 - i) === true) {
        return [i, number1 - i];
      }
  }
}

console.log(exercise11(10))
```
