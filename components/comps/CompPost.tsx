import { Champion, Item, Augment, Trait, Guide } from "@/lib/types";
import CompHead from "@/components/comps/CompHead";
import HexagonIcons from "@/components/comps/HexagonIcons";
import Hexagon from "@/components/comps/Hexagon";
import IconTooltip from "@/components/IconTooltip";
import ItemCard from "@/components/items/ItemCard";
import ChessBoard from "@/components/comps/ChessBoard";
import parse from "html-react-parser";

interface CompPostProps {
  selectedGuide: Guide;
  championsMap: Record<string, Champion>;
  traitsMap: Record<string, Trait>;
  itemsMap: Record<string, Item>;
  augmentsMap: Record<string, Augment>;
  setNumber: number;
  filterType: string;
}
export default function CompPost({
  selectedGuide,
  championsMap,
  traitsMap,
  itemsMap,
  augmentsMap,
  setNumber,
  filterType,
}: CompPostProps) {
  const { finalComp, earlyComp, altBuilds, carousel, tips } = selectedGuide;
  return (
    <div className="w-full mx-[auto] overflow-hidden relative">
      <CompHead
        guide={selectedGuide}
        championsMap={championsMap}
        traitsMap={traitsMap}
        itemsMap={itemsMap}
        augmentsMap={augmentsMap}
        setNumber={setNumber}
        filterType={filterType}
      />
      <div className="flex flex-col border-t-2 border-t-green-900 md:border-2 md:border-green-900 pt-8 pb-10 gap-8 -mt-[2px]">
        <h2 className="uppercase text-center">Đội hình hoàn thiện</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {finalComp.map((obj) => (
            <HexagonIcons
              key={obj.boardIndex}
              championSize={100}
              itemSize={30}
              apiName={obj.apiName}
              championsMap={championsMap}
              items={obj.items}
              itemsMap={itemsMap}
              traitsMap={traitsMap}
              stars={obj.stars}
            />
          ))}
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col border-t-2 border-t-green-900 md:border-2 md:border-green-900 pt-8 pb-10 gap-8 -mt-[2px]">
        <h2 className="uppercase text-center">Đội hình đầu trận</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {earlyComp.map((obj) => (
            <HexagonIcons
              key={obj.apiName}
              championSize={72}
              itemSize={24}
              apiName={obj.apiName}
              championsMap={championsMap}
              items={obj.items}
              itemsMap={itemsMap}
              traitsMap={traitsMap}
              stars={obj.stars}
            />
          ))}
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-col border-t-2 border-t-green-900 md:border-2 md:border-green-900 py-8 gap-8 -mt-[2px]">
        <h2 className="uppercase text-center">Ưu tiên trang bị</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {carousel.map((obj) => (
            <IconTooltip
              key={obj.apiName}
              tooltipContent={
                <ItemCard item={itemsMap[obj.apiName]} itemsMap={itemsMap} />
              }
            >
              <Hexagon
                imageSrc={itemsMap[obj.apiName]?.icon}
                iconSize={72}
                name={itemsMap[obj.apiName]?.name}
              />
            </IconTooltip>
          ))}
        </div>
      </div>
      {/* 4 */}
      {altBuilds?.length > 0 && (
        <div className="flex flex-col border-t-2 border-t-green-900 md:border-2 md:border-green-900 pt-8 pb-10 gap-8 -mt-[2px]">
          <h2 className="uppercase text-center">Tạo tác nếu có</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {altBuilds.map((obj, index) => (
              <HexagonIcons
                key={index}
                championSize={100}
                itemSize={30}
                apiName={obj.apiName}
                championsMap={championsMap}
                items={obj.items}
                itemsMap={itemsMap}
                traitsMap={traitsMap}
                stars={obj.stars}
              />
            ))}
          </div>
        </div>
      )}
      {/* Đặt component HexagonIcons vào Chess Board ở đây*/}
      <div className="flex flex-col border-t-2 border-t-green-900 md:border-2 md:border-green-900 py-8 gap-8 -mt-[2px]">
        <h2 className="uppercase text-center">Ví dụ về xếp đội hình</h2>
        <ChessBoard
          finalComp={finalComp}
          championsMap={championsMap}
          itemsMap={itemsMap}
          traitsMap={traitsMap}
        />
      </div>

      {/* 6 */}
      <div className="flex flex-col border-t-2 border-t-green-900 md:border-2 md:border-green-900 py-8 gap-8 -mt-[2px]">
        <h2 className="uppercase text-center">Tips các giai đoạn</h2>
        <div className="flex flex-col md:flex-row md:px-8 gap-4">
          {tips.map((obj, index) => (
            <div
              key={index}
              className="flex flex-col px-6 py-4 border-2 border-green-900 rounded-4xl items-center gap-3 text-justify flex-[1]"
            >
              <h3>{obj.stage}</h3>
              <p>{parse(obj.tip)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
