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
    // Single shared audio element
    const audio = new Audio();
    audioRef.current = audio;

    const onTimeUpdate = () => {
      if (audio.duration && !isNaN(audio.duration)) {
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

    const onError = (e: Event) => {
      console.warn('Audio playback error / file not reachable:', e);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, []);

  const toggleTrack = (id: string, audioUrl?: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (activeId === id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    } else {
      setActiveId(id);
      setProgress(0);
      setCurrentTimeFormatted('0:00');

      if (audioUrl) {
        // Support relative paths under Vite base
        const cleanPath = audioUrl.replace(/^\//, '');
        const resolvedUrl = audioUrl.startsWith('http')
          ? audioUrl
          : `${import.meta.env.BASE_URL}${cleanPath}`;
        
        audio.src = resolvedUrl;
        audio.load();
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn('Playback blocked or failed:', err);
            setIsPlaying(false);
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
    if (audio) audio.pause();
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
