import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Dropdown from "./dropdown";
import React from "react";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

let container = null;
let optionsList = [];
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

it("should render a greeting", () => {
  act(() => {
    render(<Dropdown optionsList={optionsList} />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);

  act(() => {
    render(<Dropdown optionsList={optionsList} name="Jenny" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);

  act(() => {
    render(<Dropdown optionsList={optionsList} name="Margaret" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
});
