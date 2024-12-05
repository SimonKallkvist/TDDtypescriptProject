import { screen, render } from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe("App tests", () => {
  it("should render the h1 with SNOWMAN text", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent(/snowman/i);
  });
});
