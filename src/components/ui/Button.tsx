import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gold',
  size = 'md',
  glow = false,
  icon,
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold tracking-wider uppercase transition-all duration-300 rounded-xl cursor-pointer select-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3.5 text-sm',
    lg: 'px-8 py-4.5 text-base tracking-widest'
  };

  const variantStyles = {
    gold: 'bg-gradient-to-r from-[#FFC300] to-[#e6b000] text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(255,195,0,0.4)]',
    outline: 'border border-[#FFC300]/40 text-[#F5F0E8] hover:border-[#FFC300] hover:text-[#FFC300] hover:bg-[#FFC300]/5 hover:scale-105',
    glass: 'bg-white/5 border border-white/10 text-[#F5F0E8] backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-105',
    ghost: 'text-[#F5F0E8]/70 hover:text-[#F5F0E8] hover:bg-white/5'
  };

  const glowStyle = glow ? 'animate-pulse-glow shadow-[0_0_20px_rgba(255,195,0,0.3)]' : '';

  return (
    <button
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], glowStyle, className))}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
