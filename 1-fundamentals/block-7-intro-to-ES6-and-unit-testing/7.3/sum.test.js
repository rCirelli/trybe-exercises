const { test, expect } = require('@jest/globals');
const exp = require('constants');
const {sum, myRemove} = require('./sum');

describe('Sum function', () => {

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
