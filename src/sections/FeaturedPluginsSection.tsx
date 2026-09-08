import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { pluginsList } from '../data/plugins';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Download, ShoppingBag, Check, Cpu, Layers } from 'lucide-react';

export const FeaturedPluginsSection: React.FC = () => {
  const { lang, t } = useTranslation();

  return (
    <section id="plugins" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-2 block">
            {t.plugins.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase">
            {t.plugins.title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#F5F0E8]/60 max-w-lg leading-relaxed">
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
            className="p-6 sm:p-10 lg:p-12 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Specs & Copy */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Badges Bar */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {plugin.badge && (
                      <span className="px-3 py-1 rounded-full bg-[#FFC300]/15 text-[#FFC300] text-[10px] font-mono font-bold tracking-widest uppercase border border-[#FFC300]/30">
                        {plugin.badge[lang]}
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/50">
                      v{plugin.version}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/50">
                      {plugin.formats.join(' • ')}
                    </span>
                  </div>

                  {/* Plugin Name */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase mb-3">
                    {plugin.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base sm:text-lg font-semibold text-[#FFC300] mb-4">
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
                      <span className="text-2xl sm:text-3xl font-black text-[#FFC300] tracking-tight">
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

              {/* Right Column: High-Tech DSP Vector Interface Presentation */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-[#1a1918] border border-white/10 p-6 shadow-2xl overflow-hidden group/screen">
                  {/* Window Top Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#FFC300] font-bold">
                      {plugin.name} // DSP ENGINE
                    </span>
                    <Cpu className="w-3.5 h-3.5 text-white/40" />
                  </div>

                  {/* Stylized Interface Display Screen */}
                  <div className="h-52 sm:h-64 rounded-xl bg-black/60 border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
                    {/* Simulated Waveform / Harmonic Graph */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                      <svg className="w-full h-36" viewBox="0 0 300 100" fill="none">
                        <path
                          d="M0,50 Q40,10 75,50 T150,50 T225,50 T300,50"
                          stroke="#FFC300"
                          strokeWidth="2.5"
                          strokeDasharray="4 4"
                          className="animate-pulse"
                        />
                        <path
                          d="M0,50 Q35,80 85,50 T160,20 T240,65 T300,50"
                          stroke="#ffffff"
                          strokeWidth="1.5"
                          opacity="0.4"
                        />
                      </svg>
                    </div>

                    {/* Virtual Rotary Knobs & Meters */}
                    <div className="grid grid-cols-3 gap-3 relative z-10 text-center">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[9px] font-mono text-white/40 uppercase block">DRIVE</span>
                        <span className="text-sm font-mono font-bold text-[#FFC300]">+8.4 dB</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[9px] font-mono text-white/40 uppercase block">CEILING</span>
                        <span className="text-sm font-mono font-bold text-[#F5F0E8]">-0.1 dB</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[9px] font-mono text-white/40 uppercase block">OVERSAMPLE</span>
                        <span className="text-sm font-mono font-bold text-[#FFC300]">16x LINEAR</span>
                      </div>
                    </div>

                    {/* Real-Time Metering Bar */}
                    <div className="relative z-10 space-y-1.5">
                      <div className="flex justify-between text-[9px] font-mono text-white/40">
                        <span>L/R PEAK REDUCTION</span>
                        <span className="text-[#FFC300] font-bold">-3.2 dBFS</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#FFC300] via-[#e6b000] to-red-500 h-full w-[78%] rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Compatibility OS Badges Footer */}
                  <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span className="flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#FFC300]" />
                      Universal Binary (ARM64 & x86_64)
                    </span>
                    <span>64-bit Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
