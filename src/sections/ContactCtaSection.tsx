import React from 'react';
import { brandConfig } from '../data/brand';

export const ContactCtaSection: React.FC = () => {
  const contactButtons = [
    {
      id: 'telegram',
      name: 'Telegram',
      url: brandConfig.contacts.telegram,
      icon: (
        <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#2AABEE" />
          <path
            d="M17.5 7.2L5.8 11.7c-.8.3-.8.8-.1 1l3 1 1 3.2c.2.4.4.4.6.2l1.6-1.5 3.3 2.4c.6.3 1 .2 1.2-.5l2.2-10.4c.2-.9-.3-1.3-1.1-.9zM9.5 13.5l6.5-4.1c.3-.2.6-.1.4.1l-5.3 4.8-.2 2.2-.4-3z"
            fill="#FFFFFF"
          />
        </svg>
      )
    },
    {
      id: 'vk',
      name: 'VK',
      url: brandConfig.contacts.vk,
      icon: (
        <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#0077FF" />
          <path
            d="M13.2 16.5c-4.4 0-6.9-3-7-8h2.2c.1 3.7 1.7 5.2 3 5.5V8.5h2.1v3.2c1.2-.1 2.5-1.5 3-3.2h2.1c-.4 2.1-1.9 3.6-3 4.2 1.1.5 2.8 1.8 3.5 3.8h-2.3c-.7-1.5-1.9-2.7-3.6-2.8v2.8h-2z"
            fill="#FFFFFF"
          />
        </svg>
      )
    },
    {
      id: 'email',
      name: 'Email',
      url: `mailto:${brandConfig.contacts.email}`,
      icon: (
        <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#EA4335" />
          <path
            d="M6 8.5l6 4 6-4V7.5L12 11.5 6 7.5v1z"
            fill="#FFFFFF"
          />
          <path
            d="M6 16.5h12v-6.5l-6 4-6-4v6.5z"
            fill="#FFFFFF"
          />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center border-t border-white/5">
      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 overflow-hidden shadow-2xl">
        {/* Glow Behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#FFC300]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F0E8] mb-10">
            СВЯЗАТЬСЯ
          </h2>

          {/* 3 Clean Buttons: App Icon + 'Написать' */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {contactButtons.map((btn) => (
              <a
                key={btn.id}
                href={btn.url}
                target={btn.id !== 'email' ? '_blank' : undefined}
                rel={btn.id !== 'email' ? 'noopener noreferrer' : undefined}
                className="group relative flex items-center justify-between px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-[#FFC300]/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {btn.icon}
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-[#FFC300] text-black font-bold text-xs uppercase tracking-wider group-hover:bg-[#ffe066] transition-colors shadow-md">
                  Написать
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
