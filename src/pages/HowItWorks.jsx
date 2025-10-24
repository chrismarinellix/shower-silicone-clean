import { Link } from 'react-router-dom';
import '../styles/HowItWorks.css';

function HowItWorks() {
  return (
    <div className="how-it-works">
      <section className="page-hero">
        <div className="container">
          <h1>How It Works</h1>
          <p className="subtitle">Our proven process for perfect silicone replacement</p>
        </div>
      </section>

      <section className="booking-process">
        <div className="container">
          <h2>From Booking to Beautiful Bathroom</h2>

          <div className="process-flow">
            <div className="flow-step">
              <div className="step-icon">📞</div>
              <h3>1. Get Your Quote</h3>
              <p>Contact us through our website or phone. Tell us about your bathroom and what needs doing. We'll provide a transparent, no-obligation quote usually within 24 hours.</p>
              <div className="step-time">Takes 5 minutes</div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <div className="step-icon">📅</div>
              <h3>2. Schedule Your Service</h3>
              <p>Choose a date and time that works for you. We offer flexible scheduling including evenings and weekends. You'll receive a confirmation with all the details.</p>
              <div className="step-time">Book in advance or same-week</div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <div className="step-icon">🚗</div>
              <h3>3. We Arrive on Time</h3>
              <p>Our professional team arrives within your scheduled time window with all equipment and materials. We'll introduce ourselves and review the work to be done.</p>
              <div className="step-time">Punctual arrival guaranteed</div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <div className="step-icon">🛠️</div>
              <h3>4. We Do the Work</h3>
              <p>Our experts complete the entire process while you relax. Most jobs are finished in 2-4 hours depending on the bathroom size.</p>
              <div className="step-time">2-4 hours average</div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <div className="step-icon">✨</div>
              <h3>5. Final Inspection</h3>
              <p>We walk you through the completed work, provide care instructions, and ensure you're completely satisfied before we leave.</p>
              <div className="step-time">Your satisfaction guaranteed</div>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <div className="step-icon">😊</div>
              <h3>6. Enjoy Your Fresh Bathroom</h3>
              <p>After the recommended cure time (usually 24 hours), your bathroom is ready for full use. Enjoy your clean, fresh silicone for years to come!</p>
              <div className="step-time">Long-lasting results</div>
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-process">
        <div className="container">
          <h2>What Happens During the Service</h2>

          <div className="process-details">
            <div className="detail-card">
              <div className="detail-number">1</div>
              <div className="detail-content">
                <h3>Preparation & Protection</h3>
                <p><strong>What we do:</strong></p>
                <ul>
                  <li>Lay protective coverings on floors and surfaces</li>
                  <li>Set up our workspace efficiently</li>
                  <li>Assess the condition of existing silicone</li>
                  <li>Plan the most effective approach</li>
                </ul>
                <p className="detail-note">Your bathroom is completely protected throughout the process.</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-number">2</div>
              <div className="detail-content">
                <h3>Old Silicone Removal</h3>
                <p><strong>What we do:</strong></p>
                <ul>
                  <li>Carefully cut and remove all old silicone</li>
                  <li>Use professional tools designed to avoid surface damage</li>
                  <li>Remove silicone from every corner and gap</li>
                  <li>Ensure absolutely no residue remains</li>
                </ul>
                <p className="detail-note">This is the most critical step - poor removal means poor results.</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-number">3</div>
              <div className="detail-content">
                <h3>Surface Preparation</h3>
                <p><strong>What we do:</strong></p>
                <ul>
                  <li>Deep clean all surfaces where new silicone will be applied</li>
                  <li>Apply anti-fungal treatment to prevent mold</li>
                  <li>Ensure surfaces are completely dry</li>
                  <li>Apply masking tape for perfect lines</li>
                </ul>
                <p className="detail-note">Proper preparation is key to long-lasting adhesion.</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-number">4</div>
              <div className="detail-content">
                <h3>Professional Application</h3>
                <p><strong>What we do:</strong></p>
                <ul>
                  <li>Apply premium anti-fungal silicone in smooth, continuous beads</li>
                  <li>Use expert technique for gap-free application</li>
                  <li>Work methodically through each area</li>
                  <li>Ensure proper adhesion and thickness</li>
                </ul>
                <p className="detail-note">Years of experience ensure perfect application every time.</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-number">5</div>
              <div className="detail-content">
                <h3>Finishing & Smoothing</h3>
                <p><strong>What we do:</strong></p>
                <ul>
                  <li>Tool the silicone to create perfect, smooth profiles</li>
                  <li>Remove masking tape at optimal time</li>
                  <li>Check every joint for perfection</li>
                  <li>Make any necessary touch-ups</li>
                </ul>
                <p className="detail-note">This creates that professional, factory-fresh appearance.</p>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-number">6</div>
              <div className="detail-content">
                <h3>Clean-Up & Inspection</h3>
                <p><strong>What we do:</strong></p>
                <ul>
                  <li>Remove all protective coverings</li>
                  <li>Clean any residual marks or materials</li>
                  <li>Conduct thorough quality inspection</li>
                  <li>Walk you through the completed work</li>
                </ul>
                <p className="detail-note">We leave your bathroom spotless and ready to admire!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-to-expect">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="expectations-grid">
            <div className="expectation">
              <h3>⏰ Timing</h3>
              <p>Most bathroom silicone replacements take 2-4 hours. Larger or more complex bathrooms may take longer. We'll give you an accurate estimate when booking.</p>
            </div>
            <div className="expectation">
              <h3>🏠 Access</h3>
              <p>We need access to water and electricity. You don't need to stay home - many customers use the time to run errands or work.</p>
            </div>
            <div className="expectation">
              <h3>🚿 Bathroom Use</h3>
              <p>The bathroom can be used immediately after we finish, but avoid wetting the new silicone for 24 hours for best results.</p>
            </div>
            <div className="expectation">
              <h3>🧹 Clean-Up</h3>
              <p>We handle all clean-up completely. You won't need to do anything except enjoy your refreshed bathroom!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="after-service">
        <div className="container">
          <h2>After Your Service</h2>
          <div className="after-content">
            <div className="care-instructions">
              <h3>Care Instructions</h3>
              <ul>
                <li>Avoid getting the silicone wet for 24 hours</li>
                <li>Don't touch or disturb the silicone during cure time</li>
                <li>Ensure good ventilation in the bathroom</li>
                <li>After cure time, maintain with regular cleaning</li>
                <li>Use non-abrasive cleaners to preserve anti-fungal properties</li>
              </ul>
            </div>
            <div className="warranty-info">
              <h3>Our Warranty</h3>
              <p>All our work is covered by our comprehensive warranty. If you notice any issues with adhesion, appearance, or performance within the warranty period, we'll make it right - no questions asked.</p>
              <Link to="/contact" className="btn btn-outline">Contact Us About Warranty</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Book your professional silicone replacement service today</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get Your Free Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
