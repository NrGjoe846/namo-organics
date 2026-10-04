import React from 'react';
import {
  Package,
  Layers,
  Laptop,
  Users2,
  Apple,
  ShoppingCart,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      num: '01',
      title: 'Organic Fertilizer Supply',
      desc: 'High-quality, eco-friendly fertilizers for healthier crops and better yields.',
      icon: Package,
    },
    {
      num: '02',
      title: 'Organic & Agri-Based Projects',
      desc: 'End-to-end support for sustainable agriculture initiatives and farm conversions.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Agricultural Software',
      desc: 'Smart digital solutions for modern, data-driven and efficient farming.',
      icon: Laptop,
    },
    {
      num: '04',
      title: 'Workshops & Exhibitions',
      desc: 'Spreading knowledge and organic fertilizer awareness for a greener future.',
      icon: Users2,
    },
    {
      num: '05',
      title: 'Organic Products',
      desc: 'Pure, natural, and chemical-free products for healthier life and food security.',
      icon: Apple,
    },
    {
      num: '06',
      title: 'E-commerce Portal',
      desc: 'Bringing organic products closer to everyone, anytime, anywhere digitally.',
      icon: ShoppingCart,
    },
    {
      num: '07',
      title: 'B2B & B2C Integration',
      desc: 'Connecting farmers, businesses and consumers for a sustainable ecosystem.',
      icon: Building2,
    },
    {
      num: '08',
      title: 'Farmer Advisory Services',
      desc: 'Expert guidance for better practices, soil management, and higher productivity.',
      icon: GraduationCap,
    },
    {
      num: '09',
      title: 'Improving Soil Fertility',
      desc: 'Nourishing soil today for a more productive, biologically rich tomorrow.',
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="approach"
      style={{
        backgroundColor: '#F5F1E7',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        borderTop: '1px solid #DFD3B6',
      }}
    >
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="editorial-eyebrow" style={{ marginBottom: '0.6rem' }}>
            FOR HEALTHY SOIL • THRIVING FARMERS • A GREENER TOMORROW
          </span>
          <h2
            className="font-heading"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', color: '#173F2B', marginTop: '0.25rem' }}
          >
            Our Comprehensive Services
          </h2>
          <p style={{ color: '#667067', fontSize: '1rem', marginTop: '0.5rem' }}>
            Supporting technical advancement and field-based agricultural productivity across nine specialized service domains.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
          className="services-grid"
        >
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.num}
                onClick={() => onSelectService && onSelectService(srv.title)}
                style={{
                  backgroundColor: '#FCFAF4',
                  borderRadius: '16px',
                  border: '1px solid rgba(23, 63, 43, 0.1)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
                className="service-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#3F6B45';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(23, 63, 43, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(23, 63, 43, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
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
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: '#173F2B',
                        color: '#FCFAF4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: '#B79A5B',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {srv.num}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#173F2B',
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#667067', lineHeight: 1.6 }}>
                    {srv.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginTop: '1.25rem',
                    color: '#3F6B45',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(63, 107, 69, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
