import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';

export const CinematicTransition: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '2rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Expanding Rounded Photographic Canvas */}
        <div
          style={{
            position: 'relative',
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 30px 70px -15px rgba(12, 41, 27, 0.25)',
            border: '1px solid rgba(23, 63, 43, 0.1)',
            minHeight: '440px',
            maxHeight: '560px',
          }}
          className="cinematic-canvas-frame"
          data-cursor="EXPAND"
        >
          <img
            src="/assets/sunset-farm.jpg"
            alt="Lush sustainable agricultural farmland under golden sunlight"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '440px',
              objectFit: 'cover',
              display: 'block',
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
              background: 'linear-gradient(180deg, rgba(12, 41, 27, 0.2) 0%, rgba(12, 41, 27, 0.75) 100%)',
            }}
          />

          {/* Centered Editorial Typography Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2rem',
              color: '#F7F5EF',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#DFD3B6',
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Sparkles size={14} color="#B59A62" />
              <span>NATURAL AGRICULTURE • MODERN ORGANIC SOLUTIONS</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                color: '#F7F5EF',
                maxWidth: '850px',
                lineHeight: 1.12,
                marginBottom: '1rem',
              }}
            >
              "Where Ancient Agrarian Wisdom Meets Scientific Modern Purity."
            </h2>

            <p style={{ color: '#DFD3B6', fontSize: '1rem', maxWidth: '620px', lineHeight: 1.6 }}>
              Preserving India's living soil microbiomes through indigenous cow-derived formulations and field-tested organic practices.
            </p>
          </div>

          {/* Bottom subtle indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(247, 245, 239, 0.75)',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>SCROLL TO EXPLORE SUSTAINABILITY</span>
            <ArrowDown size={12} />
          </div>
        </div>
      </div>
    </section>
  );
};
