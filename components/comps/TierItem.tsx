"use client";

import { useRouter, usePathname } from "next/navigation";
import { Guide, Champion, Item, Augment } from "@/lib/types";
import Hexagon from "@/components/comps/Hexagon";
import clsx from "clsx";
import { DataPageKeys } from "@/lib/dataFilter";
import { useCallback, useMemo } from "react";

// Constants
const FILTER_TYPES = {
  SHOW_ALL: "Show All",
} as const;

const TIER_TYPES = {
  X: "X",
} as const;

interface TierItemProps {
  guide: Guide;
  championsMap: Record<string, Champion>;
  itemsMap: Record<string, Item>;
  augmentsMap: Record<string, Augment>;
  filterType?: string;
  page: DataPageKeys;
}

// Custom hook for navigation logic
const useNavigationLogic = (
  page: DataPageKeys,
  compSlug: string,
  filterType?: string
) => {
  const router = useRouter();
  const pathname = usePathname();

  const isDetailPage = useMemo(
    () => pathname === `/${page}/${compSlug}`,
    [pathname, page, compSlug]
  );

  const createHref = useCallback(() => {
    const baseUrl = `/${page}/${compSlug}`;
    if (filterType && filterType !== FILTER_TYPES.SHOW_ALL) {
      return `${baseUrl}?type=${encodeURIComponent(filterType)}`;
    }
    return baseUrl;
  }, [page, compSlug, filterType]);

  const handleNavigation = useCallback(
    (e: React.MouseEvent) => {
      // Prevent any default behavior
      e.preventDefault();
      e.stopPropagation();

      if (isDetailPage) {
        // Navigate back to tier list
        const baseUrl = `/${page}`;
        const targetUrl =
          filterType && filterType !== FILTER_TYPES.SHOW_ALL
            ? `${baseUrl}?type=${encodeURIComponent(filterType)}`
            : baseUrl;
        router.push(targetUrl);
      } else {
        // Navigate to detail page
        router.push(createHref());
      }
    },
    [isDetailPage, page, filterType, router, createHref]
  );

  return {
    isDetailPage,
    createHref,
    handleNavigation,
  };
};

// Sub-components
interface TierBadgeProps {
  tier: string;
  tierAugment?: string;
}

const TierBadge = ({ tier, tierAugment }: TierBadgeProps) => {
  if (tier !== TIER_TYPES.X || !tierAugment) return null;

  return (
    <div
      className={clsx(
        `tier-${tierAugment}`,
        "absolute w-[30px] h-[30px] z-20 right-[10px] -top-[5px]",
        "flex justify-center items-center bg-[var(--tier-color)] rounded-[50%]"
      )}
    >
      {tierAugment}
    </div>
  );
};

interface SubItemProps {
  iconSrc?: string;
  name?: string;
  isItem?: boolean;
}

const SubItem = ({ iconSrc, name, isItem = false }: SubItemProps) => {
  if (!iconSrc || !name) return null;

  return (
    <div className="flex absolute top-[70px] left-2/4 -translate-x-1/2 m-auto">
      <Hexagon
        iconSize={27}
        imageSrc={iconSrc}
        name={name}
        classNameImage={isItem ? undefined : "bg-black"}
      />
    </div>
  );
};

export default function TierItem({
  guide,
  championsMap,
  itemsMap,
  augmentsMap,
  filterType,
  page,
}: TierItemProps) {
  const { mainChampion, mainItem, mainAugment, tier, title, compSlug } = guide;

  // Memoized data extraction
  const championData = useMemo(() => {
    const champion = championsMap[mainChampion?.apiName];
    return {
      icon: champion?.icon,
      cost: champion?.cost,
    };
  }, [championsMap, mainChampion?.apiName]);

  const itemData = useMemo(() => {
    const item = itemsMap[mainItem?.apiName];
    return {
      icon: item?.icon,
      name: item?.name,
    };
  }, [itemsMap, mainItem?.apiName]);

  const augmentData = useMemo(() => {
    const augment = augmentsMap[mainAugment?.apiName];
    return {
      icon: augment?.icon,
      tier: augment?.tier2,
      name: augment?.name,
    };
  }, [augmentsMap, mainAugment?.apiName]);

  const { isDetailPage, handleNavigation } = useNavigationLogic(
    page,
    compSlug,
    filterType
  );

  // Memoized CSS classes
  const containerClasses = useMemo(
    () =>
      clsx(
        "w-[90px] transition-transform duration-300 hover:-translate-y-2",
        championData.cost && `champ-cost-${championData.cost}`,
        "relative cursor-pointer",
        isDetailPage && [
          "[filter:drop-shadow(0_0_10px_var(--border-color-cost))_drop-shadow(0_0_20px_var(--border-color-cost))]",
          "order-first",
        ]
      ),
    [championData.cost, isDetailPage]
  );

  return (
    <div className={containerClasses} onClick={handleNavigation}>
      <TierBadge tier={tier} tierAugment={augmentData.tier} />
      
      <div className="flex relative w-[90px]">
        <div>
          <Hexagon
            iconSize={90}
            imageSrc={championData.icon}
            name={title}
          />
        </div>
        
        {/* Render augment or item, prioritize augment */}
        {augmentData.icon && augmentData.name ? (
          <SubItem
            iconSrc={augmentData.icon}
            name={augmentData.name}
            isItem={false}
          />
        ) : (
          <SubItem
            iconSrc={itemData.icon}
            name={itemData.name}
            isItem={true}
          />
        )}
      </div>
      
      <div className="hexagon-title flex justify-center text-center text-xs mt-2.5 pointer-events-none">
        {title}
      </div>
    </div>
  );
}