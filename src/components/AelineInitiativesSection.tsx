import React, { useState } from 'react';
import { ArrowRight, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';

interface AelineInitiativesSectionProps {
  onOpenEnquiry: () => void;
}

export const AelineInitiativesSection: React.FC<AelineInitiativesSectionProps> = ({ onOpenEnquiry }) => {
  const [subEmail, setSubEmail] = useState('');

  const initiatives = [
    {
      tag: 'Bio-Fertilizers',
      title: 'Panchakavya Fertilizers, Bright Future',
      desc: 'Revitalizing degraded soil fertility with indigenous cow-derived bio-nutrients.',
      image: '/assets/NAMO Panchakavya Organic Fertilizer Bottle.png',
    },
    {
      tag: 'Crop Defense',
      title: 'Organic Pesticides, Better Harvest',
      desc: 'Eco-friendly crop protection shielding plants while preserving pollinators.',
      image: '/assets/hero-products.jpg',
    },
    {
      tag: 'Livestock Wellness',
      title: 'Algae Cattle Feed, Stronger Yield',
      desc: 'Pure marine algae nutrition supporting dairy animal vitality and milk yield.',
      image: '/assets/NAMO Algae Extract Bottle.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? initiatives.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === initiatives.length - 1 ? 0 : prev + 1));
  };

  const displayedInitiatives = [
    ...initiatives.slice(currentIndex),
    ...initiatives.slice(0, currentIndex),
  ];

  return (
    <section
      id="initiatives"
      style={{
        backgroundColor: '#F7F5EF',
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        borderTop: '1px solid #E4EAE0',
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
          <div className="aeline-tag">
            <Leaf size={13} color="#3B7E48" />
            <span>OUR INITIATIVES</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={handlePrev}
              aria-label="Previous Initiative"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #DFE5DA',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronLeft size={16} color="#121E15" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Initiative"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #DFE5DA',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronRight size={16} color="#121E15" />
            </button>
          </div>
        </div>

        {/* 2-Column Section (Left 3 Cards, Right Real Impact + Lime Card) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="aeline-initiatives-grid"
        >
          {/* Left: 3 Initiative Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
            }}
            className="initiatives-row"
          >
            {displayedInitiatives.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  padding: '1.25rem',
                  border: '1px solid #E4EAE0',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div>
                  <div
                    style={{
                      height: '160px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      backgroundColor: '#F0EEE5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      marginBottom: '1rem',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ maxHeight: '130px', maxWidth: '85%', objectFit: 'contain' }}
                      onError={(e) => { e.currentTarget.src = '/assets/sunset-farm.jpg'; }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.6rem',
                        left: '0.6rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: '#121E15',
                      }}
                    >
                      {item.tag}
                    </div>
                  </div>

                  <h3
                    className="font-display"
                    style={{ fontSize: '1.05rem', fontWeight: 700, color: '#121E15', marginBottom: '0.4rem', lineHeight: 1.3 }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.8rem', color: '#5E6D62', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenEnquiry}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#121E15',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} color="#3B7E48" />
                </button>
              </div>
            ))}
          </div>

          {/* Right Column: Real Actions + Lime Subscription Box (Reference A exact UI) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: '#121E15',
                  letterSpacing: '-0.02em',
                }}
              >
                Real Actions. Real Impact.<br />
                A Better Future.
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#5E6D62', lineHeight: 1.65, marginTop: '0.85rem' }}>
                Discover how we turn natural inputs into impact through organic products that protect India’s soil, support agrarian livelihoods and nourish families.
              </p>
              <button
                onClick={onOpenEnquiry}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#3B7E48',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: '0.85rem',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span>View All Initiatives</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Lime Card (Reference A exact UI) */}
            <div
              style={{
                backgroundColor: '#D8EC9E',
                borderRadius: '24px',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <h3 className="font-display" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1A3B1F' }}>
                Stay Inspired. Stay Informed.
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#3A5C3F', lineHeight: 1.5 }}>
                Subscribe to our updates and receive practical organic transition guides and batch supply releases.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onOpenEnquiry();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '9999px',
                  padding: '0.3rem 0.3rem 0.3rem 1rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.85rem',
                    color: '#121E15',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#173F2B',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.65rem 1.25rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span>Subscribe</span>
                  <ArrowRight size={13} />
                </button>
              </form>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#3A5C3F', fontWeight: 600 }}>
                <span>Join thousands of farmers &amp; change-makers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .aeline-initiatives-grid {
            grid-template-columns: 1fr !important;
          }
          .initiatives-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .initiatives-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
