export interface PluginFeature {
  title: { ru: string; en: string };
  description: { ru: string; en: string };
}

export interface PluginItem {
  id: string;
  slug: string;
  name: string;
  tagline: { ru: string; en: string };
  description: { ru: string; en: string };
  category: 'Dynamics' | 'EQ' | 'Distortion' | 'Utility' | 'AI' | 'Vocal DSP' | 'Stem Separation' | 'AI Audio';
  version: string;
  releaseDate: string;
  price: number; // in USD or converted
  priceRub: number;
  formats: string[]; // VST3, AU, AAX
  systems: string[]; // macOS (Universal), Windows 64-bit
  featured: boolean;
  coverImage: string;
  screenshot?: string;
  badge?: { ru: string; en: string };
  features: PluginFeature[];
  downloadUrl: string;
  buyUrl: string;
}
