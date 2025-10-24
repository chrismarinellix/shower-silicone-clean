import { Link } from 'react-router-dom';
import '../styles/WhyReplace.css';

function WhyReplace() {
  return (
    <div className="why-replace">
      <section className="page-hero">
        <div className="container">
          <h1>Why Replace Your Bathroom Silicone?</h1>
          <p className="subtitle">Understanding the importance of fresh, clean silicone sealant</p>
        </div>
      </section>

      <section className="health-safety">
        <div className="container">
          <h2>Health & Safety Concerns</h2>
          <div className="concern-grid">
            <div className="concern-card">
              <div className="concern-icon">🦠</div>
              <h3>Mold & Mildew Growth</h3>
              <p>Old silicone becomes a breeding ground for black mold and mildew, which can cause respiratory problems, allergies, and other health issues, especially for children and those with asthma.</p>
            </div>
            <div className="concern-card">
              <div className="concern-icon">💧</div>
              <h3>Water Damage Prevention</h3>
              <p>Degraded silicone allows water to seep behind tiles and into walls, leading to expensive structural damage, rot, and even more serious mold problems in hidden areas.</p>
            </div>
            <div className="concern-card">
              <div className="concern-icon">🌫️</div>
              <h3>Poor Air Quality</h3>
              <p>Moldy silicone releases spores into the air, reducing bathroom air quality and potentially affecting the air throughout your home.</p>
            </div>
            <div className="concern-card">
              <div className="concern-icon">🧼</div>
              <h3>Hygiene Standards</h3>
              <p>Discolored, moldy silicone is impossible to clean properly and harbors bacteria, compromising the cleanliness of your bathroom.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aesthetic-benefits">
        <div className="container">
          <h2>Aesthetic & Value Benefits</h2>
          <div className="benefits-content">
            <div className="benefit-item">
              <h3>✨ Instant Visual Transformation</h3>
              <p>Fresh white silicone makes your entire bathroom look cleaner, newer, and more appealing. It's amazing how much difference clean grout lines can make!</p>
            </div>
            <div className="benefit-item">
              <h3>🏠 Increase Home Value</h3>
              <p>Clean, well-maintained bathrooms significantly boost property value. It's one of the most cost-effective upgrades you can make before selling.</p>
            </div>
            <div className="benefit-item">
              <h3>💰 Affordable Alternative to Renovation</h3>
              <p>Get that 'like new' bathroom feel for a fraction of the cost of re-tiling or full bathroom renovation. Maximum impact, minimal investment.</p>
            </div>
            <div className="benefit-item">
              <h3>😊 Pride in Your Space</h3>
              <p>Enjoy using your bathroom again without feeling embarrassed. Create a space you're proud to show guests.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="silicone-lifecycle">
        <div className="container">
          <h2>Understanding Silicone Degradation</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker new">New</div>
              <div className="timeline-content">
                <h3>0-1 Years: Like New</h3>
                <p>Fresh, white, and pristine. Fully waterproof with excellent adhesion.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker ok">OK</div>
              <div className="timeline-content">
                <h3>1-3 Years: Starting to Show Age</h3>
                <p>May show slight discoloration. Still functional but beginning to degrade.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker concern">Concern</div>
              <div className="timeline-content">
                <h3>3-5 Years: Time to Consider Replacement</h3>
                <p>Visible yellowing or black spots. Mold starting to appear. Water seal compromised in places.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker urgent">Urgent</div>
              <div className="timeline-content">
                <h3>5+ Years: Replacement Overdue</h3>
                <p>Significant mold growth, peeling, or gaps. Water damage likely occurring. Health hazard present.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-not-diy">
        <div className="container">
          <h2>Why Professional Replacement Matters</h2>
          <div className="comparison">
            <div className="comparison-col diy">
              <h3>DIY Approach</h3>
              <ul className="comparison-list">
                <li>❌ Often incomplete old silicone removal</li>
                <li>❌ No professional surface preparation</li>
                <li>❌ Difficult to achieve smooth, professional finish</li>
                <li>❌ Risk of damaging tiles or surfaces</li>
                <li>❌ Lower quality materials often used</li>
                <li>❌ Time-consuming and frustrating</li>
                <li>❌ Results rarely last as long</li>
              </ul>
            </div>
            <div className="comparison-col professional">
              <h3>Professional Service</h3>
              <ul className="comparison-list">
                <li>✓ Complete, thorough old silicone removal</li>
                <li>✓ Expert surface preparation and treatment</li>
                <li>✓ Perfect, smooth professional finish</li>
                <li>✓ Zero risk of surface damage</li>
                <li>✓ Premium anti-fungal materials</li>
                <li>✓ Quick service, minimal disruption</li>
                <li>✓ Long-lasting results with warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cost-perspective">
        <div className="container">
          <h2>A Smart Investment</h2>
          <div className="cost-comparison">
            <div className="cost-item">
              <h3>Professional Silicone Replacement</h3>
              <p className="price">£150 - £300</p>
              <p className="description">Complete shower or bath service with premium materials</p>
            </div>
            <div className="vs">vs</div>
            <div className="cost-item">
              <h3>Bathroom Renovation</h3>
              <p className="price">£3,000 - £8,000+</p>
              <p className="description">Full re-tiling and renovation work</p>
            </div>
          </div>
          <p className="cost-note">Get 90% of the visual impact for less than 5% of the cost!</p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready for a Fresh, Clean Bathroom?</h2>
          <p>Discover how affordable professional silicone replacement can be</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Get Your Free Quote</Link>
            <Link to="/when-to-replace" className="btn btn-outline">Check If You Need Replacement</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyReplace;
