import { PluginItem } from '../types/plugin';

export const pluginsList: PluginItem[] = [
  {
    id: 'ai-voice',
    slug: 'ai-voice',
    name: 'AI VOICE',
    tagline: {
      ru: 'Прецизионное нейросетевое клонирование и трансформация вокала',
      en: 'Precision neural vocal cloning & timbre transformation engine'
    },
    description: {
      ru: 'Инструмент нового поколения для клонирования, подмены тембра и трансформации вокальных партий. Сохраняет естественную артикуляцию, дыхание и микродинамику исполнителя без фазовых искажений и роботизированных артефактов.',
      en: 'Next-generation neural framework for realistic vocal cloning, timbre replacement, and voice conversion. Retains natural articulation, breath, and expressive micro-dynamics.'
    },
    category: 'AI Audio',
    version: '1.0.0',
    releaseDate: '2025-02-15',
    price: 79,
    priceRub: 7900,
    formats: ['VST3', 'AU', 'Standalone'],
    systems: ['macOS Apple Silicon & Intel', 'Windows 10/11 64-bit'],
    featured: true,
    coverImage: '/images/plugins/ai-voice.webp',
    screenshot: 'screenshots/ai_voice_guide_and_cloned.png',
    badge: { ru: 'NEURAL DSP', en: 'NEURAL DSP' },
    features: [
      {
        title: { ru: 'Zero Latency Inference', en: 'Zero Latency Inference' },
        description: { ru: 'Работа нейросетевого инференса в реальном времени с поддержкой Apple Neural Engine и NVIDIA CUDA.', en: 'Real-time inference optimized for Apple Neural Engine and NVIDIA CUDA.' }
      },
      {
        title: { ru: 'Timbre & Formant Match', en: 'Timbre & Formant Match' },
        description: { ru: 'Ультра-точная подстройка формант и тембральной окраски под целевой голос за пару кликов.', en: 'Ultra-accurate formant adjustment and timbre curve matching in seconds.' }
      },
      {
        title: { ru: 'Natural Vibrato & Breath', en: 'Natural Vibrato & Breath' },
        description: { ru: 'Сохранение органического вибрато, вздохов и эмоционального напора исходного вокала.', en: 'Preserves organic vibrato, natural breathing, and emotional inflection.' }
      }
    ],
    downloadUrl: '#contact',
    buyUrl: '#contact'
  },
  {
    id: 'synchrovoice',
    slug: 'synchrovoice',
    name: 'SYNCHROVOICE',
    tagline: {
      ru: 'Автоматическое выравнивание вокала по таймингу и высоте тона',
      en: 'Automatic vocal alignment: surgical timing & micro-pitch correction'
    },
    description: {
      ru: 'Профессиональный студийный инструмент для мгновенной синхронизации бэк-вокала, дабл-треков и хоров с ведущей партией (Lead Vocal). Корректирует фазовые сдвиги, тайминг слогов и тон с бескомпромиссной прозрачностью.',
      en: 'Studio-grade tool for effortless alignment of backing vocals, double-tracks, and harmonies to the lead vocal. Aligns groove, transient timing, and micro-pitch seamlessly.'
    },
    category: 'Vocal DSP',
    version: '1.1.2',
    releaseDate: '2025-01-20',
    price: 69,
    priceRub: 6900,
    formats: ['VST3', 'AU', 'ARA2'],
    systems: ['macOS Apple Silicon & Intel', 'Windows 10/11 64-bit'],
    featured: true,
    coverImage: '/images/plugins/synchrovoice.webp',
    badge: { ru: 'ARA2 SUPPORT', en: 'ARA2 SUPPORT' },
    features: [
      {
        title: { ru: 'Smart Transient Alignment', en: 'Smart Transient Alignment' },
        description: { ru: 'Автоматическая подгонка согласных звуков и атак под лид-вокал за 1 клик.', en: 'Automatic consonant and transient snapping to reference audio in 1 click.' }
      },
      {
        title: { ru: 'Surgical Pitch Matching', en: 'Surgical Pitch Matching' },
        description: { ru: 'Выравнивание высоты тона даблов без эффекта «робота» и фазовой каши.', en: 'Harmonic pitch tracking and tightening without robotic phase cancellation.' }
      },
      {
        title: { ru: 'Multi-Track Batch Process', en: 'Multi-Track Batch Process' },
        description: { ru: 'Синхронизация неограниченного числа дорожек бэков одновременно.', en: 'Simultaneous batch alignment across unlimited background vocal stacks.' }
      }
    ],
    downloadUrl: '#contact',
    buyUrl: '#contact'
  },
  {
    id: 'stem-studio',
    slug: 'stem-studio',
    name: 'STEM STUDIO',
    tagline: {
      ru: 'Нейросетевое разделение готового трека на изолированные дорожки',
      en: 'High-fidelity neural source separation & stem extractor'
    },
    description: {
      ru: 'Передовой спектральный демикшер на базе модифицированных нейроархитектур. Идеально раскладывает стереомикс на Вокал, Барабаны, Бас и Инструменты с минимальным остаточным кровотечением (bleeding) и чистым переходным откликом.',
      en: 'State-of-the-art neural source separation engine. Dissects any stereo mix into pristine Stems: Vocals, Drums, Bass, and Instruments with minimal bleed and zero smear.'
    },
    category: 'Stem Separation',
    version: '2.0.0',
    releaseDate: '2025-02-01',
    price: 89,
    priceRub: 8900,
    formats: ['Standalone', 'VST3', 'AU'],
    systems: ['macOS Apple Silicon & Intel', 'Windows 10/11 64-bit'],
    featured: true,
    coverImage: '/images/plugins/stem-studio.webp',
    screenshot: 'screenshots/stem_studio_stems.png',
    badge: { ru: 'PRO DEMIX', en: 'PRO DEMIX' },
    features: [
      {
        title: { ru: '4 & 6-Stem Precision Extraction', en: '4 & 6-Stem Precision Extraction' },
        description: { ru: 'Разделение на Вокал, Ударные, Бас, Клавишные, Гитары и Прочие инструменты.', en: 'Isolates Vocals, Drums, Bass, Keys, Guitars, and Ambient soundscapes.' }
      },
      {
        title: { ru: 'Acoustic Phase Restoration', en: 'Acoustic Phase Restoration' },
        description: { ru: 'Сумма всех извлеченных стэмов звучит идентично оригиналу без фазовых дыр.', en: 'Re-summed stems null against the master track with pure phase alignment.' }
      },
      {
        title: { ru: 'High-Res 32-Bit Export', en: 'High-Res 32-Bit Export' },
        description: { ru: 'Прямой экспорт стэмов в WAV/FLAC 96 кГц / 32-bit Float для ремиксов и сэмплирования.', en: 'Direct 96 kHz / 32-bit Float lossless stem export for remixing & sampling.' }
      }
    ],
    downloadUrl: '#contact',
    buyUrl: '#contact'
  }
];
