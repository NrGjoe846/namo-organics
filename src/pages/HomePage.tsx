import React, { useState } from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';
import { AelineHeroSection } from '../components/AelineHeroSection';
import { AelineMissionSection } from '../components/AelineMissionSection';
import { TerravaSections } from '../components/TerravaSections';
import { PetalGrowthSections } from '../components/PetalGrowthSections';
import { PanchakavyaSection } from '../components/PanchakavyaSection';
import { PetNutritionSection } from '../components/PetNutritionSection';
import { FounderSection } from '../components/FounderSection';
import { AelineInitiativesSection } from '../components/AelineInitiativesSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { EnquiryModal } from '../components/EnquiryModal';

export const HomePage: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>('Organic Fertilizers');

  const handleOpenEnquiryWithProduct = (productName: string) => {
    setSelectedProductForEnquiry(productName);
    setIsEnquiryModalOpen(true);
  };

  const handleOpenGeneralEnquiry = () => {
    setSelectedProductForEnquiry('Organic Fertilizers');
    setIsEnquiryModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#F7F5EF' }}>
      {/* Subtle organic film grain texture overlay */}
      <div className="film-grain" />

      {/* Custom Desktop Interactive Cursor & Scroll Progress Indicator */}
      <CustomCursor />

      {/* Floating Luxury Frosted Pill Navbar */}
      <Navbar onOpenEnquiry={handleOpenGeneralEnquiry} />

      <main>
        {/* 01. REFERENCE A: HERO SECTION WITH IMAGE BACKGROUND & 4-STAT BAR */}
        <AelineHeroSection onOpenEnquiry={handleOpenGeneralEnquiry} />

        {/* 02. REFERENCE A: MISSION & 3 TALL VERTICAL PHOTOGRAPHIC CARDS */}
        <AelineMissionSection onOpenEnquiry={handleOpenGeneralEnquiry} />

        {/* 03. REFERENCE B: TERRAVA GREEN INFRASTRUCTURE & 3-CARD STACK */}
        <TerravaSections onOpenEnquiry={handleOpenGeneralEnquiry} />

        {/* 04. REFERENCE C: PETAL GROWTH DARK BOTANICAL & PRODUCT SHOWCASE */}
        <PetalGrowthSections onOpenEnquiryWithProduct={handleOpenEnquiryWithProduct} />

        {/* 05. PANCHAKAVYA 5-INGREDIENT COW-DERIVED SCIENCE & 40% WATER SAVING */}
        <PanchakavyaSection />

        {/* 06. ORGANIC PET NUTRITION & WELLNESS SECTION */}
        <PetNutritionSection onOpenEnquiryWithProduct={handleOpenEnquiryWithProduct} />

        {/* 07. FOUNDER'S VISION & LEADERSHIP PERSPECTIVE */}
        <FounderSection onOpenEnquiry={handleOpenGeneralEnquiry} />

        {/* 07. INITIATIVES & LIME ACCENT NEWSLETTER */}
        <AelineInitiativesSection onOpenEnquiry={handleOpenGeneralEnquiry} />

        {/* 08. FINAL CINEMATIC CALL TO ACTION */}
        <FinalCTASection onOpenEnquiry={handleOpenGeneralEnquiry} />

        {/* 09. CONTACT SECTION & QUICK ENQUIRY */}
        <ContactSection />
      </main>

      {/* 09. LUXURY BOTANICAL FOOTER */}
      <Footer />

      {/* Global Interactive Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProduct={selectedProductForEnquiry}
      />
    </div>
  );
};

export default HomePage;
