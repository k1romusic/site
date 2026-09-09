import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from '../../i18n/I18nContext';
import { brandConfig } from '../../data/brand';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AudioVisualizerLogo } from '../ui/AudioVisualizerLogo';
import { ArrowUp } from 'lucide-react';
import { scrollToPosition } from '../../hooks/useSmoothScroll';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage =
    location.pathname === '/' ||
    location.pathname === '/ru' ||
    location.pathname === '/en';

  const scrollToTop = () => {
    scrollToPosition(0, false);
  };

  const handleNavClick = (target: string, isPage: boolean) => {
    if (isPage) {
      if (location.pathname === '/plugins') {
        scrollToPosition(0, false);
      } else {
        navigate('/plugins');
      }
    } else {
      if (isHomePage) {
        scrollToPosition(`#${target}`, false);
      } else {
        navigate(`/#${target}`);
      }
    }
  };

  return (
    <footer className="w-full bg-[#252422] border-t border-white/10 pt-16 pb-12 text-[#F5F0E8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <span className="text-3xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFC300] to-[#b38800]">
                K1RO MUSIC
              </span>
              <AudioVisualizerLogo size="sm" animated={false} />
            </Link>
            <p className="text-sm max-w-md text-[#F5F0E8]/60 leading-relaxed">
              {brandConfig.about.lead.ru}
            </p>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFC300] mb-4">
              {t.nav.menu}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('works', false)}
                  className="hover:text-[#FFC300] transition-colors cursor-pointer"
                >
                  {t.nav.works}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('services', false)}
                  className="hover:text-[#FFC300] transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('/plugins', true)}
                  className="hover:text-[#FFC300] transition-colors cursor-pointer text-left"
                >
                  {t.nav.plugins}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('about', false)}
                  className="hover:text-[#FFC300] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('contact', false)}
                  className="hover:text-[#FFC300] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>


          {/* Col 3: Socials & Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFC300] mb-4">
              Socials
            </h4>
            <ul className="space-y-2.5 text-sm">
              {brandConfig.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFC300] transition-colors flex items-center justify-between group"
                  >
                    <span>{social.name}</span>
                    <span className="text-xs text-white/30 group-hover:text-[#FFC300]/70 font-mono">
                      {social.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} K1RO. {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#F5F0E8] transition-colors">{t.footer.privacy}</a>
            <a href="#terms" className="hover:text-[#F5F0E8] transition-colors">{t.footer.terms}</a>
            <a href="#refund" className="hover:text-[#F5F0E8] transition-colors">{t.footer.refund}</a>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#FFC300] hover:text-[#FFC300] transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
