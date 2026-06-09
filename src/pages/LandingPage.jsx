import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================================================
// 1. ASSET IMPORTS
// ==========================================================================
import redShoe from "../assets/choes-red.png";
import yellowShoe from "../assets/choes-yellow.png";
import greenShoe from "../assets/choes-green.png";
import purpleShoe from "../assets/choes-purple.png";

// ==========================================================================
// 2. STYLES & COMPONENTS
// ==========================================================================
import "../styles/LandingPage.css";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  // ==========================================================================
  // 3. SHOE THEMES CONFIGURATION DATA
  // ==========================================================================
  // Groups assets with their custom background colors, accent circles, and styles.
  const shoeThemes = [
    {
      image: redShoe,
      bgTheme: "#d90429",
      circleColor: "rgba(255, 0, 0, 0.15)",
      customStyle: {},
      textOpacity: 0.38, // Boosts visibility against the red canvas
      shoeName: "Air Jordan 1 Low 'Bred'",
      price: "$115",
    },
    {
      image: yellowShoe,
      bgTheme: "#eab308",
      circleColor: "rgba(255, 255, 255, 0.2)",
      customStyle: { transform: "scale(1.12) translateY(-15px)" },
      textOpacity: 0.22, // Perfect sweet spot for yellow
      shoeName: "Air Jordan 1 Low 'Chicago'",
      price: "$115",
    },
    {
      image: greenShoe,
      bgTheme: "#1b4332",
      circleColor: "rgba(255, 255, 255, 0.15)",
      customStyle: {},
      textOpacity: 0.22, // Perfect sweet spot for green
      shoeName: "Air Jordan 1 Low 'pilipinas'",
      price: "$115",
    },
    {
      image: purpleShoe,
      // CHANGED: Swapped out the indigo-blue for a true, rich Court Purple
      bgTheme: "#4a148c", // Deep, authentic royal violet/purple
      circleColor: "rgba(255, 255, 255, 0.12)",
      customStyle: { transform: "scale(1.08) translateY(-10px)" },
      textOpacity: 0.22, // Keeps text crisp against the dark royal purple background
      shoeName: "Air Jordan 1 Low 'Court Purple'",
      price: "$115",
    },
  ];
  // ==========================================================================
  // 4. STATE MANAGEMENT & CAROUSEL LOGIC
  // ==========================================================================
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle forward to the next shoe theme index (loops back to 0 at the end)
  const nextShoe = () => {
    setCurrentIndex((prev) => (prev + 1) % shoeThemes.length);
  };

  // Cycle backward to the previous shoe theme index (loops to the last item at 0)
  const prevShoe = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + shoeThemes.length) % shoeThemes.length,
    );
  };

  // Quick pointer to extract the active theme matching our index
  const current = shoeThemes[currentIndex];

  // ==========================================================================
  // 5. MAIN RENDER OUTPUT
  // ==========================================================================
  return (
    <div
      className="landing"
      style={{
        // Dynamically binds CSS variables inline to switch the page theme instantly
        "--dynamic-bg": current.bgTheme,
        "--dynamic-circle": current.circleColor,
      }}
    >
      {/* GLOBAL APPLICATION HEADER NAVIGATION */}
      <Navbar />

      {/* MAIN HERO LANDING SECTION WRAPPER */}
      <main className="hero-container">
        <header className="hero">
          {/* ==========================================================================
             LEFT SIDE COLUMN: MARKETING COPYWRITING & TEXT CALLS TO ACTION
             ========================================================================== */}
          <div className="hero-left">
            {/* Wrap the typography section in AnimatePresence for text transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} /* Forces re-animation on arrow click */
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h1 className="hero-title">
                  {current.shoeName}
                  <br />
                  <span>{current.price}</span>
                </h1>
              </motion.div>
            </AnimatePresence>

            <p className="hero-description">
              The Air Jordan 1 Low pairs the classic design of the original MJ
              game shoe with a clean, low-profile silhouette built for everyday
              rotation.
            </p>

            {/* ... rest of your code ... */}

            {/* Main Interactive Button Panel */}
            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="/login" className="btn-primary">
                Get Started
              </a>
            </motion.div>
          </div>

          {/* ==========================================================================
             RIGHT SIDE COLUMN: INTERACTIVE VISUAL CANVAS WITH COMPACT NAV ARROWS
             ========================================================================== */}
          <div className="hero-right">
            {/* Minimalist Left Navigation Chevron Arrow */}
            <button
              className="nav-arrow left"
              onClick={prevShoe}
              aria-label="Previous Shoe"
            >
              &lt;
            </button>

            {/* Layered Branding Backdrop Circles & Bold Typography */}
            <div className="shoe-circle"></div>
            <div className="background-text">NIKE</div>

            {/* Framer Motion Layout Container handles sequential component swapping */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex} // Using active index key tells React to remount & slide on state change
                src={current.image}
                alt="Shoes"
                className="hero-image"
                style={current.customStyle} // Dynamically injects asset size normalization styles
                initial={{ y: 50, rotate: -10, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: -30,
                  transition: { duration: 0.1 }, // Instant duration prevents old shoe ghosting artifact
                }}
                transition={{
                  duration: 0.35, // Smooth ease transition entry timing
                  type: "tween",
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.04, rotate: -2 }} // Micro hover movement response
              />
            </AnimatePresence>

            {/* Minimalist Right Navigation Chevron Arrow */}
            <button
              className="nav-arrow right"
              onClick={nextShoe}
              aria-label="Next Shoe"
            >
              &gt;
            </button>
          </div>
        </header>
      </main>
    </div>
  );
}
