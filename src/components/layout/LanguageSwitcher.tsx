import React from 'react';
import { useTranslation, Language } from '../../i18n/I18nContext';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang } = useTranslation();

  const handleSelect = (newLang: Language) => {
    if (newLang !== lang) {
      setLang(newLang);
    }
  };

  return (
    <div className={`inline-flex items-center rounded-lg p-0.5 bg-white/5 border border-white/10 text-xs font-bold tracking-widest ${className}`}>
      <button
        type="button"
        onClick={() => handleSelect('ru')}
        className={`px-2.5 py-1 rounded-md transition-all ${
          lang === 'ru'
            ? 'bg-[#FFC300] text-black shadow-sm font-black'
            : 'text-[#F5F0E8]/60 hover:text-[#F5F0E8]'
        }`}
        aria-label="Переключить на русский язык"
      >
        RU
      </button>
      <span className="text-white/20 select-none">|</span>
      <button
        type="button"
        onClick={() => handleSelect('en')}
        className={`px-2.5 py-1 rounded-md transition-all ${
          lang === 'en'
            ? 'bg-[#FFC300] text-black shadow-sm font-black'
            : 'text-[#F5F0E8]/60 hover:text-[#F5F0E8]'
        }`}
        aria-label="Switch to English language"
      >
        EN
      </button>
    </div>
  );
};
