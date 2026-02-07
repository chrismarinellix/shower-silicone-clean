import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneOutlined } from '@ant-design/icons';
import '../styles/Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-icon">✨</span>
          <span>Shower Silicone</span>
        </Link>

        {/* Mobile Toggle */}
        <div 
          className={`nav-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/what-we-do" className="nav-link">Services</Link>
          <Link to="/why-replace" className="nav-link">Why Us</Link>
          <Link to="/how-it-works" className="nav-link">Process</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          
          <Link 
            to="/contact" 
            className="nav-link nav-cta"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <PhoneOutlined /> Call 0417 035 368
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
