import React from 'react';
import { AmbientBackdrop } from '../components/ui/AmbientBackdrop';
import { MarqueeTicker } from '../components/ui/MarqueeTicker';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Header } from '../components/layout/Header';
import { HeroSection } from '../sections/HeroSection';
import { ServicesSection } from '../sections/ServicesSection';
import { SelectedWorksSection } from '../sections/SelectedWorksSection';
import { FeaturedPluginsSection } from '../sections/FeaturedPluginsSection';
import { AboutSection } from '../sections/AboutSection';
import { ContactCtaSection } from '../sections/ContactCtaSection';
import { Footer } from '../components/layout/Footer';

export const HomePage: React.FC = () => {
  const marqueeItems1 = [
    'MUSIC PRODUCTION',
    'SURGICAL MIXING',
    'ANALOG MASTERING',
    '16X LINEAR PHASE OVERSAMPLING',
    'DOLBY ATMOS 7.1.4',
    'PROPRIETARY DSP PLUGINS',
    'SOUND DESIGN FOR MEDIA',
    'AI-ASSISTED PRODUCTION',
    'ZERO DIGITAL CLIPPING'
  ];

  const marqueeItems2 = [
    'AI VOICE (VOCAL CLONING)',
    'SYNCHROVOICE (TIMING & PITCH)',
    'STEM STUDIO (DEMIXING)',
    'NEURAL DSP FRAMEWORK',
    'APPLE SILICON UNIVERSAL',
    'WINDOWS 64-BIT VST3',
    'ARA2 VOCAL INTEGRATION',
    'PHASE COHERENCE 99.8%',
    'HIGH FIDELITY EXTRACTION'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#252422] text-[#F5F0E8] relative selection:bg-[#FFC300] selection:text-black">
      {/* Cinematic Ambient Drifting Light Orbs & Audio Grid */}
      <AmbientBackdrop />

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header (Desktop nav + Mobile sheet menu) */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        {/* 3. Hero */}
        <HeroSection />

        {/* Dynamic Running Marquee Ticker 1 */}
        <MarqueeTicker items={marqueeItems1} speed={30} />

        {/* 4. Services */}
        <ServicesSection />

        {/* 5. Selected Works */}
        <SelectedWorksSection />

        {/* Dynamic Running Marquee Ticker 2 (Reverse direction) */}
        <MarqueeTicker items={marqueeItems2} speed={35} reverse={true} />

        {/* 6. Featured Plugins */}
        <FeaturedPluginsSection />

        {/* 7. About & Credibility */}
        <AboutSection />

        {/* 8. Final CTA */}
        <ContactCtaSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};
