// Functions

class StringCalculator {
  constructor(){}

  add(numbers) {
    var splits = numbers.split(/[\n\,]/); //use regular expression to allow for new lines inbetween numbers
    var add = 0;
    var i = 0;

    //allows a return of 0 for an empty string passed
    if (numbers == '') {
      return 0;
    } else {

    for(i = 0; i < splits.length; i++) {
      add += parseInt(splits[i]); //parseInt helps convert our string to numbers
    }
    return add;
    }
  }
}

const calculator = new StringCalculator();
console.log(calculator.add(''));
console.log(calculator.add('1'));
console.log(calculator.add('1,2'));
console.log(calculator.add('9,70,34,15'));
console.log(calculator.add('5\n10,3'));

module.exports = {
  StringCalculator
}
