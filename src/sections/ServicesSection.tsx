import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/I18nContext';
import { servicesList } from '../data/services';
import { GlassCard } from '../components/ui/GlassCard';
import { Sliders, Music, Mic2, Cpu, CheckCircle2, ArrowUpRight, Sparkles, Disc, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ServicesSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ReactNode> = {
    'mixing-mastering': <Sliders className="w-6 h-6 text-[#FFC300]" />,
    'custom-song': <Disc className="w-6 h-6 text-[#FFC300]" />,
    'arrangement-beat': <Music className="w-6 h-6 text-[#FFC300]" />,
    'ai-voice-production': <Mic2 className="w-6 h-6 text-[#FFC300]" />,
    'ai-tools': <Cpu className="w-6 h-6 text-[#FFC300]" />
  };

  const scrollServices = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="services" className="relative pt-6 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#FFC300]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-3">
            <Sparkles className="w-3 h-3" />
            {lang === 'ru' ? 'ЧЕМ Я МОГУ БЫТЬ ПОЛЕЗЕН' : 'WHAT I OFFER'}
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F0E8] uppercase">
            {lang === 'ru' ? 'УСЛУГИ & ПРОДАКШН' : 'SERVICES & PRODUCTION'}
          </h2>
        </div>

        {/* Desktop Carousel Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollServices('left')}
            aria-label="Листать услуги влево"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFC300] hover:bg-[#FFC300]/10 text-white hover:text-[#FFC300] transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollServices('right')}
            aria-label="Листать услуги вправо"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFC300] hover:bg-[#FFC300]/10 text-white hover:text-[#FFC300] transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel of Services (Swipeable on mobile with smooth popup animations, scroll snap on desktop) */}
      <div className="relative group/carousel">
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 pb-4 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {servicesList.map((service, idx) => {
            const isAiTools = service.id === 'ai-tools';
            const isVoice = service.id === 'ai-voice-production';
            const cardLink = isAiTools ? '/plugins' : '#contact';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                className="flex-none w-[85vw] sm:w-[360px] lg:w-[380px] snap-start"
              >
                {isAiTools ? (
                  <Link to="/plugins" className="block group h-full select-none">
                    <GlassCard
                      hoverEffect={true}
                      glowOnHover={true}
                      className="p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 border-[#FFC300]/30 bg-gradient-to-br from-[#FFC300]/[0.08] via-white/[0.03] to-transparent shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                    >
                      {/* Header inside Card */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-[#FFC300]/50 group-hover:bg-[#FFC300]/10 transition-all duration-300">
                          {iconMap[service.id] || <Sparkles className="w-6 h-6 text-[#FFC300]" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full bg-[#FFC300]/20 border border-[#FFC300]/40 text-[10px] font-mono text-[#FFC300] font-bold">
                            VST / AU
                          </span>
                          <span className="font-mono text-xl font-black text-white/15 group-hover:text-[#FFC300]/40 transition-colors">
                            {service.number}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="mb-6">
                        <h3 className="text-lg sm:text-xl font-black text-[#F5F0E8] tracking-wide mb-2.5 uppercase group-hover:text-[#FFC300] transition-colors flex items-center justify-between">
                          <span>{service.title[lang]}</span>
                          <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#FFC300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 ml-2" />
                        </h3>
                        <p className="text-xs sm:text-sm text-[#F5F0E8]/70 leading-relaxed">
                          {service.shortDescription[lang]}
                        </p>
                      </div>

                      {/* Deliverables with Checkmarks */}
                      <div className="border-t border-white/10 pt-3.5 mt-auto">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC300] block mb-2">
                          {t.services.deliverablesLabel}
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#F5F0E8]/65">
                          {service.deliverables[lang].slice(0, 3).map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC300] shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </Link>
                ) : (
                  <a
                    href={cardLink}
                    className="block group h-full select-none"
                  >
                    <GlassCard
                      hoverEffect={true}
                      glowOnHover={true}
                      className={`p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 ${
                        isVoice
                          ? 'border-[#FFC300]/30 bg-gradient-to-br from-[#FFC300]/[0.08] via-white/[0.03] to-transparent shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
                          : 'border-white/10 hover:border-[#FFC300]/40'
                      }`}
                    >
                      {/* Header inside Card */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-[#FFC300]/50 group-hover:bg-[#FFC300]/10 transition-all duration-300">
                          {iconMap[service.id] || <Sparkles className="w-6 h-6 text-[#FFC300]" />}
                        </div>
                        <div className="flex items-center gap-2">
                          {isVoice && (
                            <span className="px-2 py-0.5 rounded-full bg-[#FFC300]/20 border border-[#FFC300]/40 text-[10px] font-mono text-[#FFC300] font-bold">
                              NEURAL AI
                            </span>
                          )}
                          <span className="font-mono text-xl font-black text-white/15 group-hover:text-[#FFC300]/40 transition-colors">
                            {service.number}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="mb-6">
                        <h3 className="text-lg sm:text-xl font-black text-[#F5F0E8] tracking-wide mb-2.5 uppercase group-hover:text-[#FFC300] transition-colors flex items-center justify-between">
                          <span>{service.title[lang]}</span>
                          <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#FFC300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 ml-2" />
                        </h3>
                        <p className="text-xs sm:text-sm text-[#F5F0E8]/70 leading-relaxed">
                          {service.shortDescription[lang]}
                        </p>
                      </div>

                      {/* Deliverables with Checkmarks */}
                      <div className="border-t border-white/10 pt-3.5 mt-auto">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC300] block mb-2">
                          {t.services.deliverablesLabel}
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#F5F0E8]/65">
                          {service.deliverables[lang].slice(0, 3).map((item, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC300] shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Floating Side Arrow Buttons on Hover for Large screens */}
        <button
          type="button"
          onClick={() => scrollServices('left')}
          aria-label="Листать влево"
          className="absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#FFC300] hidden lg:flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 hover:border-[#FFC300] cursor-pointer z-10 shadow-xl"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollServices('right')}
          aria-label="Листать вправо"
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#FFC300] hidden lg:flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 hover:border-[#FFC300] cursor-pointer z-10 shadow-xl"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
