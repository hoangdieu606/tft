import Image from "next/image";
import { Champion, Item, Augment, Trait, Guide } from "@/lib/types";
import TierItem from "@/components/comps/TierItem";
import CompPost from "./CompPost";
import clsx from "clsx";
import { DataPageKeys } from "@/lib/dataFilter";

// Component cho mỗi tier
interface TierSectionProps {
  tier: string;
  guides: Guide[];
  championsMap: Record<string, Champion>;
  itemsMap: Record<string, Item>;
  augmentsMap: Record<string, Augment>;
  traitsMap?: Record<string, Trait>;
  setNumber?: number;
  selectedGuide?: Guide;
  filterType: string;
  page: DataPageKeys;
}
export default function TierSection({
  tier,
  guides,
  championsMap,
  itemsMap,
  augmentsMap,
  traitsMap,
  setNumber,
  selectedGuide,
  filterType,
  page
}: TierSectionProps) {
  return (
    <div
      id={`tier-${tier}`}
      className={`tier-${tier} flex flex-col gap-2.5 mt-10 scroll-mt-15`}
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
            `flex-1 bg-[#0f1510] relative shadow-[15px_12px_20px_#061b1266] w-full min-h-[132px] rounded-3xl before:content-[''] before:absolute before:-top-[1.5px] before:-left-[1.5px] before:-right-[1.5px] before:bottom-[2px] before:-z-[5] before:pointer-events-none before:[border-radius:inherit] before:bg-[linear-gradient(to_bottom,var(--tier-bg),transparent)]`,
            tier === "X" && "mt-4 lg:mt-0"
          )}
        >
          {tier === "X" && (
            <div className="absolute left-2/4 -translate-x-1/2 -top-[15px] text-[rgb(0,_0,_0)] font-semibold bg-[image:var(--tier-image)] rounded-[12px] px-[15px] py-[3px]">
              Hero Tier
            </div>
          )}
          <div
            className={clsx(
              "p-4 gap-2.5 justify-items-center",
              selectedGuide && selectedGuide.tier === tier
                ? "flex flex-nowrap overflow-x-auto md:grid md:grid-cols-[repeat(auto-fill,minmax(90px,1fr))]"
                : "grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))]",
                tier === "X" && "pt-8"
            )}
          >
            {guides.map((guide, id) => (
              <TierItem
                key={id}
                guide={guide}
                championsMap={championsMap}
                itemsMap={itemsMap}
                augmentsMap={augmentsMap}
                filterType={filterType}
                page={page}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedGuide &&
        traitsMap &&
        setNumber &&
        selectedGuide.tier === tier && (
          <CompPost
            selectedGuide={selectedGuide}
            championsMap={championsMap}
            itemsMap={itemsMap}
            traitsMap={traitsMap}
            augmentsMap={augmentsMap}
            setNumber={setNumber}
            filterType={filterType}
          />
        )}
    </div>
  );
}
