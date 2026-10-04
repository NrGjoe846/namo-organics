import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Check, Bone } from 'lucide-react';

interface PetProduct {
  id: string;
  name: string;
  category: 'canine' | 'feline' | 'performance' | 'supplements' | 'treats';
  categoryLabel: string;
  badge: string;
  tag: string;
  desc: string;
  features: string[];
  image: string;
  species: 'Dogs' | 'Cats' | 'Dogs & Cats' | 'Breeder Care';
}

interface PetNutritionSectionProps {
  onOpenEnquiryWithProduct?: (productName: string) => void;
}

export const PetNutritionSection: React.FC<PetNutritionSectionProps> = ({
  onOpenEnquiryWithProduct,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All 10 Pet Formulations' },
    { id: 'canine', label: 'Canine Nutrition' },
    { id: 'feline', label: 'Feline Care' },
    { id: 'performance', label: 'Breeder & Performance' },
    { id: 'supplements', label: 'Omega & Weight Gain' },
    { id: 'treats', label: 'Natural Chews & Treats' },
  ];

  const petProducts: PetProduct[] = [
    {
      id: 'elite-adult-dogs',
      name: 'NAMO Elite for Adult Dogs',
      category: 'canine',
      categoryLabel: 'CANINE COMPLETE NUTRITION',
      badge: 'BIO-ACTIVE COMPLETE DIET',
      tag: 'Bio-Available Proteins • Digestive Support • Active Immunity',
      desc: 'Holistic daily diet for adult dogs crafted with bio-available natural proteins, wholesome grains, and botanical antioxidants to support strong muscle tone, digestive health, and everyday vitality.',
      features: [
        'Balanced protein-to-fat ratio for adult maintenance',
        'Fortified with prebiotics and natural fiber for gut flora',
        'Zero artificial colors, synthetic flavors, or chemical binders',
        'Supports robust immune defense and cardiovascular health',
      ],
      image: '/Pet Product/NAMO Elite for Adult Dogs.png',
      species: 'Dogs',
    },
    {
      id: 'elite-cats',
      name: 'NAMO Elite for Cats',
      category: 'feline',
      categoryLabel: 'FELINE GRAIN-FREE CARE',
      badge: 'TAURINE FORTIFIED',
      tag: 'Grain-Free • Taurine Enriched • Urinary Tract Balance',
      desc: 'Complete feline nutritional formula crafted with high-purity animal proteins and essential taurine. Designed to maintain optimal urinary pH, heart function, and lean muscle mass.',
      features: [
        '100% grain-free recipe for sensitive feline digestive systems',
        'Enriched with essential marine taurine for heart and ocular health',
        'Controlled mineral levels for urinary tract wellness',
        'Omega fatty acids for a soft, glossy, shed-resistant coat',
      ],
      image: '/Pet Product/NAMO Elite for Cats.png',
      species: 'Cats',
    },
    {
      id: 'elite-mother-baby',
      name: 'NAMO Elite for Mother & Baby',
      category: 'canine',
      categoryLabel: 'MATERNAL & WEANING CARE',
      badge: 'HIGH-CALORIC DENSITY',
      tag: 'Gestation & Lactation • Early Puppy Weaning • DHA Enriched',
      desc: 'High-density specialized formulation created for pregnant and nursing mother dogs as well as developing puppies during weaning and early skeletal growth stages.',
      features: [
        'Concentrated energy & protein for maternal recovery and lactation',
        'Micro-kibble texture suitable for tender puppy mouths during weaning',
        'Enriched with DHA for brain development and cognitive learning',
        'Bio-available calcium and phosphorus for strong skeletal growth',
      ],
      image: '/Pet Product/NAMO Elite for Mother & Baby.png',
      species: 'Dogs',
    },
    {
      id: 'xcite-stud-dogs',
      name: 'NAMO Xcite for Stud Dogs',
      category: 'performance',
      categoryLabel: 'BREEDER PERFORMANCE & VITALITY',
      badge: 'REPRODUCTIVE STAMINA',
      tag: 'Peak Muscle Stamina • Antioxidant Fortified • Stud Care',
      desc: 'Targeted nutritional booster formulated with specialized amino acids, zinc, and bio-active botanicals to sustain peak reproductive health, stamina, and muscular vitality in stud dogs.',
      features: [
        'Optimized zinc and selenium complexes for reproductive health',
        'L-carnitine and amino acids for sustained energy and endurance',
        'Powerful natural antioxidants protecting against cellular stress',
        'Supports joint flexibility and active cardiovascular stamina',
      ],
      image: '/Pet Product/NAMO Xcite for Stud Dogs.png',
      species: 'Breeder Care',
    },
    {
      id: 'xcite-lactating-females',
      name: 'NAMO Xcite for Lactating Females',
      category: 'performance',
      categoryLabel: 'MATERNAL RECOVERY & MILK SUPPORT',
      badge: 'LACTATION BOOST',
      tag: 'Rich Milk Production • Calcium Replenishment • Postpartum Wellness',
      desc: 'Enriched maternal supplement designed to support wholesome milk volume, calcium equilibrium, and swift nutritional recovery during demanding nursing periods.',
      features: [
        'Promotes rich, abundant milk output for healthy puppy litters',
        'Replenishes maternal calcium, magnesium, and essential electrolytes',
        'Accelerates postpartum weight and energy recovery',
        'Gentle botanical blend soothing digestive tract during lactation',
      ],
      image: '/Pet Product/NAMO Xcite for Lactating Females.png',
      species: 'Breeder Care',
    },
    {
      id: 'addon-healthy-cats',
      name: 'NAMO Pets Addon for Healthy Cats',
      category: 'feline',
      categoryLabel: 'FELINE WELLNESS SUPPLEMENT',
      badge: 'SHINY COAT & DIGESTION',
      tag: 'Probiotic Enzymes • Fur Softness • Vital Organ Support',
      desc: 'Daily nutritional booster powder designed to be mixed directly into food. Enhances feline digestive enzyme efficiency, reduces hairballs, and produces a lustrous, radiant coat.',
      features: [
        'Active digestive enzymes preventing hairball formation',
        'Biotin, zinc, and essential fatty acids for brilliant coat shine',
        'Supports kidney and urinary tract vitality in indoor cats',
        'Delicious natural aroma accepted by even selective eaters',
      ],
      image: '/Pet Product/NAMO Pets Addon for Healthy Cats.png',
      species: 'Cats',
    },
    {
      id: 'addon-weight-gain',
      name: 'NAMO Pets Addon for Weight Gain',
      category: 'supplements',
      categoryLabel: 'CALORIC MASS & RECOVERY',
      badge: 'HEALTHY MASS BUILDER',
      tag: 'High Protein-Fat Matrix • Rescue & Underweight Recovery',
      desc: 'Calorie-dense nutritional supplement crafted for underweight dogs and cats, working breeds, or pets recovering from illness needing rapid yet healthy weight improvement.',
      features: [
        'Concentrated healthy lipids and easily absorbed peptide proteins',
        'Helps build lean muscle without empty synthetic fillers',
        'Ideal for athletic working breeds, post-surgery recovery, or rescues',
        'Can be easily sprinkled onto dry or wet food daily',
      ],
      image: '/Pet Product/NAMO Pets Addon for Weight Gain.png',
      species: 'Dogs & Cats',
    },
    {
      id: 'fish-oil',
      name: 'NAMO Fish Oil',
      category: 'supplements',
      categoryLabel: 'PURE MARINE OMEGA 3-6-9',
      badge: '100% WILD MARINE EXTRACT',
      tag: 'EPA & DHA • Anti-Inflammatory • Dermal & Joint Relief',
      desc: 'Cold-extracted pure marine fish oil providing concentrated EPA and DHA fatty acids. Alleviates dry skin, reduces shedding, supports heart health, and cushions aging joints.',
      features: [
        'Rich in long-chain Omega-3 (EPA & DHA) from deep-sea fish',
        'Soothes itchy skin, hot spots, and excessive seasonal shedding',
        'Lubricates joints to support active mobility and ease stiffness',
        'Molecularly filtered for zero heavy metals, PCB, or toxins',
      ],
      image: '/Pet Product/NAMO Fish Oil.png',
      species: 'Dogs & Cats',
    },
    {
      id: 'fish-bone-chew',
      name: 'NAMO Fish Bone Chew',
      category: 'treats',
      categoryLabel: 'NATURAL DENTAL CARE',
      badge: 'ORGANIC DENTAL CALCIUM',
      tag: 'Tartar Reduction • 100% Natural Dried Fish Bone • Long Chew',
      desc: 'All-natural dehydrated fish bone chew providing prolonged mechanical cleaning of teeth, tartar reduction, and a rich source of bio-absorbable calcium and trace minerals.',
      features: [
        '100% single-ingredient natural fish bone — zero rawhide',
        'Mechanical chewing action cleans teeth and freshens breath',
        'Natural dietary source of calcium, phosphorus, and collagen',
        'Fully digestible and hypoallergenic for sensitive stomachs',
      ],
      image: '/Pet Product/NAMO Fish Bone Chew.png',
      species: 'Dogs',
    },
    {
      id: 'fish-tail-chew',
      name: 'NAMO Fish Tail Chew',
      category: 'treats',
      categoryLabel: 'HYPOALLERGENIC DENTAL TREAT',
      badge: 'COLLAGEN-RICH CHEW',
      tag: 'High Protein • Grain-Free • Long Lasting Satisfying Snap',
      desc: 'Slow-dried natural fish tail treat loaded with natural marine collagen and protein. Highly palatable, long-lasting, and ideal for dogs with poultry or grain sensitivities.',
      features: [
        '100% pure wild-caught fish tail dried at gentle low heat',
        'Rich in marine collagen for joint ligaments and skin elasticity',
        'Zero chemical bleaches, artificial smoke, or preservatives',
        'Safe, non-splintering long-lasting natural chewing reward',
      ],
      image: '/Pet Product/NAMO Fish Tail Chew.png',
      species: 'Dogs',
    },
  ];

  const filteredProducts =
    activeTab === 'all'
      ? petProducts
      : petProducts.filter((p) => p.category === activeTab);

  const handleEnquire = (productName: string) => {
    if (onOpenEnquiryWithProduct) {
      onOpenEnquiryWithProduct(productName);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="pet-nutrition"
      style={{
        backgroundColor: '#FCFAF5',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
        borderTop: '1px solid rgba(23, 63, 43, 0.08)',
        borderBottom: '1px solid rgba(23, 63, 43, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(59, 126, 72, 0.1)',
              border: '1px solid rgba(59, 126, 72, 0.22)',
              marginBottom: '1.25rem',
            }}
          >
            <Bone size={14} color="#2E7D32" />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1B5E20',
              }}
            >
              ORGANIC PET WELLNESS &amp; NUTRITION
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
              color: '#0C291B',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Pure, Bio-Active Formulations for <span style={{ color: '#2E7D32' }}>Canines &amp; Felines</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#5E7063',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Rooted in authentic organic nutrition and marine bio-science. Clean ingredients, free from artificial additives, tailored for everyday vitality, maternal care, weight gain, and dental health.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isActive ? '1px solid #0C291B' : '1px solid rgba(23, 63, 43, 0.12)',
                  backgroundColor: isActive ? '#0C291B' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#3D5344',
                  boxShadow: isActive
                    ? '0 6px 18px rgba(12, 41, 27, 0.2)'
                    : '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 10 Pet Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
          className="pet-products-grid"
        >
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="pet-product-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid rgba(23, 63, 43, 0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 20px rgba(12, 41, 27, 0.04)',
                position: 'relative',
              }}
            >
              {/* Card Top: Image Container with Transparent Cutout & Soft Background Glow */}
              <div>
                <div
                  style={{
                    position: 'relative',
                    height: '260px',
                    backgroundColor: '#F8FAF6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                    borderBottom: '1px solid rgba(23, 63, 43, 0.06)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subtle ambient botanical radial glow behind the product */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(147, 198, 57, 0.22) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Species Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: '#0C291B',
                      border: '1px solid rgba(23, 63, 43, 0.12)',
                      letterSpacing: '0.04em',
                      zIndex: 2,
                    }}
                  >
                    {p.species}
                  </div>

                  {/* Formula Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: '#0C291B',
                      color: '#93C639',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      zIndex: 2,
                    }}
                  >
                    {p.badge}
                  </div>

                  {/* Cutout Image */}
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      maxHeight: '210px',
                      maxWidth: '90%',
                      objectFit: 'contain',
                      position: 'relative',
                      zIndex: 1,
                      filter: 'drop-shadow(0 12px 24px rgba(12, 41, 27, 0.12))',
                      transition: 'transform 0.35s ease',
                    }}
                    className="pet-product-img"
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem 1.5rem 1rem 1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      color: '#2E7D32',
                      textTransform: 'uppercase',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {p.categoryLabel}
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#0C291B',
                      lineHeight: 1.25,
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {p.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#5E7063',
                      lineHeight: 1.55,
                      marginBottom: '1rem',
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Feature Highlights */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      marginBottom: '1rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(23, 63, 43, 0.08)',
                    }}
                  >
                    {p.features.slice(0, 2).map((feat, fidx) => (
                      <div
                        key={fidx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.78rem',
                          color: '#3D5344',
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        <Check size={13} color="#2E7D32" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                <button
                  onClick={() => handleEnquire(p.name)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1.25rem',
                    borderRadius: '9999px',
                    backgroundColor: '#0C291B',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 14px rgba(12, 41, 27, 0.2)',
                  }}
                  className="pet-enquire-btn"
                >
                  <span>Enquire Formulation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Trust Banner */}
        <div
          style={{
            marginTop: '4rem',
            backgroundColor: '#0C291B',
            borderRadius: '24px',
            padding: '2rem 2.5rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 15px 40px rgba(12, 41, 27, 0.25)',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#93C639', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
              <ShieldCheck size={16} />
              <span>VETERINARY &amp; INSTITUTIONAL GRADE QUALITY</span>
            </div>
            <h4 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
              Wholesale &amp; Breeder Institutional Supply
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#D3DFD5', lineHeight: 1.5, margin: 0 }}>
              Direct procurement available for veterinary clinics, pet boutiques, registered breeding facilities, and regional pet nutrition distributors across India.
            </p>
          </div>

          <button
            onClick={() => handleEnquire('Pet Nutrition & Institutional Supply')}
            style={{
              padding: '0.85rem 1.8rem',
              backgroundColor: '#93C639',
              color: '#0C291B',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              transition: 'all 0.25s ease',
              boxShadow: '0 6px 20px rgba(147, 198, 57, 0.3)',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Request Pet Product Catalog</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetNutritionSection;
