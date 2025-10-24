import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Kartell Caulking</h3>
          <p>Professional bathroom silicone removal and replacement services. Servicing Sandringham and surrounding Melbourne suburbs.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/what-we-do">What We Do</Link></li>
            <li><Link to="/why-replace">Why Replace</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/when-to-replace">When to Replace</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/learning">Learning Center</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>20 Reno Road<br/>Sandringham VIC 3191</p>
          <p>Phone: <a href="tel:0417035368">0417 035 368</a></p>
          <p>Email: <a href="mailto:info@kartellcaulking.com.au">info@kartellcaulking.com.au</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Kartell Caulking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
