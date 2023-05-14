import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import { store } from "../../redux/store";
import AppContainer from ".";

describe("Dashboard container", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  });

  it("should render app container", () => {
    const appContainer = screen.getByTestId("app-container");
    expect(appContainer).toBeInTheDocument();
  });
});
