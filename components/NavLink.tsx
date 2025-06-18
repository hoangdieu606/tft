"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BookOpenIcon,
  FireIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  text: string;
  icon?: string; // Chuỗi định danh icon
  iconSize?: string; // Class Tailwind cho kích thước icon
  className?: string;
  onClick?: () => void;
}

const iconMap = {
  home: HomeIcon,
  book: BookOpenIcon,
  fire: FireIcon,
  wrench: WrenchScrewdriverIcon,
};

export const NavLink = ({
  href,
  text,
  icon,
  iconSize = "h-5 w-5",
  className = "",
  onClick,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const Icon = icon ? iconMap[icon as keyof typeof iconMap] : null;
  return (
    <Link
      href={href}
      className={clsx(
        "flex w-full h-[50px] justify-center items-center gap-2 text-lg text-white",
        {
          "bg-white/10 drop-shadow-[0_0_10px_#ffffff]": isActive,
        },
        className
      )}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
    >
      {Icon && <Icon className={iconSize} />}
      <span>{text}</span>
    </Link>
  );
};
