import React from 'react';
import { Play, Pause, Volume2, X, Disc3 } from 'lucide-react';
import { WorkItem } from '../../types/work';

interface GlobalAudioBarProps {
  track: WorkItem | null;
  isPlaying: boolean;
  progress: number;
  currentTime: string;
  onTogglePlay: () => void;
  onSeek: (pct: number) => void;
  onClose: () => void;
}

export const GlobalAudioBar: React.FC<GlobalAudioBarProps> = ({
  track,
  isPlaying,
  progress,
  currentTime,
  onTogglePlay,
  onSeek,
  onClose
}) => {
  if (!track) return null;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    onSeek(pct);
  };

  const cleanCover = track.coverImage.replace(/^\//, '');
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const coverUrl = track.coverImage.startsWith('http')
    ? track.coverImage
    : `${base}${cleanCover}`;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:max-w-2xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="relative rounded-2xl bg-[#1c1b19]/95 border border-[#FFC300]/40 backdrop-blur-2xl p-3 sm:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(255,195,0,0.2)] flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-3">
          {/* Cover Art */}
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md">
            <img
              src={coverUrl}
              alt={`${track.artist} - ${track.title}`}
              className={`w-full h-full object-cover transition-transform duration-500 ${isPlaying ? 'scale-110' : ''}`}
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-[#FFC300]/20 flex items-center justify-center">
                <Disc3 className="w-5 h-5 text-[#FFC300] animate-spin" />
              </div>
            )}
          </div>

          {/* Play / Pause */}
          <button
            type="button"
            onClick={onTogglePlay}
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all cursor-pointer ${
              isPlaying
                ? 'bg-[#FFC300] text-black shadow-[0_0_20px_rgba(255,195,0,0.5)] scale-105'
                : 'bg-white/10 text-[#F5F0E8] hover:bg-[#FFC300] hover:text-black'
            }`}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          {/* Track Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-[#F5F0E8] truncate tracking-wide">
                {track.title}
              </span>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-[#FFC300]/15 border border-[#FFC300]/30 text-[10px] font-mono text-[#FFC300] uppercase">
                {track.roles.ru}
              </span>
            </div>
            <p className="text-xs text-[#FFC300] font-semibold truncate uppercase">
              {track.artist}
            </p>
          </div>

          {/* Time indicator */}
          <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono text-white/60">
            <Volume2 className="w-3.5 h-3.5 text-[#FFC300]" />
            <span>{currentTime || '0:00'} / {track.duration}</span>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-white/40 hover:text-[#F5F0E8] hover:bg-white/5 transition-colors cursor-pointer shrink-0"
            aria-label="Close player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Seekable Progress Bar */}
        <div
          onClick={handleSeek}
          className="w-full bg-white/10 hover:bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer transition-colors relative"
        >
          <div
            className="bg-gradient-to-r from-[#b38800] via-[#FFC300] to-[#ffe082] h-full transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
