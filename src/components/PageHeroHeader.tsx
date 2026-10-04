import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroHeaderProps {
  tag: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  bgImage?: string;
}

export const PageHeroHeader: React.FC<PageHeroHeaderProps> = ({
  tag,
  title,
  highlightText,
  subtitle,
  bgImage = '/assets/hero-bg.jpg',
}) => {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#0C291B',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      {/* Background Image with Deep Botanical Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
          transform: 'scale(1.03)',
          transition: 'transform 10s ease-out',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(59, 126, 72, 0.45) 0%, rgba(12, 41, 27, 0.85) 65%, rgba(12, 41, 27, 0.98) 100%)',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Breadcrumb / Tag */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <Link to="/" style={{ color: '#C9D4CA', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}>
              Home
            </Link>
            <span style={{ color: '#93C639', fontSize: '0.8rem' }}>/</span>
            <div
              className="aeline-tag"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#93C639',
                border: '1px solid rgba(147, 198, 57, 0.3)',
              }}
            >
              <Sparkles size={12} color="#93C639" />
              <span>{tag}</span>
            </div>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              color: '#FFFFFF',
            }}
          >
            {title}{' '}
            {highlightText && <span style={{ color: '#93C639' }}>{highlightText}</span>}
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: '#C9D4CA',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeroHeader;
