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
            className="font-heading"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#173F2B', marginTop: '0.25rem' }}
          >
            Vision &amp; Mission
          </h2>
          <p style={{ color: '#667067', fontSize: '1rem', marginTop: '0.5rem' }}>
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
              backgroundColor: '#173F2B',
              color: '#FCFAF4',
              padding: '3rem 2.5rem',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(23, 63, 43, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
                background: 'radial-gradient(circle, rgba(183, 154, 91, 0.15) 0%, transparent 70%)',
              }}
            />
            <div>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(183, 154, 91, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B79A5B',
                  marginBottom: '1.5rem',
                }}
              >
                <Eye size={28} />
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#B79A5B',
                  marginBottom: '0.5rem',
                }}
              >
                COMPANY VISION
              </div>
              <h3
                className="font-heading"
                style={{ fontSize: '1.75rem', color: '#FCFAF4', marginBottom: '1rem' }}
              >
                Sustainable Cultivation For Future Generations
              </h3>
              <p style={{ color: '#DFD3B6', fontSize: '1.05rem', lineHeight: 1.7 }}>
                To promote the transition towards organic and sustainable cultivation for the health, growth and well-being of future generations.
              </p>
            </div>
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(223, 211, 182, 0.2)',
                fontSize: '0.8rem',
                color: '#A8B89F',
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
              backgroundColor: '#3F6B45',
              color: '#FCFAF4',
              padding: '3rem 2.5rem',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(63, 107, 69, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
                background: 'radial-gradient(circle, rgba(245, 241, 231, 0.2) 0%, transparent 70%)',
              }}
            />
            <div>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(245, 241, 231, 0.2)',
                  display: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FCFAF4',
                  marginBottom: '1.5rem',
                }}
              >
                <Target size={28} />
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#FCFAF4',
                  marginBottom: '0.5rem',
                }}
              >
                COMPANY MISSION
              </div>
              <h3
                className="font-heading"
                style={{ fontSize: '1.75rem', color: '#FCFAF4', marginBottom: '1rem' }}
              >
                Empowering Farmers With Organic Inputs
              </h3>
              <p style={{ color: '#FCFAF4', fontSize: '1.05rem', lineHeight: 1.7, opacity: 0.95 }}>
                To work with farmers to promote the use of organic fertilizers and sustainable agricultural practices, thereby contributing to the country's agricultural growth and development.
              </p>
            </div>
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(252, 250, 244, 0.2)',
                fontSize: '0.8rem',
                color: '#FCFAF4',
                opacity: 0.9,
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
              className="font-heading"
              style={{ fontSize: '2.1rem', color: '#173F2B', marginTop: '0.25rem' }}
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
