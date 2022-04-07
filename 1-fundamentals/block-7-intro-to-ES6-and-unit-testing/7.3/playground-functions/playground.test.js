const { test, expect } = require('@jest/globals');
const { number } = require('yargs');
const {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
} = require('./challenges');

const {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
} = require('./challenges2')

describe('encode / decode', () => {

  test('1 - typeof enconde and decode equals "function"', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('2 - Encode: test if vowels are converted to numbers', () => {
    expect(encode('a')).toContainEqual('1');
    expect(encode('e')).toContainEqual('2');
    expect(encode('i')).toContainEqual('3');
    expect(encode('o')).toContainEqual('4');
    expect(encode('u')).toContainEqual('5');
  });
  test('3 - Decode: numbers (1-5) are converted back to vowels', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  })
  test('4 - Decode / Encode: Consonants and number must no be converted', () => {
    expect(encode('bcdfghjklmnpqwxyz')).not.toContainEqual('1');
    expect(encode('bcdfghjklmnpqwxyz')).not.toContainEqual('2');
    expect(encode('bcdfghjklmnpqwxyz')).not.toContainEqual('3');
    expect(encode('bcdfghjklmnpqwxyz')).not.toContainEqual('4');
    expect(encode('bcdfghjklmnpqwxyz')).not.toContainEqual('5');
    expect(decode('67890')).not.toContainEqual('a');
    expect(decode('67890')).not.toContainEqual('e');
    expect(decode('67890')).not.toContainEqual('i');
    expect(decode('67890')).not.toContainEqual('o');
    expect(decode('67890')).not.toContainEqual('u');
  });
  test('5 - Decode / Encode: returned strings must be same lenght as parameter', () => {
    const testEncode = 'aeiou';
    const testDecode = '12345';
    expect(encode(testEncode)).toHaveLength(testEncode.length);
    expect(decode(testDecode)).toHaveLength(testDecode.length);
  });
});
