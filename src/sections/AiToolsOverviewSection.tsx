import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { GlassCard } from '../components/ui/GlassCard';
import { Cpu, ArrowRight, Sparkles, Mic, Split, Activity } from 'lucide-react';

export const AiToolsOverviewSection: React.FC = () => {
  const { lang } = useTranslation();

  return (
    <section id="ai-tools-overview" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <a href="#plugins" className="block group cursor-pointer">
        <GlassCard
          hoverEffect={true}
          glowOnHover={true}
          className="p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-[#FFC300]/30 bg-gradient-to-br from-[#FFC300]/[0.08] via-white/[0.03] to-transparent shadow-[0_15px_40px_rgba(0,0,0,0.5)] group-hover:border-[#FFC300]/70 transition-all duration-500"
        >
          {/* Drifting Golden Ambient Glow Behind Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC300]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#FFC300]/20 transition-all duration-700" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFC300]/15 border border-[#FFC300]/30 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>{lang === 'ru' ? 'СОБСТВЕННЫЙ СОФТ & DSP' : 'PROPRIETARY DSP & AI'}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase mb-4 leading-tight">
                {lang === 'ru' ? (
                  <>
                    ИИ-ИНСТРУМЕНТЫ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-[#b38800]">НОВОГО ПОКОЛЕНИЯ</span>
                  </>
                ) : (
                  <>
                    NEXT-GEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-[#b38800]">AI AUDIO TOOLS</span>
                  </>
                )}
              </h2>

              {/* General Description */}
              <p className="text-sm sm:text-base text-[#F5F0E8]/75 leading-relaxed mb-6">
                {lang === 'ru'
                  ? 'K1RO разрабатывает революционную линейку собственных VST/AU плагинов для передового продакшна: клонирование и нейро-синтез тембра (AI Voice), хирургическое выравнивание тайминга и высоты тона по ARA2 (Synchrovoice) и студийное спектральное разделение дорожек (STEM STUDIO).'
                  : 'K1RO builds revolutionary proprietary VST/AU plugins engineered for next-gen workflows: neural vocal cloning (AI Voice), surgical ARA2 timing & pitch alignment (Synchrovoice), and neural multitrack separation (STEM STUDIO).'}
              </p>

              {/* 3 Plugin Quick Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FFC300]/30 transition-colors">
                  <Mic className="w-4 h-4 text-[#FFC300] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#F5F0E8] block uppercase">AI Voice</span>
                    <span className="text-[10px] text-white/50">{lang === 'ru' ? 'Клонирование вокала' : 'Neural Vocal Cloning'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FFC300]/30 transition-colors">
                  <Activity className="w-4 h-4 text-[#FFC300] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#F5F0E8] block uppercase">Synchrovoice</span>
                    <span className="text-[10px] text-white/50">{lang === 'ru' ? 'Тайминг и питч ARA2' : 'ARA2 Pitch & Timing'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#FFC300]/30 transition-colors">
                  <Split className="w-4 h-4 text-[#FFC300] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#F5F0E8] block uppercase">STEM STUDIO</span>
                    <span className="text-[10px] text-white/50">{lang === 'ru' ? 'Разделение на стемы' : 'Multitrack Stem Split'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Callout */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 shrink-0">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#FFC300] to-[#e6b000] text-black font-black text-sm uppercase tracking-wider group-hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,195,0,0.35)]">
                <span>{lang === 'ru' ? 'Открыть софт и плагины' : 'Explore Software & Plugins'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>

              <span className="text-xs font-mono text-white/50 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC300]" />
                {lang === 'ru' ? 'Скриншоты, DSP монитор и цены' : 'Screenshots, DSP monitors & pricing'}
              </span>
            </div>
          </div>
        </GlassCard>
      </a>
    </section>
  );
};
