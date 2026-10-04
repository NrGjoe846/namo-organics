import React from 'react';
import { Quote, Sparkles, Award, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

interface FounderSectionProps {
  onOpenEnquiry?: () => void;
  isAboutPage?: boolean;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onOpenEnquiry,
  isAboutPage = false,
}) => {
  return (
    <section
      id="founder-vision"
      style={{
        backgroundColor: isAboutPage ? '#FCFAF4' : '#F7F5EF',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(23, 63, 43, 0.08)',
      }}
    >
      {/* Subtle Background Foliage Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 126, 72, 0.06) 0%, rgba(247, 245, 239, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header Tag */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div className="aeline-tag" style={{ margin: '0 auto 1.25rem' }}>
            <Sparkles size={13} color="#3B7E48" />
            <span>FOUNDER'S PERSPECTIVE &amp; LEADERSHIP</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
              fontWeight: 800,
              color: '#0C291B',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            A Vision Rooted in <span className="font-serif italic" style={{ color: '#3B7E48', fontWeight: 400 }}>Sacred Soil</span> &amp; Modern Science
          </h2>
          <p
            style={{
              color: '#5E6D62',
              fontSize: '1.05rem',
              lineHeight: 1.65,
              marginTop: '1rem',
            }}
          >
            The driving philosophy behind Natural Agriculture &amp; Modern Organic Private Limited — preserving India’s agrarian heritage while empowering the next generation of farmers.
          </p>
        </div>

        {/* Main 2-Column Editorial Card */}
        <div
          className="founder-main-card"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '36px',
            border: '1px solid rgba(23, 63, 43, 0.09)',
            boxShadow: '0 25px 60px -15px rgba(12, 41, 27, 0.08)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1.05fr',
            gap: 0,
          }}
        >
          {/* Left Column: Visual Portrait Frame & Dedicated Credentials Card */}
          <div
            className="founder-left-col"
            style={{
              padding: 'clamp(1.25rem, 2.5vw, 2rem)',
              backgroundColor: '#F7F5EF',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Dedicated Photo Container — 100% Unobstructed Founder Image */}
            <div
              className="founder-portrait-frame"
              style={{
                position: 'relative',
                borderRadius: '26px',
                overflow: 'hidden',
                height: 'clamp(340px, 38vw, 440px)',
                backgroundColor: '#0C291B',
                boxShadow: '0 12px 30px rgba(12, 41, 27, 0.12)',
              }}
            >
              <img
                src="/assets/namo-founder.jpg"
                alt="Fathima Ali - Founder & Managing Director, Natural Agriculture & Modern Organic Private Limited"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 12%',
                  display: 'block',
                  transition: 'transform 0.7s ease',
                }}
              />

              {/* Floating Leadership Badge — Positioned at Top in Tapestry Margin Above Face */}
              <div
                className="founder-leadership-badge"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '0.45rem 1.05rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#0C291B',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                  zIndex: 2,
                  maxWidth: 'calc(100% - 2rem)',
                }}
              >
                <Award size={14} color="#3B7E48" />
                <span>INDIGENOUS BIO-AGRICULTURE LEADERSHIP</span>
              </div>
            </div>

            {/* Dedicated Credentials & Stats Card — Cleanly Positioned Below Photo */}
            <div
              className="founder-credentials-card"
              style={{
                backgroundColor: '#0C291B',
                borderRadius: '26px',
                padding: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                color: '#FFFFFF',
                boxShadow: '0 16px 36px rgba(12, 41, 27, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#93C639',
                }}
              >
                FOUNDER &amp; MANAGING DIRECTOR
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.65rem, 2.4vw, 2.1rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                Fathima Ali
              </h3>
              <p style={{ color: '#D3DFD5', fontSize: '0.86rem', lineHeight: 1.5, margin: 0 }}>
                Natural Agriculture &amp; Modern Organic Private Limited
              </p>

              {/* 3 Core Stats Row */}
              <div
                className="founder-stats-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginTop: '1.15rem',
                  paddingTop: '1.15rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#93C639', lineHeight: 1.1 }}>100%</div>
                  <div style={{ fontSize: '0.68rem', color: '#C9D4CA', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>
                    Chemical-Free
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#93C639', lineHeight: 1.1 }}>40%</div>
                  <div style={{ fontSize: '0.68rem', color: '#C9D4CA', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>
                    Water Saved
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#93C639', lineHeight: 1.1 }}>5+</div>
                  <div style={{ fontSize: '0.68rem', color: '#C9D4CA', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>
                    Cow Derivatives
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Narrative & Mission Letter */}
          <div
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                backgroundColor: 'rgba(59, 126, 72, 0.1)',
                color: '#3B7E48',
                marginBottom: '1.5rem',
              }}
            >
              <Quote size={24} />
            </div>

            <blockquote
              className="font-serif"
              style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)',
                fontStyle: 'italic',
                color: '#0C291B',
                lineHeight: 1.55,
                marginBottom: '1.5rem',
              }}
            >
              “India’s soil is not merely dirt under our feet; it is our sacred heritage. True progress in agriculture comes not from exhausting the earth with synthetic chemicals, but by restoring its living microflora through authentic indigenous wisdom.”
            </blockquote>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#556557', fontSize: '0.95rem', lineHeight: 1.7 }}>
              <p>
                When we founded <strong>NAMO Organic</strong>, our mission was clear: create an uncompromising bridge between traditional Vedic Panchakavya bio-science and modern agronomic efficiency. We recognized that farmers across Tamil Nadu and India needed dependable, high-yielding solutions that also lowered cultivation costs.
              </p>
              <p>
                Today, our scientifically validated formulations help crops withstand prolonged drought conditions, restore microbial carbon to depleted soils, and bring pure, chemical-free nutrition from the farm straight to Indian dinner tables.
              </p>
            </div>

            {/* Founder Sign-off & Title */}
            <div style={{ marginTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '4px',
                  height: '42px',
                  borderRadius: '2px',
                  backgroundColor: '#3B7E48',
                }}
              />
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0C291B', letterSpacing: '-0.01em' }}>
                  Fathima Ali
                </div>
                <div style={{ fontSize: '0.82rem', color: '#3B7E48', fontWeight: 700 }}>
                  Founder &amp; Managing Director
                </div>
              </div>
            </div>

            {/* 3 Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(23, 63, 43, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShieldCheck size={18} color="#3B7E48" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0C291B' }}>Ethical Indigenous Sourcing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <HeartHandshake size={18} color="#3B7E48" />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0C291B' }}>Direct Farmer Empowerment</span>
              </div>
            </div>

            {/* Action CTA if provided */}
            {onOpenEnquiry && (
              <div style={{ marginTop: '2rem' }}>
                <button
                  onClick={onOpenEnquiry}
                  className="aeline-btn-forest"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.9rem',
                    padding: '0.85rem 1.75rem',
                  }}
                >
                  <span>Connect with Leadership</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
