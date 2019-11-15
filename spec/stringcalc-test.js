// Tests

const {StringCalculator} = require ('../src/stringCalculator.js')

describe('String calculator', () => {
  calculator = new StringCalculator();

  it('should return 0 for empty string passed', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should return the sum of a single number passed', () => {
    expect(calculator.add('1')).toBe(1);
  });

  it('should return the sum of two numbers passed', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  it('should return the sum of any amount of given numbers', () => {
    expect(calculator.add('4,8,12,50')).toEqual(74);
  });

  it('should be able to handle new lines between numbers',() => {
    expect(calculator.add('1\n2,3')).toEqual(6);
  });

  it('should support different delimiters', () => {
    expect(calculator.add('1\n20;2|9')).toEqual(32);
  });
  it('Should return 2', () => {
		expect(calculator.add('2+1001')).toEqual(2);
	});
  it('should support delimiters of any length', () => {
    expect(calculator.add('//[***]\n1***2***3')).toEqual(6);
  });
});
