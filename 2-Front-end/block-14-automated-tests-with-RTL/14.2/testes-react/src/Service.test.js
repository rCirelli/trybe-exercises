// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

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
  expect(result).toBe(5);
});