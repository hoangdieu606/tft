import Image from "next/image";
import { Champion, Trait } from "@/lib/types";
import {
  ChampionCardStyles,
  championCardTooltipStyles,
} from "@/lib/allCardStyles";
import parse from "html-react-parser";

interface ChampionCardProps {
  champion: Champion;
  traitsMap: Record<string, Trait>;
  styles?: ChampionCardStyles;
}

export function ChampionCard({
  champion,
  traitsMap,
  styles = championCardTooltipStyles,
}: ChampionCardProps) {
  const {
    name,
    icon,
    abilityIcon,
    cost,
    traits,
    ability,
    abilityName,
    apiName,
    stats,
  } = champion ?? {};
  if (!name) {
    return "champion undefined";
  }
  const mana = `${stats.initialMana} / ${stats.mana}`;
  const champTraits = traits.map((apiName) => traitsMap[apiName]);

  return (
    <div
      className={`champ-cost-${cost} flex flex-col text-white text-sm rounded-lg overflow-hidden ${styles.container}`}
      aria-labelledby={`champ-${apiName}`}
    >
      <div
        className={`champ-bg flex justify-between items-center ${styles.padding}`}
      >
        <h3 className={styles.nameText}>{name}</h3>
        <span
          className={`flex items-center font-semibold gap-1 ${styles.nameText}`}
        >
          {cost}
          <Image
            src="/assets/images/gold.png"
            alt="gold icon"
            width={20}
            height={20}
            className={styles.goldManaIcon}
          />
        </span>
      </div>
      <div className={styles.padding}>
        <div className="flex justify-between mb-4">
          <Image
            src={icon}
            alt={name}
            width={styles.iconSize}
            height={styles.iconSize}
            className={`champ-border rounded-lg ${styles.championIcon}`}
          />
          <div className="flex flex-col gap-1">
            {champTraits.map((trait, index) => (
              <span key={index} className={`flex items-center gap-1`}>
                {trait.icon && (
                  <Image
                    src={trait.icon}
                    alt={trait.name}
                    width={18}
                    height={18}
                    className={styles.traitIcon}
                  />
                )}
                {trait.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div>
              <Image
                src={abilityIcon || icon}
                alt={abilityName}
                width={styles.iconAbilitySize}
                height={styles.iconAbilitySize}
                className={`${styles.abilityIcon} rounded-lg`}
              />
            </div>
            <div>
              <h4>{abilityName}</h4>
              <p className="flex items-center gap-1 mt-1">
                <Image
                  src="/assets/images/Mana.png"
                  alt="mana"
                  width={20}
                  height={20}
                  className={styles.goldManaIcon}
                />
                {mana}
              </p>
            </div>
          </div>
          <div>{parse(ability)}</div>
        </div>
      </div>
    </div>
  );
}
