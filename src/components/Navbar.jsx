import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Changed name to match the branding of your shoes */}
      <div className="navbar-brand">NIKE</div> 
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        {/* Added a special class to style Login like a premium button */}
        <Link to="/login" className="nav-login-btn">Login</Link>
      </div>
    </nav>
  )
}