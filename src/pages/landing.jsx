import React, { useState, useEffect } from 'react';
import './landing.css'; 
import images from '../assets/image.png'

const Landing = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon"></div>
            <span className="logo-text">Visaslots</span>
          </div>
          
          {!isMobile ? (
            <div className="nav-links">
              <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollToSection('services'); }}>OUR SERVICES</a>
              <a href="#start" onClick={(e) => { e.preventDefault(); handleScrollToSection('start'); }}>HOW TO START</a>
              <a href="#reviews" onClick={(e) => { e.preventDefault(); handleScrollToSection('reviews'); }}>REVIEWS</a>
              <a href="#documents" onClick={(e) => { e.preventDefault(); handleScrollToSection('documents'); }}>DOCUMENTS</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); handleScrollToSection('faq'); }}>FAQ</a>
            </div>
          ) : (
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          )}
          
          <button className="cta-button">
            TRY VISABOT
            <span className="arrow">↗</span>
          </button>
        </div>
        
        {isMobile && mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#services" onClick={(e) => { e.preventDefault(); handleScrollToSection('services'); }}>OUR SERVICES</a>
            <a href="#start" onClick={(e) => { e.preventDefault(); handleScrollToSection('start'); }}>HOW TO START</a>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); handleScrollToSection('reviews'); }}>REVIEWS</a>
            <a href="#documents" onClick={(e) => { e.preventDefault(); handleScrollToSection('documents'); }}>DOCUMENTS</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); handleScrollToSection('faq'); }}>FAQ</a>
          </div>
        )}
      </nav>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-image">
            <div className="hero-img-placeholder">
              <img src={images} alt="Hero" className="hero-img" />
            </div>
            
            <div className="notification-popup">
              <div className="popup-header">
                <div className="popup-logo"></div>
                <span className="popup-title">Visaslots</span>
                <span className="verified-badge">✓</span>
                <span className="popup-time">Now</span>
              </div>
              <div className="popup-content">
                <p><strong>London - Netherlands - Tourism:</strong></p>
                <p>Earliest Available Slot: 01-09-2023.</p>
                <p>Link to visa center site</p>
              </div>
            </div>
            
            <div className="visa-approvals">
              <span className="visa-logo">VISA</span>
              <div className="approvals-text">
                <span className="approvals-number">5000+</span>
                <span className="approvals-label">Approvals</span>
              </div>
            </div>
          </div>

          <div className="hero-content">
            <div className="ai-powered-badge">
              <span className="star-icon">✨</span>
              <span>AI-Powered • Instant Results</span>
            </div>
            
            <h1 className="hero-title">
              Book a Schengen Visa<br />
              Appointment in <span className="highlight">1 week</span>
            </h1>
            
            <p className="hero-subtitle">
              Your Trusted Visa Bot for Instant Notifications and Auto-Booking.
            </p>
            
            <div className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <select className="form-input">
                    <option value="">Going to</option>
                    <option value="estonia">Estonia</option>
                    <option value="ireland">Ireland</option>
                    <option value="netherlands">Netherlands</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-select">
                    <option>Visa type</option>
                    <option value="tourist">Tourist</option>
                    <option value="business">Business</option>
                    <option value="student">Student</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <select className="form-input">
                    <option value="">Select an application</option>
                    <option value="schengen">Schengen Visa</option>
                    <option value="student">Student Visa</option>
                    <option value="work">Work Visa</option>
                    <option value="tourist">Tourist Visa</option>
                  </select>
                </div>

                <div className="form-group">
                  <select className="form-input">
                    <option value="">Select application city</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                  </select>
                </div>
              </div>
              <button className="find-appointments-btn">Find Appointments</button>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-content">
            <h2 className="services-title">Our Services</h2>
            
            <div className="testimonial">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                "It is really hard to find a slot on VFS global. With VisaBot I 
                have found the slot in 2 days. Thank you so much for such a 
                good job!!!"
              </p>
            </div>
            
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <span className="review-time">2 days ago</span>
              <p className="review-text">
                It is really hard to find a slot on VFS global. With VisaBot I 
                have found the slot in 2 days. Thank you so much for such a 
                good job
              </p>
              <span className="reviewer-name">Christy</span>
            </div>
            
            <div className="best-market-badge">
              <div className="quote-mark">"</div>
              <span>Best on the market</span>
            </div>
          </div>
          
          <div className="pricing-cards">
            <div className="pricing-card notifications-card">
              <h3 className="card-title">Notifications</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/monthly</span>
              </div>
              <p className="card-subtitle">Best for families and travelers on a budget</p>
              
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">💰</span>
                  <span>3-4 times cheaper than Schengen Visa agencies</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📅</span>
                  <span>You can book an appointment on the next week</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">👥</span>
                  <span>1 subscription for all travellers</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">⏱️</span>
                  <span>1 week - average time for booking an appointment</span>
                </div>
              </div>
              
              <button className="card-button notifications-button">
                GET APPOINTMENT ALERTS
                <span className="arrow">↗</span>
              </button>
            </div>
            
            <div className="pricing-card auto-booking-card">
              <h3 className="card-title">Auto Booking</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">100</span>
                <span className="period">/per applicant</span>
              </div>
              <p className="card-subtitle">Best for families and travelers on a budget</p>
              
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">⚠️</span>
                  <span>Suitable if you can't respond right away to notifications</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌙</span>
                  <span>We book a slot for you, even when you sleep</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💭</span>
                  <span>You won't have to think about booking, we'll do everything for you</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">⭐</span>
                  <span>Can Book a slot even for the next day</span>
                </div>
              </div>
              
              <button className="card-button auto-booking-button">
                TRY AUTO BOOKING
                <span className="arrow">↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-section">
        <div className="mobile-container">
          <div className="mobile-content">
            <h2 className="mobile-title">Get your appointment</h2>
            <p className="mobile-subtitle">
              Get instant email or push notifications when new appointments 
              open up or get a slot auto - booked for you
            </p>
            <button className="mobile-cta-button">
              TRY VISABOT
              <span className="arrow">↗</span>
            </button>
            
            <div className="stats-grid">
              <div className="stat-card" style={{backgroundColor:'white'}}>
                <div className="stat-number" style={{color:'green'}}>1,500+</div>
                <div className="stat-label" style={{color:'green'}}>Routes</div>
              </div>
              <div className="stat-card" style={{backgroundColor:'white'}}>
                <div className="stat-number" style={{color:'green'}}>50+</div>
                <div className="stat-label" style={{color:'green'}}>Cities</div>
              </div>
              <div className="stat-card" style={{backgroundColor:'white'}}>
                <div className="stat-number" style={{color:'green'}}>50+</div>
                <div className="stat-label" style={{color:'green'}}>Premium Airlines</div>
              </div>
              <div className="stat-card" style={{backgroundColor:'white'}}>
                <div className="stat-number" style={{color:'green'}}>12k+</div>
                <div className="stat-label" style={{color:'green'}}>Happy Customer</div>
              </div>
            </div>
          </div>
          
          <div className="mobile-phone">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <span className="carrier">T-Mobile</span>
                  <span className="time">09:05</span>
                  <div className="battery-wifi">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                
                <div className="notifications-list">
                  <div className="notification">
                    <div className="notif-logo"></div>
                    <div className="notif-content">
                      <div className="notif-header">
                        <span className="notif-title">Visaslots</span>
                        <span className="verified">✓</span>
                        <span className="notif-time">Now</span>
                      </div>
                      <p className="notif-text">London - Netherlands - Tourism.</p>
                      <p className="notif-text">Earliest Available Slot: 01-09-2023.</p>
                      <p className="notif-text">Link to visa center site</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="phone-decorations">
              <div className="decoration smiley">😊</div>
              <div className="decoration luggage">🧳</div>
              <div className="decoration checkmark">✓</div>
              <div className="decoration bell">🔔</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer" style={{marginTop: '200px'}}>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon"></div>
                <span className="logo-text" style={{color:'white'}}>Visaslots</span>
              </div>
              <p className="footer-description">
                Travelo is Southeast Asia's travel and lifestyle app, we 
                provide you with access to discover and purchase different 
                type of travel needs.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#visaslots">Visaslots</a>
                <a href="#faq">FAQ</a>
                <a href="#blog">Blog</a>
              </div>
              
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About us</a>
                <a href="#contact">Contact us</a>
                <a href="#agencies">For Visa Agencies</a>
              </div>
              
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms and Conditions</a>
                <a href="#cookies">Cookie Settings</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="social-links">
              <a href="#facebook">f</a>
              <a href="#instagram">@</a>
              <a href="#twitter">t</a>
            </div>
            <div className="copyright">
              © 2025 Visaslots
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;