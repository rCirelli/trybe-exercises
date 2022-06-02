// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

test('Exercício 1: teste da função getRandomNumber', () => {
  const service = require('./logic/service');
  // service.getRandomNumber = jest.fn(() => 10);
  jest.mock('./logic/service');
  service.getRandomNumber.mockImplementation(() => 10);

  const result = service.getRandomNumber();
  expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
  expect(result).toBe(10);
});

test('Exercício 2: altera função getRandomNumber', () => {
  const service = require('./logic/service');
  jest.mock('./logic/service');
  service.getRandomNumber.mockImplementationOnce((a, b) => a / b);

  const result = service.getRandomNumber(10, 2);
  expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
  expect(service.getRandomNumber).toHaveBeenCalledWith(10, 2);
  expect(result).toBe(5);
});

test('Exercício 3', () => {
  const service = require('./logic/service');
  const mockMultiply = jest.spyOn(service, 'getRandomNumber');
  mockMultiply.mockImplementation((a, b, c) => a * b * c);

  const result = mockMultiply(10, 2, 5);
  expect(mockMultiply).toHaveBeenCalledTimes(1);
  expect(result).toBe(100);

  mockMultiply.mockRestore();

  mockMultiply.mockImplementation((a) => a*2);
  const result2 = mockMultiply(100);
  expect(mockMultiply).toHaveBeenCalledTimes(1);
  expect(mockMultiply).toHaveBeenCalledWith(100);
  expect(result2).toBe(200);

  mockMultiply.mockRestore();
});

test('Exercício 4', () => {
  const service = require('./logic/service');
  const mockUpperCase = jest.spyOn(service, 'upperCase')
    .mockImplementation((string) => string.toLowerCase());

  const result = mockUpperCase('TEST');
  expect(result).toBe('test');
  expect(service.upperCase).toBeCalledWith('TEST');
  expect(service.upperCase).toHaveBeenCalledTimes(1);

  const mockFirstLetter = jest.spyOn(service, 'firstLetter')
  .mockImplementation((string) => string[string.length - 1]);

  const result2 = mockFirstLetter('test');
  expect(result2).toBe('t');
  expect(service.firstLetter).toBeCalledWith('test');
  expect(service.firstLetter).toHaveBeenCalledTimes(1);

  const mockConcatStr = jest.spyOn(service, 'concatStr')
  .mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

  const result3 = mockConcatStr('ab', 'cd', 'ef');
  expect(result3).toBe('abcdef');
  expect(service.concatStr).toBeCalledWith('ab', 'cd', 'ef');
  expect(service.concatStr).toHaveBeenCalledTimes(1);

  service.upperCase.mockRestore();

  const result4 = service.upperCase('test');
  expect(result4).toBe('TEST');
  expect(service.upperCase).toBeCalledWith('test');
  expect(service.upperCase).toHaveBeenCalledTimes(1);
});
