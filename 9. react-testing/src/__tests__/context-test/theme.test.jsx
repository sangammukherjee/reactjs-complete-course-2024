import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../../context-test/context";
import ThemeContent from "../../context-test/theme";

describe("test toggle content", () => {
  it("render content based on current theme", () => {
    const { getByText } = render(
      <ThemeProvider>
        <ThemeContent />
      </ThemeProvider>
    );

    expect(getByText("Light Theme")).toBeInTheDocument();
  });
});
