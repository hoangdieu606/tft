import Image from "next/image";
import { Item } from "@/lib/types";

interface StatsDisplayProps {
  stats: Item["stats"];
}

const statIcons: Record<
  string,
  { url: string; isPercent: boolean; label: string }
> = {
  ad: { url: "/assets/images/AD.png", isPercent: true, label: "Attack Damage" },
  ap: { url: "/assets/images/AP.png", isPercent: false, label: "Ability Power" },
  mana: { url: "/assets/images/Mana.png", isPercent: false, label: "Mana" },
  ar: { url: "/assets/images/Armor.png", isPercent: false, label: "Armor" },
  mr: { url: "/assets/images/MR.png", isPercent: false, label: "Magic Resist" },
  hp: { url: "/assets/images/Health.png", isPercent: false, label: "Health" },
  as: { url: "/assets/images/AS.png", isPercent: true, label: "Attack Speed" },
  crit: { url: "/assets/images/Crit.png", isPercent: true, label: "Critical Strike" },
  da: { url: "/assets/images/DA.png", isPercent: true, label: "Dodge Chance" },
  dr: { url: "/assets/images/DR.png", isPercent: true, label: "Damage Reduction" },
  ov: { url: "/assets/images/SV.png", isPercent: true, label: "Omnivamp" },
};

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  if (!stats || Object.keys(stats).length === 0) return null;

  return (
    <span className="flex items-center flex-wrap gap-1">
      {Object.entries(stats).map(([stat, value]) => {
        const statInfo = statIcons[stat];
        if (!statInfo) return null;

        const { url, isPercent, label } = statInfo;
        let displayValue = value;
        if (typeof value === "number") {
          displayValue = isPercent && value < 1 ? Math.round(value * 100) : Math.round(value);
        }
        const suffix = isPercent ? "%" : "";

        return (
          <span
            key={stat}
            className="flex items-center gap-1 text-sm"
            title={label}
          >
            <Image
              src={url}
              alt={label}
              width={16}
              height={16}
              className="max-w-none"
            />
            <span className="text-gray-300">+{displayValue}{suffix}</span>
          </span>
        );
      })}
    </span>
  );
}