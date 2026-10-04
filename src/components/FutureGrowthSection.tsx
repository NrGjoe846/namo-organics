import React from 'react';
import { TrendingUp, Factory, ShoppingCart, Users, Sparkles } from 'lucide-react';

export const FutureGrowthSection: React.FC = () => {
  const roadmap = [
    {
      num: '01',
      title: 'Greater Investment',
      tag: 'CAPITAL & STRATEGY',
      desc: 'Our expansion strategy will be supported by increased investment, new market opportunities and measurable business growth across agrarian regions.',
      icon: TrendingUp,
    },
    {
      num: '02',
      title: 'Manufacturing Capabilities',
      tag: 'INFRASTRUCTURE',
      desc: 'We intend to attract further investment to expand our manufacturing capabilities, improve operational efficiency and broaden our organic bio-formulation range.',
      icon: Factory,
    },
    {
      num: '03',
      title: 'Farmer Procurement',
      tag: 'FARMER PARTNERSHIPS',
      desc: 'We see significant potential in procuring produce from farmers who have adopted our organic fertilizers and sustainable farming solutions, strengthening direct farmer market linkages.',
      icon: Users,
    },
    {
      num: '04',
      title: 'E-commerce Expansion',
      tag: 'RETAIL SCALING',
      desc: 'We recognise the significant potential of entering the retail market through an e-commerce platform, reaching a wider consumer base and establishing NAMO Organic as a household name.',
      icon: ShoppingCart,
    },
  ];

  return (
    <section
      id="growth"
      style={{
        backgroundColor: '#0C291B',
        color: '#FCFAF4',
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background styling */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147, 198, 57, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
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
            <span>LOOKING AHEAD • PEOPLE | PLANET | PROSPERITY</span>
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
            Building the <span style={{ color: '#93C639' }}>Next Generation</span> of Natural Agriculture
          </h2>

          <p
            style={{
              color: '#C9D4CA',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginTop: '1.25rem',
            }}
          >
            At NAMO ORGANIC, we are committed to scaling our impact through strategic investments,
            innovation, strong farmer partnerships and wider market access for a healthier planet and
            prosperous communities.
          </p>
        </div>

        {/* 4 Strategic Growth Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
          className="growth-cards-grid"
        >
          {roadmap.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.num}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '26px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '2.4rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
                  transition: 'transform 0.3s ease',
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
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(147, 198, 57, 0.2)',
                        color: '#93C639',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.num}
                    </span>

                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#93C639',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <IconComp size={22} color="#FFFFFF" />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      color: '#C9D4CA',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Pill Commitment Bar */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '1.25rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem 2rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#FFFFFF',
            }}
          >
            <span style={{ color: '#93C639' }}>•</span>
            <span>Invest for Growth</span>
            <span style={{ color: '#93C639' }}>•</span>
            <span>Innovate for Better Solutions</span>
            <span style={{ color: '#93C639' }}>•</span>
            <span>Empower Our Farmers</span>
            <span style={{ color: '#93C639' }}>•</span>
            <span>Expand for a Greener Planet</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGrowthSection;
