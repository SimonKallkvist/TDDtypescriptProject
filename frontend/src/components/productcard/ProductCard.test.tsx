import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductCard from "./ProductCard";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { CartContext, CartContextType } from "../../context/CartContext";
import { ToastProvider } from "../../context/ToastContext";
import { IProduct } from "../../Models/IProduct";

describe("ProductCard tests", () => {
  const mockProduct: IProduct = {
    id: 1,
    title: "Christmas Tree LED Lights",
    price: 29.99,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661764559771-8f78623b352c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hyaXNtYXN8ZW58MHx8MHx8fDA%3D",
    quantityLeft: 70,
    description:
      "Warm LED string lights perfect for decorating your Christmas tree.",
    userRating: 4.5,
    numOfReviews: 8,
    reviews: [
      {
        userName: "jollyElf12",
        review: "Beautiful lights! Bright and warm.",
      },
      { userName: "holidayFan", review: "Perfect for my tree." },
      { userName: "noelLover", review: "The ambiance is amazing." },
      { userName: "candyCane24", review: "Loved the lights!" },
      { userName: "winterMagic", review: "Super easy to use." },
      { userName: "hollyJolly", review: "Good value." },
      {
        userName: "rudolph93",
        review: "Nice, but shorter than expected.",
      },
      {
        userName: "joy2World",
        review: "Great product, highly recommend!",
      },
    ],
  };

  const mockAddToCart = vi.fn();
  const mockCartContextValue: CartContextType = {
    cart: [],
    addProduct: mockAddToCart,
    removeProduct: vi.fn(),
    clearCart: vi.fn(),
    totalCost: 0,
  };

  const setup = () =>
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <ToastProvider>
          <MemoryRouter>
            <ProductCard product={mockProduct} />
          </MemoryRouter>
        </ToastProvider>
      </CartContext.Provider>
    );

  it("should render a heading", () => {
    setup();
    expect(
      screen.getByRole("heading", {
        level: 3,
      })
    ).toBeInTheDocument();
  });

  it("should render an img", () => {
    setup();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should render a button", () => {
    setup();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call addProduct with the product when button is clicked", async () => {
    setup();

    const button = screen.getByRole("button", { name: /add to cart/i });
    await userEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
