import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { servicesList } from '../data/services';
import { GlassCard } from '../components/ui/GlassCard';
import { Sliders, Activity, Disc, Sparkles, Wand2, Terminal, CheckCircle2 } from 'lucide-react';

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
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-2 block">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase">
            {t.services.title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#F5F0E8]/60 max-w-lg leading-relaxed">
          {t.services.subtitle}
        </p>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service, idx) => {
          const isFeatured = idx === 0 || idx === 5; // Music Production & Audio Plugins get subtle accent
          return (
            <GlassCard
              key={service.id}
              hoverEffect={true}
              glowOnHover={true}
              className={`p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group ${
                isFeatured ? 'border-[#FFC300]/20 bg-white/[0.04]' : ''
              }`}
            >
              {/* Decorative Corner Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-[#FFC300]/40 transition-all">
                  {iconMap[service.id]}
                </div>
                <span className="font-mono text-2xl font-bold text-white/15 group-hover:text-[#FFC300]/40 transition-colors">
                  {service.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3 className="text-xl font-black text-[#F5F0E8] tracking-wide mb-3 uppercase group-hover:text-[#FFC300] transition-colors">
                  {service.title[lang]}
                </h3>
                <p className="text-sm text-[#F5F0E8]/70 leading-relaxed">
                  {service.shortDescription[lang]}
                </p>
              </div>

              {/* Deliverables */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC300] block mb-2">
                  {t.services.deliverablesLabel}
                </span>
                <ul className="space-y-1.5 text-xs text-[#F5F0E8]/60">
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
