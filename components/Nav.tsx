import { NavLink } from "./NavLink";
import Submenu from "./Submenu";
import clsx from "clsx";

const navLinks = [
  { href: "/", icon: "home", text: "Home" },
  { href: "/champions", icon: "book", text: "SET 14", hideOnMobile: true },
  { href: "/tierlist", icon: "fire", text: "TierList" },
  { href: "/builder", icon: "wrench", text: "Team Builder", hideOnMobile: true },
];

const Nav = () => {
  return (
    <nav className="fixed top-0 md:[max-width:1024px] w-full z-50">
      <div className="flex bg-gradient-to-r from-[#657FFF] to-[#906EFF]">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            text={link.text}
            className={clsx({ "hidden md:flex": link.hideOnMobile })}
          />
        ))}
        <Submenu />
      </div>
    </nav>
  );
};

export default Nav;