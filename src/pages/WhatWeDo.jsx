import { Link } from 'react-router-dom';
import '../styles/WhatWeDo.css';

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <section className="page-hero">
        <div className="container">
          <h1>What We Do</h1>
          <p className="subtitle">Professional bathroom silicone removal and replacement services</p>
        </div>
      </section>

      <section className="services-overview">
        <div className="container">
          <div className="intro-text">
            <h2>Expert Silicone Replacement for a Fresh, Clean Bathroom</h2>
            <p>At Silicone Refresh, we specialize in the complete removal and replacement of bathroom silicone sealant. Our expert team transforms tired, moldy bathrooms into fresh, clean spaces you'll love.</p>
          </div>

          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon">🚿</div>
              <h3>Shower Silicone Replacement</h3>
              <p>Complete removal and replacement of all silicone in your shower enclosure, including:</p>
              <ul>
                <li>Shower tray edges</li>
                <li>Wall-to-wall joints</li>
                <li>Glass door seals</li>
                <li>Corner joints and angles</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🛁</div>
              <h3>Bath Silicone Replacement</h3>
              <p>Professional resealing of your bathtub, covering:</p>
              <ul>
                <li>Bath-to-wall seals</li>
                <li>Bath panel joints</li>
                <li>Tap and fitting seals</li>
                <li>Overflow and drain seals</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🚽</div>
              <h3>Complete Bathroom Refresh</h3>
              <p>Full bathroom silicone service including:</p>
              <ul>
                <li>Sink and basin seals</li>
                <li>Toilet base sealing</li>
                <li>Mirror and fixture seals</li>
                <li>All tile joints and edges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process-detail">
        <div className="container">
          <h2>Our Professional Process</h2>
          <div className="process-grid">
            <div className="process-item">
              <div className="process-icon">1</div>
              <div className="process-content">
                <h3>Assessment & Preparation</h3>
                <p>We carefully assess your bathroom and protect all surfaces before starting work.</p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-icon">2</div>
              <div className="process-content">
                <h3>Complete Removal</h3>
                <p>All old silicone is carefully removed using professional tools, ensuring no damage to tiles or surfaces.</p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-icon">3</div>
              <div className="process-content">
                <h3>Deep Cleaning</h3>
                <p>Surfaces are thoroughly cleaned and treated with anti-fungal solution to prevent future mold growth.</p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-icon">4</div>
              <div className="process-content">
                <h3>Professional Application</h3>
                <p>Premium anti-fungal silicone is expertly applied with perfect, smooth lines.</p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-icon">5</div>
              <div className="process-content">
                <h3>Finishing & Inspection</h3>
                <p>We carefully finish the sealant, clean up completely, and inspect our work to ensure perfection.</p>
              </div>
            </div>

            <div className="process-item">
              <div className="process-icon">6</div>
              <div className="process-content">
                <h3>Cure Time Guidance</h3>
                <p>We provide clear instructions for cure time and care to ensure long-lasting results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="materials">
        <div className="container">
          <h2>Premium Materials We Use</h2>
          <div className="materials-grid">
            <div className="material-card">
              <h3>Anti-Fungal Silicone</h3>
              <p>We exclusively use professional-grade, anti-fungal silicone that actively resists mold and mildew growth.</p>
            </div>
            <div className="material-card">
              <h3>Waterproof & Flexible</h3>
              <p>Our silicone remains flexible and waterproof for years, moving naturally with your bathroom surfaces.</p>
            </div>
            <div className="material-card">
              <h3>Long-Lasting Protection</h3>
              <p>Premium formulations that maintain their appearance and effectiveness much longer than standard silicone.</p>
            </div>
            <div className="material-card">
              <h3>Color Options</h3>
              <p>Available in clear, white, and other colors to perfectly match your bathroom aesthetic.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee">
        <div className="container">
          <div className="guarantee-content">
            <h2>Our Service Guarantee</h2>
            <div className="guarantee-points">
              <div className="guarantee-point">
                <span className="check">✓</span>
                <p>Professional, courteous service</p>
              </div>
              <div className="guarantee-point">
                <span className="check">✓</span>
                <p>Punctual arrival within scheduled time window</p>
              </div>
              <div className="guarantee-point">
                <span className="check">✓</span>
                <p>Complete protection of your bathroom</p>
              </div>
              <div className="guarantee-point">
                <span className="check">✓</span>
                <p>Thorough clean-up after service</p>
              </div>
              <div className="guarantee-point">
                <span className="check">✓</span>
                <p>Satisfaction guarantee on all work</p>
              </div>
              <div className="guarantee-point">
                <span className="check">✓</span>
                <p>Comprehensive warranty coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Refresh Your Bathroom?</h2>
          <p>Get your free, no-obligation quote today</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get Your Free Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDo;
