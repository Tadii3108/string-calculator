// Tests
const {StringCalculator} = require ('../src/stringCalculator.js')

const calculator = new StringCalculator;

describe('String calculator', () => {

  it('should return 0 for empty string passed', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should return the sum of a single number passed', () => {
    expect(calculator.add('1')).toBe(1);
  });

  it('should return the sum of two numbers passed', () => {
    expect(calculator.add('1,2')).toBe(3);
  });
});
