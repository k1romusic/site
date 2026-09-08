export interface DownloadVersion {
  version: string;
  releaseDate: string;
  isLatest: boolean;
  os: 'macOS' | 'Windows';
  architecture: string; // "Universal (Apple Silicon & Intel)" | "x64"
  fileSize: string;
  downloadUrl: string;
  changelog: { ru: string[]; en: string[] };
}

export interface ProductDownload {
  productId: string;
  productName: string;
  slug: string;
  versions: DownloadVersion[];
}
