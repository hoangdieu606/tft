import clsx from "clsx";
import { Champion, Item, Trait } from "@/lib/types";
import HexagonIcons from "./HexagonIcons";

interface ChessBoardProps {
  finalComp: Array<{ boardIndex: number; apiName: string; items: string[]; stars?: number }>;
  championsMap: Record<string, Champion>;
  itemsMap: Record<string, Item>;
  traitsMap: Record<string, Trait>;
}

export default function ChessBoard({
  finalComp,
  championsMap,
  itemsMap,
  traitsMap,
}: ChessBoardProps) {
  return (
    <div className="chess-board grid grid-cols-7 grid-rows-4 gap-[0.5vmin] justify-center items-center max-w-3xl mx-auto">
      {Array.from({ length: 28 }).map((_, index) => {
        const comp = finalComp.find((obj) => obj.boardIndex === index);
        const row = Math.floor(index / 7);
        const staggerClass = row % 2 === 0 ? "-translate-x-[3vmin]" : "translate-x-[3vmin]";

        return (
          <div
            key={index}
            className={clsx(
              "flex justify-center items-center transform mb-2 md:mb-4",
              staggerClass,
              comp
                ? "bg-transparent"
                : "bg-[#2a2a2a] w-[12vmin] h-[12vmin] [clip-path:polygon(50%_0%,_95%_25%,_95%_75%,_50%_100%,_5%_75%,_5%_25%)]"
            )}
          >
            {comp && (
              <HexagonIcons
                key={comp.boardIndex}
                championSize={100}
                itemSize={30}
                apiName={comp.apiName}
                championsMap={championsMap}
                items={comp.items}
                itemsMap={itemsMap}
                traitsMap={traitsMap}
                stars={comp.stars}
                vMin="12vmin"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}