import React from 'react';
import { TrendingUp, ShoppingBag, Wheat, Info, Sparkles } from 'lucide-react';

export const MarketContextSection: React.FC = () => {
  return (
    <section
      id="market-context"
      style={{
        backgroundColor: '#0C291B',
        color: '#FCFAF4',
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147, 198, 57, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <div className="aeline-tag" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#93C639', border: '1px solid rgba(147, 198, 57, 0.3)', marginBottom: '1.25rem' }}>
            <Sparkles size={13} color="#93C639" />
            <span>THE AGRICULTURAL LANDSCAPE</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 800,
            }}
          >
            Agriculture Is Entering a <span style={{ color: '#93C639' }}>New Era</span>
          </h2>

          <p
            style={{
              color: '#C9D4CA',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginTop: '1.25rem',
            }}
          >
            India's agricultural ecosystem continues to evolve alongside growing domestic demand,
            increasing exports and a stronger focus on sustainable and organic farming. India's growing
            population, rising incomes and increasing preference for healthy food are key drivers of the sector.
          </p>
        </div>

        {/* 3 Dark Green Editorial Statistics Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
          className="market-stats-grid"
        >
          {/* Stat 1 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '28px',
              border: '1px solid rgba(147, 198, 57, 0.3)',
              padding: '2.8rem 2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(147, 198, 57, 0.2)',
                    color: '#93C639',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TrendingUp size={24} />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#93C639',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(147, 198, 57, 0.15)',
                    letterSpacing: '0.05em',
                  }}
                >
                  BY 2026 ESTIMATE
                </span>
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 4vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#93C639',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                US $24B
              </div>

              <div
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                }}
              >
                Agricultural Sector by 2026
              </div>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#C9D4CA',
                  lineHeight: 1.65,
                }}
              >
                India's agricultural sector is estimated in the brochure to reach US $24 billion by 2026,
                driven by sustainable farming practices and export expansion.
              </p>
            </div>

            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.8rem',
                color: '#93C639',
                fontWeight: 600,
              }}
            >
              National Sector Trajectory
            </div>
          </div>

          {/* Stat 2 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '2.8rem 2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ShoppingBag size={24} />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    letterSpacing: '0.05em',
                  }}
                >
                  DOMESTIC RETAIL
                </span>
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 4vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                70%
              </div>

              <div
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                }}
              >
                Retail Share in Food & Grocery
              </div>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#C9D4CA',
                  lineHeight: 1.65,
                }}
              >
                The Indian food and grocery market is the sixth largest in the world, with retail
                accounting for 70% of total sales across urban and rural markets.
              </p>
            </div>

            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.8rem',
                color: '#C9D4CA',
                fontWeight: 600,
              }}
            >
              6th Largest Market Globally
            </div>
          </div>

          {/* Stat 3 */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '2.8rem 2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Wheat size={24} />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    letterSpacing: '0.05em',
                  }}
                >
                  KHARIF HARVEST
                </span>
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 4vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                164.7M
              </div>

              <div
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                }}
              >
                Tonnes Foodgrain Production
              </div>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#C9D4CA',
                  lineHeight: 1.65,
                }}
              >
                Total foodgrain production in the country is estimated at 164.7 million tonnes in FY26
                (Kharif, First Advance Estimates) according to the brochure.
              </p>
            </div>

            <div
              style={{
                marginTop: '1.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.8rem',
                color: '#C9D4CA',
                fontWeight: 600,
              }}
            >
              FY26 Kharif Estimates
            </div>
          </div>
        </div>

        {/* Market Context Note */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Info size={20} color="#93C639" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.86rem', color: '#C9D4CA', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: '#FFFFFF' }}>Market Context Note:</strong> Figures presented as
            contextual macroeconomic information from the NAMO Organic corporate brochure, illustrating
            Indian agricultural scale and national growth trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketContextSection;
