import { useState, useEffect, useRef } from 'react';

export interface AudioState {
  activeId: string | null;
  isPlaying: boolean;
  progress: number; // 0 to 100
  durationFormatted: string;
  currentTimeFormatted: string;
}

export function useAudioPlayer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  const toggleTrack = (id: string) => {
    if (activeId === id) {
      setIsPlaying((prev) => !prev);
    } else {
      setActiveId(id);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const stopTrack = () => {
    setIsPlaying(false);
    setProgress(0);
    setActiveId(null);
  };

  // Simulated playback progress loop for rich feedback
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  return {
    activeId,
    isPlaying,
    progress,
    toggleTrack,
    stopTrack
  };
}
