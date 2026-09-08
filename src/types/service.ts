export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: { ru: string; en: string };
  shortDescription: { ru: string; en: string };
  fullDescription: { ru: string; en: string };
  deliverables: { ru: string[]; en: string[] };
  suitableFor: { ru: string; en: string };
  startingPrice?: { ru: string; en: string };
}
