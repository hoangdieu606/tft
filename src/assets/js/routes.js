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
export async function loadPage(page) {
  let normalizedPage; // Định nghĩa ở ngoài try để tránh ReferenceError
  try {
    normalizedPage = page.replace(".html", "");
    const url = routes[normalizedPage];

    if (!url) {
      if (normalizedPage !== "commingsoon") {
        return loadPage("commingsoon");
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

    const cachedData = JSON.parse(localStorage.getItem('postData')) || {};
    const cachedGuidesData = JSON.parse(localStorage.getItem('guidesData')) || {};

    switch (page) {
      case 'champions':
        if (cachedData?.champions?.mainChampions) {
          renderChampions(cachedData.champions.mainChampions);
        } else {
          console.error('Champions data is missing');
        }
        break;
      case 'items':
        if (cachedData?.items?.mainItems) {
          renderItems(cachedData.items.mainItems);
        } else {
          console.error('Items data is missing');
        }
        break;
      case 'augments':
        if (cachedData?.augments?.mainAugs) {
          renderAugments(cachedData.augments.mainAugs);
        } else {
          console.error('Augments data is missing');
        }
        break;
      case 'traits':
        if (cachedData?.traits?.mainTraits && cachedData?.champions?.mainChampions) {
          renderTraits(cachedData.traits.mainTraits, cachedData.champions.mainChampions);
        } else {
          console.error('Traits or champions data is missing');
        }
        break;
      case 'tierlist':
        renderComp(cachedData, cachedGuidesData); // renderComp đã có kiểm tra bên trong
        break;
      case 'tierlist-augments':
        if (cachedData?.augments?.mainAugs) {
          renderTierlistAugments(cachedData.augments.mainAugs);
        } else {
          console.error('Tierlist augments data is missing');
        }
        break;
      case 'tierlist-items':
        if (cachedData?.items?.mainItems) {
          renderTierlistItems(cachedData.items.mainItems);
        } else {
          console.error('Tierlist items data is missing');
        }
        break;
      case 'commingsoon':
        // Không cần render gì đặc biệt cho trang commingsoon
        break;
      case 'home':
        // Thêm case cho home để tránh cảnh báo
        break;
      default:
        console.warn(`No render function for page: ${page}`);
    }

    document.body.setAttribute("btn-filter", `category-0-active`);
    setIndexer(cachedData || {}); // Đảm bảo setIndexer không lỗi nếu cachedData là null
    setupTooltips();
  } catch (error) {
    console.error("Error loading page:", error);
    if (normalizedPage !== "commingsoon") {
      return loadPage("commingsoon");
    } else {
      document.getElementById("content").innerHTML = "<h1>Error: Unable to load page</h1>";
    }
  }
}