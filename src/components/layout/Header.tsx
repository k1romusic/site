import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../i18n/I18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AudioVisualizerLogo } from '../ui/AudioVisualizerLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.works, href: '/#works' },
    { label: t.nav.plugins, href: '/plugins' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#252422]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-xl sm:text-2xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] to-[#b38800] group-hover:opacity-90 transition-opacity whitespace-nowrap">
              K1RO MUSIC
            </span>
            <AudioVisualizerLogo size="sm" animated={true} className="inline-flex opacity-90 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wider text-[#F5F0E8]/75 hover:text-[#FFC300] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFC300] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FFC300] to-[#e6b000] text-black text-xs font-bold tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,195,0,0.25)]"
            >
              <span>{t.cta.button}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Language & Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={t.nav.menu}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F5F0E8] hover:border-[#FFC300]/40 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Sheet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#252422]/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] to-[#b38800]">
                  K1RO MUSIC
                </span>
                <AudioVisualizerLogo size="sm" animated={true} />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label={t.nav.close}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F5F0E8] hover:text-[#FFC300] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 py-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-[#F5F0E8] hover:text-[#FFC300] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#FFC300]/50 tracking-normal">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>

            {/* Bottom Controls */}
            <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFC300] to-[#e6b000] text-black text-center font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(255,195,0,0.3)]"
              >
                {t.cta.button}
              </a>
              <div className="flex items-center justify-between text-xs text-[#F5F0E8]/50">
                <span>© {new Date().getFullYear()} K1RO MUSIC</span>
                <span>MUSIC • SOUND • TECH</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
