import Passenger from './passenger';
import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import React from "react";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a Passenger", () => {
  act(() => {
    render(<Passenger />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);

  act(() => {
    render(<Passenger />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);

  act(() => {
    render(<Passenger />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
});
