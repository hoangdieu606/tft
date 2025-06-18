import { DataFetcher } from "@/lib/data";
import Title from "@/components/Title";
import type { Metadata } from "next";
import { metadata } from "../layout";
import { getMetadataContent } from "@/lib/metadataContent";
import { DataPageKeys } from "@/lib/dataFilter";
import ItemsDisplay from "@/components/items/ItemsDisplay";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const data = await DataFetcher("items-revival");

  if (!data || !("set" in data) || !("version" in data)) {
    return metadata;
  }

  const set = data.set;
  const patch = data.version;
  const { title, desc } = getMetadataContent(
    "items" as DataPageKeys,
    set,
    patch
  );

  return {
    title,
    description: desc,
  };
}

export default async function ItemsRevivalPage() {
  const mainData = await DataFetcher("items-revival");

  if (!mainData || !("data" in mainData)) {
    return (
      <p>Không thể tải dữ liệu tướng hoặc tộc hệ. Vui lòng thử lại sau!</p>
    );
  }

  const items = mainData.data || [];

  return (
    <>
      <Title page="items" set={mainData.set} patch={mainData.version} />
      <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
        <ItemsDisplay items={items} page="items-revival" />
      </Suspense>
    </>
  );
}
