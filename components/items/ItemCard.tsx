import Image from "next/image";
import clsx from "clsx";
import { Item } from "@/lib/types";
import StatsDisplay from "./StatsDisplay";
import { ItemCardStyles, itemCardTooltipStyles } from "@/lib/allCardStyles";
import parse from "html-react-parser";

interface ItemCardProps {
  item: Item;
  itemsMap: Record<string, Item>;
  styles?: ItemCardStyles;
}

export default function ItemCard({
  item,
  itemsMap,
  styles = itemCardTooltipStyles,
}: ItemCardProps) {
  const { name, icon, type, description, tier, composition, stats } =
    item ?? {};
  if (!name || !icon) {
    return "item undefined";
  }
  const itemComps = composition?.length
    ? composition.map((compoApi) => itemsMap[compoApi])
    : [];

  return (
    <div className={`tier-${tier} flex rounded-lg ${styles.container}`}>
      <div className="flex flex-col items-center gap-2 justify-around">
        <Image
          src={icon}
          alt={name}
          width={styles.IconSize}
          height={styles.IconSize}
          className={clsx(
            "rounded-lg max-w-none",
            type === "craftables" && "border border-[var(--tier-color)]"
          )}
        />

        <span className="tier-color">{tier}</span>
        {itemComps.length > 0 && (
          <span className="flex flex-col items-center p-1 gap-1 bg-white/10">
            <span>
              <Image
                src={itemComps[0].icon}
                alt={itemComps[0].name}
                width={styles.compIconSize}
                height={styles.compIconSize}
                className="max-w-none"
              />
            </span>
            <span>+</span>
            <span>
              <Image
                src={itemComps[1].icon}
                alt={itemComps[1].name}
                width={styles.compIconSize}
                height={styles.compIconSize}
              />
            </span>
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div>
            <h3 className="text-sm">{name}</h3>
          </div>
          <StatsDisplay stats={stats} />
        </div>
        <div>{parse(description)}</div>
      </div>
    </div>
  );
}
