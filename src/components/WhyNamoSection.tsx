import React from 'react';
import { Sun, Shield, TrendingUp, Sprout, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyNamoSection: React.FC = () => {
  const usps = [
    {
      num: '01',
      title: 'Indigenous Cow-Derived Ingredients',
      desc: 'We use carefully selected ingredients obtained from indigenous cows to maintain the quality, bio-potency, and authenticity of our formulations.',
      icon: Shield,
      tag: 'Authentic Sourcing',
    },
    {
      num: '02',
      title: 'Suitable for All Climatic Conditions',
      desc: 'Our products are formulated for use across a wide range of climatic conditions, providing farmers with dependable solutions suited to their local geographical requirements.',
      icon: Sun,
      tag: 'All-Weather Resilience',
    },
    {
      num: '03',
      title: 'Competitive Pricing & Profitability',
      desc: 'We provide competitively priced products designed to support crop performance while helping farmers improve the overall profitability of their agricultural operations.',
      icon: TrendingUp,
      tag: 'Agrarian Economics',
    },
    {
      num: '04',
      title: 'Sustainable Soil & Resource Health',
      desc: 'Solutions focused on soil health, preservation of natural resources, and sustainable agricultural practices that revitalize land for generations.',
      icon: Sprout,
      tag: 'Long-Term Ecology',
    },
  ];

  return (
    <section
      id="why-namo"
      style={{
        backgroundColor: '#F7F5EF',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        borderBottom: '1px solid rgba(23, 63, 43, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div className="aeline-tag" style={{ margin: '0 auto 1.25rem' }}>
            <Sparkles size={13} color="#3B7E48" />
            <span>WHY NAMO</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              color: '#121E15',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 800,
            }}
          >
            Built Around <span style={{ color: '#3B7E48' }}>Natural Solutions</span>
          </h2>

          <div
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#B79A5B',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginTop: '0.75rem',
            }}
          >
            Tradition • Innovation • Sustainable Growth
          </div>

          <p
            style={{
              color: '#556557',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginTop: '1rem',
            }}
          >
            Our approach combines carefully selected natural ingredients, deep agricultural knowledge and field-proven solutions.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
          className="why-namo-grid"
        >
          {usps.map((usp, idx) => {
            const IconComp = usp.icon;
            const isFeatured = idx === 0;
            return (
              <div
                key={usp.num}
                style={{
                  backgroundColor: isFeatured ? '#0C291B' : '#FFFFFF',
                  color: isFeatured ? '#FFFFFF' : '#121E15',
                  borderRadius: '28px',
                  padding: '2.5rem 1.8rem',
                  border: isFeatured ? '1px solid #0C291B' : '1px solid rgba(23, 63, 43, 0.1)',
                  boxShadow: isFeatured
                    ? '0 20px 40px -10px rgba(12, 41, 27, 0.35)'
                    : '0 10px 25px -10px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <span
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: isFeatured ? '#93C639' : '#F0EEE5',
                        color: isFeatured ? '#0C291B' : '#3B7E48',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {usp.num}
                    </span>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        backgroundColor: isFeatured ? 'rgba(255, 255, 255, 0.12)' : '#F7F5EF',
                        color: isFeatured ? '#93C639' : '#3B7E48',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {usp.tag}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: isFeatured ? 'rgba(147, 198, 57, 0.2)' : 'rgba(59, 126, 72, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <IconComp size={22} color={isFeatured ? '#93C639' : '#3B7E48'} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: isFeatured ? '#FFFFFF' : '#121E15',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {usp.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: isFeatured ? '#C9D4CA' : '#556557',
                    }}
                  >
                    {usp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Natural Integrity Heritage Seal Banner */}
        <div
          style={{
            backgroundColor: '#0C291B',
            borderRadius: '32px',
            padding: '3rem 3.5rem',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(12, 41, 27, 0.4)',
          }}
        >
          {/* Subtle glowing radial background */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(147, 198, 57, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '2.5rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}
            className="why-namo-banner-grid"
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#93C639',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                <Award size={16} />
                <span>NATURAL INTEGRITY</span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                }}
              >
                Preserving Indian Agricultural Heritage
              </h3>

              <p
                style={{
                  color: '#C9D4CA',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  maxWidth: '780px',
                }}
              >
                Our formulations rely strictly on authentic indigenous cow-derived components and clean
                organic processes, guaranteeing non-toxic input quality while empowering traditional
                agrarian wisdom with modern scientific verification.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: '1.5rem 2rem',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                minWidth: '220px',
              }}
            >
              <CheckCircle2 size={32} color="#93C639" style={{ margin: '0 auto 0.5rem' }} />
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>100% Authentic</div>
              <div style={{ fontSize: '0.78rem', color: '#93C639', marginTop: '0.2rem' }}>
                Indigenous Cow Source
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNamoSection;
