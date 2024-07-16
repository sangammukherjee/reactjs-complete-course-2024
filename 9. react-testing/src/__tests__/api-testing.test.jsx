import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ApiCallTest from "../components/api-testing";

describe("Api testing file", () => {
  it("check list of users fetching", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: "Sangam Mukherjee",
            },
            {
              id: 2,
              name: "John Doe",
            },
          ]),
      })
    );

    render(<ApiCallTest />);

    expect(screen.getByText("Loading data...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Sangam Mukherjee")).toBeInTheDocument();
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    expect(screen.queryByText("Loading data...")).not.toBeInTheDocument();
  });
});
