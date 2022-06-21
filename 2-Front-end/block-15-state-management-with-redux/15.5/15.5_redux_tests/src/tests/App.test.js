/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionarEl = queryByText('Clique aqui');

    expect(buttonAdicionarEl).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});
