// -_-

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import AboutPage from "./pages/About/AboutPage";
import CartPage from "./pages/Cart/CartPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import CheckoutPage from "./pages/checkout/CheckoutPage";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <ToastProvider>
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </MainLayout>
          </ToastProvider>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
