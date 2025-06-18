import { Augment } from "@/lib/types";
import AugmentCard from "./AugmentCard";
import { augmentCardListStyles } from "@/lib/allCardStyles";

interface AugsListProps {
  augments: Augment[]; 
}

export default function AugsList({ augments }: AugsListProps) {
  // Bỏ logic lọc
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-5 mt-5">
      {augments.map((augment) => (
        <AugmentCard key={augment.id} augment={augment} styles={augmentCardListStyles}/>
      ))}
    </div>
  );
}
