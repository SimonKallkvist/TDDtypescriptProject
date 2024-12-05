// -_-

import { createContext, useState, ReactNode } from "react";
import { IProduct } from "../Models/IProduct";
import { v4 as uuidv4 } from "uuid";

export interface CartContextType {
  cart: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  clearCart: () => void;
  totalCost: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct) => {
    setCart((prevCart) => [...prevCart, { ...product, cartItemId: uuidv4() }]);
  };
  const removeProduct = (product: IProduct) => {
    setCart((prevCart) =>
      prevCart.filter((i) => i.cartItemId !== product.cartItemId)
    );
  };

  const clearCart = () => setCart([]);

  const totalCost = Math.floor(
    cart.reduce((sum, product) => sum + product.price, 0)
  );

  const values: CartContextType = {
    cart,
    addProduct,
    removeProduct,
    clearCart,
    totalCost,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
