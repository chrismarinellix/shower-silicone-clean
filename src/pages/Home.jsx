import './Home.css';

function Home() {
  return (
    <div className="flyer-container">
      {/* Hero Section with BLURB */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">SHOWER SILICONE<br/>REPLACEMENT</h1>

          <div className="blurb-box">
            <p className="blurb-text">
              Is your shower silicone looking black, moldy, and embarrassing? You've lived with that disgusting, unhealthy bathroom for too long.
            </p>
            <div className="price-highlight">
              For just $500
            </div>
            <p className="blurb-text">
              We completely remove that old, revolting silicone and replace it with fresh, pristine professional-grade sealant that makes your bathroom look absolutely beautiful again. Most jobs are completed in just a few hours.
            </p>
            <div className="value-badge">
              <div className="value-main">That's less than $2 a day over a year</div>
              <div className="value-sub">A tiny price to stop living with a filthy, mold-infested shower</div>
            </div>
          </div>

          <div className="phone-hero">
            <div className="phone-label">Call Now</div>
            <a href="tel:0417035368" className="phone-link">
              <div className="phone-number">0417 035 368</div>
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="content-section">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">💰</span>
            <div className="benefit-title">Affordable Pricing</div>
            <div className="benefit-desc">Transform your bathroom for just $500. Transparent pricing, no hidden fees.</div>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <div className="benefit-title">Quick & Efficient</div>
            <div className="benefit-desc">Most jobs completed in 2-4 hours. Minimal disruption, maximum impact.</div>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon">🛡️</span>
            <div className="benefit-title">Health & Safety</div>
            <div className="benefit-desc">Remove harmful mold. Create a healthier bathroom for your family.</div>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon">👑</span>
            <div className="benefit-title">Premium Materials</div>
            <div className="benefit-desc">Highest quality anti-fungal silicone that resists mold for years.</div>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div className="benefit-title">Satisfaction Guaranteed</div>
            <div className="benefit-desc">We stand behind our work with comprehensive warranty.</div>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon">🏠</span>
            <div className="benefit-title">Local Service</div>
            <div className="benefit-desc">Servicing Sandringham & surrounding Melbourne suburbs.</div>
          </div>
        </div>

        {/* About Section */}
        <div className="about-section">
          <h2 className="section-title">Hi, I'm Chris</h2>
          <p className="about-text">
            I'm a professional silicone specialist with years of experience transforming bathrooms across Sandringham and surrounding suburbs. I take pride in delivering absolutely perfect results every single time.
          </p>
          <p className="about-text">
            I'll completely remove that old, moldy silicone, thoroughly clean and prepare the surfaces, then apply fresh professional-grade anti-fungal silicone with perfect, smooth lines. Your shower will look brand new - and stay that way for years.
          </p>
        </div>

        {/* Service Area */}
        <div className="service-area">
          <h2 className="section-title">Service Area</h2>
          <p className="section-desc">Servicing Sandringham & surrounding Melbourne suburbs (within 15km)</p>
          <div className="suburbs-grid">
            <div className="suburb-badge">Sandringham</div>
            <div className="suburb-badge">Hampton</div>
            <div className="suburb-badge">Brighton</div>
            <div className="suburb-badge">Black Rock</div>
            <div className="suburb-badge">Beaumaris</div>
            <div className="suburb-badge">Cheltenham</div>
            <div className="suburb-badge">Mentone</div>
            <div className="suburb-badge">Moorabbin</div>
            <div className="suburb-badge">Highett</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h3 className="cta-title">Ready to Transform Your Bathroom?</h3>
          <p className="cta-desc">
            Get your shower looking brand new. Call now for a free quote.
          </p>
          <a href="tel:0417035368" className="cta-button">
            Call Now: 0417 035 368
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
