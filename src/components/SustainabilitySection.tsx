import React, { useState } from 'react';
import { ArrowUpRight, Leaf, Shield, Trees, Sparkles, Check } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pillars = [
    {
      num: '01',
      title: 'Sustainable Agriculture',
      tag: 'SOIL VITALITY',
      desc: 'Our products support soil health, crop resilience and sustainable agricultural practices.',
      detail: 'Restores the biological humus layer and beneficial soil bacteria for multi-decade agrarian health.',
      icon: Leaf,
      image: '/assets/nature-soil.jpg',
    },
    {
      num: '02',
      title: 'Improve Genetic Diversity',
      tag: 'CROP RESILIENCE',
      desc: 'Supporting agricultural practices that contribute to resilient and sustainable ecosystems.',
      detail: 'Empowers indigenous cultivars to thrive under shifting climatic pressures without chemical dependence.',
      icon: Trees,
      image: '/assets/farmers.jpg',
    },
    {
      num: '03',
      title: 'Protect Biodiversity',
      tag: 'ECOSYSTEM HEALTH',
      desc: 'We work to protect the biodiversity of crops and the surrounding environment.',
      detail: 'Safeguards pollinators, earthworms, and native microbiomes from synthetic toxicity and runoff.',
      icon: Shield,
      image: '/assets/sunset-farm.jpg',
    },
  ];

  return (
    <section
      id="sustainability"
      style={{
        backgroundColor: '#0C291B',
        color: '#F7F5EF',
        paddingTop: '7.5rem',
        paddingBottom: '7.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Ambient Radial Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 154, 98, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77, 117, 78, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '840px', marginBottom: '4.5rem' }}>
          <span className="editorial-label" style={{ color: '#B59A62', marginBottom: '0.75rem' }}>
            OUR APPROACH
          </span>
          <h2
            className="section-giant-title"
            style={{
              color: '#F7F5EF',
              marginTop: '0.25rem',
            }}
          >
            AGRICULTURE<br />
            <span className="italic-serif" style={{ color: '#A8B79E' }}>That Works With</span><br />
            NATURE.
          </h2>
          <p
            style={{
              color: '#DFD3B6',
              fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
              lineHeight: 1.7,
              marginTop: '1.25rem',
              maxWidth: '680px',
            }}
          >
            We believe sustainable agriculture begins with healthier soil, resilient crops and responsible use of natural resources. Our approach incorporates Panchakavya-based solutions into agricultural practices to foster sustainable ecosystems and empower farmers.
          </p>
        </div>

        {/* 3 Large Vertical Photographic Cards with Expand Interaction */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '4rem',
          }}
          className="sustainability-deck-grid"
        >
          {pillars.map((pillar, idx) => {
            const isHovered = activeCard === idx;
            return (
              <div
                key={pillar.num}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  position: 'relative',
                  height: '460px',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  border: isHovered
                    ? '1.5px solid #B59A62'
                    : '1px solid rgba(247, 245, 239, 0.15)',
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                  transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isHovered
                    ? '0 25px 50px rgba(0, 0, 0, 0.5)'
                    : '0 12px 30px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2.25rem',
                }}
                className="sustainability-panel"
                data-cursor="EXPAND"
              >
                {/* Full-Height Background Image with Deep Overlay */}
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: isHovered
                      ? 'linear-gradient(180deg, rgba(12, 41, 27, 0.4) 0%, rgba(12, 41, 27, 0.92) 100%)'
                      : 'linear-gradient(180deg, rgba(12, 41, 27, 0.25) 0%, rgba(12, 41, 27, 0.88) 100%)',
                    transition: 'background 0.4s ease',
                    zIndex: 1,
                  }}
                />

                {/* Top Card Controls */}
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      color: '#B59A62',
                      fontFamily: 'var(--font-serif-display)',
                    }}
                  >
                    PANEL {pillar.num}
                  </span>

                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: isHovered ? '#B59A62' : 'rgba(247, 245, 239, 0.15)',
                      color: isHovered ? '#0C291B' : '#F7F5EF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#A8B79E',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {pillar.tag}
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.65rem',
                      color: '#F7F5EF',
                      marginBottom: '0.65rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#DFD3B6',
                      lineHeight: 1.55,
                      marginBottom: isHovered ? '0.75rem' : '0',
                    }}
                  >
                    {pillar.desc}
                  </p>

                  {isHovered && (
                    <div
                      style={{
                        paddingTop: '0.75rem',
                        borderTop: '1px solid rgba(223, 211, 182, 0.2)',
                        fontSize: '0.78rem',
                        color: '#A8B79E',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <Check size={13} color="#B59A62" />
                      <span>{pillar.detail}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Banner */}
        <div
          style={{
            backgroundColor: 'rgba(247, 245, 239, 0.05)',
            border: '1px solid rgba(181, 154, 98, 0.25)',
            borderRadius: '20px',
            padding: '1.75rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Sparkles size={22} color="#B59A62" />
            <div style={{ fontSize: '0.95rem', color: '#F7F5EF' }}>
              <strong>Farming In Harmony With Nature:</strong> Fostering sustainable biological ecosystems for generational resilience.
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', letterSpacing: '0.14em', color: '#B59A62', textTransform: 'uppercase', fontWeight: 700 }}>
            Healthy Crops • Richer Soil • Stronger Communities
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .sustainability-deck-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
