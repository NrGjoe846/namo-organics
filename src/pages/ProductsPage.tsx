import React, { useState } from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { PetalGrowthSections } from '../components/PetalGrowthSections';
import { ProductShowcaseSection } from '../components/ProductShowcaseSection';
import { PanchakavyaSection } from '../components/PanchakavyaSection';
import { ServicesSection } from '../components/ServicesSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Footer } from '../components/Footer';
import { EnquiryModal } from '../components/EnquiryModal';

export const ProductsPage: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>('NAMO Panchakavya Bio-Fertilizer & Pesticide');

  const handleOpenEnquiryWithProduct = (productName: string) => {
    setSelectedProductForEnquiry(productName);
    setIsEnquiryModalOpen(true);
  };

  const handleOpenGeneralEnquiry = () => {
    setSelectedProductForEnquiry('NAMO Panchakavya Bio-Fertilizer & Pesticide');
    setIsEnquiryModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#F7F5EF' }}>
      <div className="film-grain" />
      <CustomCursor />
      <Navbar onOpenEnquiry={handleOpenGeneralEnquiry} />

      <main>
        {/* Page Hero Header */}
        <PageHeroHeader
          tag="BIO-INPUTS &amp; CURATED GOODS"
          title="Traditional Wisdom."
          highlightText="Verified Agronomic Science."
          subtitle="Explore our comprehensive range of Panchakavya-based fertilizers, organic pest repellents, algae cattle feed supplements, desi cow ghee, raw wild honey, and heritage pulses."
          bgImage="/assets/hero-mid.jpg"
        />

        {/* 01. Petal Growth Dark Botanical Showcase & Category Filter Grid with All 5 Products */}
        <PetalGrowthSections onOpenEnquiryWithProduct={handleOpenEnquiryWithProduct} />

        {/* 02. In-Depth Formulation Deep Dives & Agronomic Technical Specifications */}
        <ProductShowcaseSection onOpenEnquiryWithProduct={handleOpenEnquiryWithProduct} />

        {/* 03. Panchakavya 5-Ingredient Deep Dive & Science */}
        <PanchakavyaSection />

        {/* 04. 9 Comprehensive Services & Field Agronomic Advisory */}
        <ServicesSection onSelectService={(srv) => handleOpenEnquiryWithProduct(srv)} />

        {/* 05. Call to Action */}
        <FinalCTASection onOpenEnquiry={handleOpenGeneralEnquiry} />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProduct={selectedProductForEnquiry}
      />
    </div>
  );
};

export default ProductsPage;
