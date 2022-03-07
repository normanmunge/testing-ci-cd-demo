import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("render h1 element", () => {
  render(<App />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

test("list contains 5 test tools", () => {
  render(<App />);
  const listElement = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass("test-tools");
  expect(listItems.length).toEqual(5);
});
