import React from "react";
import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Finished from ".";

describe("Finished page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Finished />
      </Provider>
    );
  });

  it("should display finished page", () => {
    const finishedComponent = screen.getByTestId("finished-component");
    expect(finishedComponent).toBeInTheDocument();
  });

  it("should display task board", () => {
    const taskBoard = screen.getByTestId("task-board-component");
    expect(taskBoard).toBeInTheDocument();
  });
});
