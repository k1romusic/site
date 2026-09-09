import { ServiceItem } from '../types/service';

export const servicesList: ServiceItem[] = [
  {
    id: 'mixing-mastering',
    slug: 'mixing-mastering',
    number: '01',
    title: {
      ru: 'Сведение / Мастеринг',
      en: 'Mixing & Mastering'
    },
    shortDescription: {
      ru: 'Прецизионный баланс, кристальная читаемость, плотный панч баса и коммерческая громкость для топ-чартов.',
      en: 'Surgical frequency balance, punchy dynamics, and high-impact commercial loudness for streaming platforms.'
    },
    fullDescription: {
      ru: 'Многополосный частотный клинап, аналоговая сатурация на кастомных преампах и объемная стерео/Dolby Atmos панорама.',
      en: 'Precision phase alignment, dynamic harmonic saturation via custom outboard preamps, and expansive 3D stereo placement.'
    },
    deliverables: {
      ru: ['WAV 24/32-bit Master', 'Streaming & Club версии', 'Минус / TV Track'],
      en: ['WAV 24/32-bit Master', 'Streaming & Club cuts', 'Instrumental & TV versions']
    },
    suitableFor: {
      ru: 'Треки, требующие профессиональной глубины и плотности',
      en: 'Tracks demanding competitive punch and depth'
    }
  },
  {
    id: 'custom-song',
    slug: 'custom-song',
    number: '02',
    title: {
      ru: 'Песня на заказ',
      en: 'Custom Song'
    },
    shortDescription: {
      ru: 'Создание полноценного хита «под ключ»: от текста, концепта и хука до финального студийного звучания.',
      en: 'Complete turnkey song creation: from melody, lyrics, and vocal arrangement to the final release master.'
    },
    fullDescription: {
      ru: 'Полный авторский цикл создания музыкального произведения под ваши задачи, бренд или релиз.',
      en: 'Full creative cycle tailored to your personal artistic identity or commercial project.'
    },
    deliverables: {
      ru: ['Слова и мелодия (Топлайн)', 'Студийный чистовой трек', 'Полная передача авторских прав'],
      en: ['Topline & Lyrics', 'Finished Studio Master', 'Full Commercial Rights Transfer']
    },
    suitableFor: {
      ru: 'Артисты, бренды, подарки, коммерческие проекты',
      en: 'Artists, commercial campaigns, bespoke gifts'
    }
  },
  {
    id: 'arrangement-beat',
    slug: 'arrangement-beat',
    number: '03',
    title: {
      ru: 'Аранжировка / Beat',
      en: 'Arrangement & Beat'
    },
    shortDescription: {
      ru: 'Авторский бит и аранжировка в любом стиле. Живые синты, жирный бас, фирменный грув и кинематографичная динамика.',
      en: 'Custom beatmaking and arrangement in any style: punchy drums, signature groove, and modern synthesizers.'
    },
    fullDescription: {
      ru: 'Разработка уникального инструментала с живым звучанием инструментов и глубоким саунд-дизайном.',
      en: 'Custom instrumental production combining dynamic rhythm sections and analog synths.'
    },
    deliverables: {
      ru: ['Уникальный инструментал (WAV)', 'Стемсы всех дорожек (Stems)', 'MIDI партии'],
      en: ['Exclusive Instrumental', 'Full Trackout Stems', 'MIDI Projects']
    },
    suitableFor: {
      ru: 'Вокалисты, рэп- и поп-артисты, саундтреки',
      en: 'Vocalists, rap & pop artists, soundtrack production'
    }
  },
  {
    id: 'ai-voice-production',
    slug: 'ai-voice-production',
    number: '04',
    title: {
      ru: 'ИИ-продакшн (Песни вашим голосом)',
      en: 'AI Production (Your Voice)'
    },
    shortDescription: {
      ru: 'Обучение нейросети на вашем тембре и генерация песен с вашим вокалом. Идеальное интонирование и тембральная точность.',
      en: 'Train custom AI models on your vocal timbre to produce complete songs in your authentic voice.'
    },
    fullDescription: {
      ru: 'Создание персональной нейромодели вашего голоса и интеграция в песню с профессиональной пост-обработкой.',
      en: 'Neural voice training coupled with high-end audio engineering and mix integration.'
    },
    deliverables: {
      ru: ['Обученная модель вокала', 'Чистовой вокальный трек', 'Студийный микс с музыкой'],
      en: ['Trained Neural Voice Model', 'Processed Lead Vocal', 'Finished Studio Blend']
    },
    suitableFor: {
      ru: 'Авторы контента, артисты, эксперименты и виртуальные вокалы',
      en: 'Content creators, artists, virtual performers'
    }
  },
  {
    id: 'ai-tools',
    slug: 'ai-tools',
    number: '05',
    title: {
      ru: 'ИИ-инструменты',
      en: 'AI Tools & Plugins'
    },
    shortDescription: {
      ru: 'Собственный софт и VST/AU плагины: AI Voice (клонирование), Synchrovoice (выравнивание) и Stem Studio (стемы).',
      en: 'Next-gen proprietary DSP & AI plugins: AI Voice, Synchrovoice, and Stem Studio directly in your DAW.'
    },
    fullDescription: {
      ru: 'Профессиональные DSP и AI алгоритмы для быстрого решения ключевых студийных задач.',
      en: 'High-performance audio processing software developed for modern studio speed and quality.'
    },
    deliverables: {
      ru: ['AI Voice (клонирование)', 'Synchrovoice (выравнивание)', 'Stem Studio (стемы)'],
      en: ['AI Voice (Vocal Cloning)', 'Synchrovoice (ARA2 Alignment)', 'Stem Studio (Stem Splitter)']
    },
    suitableFor: {
      ru: 'Звукорежиссеры, продюсеры, музыканты',
      en: 'Audio engineers, producers, musicians'
    }
  }
];
