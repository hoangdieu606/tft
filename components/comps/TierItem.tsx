"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Guide, Champion, Item, Augment } from "@/lib/types";
import Hexagon from "@/components/comps/Hexagon";
import clsx from "clsx";
import { DataPageKeys } from "@/lib/dataFilter";

interface TierItemProps {
  guide: Guide;
  championsMap: Record<string, Champion>;
  itemsMap: Record<string, Item>;
  augmentsMap: Record<string, Augment>;
  filterType: string;
  page: DataPageKeys;
}
export default function TierItem({
  guide,
  championsMap,
  itemsMap,
  augmentsMap,
  filterType,
  page,
}: TierItemProps) {
  const { mainChampion, mainItem, mainAugment, tier, title, compSlug } = guide;
  const router = useRouter();
  const pathname = usePathname();

  const iconChamp = championsMap[mainChampion?.apiName]?.icon;
  const costChamp = championsMap[mainChampion?.apiName]?.cost;
  const iconItem = itemsMap[mainItem?.apiName]?.icon;
  const nameItem = itemsMap[mainItem?.apiName]?.name;
  const iconAugment = augmentsMap[mainAugment?.apiName]?.icon;
  const tierAugment = augmentsMap[mainAugment?.apiName]?.tier2;
  const nameAugment = augmentsMap[mainAugment?.apiName]?.name;

  const isDetailPage = pathname === `/${page}/${compSlug}`;
  // Tạo URL với query parameter type
  const createHref = () => {
    const baseUrl = `/${page}/${compSlug}`;
    if (filterType && filterType !== "Show All") {
      return `${baseUrl}?type=${encodeURIComponent(filterType)}`;
    }
    return baseUrl;
  };
  const handleClick = (e: React.MouseEvent) => {
    if (isDetailPage) {
      e.preventDefault();
      const baseUrl = `/${page}`;
      const targetUrl =
        filterType && filterType !== "Show All"
          ? `${baseUrl}?type=${encodeURIComponent(filterType)}`
          : baseUrl;
      router.push(targetUrl); // Quay về trang tier list với query parameter
    }
    // Nếu không phải trang chi tiết, <Link> sẽ xử lý điều hướng bình thường
  };

  return (
    <div
      className={clsx(
        "w-[90px] transition-transform duration-300 hover:-translate-y-2",
        `champ-cost-${costChamp}`,
        "relative",
        isDetailPage &&
          "[filter:drop-shadow(0_0_10px_var(--border-color-cost))_drop-shadow(0_0_20px_var(--border-color-cost))] order-first"
      )}
    >
      {tier === "X" && tierAugment && (
        <div
          className={`tier-${tierAugment} absolute w-[30px] h-[30px] z-20 right-[10px] -top-[5px] flex justify-center items-center bg-[var(--tier-color)] rounded-[50%]`}
        >
          {tierAugment}
        </div>
      )}
      <div className={`flex relative w-[90px]`}>
        <div>
          <Link
            href={createHref()}
            aria-label={`View details for ${title}`}
            onClick={handleClick}
          >
            <Hexagon iconSize={90} imageSrc={iconChamp} name={title} />
          </Link>
        </div>
        {iconAugment && nameAugment && (
          <div className="flex absolute top-[70px] left-2/4 -translate-x-1/2 m-auto">
            <Hexagon
              iconSize={27}
              imageSrc={iconAugment}
              name={nameAugment}
              classNameImage="bg-black"
            />
          </div>
        )}
        {iconItem && nameItem && (
          <div className="flex absolute top-[70px] left-2/4 -translate-x-1/2 m-auto">
            <Hexagon iconSize={27} imageSrc={iconItem} name={nameItem} />
          </div>
        )}
      </div>
      <div className="hexagon-title flex justify-center text-center text-xs mt-2.5">
        {title}
      </div>
    </div>
  );
}
