import React from 'react';

interface AudioVisualizerLogoProps {
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AudioVisualizerLogo: React.FC<AudioVisualizerLogoProps> = ({
  animated = true,
  size = 'md',
  className = ''
}) => {
  const barHeights = [45, 75, 95, 60, 85, 40, 70, 90, 55, 35];

  const sizeClasses = {
    sm: 'h-5 gap-[2px]',
    md: 'h-8 gap-1',
    lg: 'h-12 gap-1.5'
  };

  const barWidthClasses = {
    sm: 'w-[3px] rounded-[1px]',
    md: 'w-[4px] rounded-[2px]',
    lg: 'w-[6px] rounded-[3px]'
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}
      aria-label="K1RO Audio Visualizer"
    >
      {barHeights.map((height, idx) => {
        const animationDelay = `${(idx * 0.12).toFixed(2)}s`;
        const animationDuration = `${(0.8 + (idx % 3) * 0.25).toFixed(2)}s`;

        return (
          <span
            key={idx}
            className={`${barWidthClasses[size]} bg-gradient-to-t from-[#b38800] to-[#FFC300] origin-bottom transition-all`}
            style={{
              height: `${height}%`,
              animation: animated ? `visualizerPulse ${animationDuration} ease-in-out infinite alternate` : undefined,
              animationDelay: animated ? animationDelay : undefined
            }}
          />
        );
      })}

      <style>{`
        @keyframes visualizerPulse {
          0% {
            transform: scaleY(0.25);
            opacity: 0.6;
          }
          50% {
            transform: scaleY(0.95);
            opacity: 1;
          }
          100% {
            transform: scaleY(0.4);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};
