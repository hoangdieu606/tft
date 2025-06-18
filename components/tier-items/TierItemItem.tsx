import { Item } from "@/lib/types";
import Image from "next/image";
import IconTooltip from "../IconTooltip";
import ItemCard from "../items/ItemCard";
import clsx from "clsx";

interface TierItemItemProps {
  item: Item;
  itemsMap: Record<string, Item>;
}
export default function TierItemItem({ item, itemsMap }: TierItemItemProps) {
  const { name, icon, tier, type } = item;

  return (
    <div className={`flex flex-col w-15 text-center tier-${tier}`}>
      <IconTooltip
        tooltipContent={<ItemCard item={item} itemsMap={itemsMap} />}
      >
        <Image
          src={icon}
          width={60}
          height={60}
          alt={name}
          className={clsx("rounded-sm", { "border border-(--tier-color)": type === "craftables" })}
        />
      </IconTooltip>

      <p className="text-[10px]">{name}</p>
    </div>
  );
}
