"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Dropdown from "./Dropdown";
import { dataFilter, DataPageKeys } from "@/lib/dataFilter";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  page: DataPageKeys;
  filterType: string;
}

export default function PageMenu({ page, filterType = "Show All" }: Props) {
  const { linkList, filterList } = dataFilter(page);
  const router = useRouter();
  const params = useSearchParams();

  const handleFilterClick = useCallback(
    (type: string) => {
      const newParams = new URLSearchParams(params.toString());
      if (type === "Show All") {
        newParams.delete("type");
      } else {
        newParams.set("type", type);
      }
      router.push(`?${newParams.toString()}`);
    },
    [params, router]
  );

  const mapping = {
    champions: "Tướng",
    "champions-revival": "Tướng",
    traits: "Tộc Hệ",
    "traits-revival": "Tộc Hệ",
    augments: "Nâng Cấp",
    "augments-revival": "Nâng Cấp",
    items: "Trang Bị",
    "items-revival": "Trang Bị",
    tierlist: "Đội Hình",
    "tierlist-revival": "Đội Hình",
    "tierlist-augments": "Nâng Cấp",
    "tierlist-items": "Trang Bị",
  };

  const pageSet = page.replace("-revival", "");
  const pageRevival =
    pageSet !== "tierlist-augments" && pageSet !== "tierlist-items"
      ? pageSet + "-revival"
      : pageSet;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      <div className="flex">
        <Dropdown
          label={mapping[page]}
          options={linkList.map((option) => ({
            text: option.text,
            href: option.href,
          }))}
          selectedOption={page}
          type="link"
        />
      </div>
      <div className="flex justify-end">
        <Dropdown
          label={filterType}
          options={filterList.map((text) => ({
            text,
            onClick: () => handleFilterClick(text),
          }))}
          selectedOption={filterType}
          type="filter"
        />
      </div>

      <div className="col-span-2 md:col-start-2 md:col-end-3 md:row-start-1 flex items-center gap-4 justify-end md:justify-center uppercase">
        <Link
          className={clsx(
            "flex items-center bg-[linear-gradient(90deg,_#657FFF,_#906EFF)] h-7 px-2 active:bg-purple-900 rounded-[3px]",
            pageSet === page ? "opacity-100" : "opacity-50"
          )}
          href={`/${pageSet}`}
        >
          Set 14
        </Link>
        <Link
          className={clsx(
            "flex items-center bg-[#e12445] h-7 px-2 active:bg-rose-900 rounded-[3px]",
            pageRevival === page ? "opacity-100" : "opacity-50"
          )}
          href={`/${pageRevival}`}
        >
          Revival
        </Link>
      </div>
    </div>
  );
}
