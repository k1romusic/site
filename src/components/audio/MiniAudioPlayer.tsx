import React from 'react';
import { Play, Pause, Volume2, Sparkles } from 'lucide-react';

interface MiniAudioPlayerProps {
  trackId: string;
  title: string;
  artist: string;
  duration?: string;
  coverImage?: string;
  currentTime?: string;
  isPlaying: boolean;
  progress: number;
  onTogglePlay: () => void;
  onSeek?: (percent: number) => void;
}

export const MiniAudioPlayer: React.FC<MiniAudioPlayerProps> = ({
  title,
  artist,
  duration = '3:20',
  coverImage,
  currentTime,
  isPlaying,
  progress,
  onTogglePlay,
  onSeek
}) => {
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onSeek) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    onSeek(pct);
  };

  const resolvedCover = coverImage
    ? (coverImage.startsWith('http') ? coverImage : `${import.meta.env.BASE_URL}${coverImage.replace(/^\//, '')}`)
    : null;

  return (
    <div className="w-full bg-[#1c1b19]/90 border border-white/10 rounded-2xl p-3.5 sm:p-4 backdrop-blur-xl flex flex-col gap-3 shadow-xl">
      <div className="flex items-center justify-between gap-3">
        {/* Cover thumbnail */}
        {resolvedCover && (
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-md">
            <img
              src={resolvedCover}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-500 ${isPlaying ? 'scale-110' : 'scale-100'}`}
              loading="lazy"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-[#FFC300]/20 backdrop-blur-[1px] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFC300] animate-ping" />
              </div>
            )}
          </div>
        )}

        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={onTogglePlay}
          className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
            isPlaying
              ? 'bg-[#FFC300] text-black shadow-[0_0_20px_rgba(255,195,0,0.5)] scale-105'
              : 'bg-white/10 text-[#F5F0E8] hover:bg-[#FFC300] hover:text-black hover:scale-105'
          }`}
          aria-label={isPlaying ? 'Pause preview' : 'Play preview'}
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-[#F5F0E8] truncate tracking-wide">{title}</span>
            {isPlaying && (
              <span className="shrink-0 flex items-center gap-1 text-[10px] font-mono text-[#FFC300] uppercase tracking-wider bg-[#FFC300]/10 px-1.5 py-0.5 rounded border border-[#FFC300]/30">
                <Sparkles className="w-2.5 h-2.5 animate-spin" />
                PLAYING
              </span>
            )}
          </div>
          <p className="text-xs text-[#F5F0E8]/50 truncate">{artist}</p>
        </div>

        {/* Waveform Equalizer simulation */}
        <div className="hidden sm:flex items-center gap-[2px] h-6 px-2">
          {[40, 80, 55, 100, 70, 30, 90, 60, 45, 85].map((val, idx) => (
            <span
              key={idx}
              className={`w-[2.5px] rounded-full transition-all duration-150 ${
                isPlaying ? 'bg-[#FFC300]' : 'bg-white/20'
              }`}
              style={{
                height: isPlaying ? `${Math.max(20, (val * (0.5 + Math.random() * 0.5)))}%` : '20%',
                transitionDelay: `${idx * 20}ms`
              }}
            />
          ))}
        </div>

        {/* Duration / Current Time */}
        <div className="text-right shrink-0">
          <div className="flex items-center gap-1 text-xs font-mono text-white/60">
            <Volume2 className="w-3.5 h-3.5 text-[#FFC300]" />
            <span>{isPlaying && currentTime ? currentTime : duration}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar (Clickable / Seekable) */}
      <div
        onClick={handleProgressClick}
        className="w-full bg-white/10 hover:bg-white/20 h-2 rounded-full overflow-hidden relative cursor-pointer transition-colors"
      >
        <div
          className="bg-gradient-to-r from-[#b38800] via-[#FFC300] to-[#ffe082] h-full transition-all duration-100 rounded-full"
          style={{ width: `${isPlaying ? progress : 0}%` }}
        />
      </div>
    </div>
  );
};
