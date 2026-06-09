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
  // Checks viewport sizing to downscale structural animation steps safely on mobile devices
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  // ==========================================================================
  // 3. SHOE THEMES CONFIGURATION DATA
  // ==========================================================================
  const shoeThemes = [
    {
      image: redShoe,
      bgTheme: "#d90429",
      circleColor: "rgba(255, 0, 0, 0.15)",
      customStyle: {},
      textOpacity: 0.38,
      shoeName: "Air Jordan 1 Low 'Bred'",
      price: "$115",
    },
    {
      image: yellowShoe,
      bgTheme: "#eab308",
      circleColor: "rgba(255, 255, 255, 0.2)",
      customStyle: { transform: "scale(1.12) translateY(-15px)" },
      textOpacity: 0.22,
      shoeName: "Air Jordan 1 Low 'Chicago'",
      price: "$115",
    },
    {
      image: greenShoe,
      bgTheme: "#1b4332",
      circleColor: "rgba(255, 255, 255, 0.15)",
      customStyle: {},
      textOpacity: 0.22,
      shoeName: "Air Jordan 1 Low 'pilipinas'",
      price: "$115",
    },
    {
      image: purpleShoe,
      bgTheme: "#4a148c", 
      circleColor: "rgba(255, 255, 255, 0.12)",
      customStyle: { transform: "scale(1.08) translateY(-10px)" },
      textOpacity: 0.22,
      shoeName: "Air Jordan 1 Low 'Court Purple'",
      price: "$115",
    },
  ];

  // ==========================================================================
  // 4. STATE MANAGEMENT & CAROUSEL LOGIC
  // ==========================================================================
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextShoe = () => {
    setCurrentIndex((prev) => (prev + 1) % shoeThemes.length);
  };

  const prevShoe = () => {
    setCurrentIndex((prev) => (prev - 1 + shoeThemes.length) % shoeThemes.length);
  };

  const current = shoeThemes[currentIndex];

  // ==========================================================================
  // 5. MAIN RENDER OUTPUT
  // ==========================================================================
  return (
    <div
      className="landing"
      style={{
        "--dynamic-bg": current.bgTheme,
        "--dynamic-circle": current.circleColor,
        "--dynamic-text-opacity": current.textOpacity,
      }}
    >
      {/* GLOBAL APPLICATION HEADER NAVIGATION */}
      <Navbar />

      {/* MAIN HERO LANDING SECTION WRAPPER */}
      <main className="hero-container">
        
        {/* HERO CONTENT FRAME */}
        <header className="hero">
          
          {/* ==========================================================================
             LEFT SIDE COLUMN: TEXT PANEL STYLINGS
             ========================================================================== */}
          <div className="hero-left">
            
            {/* Smooth Heading Text Switcher */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} 
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
              <a href="/shop" className="btn-secondary">
    Shop Now
  </a>
            </motion.div>
          </div>

          {/* ==========================================================================
             RIGHT SIDE COLUMN: INTERACTIVE VISUAL CANVAS WITH NAVIGATION CHEVRONS
             ========================================================================== */}
          <div className="hero-right">
            
            {/* Minimalist Left Navigation Chevron Arrow with Magnetic Hover */}
            <motion.button
              className="nav-arrow left"
              onClick={prevShoe}
              aria-label="Previous Shoe"
              whileHover={{ scale: 1.25, x: -5 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              &lt;
            </motion.button>

            {/* Animated Background Circle Overlay */}
            <motion.div 
              className="shoe-circle"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />

            {/* Static Backdrop Text Layer */}
            <div className="background-text">
              NIKE
            </div>

            {/* Core Sneaker Artwork Frame */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex} 
                src={current.image}
                alt="Shoes"
                className="hero-image"
                style={current.customStyle} 
                initial={{ y: isMobile ? 25 : 50, rotate: isMobile ? -4 : -10, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: -30,
                  transition: { duration: 0.1 }, 
                }}
                transition={{
                  duration: 0.35, 
                  type: "tween",
                  ease: "easeOut",
                }}
                whileHover={isMobile ? {} : { scale: 1.04, rotate: -2 }} 
              />
            </AnimatePresence>

            {/* Minimalist Right Navigation Chevron Arrow with Magnetic Hover */}
            <motion.button
              className="nav-arrow right"
              onClick={nextShoe}
              aria-label="Next Shoe"
              whileHover={{ scale: 1.25, x: 5 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              &gt;
            </motion.button>
          </div>

        </header>
      </main>
    </div>
  );
}