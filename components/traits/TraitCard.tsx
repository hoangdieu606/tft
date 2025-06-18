import Image from "next/image";
import clsx from "clsx";
import { Champion, Trait } from "@/lib/types";
import IconTooltip from "../IconTooltip";
import { ChampionCard } from "../champions/ChampionCard";
import {
  championCardTooltipStyles,
  TraitCardStyles,
  traitCardTooltipStyles,
} from "@/lib/allCardStyles";
import parse from "html-react-parser";

interface TraitCardProps {
  trait: Trait;
  championsMap: Record<string, Champion>;
  traitsMap?: Record<string, Trait>;
  styles?: TraitCardStyles;
}

export default function TraitCard({
  trait,
  championsMap,
  traitsMap,
  styles = traitCardTooltipStyles,
}: TraitCardProps) {
  const { icon, name, description, effects, champions, type } = trait ?? {};
  if (!name) {
    return "trait undefined";
  }
  return (
    <div className={`trait-${type} overflow-hidden ${styles.container}`}>
      <div
        className={clsx(
          "flex justify-start items-center gap-2 text-gray-900 p-2",
          type === "origin" ? "bg-yellow-300" : "bg-pink-400"
        )}
      >
        <Image
          src={icon}
          alt={name}
          width={styles.traitIconSize}
          height={styles.traitIconSize}
          className="filter brightness-[0.1] invert-0"
        />
        <h3 className={styles.nameText}>{name}</h3>
      </div>
      <div className={styles.padding}>
        <div className="min-h-[60px]">
          <div className="flex flex-wrap gap-2">
            {champions.length > 0
              ? champions.map(
                  (champApi) =>
                    championsMap[champApi] &&
                    (traitsMap ? (
                      <IconTooltip
                        key={champApi}
                        tooltipContent={
                          <ChampionCard
                            champion={championsMap[champApi]}
                            traitsMap={traitsMap}
                            styles={championCardTooltipStyles}
                          />
                        }
                        className={`champ-cost-${championsMap[champApi].cost}`}
                      >
                        <Image
                          src={championsMap[champApi].icon}
                          alt={championsMap[champApi].name}
                          width={styles.champIconSize}
                          height={styles.champIconSize}
                          className="champ-border rounded-lg"
                        />
                      </IconTooltip>
                    ) : (
                      <div
                        key={championsMap[champApi].id}
                        className={`champ-cost-${championsMap[champApi].cost}`}
                      >
                        <Image
                          src={championsMap[champApi].icon}
                          alt={championsMap[champApi].name}
                          width={styles.champIconSize}
                          height={styles.champIconSize}
                          className="champ-border rounded-lg"
                        />
                      </div>
                    ))
                )
              : null}
          </div>
        </div>
        <div>
          <p className="my-5">{parse(description)}</p>
          <ul className="flex flex-col">
            {Object.entries(effects).length > 0
              ? Object.entries(effects).map(([key, value]) => (
                  <li key={key}>
                    {key}: {parse(value)}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}
