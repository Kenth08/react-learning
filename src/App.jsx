import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";
import CartDrawer from "./components/CartDrawer";
import { CartProvider } from "./context/CartContext";

import redShoe from "./assets/choes-red.png";
import yellowShoe from "./assets/choes-yellow.png";
import greenShoe from "./assets/choes-green.png";
import purpleShoe from "./assets/choes-purple.png";

export default function App() {
  const shoeThemes = [
    { image: redShoe,    bgTheme: "#d90429", circleColor: "rgba(255, 0, 0, 0.15)",     textOpacity: 0.38, shoeName: "Air Jordan 1 Low 'Bred'",         price: "$115", customStyle: {} },
    { image: yellowShoe, bgTheme: "#eab308", circleColor: "rgba(255, 255, 255, 0.2)",  textOpacity: 0.22, shoeName: "Air Jordan 1 Low 'Chicago'",      price: "$115", customStyle: { transform: "scale(1.12) translateY(-15px)" } },
    { image: greenShoe,  bgTheme: "#1b4332", circleColor: "rgba(255, 255, 255, 0.15)", textOpacity: 0.22, shoeName: "Air Jordan 1 Low 'pilipinas'",    price: "$115", customStyle: {} },
    { image: purpleShoe, bgTheme: "#4a148c", circleColor: "rgba(255, 255, 255, 0.12)", textOpacity: 0.22, shoeName: "Air Jordan 1 Low 'Court Purple'", price: "$115", customStyle: { transform: "scale(1.08) translateY(-10px)" } },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const nextShoe = () => setCurrentIndex((prev) => (prev + 1) % shoeThemes.length);
  const prevShoe = () => setCurrentIndex((prev) => (prev - 1 + shoeThemes.length) % shoeThemes.length);

  const current = shoeThemes[currentIndex];

  return (
    <CartProvider>
      <div
        className="global-theme-provider"
        style={{
          "--dynamic-bg": current.bgTheme,
          "--dynamic-circle": current.circleColor,
          "--dynamic-text-opacity": current.textOpacity,
        }}
      >
        <BrowserRouter>
          <CartDrawer />
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  shoeThemes={shoeThemes}
                  currentIndex={currentIndex}
                  nextShoe={nextShoe}
                  prevShoe={prevShoe}
                />
              }
            />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}
