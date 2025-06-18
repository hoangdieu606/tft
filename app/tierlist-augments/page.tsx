import { DataFetcher } from "@/lib/data";
import { Augment } from "@/lib/types";
import TierAugmentsDisplay from "@/components/tier-augments/TierAugmentsDisplay";
import Title from "@/components/Title";
import type { Metadata } from "next";
import { metadata } from "../layout";
import { getMetadataContent } from "@/lib/metadataContent";
import { DataPageKeys } from "@/lib/dataFilter";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const data = await DataFetcher("augments");

  if (!data || !("set" in data) || !("version" in data)) {
    return metadata;
  }

  const set = data.set;
  const patch = data.version;
  const { title, desc } = getMetadataContent(
    "tierlist-augments" as DataPageKeys,
    set,
    patch
  );

  return {
    title,
    description: desc,
  };
}

export default async function TierAugments() {
  const dataAugments = await DataFetcher("augments");
  if (!dataAugments) {
    throw new Error("Không thể tải dữ liệu tier list");
  }

  const augments: Augment[] = dataAugments.data || [];

  const set = dataAugments.set;
  const patch = dataAugments.version;

  return (
    <>
      <Title page="tierlist-augments" set={set} patch={patch} />
      <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
        <TierAugmentsDisplay augments={augments} page="tierlist-augments" />
      </Suspense>
    </>
  );
}
