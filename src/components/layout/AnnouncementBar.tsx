import React from 'react';
import { useTranslation } from '../../i18n/I18nContext';
import { brandConfig } from '../../data/brand';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { lang } = useTranslation();
  const announcement = brandConfig.announcement;

  if (!announcement.active) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-gradient-to-r from-[#252422] via-[#2f2d29] to-[#252422] border-b border-white/5 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center text-xs sm:text-sm">
        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FFC300]/15 text-[#FFC300] font-bold text-[10px] tracking-wider uppercase border border-[#FFC300]/30">
          <Sparkles className="w-3 h-3 text-[#FFC300]" />
          {announcement.badge[lang]}
        </span>
        <a
          href={announcement.link}
          className="group inline-flex items-center gap-1.5 text-[#F5F0E8]/85 hover:text-[#FFC300] transition-colors truncate"
        >
          <span className="font-medium truncate">{announcement.text[lang]}</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#FFC300] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </aside>
  );
};
