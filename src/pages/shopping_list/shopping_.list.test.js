import ShoppingList from "./shopping_list";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

beforeEach(() => {
  cleanup;
  render(<ShoppingList />);
});

test('adding product with correct data', async () => {
  fireEvent.change(screen.getByAltText('nazwa produktu'), {
    target: { value: 'monitor' }
  });

  fireEvent.click(screen.getByText('+'));

  expect(screen.getByText('monitor')).toBeTruthy();
})

test('after click minus product is removed', async () => {
  fireEvent.change(screen.getByAltText('nazwa produktu'), {
    target: { value: 'drzewo' }
  });

  fireEvent.click(screen.getByText('+'));

  expect(screen.getByText('drzewo')).toBeTruthy();

  fireEvent.click(screen.getByText('-'));

  expect(screen.queryByText('drzewo')).toBeFalsy();
})

test('reset button removes all products', async () => {
  fireEvent.change(screen.getByAltText('nazwa produktu'), {
    target: { value: 'papryka' }
  });

  fireEvent.click(screen.getByText('+'));

  expect(screen.getByText('papryka')).toBeTruthy();

  fireEvent.click(screen.getByText('Reset'));

  expect(screen.queryByText('papryka')).toBeFalsy();
})

test('blank field is not added to the list', async () => {
  fireEvent.click(screen.getByText('+'));

  expect(screen.queryByText('-')).toBeFalsy();
})
