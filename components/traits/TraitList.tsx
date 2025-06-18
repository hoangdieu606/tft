import { Champion, Trait } from "@/lib/types";
import { traitCardListStyles } from "@/lib/allCardStyles";
import TraitCard from "./TraitCard";

interface TraitListProps {
  traits: Trait[];
  championsMap: Record<string, Champion>;
  traitsMap: Record<string, Trait>;
}

export default function TraitList({ traits, championsMap, traitsMap }: TraitListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(288px,1fr))] gap-5 mt-5">
      {traits.map((trait) => (
        <TraitCard
          key={trait.id}
          trait={trait}
          championsMap={championsMap}
          traitsMap={traitsMap}
          styles={traitCardListStyles}
        />
      ))}
    </div>
  );
}
