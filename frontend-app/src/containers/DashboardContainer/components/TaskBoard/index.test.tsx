import React from "react";
import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from "react-redux";
import TaskBoard from ".";
import { store } from "../../../../redux/store";
import { tasksMocked } from "../../../../utilities/mocks/taskMocks";

describe("Task board", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TaskBoard tasks={tasksMocked} />
      </Provider>
    );
  });

  it("should render task board component", () => {
    const taskBoardComponent = screen.getByTestId("task-board-component");
    expect(taskBoardComponent).toBeInTheDocument();
  });

  it("should renders TaskCard components for each task", () => {
    const taskCards = screen.getAllByTestId("task-card-component");
    expect(taskCards.length).toBe(tasksMocked.length);
  });
});
