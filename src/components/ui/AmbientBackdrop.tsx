import React from 'react';

export const AmbientBackdrop: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Gold Ambient Orb */}
      <div
        className="absolute -top-[15%] left-[20%] w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full opacity-20 blur-[100px] pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, #FFC300 0%, #b38800 50%, transparent 80%)',
          animation: 'driftOrb1 22s ease-in-out infinite alternate',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Middle Floating Amber Light */}
      <div
        className="absolute top-[45%] -right-[15%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full opacity-15 blur-[110px] pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, #e69138 0%, #995c00 60%, transparent 85%)',
          animation: 'driftOrb2 28s ease-in-out infinite alternate',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Bottom Deep Glow */}
      <div
        className="absolute -bottom-[10%] left-[10%] w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] rounded-full opacity-10 blur-[120px] pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, #FFC300 0%, #3a2e12 70%, transparent 90%)',
          animation: 'driftOrb1 25s ease-in-out infinite alternate-reverse',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Subtle Audio Studio Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,195,0,0.3) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,195,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Film Grain Subtle Noise */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '3px 3px'
        }}
      />

      <style>{`
        @keyframes driftOrb1 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(60px, 40px) scale(1.15);
          }
          100% {
            transform: translate(-40px, 80px) scale(0.95);
          }
        }
        @keyframes driftOrb2 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-70px, -50px) scale(1.1);
          }
          100% {
            transform: translate(50px, -30px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};
