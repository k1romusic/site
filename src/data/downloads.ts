import { ProductDownload } from '../types/download';

export const downloadsList: ProductDownload[] = [
  {
    productId: 'k1ro-clipper',
    productName: 'K1RO CLIPPER',
    slug: 'k1ro-clipper',
    versions: [
      {
        version: '1.0.4',
        releaseDate: '2025-01-15',
        isLatest: true,
        os: 'macOS',
        architecture: 'Universal (Apple Silicon & Intel 64-bit)',
        fileSize: '42.8 MB',
        downloadUrl: '/downloads/K1RO-Clipper-1.0.4-macOS.pkg',
        changelog: {
          ru: [
            'Добавлен режим 16x Linear Phase Oversampling',
            'Улучшена визуализация формы волны на Retina дисплеях',
            'Оптимизировано энергопотребление на процессорах Apple Silicon M3/M4'
          ],
          en: [
            'Added 16x Linear Phase Oversampling mode',
            'Enhanced waveform graphics for high-density Retina displays',
            'Optimized CPU efficiency for Apple Silicon M3/M4 series'
          ]
        }
      },
      {
        version: '1.0.4',
        releaseDate: '2025-01-15',
        isLatest: true,
        os: 'Windows',
        architecture: 'Windows 10/11 64-bit (x64)',
        fileSize: '38.4 MB',
        downloadUrl: '/downloads/K1RO-Clipper-1.0.4-Win64.exe',
        changelog: {
          ru: [
            'Поддержка VST3 и AAX форматов',
            'Оптимизация под инструкции AVX2',
            'Исправлено масштабирование окна плагина в FL Studio и Ableton Live'
          ],
          en: [
            'Native VST3 & AAX architecture support',
            'SIMD AVX2 acceleration enabled',
            'Fixed UI scaling behavior in FL Studio and Ableton Live'
          ]
        }
      },
      {
        version: '1.0.1',
        releaseDate: '2024-12-01',
        isLatest: false,
        os: 'macOS',
        architecture: 'Universal (Apple Silicon & Intel)',
        fileSize: '41.2 MB',
        downloadUrl: '/downloads/K1RO-Clipper-1.0.1-macOS.pkg',
        changelog: {
          ru: ['Первый релиз K1RO Clipper для macOS'],
          en: ['Initial release of K1RO Clipper for macOS']
        }
      }
    ]
  },
  {
    productId: 'k1ro-dynamic-eq',
    productName: 'K1RO DYNAMIC EQ',
    slug: 'k1ro-dynamic-eq',
    versions: [
      {
        version: '1.2.0',
        releaseDate: '2024-11-20',
        isLatest: true,
        os: 'macOS',
        architecture: 'Universal (Apple Silicon & Intel)',
        fileSize: '54.1 MB',
        downloadUrl: '/downloads/K1RO-DynamicEQ-1.2.0-macOS.pkg',
        changelog: {
          ru: ['Нейросетевой трекинг резонансов в реальном времени', 'Добавлена поддержка сайдчейн-спектра'],
          en: ['Real-time neural resonance curve tracker', 'Added sidechain spectrum linking']
        }
      },
      {
        version: '1.2.0',
        releaseDate: '2024-11-20',
        isLatest: true,
        os: 'Windows',
        architecture: 'Windows 10/11 64-bit',
        fileSize: '49.6 MB',
        downloadUrl: '/downloads/K1RO-DynamicEQ-1.2.0-Win64.exe',
        changelog: {
          ru: ['Снижена нагрузка на CPU при работе с 32 полосами эквализации'],
          en: ['Reduced CPU overhead with 32 dynamic bands active']
        }
      }
    ]
  }
];
