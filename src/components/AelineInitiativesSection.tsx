import React, { useState } from 'react';
import { ArrowRight, Leaf, ShieldCheck, Sprout, HeartPulse, Sparkles } from 'lucide-react';

interface AelineInitiativesSectionProps {
  onOpenEnquiry: () => void;
}

export const AelineInitiativesSection: React.FC<AelineInitiativesSectionProps> = ({ onOpenEnquiry }) => {
  const [subEmail, setSubEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const initiatives = [
    {
      tag: 'Bio-Fertilizers',
      title: 'Panchakavya Fertilizers, Bright Future',
      desc: 'Revitalizing degraded soil fertility with indigenous cow-derived bio-nutrients and billions of active soil microbes.',
      image: '/assets/NAMO Panchakavya Organic Fertilizer Bottle.png',
      stat: '40% Water Saved',
      icon: Sprout,
    },
    {
      tag: 'Crop Defense',
      title: 'Organic Pesticides, Better Harvest',
      desc: 'Eco-friendly, chemical-free crop protection shielding plants from pests and fungi while preserving pollinator bees.',
      image: '/assets/hero-products.jpg',
      stat: '100% Non-Toxic',
      icon: ShieldCheck,
    },
    {
      tag: 'Livestock Wellness',
      title: 'Algae Cattle Feed, Stronger Yield',
      desc: 'Pure marine algae bio-nutrition supporting indigenous dairy animal vitality, digestion, and natural milk quality.',
      image: '/assets/NAMO Algae Extract Bottle.png',
      stat: 'Vital Micronutrients',
      icon: HeartPulse,
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        onOpenEnquiry();
      }, 600);
    }
  };

  return (
    <section
      id="initiatives"
      style={{
        backgroundColor: '#F7F5EF',
        paddingTop: 'clamp(4rem, 7vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 7vw, 6.5rem)',
        position: 'relative',
        borderTop: '1px solid #E4EAE0',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '780px',
            marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
          }}
        >
          <div style={{ display: 'inline-flex' }}>
            <div className="aeline-tag">
              <Leaf size={13} color="#3B7E48" />
              <span>OUR INITIATIVES</span>
            </div>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              color: '#121E15',
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          >
            Real Actions. Real Impact.<br />
            <span style={{ color: '#2E7D32' }}>A Greener Future.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              color: '#5E6D62',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '680px',
            }}
          >
            Discover how we turn traditional agrarian wisdom into tangible field results through organic formulations that restore living soils, protect farmer livelihoods, and nourish communities.
          </p>
        </div>

        {/* 3 Full-Featured Initiative Cards Grid */}
        <div className="initiatives-cards-grid" style={{ marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          {initiatives.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="initiative-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  border: '1px solid #E4EAE0',
                  boxShadow: '0 10px 30px rgba(18, 30, 21, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Image Container */}
                  <div
                    style={{
                      height: 'clamp(170px, 22vw, 210px)',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      backgroundColor: '#F0EEE5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      marginBottom: '1.25rem',
                      padding: '1rem',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="initiative-img"
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.4s ease',
                      }}
                      onError={(e) => {
                        e.currentTarget.src = '/assets/sunset-farm.jpg';
                        e.currentTarget.style.objectFit = 'cover';
                        e.currentTarget.style.width = '100%';
                        e.currentTarget.style.height = '100%';
                      }}
                    />

                    {/* Tag Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.94)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 750,
                        color: '#121E15',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        border: '1px solid rgba(23, 63, 43, 0.08)',
                      }}
                    >
                      {item.tag}
                    </div>

                    {/* Stat Highlight Pill */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        right: '0.75rem',
                        backgroundColor: 'rgba(12, 41, 27, 0.9)',
                        color: '#93C639',
                        backdropFilter: 'blur(8px)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 750,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <IconComponent size={12} color="#93C639" />
                      <span>{item.stat}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
                      fontWeight: 750,
                      color: '#121E15',
                      marginBottom: '0.65rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#5E6D62',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={onOpenEnquiry}
                  className="initiative-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.75rem 1.15rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(59, 126, 72, 0.18)',
                    backgroundColor: 'rgba(59, 126, 72, 0.05)',
                    color: '#121E15',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span>Explore Initiative</span>
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: '#2E7D32',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArrowRight size={13} color="#FFFFFF" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Impact Pillars & Lime Newsletter Pill */}
        <div className="initiatives-impact-banner">
          {/* Left: 3 Fast Facts */}
          <div
            style={{
              backgroundColor: '#0C291B',
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#93C639',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.65rem',
                }}
              >
                <Sparkles size={13} color="#93C639" />
                <span>NATURAL FARMING IMPACT</span>
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                Restoring soil biology across thousands of acres.
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#93C639' }}>100%</div>
                <div style={{ fontSize: '0.75rem', color: '#B4C6BA' }}>Organic Inputs</div>
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#93C639' }}>40%</div>
                <div style={{ fontSize: '0.75rem', color: '#B4C6BA' }}>Water Conserved</div>
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#93C639' }}>21 Days</div>
                <div style={{ fontSize: '0.75rem', color: '#B4C6BA' }}>Drought Resilience</div>
              </div>
            </div>
          </div>

          {/* Right: Lime Updates & Connection Card */}
          <div
            style={{
              backgroundColor: '#D8EC9E',
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.25rem',
            }}
          >
            <div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)',
                  fontWeight: 800,
                  color: '#1A3B1F',
                  marginBottom: '0.4rem',
                  lineHeight: 1.2,
                }}
              >
                Stay Inspired. Stay Informed.
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#3A5C3F', lineHeight: 1.5, margin: 0 }}>
                Receive practical organic farming guides, Panchakavya advisory notes, and supply updates.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="initiatives-sub-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.88rem',
                  color: '#121E15',
                  backgroundColor: 'transparent',
                  padding: '0.4rem 0.6rem',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#173F2B',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.2s ease',
                  flexShrink: 0,
                }}
              >
                <span>{isSubscribed ? 'Subscribed!' : 'Subscribe'}</span>
                <ArrowRight size={14} />
              </button>
            </form>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                color: '#3A5C3F',
                fontWeight: 600,
              }}
            >
              <Leaf size={13} color="#2E7D32" />
              <span>Join 15,000+ farmers &amp; conscious agri-growers</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .initiatives-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .initiative-card:hover {
          transform: translateY(-6px);
          border-color: rgba(46, 125, 50, 0.3) !important;
          box-shadow: 0 20px 40px rgba(18, 30, 21, 0.1) !important;
        }

        .initiative-card:hover .initiative-img {
          transform: scale(1.05);
        }

        .initiative-card:hover .initiative-btn {
          background-color: #2E7D32 !important;
          color: #FFFFFF !important;
          border-color: #2E7D32 !important;
        }

        .initiative-card:hover .initiative-btn div {
          background-color: #FFFFFF !important;
        }

        .initiative-card:hover .initiative-btn div svg {
          color: #0C291B !important;
        }

        .initiatives-impact-banner {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .initiatives-sub-form {
          display: flex;
          align-items: center;
          background-color: #FFFFFF;
          border-radius: 9999px;
          padding: 0.35rem 0.35rem 0.35rem 0.85rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
          border: 1px solid rgba(255, 255, 255, 0.9);
          width: 100%;
        }

        @media (max-width: 1024px) {
          .initiatives-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          .initiatives-impact-banner {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .initiatives-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        @media (max-width: 440px) {
          .initiatives-sub-form {
            flex-direction: column !important;
            border-radius: 18px !important;
            padding: 0.6rem !important;
            gap: 0.5rem !important;
          }
          .initiatives-sub-form input {
            width: 100% !important;
            text-align: center !important;
            padding: 0.5rem !important;
          }
          .initiatives-sub-form button {
            width: 100% !important;
            padding: 0.75rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AelineInitiativesSection;
