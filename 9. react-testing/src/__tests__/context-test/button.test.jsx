import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ThemeToggleButton from "../../context-test/button";
import { ThemeProvider } from "../../context-test/context";

describe("test button component", () => {
  it("render toggles button", () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeToggleButton />
      </ThemeProvider>
    );
    const getToggleBtn = getByTestId("toggle-btn");

    expect(getToggleBtn).toBeInTheDocument();
  });
});
