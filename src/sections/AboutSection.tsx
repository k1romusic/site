import React, { useState } from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { brandConfig } from '../data/brand';
import { GlassCard } from '../components/ui/GlassCard';
import {
  Award,
  TrendingUp,
  Disc3,
  Cpu,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Flame,
  Music2,
  Radio,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AboutSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const about = brandConfig.about;
  const [showAllArtists, setShowAllArtists] = useState(false);

  const statIcons = [
    <Award className="w-5 h-5 text-[#FFC300]" />,
    <TrendingUp className="w-5 h-5 text-[#FFC300]" />,
    <Disc3 className="w-5 h-5 text-[#FFC300]" />,
    <Cpu className="w-5 h-5 text-[#FFC300]" />
  ];

  const trustPillars = [
    {
      icon: <Radio className="w-5 h-5 text-[#FFC300]" />,
      title: lang === 'ru' ? 'ЧАРТ-ЗВУЧАНИЕ БЕЗ КОМПРОМИССОВ' : 'CHART-READY SOUND',
      desc:
        lang === 'ru'
          ? 'Коммерческий баланс, плотный пробивной низ и максимальная прозрачность, которая одинаково мощно звучит в наушниках, на радио и на многокиловаттных клубных саундсистемах.'
          : 'Pristine commercial balance, heavy sub punch, and crystalline high-end engineered for massive playback across all club systems and streaming DSPs.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#FFC300]" />,
      title: lang === 'ru' ? '№1 ПО ИИ-ВОКАЛУ В РФ' : '#1 AI VOCAL PIONEER IN RU',
      desc:
        lang === 'ru'
          ? 'Один из первых в стране, кто внедрил нейросети в реальный вокальный продакшн: клонирование тембра, создание песен аутентичными голосами артистов и авторские DSP-плагины.'
          : 'Pioneered neural voice synthesis and vocal cloning in Russia: creating authentic artist voices, seamless timbre replacement, and proprietary DSP plugins.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FFC300]" />,
      title: lang === 'ru' ? '10+ ЛЕТ ОПЫТА И НАДЁЖНОСТИ' : '10+ YEARS OF RELIABILITY',
      desc:
        lang === 'ru'
          ? 'Релизы на мировых мейджорах (Sony, Warner, Black Star), строгое соблюдение дедлайнов, юридическая чистота и уважение к творческому почерку каждого исполнителя.'
          : 'Major label track record (Sony, Warner, Black Star), strict deadline compliance, full NDA confidentiality, and deep respect for artist individuality.'
    }
  ];

  const primaryArtistsCount = 13;
  const visibleArtists = showAllArtists
    ? about.artists
    : about.artists.slice(0, primaryArtistsCount);

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FFC300]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FFC300]/[0.03] rounded-full blur-[110px] pointer-events-none" />

      {/* 1. Sferoom-inspired Massive Hero Showcase Card */}
      <div className="mb-14 sm:mb-16 rounded-[32px] bg-gradient-to-br from-white/[0.06] via-[#FFC300]/[0.03] to-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Col: Big Bold Numbers and Authority Badges */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
            <span className="text-[100px] sm:text-[130px] lg:text-[145px] font-black font-sans leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] via-[#ffd54f] to-[#594411] select-none block drop-shadow-[0_10px_35px_rgba(255,195,0,0.3)]">
              10+
            </span>
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#FFC300] uppercase font-bold block -mt-2 mb-6">
              {lang === 'ru' ? 'ЛЕТ В МУЗЫКАЛЬНОЙ ИНДУСТРИИ' : 'YEARS IN MUSIC INDUSTRY'}
            </span>

            {/* Micro Credibility Highlight Badges */}
            <div className="flex flex-col gap-2.5 w-full max-w-xs">
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-[#F5F0E8]/90">
                <Flame className="w-4 h-4 text-[#FFC300] shrink-0" />
                <span className="font-semibold">2 трека в чарте VK</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-[#F5F0E8]/90">
                <Disc3 className="w-4 h-4 text-[#FFC300] shrink-0" />
                <span className="font-semibold">11+ топ-лейблов (Sony, Warner, BS...)</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/40 border border-[#FFC300]/30 text-xs text-[#FFC300]">
                <Cpu className="w-4 h-4 text-[#FFC300] shrink-0" />
                <span className="font-bold">Пионер ИИ-вокала в России</span>
              </div>
            </div>
          </div>

          {/* Right Col: High-Impact Selling Narrative */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC300]/15 border border-[#FFC300]/30 text-xs font-bold text-[#FFC300] uppercase tracking-widest w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F0E8] uppercase tracking-tight leading-tight mb-4">
              {about.title[lang]}
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E8]/90 font-medium leading-relaxed mb-4">
              {about.lead[lang]}
            </p>

            <p className="text-xs sm:text-sm text-[#F5F0E8]/70 leading-relaxed">
              {about.bio[lang]}
            </p>
          </div>
        </div>

        {/* Labels Banner Strip: Black Star, Warner, Sony... */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FFC300] font-bold mb-3.5">
            <Disc3 className="w-3.5 h-3.5" />
            <span>{t.about.labelsTitle}</span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {about.labels.map((label, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#F5F0E8] hover:border-[#FFC300]/50 hover:text-[#FFC300] transition-colors shadow-sm"
              >
                <CheckCircle2 className="w-3 h-3 text-[#FFC300]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Artists Roster: Real credits from VK profile */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between gap-4 mb-3.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FFC300] font-bold">
              <Music2 className="w-3.5 h-3.5" />
              <span>{t.about.artistsTitle}</span>
            </div>

            <button
              type="button"
              onClick={() => setShowAllArtists(!showAllArtists)}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#FFC300] hover:text-white transition-colors cursor-pointer"
            >
              <span>{showAllArtists ? t.about.hideArtists : t.about.showAllArtists}</span>
              {showAllArtists ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <AnimatePresence>
              {visibleArtists.map((artist, idx) => {
                const isFeatured = idx < 6;
                return (
                  <motion.span
                    key={artist}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className={`inline-flex items-center px-2.5 sm:px-3 py-1 rounded-md text-xs transition-all ${
                      isFeatured
                        ? 'bg-[#FFC300]/10 border border-[#FFC300]/35 text-[#FFC300] font-bold shadow-[0_0_12px_rgba(255,195,0,0.15)]'
                        : 'bg-white/5 border border-white/10 text-white/80 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {artist}
                  </motion.span>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 2. 4 Stat Credibility Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-16">
        {about.stats.map((stat, idx) => (
          <GlassCard
            key={idx}
            hoverEffect={true}
            glowOnHover={true}
            className="p-5 sm:p-7 border border-white/10 bg-white/[0.03] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FFC300]">
                {statIcons[idx]}
              </span>
              <span className="text-xs font-mono text-white/25">0{idx + 1}</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] to-[#b38800] tracking-tight block mb-1">
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#F5F0E8] tracking-wide mb-1">
                {stat.label[lang]}
              </p>
              <p className="text-[11px] text-[#F5F0E8]/55 leading-tight">
                {stat.description[lang]}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 3. Three Trust & Quality Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {trustPillars.map((pillar, idx) => (
          <GlassCard
            key={idx}
            hoverEffect={true}
            className="p-6 sm:p-7 border border-white/10 bg-black/30 flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC300]">
              {pillar.icon}
            </div>
            <h3 className="text-sm sm:text-base font-black uppercase text-[#F5F0E8] tracking-wide mt-1">
              {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F0E8]/65 leading-relaxed">
              {pillar.desc}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

