import React from 'react';
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
  return (
    <div className="min-h-screen flex flex-col bg-[#252422] text-[#F5F0E8]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header (Desktop nav + Mobile sheet menu) */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 3. Hero */}
        <HeroSection />

        {/* 4. Services */}
        <ServicesSection />

        {/* 5. Selected Works */}
        <SelectedWorksSection />

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
