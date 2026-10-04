import React, { useState } from 'react';
import { ArrowRight, Sprout } from 'lucide-react';

interface AelineHeroSectionProps {
  onOpenEnquiry: () => void;
}

export const AelineHeroSection: React.FC<AelineHeroSectionProps> = ({ onOpenEnquiry }) => {
  const [email, setEmail] = useState('');

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenEnquiry();
  };

  const stats = [
    { value: 'US $24B+', label: 'Market Context', desc: 'Indian bio-agriculture market trajectory by 2026.' },
    { value: '40%', label: 'Water Conservation', desc: 'Cultivation water reduction with Panchakavya.' },
    { value: '21 Days', label: 'Drought Resilience', desc: 'Extended crop vitality in low water conditions.' },
    { value: '100%', label: 'Natural Ingredients', desc: 'Indigenous cow-derived formulation bases.' },
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundColor: '#EBF4E8',
        paddingTop: '7rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Cinematic Image with Vivid Botanical Landscape & Lush Multi-Layer Lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          opacity: 0.75,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 85% 18%, rgba(147, 198, 57, 0.38) 0%, transparent 52%), radial-gradient(circle at 12% 35%, rgba(46, 125, 50, 0.25) 0%, transparent 55%), radial-gradient(circle at 50% 90%, rgba(20, 60, 36, 0.12) 0%, transparent 65%), linear-gradient(180deg, rgba(235, 244, 232, 0.25) 0%, rgba(235, 244, 232, 0.68) 55%, #F5F7F2 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '3.5rem',
          }}
          className="aeline-hero-grid"
        >
          {/* Left Column: Typography & Input Pill */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '620px' }}>
            {/* Tag */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(59, 126, 72, 0.12)',
                  border: '1px solid rgba(59, 126, 72, 0.28)',
                  boxShadow: '0 2px 10px rgba(59, 126, 72, 0.08)',
                }}
              >
                <Sprout size={14} color="#2E7D32" />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#1B5E20',
                  }}
                >
                  TOGETHER FOR A GREENER TOMORROW
                </span>
              </div>
            </div>

            {/* Giant Headline */}
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(3rem, 5.2vw, 4.8rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                color: '#0C291B',
                letterSpacing: '-0.03em',
              }}
            >
              Save <span style={{ color: '#2E7D32', textShadow: '0 4px 24px rgba(46, 125, 50, 0.22)' }}>Soil</span>,<br />
              Save Tomorrow.
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.65,
                color: '#3D5344',
                maxWidth: '520px',
                fontWeight: 450,
              }}
            >
              We unite communities, ideas, and actions to protect India's living soil and build a sustainable agricultural future for all.
            </p>

            {/* Email Input Pill */}
            <form onSubmit={handleJoin} className="aeline-input-pill" style={{ border: '1px solid rgba(59, 126, 72, 0.25)', boxShadow: '0 8px 25px rgba(20, 60, 36, 0.06)' }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn-aeline-green"
                style={{
                  padding: '0.75rem 1.6rem',
                  background: 'linear-gradient(135deg, #2E7D32 0%, #154D22 100%)',
                  boxShadow: '0 4px 14px rgba(46, 125, 50, 0.35)',
                }}
              >
                <span>Join Us</span>
                <ArrowRight size={15} />
              </button>
            </form>

            {/* Social Proof Avatar Row with Real Farmer & Community Images */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.25rem' }}>
                <img
                  src="/assets/farmers.jpg"
                  alt="Farmer 1"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #FFFFFF',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                />
                <img
                  src="/assets/sunset-farm.jpg"
                  alt="Farmer 2"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #FFFFFF',
                    marginLeft: '-8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                />
                <img
                  src="/assets/hero-mid.jpg"
                  alt="Crops"
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #FFFFFF',
                    marginLeft: '-8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                />
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: '#93C639',
                    color: '#0C291B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #FFFFFF',
                    marginLeft: '-8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  <Sprout size={14} color="#0C291B" />
                </div>
              </div>

              <span style={{ fontSize: '0.84rem', color: '#435848', fontWeight: 500 }}>
                Join <strong style={{ color: '#0C291B' }}>15,000+</strong> farmers &amp; families making a difference
              </span>
            </div>
          </div>

          {/* Right Column: Split Canopy/Soil Aerial Photo + Floating Cards */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '36px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(12, 41, 27, 0.2), 0 0 0 1px rgba(147, 198, 57, 0.3)',
                minHeight: '460px',
                height: '100%',
                maxHeight: '500px',
              }}
            >
              {/* Aerial Split Background Photo */}
              <img
                src="/assets/sunset-farm.jpg"
                alt="Split agricultural landscape"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '460px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Gradient lighting overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(23, 63, 43, 0.25) 0%, rgba(12, 41, 27, 0.52) 100%)',
                }}
              />
            </div>

            {/* 3 Floating Rounded Cards with Subtle Emerald Glassmorphism */}
            <div
              className="aeline-floating-card"
              style={{
                position: 'absolute',
                top: '1.75rem',
                right: '-1.5rem',
                maxWidth: '240px',
                zIndex: 3,
                border: '1px solid rgba(59, 126, 72, 0.2)',
                boxShadow: '0 15px 35px rgba(12, 41, 27, 0.12)',
              }}
            >
              <img
                src="/assets/nature-soil.jpg"
                alt="Panchakavya"
                style={{ width: '44px', height: '44px', borderRadius: '12px', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0C291B' }}>Panchakavya Tech</div>
                <div style={{ fontSize: '0.72rem', color: '#4E6254', lineHeight: 1.3 }}>Natural inputs, restoring soils.</div>
              </div>
            </div>

            <div
              className="aeline-floating-card"
              style={{
                position: 'absolute',
                top: '44%',
                right: '-2rem',
                maxWidth: '240px',
                zIndex: 3,
                border: '1px solid rgba(59, 126, 72, 0.2)',
                boxShadow: '0 15px 35px rgba(12, 41, 27, 0.12)',
              }}
            >
              <img
                src="/assets/hero-products.jpg"
                alt="Protection"
                style={{ width: '44px', height: '44px', borderRadius: '12px', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0C291B' }}>Organic Protection</div>
                <div style={{ fontSize: '0.72rem', color: '#4E6254', lineHeight: 1.3 }}>Non-toxic bio-pesticides.</div>
              </div>
            </div>

            <div
              className="aeline-floating-card"
              style={{
                position: 'absolute',
                bottom: '1.75rem',
                right: '-1rem',
                maxWidth: '240px',
                zIndex: 3,
                border: '1px solid rgba(59, 126, 72, 0.2)',
                boxShadow: '0 15px 35px rgba(12, 41, 27, 0.12)',
              }}
            >
              <img
                src="/assets/NAMO Algae Extract Bottle.png"
                alt="Cattle Wellness"
                style={{ width: '44px', height: '44px', borderRadius: '12px', objectFit: 'contain', backgroundColor: '#FFFFFF' }}
              />
              <div>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0C291B' }}>Cattle Wellness</div>
                <div style={{ fontSize: '0.72rem', color: '#4E6254', lineHeight: 1.3 }}>Algae feed supplements.</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Stats Bar with Lush Top Border Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="aeline-stats-grid"
        >
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="aeline-stat-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '1.75rem 1.5rem',
                border: '1px solid rgba(59, 126, 72, 0.12)',
                borderTop: '3.5px solid #2E7D32',
                boxShadow: '0 6px 24px rgba(20, 60, 36, 0.06)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#0C291B',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {st.value}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 750,
                  color: '#2E7D32',
                  marginBottom: '0.35rem',
                }}
              >
                {st.label}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#5E7063',
                  lineHeight: 1.45,
                }}
              >
                {st.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AelineHeroSection;
