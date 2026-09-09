import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/I18nContext';
import { GlassCard } from '../components/ui/GlassCard';
import { Cpu, ArrowRight, Sparkles, Eye } from 'lucide-react';

export const AiToolsOverviewSection: React.FC = () => {
  const { lang } = useTranslation();

  const resolveAssetUrl = (relativePath: string) => {
    if (!relativePath) return '';
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) return relativePath;
    const clean = relativePath.replace(/^\//, '');
    const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}${clean}`;
  };

  const previewPlugins = [
    {
      id: 'ai-voice',
      name: 'AI VOICE',
      role: lang === 'ru' ? 'Клонирование вокала' : 'Vocal Cloning',
      desc: lang === 'ru' ? 'Подмена тембра и клонирование голоса с естественной артикуляцией и микродинамикой.' : 'Neural timbre replacement and realistic voice conversion.',
      image: 'screenshots/ai_voice_guide_and_cloned.png',
      badge: 'NEURAL AI'
    },
    {
      id: 'synchrovoice',
      name: 'SYNCHROVOICE',
      role: lang === 'ru' ? 'Тайминг & Питч ARA2' : 'ARA2 Timing & Pitch',
      desc: lang === 'ru' ? 'Студийное автоматическое выравнивание дабл-треков и бэк-вокала по ритму и тону.' : 'Surgical automatic vocal alignment and pitch lock via ARA2.',
      image: 'screenshots/synchrovoice_dsp.png',
      badge: 'ARA2 DSP'
    },
    {
      id: 'stem-studio',
      name: 'STEM STUDIO',
      role: lang === 'ru' ? 'Разделение на дорожки' : 'Multitrack Separation',
      desc: lang === 'ru' ? 'Нейросетевая изоляция вокала, ударных, баса и инструментов из готового микса.' : 'Neural spectral extraction into 4 high-fidelity stems with zero bleed.',
      image: 'screenshots/stem_studio_separated_stems.png',
      badge: '4-STEM PRO'
    }
  ];

  return (
    <section id="ai-tools-overview" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <Link to="/plugins" className="block group cursor-pointer">
        <GlassCard
          hoverEffect={true}
          glowOnHover={true}
          className="p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-[#FFC300]/30 bg-gradient-to-br from-[#FFC300]/[0.08] via-white/[0.03] to-transparent shadow-[0_15px_40px_rgba(0,0,0,0.5)] group-hover:border-[#FFC300]/70 transition-all duration-500"
        >
          {/* Drifting Golden Ambient Glow Behind Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC300]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#FFC300]/20 transition-all duration-700" />

          <div className="relative z-10 flex flex-col gap-8">
            {/* Top Bar of Card */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC300]/15 border border-[#FFC300]/30 text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-3">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{lang === 'ru' ? 'СОБСТВЕННЫЙ СОФТ' : 'PROPRIETARY SOFTWARE'}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase leading-tight">
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
              </div>

              {/* Action Button */}
              <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FFC300] to-[#e6b000] text-black font-black text-xs sm:text-sm uppercase tracking-wider group-hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,195,0,0.35)] shrink-0 self-start md:self-auto">
                <span>{lang === 'ru' ? 'Перейти в витрину плагинов' : 'Open Plugins Showcase'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* 3 Program Miniatures with short description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {previewPlugins.map((plugin) => (
                <div
                  key={plugin.id}
                  className="rounded-2xl bg-black/40 border border-white/10 p-4 sm:p-5 flex flex-col justify-between group/item hover:border-[#FFC300]/50 hover:bg-black/60 transition-all duration-300"
                >
                  {/* Image Thumbnail */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/80 border border-white/10 mb-4">
                    <img
                      src={resolveAssetUrl(plugin.image)}
                      alt={plugin.name}
                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-mono font-bold text-[#FFC300] border border-[#FFC300]/30">
                        {plugin.badge}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity bg-black/40">
                      <span className="px-3 py-1.5 rounded-lg bg-[#FFC300] text-black font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                        <Eye className="w-3 h-3" />
                        Смотреть
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-base font-black text-[#F5F0E8] group-hover/item:text-[#FFC300] transition-colors uppercase">
                        {plugin.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#FFC300]/80 font-bold">
                        {plugin.role}
                      </span>
                    </div>
                    <p className="text-xs text-[#F5F0E8]/65 leading-relaxed">
                      {plugin.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom footnote */}
            <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC300]" />
                {lang === 'ru' ? 'Витрина с демо-монитором, скриншотами и ценами' : 'Live showroom with DSP monitors & screenshots'}
              </span>
              <span className="text-[#FFC300] font-bold group-hover:underline">
                {lang === 'ru' ? 'Смотреть всю витрину →' : 'View all tools →'}
              </span>
            </div>
          </div>
        </GlassCard>
      </Link>
    </section>
  );
};
