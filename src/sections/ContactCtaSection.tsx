import React from 'react';
import { useTranslation } from '../i18n/I18nContext';
import { brandConfig } from '../data/brand';
import { Button } from '../components/ui/Button';
import { Send, Mail, Sparkles, MessageSquare } from 'lucide-react';

export const ContactCtaSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-white/5">
      <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 overflow-hidden shadow-2xl">
        {/* Glow Behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#FFC300]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC300]/15 text-[#FFC300] text-xs font-bold uppercase tracking-[0.2em] border border-[#FFC300]/30 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {t.cta.badge}
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F5F0E8] mb-4">
            {t.cta.title}
          </h2>

          <p className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] via-[#F5F0E8] to-[#FFC300] max-w-2xl mx-auto mb-10 leading-snug uppercase tracking-wide">
            {t.cta.lead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={brandConfig.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="gold"
                size="lg"
                glow={true}
                icon={<Send className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                {t.cta.directTg}
              </Button>
            </a>

            <a
              href={brandConfig.contacts.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto hover:border-[#FFC300]/50"
              >
                VK: @denk1ro
              </Button>
            </a>

            <a
              href={`mailto:${brandConfig.contacts.email}`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="glass"
                size="lg"
                icon={<Mail className="w-5 h-5 text-[#FFC300]" />}
                className="w-full sm:w-auto"
              >
                {brandConfig.contacts.email}
              </Button>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs font-mono text-white/40">
            <MessageSquare className="w-3.5 h-3.5 text-[#FFC300]" />
            <span>Average response time: under 2 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};
