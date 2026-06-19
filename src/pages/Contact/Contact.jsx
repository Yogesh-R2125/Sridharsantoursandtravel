import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMsg = `New Inquiry:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918973488089?text=${waMsg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div ref={ref}>
      <section className="page-hero" id="contact-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Contact Us</p>
          <h1>Contact Us</h1>
          <p>Get in touch with our team. We'd love to help plan your next journey.</p>
        </div>
      </section>

      <section className="section" id="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card fade-in-left" id="contact-form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your inquiry has been sent. Our team will get back to you shortly.</p>
                  <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2>Send Us a Message</h2>
                  <p>Fill out the form below and we'll respond within 24 hours.</p>
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name">Full Name *</label>
                        <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-phone">Phone Number *</label>
                        <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-subject">Subject *</label>
                      <select id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} required>
                        <option value="">Select a subject</option>
                        <option value="Tour Package Inquiry">Tour Package Inquiry</option>
                        <option value="Vehicle Rental">Vehicle Rental</option>
                        <option value="Custom Tour">Custom Tour Package</option>
                        <option value="Corporate Travel">Corporate Travel</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Your Message *</label>
                      <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your travel plans..." rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="contact-submit">
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar fade-in-right">
              {/* Contact Info */}
              <div className="contact-info-card">
                <h3>Get in Touch</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <p><a href="tel:+918973488089">+91 89734 88089</a></p>
                    <p><a href="tel:+919952560074">+91 99525 60074</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Email</h4>
                    <p><a href="mailto:sridharsantravels@gmail.com">sridharsantravels@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className="contact-info-text">
                    <h4>Office Address</h4>
                    <p>Gandhipuram, Ram Nagar,<br />Coimbatore, Tamil Nadu - 641001</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/918973488089?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20travel%20services." target="_blank" rel="noopener noreferrer" className="whatsapp-cta" id="contact-whatsapp">
                <div className="whatsapp-cta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <div>
                  <h4>Chat on WhatsApp</h4>
                  <p>Quick response guaranteed!</p>
                </div>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="contact-map fade-in" id="contact-map">
            <div className="section-header">
              <h2>Find Us</h2>
            </div>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.9653!3d11.0144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859006bf56c33%3A0x587d1634e3d2daa4!2sSri%20Dharsan%20Tours%20and%20Travels!5e0!3m2!1sen!2sin!4v1702300000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Dharsan Tours Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
