import React from 'react';
import { PhoneCall, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenEnquiry: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenEnquiry }) => {

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '7rem',
        paddingBottom: '7rem',
        overflow: 'hidden',
        backgroundColor: '#0C291B',
      }}
    >
      {/* Background Image with Lush Organic Atmospheric Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/sunset-farm.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          opacity: 0.65,
          transform: 'scale(1.03)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 35%, rgba(147, 198, 57, 0.12) 0%, rgba(12, 41, 27, 0.6) 55%, rgba(6, 22, 14, 0.92) 100%), linear-gradient(180deg, rgba(12, 41, 27, 0.75) 0%, rgba(12, 41, 27, 0.4) 50%, rgba(6, 22, 14, 0.92) 100%)',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            className="aeline-tag"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#93C639',
              border: '1px solid rgba(147, 198, 57, 0.3)',
              margin: '0 auto 1.5rem',
            }}
          >
            <Sparkles size={13} color="#93C639" />
            <span>LET'S GROW TOGETHER</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 800,
              marginBottom: '1.25rem',
            }}
          >
            Together for a <span style={{ color: '#93C639' }}>Greener Tomorrow</span>
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: '#C9D4CA',
              maxWidth: '660px',
              margin: '0 auto 2.5rem',
            }}
          >
            Discover natural agricultural solutions designed to support farmers, soil health and sustainable agriculture.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <button
              onClick={onOpenEnquiry}
              className="aeline-btn-lime"
              style={{
                fontSize: '1rem',
                padding: '0.95rem 2.2rem',
                cursor: 'pointer',
              }}
            >
              <PhoneCall size={18} color="#0C291B" />
              Contact NAMO Organic
            </button>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.85rem',
              color: '#93C639',
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}
          >
            <Sparkles size={14} />
            <span>Saving India’s Soil. Nourishing India’s Families.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
