import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMobileClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '1rem',
          left: 0,
          width: '100%',
          zIndex: 1000,
          pointerEvents: 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="container-custom" style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '1240px',
              height: '68px',
              borderRadius: '9999px',
              backgroundColor: isScrolled
                ? 'rgba(247, 245, 239, 0.92)'
                : 'rgba(247, 245, 239, 0.78)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: isScrolled
                ? '0 16px 40px -10px rgba(12, 41, 27, 0.12)'
                : '0 8px 24px -6px rgba(12, 41, 27, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 1.75rem',
              pointerEvents: 'auto',
              transition: 'all 0.4s ease',
            }}
          >
            {/* Left: Brand Identity */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
              }}
              data-cursor="NAMO"
            >
              <img
                src="/assets/namo-logo.png"
                alt="NAMO Organic"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0C291B',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  NAMO ORGANIC
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#3B7E48',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                  }}
                >
                  Natural Agriculture
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
              className="hidden lg:flex"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    style={{
                      padding: '0.5rem 1.1rem',
                      borderRadius: '9999px',
                      fontSize: '0.86rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? '#0C291B' : '#556557',
                      backgroundColor: isActive ? 'rgba(59, 126, 72, 0.12)' : 'transparent',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      border: isActive ? '1px solid rgba(59, 126, 72, 0.2)' : '1px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#0C291B';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#556557';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Desktop CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden sm:flex">
              <button
                onClick={onOpenEnquiry}
                className="aeline-btn-lime"
                style={{
                  fontSize: '0.82rem',
                  padding: '0.55rem 1.35rem',
                  cursor: 'pointer',
                }}
                data-cursor="Enquire"
              >
                <span>Enquire Now</span>
                <Sparkles size={14} />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(23, 63, 43, 0.12)',
                color: '#0C291B',
                cursor: 'pointer',
              }}
              className="lg:hidden"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Botanical Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: '#0C291B',
            color: '#FCFAF4',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6rem 2rem 2.5rem',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#93C639',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              MENU
            </span>

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleMobileClick}
                  className="font-display"
                  style={{
                    fontSize: '1.85rem',
                    fontWeight: 700,
                    color: isActive ? '#93C639' : '#FCFAF4',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && <span style={{ fontSize: '0.9rem', color: '#93C639' }}>●</span>}
                </Link>
              );
            })}
          </div>

          <div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="aeline-btn-lime"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '0.95rem',
                marginBottom: '1.5rem',
              }}
            >
              <span>Enquire Now</span>
              <Sparkles size={16} />
            </button>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                fontSize: '0.82rem',
                color: '#C9D4CA',
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <Phone size={14} color="#93C639" />
                <span>+91 95008 29886</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#93C639' }}>
                Saving India’s Soil. Nourishing India’s Families.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
