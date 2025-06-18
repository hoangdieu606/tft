import { DataFetcher } from "@/lib/data";
import Title from "@/components/Title";
import type { Metadata } from "next";
import { metadata } from "../layout";
import { getMetadataContent } from "@/lib/metadataContent";
import { DataPageKeys } from "@/lib/dataFilter";
import TraitsDisplay from "@/components/traits/TraitsDisplay";
import { Suspense } from "react";
import keyBy from "lodash/keyBy";

export async function generateMetadata(): Promise<Metadata> {
  const data = await DataFetcher("traits");

  if (!data || !("set" in data) || !("version" in data)) {
    return metadata;
  }

  const set = data.set;
  const patch = data.version;
  const { title, desc } = getMetadataContent(
    "traits" as DataPageKeys,
    set,
    patch
  );

  return {
    title,
    description: desc,
  };
}

export default async function TraitsPage() {
  const mainData = await DataFetcher("traits");
  const dataChampions = await DataFetcher("champions");

  if (
    !mainData ||
    !dataChampions ||
    !("data" in mainData) ||
    !("data" in dataChampions)
  ) {
    return (
      <p>Không thể tải dữ liệu tướng hoặc tộc hệ. Vui lòng thử lại sau!</p>
    );
  }

  const traits = mainData.data || [];
  const traitsMap = keyBy(traits, "apiName");
  const championsMap = keyBy(dataChampions.data, "apiName");

  return (
    <>
      <Title page="traits" set={mainData.set} patch={mainData.version} />
      <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
        <TraitsDisplay
          traits={traits}
          championsMap={championsMap}
          traitsMap={traitsMap}
          page="traits"
        />
      </Suspense>
    </>
  );
}
