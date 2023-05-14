import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import DashboardContainer from ".";
import { store } from "../../redux/store";

describe("Dashboard container", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DashboardContainer />
        </MemoryRouter>
      </Provider>
    );
  });

  it("should render dashboard container", () => {
    const dashboardContainer = screen.getByTestId("dashboard-container");
    expect(dashboardContainer).toBeInTheDocument();
  });

  it("should render sidebar", () => {
    const sidebarItem = screen.getByText("Finished");
    expect(sidebarItem).toBeInTheDocument();
  });

  it("should render board header", () => {
    const boardHeader = screen.getByText("Hi invitado");
    expect(boardHeader).toBeInTheDocument();
  });
});
