import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'muted' | 'outline';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'gold',
  className,
  children,
  ...props
}) => {
  const styles = {
    gold: 'bg-[#FFC300]/10 text-[#FFC300] border border-[#FFC300]/30',
    muted: 'bg-white/5 text-[#F5F0E8]/70 border border-white/10',
    outline: 'border border-white/20 text-[#F5F0E8]'
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]',
          styles[variant],
          className
        )
      )}
      {...props}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] animate-pulse" />
      {children}
    </span>
  );
};
