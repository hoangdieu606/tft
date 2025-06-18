"use client";

import { useSearchParams } from "next/navigation";
import PageMenu from "@/components/PageMenu";
import ChampionList from "./ChampionList";
import { Champion, Trait } from "@/lib/types";
import {
  dataMapping,
  DataMappingKeys,
  DataMappingValue,
  DataPageKeys
} from "@/lib/dataFilter";

interface ChampionsDisplayProps {
  champions: Champion[];
  traitsMap: Record<string, Trait>;
  page: DataPageKeys;
}

export default function ChampionsDisplay({
  champions,
  traitsMap,
  page,
}: ChampionsDisplayProps) {
  const searchParams = useSearchParams();
  const filterType = searchParams.get("type") ?? "Show All";

  const typeFilter: DataMappingValue | string =
    filterType in dataMapping
      ? dataMapping[filterType as DataMappingKeys]
      : filterType;

  const filteredChampions =
    filterType === "Show All"
      ? champions
      : champions.filter((c) => c.cost === typeFilter);

  return (
    <>
      <PageMenu page={page} filterType={filterType} />
      <ChampionList champions={filteredChampions} traitsMap={traitsMap} />
    </>
  );
}
