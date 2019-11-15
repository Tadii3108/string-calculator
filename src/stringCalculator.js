// Functions

class StringCalculator {
  constructor(){}

  add(numbers) {
    var splits = numbers.split(/[\n\,\;\|\{\}\']/); //use regular expression to allow for different delimiters inbetween numbers
    var add = 0;
    var i = 0;

    //allows a return of 0 for an empty string passed
    if (numbers == '') {
      return 0;
    }

    if (numbers > 1000) {
      numbers = 0;
    }

  else {

      //throws error for negative numbers
      for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] == '-') {
          try {
            throw 'negative numbers not allowed';
          } catch (error) {
            return error + numbers[i];
          }
        }
      }

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
console.log(calculator.add('5\n10,3;6|1'));
console.log(calculator.add('-5,10'));
console.log(calculator.add('2+1001'));

module.exports = {
  StringCalculator
}
