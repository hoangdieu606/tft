"use client";

import { useSearchParams } from "next/navigation";
import PageMenu from "@/components/PageMenu";
import {
  dataMapping,
  DataMappingKeys,
  DataMappingValue,
  DataPageKeys,
} from "@/lib/dataFilter";

import { Item, TierItemsGroup } from "@/lib/types";
import TierItemsSection from "./TierItemsSection";

interface TierItemsDisplayProps {
  items: Item[];
  itemsMap: Record<string, Item>;
  page: DataPageKeys;
}
export default function TierItemsDisplay({
  items,
  itemsMap,
  page,
}: TierItemsDisplayProps) {
  const searchParams = useSearchParams();
  const filterType = searchParams.get("type") ?? "Show All";

  const typeFilter: DataMappingValue | string =
    filterType in dataMapping
      ? dataMapping[filterType as DataMappingKeys]
      : filterType;

  const filteredGuides =
    filterType === "Show All"
      ? items
      : items.filter((item) => item.type === typeFilter);

  const tierGroups = filteredGuides.reduce(
    (acc: TierItemsGroup, item: Item) => {
      if (item.tier) {
        acc[item.tier as keyof TierItemsGroup].push(item);
      } else {
        acc.X.push(item);
      }
      return acc;
    },
    { S: [], A: [], B: [], C: [], X: [] }
  );

  return (
    <>
      <PageMenu page={page} filterType={filterType} />
      <div
        className="tier-comp-container flex flex-col gap-5"
        role="navigation"
      >
        {(["S", "A", "B", "C", "X"] as const).map(
          (tier) =>
            tierGroups[tier].length > 0 && (
              <TierItemsSection
                key={tier}
                tier={tier}
                items={tierGroups[tier]}
                itemsMap={itemsMap}
              />
            )
        )}
      </div>
    </>
  );
}
