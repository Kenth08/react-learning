import React from 'react'
import "./index.css"
export default function LandingPage() {
  return (
    <div className="landing">
      <header className="hero">
        <h1>Welcome to Company Name</h1>
        <p>Short pitch — what you do and why it matters.</p>
        <a href="/login" className="cta">Get Started</a>
      </header>
      {/* add feature sections, footer, images as needed */}
    </div>
  )
}