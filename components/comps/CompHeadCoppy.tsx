"use client";
import padEnd from "lodash/padEnd";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  XMarkIcon,
  ClipboardIcon,
  LinkIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/16/solid";
import { FinalComp, Champion } from "@/lib/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

interface CompHeadCoppyProps {
  finalComp: FinalComp[];
  championsMap: Record<string, Champion>;
  setNumber: number;
  filterType: string;
}
export default function CompHeadCoppy({
  finalComp,
  championsMap,
  setNumber,
  filterType,
}: CompHeadCoppyProps) {
  const router = useRouter();

  // handleCopyToClipboard
  const handleCopyToClipboard = async (
    textToCopy: string,
    successMessage: string
  ) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success(successMessage);
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy");
    }
  };

  // handleCopyTeamCode
  const handleCopyTeamCode = () => {
    let hexIndexSring = "02";
    finalComp.forEach((champ) => {
      const hexIndex = championsMap[champ.apiName]?.hexIndex;
      if (hexIndex) {
        hexIndexSring += hexIndex;
      } else {
        console.warn(`hexIndex not found for ${champ.apiName}`);
      }
    });
    const fullCode = `${padEnd(hexIndexSring, 32, "0")}TFTSet${setNumber}`;
    handleCopyToClipboard(fullCode, "Team code copied!");
  };

  // handleCopyLink
  const handleCopyLink = () => {
    handleCopyToClipboard(window.location.href, "Link copied!");
  };

  // handleDirect
  const handleDirect = () => {
    router.push("/builder");
  };
  const createHref = () => {
    const baseUrl = `/tierlist`;
    if (filterType && filterType !== "Show All") {
      return `${baseUrl}?type=${encodeURIComponent(filterType)}`;
    }
    return baseUrl;
  };

  return (
    <div className="absolute top-4 right-4 flex gap-3">
      <Menu>
        <MenuButton className="bg-green-500 w-full px-4 py-[2px] rounded-full focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-green-700 data-open:bg-green-700 cursor-pointer">
          <EllipsisHorizontalIcon className="size-4 fill-black" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="flex flex-col gap-1 w-48 text-black origin-top-right rounded-xl border border-white/5 bg-slate-950 p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <button
              className="bg-green-500 group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-green-700 cursor-pointer"
              onClick={handleCopyTeamCode}
            >
              <ClipboardIcon className="size-4 fill-black" />
              Copy TeamCode
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                ⌘C
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="bg-green-500 group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-green-700 cursor-pointer"
              onClick={handleCopyLink}
            >
              <LinkIcon className="size-4 fill-black" />
              Copy Link
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                ⌘L
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="bg-green-500 group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-green-700 cursor-pointer"
              onClick={handleDirect}
            >
              <WrenchScrewdriverIcon className="size-4 fill-black" />
              Open in builder
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                ⌘O
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Link
        href={createHref()}
        className="bg-green-500 w-full px-4 py-[2px] rounded-full hover:bg-green-700 data-focus:bg-green-700"
      >
        <XMarkIcon className="size-4 fill-black" />
      </Link>
    </div>
  );
}
