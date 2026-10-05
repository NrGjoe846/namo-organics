import React from 'react';
import { Users, Building2, Truck, Heart, ShoppingBag, Globe, Check, Sparkles, Sprout } from 'lucide-react';

export const TargetCustomersSection: React.FC = () => {
  const segments = [
    {
      title: 'Farmers',
      tag: 'GRASSROOTS AGRICULTURE',
      desc: 'Supporting farming communities with natural, Panchakavya-based inputs that restore soil fertility, lower chemical costs, and improve crop resilience.',
      points: ['Soil revitalization', 'Reduced water requirements', 'Dependable crop yield'],
      icon: Users,
      image: '/assets/farmers.jpg',
    },
    {
      title: 'FPOs (Farmer Producer Organisations)',
      tag: 'COLLECTIVE EMPOWERMENT',
      desc: 'Partnering with agricultural collectives to supply bulk organic fertilizers, offer technical advisory, and procure organically cultivated harvests.',
      points: ['Bulk input supply', 'Harvest procurement partnerships', 'Agronomic training'],
      icon: Building2,
      image: '/assets/sunset-farm.jpg',
    },
    {
      title: 'Distributors & Dealers',
      tag: 'SUPPLY NETWORK',
      desc: 'Establishing local dealership networks across districts and villages, expanding availability of high-grade bio-fertilizers and pest solutions.',
      points: ['Regional exclusivity', 'Competitive margin structures', 'Marketing & technical support'],
      icon: Truck,
      image: '/assets/ecosystem-distributors.jpg',
    },
    {
      title: 'Consumers',
      tag: 'FAMILY NUTRITION',
      desc: 'Connecting conscious consumers with healthy, chemical-free farm products, cold-pressed oils, and desi cow ghee.',
      points: ['100% natural foods', 'Nourishing Indian families', 'Direct farm transparency'],
      icon: Heart,
      image: '/assets/ecosystem-consumers.jpg',
    },
    {
      title: 'B2C Channels',
      tag: 'DIRECT TO CONSUMER',
      desc: 'Serving retail households directly through packaged organic staples, edible oils, and daily kitchen essentials.',
      points: ['Premium packaging', 'Convenient home delivery', 'Pure native ingredients'],
      icon: ShoppingBag,
      image: '/assets/ecosystem-b2c.jpg',
    },
    {
      title: 'E-commerce & Digital',
      tag: 'OMNICHANNEL REACH',
      desc: 'Expanding digital access to certified organic fertilizers, pest solutions, and food products across India.',
      points: ['24/7 web access', 'Nationwide logistics', 'Transparent product information'],
      icon: Globe,
      image: '/assets/ecosystem-ecommerce.jpg',
    },
  ];

  return (
    <section
      id="customers"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        borderBottom: '1px solid rgba(23, 63, 43, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div className="aeline-tag" style={{ margin: '0 auto 1.25rem' }}>
            <Sparkles size={13} color="#3B7E48" />
            <span>OUR ECOSYSTEM</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              color: '#121E15',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 800,
            }}
          >
            Built for the <span style={{ color: '#3B7E48' }}>Agricultural Ecosystem</span>
          </h2>

          <p
            style={{
              color: '#556557',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginTop: '1.25rem',
            }}
          >
            NAMO Organic connects products, agricultural stakeholders and modern channels to create a broader ecosystem around natural agriculture.
          </p>
        </div>

        {/* 6 Segments Ecosystem Grid with Photography */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
            marginBottom: '4rem',
          }}
          className="customers-grid"
        >
          {segments.map((seg, idx) => {
            const IconComp = seg.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F7F5EF',
                  borderRadius: '26px',
                  border: '1px solid rgba(23, 63, 43, 0.08)',
                  padding: '2rem 1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  {/* Top Image + Icon Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img
                        src={seg.image}
                        alt={seg.title}
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '14px',
                          objectFit: 'cover',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                        }}
                      />
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '10px',
                          backgroundColor: '#FFFFFF',
                          color: '#3B7E48',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                        }}
                      >
                        <IconComp size={16} color="#3B7E48" />
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '9999px',
                        backgroundColor: '#FFFFFF',
                        color: '#3B7E48',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {seg.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#121E15',
                      marginBottom: '0.65rem',
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {seg.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: '#556557',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {seg.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1.15rem',
                    borderTop: '1px solid rgba(23, 63, 43, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                  }}
                >
                  {seg.points.map((pt, pidx) => (
                    <div
                      key={pidx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.82rem',
                        color: '#121E15',
                        fontWeight: 600,
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(59, 126, 72, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Check size={10} color="#3B7E48" strokeWidth={3} />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Banner with Sunset Farm Background */}
        <div
          style={{
            backgroundColor: '#0C291B',
            borderRadius: '28px',
            padding: '2.5rem 3rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            boxShadow: '0 20px 40px -10px rgba(12, 41, 27, 0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="customers-banner-flex"
        >
          {/* Subtle Background Farm Image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/assets/sunset-farm.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.15,
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#93C639',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              TOGETHER FOR A GREENER TOMORROW
            </div>
            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                color: '#FFFFFF',
                fontWeight: 800,
                marginBottom: '0.4rem',
              }}
            >
              Partnering With Indian Farmers & FPOs
            </h3>
            <p style={{ color: '#C9D4CA', fontSize: '0.95rem', margin: 0, maxWidth: '720px' }}>
              Empowering smallholder farmers and FPO leadership with organic crop nutrition, reliable
              advisory, and sustainable market linkage for long-term rural prosperity.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexShrink: 0,
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(147, 198, 57, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Sprout size={26} color="#93C639" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetCustomersSection;
