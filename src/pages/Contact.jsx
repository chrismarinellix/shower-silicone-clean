import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend or form service
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        suburb: '',
        service: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <section className="page-hero">
        <div className="container">
          <h1>Get Your Free Quote</h1>
          <p className="subtitle">Professional bathroom silicone replacement in Sandringham and surrounding areas</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Kartell Caulking</h2>
              <p className="intro">
                Expert silicone removal and replacement for bathrooms. Servicing Sandringham, Victoria and surrounding Melbourne suburbs.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>20 Reno Road<br/>Sandringham VIC 3191</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p><a href="tel:0417035368">0417 035 368</a></p>
                    <p className="info-note">Call or text for fastest response</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p><a href="mailto:info@kartellcaulking.com.au">info@kartellcaulking.com.au</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-content">
                    <h3>Hours</h3>
                    <p>Monday - Friday: 7am - 6pm<br/>
                    Saturday: 8am - 4pm<br/>
                    Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              <div className="service-areas">
                <h3>Service Areas</h3>
                <p>We service Sandringham and surrounding Melbourne suburbs including:</p>
                <ul className="suburbs-list">
                  <li>Sandringham</li>
                  <li>Hampton</li>
                  <li>Brighton</li>
                  <li>Black Rock</li>
                  <li>Beaumaris</li>
                  <li>Cheltenham</li>
                  <li>Mentone</li>
                  <li>Moorabbin</li>
                  <li>Highett</li>
                  <li>And surrounding areas</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Request a Free Quote</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your quote request has been received. We'll be in touch soon!</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="suburb">Suburb *</label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      placeholder="Where are you located?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Required *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="shower-base">Shower Base Silicone</option>
                      <option value="full-shower">Full Shower Enclosure</option>
                      <option value="bath">Bathtub Silicone</option>
                      <option value="full-bathroom">Complete Bathroom</option>
                      <option value="multiple">Multiple Bathrooms</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell us about your bathroom *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Please describe the work needed, current condition of silicone, any specific concerns, etc."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Get Your Free Quote
                  </button>

                  <p className="form-note">
                    * We respect your privacy. Your information will only be used to provide you with a quote.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Kartell Caulking?</h2>
          <div className="reasons-grid">
            <div className="reason">
              <div className="reason-icon">⭐</div>
              <h3>Local & Reliable</h3>
              <p>Based in Sandringham, we're your local silicone experts with a reputation for quality work.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">💰</div>
              <h3>Fair Pricing</h3>
              <p>Transparent quotes with no hidden fees. You'll know the cost upfront.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">🛠️</div>
              <h3>Professional Service</h3>
              <p>Years of experience, premium materials, and attention to detail in every job.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">✓</div>
              <h3>Guaranteed Work</h3>
              <p>We stand behind our work with a comprehensive warranty.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
