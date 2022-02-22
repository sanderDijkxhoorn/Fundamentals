function CalculateFactorial(number) {
    if (number === 0)
      { return 1; }
    else
      { return number * number - 1 }
}

console.log(CalculateFactorial(4));