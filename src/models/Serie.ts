import type { Content } from "@models";

export interface Serie extends Content {
  seasons: Season[];
}

export interface Season {
  episodes: Episode[];
}

export interface Episode {
  id: number;
  seasonId: number;
  title: string;
  description: string;
  image: string;
  video: string;
  duration: number;
  createdBy: number;
  epiOrder: number;
  lastUpdated: Date;
  createdAt: Date;
}
