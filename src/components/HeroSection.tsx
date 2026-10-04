import React from 'react';
import { ArrowRight, Sparkles, Leaf, Droplets } from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry }) => {
  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F7F5EF',
        paddingTop: '7.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Natural Atmosphere */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 183, 158, 0.22) 0%, rgba(247, 245, 239, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Main Grid: Asymmetric Editorial Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '3.5rem',
          }}
          className="hero-main-layout"
        >
          {/* Left Column: Massive Editorial Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '680px' }}>
            {/* Eyebrow Pill */}
            <div style={{ display: 'inline-flex' }}>
              <span
                className="editorial-label"
                style={{
                  backgroundColor: 'rgba(77, 117, 78, 0.1)',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(77, 117, 78, 0.2)',
                  color: '#173F2B',
                }}
              >
                NATURAL AGRICULTURE • MODERN ORGANIC SOLUTIONS
              </span>
            </div>

            {/* Giant Headline */}
            <h1 className="hero-giant-title">
              CULTIVATING<br />
              <span className="italic-serif" style={{ color: '#4D754E', display: 'inline-block' }}>
                A Greener
              </span><br />
              TOMORROW.
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                lineHeight: 1.65,
                color: '#667066',
                fontWeight: 400,
                maxWidth: '560px',
              }}
            >
              Natural agricultural solutions designed to support healthier soil, resilient crops and more sustainable farming practices across India.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                marginTop: '0.5rem',
              }}
            >
              <button
                onClick={scrollToProducts}
                className="btn-primary-luxury"
                data-cursor="EXPLORE"
              >
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="btn-secondary-luxury"
                data-cursor="TALK"
              >
                <Sparkles size={15} color="#B59A62" />
                <span>Talk to NAMO</span>
              </button>
            </div>
          </div>

          {/* Right Column: Immersive Organic Masked Imagery & 3 Floating Frosted Cards */}
          <div style={{ position: 'relative' }}>
            {/* Main Visual Frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: '44px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(12, 41, 27, 0.2)',
                border: '1.5px solid rgba(255, 255, 255, 0.8)',
                minHeight: '480px',
                height: '100%',
                maxHeight: '560px',
              }}
            >
              <img
                src="/assets/sunset-farm.jpg"
                alt="Indian organic farmland at sunrise"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '480px',
                  objectFit: 'cover',
                  display: 'block',
                  transform: 'scale(1.02)',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onError={(e) => {
                  e.currentTarget.src = '/assets/farmers.jpg';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(23, 63, 43, 0.1) 0%, rgba(12, 41, 27, 0.55) 100%)',
                }}
              />

              {/* Bottom Quote Overlay inside image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  right: '2rem',
                  color: '#F7F5EF',
                }}
              >
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#DFD3B6', fontWeight: 700 }}>
                  Saving India’s Soil • Nourishing India’s Families
                </div>
                <div className="font-serif" style={{ fontSize: '1.45rem', marginTop: '0.35rem' }}>
                  Natural Solutions for a Brighter Tomorrow
                </div>
              </div>
            </div>

            {/* Floating Frosted Glass Card 1: Panchakavya */}
            <div
              className="glass-pill-card floating-card-1"
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                padding: '1rem 1.4rem',
                maxWidth: '240px',
                display: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(77, 117, 78, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#173F2B',
                  }}
                >
                  <Droplets size={14} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#173F2B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  PANCHAKAVYA
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#667066', lineHeight: 1.4 }}>
                Natural agricultural inputs based on 5 cow-derived components.
              </div>
            </div>

            {/* Floating Frosted Glass Card 2: Sustainable Agriculture */}
            <div
              className="glass-pill-card floating-card-2"
              style={{
                position: 'absolute',
                bottom: '-1.75rem',
                left: '-1.75rem',
                padding: '1.1rem 1.5rem',
                maxWidth: '260px',
                display: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(181, 154, 98, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B59A62',
                  }}
                >
                  <Leaf size={14} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#173F2B', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  SOIL HEALTH
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#667066', lineHeight: 1.4 }}>
                Restoring microbial ecosystems &amp; lowering water needs by up to 40%.
              </div>
            </div>
          </div>
        </div>

        {/* 10. Hero Luxury Factual Stat Bar */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(23, 63, 43, 0.08)',
            padding: '1.75rem 2.25rem',
            boxShadow: 'var(--shadow-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }}
          className="hero-stat-bar-grid"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4D754E' }}>
              01 • INPUT SOURCE
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#173F2B', fontFamily: 'var(--font-serif-display)' }}>
              Natural Inputs
            </div>
            <div style={{ fontSize: '0.78rem', color: '#667066' }}>
              Indigenous cow-derived formulation
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4D754E' }}>
              02 • FOUNDATION
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#173F2B', fontFamily: 'var(--font-serif-display)' }}>
              Panchakavya Based
            </div>
            <div style={{ fontSize: '0.78rem', color: '#667066' }}>
              Bio-stimulants &amp; natural pest shield
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4D754E' }}>
              03 • ECOLOGY
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#173F2B', fontFamily: 'var(--font-serif-display)' }}>
              Sustainable Practices
            </div>
            <div style={{ fontSize: '0.78rem', color: '#667066' }}>
              Soil biodiversity &amp; genetic resilience
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4D754E' }}>
              04 • ADAPTABILITY
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#173F2B', fontFamily: 'var(--font-serif-display)' }}>
              Field-Based Solutions
            </div>
            <div style={{ fontSize: '0.78rem', color: '#667066' }}>
              Universal crop &amp; climatic suitability
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-main-layout {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
          .floating-card-1 {
            display: block !important;
          }
          .floating-card-2 {
            display: block !important;
          }
        }
        @media (max-width: 992px) {
          .hero-stat-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .hero-stat-bar-grid {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
