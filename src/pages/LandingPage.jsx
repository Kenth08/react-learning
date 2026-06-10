import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/LandingPage.css";
import Navbar from "../components/Navbar";
import Shop from "./shop"; 

export default function LandingPage({ shoeThemes, currentIndex, nextShoe, prevShoe }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const current = shoeThemes[currentIndex];

  return (
    <div className="landing-page-wrapper">
      <Navbar />

      <div className="hero-container">
        <header className="hero">
          
          {/* LEFT SIDE PANEL */}
          <div className="hero-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h1 className="hero-title">
                  {current.shoeName} <br />
                  <span>{current.price}</span>
                </h1>
              </motion.div>
            </AnimatePresence>

            <p className="hero-description">
              The Air Jordan 1 Low pairs the classic design of the original MJ
              game shoe with a clean, low-profile silhouette built for everyday rotation.
            </p>

            <motion.div className="hero-cta-group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <a href="/login" className="btn-primary">Get Started</a>
              <a href="#shop-section" className="btn-secondary">Shop Now</a>
            </motion.div>
          </div>

          {/* RIGHT SIDE VISUAL CANVAS */}
          <div className="hero-right">
            <motion.button className="nav-arrow left" onClick={prevShoe} whileHover={{ scale: 1.25, x: -5 }} whileTap={{ scale: 0.92 }}>&lt;</motion.button>
            <motion.div className="shoe-circle" animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
            <div className="background-text">NIKE</div>
            
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentIndex} 
                src={current.image} 
                alt="Shoes" 
                className="hero-image" 
                style={current.customStyle} 
                initial={{ y: isMobile ? 25 : 50, rotate: isMobile ? -4 : -10, opacity: 0, scale: 0.95 }} 
                animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95, y: -30, transition: { duration: 0.1 } }} 
                transition={{ duration: 0.35, type: "tween", ease: "easeOut" }} 
                whileHover={isMobile ? {} : { scale: 1.04, rotate: -2 }} 
              />
            </AnimatePresence>
            
            <motion.button className="nav-arrow right" onClick={nextShoe} whileHover={{ scale: 1.25, x: 5 }} whileTap={{ scale: 0.92 }}>&gt;</motion.button>
          </div>

        </header>
      </div>

      <Shop />
    </div>
  );
}