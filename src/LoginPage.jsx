import React, { useState } from 'react'
import './LoginPage.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    console.log({ email, password })
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <div className="brand-mark">
            <span className="brand-company">Company</span>
            <span className="brand-name">Name</span>
          </div>

          <h2 className="login-title">Sign in to Account</h2>
          <div className="title-divider" />

          <div className="social-row">
            <button type="button" className="social-btn" aria-label="Facebook">f</button>
            <button type="button" className="social-btn" aria-label="LinkedIn">in</button>
            <button type="button" className="social-btn" aria-label="Google">G+</button>
          </div>

          <p className="helper-text">or use your email account</p>

          <div className="field-wrap">
            <label className="field-label">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field-input"
            />
          </div>

          <div className="field-wrap">
            <label className="field-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="field-input"
            />
          </div>

          <div className="row-between">
            <label className="check-row">
              <input type="checkbox" className="check-input" />
              <span>Remember me</span>
            </label>
            <span className="forgot-link">Forgot Password?</span>
          </div>

          <button type="button" className="signin-btn" onClick={handleSignIn}>
            Sign In
          </button>

          <p className="footer-text">Privacy Policy • Terms &amp; Conditions</p>
        </div>

        <div className="login-right">
          <h2 className="welcome-title">Hello, Friend!</h2>
          <div className="welcome-divider" />
          <p className="welcome-text">Fill up personal information and start journey with us.</p>
          <button type="button" className="signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
  )
}
