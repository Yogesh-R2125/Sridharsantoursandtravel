import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Home.css';

const services = [
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>, 
    title: 'Domestic Tours', 
    desc: 'Explore the beauty of India with our curated domestic tour packages.' 
  },
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-2-2h-3L9 3H4v3h4l5 5H4v2h9l-5 5v3h5l7-7h1a2 2 0 0 0 2-2z"/></svg>, 
    title: 'International Tours', 
    desc: 'Discover the world with our expertly planned international travel packages.' 
  },
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>, 
    title: 'Holiday Packages', 
    desc: 'Relaxing holiday packages designed for unforgettable family vacations.' 
  },
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 22h20M12 2 4 12h16zM4 12v10h16V12"/></svg>, 
    title: 'Pilgrimage Tours', 
    desc: 'Spiritual journeys to sacred destinations with comfort and devotion.' 
  },
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>, 
    title: 'Corporate Travel', 
    desc: 'Professional corporate travel solutions for your business needs.' 
  },
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 21V9a4 4 0 0 1 8 0v12M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>, 
    title: 'Hotel Bookings', 
    desc: 'Best-in-class hotel accommodations at competitive prices.' 
  },
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM9 5v14M15 5v14"/></svg>, 
    title: 'Flight Booking', 
    desc: 'Hassle-free domestic and international flight ticket bookings.' 
  },
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>, 
    title: 'Vehicle Rentals', 
    desc: 'Wide range of rental vehicles for every travel requirement.' 
  },
  { 
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>, 
    title: 'Custom Packages', 
    desc: 'Tailor-made tour packages designed just for your needs.' 
  },
];

const destinations = [
  { name: 'Ooty', desc: 'Queen of Hill Stations', image: '/images/ooty.png' },
  { name: 'Munnar', desc: 'Scenic Tea Valleys', image: '/images/mountain.png' },
  { name: 'Kerala', desc: 'God\'s Own Country', image: '/images/kerala.png' },
  { name: 'Wayanad', desc: 'Waterfalls & Caves', image: '/images/waterfall.png' },
  { name: 'Rameswaram', desc: 'Sacred Island Town', image: '/images/temple.png' },
  { name: 'Kodaikanal', desc: 'Princess of Hill Stations', image: '/images/kodaikanal.png' },
];

const whyChoose = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Professional Service', desc: 'Expert travel consultants ensuring a smooth, hassle-free experience.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>, title: 'Affordable Pricing', desc: 'Competitive pricing without compromising on quality or comfort.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>, title: 'Experienced Team', desc: 'Years of expertise in crafting perfect travel experiences.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: '24/7 Support', desc: 'Round-the-clock customer support for your peace of mind.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>, title: 'Safe & Comfortable', desc: 'Safety and comfort are our top priorities for every journey.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>, title: 'Customized Packages', desc: 'Flexible itineraries tailored to your preferences and budget.' },
];

const testimonials = [
  { name: 'Ramesh Kumar', location: 'Ooty Trip', review: 'Amazing experience! The team organized everything perfectly. Our family trip to Ooty was unforgettable. Highly recommended for anyone looking for hassle-free travel.', rating: 5 },
  { name: 'Priya Sharma', location: 'Kerala Tour', review: 'Sri Dharsan Tours made our Kerala honeymoon truly special. From houseboats to hill stations, every detail was taken care of. Wonderful service!', rating: 5 },
  { name: 'Arun Prakash', location: 'Madurai & Rameswaram Tour', review: 'Professional, punctual, and extremely helpful. The Madurai & Rameswaram tour was well-planned with great hotels and an experienced driver. Will book again!', rating: 5 },
];

export default function Home() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      {/* Hero */}
      <section className="hero" id="hero">
        <img src="/images/hero.png" alt="Beautiful travel destination" className="hero-bg" />
        <div className="hero-shape-1"></div>
        <div className="hero-shape-2"></div>
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Trusted Travel Partner Since 2010
          </div>
          <h1 className="fade-in">Your Trusted Travel Partner for <span>Every Journey</span></h1>
          <p className="hero-subtitle fade-in">
            Explore destinations with comfort, safety, and unforgettable experiences. 
            Let us turn your travel dreams into beautiful memories.
          </p>
          <div className="hero-actions fade-in">
            <Link to="/packages" className="btn btn-primary" id="hero-book">
              Book a Trip
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/contact" className="btn btn-secondary" id="hero-contact">
              Contact Us
            </Link>
          </div>
          <div className="hero-stats fade-in">
            <div className="hero-stat">
              <div className="hero-stat-number">15<span>+</span></div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">10K<span>+</span></div>
              <div className="hero-stat-label">Happy Customers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">500<span>+</span></div>
              <div className="hero-stat-label">Destinations</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number" style={{ display: 'flex', alignItems: 'center' }}>
                4.9
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)', marginLeft: '4px' }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="hero-stat-label">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section" id="about-preview">
        <div className="container">
          <div className="about-preview">
            <div className="about-preview-image fade-in-left">
              <img src="/images/about.png" alt="Sri Dharsan Tours team" />
              <div className="experience-badge">
                <span className="number">15+</span>
                <span className="label">Years of Experience</span>
              </div>
            </div>
            <div className="about-preview-content fade-in-right">
              <h2>We Make Your Travel Dreams Come True</h2>
              <p>
                Sri Dharsan Tours and Travel has been a trusted name in the travel industry 
                for over 15 years. We specialize in creating memorable travel experiences 
                with a focus on comfort, safety, and customer satisfaction.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>Customer-Focused</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>Trusted Services</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>Expert Guides</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span>Best Value</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline" id="about-more">
                Learn More About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-alt" id="services">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Services</h2>
            <p>We offer a comprehensive range of travel services to make your journey perfect from start to finish.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card fade-in" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section" id="destinations">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Popular Destinations</h2>
            <p>Discover our most loved travel destinations, handpicked for unforgettable experiences.</p>
          </div>
          <div className="destinations-grid">
            {destinations.map((dest, i) => (
              <div key={i} className="destination-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                <img src={dest.image} alt={dest.name} />
                <div className="destination-overlay">
                  <h3>{dest.name}</h3>
                  <p>{dest.desc}</p>
                  <Link to="/packages" className="btn">Explore →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-alt" id="why-choose-us">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Why Choose Us</h2>
            <p>Here's what makes Sri Dharsan Tours and Travel your ideal travel partner.</p>
          </div>
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <div key={i} className="why-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section" id="testimonials-preview">
        <div className="container">
          <div className="section-header fade-in">
            <h2>What Our Customers Say</h2>
            <p>Hear from travelers who experienced the Sri Dharsan difference.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="quote-icon">"</span>
                <p className="review">{item.review}</p>
                <div className="stars">
                  {[...Array(item.rating)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="testimonial-info">
                    <h4>{item.name}</h4>
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }} className="fade-in">
            <Link to="/testimonials" className="btn btn-outline" id="view-testimonials">
              View All Reviews
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="container">
          <h2 className="fade-in">Ready for Your Next Adventure?</h2>
          <p className="fade-in">Let us plan your dream trip. Contact us today and get a personalized travel quote.</p>
          <Link to="/contact" className="btn btn-gold fade-in" id="cta-contact">
            Get in Touch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
