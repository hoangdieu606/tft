import { Augment } from "@/lib/types";
import Image from "next/image";
import IconTooltip from "../IconTooltip";
import AugmentCard from "../augments/AugmentCard";

interface TierAugmentItemProps {
  augment: Augment;
}
export default function TierAugmentItem({ augment }: TierAugmentItemProps) {
  const { name, icon, tier2 } = augment;

  return (
    <div className={`flex flex-col w-15 text-center tier-${tier2}`}>
      <IconTooltip tooltipContent={<AugmentCard augment={augment} />}>
        <Image
          src={icon}
          width={60}
          height={60}
          alt={name}
          className="rounded-sm"
        />
      </IconTooltip>

      <p className="text-[10px]">{name}</p>
    </div>
  );
}
