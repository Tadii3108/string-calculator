// Functions

class StringCalculator {
  constructor(){}

  add(numbers) {
    //use regular expression to allow for different delimiters inbetween numbers
    let splits = numbers.split(/[\n\,\;\|\{\}\']/);

    let add = 0;
    let i = 0;

    //allows a return of 0 for an empty string passed
    if (numbers == '') {
      return 0;
    }

    if (numbers > 1000) {
      numbers = 0;
    } else {

      //throws error for negative numbers

      for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] == '-') {
          throw new Error('negatives not allowed');
        }
      }

      for(i = 0; i < splits.length; i++) {
        //parseInt helps convert our string to numbers
        add += parseInt(splits[i]);
      }
    return add;
    }
  }
}

module.exports = { StringCalculator }
