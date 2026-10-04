import React, { useState } from 'react';
import { Sparkles, ArrowRight, Droplets, CheckCircle2, ShieldCheck, Sprout, Wind } from 'lucide-react';

export const PanchakavyaSection: React.FC = () => {
  const [activeIngredient, setActiveIngredient] = useState<number>(0);

  const ingredients = [
    {
      name: 'Milk',
      tamilName: 'Pal',
      role: 'Source of proteins, natural sugars & friendly bacteria',
      desc: 'A traditional component providing bio-active enzymes that accelerate microbial propagation in soil.',
      benefit: 'Stimulates root hair multiplication and beneficial fungal mycorrhizae.',
      badge: 'Proteins & Sugars',
      image: '/assets/product-ghee.jpg',
    },
    {
      name: 'Urine',
      tamilName: 'Gomutra',
      role: 'Nitrogen-rich natural bio-stimulant & pest deterrent',
      desc: 'A traditional cow-derived ingredient packed with urea, minerals, and natural protective properties.',
      benefit: 'Acts as a natural systemic immunity booster and foliar repellant.',
      badge: 'Natural Nitrogen',
      image: '/assets/hero-mid.jpg',
    },
    {
      name: 'Dung',
      tamilName: 'Gomaya',
      role: 'Rich source of humic matter & beneficial microorganisms',
      desc: 'A traditional agricultural ingredient that restores degraded soil organic matter and moisture retention.',
      benefit: 'Supplies billion+ colony-forming units (CFUs) of aerobic soil bacteria.',
      badge: 'Humic Microbes',
      image: '/assets/nature-soil.jpg',
    },
    {
      name: 'Curd',
      tamilName: 'Thair',
      role: 'Lactic acid bacteria (LAB) & natural acidity balance',
      desc: 'Delivers beneficial probiotic microbes that naturally suppress harmful soil-borne pathogens and fungi.',
      benefit: 'Maintains optimal rhizosphere pH for increased micronutrient uptake.',
      badge: 'Probiotic LAB',
      image: '/assets/product-honey.jpg',
    },
    {
      name: 'Ghee',
      tamilName: 'Ney',
      role: 'Essential fatty acids & formulation binding agent',
      desc: 'A traditional component of Panchakavya that aids systemic absorption and creates a protective coating.',
      benefit: 'Extends foliar adhesion and provides long-lasting drought resilience.',
      badge: 'Fatty Acids',
      image: '/assets/product_a2_ghee_1790668912140.jpg',
    },
  ];

  const benefits = [
    {
      stat: 'Up to 40%',
      title: 'Reduces Water Requirement',
      desc: 'Reducing water requirement for cultivation up to 40% compared to chemical fertilizers. Crops can withstand up to 21 days in drought without water.',
      highlight: true,
      tag: 'Drought Resilience',
      icon: Droplets,
    },
    {
      stat: '100% Organic',
      title: 'Improves Soil Fertility',
      desc: 'Regular use, as part of appropriate organic farming practices, helps improve soil fertility, support healthier crops and contribute to better yields over time.',
      highlight: false,
      tag: 'Soil Bio-Carbon',
      icon: Sprout,
    },
    {
      stat: 'Universal',
      title: 'Suitable for All Crops',
      desc: 'Suitable for cultivation of a wide range of crops: vegetables, fruits, flowers, pulses, as well as plantation crops including coffee, tea and cardamom.',
      highlight: false,
      tag: 'Horticulture & Cash Crops',
      icon: ShieldCheck,
    },
    {
      stat: 'Balanced',
      title: 'Ecosystem-Safe Protection',
      desc: 'Natural pest and disease resistance that maintains ecological equilibrium, preserving pollinator insects and soil biology.',
      highlight: false,
      tag: 'Eco-Equilibrium',
      icon: Wind,
    },
  ];

  return (
    <section
      id="panchakavya"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        borderBottom: '1px solid rgba(23, 63, 43, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Editorial Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div className="aeline-tag" style={{ margin: '0 auto 1.25rem' }}>
            <Sparkles size={13} color="#3B7E48" />
            <span>THE NATURAL FOUNDATION</span>
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
            Inspired by <span style={{ color: '#3B7E48', fontStyle: 'italic' }}>Panchakavya</span>
          </h2>

          <p
            style={{
              color: '#556557',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginTop: '1.25rem',
            }}
          >
            Panchakavya-based solutions form an important part of our approach to natural agriculture.
            NAMO Organic Fertilizers based on Panchakavya are natural agricultural inputs designed to
            support healthy plant growth and sustainable farming practices.
          </p>
        </div>

        {/* 5-Ingredient Interactive Luxury Console */}
        <div
          className="panchakavya-console"
          style={{
            backgroundColor: '#F7F5EF',
            border: '1px solid rgba(23, 63, 43, 0.12)',
            borderRadius: '36px',
            padding: '2.5rem',
            marginBottom: '4.5rem',
            boxShadow: '0 20px 40px -15px rgba(23, 63, 43, 0.05)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '2.5rem',
              alignItems: 'center',
            }}
            className="panchakavya-interactive-grid"
          >
            {/* Left: 5 Ingredients Interactive Pill List */}
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#3B7E48',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>FIVE TRADITIONAL COW-DERIVED INGREDIENTS</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {ingredients.map((ing, idx) => {
                  const isActive = activeIngredient === idx;
                  return (
                    <div
                      key={ing.name}
                      onClick={() => setActiveIngredient(idx)}
                      className={`panchakavya-ingredient-btn ${isActive ? 'is-active' : ''}`}
                      style={{
                        padding: '1.15rem 1.4rem',
                        borderRadius: '20px',
                        backgroundColor: isActive ? '#0C291B' : '#FFFFFF',
                        color: isActive ? '#FCFAF4' : '#121E15',
                        border: isActive ? '1px solid #0C291B' : '1px solid rgba(23, 63, 43, 0.08)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transform: isActive ? 'scale(1.015)' : 'none',
                        boxShadow: isActive ? '0 12px 28px -8px rgba(12, 41, 27, 0.35)' : '0 2px 6px rgba(0,0,0,0.02)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img
                          src={ing.image}
                          alt={ing.name}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            objectFit: 'cover',
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
                            {ing.name}
                          </div>
                          <div
                            style={{
                              fontSize: '0.82rem',
                              color: isActive ? '#C9D4CA' : '#667067',
                              marginTop: '0.15rem',
                            }}
                          >
                            {ing.role}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ArrowRight size={16} color={isActive ? '#93C639' : '#A8B89F'} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Active Ingredient Card with Photography */}
            <div
              className="panchakavya-detail-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '28px',
                border: '1px solid rgba(23, 63, 43, 0.12)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 45px -15px rgba(23, 63, 43, 0.08)',
                minHeight: '380px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Row */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  <div className="aeline-tag">
                    <span style={{ fontWeight: 800 }}>Active Ingredient 0{activeIngredient + 1}</span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#B79A5B',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Indigenous Cow Derivative
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
                  <img
                    src={ingredients[activeIngredient].image}
                    alt={ingredients[activeIngredient].name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      objectFit: 'cover',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                    }}
                  />
                  <div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: '2.2rem',
                        color: '#0C291B',
                        fontWeight: 800,
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      {ingredients[activeIngredient].name}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#3B7E48', fontWeight: 600 }}>
                      {ingredients[activeIngredient].badge}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: '#3B7E48',
                    marginBottom: '0.75rem',
                  }}
                >
                  {ingredients[activeIngredient].role}
                </div>

                <p
                  style={{
                    color: '#556557',
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                  }}
                >
                  {ingredients[activeIngredient].desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 1.15rem',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(59, 126, 72, 0.08)',
                    color: '#0C291B',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={16} color="#3B7E48" />
                  <span>{ingredients[activeIngredient].benefit}</span>
                </div>
              </div>

              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1.15rem',
                  borderTop: '1px solid rgba(23, 63, 43, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem',
                  color: '#667067',
                }}
              >
                <span>The Panchakavya Principle</span>
                <span style={{ fontWeight: 700, color: '#0C291B' }}>5 Derivatives • 1 Synergized Solution</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific & Agronomic Advantages Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
          <div className="aeline-tag" style={{ margin: '0 auto 1rem' }}>
            <Droplets size={13} color="#3B7E48" />
            <span>SCIENTIFIC & AGRONOMIC ADVANTAGES</span>
          </div>
          <h3
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: '#121E15',
              letterSpacing: '-0.02em',
              fontWeight: 800,
            }}
          >
            Benefits of NAMO Panchakavya Formulations
          </h3>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="panchakavya-benefits-grid"
        >
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`panchakavya-benefit-card ${b.highlight ? 'card-highlight' : 'card-standard'}`}
                style={{
                  backgroundColor: b.highlight ? '#0C291B' : '#FFFFFF',
                  color: b.highlight ? '#FFFFFF' : '#121E15',
                  borderRadius: '26px',
                  padding: '2.2rem 1.75rem',
                  border: b.highlight ? '1px solid #0C291B' : '1px solid rgba(23, 63, 43, 0.1)',
                  boxShadow: b.highlight
                    ? '0 20px 40px -10px rgba(12, 41, 27, 0.4)'
                    : '0 10px 25px -10px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
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
                      className="benefit-icon-box"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: b.highlight ? 'rgba(147, 198, 57, 0.2)' : 'rgba(59, 126, 72, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} color={b.highlight ? '#93C639' : '#3B7E48'} />
                    </div>
                    <span
                      className="benefit-tag-pill"
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        backgroundColor: b.highlight ? 'rgba(255, 255, 255, 0.12)' : '#F0EEE5',
                        color: b.highlight ? '#93C639' : '#3B7E48',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {b.tag}
                    </span>
                  </div>

                  <div
                    className="font-display benefit-stat-num"
                    style={{
                      fontSize: '2.4rem',
                      fontWeight: 800,
                      color: b.highlight ? '#93C639' : '#3B7E48',
                      lineHeight: 1.1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {b.stat}
                  </div>

                  <div
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: b.highlight ? '#FFFFFF' : '#121E15',
                      marginBottom: '0.75rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {b.title}
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      color: b.highlight ? '#C9D4CA' : '#556557',
                    }}
                  >
                    {b.desc}
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

export default PanchakavyaSection;
