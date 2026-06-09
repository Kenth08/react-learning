import React, { useState } from 'react'
import '../styles/LoginPage.css'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()
    console.log('sign in', { email, password })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    console.log('sign up', { name, email, password })
  }

  return (
    <div className="login-page">
      <Link to="/" className="home-link">
        Back to Home
      </Link>

      <div className={`login-card ${isSignUp ? 'right-active' : ''}`}>
        <div className="form-panel sign-in">
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

          <form onSubmit={handleSignIn} className="form-fields">
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

            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>

          <p className="footer-text">Privacy Policy • Terms &amp; Conditions</p>
        </div>

        <div className="form-panel sign-up">
          <h2 className="login-title signup-title">Create Account</h2>
          <div className="title-divider" />
          <p className="helper-text muted">Use your email for registration</p>

          <div className="social-row signup-social">
            <button type="button" className="social-btn" aria-label="Facebook">f</button>
            <button type="button" className="social-btn" aria-label="LinkedIn">in</button>
            <button type="button" className="social-btn" aria-label="Google">G+</button>
          </div>

          <p className="helper-text">or use your email account</p>

          <form onSubmit={handleSignUp} className="form-fields">
            <div className="field-wrap">
              <label className="field-label">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="field-input"
              />
            </div>

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

            <button type="submit" className="signup-submit">
              Sign Up
            </button>
          </form>
        </div>

        <div className="overlay">
          <div className={`overlay-panel overlay-right ${isSignUp ? 'hidden' : 'visible'}`}>
            <h2 className="welcome-title">Hello, Friend!</h2>
            <div className="welcome-divider" />
            <p className="welcome-text">Fill up personal information and start journey with us.</p>
            <button type="button" className="ghost-btn" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </div>

          <div className={`overlay-panel overlay-left ${isSignUp ? 'visible' : 'hidden'}`}>
            <h2 className="welcome-title">Welcome Back!</h2>
            <div className="welcome-divider" />
            <p className="welcome-text">To keep connected with us please login with your personal info</p>
            <button type="button" className="ghost-btn" onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}