import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Exercício 1: teste da função getRandomNumber', () => {
  render(<App />);
  const service = require('./logic/service');
  service.getRandomNumber = jest.fn(() => 10);

  const result = service.getRandomNumber();
  expect(service.getRandomNumber).toHaveBeenCalledTimes(1);
  expect(result).toBe(10);
});