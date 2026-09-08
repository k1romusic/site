import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { Button } from '../components/ui/Button';
import { AudioVisualizerLogo } from '../components/ui/AudioVisualizerLogo';
import { Disc3, Cpu, Sparkles, Sliders, Volume2, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
      {/* Dynamic Glowing Spotlight Blobs behind Hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[800px] h-[340px] sm:h-[650px] lg:h-[800px] bg-gradient-to-tr from-[#FFC300]/15 via-[#b38800]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-12 -left-20 w-80 h-80 bg-[#FFC300]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#b38800]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Sferoom-inspired Floating Capsule Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center gap-2"
        >
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-[#FFC300] via-[#e6b000] to-transparent shadow-[0_0_20px_rgba(255,195,0,0.2)]">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#252422]/90 backdrop-blur-xl text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#F5F0E8]">
              <span className="w-2 h-2 rounded-full bg-[#FFC300] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#FFC300]" />
              {t.hero.badge}
            </span>
          </div>
        </motion.div>

        {/* Massive Headline with Graphic Pill Insets (Inspired by Sferoom.space editorial typography) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center mb-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] via-[#ffd54f] to-[#b38800] leading-none select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            K1RO
          </h1>

          {/* Centered Dynamic Soundwave Visualizer */}
          <div className="mt-4 mb-2 flex items-center gap-3">
            <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FFC300]/60" />
            <AudioVisualizerLogo size="lg" animated={true} />
            <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FFC300]/60" />
          </div>
        </motion.div>

        {/* Editorial Subheading with Stylized Capsule Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.12em] uppercase text-[#F5F0E8] mb-6"
        >
          <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 shadow-inner">
            {t.hero.titleLine1}
          </span>
          <span className="text-[#FFC300] font-light">•</span>
          <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 shadow-inner">
            {t.hero.titleLine2}
          </span>
          <span className="text-[#FFC300] font-light">•</span>
          <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-[#FFC300]/20 to-transparent border border-[#FFC300]/40 text-[#FFC300] shadow-[0_0_15px_rgba(255,195,0,0.15)]">
            {t.hero.titleLine3}
          </span>
        </motion.div>

        {/* Subtitle Positioning */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-[#F5F0E8]/75 leading-relaxed font-normal mb-8 px-4"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* 2 Key Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 mb-10"
        >
          <a href="#works" className="w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              glow={true}
              icon={<Disc3 className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-[0_10px_30px_rgba(255,195,0,0.3)]"
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

        {/* Visual Live Audio Dashboard Indicator (Floating Tech Status) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="w-full max-w-lg mx-auto p-3.5 rounded-2xl bg-gradient-to-r from-white/[0.05] via-white/[0.08] to-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-4 text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-[#FFC300] animate-pulse" />
            <span className="text-white/60 uppercase">DSP Clock:</span>
            <span className="text-[#FFC300] font-bold">96 kHz / 32-bit</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10" />
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#FFC300]" />
            <span className="text-white/60 uppercase">Headroom:</span>
            <span className="text-[#F5F0E8] font-bold">+18 dBu Clean</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#F5F0E8]/40 uppercase pointer-events-none"
      >
        <span>{t.hero.scrollDown}</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FFC300]" />
      </motion.div>
    </section>
  );
};
