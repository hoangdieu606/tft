import { renderComp } from '/src/assets/js/tierlist.js';
import { renderChampions, renderAugments, renderItems, renderTraits, renderTierlistAugments, renderTierlistItems } from '/src/assets/js/renders.js';
import { setupTooltips, setIndexer } from '/src/assets/js/global-defer.js';

// Định nghĩa các route với chú thích
export const routes = {
  tierlist: import.meta.env.DEV ? "src/pages/tierlist.html" : "/pages/tierlist.html",
  "tierlist-augments": import.meta.env.DEV ? "src/pages/tierlist-augments.html" : "/pages/tierlist-augments.html",
  "tierlist-items": import.meta.env.DEV ? "src/pages/tierlist-items.html" : "/pages/tierlist-items.html",
  champions: import.meta.env.DEV ? "src/pages/champions.html" : "/pages/champions.html",
  augments: import.meta.env.DEV ? "src/pages/augments.html" : "/pages/augments.html",
  items: import.meta.env.DEV ? "src/pages/items.html" : "/pages/items.html",
  traits: import.meta.env.DEV ? "src/pages/traits.html" : "/pages/traits.html",
  home: import.meta.env.DEV ? "src/pages/home.html" : "/pages/home.html",
  commingsoon: import.meta.env.DEV ? "src/pages/commingsoon.html" : "/pages/commingsoon.html",
};

// Hàm loadPage để tải nội dung HTML và hiển thị
export async function loadPage(page, { data = {}, guidesData = {} } = {}) {
  let normalizedPage; // Định nghĩa ở ngoài try để tránh ReferenceError
  try {
    // Nếu data hoặc guidesData rỗng, thử lấy từ localStorage
    if (Object.keys(data).length === 0 || Object.keys(guidesData).length === 0) {

      const storedData = localStorage.getItem("postData");
      const storedGuidesData = localStorage.getItem("guidesData");

      if (storedData) {
        data = JSON.parse(storedData);
        console.log("✅ Dữ liệu lấy từ localStorage:");
      }
      if (storedGuidesData) {
        guidesData = JSON.parse(storedGuidesData);
        console.log("✅ GuidesData lấy từ localStorage:");
      }
    }

    normalizedPage = page.replace(".html", "");
    const url = routes[normalizedPage];

    if (!url) {
      if (normalizedPage !== "commingsoon") {
        return loadPage("commingsoon", { data, guidesData });
      } else {
        throw new Error(`Page ${normalizedPage} not found and commingsoon route failed`);
      }
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    const html = await response.text();
    document.getElementById("content").innerHTML = html;


    switch (page) {
      case 'champions':
        renderChampions(data.champions.mainChampions);
        break;
      case 'items':
        renderItems(data.items.mainItems);
        break;
      case 'augments':
        renderAugments(data.augments.mainAugs);
        break;
      case 'traits':
        renderTraits(data.traits.mainTraits, data.champions.mainChampions);
        break;
      case 'tierlist':
        renderComp(data, guidesData);
        break;
      case 'tierlist-augments':
        renderTierlistAugments(data.augments.mainAugs);
        break;
      case 'tierlist-items':
        renderTierlistItems(data.items.mainItems);
        break;
      case 'commingsoon':
        // Không cần render gì đặc biệt cho trang commingsoon
        break;
      case 'home':
        // Thêm case cho home để tránh cảnh báo
        break;
      default:
        console.warn(`⚠️ No render function for page: ${page}`);
    }

    document.body.setAttribute("btn-filter", `category-0-active`);
    setIndexer(data || {});
    setupTooltips();
  } catch (error) {
    console.error("🔥 Error loading page:", error);
    if (normalizedPage !== "commingsoon") {
      return loadPage("commingsoon", { data, guidesData });
    } else {
      document.getElementById("content").innerHTML = "<h1>Error: Unable to load page</h1>";
    }
  }
}
