import Header from "./Header";
import React from "react";
import { render } from "@testing-library/react";

it("check", () => {
  const { queryByTitle } = render(<Header />);
  const head = queryByTitle("head");
  expect(head).toBeTruthy();
});
