import React, { useState, useMemo } from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { worksList } from '../data/works';
import { WorkItem } from '../types/work';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { GlobalAudioBar } from '../components/audio/GlobalAudioBar';
import { Play, Pause, Shuffle, Sparkles, SlidersHorizontal } from 'lucide-react';

export const SelectedWorksSection: React.FC = () => {
  const { lang, t } = useTranslation();
  const { activeId, isPlaying, progress, currentTimeFormatted, toggleTrack, seek, stopTrack } = useAudioPlayer();

  // Filter category state
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'production' | 'mixing'>('all');
  const [shuffleKey, setShuffleKey] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Active playing track object for bottom player
  const activeTrack = useMemo(() => {
    return worksList.find((w) => w.id === activeId) || null;
  }, [activeId]);

  // Randomized list
  const randomizedWorks = useMemo(() => {
    const list = [...worksList];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, [shuffleKey]);

  // Filtered by category
  const filteredWorks = useMemo(() => {
    if (selectedFilter === 'all') return randomizedWorks;
    return randomizedWorks.filter((w) => w.category === selectedFilter);
  }, [randomizedWorks, selectedFilter]);

  const displayedWorks = filteredWorks.slice(0, visibleCount);

  return (
    <section id="works" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC300] block">
              {t.works.badge}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/20 text-[10px] font-mono text-[#FFC300]">
              {worksList.length} ТРЕКОВ
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F0E8] uppercase">
            {t.works.title}
          </h2>
        </div>

        {/* Filter Pills & Shuffle Button */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#FFC300] text-black font-bold shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Все работы
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('production')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'production'
                  ? 'bg-[#FFC300] text-black font-bold shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Продакшн
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('mixing')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'mixing'
                  ? 'bg-[#FFC300] text-black font-bold shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Сведение & Мастер
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShuffleKey((prev) => prev + 1)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFC300] hover:text-[#FFC300] text-xs font-semibold text-[#F5F0E8] transition-all cursor-pointer hover:scale-105"
            title="Перемешать порядок"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#FFC300]" />
            <span className="hidden sm:inline">Случайный порядок</span>
          </button>
        </div>
      </div>

      {/* Compact Grid of Artwork Cards (Click to Play) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
        {displayedWorks.map((work: WorkItem) => {
          const isThisPlaying = activeId === work.id && isPlaying;
          const coverUrl = work.coverImage.startsWith('http')
            ? work.coverImage
            : `${import.meta.env.BASE_URL}${work.coverImage.replace(/^\//, '')}`;

          return (
            <div
              key={work.id}
              onClick={() => toggleTrack(work.id, work.audioPreviewUrl)}
              className={`group relative rounded-2xl overflow-hidden bg-[#181716] border transition-all duration-300 cursor-pointer select-none flex flex-col ${
                isThisPlaying
                  ? 'border-[#FFC300] ring-2 ring-[#FFC300]/30 shadow-[0_0_25px_rgba(255,195,0,0.3)] scale-[1.02]'
                  : 'border-white/10 hover:border-[#FFC300]/60 hover:scale-105 shadow-lg'
              }`}
            >
              {/* Artwork Square */}
              <div className="relative aspect-square w-full overflow-hidden bg-black/60">
                <img
                  src={coverUrl}
                  alt={`${work.artist} - ${work.title}`}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                    isThisPlaying ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if image fails to render
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 group-hover:from-black/90 transition-opacity" />

                {/* Top Role Badge */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                  <span className="px-1.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[9px] font-mono uppercase text-[#FFC300] border border-white/10">
                    {work.category === 'production' ? 'PROD' : 'MIX/MASTER'}
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[9px] font-mono text-white/60">
                    {work.duration}
                  </span>
                </div>

                {/* Center Play Button / Visualizer Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                    isThisPlaying
                      ? 'bg-black/40 opacity-100'
                      : 'bg-black/40 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isThisPlaying
                        ? 'bg-[#FFC300] text-black shadow-[0_0_25px_rgba(255,195,0,0.6)] scale-110'
                        : 'bg-white/20 backdrop-blur-md text-white group-hover:bg-[#FFC300] group-hover:text-black group-hover:scale-110'
                    }`}
                  >
                    {isThisPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </div>
                </div>

                {/* Hover Reveal: Detailed role description card on hover */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-[#181716]/95 backdrop-blur-md border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[10px] text-[#FFC300] font-mono uppercase">
                    <SlidersHorizontal className="w-3 h-3" />
                    <span>Что сделано:</span>
                  </div>
                  <p className="text-[11px] text-[#F5F0E8] font-medium leading-tight line-clamp-2">
                    {work.roles[lang]}
                  </p>
                </div>
              </div>

              {/* Bottom Compact Info */}
              <div className="p-2.5 flex flex-col gap-0.5 bg-[#181716]">
                <h4 className="font-bold text-xs text-[#F5F0E8] truncate group-hover:text-[#FFC300] transition-colors">
                  {work.title}
                </h4>
                <p className="text-[11px] text-[#F5F0E8]/50 truncate uppercase font-medium">
                  {work.artist}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show more button */}
      <div className="mt-10 flex items-center justify-center">
        {visibleCount < filteredWorks.length ? (
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredWorks.length))}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFC300] hover:text-[#FFC300] text-xs font-bold uppercase tracking-wider text-[#F5F0E8] transition-all cursor-pointer shadow-md hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-[#FFC300]" />
            <span>Показать еще ({visibleCount} из {filteredWorks.length})</span>
          </button>
        ) : filteredWorks.length > 12 ? (
          <button
            type="button"
            onClick={() => setVisibleCount(12)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold uppercase text-white/50 hover:text-white transition-all cursor-pointer"
          >
            <span>Свернуть</span>
          </button>
        ) : null}
      </div>

      {/* Global Persistent Sticky Player Bar when track is playing */}
      <GlobalAudioBar
        track={activeTrack}
        isPlaying={isPlaying}
        progress={progress}
        currentTime={currentTimeFormatted}
        onTogglePlay={() => activeTrack && toggleTrack(activeTrack.id, activeTrack.audioPreviewUrl)}
        onSeek={seek}
        onClose={stopTrack}
      />
    </section>
  );
};
