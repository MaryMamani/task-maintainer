import React from "react";
import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import InProgress from ".";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("In progress page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <InProgress />
      </Provider>
    );
  });

  it("should display in progress page", () => {
    const inProgressComponent = screen.getByTestId("in-progress-component");
    expect(inProgressComponent).toBeInTheDocument();
  });

  it("should display task board", () => {
    const taskBoard = screen.getByTestId("task-board-component");
    expect(taskBoard).toBeInTheDocument();
  });
});
