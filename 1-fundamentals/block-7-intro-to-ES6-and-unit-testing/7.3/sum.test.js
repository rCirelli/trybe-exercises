const { expect, test } = require('@jest/globals');
const {sum, myRemove, myFizzBuzz} = require('./sum');

describe('sum function', () => {

  test('The sum of 4 and 5 is 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });  
  test('The sum of 0 and 0 is 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  test('Throw error when string is parameter', () => {
    expect( () => { sum(4, '5') }).toThrow();
  });
  test('Error message is "parameters must be numbers"', () => {
    expect( () => { sum(4, '5') }).toThrow('parameters must be numbers');
  });
});

describe('myRemove function', () => {

  test('myRemove([1, 2, 3, 4], 3) returns expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('myRemove([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('myRemove([1, 2, 3, 4], 5) returns expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('myFizzBuzz function', () => {

  test('Number divisible by both 3 and 5 returns "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Number divisible by 3 only, returns "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });  
  test('Number divisible by 5 only, returns "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('Number not divisible by 3 nor 5 returns the number itself', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('Return false if parameter is not a number', () => {
    expect(myFizzBuzz('5')).toBeFalsy();
  });
});
