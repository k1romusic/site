import React from 'react';
import { brandConfig } from '../data/brand';
import { Send, Mail, MessageSquare } from 'lucide-react';

export const ContactCtaSection: React.FC = () => {
  const contactButtons = [
    {
      id: 'telegram',
      name: 'Telegram',
      handle: '@denk1ro',
      url: brandConfig.contacts.telegram,
      icon: <Send className="w-5 h-5 text-[#FFC300]" />
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
      )
    },
    {
      id: 'email',
      name: 'Email',
      handle: brandConfig.contacts.email,
      url: `mailto:${brandConfig.contacts.email}`,
      icon: <Mail className="w-5 h-5 text-[#FFC300]" />
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/5">
      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 overflow-hidden shadow-2xl">
        {/* Glow Behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#FFC300]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F0E8] mb-10">
            СВЯЗАТЬСЯ
          </h2>

          {/* 3 Identical Minimal Contact Buttons with 'Написать' */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {contactButtons.map((btn) => (
              <a
                key={btn.id}
                href={btn.url}
                target={btn.id !== 'email' ? '_blank' : undefined}
                rel={btn.id !== 'email' ? 'noopener noreferrer' : undefined}
                className="group relative flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-[#FFC300]/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FFC300]/10 group-hover:border-[#FFC300]/40 transition-colors shrink-0">
                    {btn.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-black uppercase text-[#F5F0E8] group-hover:text-[#FFC300] transition-colors">
                      {btn.name}
                    </h3>
                    <p className="text-xs font-mono text-[#FFC300]/80">
                      {btn.handle}
                    </p>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-[#FFC300] text-black font-bold text-xs uppercase tracking-wider group-hover:scale-105 transition-transform shadow-md">
                  Написать
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs font-mono text-white/40">
            <MessageSquare className="w-3.5 h-3.5 text-[#FFC300]" />
            <span>В сети: отвечаю в течение 1–2 часов</span>
          </div>
        </div>
      </div>
    </section>
  );
};
