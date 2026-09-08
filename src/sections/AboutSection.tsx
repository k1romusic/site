import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { brandConfig } from '../data/brand';
import { GlassCard } from '../components/ui/GlassCard';
import { ShieldCheck, Award, Zap, Compass, CheckCircle2, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const about = brandConfig.about;

  const statIcons = [
    <Award className="w-5 h-5 text-[#FFC300]" />,
    <Zap className="w-5 h-5 text-[#FFC300]" />,
    <Compass className="w-5 h-5 text-[#FFC300]" />,
    <ShieldCheck className="w-5 h-5 text-[#FFC300]" />
  ];

  const gearTags = [
    'SSL 4000 BUS COMPRESSOR',
    'TUBE-TECH CL 1B',
    'NEVE 1073 PREAMP',
    'DOLBY ATMOS 7.1.4',
    'JUCE C++ DSP',
    'PRISM SOUND CONVERTERS',
    'BAREFOOT SOUND MONITORS',
    '16X LINEAR OVERSAMPLING'
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFC300]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Sferoom-inspired Massive Stat Hero Card */}
      <div className="mb-16 rounded-[32px] bg-gradient-to-r from-white/[0.05] via-[#FFC300]/[0.03] to-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Col 1: Enormous Typography Number */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-[100px] sm:text-[140px] lg:text-[160px] font-black font-sans leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] via-[#ffd54f] to-[#3a2e12] select-none block drop-shadow-2xl">
              10+
            </span>
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#FFC300] uppercase block -mt-2">
              YEARS OF AUDIO PRECISION
            </span>
          </div>

          {/* Col 2: High-Impact Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-xs font-bold text-[#FFC300] uppercase tracking-widest w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {t.about.badge}
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5F0E8] uppercase tracking-wide leading-tight mb-4">
              {about.lead[lang]}
            </h3>
            <p className="text-sm sm:text-base text-[#F5F0E8]/70 leading-relaxed">
              {about.bio[lang]}
            </p>
          </div>
        </div>

        {/* Floating Studio Tech Badges Strip */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-2 sm:gap-3">
          {gearTags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/70 hover:border-[#FFC300]/40 hover:text-[#FFC300] transition-colors"
            >
              <CheckCircle2 className="w-3 h-3 text-[#FFC300]" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 4 Stats Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {about.stats.map((stat, idx) => (
          <GlassCard
            key={idx}
            hoverEffect={true}
            glowOnHover={true}
            className="p-6 sm:p-8 border border-white/10 bg-white/[0.03] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FFC300]">
                {statIcons[idx]}
              </span>
              <span className="text-xs font-mono text-white/20">0{idx + 1}</span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] to-[#b38800] tracking-tight block mb-2">
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#F5F0E8]/75 tracking-wide leading-snug">
                {stat.label[lang]}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
