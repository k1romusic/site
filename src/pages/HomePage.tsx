import React from 'react';
import { AmbientBackdrop } from '../components/ui/AmbientBackdrop';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Header } from '../components/layout/Header';
import { ServicesSection } from '../sections/ServicesSection';
import { SelectedWorksSection } from '../sections/SelectedWorksSection';
import { FeaturedPluginsSection } from '../sections/FeaturedPluginsSection';
import { AboutSection } from '../sections/AboutSection';
import { ContactCtaSection } from '../sections/ContactCtaSection';
import { Footer } from '../components/layout/Footer';

export const HomePage: React.FC = () => {

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
        {/* 1. Selected Works (Audio Portfolio) */}
        <SelectedWorksSection />

        {/* 2. Services */}
        <ServicesSection />

        {/* 3. Featured Plugins */}
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
