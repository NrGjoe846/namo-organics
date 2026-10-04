import React from 'react';
import { Sparkles, Building2, Store, Users } from 'lucide-react';

export const BusinessEcosystemSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Organic Products', sub: 'Panchakavya & Algae bio-formulations' },
    { num: '02', title: 'Farmers & FPOs', sub: 'Field application & organic cultivation' },
    { num: '03', title: 'Farmer Procurement', sub: 'Procuring organic harvests directly' },
    { num: '04', title: 'Manufacturing Capabilities', sub: 'Modern processing & quality packaging' },
    { num: '05', title: 'Distributors & Dealers', sub: 'District & village supply networks' },
    { num: '06', title: 'E-commerce Channels', sub: 'Digital storefronts & urban delivery' },
    { num: '07', title: 'End Consumers', sub: 'Healthy, nourishing food for families' },
  ];

  const methods = [
    {
      num: '01',
      title: 'Appointment of Local Dealers & Distributors',
      desc: 'Selling products through local dealerships, agro-centers, and working in coordination with government horticulture and agricultural development departments and teams.',
      icon: Store,
      tag: 'Distribution Network',
    },
    {
      num: '02',
      title: 'FPO & Farmer Harvest Procurement',
      desc: 'We propose to support FPOs and farmers by procuring organically cultivated produce from farmers who use our organic fertilizers and marketing it through B2B, B2C and e-commerce channels.',
      icon: Users,
      tag: 'Direct Sourcing',
    },
    {
      num: '03',
      title: 'Direct Village-Level Selling Methods',
      desc: 'We directly market organic fertilizers to FPOs, progressive growers, and individuals interested in distributing or promoting these natural products across different villages.',
      icon: Building2,
      tag: 'Grassroots Outreach',
    },
  ];

  return (
    <section
      id="ecosystem"
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
            <span>FROM FARM TO MARKET</span>
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
            Connecting Natural Products With the <span style={{ color: '#3B7E48' }}>Agricultural Ecosystem</span>
          </h2>

          <div
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#B79A5B',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginTop: '0.75rem',
            }}
          >
            People • Partnerships • Products • Prosperity
          </div>

          <p
            style={{
              color: '#556557',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginTop: '1rem',
            }}
          >
            Our business ecosystem brings together organic products, agricultural stakeholders,
            manufacturing, procurement, distribution and modern e-commerce.
          </p>
        </div>

        {/* 7-Stage End-to-End Value Chain Flow Container */}
        <div
          style={{
            backgroundColor: '#F7F5EF',
            border: '1px solid rgba(23, 63, 43, 0.1)',
            borderRadius: '32px',
            padding: '2.5rem 2rem',
            marginBottom: '4.5rem',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.03)',
          }}
        >
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#3B7E48',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            END-TO-END REVENUE & VALUE CHAIN
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '0.75rem',
            }}
            className="ecosystem-flow-grid"
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '1.25rem 1rem',
                  border: '1px solid rgba(23, 63, 43, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: idx === 0 || idx === 6 ? '#0C291B' : '#F0EEE5',
                    color: idx === 0 || idx === 6 ? '#93C639' : '#3B7E48',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.65rem',
                  }}
                >
                  {step.num}
                </span>

                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#121E15',
                    lineHeight: 1.25,
                    marginBottom: '0.35rem',
                  }}
                >
                  {step.title}
                </div>

                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#667067',
                    lineHeight: 1.4,
                  }}
                >
                  {step.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Revenue & Selling Strategy Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="methods-grid"
        >
          {methods.map((m, idx) => {
            const IconComp = m.icon;
            const isDark = idx === 1;
            return (
              <div
                key={m.num}
                style={{
                  backgroundColor: isDark ? '#0C291B' : '#F7F5EF',
                  color: isDark ? '#FFFFFF' : '#121E15',
                  borderRadius: '28px',
                  border: isDark ? '1px solid #0C291B' : '1px solid rgba(23, 63, 43, 0.08)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isDark ? '0 20px 45px -10px rgba(12, 41, 27, 0.35)' : '0 8px 24px -6px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease',
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
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: isDark ? '#93C639' : '#FFFFFF',
                        color: isDark ? '#0C291B' : '#3B7E48',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                      }}
                    >
                      {m.num}
                    </span>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.12)' : '#FFFFFF',
                        color: isDark ? '#93C639' : '#3B7E48',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      backgroundColor: isDark ? 'rgba(147, 198, 57, 0.2)' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    }}
                  >
                    <IconComp size={22} color={isDark ? '#93C639' : '#3B7E48'} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: isDark ? '#FFFFFF' : '#121E15',
                      marginBottom: '0.85rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {m.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      color: isDark ? '#C9D4CA' : '#556557',
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessEcosystemSection;
