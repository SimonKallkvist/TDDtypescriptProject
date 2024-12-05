import { useContext } from "react";
import { CartContext, CartContextType } from "../context/CartContext";

const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Must be used with CartProvider");
  }

  return context;
};

export { useCart };
