import { screen, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";
import { CartProvider } from "../../context/CartContext";
import { ToastProvider } from "../../context/ToastContext";
import { MemoryRouter } from "react-router-dom";

describe("Header tests", () => {
  const setup = () => {
    render(
      <CartProvider>
        <ToastProvider>
          <MemoryRouter>
            <Header
              headingText={"Sometext"}
              headingType={2}
              headerText={"A heading"}
              btnNavigate={""}
              btnText={"ToHome"}
              btnType={"primary"}
              imgUrl={
                "https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              imgAlt={"Header image"}
            />
          </MemoryRouter>
        </ToastProvider>
      </CartProvider>
    );
  };

  it("Should have a heading", () => {
    setup();
    expect(screen.getByRole("heading", { name: /Sometext/i }));
  });

  it("should have a paragraph", () => {
    setup();
    console.log(screen.debug());
    const paragraph = screen.getByText(/A heading/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("should have an img", () => {
    setup();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
