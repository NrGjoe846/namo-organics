import React from 'react';
import { Eye, Target, Dna, Wheat, Bug, Layers } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Decreasing Genetic Variation',
      desc: 'Loss of genetic diversity in crops and the surrounding natural environment.',
      icon: Dna,
    },
    {
      num: '02',
      title: 'Monoculture Farming Practices',
      desc: 'Repetitive single-crop farming exhausting soil nutrients and microbiomes.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Reliance on Limited Crop Varieties',
      desc: 'Heavy dependence on a narrow set of high-yielding varieties causing fragility.',
      icon: Wheat,
    },
    {
      num: '04',
      title: 'Greater Vulnerability to Pests & Climate',
      desc: 'Weakened crop resilience against pests, diseases, and sudden climate shifts.',
      icon: Bug,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#FCFAF4',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Vision & Mission Cards (Brochure Page 3) */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="editorial-eyebrow" style={{ marginBottom: '0.6rem' }}>
            NATURAL SOLUTIONS FOR A BETTER TOMORROW
          </span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#0C291B', fontWeight: 800, marginTop: '0.25rem' }}
          >
            Vision &amp; Mission
          </h2>
          <p style={{ color: '#556557', fontSize: '1rem', marginTop: '0.5rem' }}>
            Growing together for a greener tomorrow with nature-inspired agricultural inputs.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            marginBottom: '5rem',
          }}
          className="vm-cards-grid"
        >
          {/* Vision Card */}
          <div
            style={{
              backgroundColor: '#0C291B',
              color: '#FFFFFF',
              padding: 'clamp(2rem, 4vw, 3rem) clamp(1.75rem, 3.5vw, 2.5rem)',
              borderRadius: '26px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(12, 41, 27, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -10px rgba(12, 41, 27, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(12, 41, 27, 0.3)';
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                right: '-15%',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(183, 154, 91, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(183, 154, 91, 0.2)',
                  border: '1px solid rgba(183, 154, 91, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37',
                  marginBottom: '1.5rem',
                }}
              >
                <Eye size={26} color="#D4AF37" />
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#D4AF37',
                  marginBottom: '0.65rem',
                }}
              >
                COMPANY VISION
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                Sustainable Cultivation For Future Generations
              </h3>
              <p style={{ color: '#C9D4CA', fontSize: '1rem', lineHeight: 1.68 }}>
                To promote the transition towards organic and sustainable cultivation for the health, growth and well-being of future generations.
              </p>
            </div>
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#93C639',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Healthy Soil • Healthy Food • Brighter Generations
            </div>
          </div>

          {/* Mission Card */}
          <div
            style={{
              backgroundColor: '#173F2B',
              color: '#FFFFFF',
              padding: 'clamp(2rem, 4vw, 3rem) clamp(1.75rem, 3.5vw, 2.5rem)',
              borderRadius: '26px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(23, 63, 43, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(147, 198, 57, 0.2)',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 25px 50px -10px rgba(23, 63, 43, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(23, 63, 43, 0.3)';
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                right: '-15%',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(147, 198, 57, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(147, 198, 57, 0.18)',
                  border: '1px solid rgba(147, 198, 57, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#93C639',
                  marginBottom: '1.5rem',
                }}
              >
                <Target size={26} color="#93C639" />
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#93C639',
                  marginBottom: '0.65rem',
                }}
              >
                COMPANY MISSION
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                Empowering Farmers With Organic Inputs
              </h3>
              <p style={{ color: '#DCE8DF', fontSize: '1rem', lineHeight: 1.68 }}>
                To work with farmers to promote the use of organic fertilizers and sustainable agricultural practices, thereby contributing to the country's agricultural growth and development.
              </p>
            </div>
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#93C639',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Nature Feeds Life • Greener Fields • Brighter Tomorrow
            </div>
          </div>
        </div>

        {/* The Problem We Address (Brochure Page 4) */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #DFD3B6',
            padding: '3.5rem',
            boxShadow: 'var(--shadow-card)',
          }}
          className="problem-box"
        >
          <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
            <span
              className="editorial-eyebrow"
              style={{ color: '#795548', marginBottom: '0.5rem' }}
            >
              FROM DEGRADED SOIL TO A HEALTHIER TOMORROW
            </span>
            <h3
              className="font-display"
              style={{ fontSize: '2.1rem', color: '#173F2B', fontWeight: 800, marginTop: '0.25rem' }}
            >
              The Agricultural Challenges We Solve
            </h3>
            <p style={{ color: '#667067', fontSize: '1rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
              The agricultural sector faces a serious challenge: <strong>declining genetic diversity in crops and the surrounding environment</strong>. The primary causes include monoculture farming, dependence on a limited number of high-yielding crop varieties, and habitat loss.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
            }}
            className="problems-grid"
          >
            {problems.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  style={{
                    backgroundColor: '#FCFAF4',
                    border: '1px solid rgba(23, 63, 43, 0.08)',
                    borderRadius: '16px',
                    padding: '1.75rem 1.25rem',
                    transition: 'all 0.3s ease',
                  }}
                  className="problem-item"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: '#B79A5B',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.num}
                    </span>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(63, 107, 69, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#173F2B',
                      }}
                    >
                      <IconComp size={18} />
                    </div>
                  </div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#173F2B',
                      marginBottom: '0.5rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#667067', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.25rem 1.5rem',
              backgroundColor: '#F5F1E7',
              borderRadius: '12px',
              borderLeft: '4px solid #3F6B45',
              fontSize: '0.92rem',
              color: '#173F2B',
              lineHeight: 1.6,
            }}
          >
            <strong>NAMO Solution Mandate:</strong> We seek to address this issue by promoting products and agricultural practices that support crop diversity, agricultural resilience, and overall environmental health.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vm-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .problems-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .problem-box {
            padding: 2rem !important;
          }
        }
        @media (max-width: 580px) {
          .problems-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
