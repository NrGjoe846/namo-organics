import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface TerravaSectionsProps {
  onOpenEnquiry: () => void;
}

export const TerravaSections: React.FC<TerravaSectionsProps> = ({ onOpenEnquiry }) => {
  return (
    <div id="approach" style={{ backgroundColor: '#FFFFFF' }}>
      {/* 01. Terrava Full-Bleed Landscape Hero (Reference Image 2 Top Section) */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container-custom">
          <div
            style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.5rem, 4vw, 2.75rem)',
              boxShadow: '0 25px 60px rgba(18, 30, 21, 0.12)',
            }}
          >
            <img
              src="/assets/sunset-farm.jpg"
              alt="Natural Agriculture Landscape"
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
                background: 'linear-gradient(180deg, rgba(18, 30, 21, 0.35) 0%, rgba(18, 30, 21, 0.68) 100%)',
                zIndex: 1,
              }}
            />

            {/* Top Bar inside hero */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#FFFFFF',
                gap: '1rem',
              }}
            >
              {/* Desktop links */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
                className="hidden sm:flex"
              >
                <span>Bio-Platform</span>
                <span>How It Works</span>
                <span>About NAMO</span>
              </div>

              {/* Mobile tag indicator */}
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: '#93C639',
                  textTransform: 'uppercase',
                }}
                className="sm:hidden"
              >
                BIO-PLATFORM
              </div>

              <button
                onClick={onOpenEnquiry}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#121E15',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                  flexShrink: 0,
                }}
              >
                <span>Explore Platform</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Giant Centered Landscape Typography */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', margin: '2.5rem 0' }}>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.4rem, 6vw, 5.2rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  textShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                Natural<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Agriculture</span>
              </h2>
            </div>

            {/* Bottom Subtitle Card */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '20px',
                  fontSize: 'clamp(0.82rem, 1.1vw, 0.92rem)',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  lineHeight: 1.55,
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  maxWidth: '680px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                }}
              >
                A platform for planning, managing, and scaling natural organic agriculture across complex ecosystems.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Terrava System-First Split Grid (Reference Image 2 Middle Section) */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.95fr 1.05fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="terrava-split-grid"
          >
            {/* Left Column: Heading + Dual Thumbnail previews */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '520px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6D62', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                ABOUT NAMO
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: '#121E15',
                }}
              >
                Built for Natural Agriculture
              </h3>

              <p style={{ fontSize: '0.98rem', color: '#5E6D62', lineHeight: 1.65 }}>
                Natural Agriculture &amp; Modern Organic helps organizations, farmers and FPOs plan, manage, and scale organic bio-fertilizers by bringing biological clarity and structure to complex real-world systems.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <img
                  src="/assets/nature-soil.jpg"
                  alt="Soil preview"
                  style={{ width: '90px', height: '90px', borderRadius: '18px', objectFit: 'cover' }}
                />
                <img
                  src="/assets/farmers.jpg"
                  alt="Farmers preview"
                  style={{ width: '90px', height: '90px', borderRadius: '18px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: 3 Stacked Cards (Reference Image 2) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Card 1: System-First Design */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '1.75rem 2rem',
                  border: '1px solid #E4EAE0',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#121E15', marginBottom: '0.35rem' }}>
                    System-First Design
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#5E6D62', marginBottom: '0.75rem', lineHeight: 1.45 }}>
                    Formulated around how traditional Panchakavya bio-systems connect and operate.
                  </p>
                  <button
                    onClick={onOpenEnquiry}
                    style={{ background: 'none', border: 'none', fontSize: '0.78rem', fontWeight: 700, color: '#121E15', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', padding: 0 }}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
                <img
                  src="/assets/sunset-farm.jpg"
                  alt="Crop system"
                  style={{ width: '100px', height: '70px', borderRadius: '14px', objectFit: 'cover' }}
                />
              </div>

              {/* Card 2: Built for Scale (Deep Green Card) */}
              <div
                style={{
                  backgroundColor: '#173F2B',
                  borderRadius: '24px',
                  padding: '1.75rem 2rem',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  boxShadow: '0 15px 35px rgba(23, 63, 43, 0.25)',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                    Built for Scale
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#D6EC9C', marginBottom: '0.75rem', lineHeight: 1.45 }}>
                    Supports agricultural growth across states and climatic zones without losing formulation potency.
                  </p>
                  <button
                    onClick={onOpenEnquiry}
                    style={{ background: 'none', border: 'none', fontSize: '0.78rem', fontWeight: 700, color: '#D6EC9C', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', padding: 0 }}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
                <img
                  src="/assets/nature-soil.jpg"
                  alt="Scale infrastructure"
                  style={{ width: '100px', height: '70px', borderRadius: '14px', objectFit: 'cover' }}
                />
              </div>

              {/* Card 3: Long-Term Focus */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '1.75rem 2rem',
                  border: '1px solid #E4EAE0',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#121E15', marginBottom: '0.35rem' }}>
                    Long-Term Focus
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#5E6D62', marginBottom: '0.75rem', lineHeight: 1.45 }}>
                    Engineered to support durable, resilient soil fertility and biological productivity over time.
                  </p>
                  <button
                    onClick={onOpenEnquiry}
                    style={{ background: 'none', border: 'none', fontSize: '0.78rem', fontWeight: 700, color: '#121E15', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', padding: 0 }}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
                <img
                  src="/assets/farmers.jpg"
                  alt="Long-term agronomy"
                  style={{ width: '100px', height: '70px', borderRadius: '14px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Terrava "Manage Agriculture as One System" Section (Reference Image 2) */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="terrava-onesystem-grid"
          >
            {/* Left: Portrait Winding Road Photo */}
            <div
              style={{
                borderRadius: '32px',
                overflow: 'hidden',
                height: '420px',
                boxShadow: '0 20px 45px rgba(18, 30, 21, 0.1)',
              }}
            >
              <img
                src="/assets/sunset-farm.jpg"
                alt="Winding agricultural hills"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Right: The Platform Controls + System Design Subcard */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6D62', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                THE PLATFORM
              </div>

              <h3
                className="font-display"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#121E15', lineHeight: 1.15 }}
              >
                Manage Agriculture as One System
              </h3>

              {/* Sub-Card */}
              <div
                style={{
                  backgroundColor: '#F7F5EF',
                  borderRadius: '24px',
                  padding: '1.75rem',
                  border: '1px solid #DFE5DA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#121E15', marginBottom: '0.35rem' }}>
                    System Design
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: '#5E6D62', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                    Design biological inputs as a connected whole, bringing structure to how organic products, farmers, and distributors interact.
                  </p>
                  <button
                    onClick={onOpenEnquiry}
                    style={{ background: 'none', border: 'none', fontSize: '0.78rem', fontWeight: 700, color: '#121E15', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', padding: 0 }}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
                <img
                  src="/assets/nature-soil.jpg"
                  alt="System design"
                  style={{ width: '90px', height: '70px', borderRadius: '12px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .terrava-split-grid,
          .terrava-onesystem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
