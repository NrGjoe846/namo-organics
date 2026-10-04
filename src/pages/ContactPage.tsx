import React from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { ContactSection } from '../components/ContactSection';
import { BrandStatementSection } from '../components/BrandStatementSection';
import { Footer } from '../components/Footer';
import { Store, Building2, Truck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const partnershipPillars = [
    {
      title: 'Dealership & Distribution',
      tag: 'REGIONAL NETWORK',
      desc: 'Exclusive district-level distribution rights, high-margin commercial structures, and full marketing collateral support for agro-retailers.',
      icon: Store,
    },
    {
      title: 'FPO & Institutional Supply',
      tag: 'BULK PROCUREMENT',
      desc: 'Custom bulk fertilizer supply, direct farmer harvest procurement agreements, and on-field technical training workshops.',
      icon: Building2,
    },
    {
      title: 'Merchant Trading & Exports',
      tag: 'GLOBAL COMMERCE',
      desc: 'Certified organic product supply for domestic retail chains, supermarket networks, and international merchant export buyers.',
      icon: Truck,
    },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#F7F5EF' }}>
      <div className="film-grain" />
      <CustomCursor />
      <Navbar />

      <main>
        {/* Page Hero Header */}
        <PageHeroHeader
          tag="GET IN TOUCH"
          title="Let's Grow a"
          highlightText="Greener Future"
          subtitle="Connect with Natural Agriculture & Modern Organic Private Limited for product orders, regional dealership applications, FPO partnerships, and technical advisory."
          bgImage="/assets/farmers.jpg"
        />

        {/* 01. Partnership Categories Bar */}
        <section style={{ backgroundColor: '#F7F5EF', padding: '4rem 0 2rem' }}>
          <div className="container-custom">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.75rem',
              }}
              className="dealership-grid"
            >
              {partnershipPillars.map((p, idx) => {
                const IconComp = p.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '26px',
                      padding: '2.2rem 1.85rem',
                      border: '1px solid rgba(23, 63, 43, 0.08)',
                      boxShadow: '0 10px 25px -10px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          backgroundColor: '#0C291B',
                          color: '#93C639',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          backgroundColor: '#F7F5EF',
                          color: '#3B7E48',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {p.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#121E15',
                        marginBottom: '0.65rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: '#556557', lineHeight: 1.6, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 02. Official Contact Hub & Multi-Category Enquiry Form */}
        <ContactSection />

        {/* 03. Government & Regulatory Frameworks */}
        <BrandStatementSection />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
