import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useSEO } from '../../hooks/useSEO';
import './Packages.css';

const packages = [
  {
    id: 1, name: 'Enchanting Ooty', location: 'Tamil Nadu', image: '/images/ooty.png',
    duration: '3 Days / 2 Nights', price: '₹8,999', pricePer: '/person', badge: 'Best Seller',
    category: 'domestic', people: '2-6',
    inclusions: ['Hotels', 'Transport', 'Sightseeing', 'Breakfast', 'Guide'],
  },
  {
    id: 2, name: 'Kerala Backwaters', location: 'Kerala', image: '/images/kerala.png',
    duration: '5 Days / 4 Nights', price: '₹14,999', pricePer: '/person', badge: 'Popular',
    category: 'domestic', people: '2-8',
    inclusions: ['Houseboat', 'Hotels', 'Transport', 'Meals', 'Guide'],
  },
  {
    id: 3, name: 'Kodaikanal Retreat', location: 'Tamil Nadu', image: '/images/kodaikanal.png',
    duration: '3 Days / 2 Nights', price: '₹7,499', pricePer: '/person', badge: 'Value',
    category: 'domestic', people: '2-6',
    inclusions: ['Hotels', 'Transport', 'Sightseeing', 'Breakfast', 'Boating'],
  },
  {
    id: 4, name: 'Munnar Hill Station', location: 'Kerala', image: '/images/mountain.png',
    duration: '4 Days / 3 Nights', price: '₹11,999', pricePer: '/person', badge: 'Trending',
    category: 'holiday', people: '2-6',
    inclusions: ['Hotels', 'Transport', 'Tea Plantation Visit', 'Meals', 'Guide'],
  },
  {
    id: 5, name: 'Temple Trail South India', location: 'Tamil Nadu & Kerala', image: '/images/temple.png',
    duration: '5 Days / 4 Nights', price: '₹12,999', pricePer: '/person', badge: 'Spiritual',
    category: 'pilgrimage', people: '2-12',
    inclusions: ['Hotels', 'Transport', 'Temple Visits', 'Meals', 'Guide'],
  },
  {
    id: 6, name: 'Rameswaram Pilgrimage', location: 'Tamil Nadu', image: '/images/temple.png',
    duration: '3 Days / 2 Nights', price: '₹6,999', pricePer: '/person', badge: 'Sacred',
    category: 'pilgrimage', people: '2-10',
    inclusions: ['Hotels', 'Transport', 'Temple Visits', 'Breakfast', 'Guide'],
  },
  {
    id: 7, name: 'Madurai & Rameshwaram', location: 'Tamil Nadu', image: '/images/temple.png',
    duration: '4 Days / 3 Nights', price: '₹9,499', pricePer: '/person', badge: 'Heritage',
    category: 'pilgrimage', people: '2-8',
    inclusions: ['Hotels', 'Transport', 'Temple Visits', 'Meals', 'Guide'],
  },
  {
    id: 8, name: 'Wayanad & Thekkady', location: 'Kerala', image: '/images/waterfall.png',
    duration: '4 Days / 3 Nights', price: '₹10,999', pricePer: '/person', badge: 'Adventure',
    category: 'holiday', people: '2-6',
    inclusions: ['Hotels', 'Transport', 'Wildlife Safari', 'Meals', 'Spice Garden'],
  },
];

export default function Packages() {
  const ref = useScrollReveal();
  useSEO({
    title: 'Tour Packages',
    description: 'Explore our domestic, international, and pilgrimage holiday packages. Customizable travel plans at affordable prices by Sri Dharsan Tours and Travels.'
  });

  return (
    <div ref={ref}>
      <section className="page-hero" id="packages-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Tour Packages</p>
          <h1>Tour Packages</h1>
          <p>Explore our curated collection of travel packages for every kind of traveler.</p>
        </div>
      </section>

      <section className="section" id="packages-list">
        <div className="container">
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <div key={pkg.id} className="package-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <span className="package-badge">{pkg.badge}</span>
                  <div className="package-price">{pkg.price}<span>{pkg.pricePer}</span></div>
                </div>
                <div className="package-content">
                  <h3>{pkg.name}</h3>
                  <div className="package-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {pkg.location}
                  </div>
                  <div className="package-meta">
                    <div className="package-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {pkg.duration}
                    </div>
                    <div className="package-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                      {pkg.people} pax
                    </div>
                  </div>
                  <div className="package-inclusions">
                    <p>Inclusions:</p>
                    <ul>
                      {pkg.inclusions.map((inc, j) => (
                        <li key={j}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="package-actions">
                    <Link to="/contact" className="btn btn-primary" id={`book-${pkg.id}`}>Book Now</Link>
                    <Link to="/contact" className="btn btn-outline" id={`enquire-${pkg.id}`}>Enquire</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
