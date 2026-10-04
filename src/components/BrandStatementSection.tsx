import React from 'react';
import { Sparkles } from 'lucide-react';

export const BrandStatementSection: React.FC = () => {
  const recognitions = [
    { name: 'MSME', label: 'Micro, Small & Medium Enterprises' },
    { name: 'FSSAI', label: 'Food Safety & Standards Authority' },
    { name: 'GeM', label: 'Government e Marketplace' },
    { name: 'APEDA', label: 'Agricultural Products Export Authority' },
    { name: '#startupindia', label: 'Department for Promotion of Industry' },
  ];

  return (
    <section
      style={{
        backgroundColor: '#F7F5EF',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        borderBottom: '1px solid rgba(23, 63, 43, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Editorial Big Typography Statement */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto 4.5rem',
            textAlign: 'center',
          }}
        >
          <div className="aeline-tag" style={{ margin: '0 auto 1.25rem' }}>
            <Sparkles size={13} color="#3B7E48" />
            <span>CORE CAMPAIGN STATEMENT</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              color: '#121E15',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 800,
              marginBottom: '1.5rem',
            }}
          >
            Together for a <span style={{ color: '#3B7E48' }}>Greener Tomorrow</span>
          </h2>

          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
              lineHeight: 1.8,
              color: '#3B7E48',
              fontStyle: 'italic',
              maxWidth: '840px',
              margin: '0 auto 2.5rem',
            }}
          >
            "From the soil beneath our feet to the food on our tables, agriculture connects us all.
            We are working toward a future where natural resources, agricultural knowledge and modern
            solutions come together to support a more sustainable agricultural ecosystem."
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#0C291B',
              color: '#FCFAF4',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              fontSize: '0.92rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              boxShadow: '0 12px 28px -6px rgba(12, 41, 27, 0.3)',
            }}
          >
            <Sparkles size={16} color="#93C639" />
            <span>Saving India’s Soil. Nourishing India’s Families.</span>
          </div>
        </div>

        {/* Official Frameworks & Compliance Badges */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            border: '1px solid rgba(23, 63, 43, 0.1)',
            padding: '2.5rem 2rem',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.03)',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#3B7E48',
              textAlign: 'center',
              marginBottom: '1.75rem',
            }}
          >
            GOVERNMENT & REGULATORY FRAMEWORKS REPRESENTED
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1.25rem',
            }}
            className="recognitions-grid"
          >
            {recognitions.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem 1rem',
                  borderRadius: '18px',
                  backgroundColor: '#F7F5EF',
                  border: '1px solid rgba(23, 63, 43, 0.08)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#0C291B',
                    marginBottom: '0.35rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#667067',
                    lineHeight: 1.35,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatementSection;
