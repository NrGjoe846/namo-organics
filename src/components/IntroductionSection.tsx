import React from 'react';
import { ArrowRight, Sprout, CheckCircle2 } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  const scrollToApproach = () => {
    const el = document.querySelector('#approach') || document.querySelector('#founder-vision') || document.querySelector('#vision-mission');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#approach';
    }
  };

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        borderTop: '1px solid rgba(23, 63, 43, 0.08)',
        borderBottom: '1px solid rgba(23, 63, 43, 0.08)',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="intro-grid"
        >
          {/* Left Column: Visual Asset with Floating Cards */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -10px rgba(23, 63, 43, 0.12)',
                border: '1px solid #DFD3B6',
              }}
            >
              <img
                src="/assets/nature-soil.jpg"
                alt="Healthy rich soil with sprouting agricultural crops"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  e.currentTarget.src = '/assets/farmers.jpg';
                }}
              />
            </div>

            {/* Floating Info Card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-1.5rem',
                backgroundColor: '#FCFAF4',
                border: '1px solid #DFD3B6',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 20px 45px -5px rgba(23, 63, 43, 0.15)',
                maxWidth: '280px',
                display: 'none',
              }}
              className="intro-floating-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(63, 107, 69, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#173F2B',
                  }}
                >
                  <Sprout size={18} />
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#173F2B' }}>
                  Core Mandate
                </div>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: '#1C241E' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#3F6B45" />
                  Field-Based Solutions
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#3F6B45" />
                  Agricultural Products
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#3F6B45" />
                  Agricultural Services
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span className="editorial-eyebrow" style={{ marginBottom: '0.6rem' }}>
                WHO WE ARE
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                  color: '#173F2B',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginTop: '0.25rem',
                }}
              >
                Natural Agriculture.<br />
                <span style={{ fontStyle: 'italic', color: '#3F6B45' }}>Modern Thinking.</span>
              </h2>
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#1C241E',
                fontWeight: 500,
              }}
            >
              <strong>Natural Agriculture &amp; Modern Organic</strong> is a professionally managed company committed to sharing knowledge and information with its clients.
            </p>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#667067' }}>
              We manufacture and supply organic fertilizers, including Panchakavya-based fertilizers, organic agricultural products, cold-pressed edible oils and desi cow ghee. We are also engaged in e-commerce and merchant trading, bringing together agricultural products, natural solutions and modern approaches to serve a growing agricultural ecosystem.
            </p>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#667067' }}>
              Our dedicated team of professionals draws upon its extensive knowledge and experience to deliver innovative and long-term solutions, supporting technical advancement in agriculture through field-based products and knowledge-driven services that improve productivity and efficiency.
            </p>

            {/* 3 Core Highlight Features */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(23, 63, 43, 0.1)',
              }}
              className="intro-features-grid"
            >
              <div style={{ backgroundColor: '#FCFAF4', padding: '1.1rem', borderRadius: '14px', border: '1px solid #DFD3B6' }}>
                <div style={{ color: '#173F2B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                  Field-Based Solutions
                </div>
                <div style={{ fontSize: '0.78rem', color: '#667067', lineHeight: 1.5 }}>
                  Practical solutions designed around on-ground field requirements.
                </div>
              </div>

              <div style={{ backgroundColor: '#FCFAF4', padding: '1.1rem', borderRadius: '14px', border: '1px solid #DFD3B6' }}>
                <div style={{ color: '#173F2B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                  Agricultural Products
                </div>
                <div style={{ fontSize: '0.78rem', color: '#667067', lineHeight: 1.5 }}>
                  Natural &amp; organic formulations supporting crop health.
                </div>
              </div>

              <div style={{ backgroundColor: '#FCFAF4', padding: '1.1rem', borderRadius: '14px', border: '1px solid #DFD3B6' }}>
                <div style={{ color: '#173F2B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                  Agricultural Services
                </div>
                <div style={{ fontSize: '0.78rem', color: '#667067', lineHeight: 1.5 }}>
                  Knowledge-driven services focused on productivity and efficiency.
                </div>
              </div>
            </div>

            <div style={{ marginTop: '0.75rem' }}>
              <button
                onClick={scrollToApproach}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#173F2B',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3F6B45')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#173F2B')}
              >
                <span>Discover Our Approach</span>
                <ArrowRight size={16} color="#B79A5B" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .intro-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .intro-floating-card {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          .intro-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
