import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const ValuePropositionSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      tag: 'SOIL',
      title: 'Improving Soil Fertility',
      sub: '100% Soil Fertility Focus',
      desc: 'Our value proposition focuses on improving soil fertility and encouraging the sustainable use of natural resources to build rich microbial foundations.',
      image: '/assets/nature-soil.jpg',
      points: [
        'Restores organic carbon levels',
        'Enhances root penetration & hydration',
        'Nourishes beneficial soil microbiomes',
      ],
    },
    {
      num: '02',
      tag: 'RESOURCES',
      title: 'Farmer Success & Long-Term Profitability',
      sub: 'Sustainable Enterprise Economics',
      desc: 'We provide a compelling range of benefits to farmers and agricultural stakeholders, contributing to their success and the long-term profitability of their enterprises.',
      image: '/assets/farmers.jpg',
      points: [
        'Lowers dependence on expensive synthetics',
        'Up to 40% reduction in cultivation water need',
        'Improves harvest quality and market returns',
      ],
    },
    {
      num: '03',
      tag: 'IMPACT',
      title: 'Organic & Renewable Resources',
      sub: 'Minimizing Environmental Footprint',
      desc: 'We harness the power of organic and renewable resources, reducing reliance on synthetic inputs and minimizing environmental impact for a cleaner tomorrow.',
      image: '/assets/sunset-farm.jpg',
      points: [
        '100% renewable bio-ingredients',
        'Protects groundwater from chemical runoff',
        'Preserves biodiversity and pollinator insects',
      ],
    },
  ];

  return (
    <section
      id="value-proposition"
      style={{
        backgroundColor: '#F7F5EF',
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        position: 'relative',
        borderBottom: '1px solid rgba(23, 63, 43, 0.08)',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="aeline-tag" style={{ margin: '0 auto 1.25rem' }}>
            <Sparkles size={13} color="#3B7E48" />
            <span>OUR VALUE PROPOSITION</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: '#121E15',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 800,
              margin: 0,
            }}
          >
            Growing Value <span style={{ color: '#2E7D32' }}>From the Ground Up</span>
          </h2>

          <div
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#B79A5B',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginTop: '0.75rem',
            }}
          >
            Sustainable Solutions for Healthy Soil, Productive Farms and a Brighter Tomorrow
          </div>

          <p
            style={{
              color: '#556557',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.7,
              marginTop: '1rem',
            }}
          >
            We harness the power of organic and renewable resources while working to reduce reliance on
            synthetic inputs and minimize environmental impact.
          </p>
        </div>

        {/* 3 Value Columns with Integrated Photography */}
        <div className="value-prop-grid" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {pillars.map((p, idx) => {
            const isMiddle = idx === 1;
            return (
              <div
                key={p.num}
                className={`value-card ${isMiddle ? 'card-highlighted' : ''}`}
                style={{
                  backgroundColor: isMiddle ? '#0C291B' : '#FFFFFF',
                  color: isMiddle ? '#FFFFFF' : '#121E15',
                  borderRadius: '28px',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 2.5vw, 2.2rem)',
                  border: isMiddle ? '1px solid rgba(147, 198, 57, 0.3)' : '1px solid rgba(23, 63, 43, 0.1)',
                  boxShadow: isMiddle
                    ? '0 25px 50px -12px rgba(12, 41, 27, 0.35)'
                    : '0 10px 30px -10px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  {/* Card Header with Image Preview */}
                  <div
                    style={{
                      position: 'relative',
                      height: 'clamp(140px, 18vw, 160px)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="value-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#93C639',
                          color: '#0C291B',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        }}
                      >
                        {p.num}
                      </span>
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(255, 255, 255, 0.94)',
                          color: '#0C291B',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: isMiddle ? '#93C639' : '#3B7E48',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {p.sub}
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                      fontWeight: 750,
                      color: isMiddle ? '#FFFFFF' : '#121E15',
                      marginBottom: '0.85rem',
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      color: isMiddle ? '#C9D4CA' : '#556557',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {p.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: isMiddle ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(23, 63, 43, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                  }}
                >
                  {p.points.map((pt, pidx) => (
                    <div
                      key={pidx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.84rem',
                        color: isMiddle ? '#FFFFFF' : '#121E15',
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle2 size={15} color={isMiddle ? '#93C639' : '#3B7E48'} style={{ flexShrink: 0 }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Brochure Takeaway Summary Bar */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(23, 63, 43, 0.12)',
            borderRadius: '24px',
            padding: 'clamp(1rem, 2.5vw, 1.35rem) clamp(1.2rem, 3vw, 2rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem 1.25rem',
              fontSize: 'clamp(0.78rem, 1.4vw, 0.9rem)',
              fontWeight: 700,
              color: '#0C291B',
              textAlign: 'center',
            }}
          >
            <span>Healthy Soil</span>
            <span style={{ color: '#93C639' }}>•</span>
            <span>Healthy Food</span>
            <span style={{ color: '#93C639' }}>•</span>
            <span>Prosperous Farmers</span>
            <span style={{ color: '#93C639' }}>•</span>
            <span>Cleaner Environment</span>
            <span style={{ color: '#93C639' }}>•</span>
            <span>Brighter Tomorrow</span>
          </div>
        </div>
      </div>

      <style>{`
        .value-prop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .value-card:hover {
          transform: translateY(-6px);
        }

        .value-card.card-highlighted:hover {
          box-shadow: 0 30px 60px -10px rgba(12, 41, 27, 0.5) !important;
          border-color: rgba(147, 198, 57, 0.5) !important;
        }

        .value-card:not(.card-highlighted):hover {
          box-shadow: 0 20px 45px -10px rgba(12, 41, 27, 0.1) !important;
          border-color: rgba(59, 126, 72, 0.3) !important;
        }

        .value-card:hover .value-img {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .value-prop-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .value-prop-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ValuePropositionSection;
