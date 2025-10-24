import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Bathroom with Professional Silicone Replacement
          </h1>
          <p className="hero-subtitle">
            Say goodbye to moldy, discolored silicone. Say hello to a fresh, clean shower that sparkles like new.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Get Your Free Quote</Link>
            <Link to="/how-it-works" className="btn btn-secondary">See How It Works</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual">
            <div className="before-after">
              <div className="before-side">
                <span className="label">Before</span>
              </div>
              <div className="after-side">
                <span className="label">After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Silicone Refresh?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Professional Results</h3>
              <p>Expert technicians with years of experience ensure perfect, long-lasting results every time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Quick & Efficient</h3>
              <p>Most jobs completed in 2-4 hours. Minimal disruption to your day, maximum impact on your bathroom.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Health & Safety</h3>
              <p>Remove harmful mold and mildew. Create a healthier, cleaner bathroom environment for your family.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Premium Materials</h3>
              <p>We use only the highest quality, anti-fungal silicone that resists mold and lasts for years.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Transform your bathroom for a fraction of the cost of renovation. Transparent pricing, no hidden fees.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Satisfaction Guaranteed</h3>
              <p>We stand behind our work with a comprehensive warranty. Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-preview">
        <div className="container">
          <h2>Simple 3-Step Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Book Your Appointment</h3>
              <p>Get a free quote and schedule a convenient time for your service.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Do the Work</h3>
              <p>Our experts remove old silicone, clean, and apply fresh professional-grade sealant.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Enjoy Your Fresh Bathroom</h3>
              <p>Admire your like-new bathroom with clean, pristine silicone that lasts.</p>
            </div>
          </div>
          <div className="process-cta">
            <Link to="/how-it-works" className="btn btn-outline">Learn More About Our Process</Link>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"I couldn't believe the difference! My shower looks brand new. The team was professional, quick, and the results are amazing. Highly recommend!"</p>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>London</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"After trying to clean the moldy silicone myself for months, I finally called Silicone Refresh. Best decision ever! It looks perfect and I love my bathroom again."</p>
              <div className="testimonial-author">
                <strong>Emma T.</strong>
                <span>Manchester</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Professional service from start to finish. They were on time, respectful of my home, and the quality of work exceeded my expectations. Worth every penny!"</p>
              <div className="testimonial-author">
                <strong>Lisa R.</strong>
                <span>Birmingham</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Bathroom?</h2>
          <p>Get your free quote today and discover how affordable a fresh, clean bathroom can be.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get Your Free Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
