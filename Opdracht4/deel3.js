function CalculateFactorial(number) {
  var countnr = 1;
  var math = number;
  while (number > countnr) {
    math = math * countnr;
    countnr++;
  }
  return math;
}

console.log(CalculateFactorial(8));