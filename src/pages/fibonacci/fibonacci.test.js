import Fibonacci from "./fibonacci";
import { render, cleanup } from "@testing-library/react";

beforeEach(cleanup);

it('page present correctly', () => {
  render(<Fibonacci />);

  // Check if header is with correct text
  const header_text = document.querySelector('.style-head').innerHTML;
  expect(header_text).toBe('Liczenie Fibonacci');

  // Check if button has correct value
  const button_text = document.querySelector('.view-button').value;
  expect(button_text).toBe('Pokaż');
});

it('fibonacci calculates correctly', () => {
  render(<Fibonacci />);

  document.querySelector('#numeral').value = 12;
  document.querySelector('.view-button').click();

  const result = document.querySelector('#result').innerHTML;
  expect(result).toBe('144');
});

it('fibonacci shows error on value below one', () => {
  render(<Fibonacci />);

  document.querySelector('#numeral').value = -5;
  document.querySelector('.view-button').click();

  const result = document.querySelector('#result').innerHTML;
  expect(result).toBe('Wartość nie może być 0 lub poniżej zera!');
})

it('fibonacci shows error when value is not number', () => {
  render(<Fibonacci />);

  document.querySelector('#numeral').value = 'm0tt0';
  document.querySelector('.view-button').click();

  const result = document.querySelector('#result').innerHTML;
  expect(result).toBe('To nie jest liczba!');
})