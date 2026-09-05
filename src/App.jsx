import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" style={{ boxShadow: scrolled ? 'var(--shadow-md)' : 'none', padding: scrolled ? '0' : '10px 0' }}>
      <div className="container">
        <div className="logo">
          <span style={{ fontSize: '2rem' }}>🏥</span> CityCare
        </div>
        <nav className="nav-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#process">Consultation Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#process" className="btn-primary">Book Appointment</a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container">
      <div className="hero-content">
        <h1>Advanced Healthcare in Hyderabad</h1>
        <p>Providing world-class medical services with compassion and excellence. Your health is our priority at CityCare Multi-Specialty Hospital.</p>
        <div className="hero-buttons">
          <a href="#process" className="btn-primary">Book Appointment</a>
          <a href="#services" className="btn-secondary">Our Services</a>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="container">
    <h2 className="section-title">About Us</h2>
    <p className="section-subtitle">A legacy of excellence in healthcare, committed to your well-being.</p>
    
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">🏨</div>
        <h3>Modern Facility</h3>
        <p>State-of-the-art infrastructure equipped with the latest medical technology.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">👨‍⚕️</div>
        <h3>Expert Team</h3>
        <p>A dedicated team of highly qualified and experienced medical professionals.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">❤️</div>
        <h3>Compassionate Care</h3>
        <p>Patient-centric approach ensuring comfort and personalized treatment.</p>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <h2 className="section-title">Our Specialties</h2>
      <p className="section-subtitle">Comprehensive care across various medical disciplines.</p>
      
      <div className="services-grid">
        {[
          { icon: '🫀', title: 'Cardiology', desc: 'Advanced heart care and surgeries.' },
          { icon: '🧠', title: 'Neurology', desc: 'Expert treatment for brain and spine.' },
          { icon: '🦴', title: 'Orthopedics', desc: 'Bone and joint care, joint replacements.' },
          { icon: '👶', title: 'Pediatrics', desc: 'Specialized healthcare for infants and children.' },
          { icon: '👁️', title: 'Ophthalmology', desc: 'Comprehensive eye care and vision correction.' },
          { icon: '🦷', title: 'Dental Care', desc: 'Advanced dentistry and oral surgery.' }
        ].map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Doctors = () => (
  <section id="doctors" className="container">
    <h2 className="section-title">Our Top Specialists</h2>
    <p className="section-subtitle">Meet the experts dedicated to providing you with the best care.</p>
    
    <div className="doctors-grid">
      <div className="doctor-card">
        <img src="/images/doctor-male.png" alt="Dr. Rajesh Sharma" className="doctor-image" />
        <div className="doctor-info">
          <h3>Dr. Rajesh Sharma</h3>
          <p className="doctor-specialty">Chief of Cardiology</p>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>15+ years of experience in complex heart surgeries.</p>
        </div>
      </div>
      <div className="doctor-card">
        <img src="/images/doctor-female.png" alt="Dr. Priya Reddy" className="doctor-image" />
        <div className="doctor-info">
          <h3>Dr. Priya Reddy</h3>
          <p className="doctor-specialty">Senior Neurologist</p>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>Expert in treating neurological disorders and spine conditions.</p>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="process">
    <div className="container">
      <h2 className="section-title">Consultation Process</h2>
      <p className="section-subtitle">A seamless journey to your recovery in 4 easy steps.</p>
      
      <div className="process-steps">
        <div className="process-step">
          <div className="step-number">1</div>
          <h3>Book Appointment</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Call us or book online.</p>
        </div>
        <div className="process-step">
          <div className="step-number">2</div>
          <h3>Consultation</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Meet our expert specialists.</p>
        </div>
        <div className="process-step">
          <div className="step-number">3</div>
          <h3>Diagnosis</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Advanced lab & imaging tests.</p>
        </div>
        <div className="process-step">
          <div className="step-number">4</div>
          <h3>Treatment</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Personalized care plan.</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="container">
    <h2 className="section-title">Contact Us</h2>
    <p className="section-subtitle">We are here to answer your questions and provide support.</p>
    
    <div className="contact-section">
      <div className="contact-info-card">
        <h3>Get In Touch</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Reach out to us for any medical emergencies or general inquiries.</p>
        
        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <div>
            <h4>Location</h4>
            <p>123 Health Avenue, Banjara Hills, Hyderabad, TS 500034</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">📞</div>
          <div>
            <h4>Phone</h4>
            <p>+91 40 1234 5678</p>
            <p>+91 98765 43210 (Emergency)</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">✉️</div>
          <div>
            <h4>Email</h4>
            <p>info@citycarehyderabad.com</p>
          </div>
        </div>
      </div>
      
      <div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <textarea placeholder="How can we help you?" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
        </form>
      </div>
    </div>

    <div className="subscribe-banner">
      <h2>Subscribe to our Newsletter</h2>
      <p>Get the latest health tips and news directly to your inbox.</p>
      <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Enter your email address" required />
        <button type="submit" className="btn-primary">Subscribe</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}>
            🏥 CityCare
          </div>
          <p style={{ color: '#94a3b8', maxWidth: '300px' }}>
            Providing world-class, compassionate healthcare services in the heart of Hyderabad.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Our Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Cardiology</a></li>
            <li><a href="#services">Neurology</a></li>
            <li><a href="#services">Orthopedics</a></li>
            <li><a href="#services">Emergency Care</a></li>
          </ul>
        </div>
        <div>
          <h4>Working Hours</h4>
          <ul className="footer-links" style={{ color: '#94a3b8' }}>
            <li>Emergency: 24/7</li>
            <li>OPD: Mon - Sat (8 AM - 8 PM)</li>
            <li>Sunday: 9 AM - 1 PM</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CityCare Multi-Specialty Hospital, Hyderabad. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
