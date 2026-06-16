import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Gallery.css';

const galleryImages = [
  { src: '/images/ooty.png', title: 'Ooty Tea Gardens', category: 'destinations', desc: 'Scenic tea plantations in the Nilgiris' },
  { src: '/images/kerala.png', title: 'Kerala Backwaters', category: 'destinations', desc: 'Serene houseboat experience' },
  { src: '/images/temple.png', title: 'Temple Architecture', category: 'tours', desc: 'Ancient South Indian temple' },
  { src: '/images/rajasthan.png', title: 'Chettinad Palace', category: 'destinations', desc: 'Majestic royal heritage of Tamil Nadu' },
  { src: '/images/goa.png', title: 'Varkala Beach', category: 'destinations', desc: 'Cliffs and sun-kissed sands of Kerala' },
  { src: '/images/mountain.png', title: 'Munnar Tea Hills', category: 'tours', desc: 'Breathtaking Western Ghats hills and tea valleys' },
  { src: '/images/kashmir.png', title: 'Wayanad Valleys', category: 'destinations', desc: 'Lush green valleys and mist-filled hills of Kerala' },
  { src: '/images/waterfall.png', title: 'Tropical Waterfall', category: 'memories', desc: 'Nature\'s spectacular display' },
  { src: '/images/desert.png', title: 'Dhanushkodi Sand Dunes', category: 'tours', desc: 'Scenic sand dunes and ruins of Dhanushkodi' },
  { src: '/images/kodaikanal.png', title: 'Kodaikanal Lake', category: 'destinations', desc: 'Misty hill station retreat' },
  { src: '/images/hero.png', title: 'Sunset Paradise', category: 'memories', desc: 'Golden hour at the beach' },
  { src: '/images/about.png', title: 'Happy Travelers', category: 'memories', desc: 'Creating memories together' },
];

const filters = [
  { key: 'all', label: 'All' },
  { key: 'destinations', label: 'Destinations' },
  { key: 'tours', label: 'Tours' },
  { key: 'memories', label: 'Memories' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const ref = useScrollReveal();

  const filtered = activeFilter === 'all' ? galleryImages : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div ref={ref}>
      <section className="page-hero" id="gallery-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / Gallery</p>
          <h1>Gallery</h1>
          <p>A visual journey through our most memorable travel experiences.</p>
        </div>
      </section>

      <section className="section" id="gallery-grid">
        <div className="container">
          <div className="gallery-filters fade-in">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
                id={`gallery-filter-${f.key}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="gallery-masonry">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="gallery-item fade-in"
                style={{ transitionDelay: `${i * 0.05}s` }}
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.title} />
                <div className="gallery-item-overlay">
                  <h4>{img.title}</h4>
                  <p>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={`lightbox${lightbox ? ' open' : ''}`}
        onClick={() => setLightbox(null)}
        id="gallery-lightbox"
      >
        {lightbox && (
          <>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
            <img src={lightbox.src} alt={lightbox.title} onClick={e => e.stopPropagation()} />
            <div className="lightbox-caption">
              <h3>{lightbox.title}</h3>
              <p>{lightbox.desc}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
