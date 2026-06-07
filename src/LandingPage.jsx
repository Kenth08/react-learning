import React from 'react'
import './styles/LandingPage.css'
import Navbar from './Navbar'

export default function LandingPage() {
  return (
    <div className="landing">
      <Navbar />
      <main className="hero-container">
        <header className="hero">
          
          <h1>Welcome to Company Name</h1>
          <p>Short pitch — what you do and why it matters.</p>
          <a href="/login" className="cta">Get Started</a>
        </header>
      </main>
      {/* add feature sections, footer, images as needed */}
    </div>
  )
}