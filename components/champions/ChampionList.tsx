import { Champion, Trait } from "@/lib/types";
import { ChampionCard } from "./ChampionCard";
import { championCardListStyles } from "@/lib/allCardStyles";

interface ChampionListProps {
  champions: Champion[];
  traitsMap: Record<string, Trait>;
}

export default function ChampionList({ champions, traitsMap }: ChampionListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4 mt-4">
      {champions.map((champion) => (
        <ChampionCard
          key={champion.id}
          champion={champion}
          traitsMap={traitsMap}
          styles={championCardListStyles}
        />
      ))}
    </div>
  );
}