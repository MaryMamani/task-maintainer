import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { Home } from ".";

describe("Home", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it("should return home page", () => {
    const welcomeText = screen.getByText(
      "Bienvenido a la aplicación Task Maintainer"
    );
    expect(welcomeText).toBeInTheDocument();
  });

  it("should render the button", () => {
    const button = screen.getByText("Ir al dashboard");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/dashboard/open");
  });
});
