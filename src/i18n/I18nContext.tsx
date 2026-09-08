import React, { createContext, useContext, useState, useEffect } from 'react';
import { ru } from './ru';
import { en } from './en';

export type Language = 'ru' | 'en';
export type Dictionary = typeof ru;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('k1ro_lang');
    if (saved === 'ru' || saved === 'en') return saved;
    // Check browser language
    const browserLang = navigator.language?.toLowerCase() || '';
    if (browserLang.startsWith('ru')) return 'ru';
    return 'ru'; // default to RU as primary market
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('k1ro_lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const dictionary = lang === 'en' ? en : ru;

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionary }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
