import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { worksList } from '../data/works';
import { MiniAudioPlayer } from '../components/audio/MiniAudioPlayer';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { GlassCard } from '../components/ui/GlassCard';
import { Disc3, Radio, ArrowUpRight } from 'lucide-react';

export const SelectedWorksSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const { activeId, isPlaying, progress, toggleTrack } = useAudioPlayer();

  return (
    <section id="works" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] mb-2 block">
            {t.works.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase">
            {t.works.title}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#F5F0E8]/60 max-w-lg leading-relaxed">
          {t.works.subtitle}
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {worksList.map((work) => {
          const isThisPlaying = activeId === work.id && isPlaying;

          return (
            <GlassCard
              key={work.id}
              hoverEffect={true}
              glowOnHover={true}
              className="p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top Meta info */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#FFC300]">
                    <Disc3 className={`w-5 h-5 ${isThisPlaying ? 'animate-spin' : ''}`} />
                  </span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FFC300]">
                      {work.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-white/30 ml-2">• {work.year}</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#F5F0E8]/70">
                  <Radio className={`w-3 h-3 ${isThisPlaying ? 'text-[#FFC300] animate-pulse' : 'text-white/40'}`} />
                  {work.roles[lang]}
                </span>
              </div>

              {/* Title & Artist */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-black tracking-wide text-[#F5F0E8] uppercase mb-1.5 group-hover:text-[#FFC300] transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm font-semibold text-[#FFC300]/80 tracking-wide uppercase mb-3">
                  {work.artist}
                </p>
                <p className="text-sm text-[#F5F0E8]/60 line-clamp-2 leading-relaxed">
                  {work.description[lang]}
                </p>
              </div>

              {/* Integrated Audio Player Preview */}
              <div className="mt-auto pt-2">
                <MiniAudioPlayer
                  trackId={work.id}
                  title={work.title}
                  artist={work.artist}
                  duration={work.duration}
                  isPlaying={isThisPlaying}
                  progress={activeId === work.id ? progress : 0}
                  onTogglePlay={() => toggleTrack(work.id)}
                />
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Section CTA */}
      <div className="mt-14 text-center">
        <a
          href="#works"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-[#F5F0E8] hover:border-[#FFC300] hover:text-[#FFC300] hover:scale-105 transition-all shadow-lg"
        >
          <span>{t.works.viewAll}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
