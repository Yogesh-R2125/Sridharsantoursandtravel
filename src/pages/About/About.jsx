import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useSEO } from '../../hooks/useSEO';
import './About.css';

const values = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 11 2 2 4-4"/></svg>, title: 'Trust', desc: 'Building lasting relationships through transparency and reliability.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: 'Excellence', desc: 'Delivering exceptional quality in every travel experience.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/></svg>, title: 'Innovation', desc: 'Embracing new ideas to create unique travel solutions.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>, title: 'Passion', desc: 'Driven by our love for travel and customer happiness.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Safety', desc: 'Ensuring the highest safety standards for all travelers.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>, title: 'Sustainability', desc: 'Promoting responsible and eco-friendly tourism.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>, title: 'Commitment', desc: 'Dedicated to exceeding customer expectations every time.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>, title: 'Care', desc: 'Treating every traveler like family with personalized attention.' },
];

const team = [
  { name: 'Dharsan Sivakumar', role: 'Driver', initials: 'DS', bio: 'Experienced and reliable driver ensuring safe and comfortable journeys.' },
  { name: 'Kishore Sivakumar', role: 'Driver', initials: 'KS', bio: 'Professional driver with deep knowledge of Tamil Nadu and Kerala routes.' },
  { name: 'Sivakumar', role: 'Driver', initials: 'SK', bio: 'Dedicated driver committed to punctuality and customer satisfaction.' },
];

export default function About() {
  const ref = useScrollReveal();
  useSEO({
    title: 'About Us',
    description: 'Learn more about Sri Dharsan Tours and Travels. Over 15 years of experience in organizing domestic tours, corporate travel, and pilgrimage packages.'
  });

  return (
    <div ref={ref}>
      {/* Page Hero */}
      <section className="page-hero" id="about-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / About Us</p>
          <h1>About Us</h1>
          <p>Your trusted travel partner for memorable journeys across India and beyond.</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section" id="about-story">
        <div className="container">
          <div className="about-story">
            <div className="about-story-image fade-in-left">
              <img src="/images/about.png" alt="Our team at work" />
            </div>
            <div className="about-story-content fade-in-right">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Sri Dharsan Tours and Travels began with a simple vision — to make 
                travel accessible, comfortable, and memorable for everyone. What started as a small 
                travel desk has grown into one of the most trusted travel agencies in the region.
              </p>
              <p>
                Over the past 15 years, we have served more than 10,000 happy customers, organized 
                tours to over 500 destinations, and built a reputation for reliability, professionalism, 
                and exceptional customer service.
              </p>
              <p>
                Our team of experienced travel consultants works tirelessly to curate the best 
                travel experiences, ensuring every trip is smooth, safe, and unforgettable. Whether 
                it's a family vacation, a corporate retreat, or a spiritual pilgrimage, we handle 
                every detail with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-alt" id="mission-vision">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Mission & Vision</h2>
            <p>Guiding principles that drive everything we do.</p>
          </div>
          <div className="mv-grid">
            <div className="mv-card mission fade-in-left">
              <div className="mv-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional travel experiences that create lasting memories. 
                We strive to make every journey comfortable, safe, and affordable, 
                while maintaining the highest standards of service and professionalism.
              </p>
            </div>
            <div className="mv-card vision fade-in-right">
              <div className="mv-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and preferred travel agency in India, 
                known for personalized service, innovative travel solutions, and 
                unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" id="core-values">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Core Values</h2>
            <p>The principles that define who we are and how we serve our customers.</p>
          </div>
          <div className="values-grid">
            {values.map((val, i) => (
              <div key={i} className="value-card fade-in" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="value-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-alt" id="team">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Meet Our Team</h2>
            <p>The passionate professionals behind your perfect travel experiences.</p>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-member fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="about-cta">
        <div className="container">
          <h2 className="fade-in">Let's Plan Your Next Trip</h2>
          <p className="fade-in">Get in touch with our team and start your travel journey today.</p>
          <Link to="/contact" className="btn btn-gold fade-in" id="about-contact-btn">
            Contact Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
