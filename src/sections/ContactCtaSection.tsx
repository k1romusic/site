import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { brandConfig } from '../data/brand';
import { Send, Mail, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactCtaSection: React.FC = () => {
  const { lang, t } = useTranslation();

  const contactButtons = [
    {
      id: 'telegram',
      name: 'Telegram',
      handle: '@denk1ro',
      url: brandConfig.contacts.telegram,
      icon: <Send className="w-5 h-5 text-[#FFC300]" />,
      desc: lang === 'ru' ? 'Быстрый ответ в мессенджере' : 'Fast chat response'
    },
    {
      id: 'vk',
      name: 'ВКонтакте',
      handle: 'vk.ru/denk1ro',
      url: brandConfig.contacts.vk,
      icon: (
        <span className="w-5 h-5 rounded-full bg-[#FFC300]/20 flex items-center justify-center font-bold text-xs text-[#FFC300]">
          VK
        </span>
      ),
      desc: lang === 'ru' ? 'Личные сообщения сообщества' : 'Direct community message'
    },
    {
      id: 'email',
      name: 'Email почта',
      handle: brandConfig.contacts.email,
      url: `mailto:${brandConfig.contacts.email}`,
      icon: <Mail className="w-5 h-5 text-[#FFC300]" />,
      desc: lang === 'ru' ? 'Официальные запросы & стемы' : 'Official inquiry & stems'
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/5">
      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 overflow-hidden shadow-2xl">
        {/* Glow Behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#FFC300]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFC300]/15 text-[#FFC300] text-xs font-bold uppercase tracking-[0.2em] border border-[#FFC300]/30 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            {t.cta.badge}
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F0E8] mb-4">
            {t.cta.title}
          </h2>

          <p className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] via-[#F5F0E8] to-[#FFC300] max-w-2xl mx-auto mb-10 leading-snug uppercase tracking-wide">
            {t.cta.lead}
          </p>

          {/* 3 Identical Contact Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {contactButtons.map((btn) => (
              <a
                key={btn.id}
                href={btn.url}
                target={btn.id !== 'email' ? '_blank' : undefined}
                rel={btn.id !== 'email' ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-[#FFC300]/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FFC300]/10 group-hover:border-[#FFC300]/40 transition-colors">
                    {btn.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-[#FFC300] group-hover:bg-[#FFC300]/10 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-black uppercase text-[#F5F0E8] group-hover:text-[#FFC300] transition-colors mb-1">
                    {btn.name}
                  </h3>
                  <p className="text-xs font-mono text-[#FFC300]/90 truncate font-semibold mb-1">
                    {btn.handle}
                  </p>
                  <p className="text-[11px] text-white/50">
                    {btn.desc}
                  </p>
                </div>

                {/* Subtle bottom line */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-[#FFC300]/70 transition-colors">
                  <span>Связаться</span>
                  <span>Direct Link</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs font-mono text-white/40">
            <MessageSquare className="w-3.5 h-3.5 text-[#FFC300]" />
            <span>Среднее время ответа: в течение 1–2 часов</span>
          </div>
        </div>
      </div>
    </section>
  );
};
