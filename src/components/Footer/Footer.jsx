import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Footer.css';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/packages', label: 'Tour Packages' },
  { path: '/vehicle-rental', label: 'Vehicle Rental' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact', label: 'Contact Us' },
];

const services = [
  'Domestic Tours',
  'International Tours',
  'Holiday Packages',
  'Pilgrimage Tours',
  'Corporate Travel',
  'Hotel Bookings',
  'Vehicle Rentals',
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <div className="footer-brand">
              <img src={logo} alt="Sri Dharsan Tours and Travels Logo" className="footer-brand-logo-img" />
              <h3>Sri Dharsan Tours and Travels</h3>
            </div>
            <p>
              Your trusted travel partner for every journey. We provide the best travel
              experiences with comfort, safety, and unforgettable memories across India
              and beyond.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" id="social-fb">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" id="social-ig">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a href="#" aria-label="Twitter" id="social-tw">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" id="social-yt">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <div className="footer-links">
              {services.map((service) => (
                <Link key={service} to="/packages">
                  → {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="footer-contact-text">
                <strong>Office Address</strong>
                Gandhipuram, Ram Nagar,<br />Coimbatore, Tamil Nadu - 641001
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div className="footer-contact-text">
                <strong>Phone</strong>
                <a href="tel:+918973488089">+91 89734 88089</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="footer-contact-text">
                <strong>Email</strong>
                <a href="mailto:sridharsantravels@gmail.com">sridharsantravels@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sri Dharsan Tours and Travels. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
