import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../context-test/context";
import ThemeContent from "../../context-test/theme";

const ToggleConsumer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button data-testid="toggle-btn" role="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <ThemeContent />
    </div>
  );
};

describe("Test theme provider", () => {
  it("renders children with initial light theme value", () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>This is a children component</div>
      </ThemeProvider>
    );

    expect(getByText("This is a children component")).toBeInTheDocument();
  });

  it("toggles theme between light and dark value on click of button", () => {
    const { getByText, getByRole, getByTestId } = render(
      <ThemeProvider>
        <ToggleConsumer />
      </ThemeProvider>
    );

    // const getToggleButtonByRole = getByRole("button", {
    //   name: /toggle theme/i,
    // });

    const getToggleButtonByRole = getByTestId("toggle-btn");
    expect(getByText("Light Theme")).toBeInTheDocument();

    fireEvent.click(getToggleButtonByRole);

    expect(getByText("Dark Theme")).toBeInTheDocument();

    fireEvent.click(getToggleButtonByRole);

    expect(getByText("Light Theme")).toBeInTheDocument();
  });
});
