import React, { useState } from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { brandConfig } from '../data/brand';
import { scrollToTarget } from '../hooks/useSmoothScroll';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  Music2,
  Disc3,
  Cpu,
  Mic2,
  Layers,
  ArrowUpRight,
  Headphones,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AboutSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const about = brandConfig.about;
  const [showFullArtists, setShowFullArtists] = useState(false);

  const aiIcons = [
    <Mic2 className="w-5 h-5 text-[#FFC300]" />,
    <Layers className="w-5 h-5 text-[#FFC300]" />,
    <Music2 className="w-5 h-5 text-[#FFC300]" />
  ];

  const handleScrollTo = (target: string) => {
    scrollToTarget(target, { offset: -70 });
  };

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Ambient Drifting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-[#FFC300]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Glassmorphism Showcase Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl">
        {/* Glow Accent Top Right */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FFC300]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* 1. Primary Header: K1RO -> SOUND & MUSIC PRODUCTION */}
        <div className="max-w-4xl mb-8 sm:mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-xs font-black tracking-[0.25em] text-[#FFC300] uppercase mb-4 shadow-[0_0_15px_rgba(255,195,0,0.1)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{about.badge[lang]}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] via-[#ffd54f] to-[#b38800] uppercase tracking-[0.08em] leading-tight mb-5">
            {about.title[lang]}
          </h2>

          <p className="text-base sm:text-lg text-[#F5F0E8]/95 font-medium leading-relaxed mb-4">
            {about.lead[lang]}
          </p>

          <p className="text-sm sm:text-base text-[#F5F0E8]/75 leading-relaxed">
            {about.bio[lang]}
          </p>
        </div>

        {/* 2. Minimalist Typographic Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-8 sm:my-10 pt-8 border-t border-white/10 relative z-10">
          {about.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-[#FFC300]/40 transition-all duration-300 flex flex-col justify-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] to-[#b38800] tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-bold font-mono tracking-wider text-[#F5F0E8]/80 uppercase">
                {stat.label[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* 3. RELEASES / LABELS (Compact, clean typographic strip) */}
        <div className="my-8 sm:my-10 pt-8 border-t border-white/10 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFC300] font-bold mb-4">
            <Disc3 className="w-3.5 h-3.5" />
            <span>{t.about.labelsTitle}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {about.labels.map((label, idx) => (
              <span
                key={idx}
                className="px-3 sm:px-3.5 py-1.5 rounded-lg bg-black/50 border border-white/10 text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#F5F0E8]/90 hover:border-[#FFC300]/50 hover:text-[#FFC300] transition-colors"
              >
                {label}
              </span>
            ))}
            <span className="text-xs font-mono text-white/40 px-2 py-1 italic">
              {t.about.andOthers}
            </span>
          </div>
        </div>

        {/* 4. ARTISTS (Featured + Expandable Full Roster) */}
        <div className="my-8 sm:my-10 pt-8 border-t border-white/10 relative z-10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFC300] font-bold">
              <Music2 className="w-3.5 h-3.5" />
              <span>{t.about.artistsTitle}</span>
            </div>

            <button
              type="button"
              onClick={() => setShowFullArtists(!showFullArtists)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FFC300] hover:text-white transition-colors cursor-pointer"
            >
              <span>{showFullArtists ? t.about.hideArtists : t.about.showAllArtists}</span>
              {showFullArtists ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Featured Artists (Always visible, clean tags) */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {about.featuredArtists.map((artist) => (
              <span
                key={artist}
                className="px-3 py-1 rounded-md text-xs sm:text-sm bg-white/5 border border-white/10 text-[#F5F0E8] font-medium"
              >
                {artist}
              </span>
            ))}
            {!showFullArtists && (
              <button
                type="button"
                onClick={() => setShowFullArtists(true)}
                className="px-3 py-1 rounded-md text-xs sm:text-sm bg-white/5 border border-dashed border-white/20 text-[#FFC300] hover:border-[#FFC300] transition-colors cursor-pointer"
              >
                {t.about.andOthers} ...
              </button>
            )}
          </div>

          {/* Full List Expandable Drawer */}
          <AnimatePresence>
            {showFullArtists && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3 pt-3 border-t border-white/5"
              >
                <div className="flex flex-wrap gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5">
                  {about.allArtists.map((artist) => (
                    <span
                      key={artist}
                      className="px-2.5 py-1 rounded-md text-xs bg-white/[0.04] border border-white/10 text-white/80"
                    >
                      {artist}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 text-xs text-white/40 italic flex items-center">
                    {t.about.andOthers}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 5. AI × MUSIC — MAIN MODERN ADVANTAGE */}
        <div className="mt-8 sm:mt-10 pt-8 border-t border-white/10 relative z-10">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFC300]/[0.08] via-white/[0.02] to-black/60 border border-[#FFC300]/30 shadow-lg mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-[#FFC300]/15 border border-[#FFC300]/30 text-[#FFC300]">
                  <Cpu className="w-5 h-5" />
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] via-[#ffd54f] to-white uppercase tracking-wider">
                  {about.aiOverview.title[lang]}
                </h3>
              </div>
              <span className="text-[11px] font-mono tracking-widest text-[#FFC300]/80 uppercase px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/20 w-fit">
                NEXT GENERATION WORKFLOW
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#F5F0E8]/90 leading-relaxed max-w-4xl mb-6 font-medium">
              {about.aiOverview.lead[lang]}
            </p>

            {/* 3 Directions: AI VOCAL, AI PRODUCTION, AI MUSIC */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {about.aiOverview.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-black/50 border border-white/10 flex flex-col gap-2 hover:border-[#FFC300]/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {aiIcons[idx]}
                    <span className="text-xs sm:text-sm font-black text-[#FFC300] tracking-wider uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#F5F0E8]/70 leading-relaxed">
                    {pillar.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. CTA Buttons (ПОСЛУШАТЬ РАБОТЫ / ОБСУДИТЬ ПРОЕКТ) */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-xs sm:text-sm text-white/50 text-center sm:text-left font-mono">
            EXPERTISE • CREDIBILITY • EXPERIENCE • MODERN TECHNOLOGY
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleScrollTo('works')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-[#F5F0E8] font-bold text-xs uppercase tracking-wider hover:border-[#FFC300]/50 hover:bg-[#FFC300]/10 hover:text-[#FFC300] transition-all cursor-pointer active:scale-95 shadow-md"
            >
              <Headphones className="w-4 h-4" />
              <span>{t.about.ctaWorks}</span>
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FFC300] to-[#e6b000] text-black font-black text-xs uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_25px_rgba(255,195,0,0.4)] transition-all cursor-pointer active:scale-95 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.about.ctaContact}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


