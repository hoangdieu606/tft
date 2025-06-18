// app/items/ItemsDisplay.tsx

"use client";

import { useSearchParams } from "next/navigation";
import PageMenu from "@/components/PageMenu";
import ItemsList from "@/components/items/ItemsList";
import { Item } from "@/lib/types";
import {
  dataMapping,
  DataMappingKeys,
  DataMappingValue,
  DataPageKeys,
} from "@/lib/dataFilter";
import keyBy from "lodash/keyBy";

interface ItemsDisplayProps {
  items: Item[];
  page: DataPageKeys;
}

export default function ItemsDisplay({ items, page }: ItemsDisplayProps) {
  const searchParams = useSearchParams();
  const filterType = searchParams.get("type") ?? "Show All";

  const typeFilter: DataMappingValue | string =
    filterType in dataMapping
      ? dataMapping[filterType as DataMappingKeys]
      : filterType;

  const filteredItems =
    filterType === "Show All"
      ? items
      : items.filter((item) => item.type === typeFilter);
  const itemsMap = keyBy(items, "apiName");

  return (
    <>
      <PageMenu page={page} filterType={filterType} />
      {/* Truyền cả danh sách đã lọc và danh sách đầy đủ */}
      <ItemsList items={filteredItems} itemsMap={itemsMap} />
    </>
  );
}
