import Image from "next/image";
import { Augment } from "@/lib/types";
import clsx from "clsx";
import TierAugmentItem from "./TierAugmentItem";

// Component cho mỗi tier
interface TierAugmentsSectionProps {
  tier: string;
  augments: Augment[];
  
}
export default function TierAugmentsSection({
  tier,
  augments,
}: TierAugmentsSectionProps) {
  return (
    <div
      id={`tier-${tier}`}
      className={`tier-${tier} flex flex-col gap-2.5 mt-10`}
    >
      <div className="flex flex-col items-center gap-3 lg:flex-row">
        <div className="w-full h-14 flex relative bg-[image:var(--tier-image)] lg:w-[130px] lg:h-[130px]">
          <Image
            src={`/assets/images/${tier}-Tier.webp`}
            alt={`Tier ${tier} icon for ranking`}
            width={130}
            height={130}
            priority
            className="hidden lg:flex w-[130px] h-[130px] object-cover"
          />
          <Image
            src={`/assets/images/${tier}-Tier-Wide.webp`}
            alt={`Wide Tier ${tier} icon for mobile`}
            width={160}
            height={46}
            className="flex lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src={`/assets/images/${tier}-Tier-Texture.webp`}
            alt={`Tier ${tier} texture background`}
            width={444}
            height={56}
            className="lg:hidden object-cover w-full"
          />
        </div>
        <div
          className={clsx(
            `flex-[1] bg-[#1d1d1d] rounded-3xl p-4 relative [box-shadow:15px_12px_20px_#061b1266] w-full min-h-[132px] grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-items-center gap-4 before:content-[''] before:absolute before:-top-[1.5px] before:-left-[1.5px] before:-right-[1.5px] before:bottom-[2px] before:-z-[5] before:pointer-events-none before:[border-radius:inherit] before:bg-[linear-gradient(to_bottom,var(--tier-bg),transparent)]`,
            tier === "X" && "pt-8 mt-4 lg:mt-0"
          )}
        >
          {tier === "X" && (
            <div className="absolute left-2/4 -translate-x-1/2 -top-[15px] text-[rgb(0,_0,_0)] font-semibold bg-[image:var(--tier-image)] rounded-[12px] px-[15px] py-[3px]">
              Hero Tier
            </div>
          )}
          {augments.map((augment, id) => (
            <TierAugmentItem
              key={id}
              augment={augment}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}
