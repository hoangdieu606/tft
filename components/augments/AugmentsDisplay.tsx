"use client";

import { useSearchParams } from "next/navigation";
import PageMenu from "@/components/PageMenu";
import AugsList from "@/components/augments/AugsList";
import { Augment } from "@/lib/types";
import {
  dataMapping,
  DataMappingKeys,
  DataMappingValue,
  DataPageKeys,
} from "@/lib/dataFilter";

interface AugmentsDisplayProps {
  augments: Augment[];
  page: DataPageKeys;
}

export default function AugmentsDisplay({
  augments,
  page,
}: AugmentsDisplayProps) {
  const searchParams = useSearchParams();
  const filterType = searchParams.get("type") ?? "Show All";

  const typeFilter: DataMappingValue | string =
    filterType in dataMapping
      ? dataMapping[filterType as DataMappingKeys]
      : filterType;

  const filteredAugments =
    filterType === "Show All"
      ? augments
      : augments.filter((augment) => augment.tier === typeFilter);

  return (
    <>
      <PageMenu page={page} filterType={filterType} />
      <AugsList augments={filteredAugments} />
    </>
  );
}
