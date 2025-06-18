// lib/types.ts
export interface GenericDataResponse<T> {
  set: string | number;
  version: string;
  data: T[];
}

export interface GuidesDataResponse<T> {
  guides: T[];
  status: string;
  totalGuides: number;
  updated: string;
}

export interface Champion {
  apiName: string;
  name: string;
  id: string;
  icon: string;
  abilityIcon: string;
  ability: string;
  abilityName: string;
  cost: number;
  hexIndex: string;
  traits: string[];
  stats: ChampionStats;
}

export interface ChampionStats {
  ap: number;
  ar: number;
  as: number;
  crit: number;
  ad: number;
  hp: number;
  initialMana: number;
  mr: number;
  mana: number;
  range: number;
}

export interface Trait {
  apiName: string;
  name: string;
  id: string;
  icon: string;
  description: string;
  effects: Record<string, string>;
  breakpoints: number[];
  colors: number[];
  rules: string[];
  champions: string[];
  type: string;
}

export interface Augment {
  apiName: string;
  id: string;
  name: string;
  icon: string;
  description: string;
  rules: string[];
  tier: string;
  tier2: string;
}

export interface Item {
  apiName: string;
  name: string;
  id: string;
  icon: string;
  description: string;
  composition: string[];
  rules: string[];
  stats: Record<string, string | number>;
  trait: string;
  type: string;
  unique: boolean;
  tier: string;
}
interface AltBuild {
  apiName: string;
  items: string[];
  stars: number;
}
interface EarlyComp {
  apiName: string;
  items: string[];
  stars: number;
}
interface Carousel {
  apiName: string;
  id: string;
}
export interface FinalComp {
  apiName: string;
  boardIndex: number;
  items: string[];
  stars: number;
}

export interface Guide {
  altBuilds: AltBuild[]; 
  anomaliedChampions: string[];
  anomaliesOverride: Record<string, string | number>;
  augmentTypes: string[]; 
  augments: Carousel[];
  augmentsTip: string;
  carousel: Carousel[]; 
  collectionId: string;
  collectionName: string;
  compSlug: string;
  created: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  displayIndex: number;
  earlyComp: EarlyComp[]; 
  finalComp: FinalComp[]; 
  id: string;
  isPublic: boolean;
  mainAugment: Record<string, string | number>;
  mainChampion: Record<string, string | number>;
  mainItem: Record<string, string | number>;
  metaTitle: string;
  rank: string;
  set: number;
  sticker: number;
  style: string;
  tier: 'S' | 'A' | 'B' | 'C' | 'X';
  tips: { stage: string; tip: string }[];
  title: string;
  updated: string; // ISO date string
}
export interface TierGroup {
  S: Guide[];
  A: Guide[];
  B: Guide[];
  C: Guide[];
  X: Guide[];
}
export interface TierAugmentsGroup {
  S: Augment[];
  A: Augment[];
  B: Augment[];
  C: Augment[];
}
export interface TierItemsGroup {
  S: Item[];
  A: Item[];
  B: Item[];
  C: Item[];
  X: Item[];
}