import React from 'react';
import { AmbientBackdrop } from '../components/ui/AmbientBackdrop';
import { AnnouncementBar } from '../components/layout/AnnouncementBar';
import { Header } from '../components/layout/Header';
import { ServicesSection } from '../sections/ServicesSection';
import { SelectedWorksSection } from '../sections/SelectedWorksSection';
import { AiToolsOverviewSection } from '../sections/AiToolsOverviewSection';
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
        {/* 1. About & Philosophy (10+ Years of Precision, Stats) */}
        <AboutSection />

        {/* 2. Services (What I do / Чем я могу быть полезен) */}
        <ServicesSection />

        {/* 3. Selected Works (Audio Portfolio Carousel - 6 items) */}
        <SelectedWorksSection />

        {/* 4. AI Tools Overview (Showcase with thumbnails leading to /plugins) */}
        <AiToolsOverviewSection />

        {/* 5. Contact CTA (3 identical buttons: TG, VK, Email with 'Написать') */}
        <ContactCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
