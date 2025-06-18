import { DataFetcher } from "@/lib/data";
import { Item } from "@/lib/types";
import keyBy from "lodash/keyBy";
import TierItemsDisplay from "@/components/tier-items/TierItemsDisplay";
import Title from "@/components/Title";
import type { Metadata } from "next";
import { metadata } from "../layout";
import { getMetadataContent } from "@/lib/metadataContent";
import { DataPageKeys } from "@/lib/dataFilter";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const data = await DataFetcher("items");

  if (!data || !("set" in data) || !("version" in data)) {
    return metadata;
  }

  const set = data.set;
  const patch = data.version;
  const { title, desc } = getMetadataContent(
    "tierlist-items" as DataPageKeys,
    set,
    patch
  );

  return {
    title,
    description: desc,
  };
}

export default async function TierItems() {
  const dataItems = await DataFetcher("items");
  if (!dataItems) {
    throw new Error("Không thể tải dữ liệu tier list");
  }

  const items: Item[] = dataItems.data || [];

  const itemsMap = keyBy(items, "apiName");

  const set = dataItems.set;
  const patch = dataItems.version;

  return (
    <>
      <Title page="tierlist-items" set={set} patch={patch} />
      <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
        <TierItemsDisplay
          items={items}
          itemsMap={itemsMap}
          page="tierlist-items"
        />
      </Suspense>
    </>
  );
}
