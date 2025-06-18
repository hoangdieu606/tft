const dataLinks = [
  { text: "Tướng", href: "/champions" },
  { text: "Tộc Hệ", href: "/traits" },
  { text: "Nâng Cấp", href: "/augments" },
  { text: "Trang Bị", href: "/items" },
];

const guideLinks = [
  { text: "Tierlist", href: "/tierlist" },
  { text: "Nâng Cấp", href: "/tierlist-augments" },
  { text: "Trang Bị", href: "/tierlist-items" },
];
const dataRevivalLinks = [
  { text: "Tướng", href: "/champions-revival" },
  { text: "Tộc Hệ", href: "/traits-revival" },
  { text: "Nâng Cấp", href: "/augments-revival" },
  { text: "Trang Bị", href: "/items-revival" },
];
const guideRevivalLinks = [
  { text: "Tierlist", href: "/tierlist-revival" },
  { text: "Nâng Cấp", href: "/tierlist-augments" },
  { text: "Trang Bị", href: "/tierlist-items" },
];
const championsFilter = [
  "Show All",
  "1 Cost",
  "2 Costs",
  "3 Costs",
  "4 Costs",
  "5 Costs",
];
const traitsFilter = ["Show All", "Tộc", "Hệ"];
const augmentsFilter = ["Show All", "Kim Cương", "Vàng", "Bạc"];
const itemsFilter = [
  "Show All",
  "Thường",
  "Ánh Sáng",
  "Tạo Tác",
  "Hỗ Trợ",
  "Ấn",
  "Set Items",
  "Components",
];
const tierlistFilter = [
  "Show All",
  "1-Cost Reroll",
  "2-Cost Reroll",
  "3-Cost Reroll",
  "4-Cost Fast 8",
  "Fast 9",
  "Lose Streak",
];

const dataPage = {
  champions: {
    linkList: dataLinks,
    filterList: championsFilter,
  },
  "champions-revival": {
    linkList: dataRevivalLinks,
    filterList: championsFilter,
  },
  traits: {
    linkList: dataLinks,
    filterList: traitsFilter,
  },
  "traits-revival": {
    linkList: dataRevivalLinks,
    filterList: traitsFilter,
  },
  augments: {
    linkList: dataLinks,
    filterList: augmentsFilter,
  },
  "augments-revival": {
    linkList: dataRevivalLinks,
    filterList: augmentsFilter,
  },
  items: {
    linkList: dataLinks,
    filterList: itemsFilter,
  },
  "items-revival": {
    linkList: dataRevivalLinks,
    filterList: itemsFilter,
  },
  tierlist: {
    linkList: guideLinks,
    filterList: tierlistFilter,
  },
  "tierlist-revival": {
    linkList: guideRevivalLinks,
    filterList: tierlistFilter,
  },
  "tierlist-augments": {
    linkList: guideLinks,
    filterList: augmentsFilter,
  },
  "tierlist-items": {
    linkList: guideLinks,
    filterList: itemsFilter,
  },
};

export const dataMapping = {
  "Show All": "Show All",
  "1 Cost": 1,
  "2 Costs": 2,
  "3 Costs": 3,
  "4 Costs": 4,
  "5 Costs": 5,
  Tộc: "origin",
  Hệ: "class",
  "Kim Cương": "prism",
  Vàng: "gold",
  Bạc: "silver",
  Thường: "craftables",
  "Ánh Sáng": "radiants",
  "Tạo Tác": "ornns",
  "Hỗ Trợ": "supports",
  Ấn: "emblems",
  "Set Items": "set_items",
  Components: "components",
} as const;

export type DataMappingKeys = keyof typeof dataMapping;
export type DataMappingValue = (typeof dataMapping)[DataMappingKeys];

// Định nghĩa và xuất kiểu DataPageKeys
export type DataPageKeys = keyof typeof dataPage;

// Hàm dataFilter
export function dataFilter(page: DataPageKeys) {
  const { linkList, filterList } = dataPage[page];
  return { linkList, filterList };
}
