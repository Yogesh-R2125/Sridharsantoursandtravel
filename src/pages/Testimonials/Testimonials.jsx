import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

const reviews = [
  { name: 'Ramesh Kumar', initials: 'RK', trip: 'Ooty Family Trip', date: 'March 2025', rating: 5, review: 'Amazing experience! The team organized everything perfectly. Our family trip to Ooty was unforgettable. The hotel arrangements were excellent, the driver was professional, and the itinerary was well-planned. Highly recommended for anyone looking for hassle-free travel.' },
  { name: 'Priya Sharma', initials: 'PS', trip: 'Kerala Honeymoon', date: 'February 2025', rating: 5, review: 'Sri Dharsan Tours made our Kerala honeymoon truly special. From the beautiful houseboats in Alleppey to the serene hills of Munnar, every detail was taken care of. The team went above and beyond to make our trip memorable. Wonderful service!' },
  { name: 'Arun Prakash', initials: 'AP', trip: 'Madurai & Rameswaram Tour', date: 'January 2025', rating: 5, review: 'Professional, punctual, and extremely helpful. The Madurai & Rameswaram tour was well-planned with great hotels and an experienced driver. The Madurai Meenakshi Temple and Rameshwaram experiences were fantastic. Will definitely book again for our next trip!' },
  { name: 'Deepa M.', initials: 'DM', trip: 'Kodaikanal Weekend', date: 'December 2024', rating: 5, review: 'Booked a weekend getaway to Kodaikanal through Sri Dharsan Tours. Everything from the vehicle to the accommodation was top-notch. The team was very responsive and helped us customize the itinerary. Great value for money!' },
  { name: 'Suresh Babu', initials: 'SB', trip: 'Corporate Retreat', date: 'November 2024', rating: 5, review: 'We organized our company retreat through Sri Dharsan Tours and it was a huge success. They handled 50+ employees, arranged comfortable tempo travellers, and booked an excellent resort. Their corporate travel service is highly recommended.' },
  { name: 'Kavitha R.', initials: 'KR', trip: 'Temple Pilgrimage', date: 'October 2024', rating: 5, review: 'Our family pilgrimage tour covering Rameswaram, Madurai, and Thanjavur was perfectly organized. The driver was knowledgeable about the temples and helped us with everything. Special thanks for the senior-friendly arrangements.' },
  { name: 'Mohan Das', initials: 'MD', trip: 'Munnar & Wayanad Tour', date: 'September 2024', rating: 5, review: 'Dream trip to Munnar and Wayanad! The tea garden trails, wildlife safari experience, and gorgeous waterfalls were all incredible. Sri Dharsan Tours ensured our safety and comfort throughout. A trip of a lifetime!' },
  { name: 'Lakshmi N.', initials: 'LN', trip: 'Varkala Beach Vacation', date: 'August 2024', rating: 5, review: 'Our Varkala beach family vacation was absolutely fantastic. The cliff resort was beautiful, the sunset view was amazing, and the kids loved every moment. The team arranged everything seamlessly. Highly recommend their holiday packages!' },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <section className="page-hero" id="testimonials-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Testimonials</p>
          <h1>Customer Testimonials</h1>
          <p>Real stories from real travelers who chose Sri Dharsan Tours.</p>
        </div>
      </section>

      <section className="section" id="testimonials-content">
        <div className="container">
          {/* Stats */}
          <div className="testimonial-stats fade-in">
            <div className="stat-card">
              <div className="stat-number">10K<span>+</span></div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                4.9
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)', marginLeft: '4px' }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98<span>%</span></div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">85<span>%</span></div>
              <div className="stat-label">Repeat Customers</div>
            </div>
          </div>

          {/* Reviews */}
          <div className="testimonials-page-grid">
            {reviews.map((review, i) => (
              <div key={i} className="testimonial-full-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="quote-mark">"</span>
                <div className="testimonial-full-header">
                  <div className="testimonial-full-avatar">{review.initials}</div>
                  <div className="testimonial-full-info">
                    <h3>{review.name}</h3>
                    <p className="trip">{review.trip}</p>
                  </div>
                </div>
                <p className="review-text">{review.review}</p>
                <div className="testimonial-full-footer">
                  <div className="stars">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--gold)' }}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="date">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="testimonials-cta">
        <div className="container">
          <h2 className="fade-in">Share Your Travel Story</h2>
          <p className="fade-in">Had a great experience with us? We'd love to hear from you.</p>
          <Link to="/contact" className="btn btn-gold fade-in" id="share-story-btn">
            Contact Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
