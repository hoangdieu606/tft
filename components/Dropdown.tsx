import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface DropdownOption {
  text: string;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  selectedOption?: string;
  type: "link" | "filter";
}

export default function Dropdown({
  label,
  options,
  selectedOption,
  type,
}: DropdownProps) {
  return (
    <Menu as="div" className="relative min-w-[144px] md:min-w-[160px] text-left text-sm">
      {({ open }) => (
        <>
          <div>
            <MenuButton className="inline-flex w-full justify-between items-center px-5 py-3 border-2 border-green-900 rounded-3xl bg-slate-950 cursor-pointer hover:border-green-500 data-open:border-green-500 transition-colors duration-300 whitespace-nowrap">
              {label}
              <ChevronDownIcon
                className={clsx(
                  "ml-2 -mr-1 h-5 w-5 text-gray-200 transition-transform duration-200",
                  open && "rotate-180"
                )}
                aria-hidden="true"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute left-0 mt-2 w-full rounded-md bg-slate-950 border-2 border-green-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0"
          >
            {options.map((option) => (
              <MenuItem key={option.text}>
                {({ focus }) =>
                  type === "link" ? (
                    <Link
                      href={option.href || "#"}
                      className={clsx(
                        "block px-4 py-3",
                        focus && "bg-green-500 text-black",
                        selectedOption === option.href?.slice(1) &&
                          !focus &&
                          "bg-green-500 text-white"
                      )}
                    >
                      {option.text}
                    </Link>
                  ) : (
                    <button
                      onClick={option.onClick}
                      className={clsx(
                        "w-full text-left block px-4 py-3",
                        focus && "bg-green-500 text-black",
                        selectedOption === option.text &&
                          !focus &&
                          "bg-green-500 text-white"
                      )}
                    >
                      {option.text}
                    </button>
                  )
                }
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
}
