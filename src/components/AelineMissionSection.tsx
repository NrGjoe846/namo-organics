import React from 'react';
import { ArrowRight, Sprout, Globe, Users, Leaf } from 'lucide-react';

interface AelineMissionSectionProps {
  onOpenEnquiry: () => void;
}

export const AelineMissionSection: React.FC<AelineMissionSectionProps> = ({ onOpenEnquiry }) => {
  const cards = [
    {
      title: 'Sustainable Land Use',
      desc: 'Promoting responsible soil health and sustainable agricultural practices.',
      icon: Sprout,
      image: '/assets/nature-soil.jpg',
    },
    {
      title: 'Biodiversity Action',
      desc: 'Protecting the biological diversity of crops and the rural environment.',
      icon: Globe,
      image: '/assets/sunset-farm.jpg',
    },
    {
      title: 'Community Empowerment',
      desc: 'Empowering local farmers, FPOs, and agrarian communities.',
      icon: Users,
      image: '/assets/farmers.jpg',
    },
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        borderTop: '1px solid #E4EAE0',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.95fr 1.05fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="aeline-mission-grid"
        >
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '540px' }}>
            <div className="aeline-tag">
              <Leaf size={13} color="#3B7E48" />
              <span>OUR MISSION</span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#121E15',
                letterSpacing: '-0.025em',
              }}
            >
              We’re Building a <span style={{ color: '#3B7E48' }}>Greener</span>, Cleaner, Stronger World.
            </h2>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#5E6D62' }}>
              Through biological innovation, direct farmer advisory, and Panchakavya-based inputs, we empower growers to heal their soils, protect genetic diversity, and build lasting rural prosperity.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <button onClick={onOpenEnquiry} className="btn-aeline-green">
                <span>Explore Solutions</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => {
                  const target = document.querySelector('#panchakavya');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#panchakavya';
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '9999px',
                  border: '1px solid #DFE5DA',
                  backgroundColor: '#FFFFFF',
                  color: '#121E15',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: 3 Tall Rounded Vertical Cards (Reference A exact UI) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
            }}
            className="aeline-cards-row"
          >
            {cards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    height: '380px',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(18, 30, 21, 0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.5rem',
                    color: '#FFFFFF',
                    transition: 'transform 0.35s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(18, 30, 21, 0.1) 0%, rgba(18, 30, 21, 0.85) 100%)',
                      zIndex: 1,
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        marginBottom: '0.85rem',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <IconComp size={18} />
                    </div>

                    <h3
                      className="font-display"
                      style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem', lineHeight: 1.25 }}
                    >
                      {card.title}
                    </h3>

                    <p style={{ fontSize: '0.78rem', color: '#DFE5DA', lineHeight: 1.45 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .aeline-mission-grid {
            grid-template-columns: 1fr !important;
          }
          .aeline-cards-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
