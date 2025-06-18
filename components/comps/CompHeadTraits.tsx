import Image from "next/image";
import { FinalComp, Champion, Trait, Item, Augment } from "@/lib/types";
import IconTooltip from "../IconTooltip";
import TraitCard from "../traits/TraitCard";

// Định nghĩa kiểu cho kết quả của mỗi trait
interface TraitResult {
  apiName: string;
  name: string;
  icon: string;
  maxTraits: number;
  colors: number;
}

interface CompHeadTraitsProps {
  finalComp: FinalComp[];
  championsMap: Record<string, Champion>;
  traitsMap: Record<string, Trait>;
  itemsMap: Record<string, Item>;
  augmentsMap: Record<string, Augment>;
}

export default function CompHeadTraits({
  finalComp,
  championsMap,
  traitsMap,
  itemsMap,
}: CompHeadTraitsProps) {
  // Định nghĩa kiểu cho traitCounts
  const traitCounts: Record<string, number> = {};

  finalComp.forEach((comp) => {
    // Tìm tướng trong championsMap
    const champion = championsMap[comp.apiName];
    if (champion) {
      // Thêm đặc điểm của tướng
      champion.traits?.forEach((traitApi) => {
        const trait = traitsMap[traitApi];
        if (trait) {
          traitCounts[trait.apiName] = (traitCounts[trait.apiName] || 0) + 1;
        }
      });
    }
    // Thêm đặc điểm từ vật phẩm
    comp.items?.forEach((itemApiName) => {
      const item = itemsMap[itemApiName];
      if (item && item.trait) {
        traitCounts[item.trait] = (traitCounts[item.trait] || 0) + 1;
      }
    });
  });
  // Bước 2: Ánh xạ đặc điểm sang định dạng kết quả
  const result: TraitResult[] = Object.keys(traitCounts)
    .map((traitApiName) => {
      const trait = traitsMap[traitApiName];
      if (!trait) return null;

      const maxTraits = traitCounts[traitApiName];
      // Tìm breakpoint cao nhất <= maxTraits
      let colorIndex = -1;
      for (let i = 0; i < (trait.breakpoints?.length || 0); i++) {
        if (maxTraits >= (trait.breakpoints?.[i] || 0)) {
          colorIndex = i;
        } else {
          break;
        }
      }
      const colors = colorIndex >= 0 ? trait.colors?.[colorIndex] || 0 : 0;

      return {
        apiName: trait.apiName,
        name: trait.name,
        icon: trait.icon,
        maxTraits,
        colors,
      };
    })
    .filter(
      (trait): trait is TraitResult => trait !== null && trait.colors > 0
    ); // Loại bỏ đặc điểm null hoặc không hoạt động

  // Bước 3: Sắp xếp theo colors giảm dần, nếu colors bằng nhau thì theo maxTraits giảm dần
  result.sort((a, b) => {
    if (b.colors !== a.colors) {
      return b.colors - a.colors; // Sắp xếp theo colors giảm dần
    }
    return b.maxTraits - a.maxTraits; // Nếu colors bằng nhau, sắp xếp theo maxTraits giảm dần
  });
  
  // Render kết quả
  return (
    <div className="grid grid-cols-5 gap-4">
      {result.map((trait) => (
        <IconTooltip
          key={trait.apiName}
          tooltipContent={
            <TraitCard
              trait={traitsMap[trait.apiName]}
              championsMap={championsMap}
            />
          }
        >
          <div className="flex justify-center items-center gap-1 text-xl text-black px-1 bg-[#f6a928] rounded-sm">
            <Image
              src={trait.icon}
              alt={`${trait.name} icon`}
              width={20}
              height={20}
              className="invert"
            />
            <span className="trait-count">{trait.maxTraits}</span>
          </div>
        </IconTooltip>
      ))}
    </div>
  );
}
