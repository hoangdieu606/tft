"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import PageMenu from "@/components/PageMenu";
import {
  dataMapping,
  DataMappingKeys,
  DataMappingValue,
  DataPageKeys,
} from "@/lib/dataFilter";

import { Guide, Champion, Trait, Augment, Item, TierGroup } from "@/lib/types";
import TierSection from "./TierSection";

interface TierListDisplayProps {
  guides: Guide[];
  championsMap: Record<string, Champion>;
  itemsMap: Record<string, Item>;
  augmentsMap: Record<string, Augment>;
  traitsMap?: Record<string, Trait>;
  setNumber?: number;
  selectedGuide?: Guide;
  page: DataPageKeys;
}
export default function TierListDisplay({
  guides,
  championsMap,
  augmentsMap,
  itemsMap,
  traitsMap,
  setNumber,
  selectedGuide,
  page,
}: TierListDisplayProps) {
  const searchParams = useSearchParams();
  const filterType = searchParams.get("type") ?? "Show All";

  const typeFilter: DataMappingValue | string =
    filterType in dataMapping
      ? dataMapping[filterType as DataMappingKeys]
      : filterType;

  const filteredGuides =
    filterType === "Show All"
      ? guides
      : guides.filter((guide) => guide.style === typeFilter);

  const tierGroups = filteredGuides.reduce(
    (acc: TierGroup, guide: Guide) => {
      acc[guide.tier].push(guide);
      return acc;
    },
    { S: [], A: [], B: [], C: [], X: [] }
  );

  // Tự động cuộn tới tier của selectedGuide khi trang tải
  useEffect(() => {
    if (selectedGuide?.tier) {
      const tierElement = document.getElementById(`tier-${selectedGuide.tier}`);
      if (tierElement) {
        tierElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [selectedGuide]);

  return (
    <>
      <PageMenu page={page} filterType={filterType} />
      <div className="flex flex-col gap-5" role="navigation">
        {(["S", "A", "B", "C", "X"] as const).map(
          (tier) =>
            tierGroups[tier].length > 0 && (
              <TierSection
                key={tier}
                tier={tier}
                guides={tierGroups[tier]}
                championsMap={championsMap}
                itemsMap={itemsMap}
                augmentsMap={augmentsMap}
                traitsMap={traitsMap}
                setNumber={setNumber}
                selectedGuide={selectedGuide}
                filterType={filterType}
                page={page}
              />
            )
        )}
      </div>
    </>
  );
}
