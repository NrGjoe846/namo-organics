import React from 'react';
import { TrendingUp, ShoppingBag, Wheat, Info, Sparkles } from 'lucide-react';

export const MarketContextSection: React.FC = () => {
  return (
    <section
      id="market-context"
      style={{
        backgroundColor: '#0C291B',
        color: '#FCFAF4',
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
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
        <div style={{ maxWidth: '820px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div
            className="aeline-tag"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: '#93C639',
              border: '1px solid rgba(147, 198, 57, 0.3)',
              marginBottom: '1.25rem',
            }}
          >
            <Sparkles size={13} color="#93C639" />
            <span>THE AGRICULTURAL LANDSCAPE</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 800,
              margin: 0,
            }}
          >
            Agriculture Is Entering a <span style={{ color: '#93C639' }}>New Era</span>
          </h2>

          <p
            style={{
              color: '#C9D4CA',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
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
        <div className="market-stats-grid" style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          {/* Stat 1 */}
          <div className="market-stat-card card-highlighted">
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
                  className="market-icon-box"
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
                    fontSize: '0.72rem',
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
                  fontSize: 'clamp(2.6rem, 4.5vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#93C639',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                US $24B
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
                  fontWeight: 750,
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
                  margin: 0,
                }}
              >
                India's agricultural sector is estimated in the corporate brochure to reach US $24 billion by 2026,
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
          <div className="market-stat-card">
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
                  className="market-icon-box"
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
                    fontSize: '0.72rem',
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
                  fontSize: 'clamp(2.6rem, 4.5vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                70%
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
                  fontWeight: 750,
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                }}
              >
                Retail Share in Food &amp; Grocery
              </div>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#C9D4CA',
                  lineHeight: 1.65,
                  margin: 0,
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
          <div className="market-stat-card">
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
                  className="market-icon-box"
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
                    fontSize: '0.72rem',
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
                  fontSize: 'clamp(2.6rem, 4.5vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                164.7M
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)',
                  fontWeight: 750,
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
                  margin: 0,
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
            padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(1.2rem, 3vw, 1.75rem)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <Info size={20} color="#93C639" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.86rem', color: '#C9D4CA', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: '#FFFFFF' }}>Market Context Note:</strong> Figures presented as
            contextual macroeconomic information from the NAMO Organic corporate brochure, illustrating
            Indian agricultural scale and national growth trends.
          </p>
        </div>
      </div>

      <style>{`
        .market-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .market-stat-card {
          background-color: rgba(255, 255, 255, 0.04);
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: clamp(1.75rem, 3.5vw, 2.8rem) clamp(1.4rem, 3vw, 2.2rem);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .market-stat-card.card-highlighted {
          border-color: rgba(147, 198, 57, 0.35);
        }

        .market-stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(147, 198, 57, 0.5) !important;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.45);
        }

        .market-stat-card:hover .market-icon-box {
          transform: scale(1.1) rotate(4deg);
        }

        .market-icon-box {
          transition: transform 0.3s ease;
        }

        @media (max-width: 1024px) {
          .market-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .market-stats-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MarketContextSection;
