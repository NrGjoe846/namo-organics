import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Heart, Play, Search, Sparkles, CheckCircle2 } from 'lucide-react';

interface PetalGrowthSectionsProps {
  onOpenEnquiryWithProduct: (productName: string) => void;
}

export const PetalGrowthSections: React.FC<PetalGrowthSectionsProps> = ({
  onOpenEnquiryWithProduct,
}) => {
  const [activeFilter, setActiveFilter] = useState('All Inputs');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filters = [
    'All Inputs',
    'Panchakavya & Bio-Inputs',
    'Cattle Feed Supplements',
    'Cold-Pressed Edible Oils',
    'Desi Cow Ghee & Honey',
    'Organic Jaggery & Sweeteners',
    'Heritage Rice, Wheat & Pulses',
    'Organic Spices & Dry Fruits',
  ];

  const allProducts = [
    {
      id: 1,
      name: 'NAMO Panchakavya Bio-Fertilizers & Pesticides',
      category: 'Panchakavya & Bio-Inputs',
      tag: '5 Cow Derivatives • Soil Bio-Revitalizer • 40% Water Saving',
      badge: 'Flagship Bio-Input',
      image: '/assets/namo-panchakavya-fertilizer-pesticide.png',
      desc: 'Formulated with authentic indigenous cow milk, urine, dung, curd, and ghee. Replenishes beneficial microflora, builds microbial carbon, and provides up to 21-day drought resilience.',
    },
    {
      id: 2,
      name: 'NAMO Algae Extract Liquid',
      category: 'Cattle Feed Supplements',
      tag: '100% Natural • Marine Algae Extract • Dairy Vitality',
      badge: 'Verified Organic Feed',
      image: '/assets/namo-algae-extract-liquid.png',
      desc: 'Nutrient-rich marine algae extract liquid designed for livestock vitality, enhanced dairy milk yields, digestive health, and foliar crop bio-stimulation.',
    },
    {
      id: 3,
      name: 'NAMO Cold-Pressed Native Edible Oils',
      category: 'Cold-Pressed Edible Oils',
      tag: 'Virgin Olive • Mustard • Coconut • Groundnut • Sunflower • Sesame',
      badge: 'Wood-Pressed (Chekku)',
      image: '/assets/namo-cold-pressed-edible-oils.png',
      desc: 'Traditional wood-pressed (Kachi Ghani) pure unrefined edible oils extracted without heat or chemical refining, retaining 100% natural antioxidants, aroma, and omega fatty acids.',
    },
    {
      id: 4,
      name: 'NAMO Desi Cow Ghee',
      category: 'Desi Cow Ghee & Honey',
      tag: 'Traditional A2 Bilona • Indigenous Native Cow • Rich Aroma',
      badge: '100% Pure A2 Bilona',
      image: '/assets/namo-desi-cow-ghee-pot.png',
      desc: 'Handcrafted from pure native indigenous cow milk using traditional wooden bilona churning. Packed in earthen pots and glass jars for maximum bio-potency and digestive wellness.',
    },
    {
      id: 5,
      name: 'NAMO Pure Wild Honey',
      category: 'Desi Cow Ghee & Honey',
      tag: 'Raw Forest Harvest • Unprocessed • Active Enzymes',
      badge: 'Direct Forest Harvest',
      image: '/assets/namo-pure-wild-honey.png',
      desc: 'Unheated, unpasteurized 100% raw wild forest honey harvested from organic floral zones. Rich in natural bee pollen, floral enzymes, antioxidants, and trace minerals.',
    },
    {
      id: 6,
      name: 'NAMO Organic Jaggery Powder',
      category: 'Organic Jaggery & Sweeteners',
      tag: 'Pure Sugarcane Extract • Chemical-Free • Iron-Rich',
      badge: 'Naturally Processed',
      image: '/assets/namo-organic-jaggery-powder.png',
      desc: 'Natural unrefined jaggery powder made from organically grown sugarcane without chemical clarifiers, providing natural iron, minerals, and healthy traditional sweetness.',
    },
    {
      id: 7,
      name: 'NAMO Organic Pulses & Dals',
      category: 'Heritage Rice, Wheat & Pulses',
      tag: 'Chemical-Free • Unpolished • High Protein & Fiber',
      badge: 'Organically Cultivated',
      image: '/assets/namo-organic-pulses-dals.png',
      desc: 'Native Indian pulses, lentils, and grams cultivated with organic bio-inputs. Unpolished to preserve vital plant proteins, dietary fiber, and authentic native taste.',
    },
    {
      id: 8,
      name: 'NAMO Heritage Rice & Whole Wheat Grains',
      category: 'Heritage Rice, Wheat & Pulses',
      tag: 'Traditional Aromatic Basmati • Native Wheat Grains • Farm Direct',
      badge: 'Organically Grown',
      image: '/assets/namo-organic-rice-wheat-grains.png',
      desc: 'Aromatic traditional rice and native whole wheat grains grown organically by our partner farmer collectives without synthetic pesticides or chemical fertilizers.',
    },
    {
      id: 9,
      name: 'NAMO Organic Whole Spices & Powders',
      category: 'Organic Spices & Dry Fruits',
      tag: 'High-Curcumin Turmeric • Malabar Black Pepper • Native Chillies',
      badge: 'High Essential Oils',
      image: '/assets/namo-organic-spices-turmeric-pepper.png',
      desc: 'Organically cultivated whole spices including high-curcumin turmeric roots, pungent black pepper, dried red chillies, and mustard seeds packed with natural essential oils.',
    },
    {
      id: 10,
      name: 'NAMO Premium Dry Fruits & Nuts',
      category: 'Organic Spices & Dry Fruits',
      tag: 'California Almonds • Whole Cashews • Golden Afghan Raisins',
      badge: 'Handpicked Grade-A',
      image: '/assets/namo-dryfruits-nuts.png',
      desc: 'Carefully sorted and handpicked premium quality organic almonds, rich buttery cashews, and sun-dried golden raisins packed with natural energy and heart-healthy fats.',
    },
  ];

  const filteredProducts =
    activeFilter === 'All Inputs'
      ? allProducts
      : allProducts.filter(
          (p) =>
            p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            activeFilter.toLowerCase().includes(p.category.toLowerCase())
        );

  return (
    <div id="products" style={{ backgroundColor: '#F7F5EF', paddingTop: '3rem', paddingBottom: '6rem' }}>
      {/* 01. Petal Growth Dark Botanical Hero Container */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container-custom">
          <div
            className="petal-hero-card"
            style={{
              position: 'relative',
              backgroundColor: '#0C291B',
              borderRadius: '44px',
              overflow: 'hidden',
              minHeight: '520px',
              padding: '2.5rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              color: '#FFFFFF',
            }}
          >
            {/* Background Foliage Image */}
            <img
              src="/assets/sunset-farm.jpg"
              alt="Botanical background"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.35,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(59, 126, 72, 0.4) 0%, rgba(12, 41, 27, 0.95) 80%)',
                zIndex: 1,
              }}
            />

            {/* Top Navigation Row */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.85rem',
              }}
            >
              {/* Category Pills with No-Wrap & Touch Scroll */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  overflowX: 'auto',
                  maxWidth: '100%',
                  paddingBottom: '2px',
                  scrollbarWidth: 'none',
                }}
              >
                <span
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#121E15',
                    padding: '0.45rem 1.15rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  Catalog
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    color: '#FFFFFF',
                    padding: '0.45rem 1.15rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  Bio-Inputs
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    color: '#FFFFFF',
                    padding: '0.45rem 1.15rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  Farm Staples &amp; FMCG
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <Search size={15} />
                </div>
                <span
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    color: '#FFFFFF',
                    padding: '0.45rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  10 Certified Formulations
                </span>
              </div>
            </div>

            {/* Center: Giant "growth" Typography */}
            <div style={{ position: 'relative', zIndex: 2, margin: 'clamp(2rem, 4vw, 3.5rem) 0' }}>
              <div
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                  fontWeight: 600,
                  color: '#DFE5DA',
                  marginBottom: '0.35rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Natural power
              </div>

              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  color: '#FFFFFF',
                  letterSpacing: '-0.04em',
                  textTransform: 'lowercase',
                  marginBottom: '1.25rem',
                }}
              >
                growth
              </h2>

              <p style={{ maxWidth: '580px', fontSize: 'clamp(0.9rem, 1.1vw, 1rem)', color: '#DFE5DA', lineHeight: 1.65 }}>
                We're your modern organic agriculture destination. We offer a full spectrum of Panchakavya bio-fertilizers,
                algae feed supplements, cold-pressed native oils, A2 desi cow ghee, raw wild honey, jaggery, pulses, and organic spices!
              </p>
            </div>

            {/* Bottom Row: Floating Glass Card + Explore Button */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  maxWidth: '360px',
                }}
              >
                <div>
                  <div className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                    10 Pure Formulations
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#D6EC9C', marginTop: '0.35rem', lineHeight: 1.4 }}>
                    From certified organic bio-inputs to wholesome farm-to-table kitchen nutrition.
                  </div>
                </div>
                <img
                  src="/assets/nature-soil.jpg"
                  alt="Soil icon"
                  style={{ width: '48px', height: '48px', borderRadius: '14px', objectFit: 'cover' }}
                />
              </div>

              <div className="petal-hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  <ArrowDown size={18} />
                </div>

                <button
                  onClick={() => onOpenEnquiryWithProduct('Full Product Catalog')}
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#121E15',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.9rem 2rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    touchAction: 'manipulation',
                  }}
                >
                  Explore Full Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Interactive Catalogue with 10 Products & Filter Pills */}
      <section style={{ padding: '2rem 0 3.5rem' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
              marginBottom: '2.5rem',
            }}
          >
            <div>
              <div className="aeline-tag" style={{ marginBottom: '0.75rem' }}>
                <Sparkles size={13} color="#3B7E48" />
                <span>COMPLETE PRODUCT CATALOGUE</span>
              </div>
              <h3 className="font-display" style={{ fontSize: '2.4rem', fontWeight: 800, color: '#121E15', lineHeight: 1.1 }}>
                Inputs for the Soil &amp; Pure Farm Goods
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#5E6D62', marginTop: '0.35rem' }}>
                Bio-fertilizers, livestock supplements, cold-pressed oils, native ghee, honey, jaggery, grains &amp; spices.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: '#FFFFFF',
                padding: '0.75rem 1.25rem',
                borderRadius: '20px',
                border: '1px solid #E4EAE0',
                maxWidth: '480px',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: '#0C291B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Play size={14} fill="#93C639" color="#93C639" />
              </div>
              <div style={{ fontSize: '0.82rem', color: '#121E15', fontWeight: 600, lineHeight: 1.4 }}>
                Each formulation is prepared using authentic indigenous cow derivatives and clean organic processes.
              </div>
            </div>
          </div>

          {/* Filter Pills Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '3rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: '0.6rem 1.35rem',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: '1px solid #DFE5DA',
                    backgroundColor: activeFilter === f ? '#0C291B' : '#FFFFFF',
                    color: activeFilter === f ? '#FFFFFF' : '#121E15',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: activeFilter === f ? '0 4px 12px rgba(12, 41, 27, 0.2)' : 'none',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            <button
              onClick={() => setActiveFilter('All Inputs')}
              style={{
                padding: '0.6rem 1.35rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: '1px solid #0C291B',
                backgroundColor: 'transparent',
                color: '#0C291B',
                cursor: 'pointer',
              }}
            >
              Reset Filters
            </button>
          </div>

          {/* Complete 10 Product Catalog Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
            className="petal-products-grid"
          >
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '28px',
                  padding: '1.75rem',
                  border: '1px solid rgba(23, 63, 43, 0.1)',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px -12px rgba(12, 41, 27, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div>
                  {/* Image Container */}
                  <div
                    style={{
                      height: '260px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      backgroundColor: '#F7F5EF',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      padding: '1rem',
                    }}
                  >
                    <button
                      onClick={() => toggleFavorite(p.id)}
                      style={{
                        position: 'absolute',
                        top: '0.85rem',
                        left: '0.85rem',
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        minHeight: '40px',
                        borderRadius: '50%',
                        backgroundColor: favorites.includes(p.id) ? '#3B7E48' : 'rgba(255,255,255,0.92)',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        transition: 'all 0.2s ease',
                        touchAction: 'manipulation',
                        zIndex: 2,
                      }}
                      aria-label="Save to Wishlist"
                    >
                      <Heart
                        size={14}
                        color={favorites.includes(p.id) ? '#FFFFFF' : '#121E15'}
                        fill={favorites.includes(p.id) ? '#FFFFFF' : 'none'}
                      />
                    </button>

                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        maxHeight: '220px',
                        maxWidth: '90%',
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>

                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#3B7E48',
                      backgroundColor: '#F0EEE5',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      marginBottom: '0.65rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {p.category}
                  </span>

                  <h4
                    className="font-display"
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#121E15',
                      marginBottom: '0.35rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {p.name}
                  </h4>

                  <div style={{ fontSize: '0.82rem', color: '#5E6D62', marginBottom: '0.75rem', fontWeight: 600 }}>
                    {p.tag}
                  </div>

                  <p style={{ fontSize: '0.86rem', color: '#667067', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {p.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(23, 63, 43, 0.08)',
                  }}
                >
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0C291B', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <CheckCircle2 size={13} color="#3B7E48" />
                    {p.badge}
                  </span>

                  <button
                    onClick={() => onOpenEnquiryWithProduct(p.name)}
                    className="btn-circle-black"
                    title="Enquire for this product"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. 4-Grid Agro Highlights */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container-custom">
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 className="font-display" style={{ fontSize: '2.6rem', fontWeight: 800, color: '#121E15' }}>
              Agro Collection Highlights
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem',
            }}
            className="petal-agro-grid"
          >
            <div
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <img src="/assets/namo-panchakavya-fertilizer-pesticide.png" alt="Panchakavya" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#F0EEE5', padding: '1rem' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12, 41, 27, 0.3) 0%, rgba(12, 41, 27, 0.85) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h4 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800 }}>Panchakavya Tech</h4>
                <button onClick={() => onOpenEnquiryWithProduct('NAMO Panchakavya Bio-Fertilizers & Pesticides')} className="btn-circle-black" style={{ margin: '0.75rem auto 0', width: '32px', height: '32px' }}>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <img src="/assets/namo-cold-pressed-edible-oils.png" alt="Cold-Pressed Oils" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12, 41, 27, 0.3) 0%, rgba(12, 41, 27, 0.85) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h4 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800 }}>Cold-Pressed Oils</h4>
                <button onClick={() => onOpenEnquiryWithProduct('NAMO Cold-Pressed Native Edible Oils')} className="btn-circle-black" style={{ margin: '0.75rem auto 0', width: '32px', height: '32px' }}>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <img src="/assets/namo-organic-jaggery-powder.png" alt="Organic Jaggery" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12, 41, 27, 0.2) 0%, rgba(12, 41, 27, 0.85) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h4 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800 }}>Organic Jaggery</h4>
                <button onClick={() => onOpenEnquiryWithProduct('NAMO Organic Jaggery Powder')} className="btn-circle-black" style={{ margin: '0.75rem auto 0', width: '32px', height: '32px' }}>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}
            >
              <img src="/assets/namo-organic-rice-wheat-grains.png" alt="Heritage Grains" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12, 41, 27, 0.2) 0%, rgba(12, 41, 27, 0.85) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h4 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800 }}>Heritage Grains</h4>
                <button onClick={() => onOpenEnquiryWithProduct('NAMO Heritage Rice & Whole Wheat Grains')} className="btn-circle-black" style={{ margin: '0.75rem auto 0', width: '32px', height: '32px' }}>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .petal-products-grid {
            grid-template-columns: 1fr !important;
          }
          .petal-agro-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .petal-agro-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PetalGrowthSections;
