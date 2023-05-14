import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Provider } from "react-redux";
import { store } from "../../../../redux/store";
import BoardHeader from ".";
import { MemoryRouter, useLocation } from "react-router-dom";

describe("Board header", () => {
  const LocationDisplay = () => {
    const location = useLocation();

    return <div data-testid="location-display">{location.pathname}</div>;
  };
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <BoardHeader />
          <LocationDisplay />
        </MemoryRouter>
      </Provider>
    );
  });

  it("should render board header component", () => {
    const boardHeaderComponent = screen.getByText("Hi invitado");
    expect(boardHeaderComponent).toBeInTheDocument();
  });

  it("should render the add button", () => {
    const button = screen.getByText("Agregar tarea");
    expect(button).toBeInTheDocument();
  });

  it("should render the add button", () => {
    const exitBtn = screen.getByTestId("exit-button");
    expect(exitBtn).toBeInTheDocument();
  });

  it("should navigate to home page on exit button click", () => {
    const currentLocation = screen.getByTestId("location-display");
    const exitBtn = screen.getByTestId("exit-button");

    expect(currentLocation.textContent).toBe("/dashboard");

    fireEvent.click(exitBtn);

    expect(currentLocation.textContent).toBe("/home");
  });
});
