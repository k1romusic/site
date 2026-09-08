import { ServiceItem } from '../types/service';

export const servicesList: ServiceItem[] = [
  {
    id: 'music-production',
    slug: 'music-production',
    number: '01',
    title: {
      ru: 'Music Production',
      en: 'Music Production'
    },
    shortDescription: {
      ru: 'Создание трека «под ключ»: от гармонической идеи и записи до финального коммерческого звучания.',
      en: 'Full-cycle track creation from initial concept and arrangement to radio-ready master.'
    },
    fullDescription: {
      ru: 'Индивидуальная разработка оригинального звукового почерка для артиста. Живые инструменты, модульные синтезаторы, передовой саунд-дизайн и выверенная структура аранжировки.',
      en: 'Bespoke sonic identity crafted for artists. Combining hardware modular synths, pristine live recording, cutting-edge sound design, and infectious arrangement dynamics.'
    },
    deliverables: {
      ru: ['Полная аранжировка в 24-bit WAV', 'Стемсы всех дорожек (Stems)', 'Инструментальная и аккапельная версии'],
      en: ['Full Arrangement in 24-bit WAV', 'Separated Multitrack Stems', 'Instrumental & Acapella versions']
    },
    suitableFor: {
      ru: 'Артисты, лейблы, рекламные кампании и медиа-проекты',
      en: 'Recording artists, record labels, and commercial media campaigns'
    }
  },
  {
    id: 'mixing',
    slug: 'mixing',
    number: '02',
    title: {
      ru: 'Mixing (Сведение)',
      en: 'Mixing Engineering'
    },
    shortDescription: {
      ru: 'Сборка монолитного, объемного и сбалансированного микса с безупречной читаемостью каждого элемента.',
      en: 'Surgical frequency carving, spatial depth, and punchy translation across all playback systems.'
    },
    fullDescription: {
      ru: 'Многополосный частотный клинап, фазовое согласование дорожек, аналоговая сатурация на кастомных преампах и объемная стерео/Dolby Atmos панорама.',
      en: 'Precision phase alignment, dynamic harmonic saturation via custom outboard preamps, and expansive 3D stereo placement.'
    },
    deliverables: {
      ru: ['Premaster WAV 32-bit Float', 'Альтернативные версии (Vocal Up / TV Track / Instrumental)'],
      en: ['Premaster WAV 32-bit Float', 'Alternate Deliverables (Vocal Up / TV Track / Instrumental)']
    },
    suitableFor: {
      ru: 'Студийные треки, требующие профессиональной глубины и коммерческой плотности',
      en: 'Studio recordings needing competitive depth, width, and punch'
    }
  },
  {
    id: 'mastering',
    slug: 'mastering',
    number: '03',
    title: {
      ru: 'Mastering (Мастеринг)',
      en: 'Mastering & Final Touch'
    },
    shortDescription: {
      ru: 'Финальная полировка звука: громкость, весомость баса и соответствие стандартам всех платформ.',
      en: 'The definitive polish: punch, warmth, and optimal commercial loudness for streaming platforms.'
    },
    fullDescription: {
      ru: 'Точный контроль динамики и гармоник на высококлассном аналогово-цифровом тракте. Никаких цифровых искажений — только чистая энергия и глубина.',
      en: 'High-precision dynamic envelope tuning and harmonic enhancement engineered to translate with maximum clarity on everything from smartphones to festival stages.'
    },
    deliverables: {
      ru: ['Streaming Master (Spotify/Apple Music)', 'Club High-Loudness Master', 'DDP образ для релизов'],
      en: ['Streaming Master (Spotify/Apple Music)', 'Peak Loudness Club Master', 'DDP Release Image']
    },
    suitableFor: {
      ru: 'Готовые сведённые треки, альбомы, EP',
      en: 'Completed stereo mixes, full albums, and EPs'
    }
  },
  {
    id: 'sound-design',
    slug: 'sound-design',
    number: '04',
    title: {
      ru: 'Sound Design & Foley',
      en: 'Sound Design & Foley'
    },
    shortDescription: {
      ru: 'Аудио-оформление кинематографического уровня для игр, промо-видео, брендинга и кинематографа.',
      en: 'Cinematic audio branding, trailers, video game SFX, and immersive auditory environments.'
    },
    fullDescription: {
      ru: 'Синтез уникальных звуковых эффектов, сэмплирование реальных фактур, пространственная обработка и создание узнаваемой звуковой айдентики продукта.',
      en: 'Bespoke SFX synthesis, field recording manipulation, granular textural layers, and cohesive sonic branding.'
    },
    deliverables: {
      ru: ['Каталог синхронизированных аудиоэффектов', 'Пространственный микс 5.1 / Стерео'],
      en: ['Custom Synchronized SFX Library', 'Spatial 5.1 / Stereo Soundscapes']
    },
    suitableFor: {
      ru: 'Игровые студии, режиссеры, креативные агентства',
      en: 'Game studios, directors, video producers, and tech startups'
    }
  },
  {
    id: 'ai-music',
    slug: 'ai-music',
    number: '05',
    title: {
      ru: 'AI Music Production',
      en: 'AI-Assisted Production'
    },
    shortDescription: {
      ru: 'Синтез нейросетевых технологий и аналогового мастерства для быстрого создания новаторского звучания.',
      en: 'Fusing advanced machine-learning models with analog craftsmanship to break creative boundaries.'
    },
    fullDescription: {
      ru: 'Применение передовых генеративных моделей (stem separation, neural synthesis, voice cloning) в сочетании с ручной студийной доработкой и живыми аранжировками.',
      en: 'Leveraging neural audio models (spectral stem extraction, neural timbre morphing, algorithmic motifs) refined with analog engineering precision.'
    },
    deliverables: {
      ru: ['Уникальные гибридные композиции', 'Нейро-сэмплпаки и кастомные пресеты'],
      en: ['Bespoke Hybrid Compositions', 'Neural Stem Libraries & Presets']
    },
    suitableFor: {
      ru: 'Инновационные медиа, метаверс-проекты, экспериментальные артисты',
      en: 'Experimental artists, digital-first brands, and futuristic media'
    }
  },
  {
    id: 'audio-plugins',
    slug: 'audio-plugins',
    number: '06',
    title: {
      ru: 'Custom Audio Plugins & DSP',
      en: 'Custom Audio Plugins & DSP'
    },
    shortDescription: {
      ru: 'Проектирование и разработка индивидуальных VST/AU плагинов, DSP-алгоритмов и софта под заказ.',
      en: 'Design and engineering of custom VST3/AU audio plugins, DSP algorithms, and studio tools.'
    },
    fullDescription: {
      ru: 'Разработка на C++ (JUCE framework), оптимизация под SIMD/NEON, проектирование аппаратных и софтверных алгоритмов нелинейных искажений, фильтрации и пространственной обработки.',
      en: 'High-performance C++ / JUCE development, SIMD optimization, algorithmic modeling of analog hardware, custom saturation curves, and modern UI implementation.'
    },
    deliverables: {
      ru: ['Инсталляторы macOS/Windows', 'Исходный код и документация по архитектуре'],
      en: ['macOS/Windows Installers', 'Source Architecture & Documentation']
    },
    suitableFor: {
      ru: 'Производители аудио-софта, крупные студии, продюсеры с авторскими техниками',
      en: 'Audio companies, studio facilities, and tech-forward producers'
    }
  }
];
