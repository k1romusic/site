import { WorkItem } from '../types/work';

export const worksList: WorkItem[] = [
  {
    id: 'work-1',
    slug: 'hyperdrive-album',
    title: 'HYPERDRIVE (LP)',
    artist: 'CYBERPUNK OST / SYNTH-WAVE',
    roles: {
      ru: 'Полный продакшн, сведение, аналоговый мастеринг',
      en: 'Full Production, Mixing & Analog Stem Mastering'
    },
    category: 'production',
    year: '2024',
    coverImage: '/images/works/hyperdrive.webp',
    audioPreviewUrl: '/audio/demo-track-1.mp3',
    duration: '2:45',
    description: {
      ru: 'Концептуальный альбом с гибридными аналоговыми синтезаторами, агрессивной ритм-секцией и кинематографическим пространством.',
      en: 'Concept release combining hardware analog synths, aggressive transient design, and deep cinematic stereo spatialization.'
    },
    featured: true
  },
  {
    id: 'work-2',
    slug: 'eclipse-single',
    title: 'ECLIPSE',
    artist: 'NOCTURNE feat. AURA',
    roles: {
      ru: 'Вокальный продакшн, Dolby Atmos & стерео-сведение',
      en: 'Vocal Production, Dolby Atmos & Stereo Mixdown'
    },
    category: 'mixing',
    year: '2024',
    coverImage: '/images/works/eclipse.webp',
    audioPreviewUrl: '/audio/demo-track-2.mp3',
    duration: '3:12',
    description: {
      ru: 'Современный электронный поп-трек. Сложная многослойная гармонизация вокала и точнейший баланс саб-баса под клубные системы.',
      en: 'Contemporary electronic release featuring complex vocal layers and surgical low-end clarity optimized for festival sound.'
    },
    featured: true
  },
  {
    id: 'work-3',
    slug: 'dark-matter-ep',
    title: 'DARK MATTER EP',
    artist: 'K1RO SESSIONS',
    roles: {
      ru: 'Sound Design, AI-Assisted Arrangement, Mastering',
      en: 'Sound Design, AI-Assisted Arrangement, Mastering'
    },
    category: 'sound_design',
    year: '2025',
    coverImage: '/images/works/darkmatter.webp',
    audioPreviewUrl: '/audio/demo-track-3.mp3',
    duration: '2:18',
    description: {
      ru: 'Экспериментальный релиз, созданный с использованием нейросетевых генеративных аудиомоделей и кастомных плагинов K1RO.',
      en: 'Experimental release forged with neural generative audio frameworks and custom proprietary K1RO DSP instruments.'
    },
    featured: true
  },
  {
    id: 'work-4',
    slug: 'velocity-single',
    title: 'VELOCITY (CLUB MIX)',
    artist: 'K1RO x NEON DRIFT',
    roles: {
      ru: 'Сведение, Club Master',
      en: 'Mixing & High-Impact Club Master'
    },
    category: 'mastering',
    year: '2024',
    coverImage: '/images/works/velocity.webp',
    audioPreviewUrl: '/audio/demo-track-4.mp3',
    duration: '4:02',
    description: {
      ru: 'Тяжелый клубный трек с экстремальным динамическим диапазоном и плотнейшим панчем на -5 LUFS без слышимого искажения.',
      en: 'Peak-hour club track with intense punch and pristine clarity mastered to -5 LUFS integrated loudness.'
    },
    featured: false
  }
];
