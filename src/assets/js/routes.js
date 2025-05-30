import { renderComp } from '/src/assets/js/tierlist.js';
import { renderChampions, renderAugments, renderItems, renderTraits, renderTierlistAugments, renderTierlistItems } from '/src/assets/js/renders.js';
import { renderBuilder } from '/src/assets/js/renderBuilder.js';
import { setupTooltips, setIndexer } from '/src/assets/js/global.js';
import { metaTags } from '/src/assets/js/metaTags.js';

// Định nghĩa các route với chú thích
export const routes = {
  tierlist: import.meta.env.DEV ? "src/pages/tierlist.html" : "/pages/tierlist.html",
  "tierlist-revival": import.meta.env.DEV ? "src/pages/tierlist-revival.html" : "/pages/tierlist-revival.html",
  "tierlist-augments": import.meta.env.DEV ? "src/pages/tierlist-augments.html" : "/pages/tierlist-augments.html",
  "tierlist-items": import.meta.env.DEV ? "src/pages/tierlist-items.html" : "/pages/tierlist-items.html",
  champions: import.meta.env.DEV ? "src/pages/champions.html" : "/pages/champions.html",
  augments: import.meta.env.DEV ? "src/pages/augments.html" : "/pages/augments.html",
  items: import.meta.env.DEV ? "src/pages/items.html" : "/pages/items.html",
  traits: import.meta.env.DEV ? "src/pages/traits.html" : "/pages/traits.html",
  builder: import.meta.env.DEV ? "src/pages/builder.html" : "/pages/builder.html",
  'builder-revival': import.meta.env.DEV ? "src/pages/builder-revival.html" : "/pages/builder-revival.html",
  home: import.meta.env.DEV ? "src/pages/home.html" : "/pages/home.html",
  commingsoon: import.meta.env.DEV ? "src/pages/commingsoon.html" : "/pages/commingsoon.html",
};

// Hàm loadPage để tải nội dung HTML và hiển thị
export async function loadPage(page, { data = {}, guidesData = {}, hexIndexData = {}, revivalData = {}, revivalGuides = {} } = {}) {
  let normalizedPage;
  try {
    // Nếu data hoặc guidesData rỗng, thử lấy từ localStorage
    if (Object.keys(data).length === 0 || Object.keys(guidesData).length === 0) {
      const storedData = localStorage.getItem("set-14-data");
      const storedGuidesData = localStorage.getItem("guidesData");
      const storedHexIndexData = localStorage.getItem("hexIndexData");
      const storedRevivalData = localStorage.getItem("set-10-data");
      const storedRevivalGuides = localStorage.getItem("revivalGuides");


      if (storedData) {
        data = JSON.parse(storedData);
      }
      if (storedGuidesData) {
        guidesData = JSON.parse(storedGuidesData);
      }
      if (storedHexIndexData) {
        hexIndexData = JSON.parse(storedHexIndexData);
      }
      if (storedRevivalData) {
        revivalData = JSON.parse(storedRevivalData);
      }
      if (storedRevivalGuides) {
        revivalGuides = JSON.parse(storedRevivalGuides);
      }
    }

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

    // Cập nhật tiêu đề và meta tags
    const meta = metaTags[normalizedPage] || metaTags.home;
    document.title = meta.title;

    // Cập nhật meta tags
    if (meta.description) {
      document.querySelector('meta[name="description"]').setAttribute("content", meta.description);
    }
    if (meta.keywords) {
      document.querySelector('meta[name="keywords"]').setAttribute("content", meta.keywords);
    }
    if (meta.ogTitle) {
      document.querySelector('meta[property="og:title"]').setAttribute("content", meta.ogTitle);
    }
    if (meta.ogDescription) {
      document.querySelector('meta[property="og:description"]').setAttribute("content", meta.ogDescription);
    }
    if (meta.ogImage) {
      document.querySelector('meta[property="og:image"]').setAttribute("content", meta.ogImage);
    }
    if (meta.twitterTitle) {
      document.querySelector('meta[name="twitter:title"]').setAttribute("content", meta.twitterTitle);
    }
    if (meta.twitterDescription) {
      document.querySelector('meta[name="twitter:description"]').setAttribute("content", meta.twitterDescription);
    }
    if (meta.twitterImage) {
      document.querySelector('meta[name="twitter:image"]').setAttribute("content", meta.twitterImage);
    }

    switch (page) {
      case 'champions':
        renderChampions(data);
        break;
      case 'items':
        renderItems(data);
        break;
      case 'augments':
        renderAugments(data);
        break;
      case 'traits':
        renderTraits(data);
        break;
      case 'tierlist':
        renderComp(data, guidesData);
        break;
      case 'tierlist-revival':
        renderComp(revivalData, revivalGuides);
        break;
      case 'tierlist-augments':
        renderTierlistAugments(data);
        break;
      case 'tierlist-items':
        renderTierlistItems(data);
        break;
      case 'builder':
        renderBuilder(data);
        break;
      case 'builder-revival':
        renderBuilder(revivalData);
        break;
      case 'home':
        break;
      default:
        console.warn(`⚠️ No render function for page: ${page}`);
    }

    if (page === "builder" || page === "builder-revival") {
      document.body.setAttribute("btn-filter", `category-1-active`);
      document.body.setAttribute("augs-btn-filter", "category-0-active");
    } else {
      document.body.setAttribute("btn-filter", `category-0-active`);
    }

    if (page === "tierlist-revival" || page === "builder-revival") {
      setIndexer(revivalData || {});
      setupTooltips();
    } else {
      setIndexer(data || {});
      setupTooltips();
    }

  } catch (error) {
    console.error("🔥 Error loading page:", error);
    if (normalizedPage !== "commingsoon") {
      return loadPage("commingsoon");
    } else {
      document.getElementById("content").innerHTML = "<h1>Error: Unable to load page</h1>";
      const meta = metaTags.commingsoon || metaTags.home;
      document.title = meta.title;
      // Cập nhật meta tags cho trang commingsoon
      if (meta.description) {
        document.querySelector('meta[name="description"]').setAttribute("content", meta.description);
      }
      if (meta.keywords) {
        document.querySelector('meta[name="keywords"]').setAttribute("content", meta.keywords);
      }
      if (meta.ogTitle) {
        document.querySelector('meta[property="og:title"]').setAttribute("content", meta.ogTitle);
      }
      if (meta.ogDescription) {
        document.querySelector('meta[property="og:description"]').setAttribute("content", meta.ogDescription);
      }
      if (meta.ogImage) {
        document.querySelector('meta[property="og:image"]').setAttribute("content", meta.ogImage);
      }
      if (meta.twitterTitle) {
        document.querySelector('meta[name="twitter:title"]').setAttribute("content", meta.twitterTitle);
      }
      if (meta.twitterDescription) {
        document.querySelector('meta[name="twitter:description"]').setAttribute("content", meta.twitterDescription);
      }
      if (meta.twitterImage) {
        document.querySelector('meta[name="twitter:image"]').setAttribute("content", meta.twitterImage);
      }
    }
  }
}