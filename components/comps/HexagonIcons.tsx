import clsx from "clsx";
import { StarIcon } from "@heroicons/react/16/solid";
import { Champion, Item, Trait } from "@/lib/types";
import IconTooltip from "../IconTooltip";
import { ChampionCard } from "../champions/ChampionCard";
import ItemCard from "../items/ItemCard";
import Hexagon from "./Hexagon";

interface HexagonIconsProps {
  championSize: number;
  itemSize: number;
  apiName: string;
  championsMap: Record<string, Champion>;
  items: string[];
  itemsMap: Record<string, Item>;
  traitsMap: Record<string, Trait>;
  stars?: number;
  vMin?: string;
}

function HexagonIcons({
  championSize,
  itemSize,
  apiName,
  championsMap,
  items,
  itemsMap,
  traitsMap,
  stars,
  vMin,
}: HexagonIconsProps) {
  const champ = championsMap[apiName] ?? {};
  const itemLength = items.length;
  return (
    <div className={`flex relative post-cost-${champ.cost}`}>
      {(stars === 3 || stars === 4) && (
        <div
          className={clsx(
            "absolute flex justify-center items-center -top-[6px] left-2/4 -translate-x-1/2 -skew-x-[8deg] text-xs px-1 z-10",
            stars === 3 && "bg-[#ffc107] [box-shadow:0_0_10px_2px_#ffc10766]",
            stars === 4 && "bg-[#00ff90] [box-shadow:0_0_10px_2px_#28cd5766]"
          )}
        >
          <StarIcon
            className={clsx("text-black", {
              "h-[2vmin] w-[2vmin]": vMin,
              "h-4 w-4": !vMin,
            })}
          />
          <StarIcon
            className={clsx("text-black", {
              "h-[2vmin] w-[2vmin]": vMin,
              "h-4 w-4": !vMin,
            })}
          />
          <StarIcon
            className={clsx("text-black", {
              "h-[2vmin] w-[2vmin]": vMin,
              "h-4 w-4": !vMin,
            })}
          />
        </div>
      )}
      <IconTooltip
        tooltipContent={<ChampionCard champion={champ} traitsMap={traitsMap} />}
      >
        <Hexagon
          iconSize={championSize}
          imageSrc={champ.icon}
          name={champ.name}
          vMin={vMin}
        />
      </IconTooltip>

      {itemLength > 0 && (
        <div className="absolute -bottom-2 left-2/4 -translate-x-1/2 flex gap-1 z-10 w-full justify-center">
          {items.map((item, index) => (
            <IconTooltip
              key={index}
              tooltipContent={
                <ItemCard item={itemsMap[item]} itemsMap={itemsMap} />
              }
            >
              <Hexagon
                iconSize={itemSize}
                imageSrc={itemsMap[item]?.icon}
                name={itemsMap[item]?.name}
                className={clsx(
                  itemLength === 3 && index === 0 && "absolute left-1 bottom-2",
                  itemLength === 3 && index === 2 && "absolute right-1 bottom-2"
                )}
                vMin={vMin && `calc(${vMin} * 0.3)`}
              />
            </IconTooltip>
          ))}
        </div>
      )}
      <div
        className={clsx(
          "absolute left-2/4 -translate-x-1/2 whitespace-nowrap z-10 [text-shadow:0px_0px_10px_black,0px_0px_10px_black,0px_0px_10px_black] pointer-events-none",
          {
            "-bottom-4 md:-bottom-6 text-[8px] md:text-xs": vMin,
            "-bottom-6 text-xs": !vMin,
          }
        )}
      >
        {champ.name}
      </div>
    </div>
  );
}

export default HexagonIcons;
