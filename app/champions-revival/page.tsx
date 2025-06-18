import { DataFetcher } from "@/lib/data";
import Title from "@/components/Title";
import type { Metadata } from "next";
import { metadata } from "../layout";
import { getMetadataContent } from "@/lib/metadataContent";
import { DataPageKeys } from "@/lib/dataFilter";
import ChampionsDisplay from "@/components/champions/ChampionsDisplay";
import { Suspense } from "react";
import keyBy from "lodash/keyBy";

export async function generateMetadata(): Promise<Metadata> {
  const data = await DataFetcher("champions-revival");

  if (!data || !("set" in data) || !("version" in data)) {
    return metadata;
  }

  const set = data.set;
  const patch = data.version;
  const { title, desc } = getMetadataContent(
    "champions" as DataPageKeys,
    set,
    patch
  );

  return {
    title,
    description: desc,
  };
}

export default async function ChampionsRevivalPage() {
  const dataChampions = await DataFetcher("champions-revival");
  const dataTraits = await DataFetcher("traits-revival");

  if (
    !dataChampions ||
    !dataTraits ||
    !("data" in dataChampions) ||
    !("data" in dataTraits)
  ) {
    return (
      <p>Không thể tải dữ liệu tướng hoặc tộc hệ. Vui lòng thử lại sau!</p>
    );
  }

  const champions = dataChampions.data || [];
  const traits = dataTraits.data || [];
  const traitsMap = keyBy(traits, "apiName");

  return (
    <>
      <Title
        page="champions"
        set={dataChampions.set}
        patch={dataChampions.version}
      />
      <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
        <ChampionsDisplay page="champions-revival" champions={champions} traitsMap={traitsMap} />
      </Suspense>
    </>
  );
}
