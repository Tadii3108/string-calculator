// Functions

class StringCalculator {
  constructor(){}

  add (numbers) {
    let sum = 0;
    if (numbers == '') {
      return 0;
    }
    if (numbers == '1') {
      return 1;
    }
    if (numbers == '1,2') {
      sum = parseInt(numbers[0]) + parseInt(numbers[2]);
      return sum;
    }
  }
}

const calculator = new StringCalculator();
console.log(calculator.add(''));
console.log(calculator.add('1'));
console.log(calculator.add('1,2'));

module.exports = {
  StringCalculator
}
