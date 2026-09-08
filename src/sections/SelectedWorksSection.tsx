import React, { useState, useMemo } from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { worksList } from '../data/works';
import { MiniAudioPlayer } from '../components/audio/MiniAudioPlayer';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { GlassCard } from '../components/ui/GlassCard';
import { Disc3, Radio, Shuffle, Sparkles } from 'lucide-react';

export const SelectedWorksSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const { activeId, isPlaying, progress, currentTimeFormatted, toggleTrack, seek } = useAudioPlayer();

  // Shuffle seed to allow random order on first mount and reshuffle on demand
  const [shuffleKey, setShuffleKey] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Randomize order on load or when shuffle button is clicked
  const randomizedWorks = useMemo(() => {
    const list = [...worksList];
    // Fisher-Yates shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [shuffleKey]);

  const displayedWorks = randomizedWorks.slice(0, visibleCount);

  return (
    <section id="works" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] block">
              {t.works.badge}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/20 text-[10px] font-mono text-[#FFC300]">
              {worksList.length} TRACKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase">
            {t.works.title}
          </h2>
        </div>

        {/* Action Controls (Shuffle & Live Badge) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShuffleKey((prev) => prev + 1)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFC300] hover:text-[#FFC300] text-xs font-bold uppercase tracking-wider text-[#F5F0E8] transition-all cursor-pointer shadow-md hover:scale-105"
            title="Перемешать треки в случайном порядке"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#FFC300]" />
            <span>Случайный порядок</span>
          </button>
        </div>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedWorks.map((work) => {
          const isThisPlaying = activeId === work.id && isPlaying;
          const coverUrl = work.coverImage.startsWith('http')
            ? work.coverImage
            : `${import.meta.env.BASE_URL}${work.coverImage.replace(/^\//, '')}`;

          return (
            <GlassCard
              key={work.id}
              hoverEffect={true}
              glowOnHover={true}
              className="p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group border-white/10 hover:border-[#FFC300]/40 transition-all duration-300"
            >
              {/* Cover Art & Badge Header */}
              <div className="relative mb-5 rounded-xl overflow-hidden aspect-square border border-white/10 shadow-2xl bg-black/40">
                <img
                  src={coverUrl}
                  alt={`${work.artist} - ${work.title}`}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isThisPlaying ? 'scale-110 rotate-1' : 'group-hover:scale-105'
                  }`}
                  loading="lazy"
                />

                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Role Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-[#F5F0E8]">
                    <Radio className={`w-3 h-3 ${isThisPlaying ? 'text-[#FFC300] animate-pulse' : 'text-[#FFC300]'}`} />
                    {work.roles[lang]}
                  </span>

                  <span className="px-2 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/70">
                    {work.year}
                  </span>
                </div>

                {/* Center Audio Visualizer Pulser when Playing */}
                {isThisPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-[#FFC300]/50 shadow-[0_0_30px_rgba(255,195,0,0.4)]">
                      <Disc3 className="w-8 h-8 text-[#FFC300] animate-spin" />
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Artist */}
              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-black tracking-wide text-[#F5F0E8] uppercase mb-1 group-hover:text-[#FFC300] transition-colors truncate">
                  {work.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#FFC300] tracking-wider uppercase mb-2 truncate">
                  {work.artist}
                </p>
                <p className="text-xs text-[#F5F0E8]/60 line-clamp-2 leading-relaxed">
                  {work.description[lang]}
                </p>
              </div>

              {/* Real HTML5 Audio Player Preview */}
              <div className="mt-auto pt-2">
                <MiniAudioPlayer
                  trackId={work.id}
                  title={work.title}
                  artist={work.artist}
                  duration={work.duration}
                  currentTime={currentTimeFormatted}
                  isPlaying={isThisPlaying}
                  progress={activeId === work.id ? progress : 0}
                  onTogglePlay={() => toggleTrack(work.id, work.audioPreviewUrl)}
                  onSeek={seek}
                />
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Load More / Expand CTA */}
      <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        {visibleCount < randomizedWorks.length ? (
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(prev + 6, randomizedWorks.length))}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FFC300] to-[#e6b000] text-black font-extrabold uppercase tracking-[0.15em] text-xs hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,195,0,0.3)] cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Показать еще треки ({visibleCount} из {randomizedWorks.length})</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setVisibleCount(6)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#F5F0E8]/70 hover:text-[#FFC300] hover:border-[#FFC300] transition-all cursor-pointer"
          >
            <span>Свернуть список</span>
          </button>
        )}
      </div>
    </section>
  );
};
