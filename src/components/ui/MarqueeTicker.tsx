import React from 'react';

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items,
  speed = 25,
  reverse = false,
  className = ''
}) => {
  // Duplicate items to ensure seamless infinite loop
  const duplicated = [...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden py-3 border-y border-white/5 bg-[#1f1e1c]/60 backdrop-blur-md select-none ${className}`}>
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#252422] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#252422] to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center gap-6 sm:gap-10 w-max"
        style={{
          animation: `marqueeScroll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`
        }}
      >
        {duplicated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-black tracking-[0.2em] uppercase text-[#F5F0E8]/75 hover:text-[#FFC300] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] shadow-[0_0_8px_#FFC300]" />
            <span className="whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
};
