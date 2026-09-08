import React, { useState } from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { pluginsList } from '../data/plugins';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Download, ShoppingBag, Check, Cpu, Layers, Sparkles, Sliders } from 'lucide-react';

export const FeaturedPluginsSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const [activeDrive, setActiveDrive] = useState<number>(8.4);
  const [oversampleMode, setOversampleMode] = useState<'8x' | '16x'>('16x');

  return (
    <section id="plugins" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFC300]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-3">
            <Sparkles className="w-3 h-3" />
            {t.plugins.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F0E8] uppercase">
            {t.plugins.title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#F5F0E8]/70 max-w-lg leading-relaxed">
          {t.plugins.subtitle}
        </p>
      </div>

      {/* Featured Plugins Showcase */}
      <div className="space-y-12">
        {pluginsList.map((plugin, idx) => (
          <GlassCard
            key={plugin.id}
            hoverEffect={true}
            glowOnHover={true}
            className="p-6 sm:p-10 lg:p-12 border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Specs & Copy */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Badges Bar */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    {plugin.badge && (
                      <span className="px-3 py-1 rounded-full bg-[#FFC300]/15 text-[#FFC300] text-[10px] font-mono font-bold tracking-widest uppercase border border-[#FFC300]/30">
                        {plugin.badge[lang]}
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                      v{plugin.version}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/60">
                      {plugin.formats.join(' • ')}
                    </span>
                  </div>

                  {/* Plugin Name */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase mb-2">
                    {plugin.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base sm:text-lg font-bold text-[#FFC300] mb-4">
                    {plugin.tagline[lang]}
                  </p>

                  {/* Full Description */}
                  <p className="text-sm sm:text-base text-[#F5F0E8]/70 leading-relaxed mb-8">
                    {plugin.description[lang]}
                  </p>

                  {/* Key Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {plugin.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#FFC300] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-[#F5F0E8] uppercase tracking-wide">
                            {feat.title[lang]}
                          </h4>
                          <p className="text-xs text-[#F5F0E8]/50 leading-normal">
                            {feat.description[lang]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing and Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
                  {/* Price Tag */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                      Lifetime License
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-[#FFC300] tracking-tight">
                        {lang === 'ru' ? `${plugin.priceRub.toLocaleString()} ₽` : `$${plugin.price}`}
                      </span>
                      <span className="text-xs text-white/40 line-through">
                        {lang === 'ru' ? `${(plugin.priceRub * 1.4).toFixed(0)} ₽` : `$${(plugin.price * 1.4).toFixed(0)}`}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a href={plugin.downloadUrl} className="flex-1 sm:flex-initial">
                      <Button
                        variant="outline"
                        size="md"
                        icon={<Download className="w-4 h-4" />}
                        className="w-full sm:w-auto"
                      >
                        {t.plugins.tryFree}
                      </Button>
                    </a>

                    <a href={plugin.buyUrl} className="flex-1 sm:flex-initial">
                      <Button
                        variant="gold"
                        size="md"
                        glow={idx === 0}
                        icon={<ShoppingBag className="w-4 h-4" />}
                        className="w-full sm:w-auto"
                      >
                        {t.plugins.buy}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Real-Time DSP Interface Presentation */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-[#181715] border border-white/10 p-6 shadow-2xl overflow-hidden group/screen">
                  {/* Subtle Top Window Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#FFC300] font-black uppercase">
                      {plugin.name} // DSP MONITOR
                    </span>
                    <Cpu className="w-4 h-4 text-[#FFC300]" />
                  </div>

                  {/* Stylized Interface Display Screen */}
                  <div className="h-56 sm:h-64 rounded-2xl bg-black/70 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
                    {/* Animated Equalizer Spectrum Lines */}
                    <div className="absolute inset-0 flex items-end justify-between px-4 pb-12 opacity-35 pointer-events-none">
                      {[30, 50, 75, 90, 65, 80, 95, 85, 60, 45, 70, 85, 40, 55, 30].map((h, bIdx) => (
                        <span
                          key={bIdx}
                          className="w-2 rounded-t bg-gradient-to-t from-[#b38800] to-[#FFC300] transition-all"
                          style={{
                            height: `${h}%`,
                            animation: `spectrumJump ${0.6 + (bIdx % 4) * 0.2}s ease-in-out infinite alternate`
                          }}
                        />
                      ))}
                    </div>

                    {/* Interactive Knobs & Buttons */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 relative z-10 text-center">
                      <button
                        type="button"
                        onClick={() => setActiveDrive((prev) => (prev >= 18 ? 4 : prev + 2))}
                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFC300]/40 transition-all cursor-pointer select-none"
                      >
                        <span className="text-[9px] font-mono text-white/50 uppercase block">DRIVE</span>
                        <span className="text-sm font-mono font-bold text-[#FFC300]">+{activeDrive.toFixed(1)} dB</span>
                      </button>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 select-none">
                        <span className="text-[9px] font-mono text-white/50 uppercase block">CEILING</span>
                        <span className="text-sm font-mono font-bold text-[#F5F0E8]">-0.1 dB</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOversampleMode((prev) => (prev === '16x' ? '8x' : '16x'))}
                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFC300]/40 transition-all cursor-pointer select-none"
                      >
                        <span className="text-[9px] font-mono text-white/50 uppercase block">OVERSAMPLE</span>
                        <span className="text-sm font-mono font-bold text-[#FFC300]">{oversampleMode} LINEAR</span>
                      </button>
                    </div>

                    {/* Real-Time Metering Bar with Glow */}
                    <div className="relative z-10 space-y-1.5">
                      <div className="flex justify-between text-[9px] font-mono text-white/50">
                        <span className="flex items-center gap-1">
                          <Sliders className="w-3 h-3 text-[#FFC300]" />
                          DYNAMIC REDUCTION
                        </span>
                        <span className="text-[#FFC300] font-bold">-{(activeDrive * 0.45).toFixed(1)} dB</span>
                      </div>
                      <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden p-0.5">
                        <div
                          className="bg-gradient-to-r from-[#b38800] via-[#FFC300] to-red-500 h-full rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,195,0,0.5)]"
                          style={{ width: `${Math.min(95, 40 + activeDrive * 3)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Compatibility OS Badges Footer */}
                  <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-white/50">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#FFC300]" />
                      Apple Silicon M1/M2/M3/M4 & Intel
                    </span>
                    <span>VST3 • AU • AAX</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <style>{`
        @keyframes spectrumJump {
          0% {
            transform: scaleY(0.4);
            opacity: 0.5;
          }
          100% {
            transform: scaleY(1);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
};
