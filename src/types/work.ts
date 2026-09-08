export interface WorkItem {
  id: string;
  slug: string;
  title: string;
  artist: string;
  roles: { ru: string; en: string }; // e.g. "Production, Mixing, Mastering"
  category: 'production' | 'mixing' | 'mastering' | 'sound_design' | 'ai';
  year: string;
  coverImage: string;
  audioPreviewUrl?: string;
  duration?: string;
  description: { ru: string; en: string };
  spotifyUrl?: string;
  appleMusicUrl?: string;
  featured: boolean;
}
