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
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '36px',
            border: '1px solid rgba(23, 63, 43, 0.09)',
            boxShadow: '0 25px 60px -15px rgba(12, 41, 27, 0.08)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 0,
          }}
        >
          {/* Left Column: Visual Portrait & Heritage Badges */}
          <div
            style={{
              position: 'relative',
              minHeight: '520px',
              backgroundColor: '#0C291B',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            {/* Background Image of Authentic Founder */}
            <img
              src="/assets/namo-founder.jpg"
              alt="Fathima Ali - Founder & Managing Director, Natural Agriculture & Modern Organic Private Limited"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                zIndex: 0,
                transition: 'transform 0.7s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(12, 41, 27, 0.08) 0%, rgba(12, 41, 27, 0.2) 45%, rgba(12, 41, 27, 0.92) 90%)',
                zIndex: 1,
              }}
            />

            {/* Top Floating Badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.75rem',
                left: '1.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(10px)',
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#0C291B',
                boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                zIndex: 2,
              }}
            >
              <Award size={15} color="#3B7E48" />
              <span>INDIGENOUS BIO-AGRICULTURE LEADERSHIP</span>
            </div>

            {/* Bottom Content on Image */}
            <div style={{ position: 'relative', zIndex: 2, color: '#FFFFFF' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#93C639',
                  marginBottom: '0.35rem',
                }}
              >
                FOUNDER &amp; MANAGING DIRECTOR
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: '1.95rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Fathima Ali
              </h3>
              <p style={{ color: '#E3EBE4', fontSize: '0.92rem', lineHeight: 1.5, opacity: 0.95 }}>
                Natural Agriculture &amp; Modern Organic Private Limited
              </p>

              {/* 3 Core Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginTop: '1.75rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#93C639' }}>100%</div>
                  <div style={{ fontSize: '0.7rem', color: '#C9D4CA', textTransform: 'uppercase' }}>Chemical-Free</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#93C639' }}>40%</div>
                  <div style={{ fontSize: '0.7rem', color: '#C9D4CA', textTransform: 'uppercase' }}>Water Saved</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#93C639' }}>5+</div>
                  <div style={{ fontSize: '0.7rem', color: '#C9D4CA', textTransform: 'uppercase' }}>Cow Derivatives</div>
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
