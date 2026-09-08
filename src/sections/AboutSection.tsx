import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { brandConfig } from '../data/brand';
import { GlassCard } from '../components/ui/GlassCard';
import { ShieldCheck, Award, Zap, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const about = brandConfig.about;

  const statIcons = [
    <Award className="w-5 h-5 text-[#FFC300]" />,
    <Zap className="w-5 h-5 text-[#FFC300]" />,
    <Compass className="w-5 h-5 text-[#FFC300]" />,
    <ShieldCheck className="w-5 h-5 text-[#FFC300]" />
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Visual Artwork/Silhouette Container */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/10 to-transparent">
            <GlassCard className="p-8 sm:p-10 flex flex-col items-center text-center relative overflow-hidden bg-[#1e1d1b]">
              {/* Silhouette / Studio Abstract Icon */}
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-[#FFC300]/20 to-transparent border border-[#FFC300]/30 flex items-center justify-center mb-6 relative">
                <span className="text-4xl font-black text-[#FFC300] tracking-wider">
                  K1
                </span>
                <div className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-[#FFC300] text-black font-bold text-[9px] uppercase tracking-widest">
                  PRODUCER &amp; DSP
                </div>
              </div>

              <h3 className="text-2xl font-black uppercase text-[#F5F0E8] tracking-wider mb-2">
                K1RO
              </h3>
              <p className="text-xs font-mono text-[#FFC300] tracking-widest uppercase mb-6">
                MUSICIAN • MIX ENGINEER • DSP DEVELOPER
              </p>

              <div className="w-full border-t border-white/10 pt-4 flex justify-around text-center text-xs">
                <div>
                  <span className="block font-bold text-[#F5F0E8] text-sm">DAW</span>
                  <span className="text-white/40 text-[10px]">Pro Tools / Ableton</span>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <span className="block font-bold text-[#F5F0E8] text-sm">DSP</span>
                  <span className="text-white/40 text-[10px]">C++ / JUCE / ML</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Right Column: Manifesto Copy & Metrics */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-2 block">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase mb-6">
            {t.about.title}
          </h2>

          <p className="text-base sm:text-lg text-[#F5F0E8] font-medium leading-relaxed mb-6">
            {about.lead[lang]}
          </p>

          <p className="text-sm sm:text-base text-[#F5F0E8]/70 leading-relaxed mb-10">
            {about.bio[lang]}
          </p>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {about.stats.map((stat, idx) => (
              <GlassCard
                key={idx}
                hoverEffect={true}
                className="p-5 border border-white/10 bg-white/[0.02]"
              >
                <div className="flex items-center gap-2 mb-2">
                  {statIcons[idx]}
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] to-[#b38800]">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs font-medium text-[#F5F0E8]/70 tracking-wide">
                  {stat.label[lang]}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
