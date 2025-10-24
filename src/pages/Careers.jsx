import { Link } from 'react-router-dom';
import '../styles/Careers.css';

function Careers() {
  return (
    <div className="careers">
      <section className="page-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p className="subtitle">Flexible casual work with training provided</p>
        </div>
      </section>

      <section className="opportunity">
        <div className="container">
          <h2>Casual Bathroom Silicone Technician</h2>
          <div className="job-highlight">
            <p className="highlight-text">
              Looking for handy individuals who want flexible work with great pay.
              No experience necessary - we provide full training!
            </p>
          </div>

          <div className="job-details">
            <div className="detail-section">
              <h3>The Role</h3>
              <p>As a Silicone Technician, you'll visit customers' homes to remove old bathroom silicone and apply fresh, professional-quality sealant. You'll be the face of our company, providing friendly service while delivering quality workmanship.</p>
            </div>

            <div className="detail-section">
              <h3>What You'll Do</h3>
              <ul className="duties-list">
                <li>Visit customer homes to assess and quote jobs</li>
                <li>Remove old, moldy silicone from showers and baths</li>
                <li>Prepare and clean surfaces properly</li>
                <li>Apply new professional-grade silicone sealant</li>
                <li>Ensure customer satisfaction and clean work area</li>
                <li>Maintain equipment and vehicle</li>
                <li>Communicate professionally with customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="requirements">
        <div className="container">
          <h2>What We're Looking For</h2>
          <div className="requirements-grid">
            <div className="requirement-card essential">
              <h3>Essential Requirements</h3>
              <ul>
                <li>✓ Valid Australian driver's license</li>
                <li>✓ Own reliable vehicle</li>
                <li>✓ Live in the local area</li>
                <li>✓ Physically able to kneel, bend, and work in bathrooms</li>
                <li>✓ Good communication skills</li>
                <li>✓ Professional, friendly attitude</li>
                <li>✓ Reliable and punctual</li>
              </ul>
            </div>

            <div className="requirement-card desirable">
              <h3>Desirable (But Not Essential)</h3>
              <ul>
                <li>⭐ Handy with basic tools</li>
                <li>⭐ Previous trades or maintenance experience</li>
                <li>⭐ Customer service experience</li>
                <li>⭐ Attention to detail</li>
                <li>⭐ Problem-solving skills</li>
              </ul>
            </div>
          </div>

          <div className="no-experience">
            <h3>No Experience? No Problem!</h3>
            <p>We provide comprehensive on-the-job training. If you're handy, willing to learn, and have a good attitude, we'll teach you everything you need to know to become a skilled silicone technician.</p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Casual Rate</h3>
              <p><strong>$30-40 per hour</strong> (including 25% casual loading)</p>
              <p className="benefit-note">Rate depends on experience and skill level</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📅</div>
              <h3>Flexible Hours</h3>
              <p>Choose the hours that work for you. Perfect for students, parents, or anyone wanting flexible work arrangements.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Full Training Provided</h3>
              <p>Learn a valuable trade skill with hands-on training. No previous experience required.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🚗</div>
              <h3>Local Work</h3>
              <p>Jobs in your local area mean less travel time and more earning time.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Quick Job Turnaround</h3>
              <p>Most jobs take 2-4 hours, allowing you to complete multiple jobs per day.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Growth Potential</h3>
              <p>Opportunity to increase your rate as you develop your skills and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="employment-type">
        <div className="container">
          <h2>Employment Type: Casual</h2>
          <div className="employment-info">
            <p>This is a <strong>casual position</strong>, which means:</p>
            <div className="employment-details">
              <div className="employment-point">
                <span className="icon">✓</span>
                <div>
                  <h4>Flexibility</h4>
                  <p>Work when it suits you. No obligation to accept every job.</p>
                </div>
              </div>
              <div className="employment-point">
                <span className="icon">✓</span>
                <div>
                  <h4>Higher Hourly Rate</h4>
                  <p>25% casual loading means higher pay than permanent rates.</p>
                </div>
              </div>
              <div className="employment-point">
                <span className="icon">✓</span>
                <div>
                  <h4>No Minimum Hours</h4>
                  <p>Work as much or as little as you want.</p>
                </div>
              </div>
              <div className="employment-point">
                <span className="icon">ℹ️</span>
                <div>
                  <h4>Superannuation</h4>
                  <p>Super contributions paid if you earn over $450 per month (as per Australian law).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="typical-day">
        <div className="container">
          <h2>A Typical Day</h2>
          <div className="day-timeline">
            <div className="timeline-item">
              <div className="time">9:00 AM</div>
              <div className="activity">
                <h4>Receive Job Details</h4>
                <p>Get your day's schedule with customer addresses and job details</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="time">10:00 AM</div>
              <div className="activity">
                <h4>First Job</h4>
                <p>Arrive at customer's home, assess the bathroom, complete the silicone replacement (2-3 hours)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="time">1:00 PM</div>
              <div className="activity">
                <h4>Lunch Break</h4>
                <p>Take a break at your convenience</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="time">2:00 PM</div>
              <div className="activity">
                <h4>Second Job</h4>
                <p>Another bathroom transformation (2-3 hours)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="time">5:00 PM</div>
              <div className="activity">
                <h4>Day Complete</h4>
                <p>Job done! You've earned $240-320 for the day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-to-apply">
        <div className="container">
          <h2>How to Apply</h2>
          <div className="application-steps">
            <div className="app-step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Submit Your Interest</h3>
                <p>Fill out the application form below with your details and a brief introduction about yourself.</p>
              </div>
            </div>
            <div className="app-step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Phone Interview</h3>
                <p>We'll call you for a quick chat to learn more about you and answer any questions.</p>
              </div>
            </div>
            <div className="app-step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Trial Day</h3>
                <p>Shadow an experienced technician for a day to see if the role suits you (paid).</p>
              </div>
            </div>
            <div className="app-step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Training & Start</h3>
                <p>Complete training and start taking on your own jobs!</p>
              </div>
            </div>
          </div>

          <div className="application-form">
            <h3>Express Your Interest</h3>
            <form className="careers-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="suburb">Suburb *</label>
                  <input type="text" id="suburb" name="suburb" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="license">Do you have a valid driver's license and reliable vehicle? *</label>
                <select id="license" name="license" required>
                  <option value="">Select...</option>
                  <option value="yes-both">Yes, I have both</option>
                  <option value="license-only">I have a license but no vehicle</option>
                  <option value="neither">No</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="availability">What's your preferred availability? *</label>
                <textarea id="availability" name="availability" rows="3" placeholder="E.g., Weekdays only, weekends preferred, flexible, etc." required></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="experience">Tell us about any relevant experience (or why you'd be great even without experience) *</label>
                <textarea id="experience" name="experience" rows="5" placeholder="Share any handyman work, trades experience, customer service roles, or just tell us why you're interested and what makes you a great candidate!" required></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="questions">Any questions for us?</label>
                <textarea id="questions" name="questions" rows="3" placeholder="Optional - ask us anything!"></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">Submit Application</button>
            </form>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Do I really not need experience?</h4>
              <p>Correct! While experience is helpful, we genuinely provide full training. If you're handy, willing to learn, and can follow instructions, you'll do great.</p>
            </div>
            <div className="faq-item">
              <h4>How many hours per week?</h4>
              <p>Entirely up to you. Some technicians work 1-2 days a week, others work full-time. It's casual, so you choose.</p>
            </div>
            <div className="faq-item">
              <h4>Do I need my own tools?</h4>
              <p>We provide all specialized tools and materials. You just need your vehicle and a willing attitude!</p>
            </div>
            <div className="faq-item">
              <h4>What about insurance?</h4>
              <p>We carry comprehensive insurance that covers you while working.</p>
            </div>
            <div className="faq-item">
              <h4>How do I get paid?</h4>
              <p>Weekly pay via direct deposit. Simple and reliable.</p>
            </div>
            <div className="faq-item">
              <h4>Can I do this alongside other work?</h4>
              <p>Absolutely! The casual nature of the role makes it perfect for supplementing other income.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Join the Team?</h2>
          <p>Apply now and start your journey with us</p>
          <a href="#application-form" className="btn btn-primary btn-large">Apply Now</a>
        </div>
      </section>
    </div>
  );
}

export default Careers;
