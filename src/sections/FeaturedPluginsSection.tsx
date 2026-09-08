import React, { useState } from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { pluginsList } from '../data/plugins';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Download, MessageSquare, Check, Cpu, Sparkles, Sliders, Mic, Split, Activity, Eye, Image as ImageIcon, X } from 'lucide-react';

export const FeaturedPluginsSection: React.FC = () => {
  const { lang, t } = useTranslation();

  // Mode switcher per plugin: 'screenshot' (default if available) or 'dsp'
  const [activeTabMode, setActiveTabMode] = useState<Record<string, 'screenshot' | 'dsp'>>({
    'ai-voice': 'screenshot',
    'stem-studio': 'screenshot',
    'synchrovoice': 'dsp',
  });

  // Modal for full-size screenshot preview
  const [selectedScreenshot, setSelectedScreenshot] = useState<{ src: string; title: string } | null>(null);

  // Helper for guaranteed path resolution on GitHub Pages
  const resolveAssetUrl = (relativePath: string) => {
    if (!relativePath) return '';
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) return relativePath;
    const clean = relativePath.replace(/^\//, '');
    const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}${clean}`;
  };

  // Interactive demo states per plugin
  const [voiceModel, setVoiceModel] = useState<'Male Pop' | 'Female R&B' | 'Rock Grit'>('Female R&B');
  const [alignTightness, setAlignTightness] = useState<number>(94);
  const [activeStem, setActiveStem] = useState<'Vocal' | 'Drums' | 'Bass' | 'Instruments'>('Vocal');

  return (
    <section id="plugins" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFC300]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
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

      {/* Featured Plugins Showcase (3 plugins: AI Voice, Synchrovoice, STEM STUDIO) */}
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
                    <a href="#contact" className="flex-1 sm:flex-initial">
                      <Button
                        variant="outline"
                        size="md"
                        icon={<Download className="w-4 h-4" />}
                        className="w-full sm:w-auto"
                      >
                        {t.plugins.tryFree}
                      </Button>
                    </a>

                    <a href="#contact" className="flex-1 sm:flex-initial">
                      <Button
                        variant="gold"
                        size="md"
                        glow={idx === 0}
                        icon={<MessageSquare className="w-4 h-4" />}
                        className="w-full sm:w-auto"
                      >
                        Запросить доступ
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Real-Time DSP Interface Presentation */}
              {/* Right Column: Screenshot & DSP Monitor Presentation */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-[#181715] border border-white/10 p-5 sm:p-6 shadow-2xl overflow-hidden group/screen">
                  {/* Top Window Bar with Tab Switcher */}
                  <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-4 gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-[10px] font-mono tracking-widest text-[#FFC300] font-black uppercase">
                        {plugin.name}
                      </span>
                    </div>

                    {/* View Switcher: Screenshot vs DSP Monitor */}
                    {plugin.screenshot ? (
                      <div className="flex items-center bg-black/50 p-1 rounded-xl border border-white/10">
                        <button
                          type="button"
                          onClick={() => setActiveTabMode(prev => ({ ...prev, [plugin.id]: 'screenshot' }))}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase font-bold transition-all cursor-pointer ${
                            (activeTabMode[plugin.id] || 'screenshot') === 'screenshot'
                              ? 'bg-[#FFC300] text-black shadow-[0_0_10px_rgba(255,195,0,0.3)]'
                              : 'text-white/60 hover:text-white'
                          }`}
                        >
                          <ImageIcon className="w-3 h-3" />
                          Скриншот
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTabMode(prev => ({ ...prev, [plugin.id]: 'dsp' }))}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase font-bold transition-all cursor-pointer ${
                            activeTabMode[plugin.id] === 'dsp'
                              ? 'bg-[#FFC300] text-black shadow-[0_0_10px_rgba(255,195,0,0.3)]'
                              : 'text-white/60 hover:text-white'
                          }`}
                        >
                          <Cpu className="w-3 h-3" />
                          DSP Монитор
                        </button>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                        DSP MONITOR
                      </span>
                    )}
                  </div>

                  {/* DISPLAY 1: Real Program Screenshot */}
                  {plugin.screenshot && (activeTabMode[plugin.id] || 'screenshot') === 'screenshot' && (
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 group/img aspect-[16/10] flex items-center justify-center">
                      <img
                        src={resolveAssetUrl(plugin.screenshot)}
                        alt={`${plugin.name} interface`}
                        className="w-full h-full object-cover object-center transition-all duration-500 group-hover/img:scale-[1.03]"
                        loading="lazy"
                      />
                      
                      {/* Hover Zoom Overlay */}
                      <div
                        onClick={() => setSelectedScreenshot({ src: resolveAssetUrl(plugin.screenshot!), title: plugin.name })}
                        className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
                      >
                        <div className="px-4 py-2 rounded-xl bg-[#FFC300] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(255,195,0,0.5)] transform scale-95 group-hover/img:scale-100 transition-transform">
                          <Eye className="w-4 h-4" />
                          Увеличить скриншот
                        </div>
                      </div>

                      {/* Bottom Caption Pill */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#FFC300]">
                          {plugin.id === 'ai-voice' && 'Гайд-трек + Клонированный вокал (DENDI v2)'}
                          {plugin.id === 'stem-studio' && 'Мультитрек: разложение на дорожки вокала, баса, барабанов'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[9px] font-mono text-white/50">
                          HD PREVIEW
                        </span>
                      </div>
                    </div>
                  )}

                  {/* DISPLAY 2: Interactive DSP Monitors */}
                  {(!plugin.screenshot || activeTabMode[plugin.id] === 'dsp') && (
                    <>
                      {plugin.id === 'ai-voice' && (
                        <div className="h-60 sm:h-68 rounded-2xl bg-black/70 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
                          <div className="flex items-center justify-between text-[10px] font-mono text-white/50 border-b border-white/10 pb-2">
                            <span className="flex items-center gap-1 text-[#FFC300]">
                              <Mic className="w-3.5 h-3.5" />
                              NEURAL VOCAL CLONING
                            </span>
                            <span className="text-[#FFC300] font-bold">LATENCY: 0.8 ms</span>
                          </div>

                          {/* Interactive Voice Models */}
                          <div className="space-y-1.5 my-2">
                            <span className="text-[10px] font-mono text-white/40 uppercase block">Целевая модель тембра:</span>
                            <div className="grid grid-cols-3 gap-2">
                              {(['Male Pop', 'Female R&B', 'Rock Grit'] as const).map((m) => (
                                <button
                                  key={m}
                                  type="button"
                                  onClick={() => setVoiceModel(m)}
                                  className={`py-2 px-1 rounded-xl text-[11px] font-bold tracking-tight transition-all cursor-pointer ${
                                    voiceModel === m
                                      ? 'bg-[#FFC300] text-black shadow-[0_0_15px_rgba(255,195,0,0.4)]'
                                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                                  }`}
                                >
                                  {m}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Animated Spectrogram Jump */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-[10px] font-mono text-white/50">
                              <span>TIMBRE FIDELITY</span>
                              <span className="text-[#FFC300] font-bold">99.4%</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5">
                              <div
                                className="bg-gradient-to-r from-[#b38800] via-[#FFC300] to-[#fff] h-full rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,195,0,0.5)]"
                                style={{ width: '99%' }}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {plugin.id === 'synchrovoice' && (
                        <div className="h-60 sm:h-68 rounded-2xl bg-black/70 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
                          <div className="flex items-center justify-between text-[10px] font-mono text-white/50 border-b border-white/10 pb-2">
                            <span className="flex items-center gap-1 text-[#FFC300]">
                              <Activity className="w-3.5 h-3.5" />
                              TIMING & PITCH ALIGNMENT
                            </span>
                            <span className="text-[#FFC300] font-bold">ARA2 ACTIVE</span>
                          </div>

                          {/* Interactive Tightness Knob */}
                          <div className="grid grid-cols-2 gap-3 my-2">
                            <button
                              type="button"
                              onClick={() => setAlignTightness((prev) => (prev >= 100 ? 70 : prev + 10))}
                              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left cursor-pointer transition-all"
                            >
                              <span className="text-[9px] font-mono text-white/50 uppercase block">TIMING SYNC</span>
                              <span className="text-sm font-mono font-bold text-[#FFC300]">{alignTightness}% TIGHT</span>
                            </button>
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-left">
                              <span className="text-[9px] font-mono text-white/50 uppercase block">PITCH DRIFT</span>
                              <span className="text-sm font-mono font-bold text-[#F5F0E8]">±0.1 Cents</span>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex justify-between text-[10px] font-mono text-white/50">
                              <span className="flex items-center gap-1">
                                <Sliders className="w-3 h-3 text-[#FFC300]" />
                                PHASE COHERENCE
                              </span>
                              <span className="text-[#FFC300] font-bold">100% LOCKED</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5">
                              <div
                                className="bg-gradient-to-r from-[#b38800] via-[#FFC300] to-[#ffd54f] h-full rounded-full transition-all duration-300"
                                style={{ width: `${alignTightness}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {plugin.id === 'stem-studio' && (
                        <div className="h-60 sm:h-68 rounded-2xl bg-black/70 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
                          <div className="flex items-center justify-between text-[10px] font-mono text-white/50 border-b border-white/10 pb-2">
                            <span className="flex items-center gap-1 text-[#FFC300]">
                              <Split className="w-3.5 h-3.5" />
                              NEURAL STEM ISOLATION
                            </span>
                            <span className="text-[#FFC300] font-bold">4-STEM PRO</span>
                          </div>

                          {/* Interactive Stem Selector */}
                          <div className="space-y-1.5 my-2">
                            <span className="text-[10px] font-mono text-white/40 uppercase block">Изолированный канал:</span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                              {(['Vocal', 'Drums', 'Bass', 'Instruments'] as const).map((stem) => (
                                <button
                                  key={stem}
                                  type="button"
                                  onClick={() => setActiveStem(stem)}
                                  className={`py-2 px-1 rounded-xl text-[10px] font-bold tracking-tight transition-all cursor-pointer ${
                                    activeStem === stem
                                      ? 'bg-[#FFC300] text-black shadow-[0_0_15px_rgba(255,195,0,0.4)]'
                                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                                  }`}
                                >
                                  {stem}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex justify-between text-[10px] font-mono text-white/50">
                              <span>BLEED REJECTION</span>
                              <span className="text-[#FFC300] font-bold">-48.2 dB</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5">
                              <div
                                className="bg-gradient-to-r from-[#b38800] via-[#FFC300] to-emerald-400 h-full rounded-full transition-all duration-300"
                                style={{ width: '92%' }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Compatibility OS Badges Footer */}
                  <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-white/50">
                    <span>macOS Apple Silicon & Windows 10/11</span>
                    <span>{plugin.formats.join(' • ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Full-Screen Screenshot Zoom Modal */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-[#1a1918] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFC300]" />
                <h3 className="text-sm font-bold tracking-widest uppercase text-white font-mono">
                  {selectedScreenshot.title} — Реальный интерфейс
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScreenshot(null)}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="overflow-auto p-2 sm:p-4 flex items-center justify-center bg-black/60">
              <img
                src={selectedScreenshot.src}
                alt={selectedScreenshot.title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
