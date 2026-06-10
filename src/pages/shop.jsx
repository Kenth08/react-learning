import React, { useEffect } from 'react'; // ADDED: useEffect hook
import Navbar from '../components/Navbar';
import '../styles/shop.css';

// Import your shoe images so they can be displayed on the cards
import redShoe from "../assets/choes-red.png";
import yellowShoe from "../assets/choes-yellow.png";
import greenShoe from "../assets/choes-green.png";
import purpleShoe from "../assets/choes-purple.png";

export default function Shop() {
  
  // ==========================================================================
  // GLOBAL RESET OVERRIDE: Forces the browser window to allow scrolling
  // ==========================================================================
  useEffect(() => {
    // 1. Calculate the exact width of the scrollbar dynamically
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // 2. Inject that pixel value into a CSS variable so the fixed navbar can read it
    document.documentElement.style.setProperty('--removed-body-scrollbar-space', `${scrollbarWidth}px`);

    // 3. Unfreeze the screen views
    document.documentElement.style.overflow = "unset";
    document.body.style.overflow = "unset";

    // Clean-up function: Reset everything smoothly if they head back home
    return () => {
      document.documentElement.style.removeProperty('--removed-body-scrollbar-space');
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };
  }, []);
  // Array holding all 4 sneaker models
  const products = [
    { id: 1, name: "Air Jordan 1 Low 'Bred'", price: "$115", image: redShoe, glow: "rgba(217, 4, 41, 0.15)" },
    { id: 2, name: "Air Jordan 1 Low 'Chicago'", price: "$115", image: yellowShoe, glow: "rgba(234, 179, 8, 0.15)" },
    { id: 3, name: "Air Jordan 1 Low 'Pilipinas'", price: "$115", image: greenShoe, glow: "rgba(27, 67, 50, 0.2)" },
    { id: 4, name: "Air Jordan 1 Low 'Court Purple'", price: "$115", image: purpleShoe, glow: "rgba(74, 20, 140, 0.2)" },
  ];

  return (
    <div className="shop-page">
      {/* Global Navigation Header */}
      <Navbar />

      <main className="shop-content">
        {/* Visible, high-contrast typography headers */}
        <div className="shop-header">
          <h1 className="shop-title">The Complete Rotation</h1>
          <p className="shop-subtitle">Pick your colorway. Make your statement.</p>
        </div>

        {/* The responsive layout grid containing all cards */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              
              {/* Image background wrapper with matching subtle ambient color tint */}
              <div className="product-image-wrapper" style={{ '--card-glow': product.glow }}>
                <img src={product.image} alt={product.name} className="product-image" />
              </div>

              {/* Product metadata details */}
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="btn-buy">View Details</button>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
}