import { useState, useEffect, useRef } from 'react';

export interface AudioState {
  activeId: string | null;
  isPlaying: boolean;
  progress: number; // 0 to 100
  currentTimeFormatted: string;
}

export function useAudioPlayer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState<string>('0:00');
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Shared audio instance
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const onTimeUpdate = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        const pct = (audio.currentTime / audio.duration) * 100;
        setProgress(pct);
        const mins = Math.floor(audio.currentTime / 60);
        const secs = Math.floor(audio.currentTime % 60);
        setCurrentTimeFormatted(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTimeFormatted('0:00');
    };

    const onError = () => {
      console.warn('Audio error on src:', audio.src, audio.error);
      setIsPlaying(false);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, []);

  const toggleTrack = (id: string, audioUrl?: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (activeId === id) {
      if (!audio.paused) {
        audio.pause();
      } else {
        audio.play().catch((e) => console.warn('Play interrupted:', e));
      }
    } else {
      setActiveId(id);
      setProgress(0);
      setCurrentTimeFormatted('0:00');

      if (audioUrl) {
        const cleanPath = audioUrl.replace(/^\//, '');
        const base = import.meta.env.BASE_URL.endsWith('/')
          ? import.meta.env.BASE_URL
          : `${import.meta.env.BASE_URL}/`;
        const resolvedUrl = audioUrl.startsWith('http')
          ? audioUrl
          : `${base}${cleanPath}`;
        
        audio.src = resolvedUrl;
        audio.currentTime = 0;
        audio.play().catch((err) => {
          console.warn('Audio playback failed or blocked:', err);
        });
      }
    }
  };

  const seek = (percent: number) => {
    const audio = audioRef.current;
    if (audio && audio.duration && !isNaN(audio.duration)) {
      audio.currentTime = (percent / 100) * audio.duration;
      setProgress(percent);
    }
  };

  const stopTrack = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
    setActiveId(null);
  };

  return {
    activeId,
    isPlaying,
    progress,
    currentTimeFormatted,
    toggleTrack,
    seek,
    stopTrack
  };
}
