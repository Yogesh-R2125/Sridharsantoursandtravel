import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './VehicleRental.css';

const categories = [
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>, title: 'Cars', desc: 'Sedan & Hatchback', vehicles: 'Swift, Etios, Amaze' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><path d="M19 11.5V14a2 2 0 0 1-2 2h-1"/><circle cx="6.5" cy="18.5" r="2.5"/><circle cx="16.5" cy="18.5" r="2.5"/><path d="M4 13h15M14 6v6"/></svg>, title: 'SUVs', desc: 'Spacious & Powerful', vehicles: 'Innova, Ertiga, XUV700' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/><circle cx="7.5" cy="18.5" r="2.5"/><circle cx="16.5" cy="18.5" r="2.5"/><path d="M2 12h20M9 6v6M15 6v6"/></svg>, title: 'Tempo Travellers', desc: '12 to 26 Seater', vehicles: 'Force Traveller, Tempo' },
  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>, title: 'Luxury Vehicles', desc: 'Premium Comfort', vehicles: 'Innova Crysta' },
];

const pricing = [
  { vehicle: 'Swift Dzire (Sedan)', local: '₹2,500', outstation: '₹12/km', airport: '₹1,800', capacity: '4 Passengers' },
  { vehicle: 'Toyota Etios', local: '₹2,800', outstation: '₹13/km', airport: '₹2,000', capacity: '4 Passengers' },
  { vehicle: 'Maruti Ertiga', local: '₹3,500', outstation: '₹15/km', airport: '₹2,500', capacity: '6 Passengers' },
  { vehicle: 'Toyota Innova', local: '₹4,500', outstation: '₹18/km', airport: '₹3,200', capacity: '7 Passengers' },
  { vehicle: 'Innova Crysta', local: '₹5,500', outstation: '₹20/km', airport: '₹4,000', capacity: '7 Passengers' },
  { vehicle: 'Tempo Traveller (12)', local: '₹6,500', outstation: '₹22/km', airport: '₹5,000', capacity: '12 Passengers' },
  { vehicle: 'Tempo Traveller (17)', local: '₹8,000', outstation: '₹25/km', airport: '₹6,000', capacity: '17 Passengers' },

];

export default function VehicleRental() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', vehicle: '', pickup: '', dropoff: '', date: '', message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMsg = `Vehicle Rental Inquiry:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AVehicle: ${formData.vehicle}%0APickup: ${formData.pickup}%0ADate: ${formData.date}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918973488089?text=${waMsg}`, '_blank');
  };

  return (
    <div ref={ref}>
      <section className="page-hero" id="rental-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Vehicle Rental</p>
          <h1>Vehicle Rental</h1>
          <p>Reliable and comfortable vehicles for all your travel needs.</p>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="section" id="vehicle-categories">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Fleet</h2>
            <p>Choose from our wide range of well-maintained vehicles.</p>
          </div>
          <div className="vehicle-categories">
            {categories.map((cat, i) => (
              <div key={i} className="vehicle-category fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="vehicle-category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--sky)', marginTop: '8px', fontWeight: 500 }}>{cat.vehicles}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-alt" id="rental-pricing">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Rental Pricing</h2>
            <p>Transparent and competitive pricing for every vehicle type.</p>
          </div>
          <div className="pricing-table-wrapper fade-in">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Local (8hrs/80km)</th>
                  <th>Outstation</th>
                  <th>Airport Transfer</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.vehicle}</strong></td>
                    <td><span className="pricing-tag">{row.local}</span></td>
                    <td><span className="pricing-tag">{row.outstation}</span></td>
                    <td><span className="pricing-tag">{row.airport}</span></td>
                    <td>{row.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section" id="rental-booking">
        <div className="container">
          <div className="rental-form-section">
            <form className="rental-form fade-in-left" onSubmit={handleSubmit} id="rental-form">
              <h3>Book a Vehicle</h3>
              <p>Fill out the form below and we'll get back to you shortly.</p>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rental-name">Full Name</label>
                  <input type="text" id="rental-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="rental-phone">Phone Number</label>
                  <input type="tel" id="rental-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="rental-email">Email Address</label>
                <input type="email" id="rental-email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="rental-vehicle">Vehicle Type</label>
                <select id="rental-vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} required>
                  <option value="">Select a vehicle</option>
                  <option value="Swift Dzire">Swift Dzire (Sedan)</option>
                  <option value="Toyota Etios">Toyota Etios</option>
                  <option value="Maruti Ertiga">Maruti Ertiga</option>
                  <option value="Toyota Innova">Toyota Innova</option>
                  <option value="Innova Crysta">Innova Crysta</option>
                  <option value="Tempo Traveller 12">Tempo Traveller (12 Seater)</option>
                  <option value="Tempo Traveller 17">Tempo Traveller (17 Seater)</option>

                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rental-pickup">Pickup Location</label>
                  <input type="text" id="rental-pickup" name="pickup" value={formData.pickup} onChange={handleChange} placeholder="Pickup point" required />
                </div>
                <div className="form-group">
                  <label htmlFor="rental-date">Travel Date</label>
                  <input type="date" id="rental-date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="rental-message">Additional Details</label>
                <textarea id="rental-message" name="message" value={formData.message} onChange={handleChange} placeholder="Any special requirements..." rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Inquiry
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>

            <div className="rental-info fade-in-right">
              <h3>Why Rent With Us?</h3>
              <div className="rental-info-item">
                <div className="rental-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4>Well-Maintained Vehicles</h4>
                  <p>All vehicles are regularly serviced and kept in top condition.</p>
                </div>
              </div>
              <div className="rental-info-item">
                <div className="rental-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h4>Experienced Drivers</h4>
                  <p>Professional, courteous, and knowledgeable drivers for your safety.</p>
                </div>
              </div>
              <div className="rental-info-item">
                <div className="rental-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4>24/7 Availability</h4>
                  <p>Vehicles available round the clock for any travel requirement.</p>
                </div>
              </div>
              <div className="rental-info-item">
                <div className="rental-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                </div>
                <div>
                  <h4>Transparent Pricing</h4>
                  <p>No hidden charges. What you see is what you pay.</p>
                </div>
              </div>
              <div className="rental-info-item">
                <div className="rental-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                </div>
                <div>
                  <h4>Flexible Payment</h4>
                  <p>Multiple payment options including UPI, cards, and cash.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
