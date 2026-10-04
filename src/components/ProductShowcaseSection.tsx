import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ProductShowcaseSectionProps {
  onOpenEnquiryWithProduct: (productName: string) => void;
}

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({
  onOpenEnquiryWithProduct,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 10 Formulations' },
    { id: 'bio_inputs', label: 'Bio-Fertilizers & Algae Feed' },
    { id: 'oils', label: 'Cold-Pressed Native Oils' },
    { id: 'ghee_honey', label: 'Desi Cow Ghee & Wild Honey' },
    { id: 'staples_grains', label: 'Organic Jaggery, Rice & Pulses' },
    { id: 'spices_nuts', label: 'Organic Spices & Dry Fruits' },
  ];

  const products = [
    {
      id: 'fertilizer',
      category: 'bio_inputs',
      categoryLabel: 'PANCHAKAVYA BASED',
      name: 'NAMO Organic Fertilizers & Pesticides',
      tagline: 'Natural Bio-Stimulant & Crop Defense Formulation',
      desc: 'Natural agricultural inputs designed to support healthy plant growth and sustainable farming practices. Prepared using five traditional cow-derived ingredients: milk, urine, dung, curd, and ghee.',
      features: [
        'Improves soil fertility & microbial biomass',
        'Enhances root development and nutrient uptake',
        'Reduces water requirement by up to 40%',
        'Crops withstand up to 21 days in drought conditions',
      ],
      image: '/assets/namo-panchakavya-fertilizer-pesticide.png',
      badge: 'FLAGSHIP BIO-INPUT',
      suitableFor: 'Vegetables, Fruits, Flowers, Tea, Coffee & Cardamom',
    },
    {
      id: 'feed',
      category: 'bio_inputs',
      categoryLabel: 'LIVESTOCK WELLNESS',
      name: 'NAMO Algae Extract Liquid',
      tagline: 'Marine Algae Cattle Feed Supplement',
      desc: 'High-potency algae extract liquid providing bio-available minerals, omega fatty acids, and essential trace nutrients to improve livestock vitality and dairy milk yields.',
      features: [
        '100% natural and organic marine source',
        'Improves dairy cattle digestion & milk quality',
        'Strengthens immunity against seasonal disease',
        'Eco-friendly, non-toxic, and chemical-free',
      ],
      image: '/assets/namo-algae-extract-liquid.png',
      badge: 'DAIRY WELLNESS',
      suitableFor: 'Dairy Cattle, Calves & Livestock Herds',
    },
    {
      id: 'oils',
      category: 'oils',
      categoryLabel: 'WOOD-PRESSED (CHEKKU)',
      name: 'NAMO Cold-Pressed Native Edible Oils',
      tagline: 'Virgin Olive, Mustard, Coconut, Groundnut, Sunflower & Sesame Oils',
      desc: 'Traditional wood-pressed pure native edible oils extracted under low temperatures without chemical solvents, retaining 100% vital fatty acids, natural aroma, and essential vitamins.',
      features: [
        'Cold-pressed (Chekku / Kachi Ghani) extraction',
        'Zero chemical refining, bleaching, or deodorizing',
        'Rich in heart-healthy MUFAs & PUFAs',
        'Natural unadulterated kitchen cooking oils',
      ],
      image: '/assets/namo-cold-pressed-edible-oils.png',
      badge: '100% UNREFINED',
      suitableFor: 'Daily Family Cooking, Deep Frying, Dressing & Nutrition',
    },
    {
      id: 'ghee',
      category: 'ghee_honey',
      categoryLabel: 'AYURVEDIC NUTRITION',
      name: 'NAMO Desi Cow Ghee',
      tagline: 'Traditional A2 Bilona Native Cow Ghee',
      desc: 'Handcrafted from pure native indigenous cow milk using traditional wooden bilona churning. Packed in earthen pots and glass jars to retain authentic aroma and vital nutrients.',
      features: [
        'Pure A2 beta-casein protein profile',
        'Slow-cooked in small artisan batches',
        'Zero preservatives, additives, or adulteration',
        'Rich in fat-soluble vitamins A, D, E, and K',
      ],
      image: '/assets/namo-desi-cow-ghee-pot.png',
      badge: '100% PURE A2',
      suitableFor: 'Daily Family Nutrition, Cooking & Ayurvedic Wellness',
    },
    {
      id: 'honey',
      category: 'ghee_honey',
      categoryLabel: 'PURE FOREST HARVEST',
      name: 'NAMO Pure Wild Honey',
      tagline: '100% Raw Unpasteurized Forest Honey',
      desc: 'Pure, raw, unheated wild forest honey harvested directly from certified organic biodiversity regions. Rich in natural bee pollen, enzymes, and antioxidants.',
      features: [
        '100% natural, unheated & unfiltered',
        'Contains active bee propolis and floral pollen',
        'Natural immunity booster and digestive aid',
        'Zero sugar syrup, corn syrup, or adulteration',
      ],
      image: '/assets/namo-pure-wild-honey.png',
      badge: 'RAW & UNPROCESSED',
      suitableFor: 'Natural Sweetening, Immunity & Daily Health',
    },
    {
      id: 'jaggery',
      category: 'staples_grains',
      categoryLabel: 'TRADITIONAL SWEETENER',
      name: 'NAMO Organic Jaggery Powder',
      tagline: 'Chemical-Free Pure Sugarcane Jaggery',
      desc: 'Organically grown sugarcane crushed and naturally boiled without synthetic sulfur or chemical clarifiers. Pure golden jaggery powder packed with natural iron and minerals.',
      features: [
        '100% chemical-free and unbleached',
        'Rich natural source of dietary iron & potassium',
        'Healthy unrefined alternative to white sugar',
        'Dissolves easily in tea, milk, and traditional recipes',
      ],
      image: '/assets/namo-organic-jaggery-powder.png',
      badge: 'IRON RICH',
      suitableFor: 'Beverages, Daily Sweetening & Traditional Cooking',
    },
    {
      id: 'pulses',
      category: 'staples_grains',
      categoryLabel: 'FARM HARVEST',
      name: 'NAMO Organic Pulses & Dals',
      tagline: 'Chemical-Free Heritage Lentils & Grains',
      desc: 'Unpolished native Indian pulses, lentils, and grams grown by our partner farmers using organic bio-inputs. High in plant proteins, essential minerals, and unrefined dietary fiber.',
      features: [
        '100% unpolished and chemical-free',
        'Procured directly from organic grower collectives',
        'High natural protein and dietary fiber content',
        'Retains original native taste and cooking aroma',
      ],
      image: '/assets/namo-organic-pulses-dals.png',
      badge: 'HERITAGE STAPLES',
      suitableFor: 'Daily Family Meals, Wholesome Nutrition & D2C Retail',
    },
    {
      id: 'grains',
      category: 'staples_grains',
      categoryLabel: 'NATIVE CROPS',
      name: 'NAMO Heritage Rice & Whole Wheat Grains',
      tagline: 'Aromatic Traditional Basmati & Sharbati Wheat',
      desc: 'Authentic heritage grains cultivated with organic soil bio-inputs in traditional agrarian belts, delivering unmatched nutrition, whole grain fiber, and authentic aroma.',
      features: [
        'Organically grown without chemical pesticides',
        'Unpolished whole grain nutrient preservation',
        'High natural fiber and complex carbohydrates',
        'Packaged in eco-friendly protective burlap sacks',
      ],
      image: '/assets/namo-organic-rice-wheat-grains.png',
      badge: 'ORGANIC GRAIN',
      suitableFor: 'Daily Wholesome Meals, B2B & Bulk Household Supply',
    },
    {
      id: 'spices',
      category: 'spices_nuts',
      categoryLabel: 'NATURAL FLAVORS',
      name: 'NAMO Organic Whole Spices & Powders',
      tagline: 'High-Curcumin Turmeric, Malabar Pepper & Red Chillies',
      desc: 'Single-origin certified organic whole spices hand-harvested from native biodiversity farms, naturally sun-dried to lock in essential oils, pungent aromas, and therapeutic curcumin.',
      features: [
        'High natural curcumin and piperine content',
        'Zero artificial color, starch, or adulteration',
        'Sun-dried in sterile hygienic farm environments',
        'Potent aromatic and culinary potency',
      ],
      image: '/assets/namo-organic-spices-turmeric-pepper.png',
      badge: 'PURE SPICE',
      suitableFor: 'Culinary Cooking, Ayurvedic Tonics & Export Grade',
    },
    {
      id: 'dryfruits',
      category: 'spices_nuts',
      categoryLabel: 'PREMIUM NUTRIENTS',
      name: 'NAMO Premium Dry Fruits & Nuts',
      tagline: 'Selected Almonds, Whole Cashews & Golden Raisins',
      desc: 'Premium hand-graded organic almonds, whole jumbo cashews, and natural golden raisins sourced directly from certified orchards for supreme freshness, crunch, and vitality.',
      features: [
        '100% natural, unpolished and unsulphured',
        'Rich in protein, vitamin E, magnesium & antioxidants',
        'Carefully sorted and packaged for long-lasting crispness',
        'Wholesome daily superfood energy source',
      ],
      image: '/assets/namo-dryfruits-nuts.png',
      badge: 'GRADE-A CRUNCH',
      suitableFor: 'Daily Health Snack, Breakfasts & Festive Gifting',
    },
  ];

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="product-showcase"
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
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div className="aeline-tag" style={{ margin: '0 auto 1.25rem' }}>
            <Sparkles size={13} color="#3B7E48" />
            <span>AUTHENTIC PRODUCT ECOSYSTEM</span>
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
            Formulations Built for <span style={{ color: '#3B7E48' }}>Soil &amp; Wellness</span>
          </h2>

          <p
            style={{
              color: '#556557',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginTop: '1.25rem',
            }}
          >
            Our 10 core product lines bring together ancient Indian wisdom and modern biotechnology,
            delivering measurable agronomic performance for farmers and chemical-free foods for families.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3.5rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.86rem',
                fontWeight: 700,
                border: activeCategory === cat.id ? '1px solid #0C291B' : '1px solid rgba(23, 63, 43, 0.12)',
                backgroundColor: activeCategory === cat.id ? '#0C291B' : '#F7F5EF',
                color: activeCategory === cat.id ? '#FFFFFF' : '#121E15',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeCategory === cat.id ? '0 8px 20px -6px rgba(12, 41, 27, 0.3)' : 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filtered.map((prod, idx) => (
            <div
              key={prod.id}
              style={{
                backgroundColor: '#F7F5EF',
                borderRadius: '32px',
                border: '1px solid rgba(23, 63, 43, 0.1)',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1fr 1.15fr' : '1.15fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.03)',
              }}
              className="product-showcase-card"
            >
              {/* Product Visual */}
              <div
                style={{
                  order: idx % 2 === 0 ? 1 : 2,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '340px',
                  border: '1px solid rgba(23, 63, 43, 0.06)',
                  boxShadow: '0 8px 24px -6px rgba(0,0,0,0.03)',
                }}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  style={{
                    maxHeight: '300px',
                    maxWidth: '90%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',
                  }}
                />
              </div>

              {/* Product Details */}
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: '#3B7E48',
                      textTransform: 'uppercase',
                    }}
                  >
                    {prod.categoryLabel}
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      backgroundColor: '#0C291B',
                      color: '#93C639',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {prod.badge}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    color: '#121E15',
                    fontWeight: 800,
                    marginBottom: '0.35rem',
                    lineHeight: 1.15,
                  }}
                >
                  {prod.name}
                </h3>

                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#B79A5B',
                    marginBottom: '1rem',
                  }}
                >
                  {prod.tagline}
                </div>

                <p
                  style={{
                    color: '#556557',
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  {prod.desc}
                </p>

                {/* Features List */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                    marginBottom: '1.75rem',
                  }}
                  className="product-features-grid"
                >
                  {prod.features.map((feat, fidx) => (
                    <div
                      key={fidx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: '#121E15',
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      <CheckCircle2 size={16} color="#3B7E48" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Suitable For & CTA */}
                <div
                  className="product-showcase-actions"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(23, 63, 43, 0.08)',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: '#667067' }}>
                    <strong>Ideal for:</strong> {prod.suitableFor}
                  </div>

                  <button
                    onClick={() => onOpenEnquiryWithProduct(prod.name)}
                    className="aeline-btn-lime"
                    style={{ fontSize: '0.85rem', padding: '0.65rem 1.4rem' }}
                  >
                    <span>Request Supply Terms</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-showcase-card {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .product-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductShowcaseSection;
