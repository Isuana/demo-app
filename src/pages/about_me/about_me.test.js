import {render, cleanup} from "@testing-library/react";
import AboutMe from "./about_me";

afterEach(cleanup);

it('contains both lists', () => {
  render(<AboutMe />);

  const left_list = document.querySelector('.left-list');
  const right_list = document.querySelector('.right-list');

  expect(left_list).toBeTruthy();
  expect(right_list).toBeTruthy();
});