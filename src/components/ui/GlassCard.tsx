import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  hoverEffect = true,
  glowOnHover = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transition-all duration-300 transform-gpu',
          hoverEffect && 'hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1',
          glowOnHover && 'hover:border-[#FFC300]/40 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5),0_0_25px_-5px_rgba(255,195,0,0.15)]',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
