import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from "react-redux";
import { store } from "../../../../redux/store";
import AddTaskSection from ".";

describe("Add task section", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <AddTaskSection />
      </Provider>
    );
  });

  it("should render add task component", () => {
    const addTaskComponent = screen.getByText("Agregar tarea");
    expect(addTaskComponent).toBeInTheDocument();
  });

  it("should open modal when add button is clicked", () => {
    const addButton = screen.getByText("Agregar tarea");
    fireEvent.click(addButton);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });
});
