import CreateNewList from "./CreateNewList";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";

describe("test suite", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  beforeEach(() => {
    useDispatchMock.mockClear();
  });
  it("does something", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();
  });
}); //! this shit here beacause of the useDispatch! doesnt work without it

it("Search render check", () => {
  const { queryByTitle } = render(<CreateNewList />);
  const input = queryByTitle("tested-search");
  expect(input).toBeTruthy();
}); //! second fcking test

describe("changeOfInput", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<CreateNewList />);
    // input: HTMLElement;
    // const input: HTMLElement = queryByTitle("tested-search"); //! fckin typescript cannot read val of HTMLElement!!!
    const input = document.getElementById("testId") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "testValue" } });
    expect(input.value).toBe("testValue");
  });
}); //! third fcking test
