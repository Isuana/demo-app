import Factorial from "./factorial";
import { render, cleanup } from "@testing-library/react";

beforeEach(cleanup);
  
it('page present correctly', () => {
  render(<Factorial />);

  // Check if header is with correct text
  const header_text = document.querySelector('.style-head').innerHTML;
  expect(header_text).toBe('Liczenie silni');

  // Check if button has correct value
  const button_text = document.querySelector('.calculation-button').value;
  expect(button_text).toBe('Policz');
});

it('factorial calculates correctly', () => {
  render(<Factorial />);

  document.querySelector('#number').value = 4;
  document.querySelector('.calculation-button').click();

  const result = document.querySelector('#result').innerHTML;
  expect(result).toBe('24');
});

it('factorial shows error on value below one', () => {
  render(<Factorial />);

  document.querySelector('#number').value = 0;
  document.querySelector('.calculation-button').click();

  const result = document.querySelector('#result').innerHTML;
  expect(result).toBe('Wartość nie może być poniżej jeden!');
})

it('factorial shows error when value is not number', () => {
  render(<Factorial />);

  document.querySelector('#number').value = 'w0rd';
  document.querySelector('.calculation-button').click();

  const result = document.querySelector('#result').innerHTML;
  expect(result).toBe('To nie jest liczba!');
})