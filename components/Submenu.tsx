"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavLink } from "./NavLink";

const submenuLinks = [
  {
    group: "Tierlist",
    items: [
      { href: "/tierlist", text: "Tierlist" },
      { href: "/tierlist-augments", text: "Tierlist Augments" },
      { href: "/tierlist-items", text: "Tierlist Items" },
    ],
  },
  {
    group: "Champions",
    items: [
      { href: "/champions", text: "SET 14" },
      { href: "/champions", text: "Tướng" },
      { href: "/traits", text: "Tộc hệ" },
      { href: "/items", text: "Trang bị" },
      { href: "/augments", text: "Lõi" },
    ],
  },
];

const Submenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        className="flex w-full h-[50px] gap-2 justify-center items-center text-white text-lg cursor-pointer hover:text-blue-300"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="submenu"
      >
        <Bars3Icon className="h-5 w-5" />
        <span>Menu</span>
      </button>
      <div
        className={`absolute w-full left-0 top-[50px] bg-gradient-to-r from-[#657FFF] to-[#906EFF] transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
        id="submenu"
        onClick={handleSubmenuClick}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {submenuLinks.map((group) => (
            <div key={group.group} className="space-y-2">
              {group.items.map((item, index) => (
                <NavLink key={index} href={item.href} text={item.text} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Submenu;
