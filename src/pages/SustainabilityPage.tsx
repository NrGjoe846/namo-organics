import React, { useState } from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { SustainabilitySection } from '../components/SustainabilitySection';
import { TerravaSections } from '../components/TerravaSections';
import { BusinessEcosystemSection } from '../components/BusinessEcosystemSection';
import { TargetCustomersSection } from '../components/TargetCustomersSection';
import { AelineInitiativesSection } from '../components/AelineInitiativesSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Footer } from '../components/Footer';
import { EnquiryModal } from '../components/EnquiryModal';

export const SustainabilityPage: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#F7F5EF' }}>
      <div className="film-grain" />
      <CustomCursor />
      <Navbar onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* Page Hero Header */}
        <PageHeroHeader
          tag="PEOPLE • PLANET • PROSPERITY"
          title="Cultivating a"
          highlightText="Greener Tomorrow"
          subtitle="Transforming degraded soil, preserving groundwater, and fostering long-term agricultural sustainability through natural bio-inputs and ethical farmer partnerships."
          bgImage="/assets/sunset-farm.jpg"
        />

        {/* 01. Sustainability: Working With Nature Deep Botanical Panel */}
        <SustainabilitySection />

        {/* 02. Terrava Green Infrastructure & System Controls */}
        <TerravaSections onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

        {/* 03. End-to-End Farm-to-Market Value Chain & Distribution */}
        <BusinessEcosystemSection />

        {/* 04. Stakeholder Ecosystem (Farmers, FPOs, Dealers, Consumers) */}
        <TargetCustomersSection />

        {/* 05. Real Actions, Real Impact Initiatives & Newsletter */}
        <AelineInitiativesSection onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

        {/* 06. Call to Action */}
        <FinalCTASection onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProduct="Organic Fertilizers"
      />
    </div>
  );
};

export default SustainabilityPage;
