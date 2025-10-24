import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">🛁</span>
          <span>Kartell Caulking</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/what-we-do" className="nav-link" onClick={closeMenu}>
            What We Do
          </Link>
          <Link to="/why-replace" className="nav-link" onClick={closeMenu}>
            Why Replace
          </Link>
          <Link to="/how-it-works" className="nav-link" onClick={closeMenu}>
            How It Works
          </Link>
          <Link to="/when-to-replace" className="nav-link" onClick={closeMenu}>
            When to Replace
          </Link>
          <Link to="/learning" className="nav-link" onClick={closeMenu}>
            Learning Center
          </Link>
          <Link to="/blog" className="nav-link" onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/careers" className="nav-link" onClick={closeMenu}>
            Careers
          </Link>
          <Link to="/contact" className="nav-link nav-cta" onClick={closeMenu}>
            Get a Quote
          </Link>
        </div>

        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
