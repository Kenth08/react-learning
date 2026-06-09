import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Shop from "./pages/shop"; // Matches your lowercase filename 'shop.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Path: Loads your premium sneaker carousel directly */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Authentication Path */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Product Catalogue Path */}
        <Route path="/shop" element={<Shop />} />

        {/* Fallback Catch: Redirects any broken links back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}