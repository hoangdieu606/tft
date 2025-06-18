import { notFound } from "next/navigation";
import { DataFetcher } from "@/lib/data";
import {
  Guide,
  Champion,
  Trait,
  Item,
  Augment,
  GenericDataResponse,
  GuidesDataResponse,
} from "@/lib/types";

import keyBy from "lodash/keyBy";
import TierListDisplay from "@/components/comps/TierListDisplay";
import Title from "@/components/Title";
import { Suspense } from "react";

export async function generateMetadata({ params }: TierDetailPageProps) {
  const { compSlug } = await params;
  const guidesData = (await DataFetcher(
    "guides"
  )) as GuidesDataResponse<Guide> | null;
  const guide = guidesData?.guides.find((g) => g.compSlug === compSlug);

  return {
    title: guide?.title || `Tier List - ${compSlug}`,
    description: guide?.augmentsTip,
  };
}

export async function generateStaticParams() {
  const guidesData = (await DataFetcher(
    "guides"
  )) as GuidesDataResponse<Guide> | null;
  return (
    guidesData?.guides.map((guide) => ({
      compSlug: encodeURIComponent(guide.compSlug),
    })) || []
  );
}

interface TierDetailPageProps {
  params: Promise<{ compSlug: string }>;
}

export default async function TierDetailPage({ params }: TierDetailPageProps) {
  const { compSlug } = await params;

  const [guidesData, dataChampions, dataTraits, dataItems, dataAugments] =
    await Promise.all([
      DataFetcher("guides") as Promise<GuidesDataResponse<Guide> | null>,
      DataFetcher("champions") as Promise<GenericDataResponse<Champion> | null>,
      DataFetcher("traits") as Promise<GenericDataResponse<Trait> | null>,
      DataFetcher("items") as Promise<GenericDataResponse<Item> | null>,
      DataFetcher("augments") as Promise<GenericDataResponse<Augment> | null>,
    ]);

  if (
    !guidesData ||
    !guidesData.guides ||
    !dataChampions ||
    !dataTraits ||
    !dataItems ||
    !dataAugments
  ) {
    throw new Error("Không thể tải dữ liệu");
  }

  const guide = guidesData.guides.find((g) => g.compSlug === compSlug);
  if (!guide) {
    return notFound();
  }

  const championsMap = keyBy(dataChampions.data, "apiName");
  const setNumber =
    typeof dataChampions.set === "number"
      ? dataChampions.set
      : parseFloat(dataChampions.set as string) || 0;
  const patch = dataChampions.version;

  const traitsMap = keyBy(dataTraits.data, "apiName");
  const itemsMap = keyBy(dataItems.data, "apiName");
  const augmentsMap = keyBy(dataAugments.data, "apiName");

  const guides: Guide[] = guidesData.guides || [];

  return (
    <>
      <Title page="tierlist" set={setNumber} patch={patch} />
      <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
        <TierListDisplay
          guides={guides}
          championsMap={championsMap}
          itemsMap={itemsMap}
          augmentsMap={augmentsMap}
          traitsMap={traitsMap}
          setNumber={setNumber}
          selectedGuide={guide}
          page="tierlist"
        />
      </Suspense>
    </>
  );
}
