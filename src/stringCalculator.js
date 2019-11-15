// Functions

class StringCalculator {
  constructor(){}

  add(numbers) {
    var splits = numbers.split(',');
    var add = 0;
    var i = 0;

    //
    if (numbers == '') {
      return 0;
    } else {

    for(i = 0; i < splits.length; i++) {
      add += parseInt(splits[i]);
    }
    return add;
    }
  }
}

const calculator = new StringCalculator();
console.log(calculator.add(''));
console.log(calculator.add('1'));
console.log(calculator.add('1,2'));
console.log(calculator.add('9,70,34,15'))

module.exports = {
  StringCalculator
}
