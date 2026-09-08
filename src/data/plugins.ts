import { PluginItem } from '../types/plugin';

export const pluginsList: PluginItem[] = [
  {
    id: 'k1ro-clipper',
    slug: 'k1ro-clipper',
    name: 'K1RO CLIPPER',
    tagline: {
      ru: 'Прецизионный софт-клиппер с контролем аналоговых гармоник',
      en: 'Precision soft-clipper with harmonic color control'
    },
    description: {
      ru: 'Разработан для получения бескомпромиссной громкости без слышимых искажений и разрушения переходных процессов (transients). Оснащен 16x оверсэмплингом и уникальным алгоритмом компенсации фазы.',
      en: 'Engineered for uncompromising commercial loudness without transient degradation or harsh aliasing. Features pristine 16x oversampling and phase-aligned harmonics.'
    },
    category: 'Dynamics',
    version: '1.0.4',
    releaseDate: '2025-01-15',
    price: 49,
    priceRub: 4900,
    formats: ['VST3', 'AU', 'AAX'],
    systems: ['macOS Apple Silicon & Intel (10.15+)', 'Windows 10/11 64-bit'],
    featured: true,
    coverImage: '/images/plugins/clipper-preview.webp',
    badge: { ru: 'NEW RELEASE', en: 'NEW RELEASE' },
    features: [
      {
        title: { ru: 'Ultra-Transparent Clipping', en: 'Ultra-Transparent Clipping' },
        description: { ru: 'Мягкое ограничение пиков с нулевой задержкой для мониторинга в реальном времени.', en: 'Zero-latency ceiling rounding ideal for real-time monitoring and mastering.' }
      },
      {
        title: { ru: '16x Linear Phase Oversampling', en: '16x Linear Phase Oversampling' },
        description: { ru: 'Полное отсутствие цифрового элайзинга даже при агрессивном перегрузе.', en: 'Zero aliasing artifacts even under extreme drive thresholds.' }
      },
      {
        title: { ru: 'Odd & Even Harmonics', en: 'Odd & Even Harmonics' },
        description: { ru: 'Аналоговая теплота легендарных ламповых консолей в один клик.', en: 'Discrete tube-style harmonic warmth tuned to human auditory curves.' }
      }
    ],
    downloadUrl: '/downloads?product=k1ro-clipper',
    buyUrl: 'https://k1ro.com/checkout?product=k1ro-clipper'
  },
  {
    id: 'k1ro-dynamic-eq',
    slug: 'k1ro-dynamic-eq',
    name: 'K1RO DYNAMIC EQ',
    tagline: {
      ru: 'Интеллектуальный динамический эквалайзер с подавлением резонансов',
      en: 'Intelligent dynamic equalizer with surgical resonance control'
    },
    description: {
      ru: 'Автоматически отслеживает конфликтные резонансы вокала, барабанов и баса, сжимая их только в момент превышения порога. Чистый прозрачный микс без потери энергии.',
      en: 'Automatically tracks problem frequencies across vocals, drums, and heavy synth lines, engaging compression only when resonances exceed threshold.'
    },
    category: 'EQ',
    version: '1.2.0',
    releaseDate: '2024-11-20',
    price: 69,
    priceRub: 6900,
    formats: ['VST3', 'AU'],
    systems: ['macOS Apple Silicon & Intel (10.15+)', 'Windows 10/11 64-bit'],
    featured: true,
    coverImage: '/images/plugins/eq-preview.webp',
    badge: { ru: 'FLAGSHIP', en: 'FLAGSHIP' },
    features: [
      {
        title: { ru: 'Smart Resonance Detection', en: 'Smart Resonance Detection' },
        description: { ru: 'Нейросетевое обнаружение резких частот в реальном времени.', en: 'Real-time neural resonance curve tracker for surgical cleanup.' }
      },
      {
        title: { ru: 'Sidechain Spectrum Link', en: 'Sidechain Spectrum Link' },
        description: { ru: 'Разделение частотного пространства между бочкой и басом в один клик.', en: 'Dynamic carving between kick and bass in a single click.' }
      }
    ],
    downloadUrl: '/downloads?product=k1ro-dynamic-eq',
    buyUrl: 'https://k1ro.com/checkout?product=k1ro-dynamic-eq'
  },
  {
    id: 'k1ro-sub-lab',
    slug: 'k1ro-sub-lab',
    name: 'K1RO SUB LAB',
    tagline: {
      ru: 'Генератор суб-баса и фазовый сатуратор нижнего регистра',
      en: 'Sub-bass generator & low-end phase restoration engine'
    },
    description: {
      ru: 'Превращает слабый и размытый низ в монолитную стену баса. Автоматическая подстройка фазы и генерация суб-гармоник 20–60 Гц.',
      en: 'Transforms hollow low-end into a monolithic bass foundation. Features automatic phase alignment and 20–60 Hz sub-harmonic synthesis.'
    },
    category: 'Utility',
    version: '0.9.8',
    releaseDate: '2025-02-01',
    price: 39,
    priceRub: 3900,
    formats: ['VST3', 'AU'],
    systems: ['macOS Apple Silicon & Intel (10.15+)', 'Windows 10/11 64-bit'],
    featured: false,
    coverImage: '/images/plugins/sublab-preview.webp',
    badge: { ru: 'BETA', en: 'BETA' },
    features: [
      {
        title: { ru: 'Mono Sub Enforcement', en: 'Mono Sub Enforcement' },
        description: { ru: 'Кристальная моно-совместимость на любых клубных порталах.', en: 'Absolute mono compatibility on festival sound systems.' }
      }
    ],
    downloadUrl: '/downloads?product=k1ro-sub-lab',
    buyUrl: 'https://k1ro.com/checkout?product=k1ro-sub-lab'
  }
];
