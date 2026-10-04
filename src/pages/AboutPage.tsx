import React, { useState } from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';
import { PageHeroHeader } from '../components/PageHeroHeader';
import { IntroductionSection } from '../components/IntroductionSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { FounderSection } from '../components/FounderSection';
import { WhyNamoSection } from '../components/WhyNamoSection';
import { MarketContextSection } from '../components/MarketContextSection';
import { ValuePropositionSection } from '../components/ValuePropositionSection';
import { FutureGrowthSection } from '../components/FutureGrowthSection';
import { BrandStatementSection } from '../components/BrandStatementSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Footer } from '../components/Footer';
import { EnquiryModal } from '../components/EnquiryModal';

export const AboutPage: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#F7F5EF' }}>
      <div className="film-grain" />
      <CustomCursor />
      <Navbar onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      <main>
        {/* Page Hero Header */}
        <PageHeroHeader
          tag="ABOUT NAMO ORGANIC"
          title="Saving India’s Soil."
          highlightText="Nourishing India’s Families."
          subtitle="Natural Agriculture & Modern Organic Private Limited is a professionally managed enterprise bringing ancient Indian agrarian wisdom and modern biotechnology together."
          bgImage="/assets/hero-bg.jpg"
        />

        {/* 01. Brand Introduction & Corporate Structure */}
        <IntroductionSection />

        {/* 02. Founder's Perspective & Leadership */}
        <FounderSection
          isAboutPage={true}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        />

        {/* 03. Vision, Mission & Environmental Challenges */}
        <VisionMissionSection />

        {/* 04. Why NAMO Organic / 4 USPs */}
        <WhyNamoSection />

        {/* 05. The Agricultural Landscape & Macroeconomic Context */}
        <MarketContextSection />

        {/* 06. Value Proposition (Soil, Resources, Impact) */}
        <ValuePropositionSection />

        {/* 07. Looking Ahead / Future Strategic Scaling */}
        <FutureGrowthSection />

        {/* 08. Government & Regulatory Frameworks */}
        <BrandStatementSection />

        {/* 09. Call to Action */}
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

export default AboutPage;
