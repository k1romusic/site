import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { servicesList } from '../data/services';
import { GlassCard } from '../components/ui/GlassCard';
import { Sliders, Activity, Disc, Sparkles, Wand2, Terminal, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { lang, t } = useTranslation();

  const iconMap: Record<string, React.ReactNode> = {
    'music-production': <Disc className="w-6 h-6 text-[#FFC300]" />,
    'mixing': <Sliders className="w-6 h-6 text-[#FFC300]" />,
    'mastering': <Activity className="w-6 h-6 text-[#FFC300]" />,
    'sound-design': <Sparkles className="w-6 h-6 text-[#FFC300]" />,
    'ai-music': <Wand2 className="w-6 h-6 text-[#FFC300]" />,
    'audio-plugins': <Terminal className="w-6 h-6 text-[#FFC300]" />
  };

  return (
    <section id="services" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#FFC300]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-3">
            <Sparkles className="w-3 h-3" />
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F0E8] uppercase">
            {t.services.title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#F5F0E8]/70 max-w-lg leading-relaxed">
          {t.services.subtitle}
        </p>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service, idx) => {
          const isHighlight = idx === 0 || idx === 5;
          return (
            <GlassCard
              key={service.id}
              hoverEffect={true}
              glowOnHover={true}
              className={`p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group ${
                isHighlight
                  ? 'border-[#FFC300]/30 bg-gradient-to-b from-[#FFC300]/[0.06] via-white/[0.04] to-transparent shadow-[0_15px_35px_rgba(0,0,0,0.4)]'
                  : 'border-white/10'
              }`}
            >
              {/* Header inside Card */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-[#FFC300]/50 group-hover:bg-[#FFC300]/10 transition-all duration-300">
                  {iconMap[service.id]}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-2xl font-black text-white/15 group-hover:text-[#FFC300]/40 transition-colors">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-black text-[#F5F0E8] tracking-wide mb-3 uppercase group-hover:text-[#FFC300] transition-colors flex items-center justify-between">
                  <span>{service.title[lang]}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#FFC300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-sm text-[#F5F0E8]/70 leading-relaxed">
                  {service.shortDescription[lang]}
                </p>
              </div>

              {/* Deliverables with Checkmarks */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC300] block mb-2.5">
                  {t.services.deliverablesLabel}
                </span>
                <ul className="space-y-2 text-xs text-[#F5F0E8]/65">
                  {service.deliverables[lang].slice(0, 2).map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC300] shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
