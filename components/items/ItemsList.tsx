import { Item } from "@/lib/types";
import ItemCard from "./ItemCard";
import { itemCardListStyles } from "@/lib/allCardStyles";

interface ItemListProps {
  items: Item[]; // Danh sách đã lọc
  itemsMap: Record<string, Item>;
}

export default function ItemsList({ items, itemsMap }: ItemListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 mt-5">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} itemsMap={itemsMap} styles={itemCardListStyles} />
      ))}
    </div>
  );
}
