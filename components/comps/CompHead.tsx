import Image from "next/image";
import { Guide, Champion, Trait, Item, Augment } from "@/lib/types";
import toLower from "lodash/toLower";
import CompHeadCoppy from "./CompHeadCoppy";
import CompHeadTraits from "./CompHeadTraits";
import IconTooltip from "../IconTooltip";
import AugmentCard from "../augments/AugmentCard";
import ItemCard from "../items/ItemCard";
import parse from "html-react-parser";

interface CompHeadProps {
  guide: Guide;
  championsMap: Record<string, Champion>;
  traitsMap: Record<string, Trait>;
  itemsMap: Record<string, Item>;
  augmentsMap: Record<string, Augment>;
  setNumber: number;
  filterType: string;
}
export default function CompHead({
  guide,
  championsMap,
  traitsMap,
  itemsMap,
  augmentsMap,
  setNumber,
  filterType,
}: CompHeadProps) {
  const {
    mainChampion,
    mainItem,
    mainAugment,
    tier,
    title,
    style,
    augments,
    augmentTypes,
    augmentsTip,
    finalComp,
  } = guide;

  const iconChamp = championsMap[mainChampion?.apiName]?.icon;
  const iconItem = itemsMap[mainItem?.apiName]?.icon;
  const nameItem = itemsMap[mainItem?.apiName]?.name;
  const iconAugment = augmentsMap[mainAugment?.apiName]?.icon;
  const nameAugment = augmentsMap[mainAugment?.apiName]?.name;

  return (
    <div className="flex flex-col gap-8 sm:flex-row md:border-2 md:border-green-900 md:px-8 py-8 md:py-6 relative">
      <div className="flex flex-col gap-3 justify-center items-center font-semibold sm:w-1/2">
        <div className="absolute w-[400px] h-[450px] bg-[image:radial-gradient(ellipse_at_top_left,var(--tier-gradient)_400px)] pointer-events-none z-0 top-0 left-0" />
        <div className="w-[150px] h-[150px] relative flex [filter:drop-shadow(var(--tier-bg)_0px_0px_10px)]">
          <div className="text-(--tier-bg) text-[10rem] leading-none opacity-[.4] font-black absolute h-full -left-[90px]">
            {tier}
          </div>
          <div className="flex justify-center items-center w-[150px] h-[150px] [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)] bg-[var(--tier-bg)]">
            <Image
              src={iconChamp}
              alt={title}
              width={150 * 0.85}
              height={150 * 0.85}
              className="[clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]"
            />
          </div>
          {iconAugment && nameAugment && (
            <IconTooltip
              tooltipContent={
                <AugmentCard augment={augmentsMap[mainAugment.apiName]} />
              }
              className="flex justify-center items-center absolute w-[40px] h-[40px] rounded-[50%] bottom-[20px] right-[0] border-4 border-[var(--tier-bg)] bg-[#1e1e1e] [filter:drop-shadow(var(--tier-bg)_0px_0px_10px)] overflow-hidden"
            >
              <Image
                src={iconAugment}
                width={32}
                height={32}
                alt={nameAugment}
              />
            </IconTooltip>
          )}
          {iconItem && nameItem && (
            <IconTooltip
              tooltipContent={
                <ItemCard
                  item={itemsMap[mainItem.apiName]}
                  itemsMap={itemsMap}
                />
              }
              className="flex justify-center items-center absolute w-[40px] h-[40px] rounded-[50%] bottom-[20px] right-[0] border-4 border-[var(--tier-bg)] bg-[#1e1e1e] [filter:drop-shadow(var(--tier-bg)_0px_0px_10px)] overflow-hidden"
            >
              <Image src={iconItem} width={32} height={32} alt={nameItem} />
            </IconTooltip>
          )}
        </div>
        <h1 className="uppercase">{title}</h1>
        <div className="uppercase text-xs leading-4 font-bold">
          Phong Cách: {style}
        </div>
        <CompHeadTraits
          finalComp={finalComp}
          championsMap={championsMap}
          traitsMap={traitsMap}
          itemsMap={itemsMap}
          augmentsMap={augmentsMap}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center font-semibold sm:w-1/2">
        <div className="flex flex-col gap-4 justify-center items-center mt-6">
          <h2 className="uppercase text-center">Những Lõi Mạnh</h2>
          <div className="flex flex-wrap justify-center gap-5 mt-2 w-[300px]">
            {augments.map(({ apiName }) => (
              <IconTooltip
                key={apiName}
                tooltipContent={<AugmentCard augment={augmentsMap[apiName]} />}
              >
                <Image
                  src={augmentsMap[apiName].icon}
                  width={60}
                  height={60}
                  alt={augmentsMap[apiName].name}
                />
              </IconTooltip>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="uppercase text-center">Ưu tiên lõi</h2>
          <div className="flex gap-2">
            {augmentTypes.map((value, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-2"
              >
                <div className="flex flex-col justify-around items-center w-16 h-20 rounded-xl bg-[linear-gradient(150deg,#04190c_50%,#065513)] border border-transparent border-t-[#16dc4c] text-xs p-2 pb-1">
                  <Image
                    src={`/assets/images/${toLower(value)}.png`}
                    width={56}
                    height={56}
                    alt={value}
                    className="h-auto w-full"
                  />
                  <span>{value}</span>
                </div>

                {index < 2 && (
                  <svg
                    width={9}
                    height={13}
                    viewBox="0 0 149 213"
                    fill="none"
                    className="filter invert-[66%] sepia-[91%] saturate-[1145%] hue-rotate-[79deg] brightness-[200%] contrast-[94%]"
                  >
                    <path
                      d="M137.225 81.825L55.625 8.625C34.325-10.475.525 4.625.525 33.225v146.3c0 28.6 33.8 43.7 55.1 24.6l81.6-73.2c14.6-13.1 14.6-36.1 0-49.2z"
                      fill="#FFC808"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="p-7 border-2 border-green-900 rounded-[40px] w-full relative mt-8 text-justify">
          <span className="absolute px-4 bg-green-500 -top-4 left-2/4 -translate-x-1/2 rounded-full text-black">
            Mẹo
          </span>
          <p>{parse(augmentsTip)}</p>
        </div>
        <CompHeadCoppy
          finalComp={finalComp}
          championsMap={championsMap}
          setNumber={setNumber}
          filterType={filterType}
        />
      </div>
    </div>
  );
}
