import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles, ArrowUp, ShieldCheck, Copy, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [gemCopied, setGemCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyGem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('6DCK260014897157');
    setGemCopied(true);
    setTimeout(() => setGemCopied(false), 2200);
  };

  return (
    <footer
      style={{
        backgroundColor: '#071A11',
        color: '#FCFAF4',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* 4 Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '3rem',
            marginBottom: '4rem',
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Positioning */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <img
                src="/assets/namo-logo.png"
                alt="NAMO Organic"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <span
                className="font-display"
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#FCFAF4',
                  letterSpacing: '-0.02em',
                }}
              >
                NAMO ORGANIC
              </span>
            </Link>

            <p style={{ fontSize: '0.88rem', color: '#C9D4CA', lineHeight: 1.6 }}>
              Natural Agriculture &amp; Modern Organic Private Limited is a professionally managed enterprise
              bringing ancient agrarian wisdom and modern biotechnology together.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#93C639',
                fontSize: '0.82rem',
                fontWeight: 600,
              }}
            >
              <Sparkles size={14} />
              <span>Saving India’s Soil. Nourishing India’s Families.</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#93C639',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              NAVIGATION
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', padding: 0, margin: 0 }}>
              <li>
                <Link to="/" style={{ color: '#C9D4CA', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#C9D4CA', textDecoration: 'none', transition: 'color 0.2s' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" style={{ color: '#C9D4CA', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Products &amp; Formulations
                </Link>
              </li>
              <li>
                <Link to="/sustainability" style={{ color: '#C9D4CA', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Sustainability &amp; Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#C9D4CA', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Contact &amp; Dealership
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Categories */}
          <div>
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#93C639',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              PRODUCT DOMAINS
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', padding: 0, margin: 0, color: '#C9D4CA' }}>
              <li>Panchakavya Fertilizers</li>
              <li>Organic Bio-Pesticides</li>
              <li>Algae Cattle Feed Supplements</li>
              <li>Cold-Pressed Native Oils</li>
              <li>Desi Cow A2 Ghee</li>
              <li>FPO Farm Procurement</li>
            </ul>
          </div>

          {/* Column 4: Chennai Headquarters */}
          <div>
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#93C639',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              REGISTERED OFFICE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem', color: '#C9D4CA' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="#93C639" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  5B, Jain's La Gardenia, Kothari Road,<br />
                  Nungambakkam, Chennai - 600034,<br />
                  Tamil Nadu, India.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={16} color="#93C639" style={{ flexShrink: 0 }} />
                <a href="tel:+919500829886" style={{ color: '#FCFAF4', textDecoration: 'none', fontWeight: 600 }}>
                  +91 95008 29886
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={16} color="#93C639" style={{ flexShrink: 0 }} />
                <a href="mailto:namoorganicpvtltd@gmail.com" style={{ color: '#C9D4CA', textDecoration: 'none' }}>
                  namoorganicpvtltd@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Portals, Copyright, Back to Top */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.8rem',
            color: '#8CA090',
          }}
        >
          <div>
            © {new Date().getFullYear()} Natural Agriculture &amp; Modern Organic Private Limited. All Rights Reserved.
          </div>

          <div
            className="footer-badges-group"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
          >
            {/* GeM Seller Badge */}
            <div
              className="gem-seller-badge"
              onClick={handleCopyGem}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCopyGem(e as any);
                }
              }}
              title="Click to copy official Government e-Marketplace (GeM) Seller ID"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '8px 18px',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                border: '1px solid rgba(147, 198, 57, 0.28)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                userSelect: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = '#93C639';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(147, 198, 57, 0.28)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span
                    style={{
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      color: '#93C639',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      lineHeight: 1.2,
                    }}
                  >
                    Govt e-Marketplace (GeM)
                  </span>
                  <span
                    style={{
                      fontSize: '0.52rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(147, 198, 57, 0.2)',
                      color: '#93C639',
                      padding: '1px 6px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(147, 198, 57, 0.4)',
                    }}
                  >
                    VERIFIED
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      lineHeight: 1.1,
                      color: '#FFFFFF',
                    }}
                  >
                    ID: 6DCK260014897157
                  </span>
                  {gemCopied ? (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: '#93C639',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px',
                      }}
                    >
                      <Check size={11} /> Copied!
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', color: '#8CA090' }}>
                      <Copy size={12} />
                    </span>
                  )}
                </div>
              </div>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(147, 198, 57, 0.15)',
                  border: '1px solid #93C639',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#93C639',
                }}
              >
                <ShieldCheck size={16} />
              </div>
            </div>

            <a
              href="https://www.namohydrogen.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '8px 18px',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              }}
              className="namo-hydrogen-badge"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = '#93C639';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left' }}>
                <span
                  style={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    color: '#93C639',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    lineHeight: 1.2,
                  }}
                >
                  Green Energy Division
                </span>
                <span
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    fontFamily: 'var(--font-sans)',
                    lineHeight: 1.1,
                    color: '#FFFFFF',
                  }}
                >
                  <span style={{ color: '#93C639' }}>NAMO</span> <span>HYDROGEN</span>
                </span>
              </div>
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#93C639',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#0C291B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#FCFAF4',
              padding: '0.65rem 1.25rem',
              minHeight: '44px',
              borderRadius: '9999px',
              cursor: 'pointer',
              fontSize: '0.82rem',
              touchAction: 'manipulation',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} color="#93C639" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
