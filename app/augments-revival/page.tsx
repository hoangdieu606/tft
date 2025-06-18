import { DataFetcher } from "@/lib/data";
import Title from "@/components/Title";
import type { Metadata } from "next";
import { metadata } from "../layout";
import { getMetadataContent } from "@/lib/metadataContent";
import { DataPageKeys } from "@/lib/dataFilter";
import AugmentsDisplay from "@/components/augments/AugmentsDisplay";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const data = await DataFetcher("augments-revival");

  if (!data || !("set" in data) || !("version" in data)) {
    return metadata;
  }

  const set = data.set;
  const patch = data.version;
  const { title, desc } = getMetadataContent(
    "augments" as DataPageKeys,
    set,
    patch
  );

  return {
    title,
    description: desc,
  };
}

export default async function AugsRevivalPage() {
  const mainData = await DataFetcher("augments-revival");

  if (!mainData || !("data" in mainData)) {
    return (
      <p>Không thể tải dữ liệu tướng hoặc tộc hệ. Vui lòng thử lại sau!</p>
    );
  }

  const augments = mainData.data || [];
  return (
    <>
      <Title page="augments" set={mainData.set} patch={mainData.version} />
      <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
        <AugmentsDisplay augments={augments} page="augments-revival" />
      </Suspense>
    </>
  );
}
