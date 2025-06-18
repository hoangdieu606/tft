export interface ChampionCardStyles {
  container?: string;
  padding?: string;
  nameText?: string;
  goldManaIcon?: string;
  traitIcon?: string;
  championIcon?: string;
  abilityIcon?: string;
  iconSize?: number;
  iconAbilitySize?: number;
}

export interface TraitCardStyles {
  container?: string;
  padding?: string;
  nameText?: string;
  traitIconSize?: number;
  champIconSize?: number;
}
export interface AugmentCardStyles {
  container?: string;
  iconSize?: number;
}
export interface ItemCardStyles {
  container?: string;
  IconSize?: number;
  compIconSize?: number;
}
/* Augment */
export const augmentCardListStyles: AugmentCardStyles = {
  container: "w-full md:w-90 text-sm bg-gray-900",
  iconSize: 64,
};
export const augmentCardTooltipStyles: AugmentCardStyles = {
  container: "w-2xs bg-zinc-950 text-sm border border-(--tier-color)",
  iconSize: 52,
};
/* Item */
export const itemCardListStyles: ItemCardStyles = {
  container: "w-full md:max-w-xs p-4 gap-4 bg-gray-900 text-sm",
  IconSize: 44,
  compIconSize: 24,
};
export const itemCardTooltipStyles: ItemCardStyles = {
  container: "w-2xs p-4 gap-4 bg-zinc-950 text-xs border border-(--tier-color)",
  IconSize: 36,
  compIconSize: 16,
};
/* Trait */
export const traitCardListStyles: TraitCardStyles = {
  container: "text-sm bg-stone-900 rounded-lg w-full sm:w-72 min-h-[440px]",
  padding: "p-4",
  nameText: "text-base",
  traitIconSize: 30,
  champIconSize: 44,
};

export const traitCardTooltipStyles: TraitCardStyles = {
  container: "text-xs md:text-sm bg-slate-900 rounded-lg w-[250px] min-h-[390px]",
  padding: "p-3",
  nameText: "text-sm",
  traitIconSize: 24,
  champIconSize: 30,
};

/* Champion */
export const championCardListStyles: ChampionCardStyles = {
  container: "text-sm bg-[#1e1e1e] w-full sm:w-[288px] min-h-110",
  padding: "p-4",
  nameText: "text-base",
  goldManaIcon: "w-[20px] h-[20px]",
  traitIcon: "w-[18px] h-[18px]",
  abilityIcon: "w-[40px] h-[40px]",
  championIcon: "w-[70px] h-[70px]",
  iconSize: 70,
  iconAbilitySize: 40,
};

export const championCardTooltipStyles: ChampionCardStyles = {
  container: "text-xs md:text-sm bg-[#333] w-[247px] min-h-90",
  padding: "p-3",
  nameText: "text-sm",
  goldManaIcon: "w-[18px] h-[18px]",
  traitIcon: "w-[16px] h-[16px]",
  championIcon: "w-[44px] h-[44px]",
  abilityIcon: "w-[30px] h-[30px]",
  iconSize: 44,
  iconAbilitySize: 30,
};
