import React from 'react';
import { Sparkles, Globe, Phone, Mail } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: '#173F2B',
        color: '#F5F1E7',
        fontSize: '0.78rem',
        padding: '0.5rem 1rem',
        borderBottom: '1px solid rgba(183, 154, 91, 0.25)',
        letterSpacing: '0.04em',
        position: 'relative',
        zIndex: 1001,
      }}
    >
      <div
        className="container-custom"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={13} color="#B79A5B" />
          <span style={{ fontWeight: 500 }}>
            Natural Solutions. Sustainable Agriculture. A Greener Tomorrow.
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            fontSize: '0.75rem',
            color: '#A8B89F',
          }}
        >
          <a
            href="tel:+919500829886"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F1E7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#A8B89F')}
          >
            <Phone size={12} color="#B79A5B" />
            +91 95008 29886
          </a>
          <a
            href="mailto:namoorganicpvtltd@gmail.com"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F1E7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#A8B89F')}
          >
            <Mail size={12} color="#B79A5B" />
            namoorganicpvtltd@gmail.com
          </a>
          <a
            href="https://www.namohydrogen.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#B79A5B',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontWeight: 600,
            }}
          >
            <Globe size={12} />
            namohydrogen.com
          </a>
        </div>
      </div>
    </div>
  );
};
