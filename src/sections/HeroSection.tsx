import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { Button } from '../components/ui/Button';
import { AudioVisualizerLogo } from '../components/ui/AudioVisualizerLogo';
import { ArrowDown, Disc3, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
      {/* Background Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#FFC300]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-[#b38800]/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #FFC300 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FFC300] animate-ping" />
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Main Brand Title - Conforming to K1RO Global Rule */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] to-[#b38800] leading-none mb-6 select-none drop-shadow-2xl"
        >
          K1RO
        </motion.h1>

        {/* Centered Brand Visualizer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <AudioVisualizerLogo size="lg" animated={true} />
        </motion.div>

        {/* Core Manifesto Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.15em] uppercase text-[#F5F0E8] mb-6"
        >
          <span>{t.hero.titleLine1}</span>
          <span className="text-[#FFC300]">•</span>
          <span>{t.hero.titleLine2}</span>
          <span className="text-[#FFC300]">•</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-[#b38800]">
            {t.hero.titleLine3}
          </span>
        </motion.div>

        {/* Subtitle Positioning */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-[#F5F0E8]/70 leading-relaxed font-normal mb-10 px-4"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* 2 Key Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4"
        >
          <a href="#works" className="w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              glow={true}
              icon={<Disc3 className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </Button>
          </a>
          <a href="#plugins" className="w-full sm:w-auto">
            <Button
              variant="glass"
              size="lg"
              icon={<Cpu className="w-5 h-5 text-[#FFC300]" />}
              className="w-full sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-[#F5F0E8]/40 uppercase pointer-events-none"
      >
        <span>{t.hero.scrollDown}</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FFC300]" />
      </motion.div>
    </section>
  );
};
