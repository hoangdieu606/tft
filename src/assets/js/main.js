import '/src/assets/css/style.css';
import '/src/assets/css/champions.css';
import '/src/assets/css/traits.css';
import '/src/assets/css/items.css';
import '/src/assets/css/augments.css';
import '/src/assets/css/variables.css';
import '/src/assets/css/tierlist.css';
import '/src/assets/css/builder.css';

import { loadPage } from "/src/assets/js/routes.js";

// Chọn tất cả các link có thuộc tính data-page
const navLinks = document.querySelectorAll("a[data-page]");

function updateActiveLink(page) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute("data-page") === page);
  });
}

// Hàm fetch với timeout
const fetchWithTimeout = async (url, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) throw new Error(`HTTP error ${response.status} for ${url}`);
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

// Hàm định dạng ngày thành dd-mm-yyyy
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

// Hàm tải dữ liệu
const fetchData = async () => {
  let data = null;
  let guidesData = null;
  let hexIndexData = null;

  // Lấy ngày hiện tại và ngày hôm trước
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const todayStr = formatDate(today);
  const yesterdayStr = formatDate(yesterday);

  // Lấy dữ liệu chính (data)
  try {
    data = await fetchWithTimeout(`/data/auto/data-${todayStr}.json`);
  } catch {
    try {
      data = await fetchWithTimeout(`/data/auto/data-${yesterdayStr}.json`);
    } catch {
      try {
        data = await fetchWithTimeout(`/data/manual/data-original.json`);
      } catch {
        const cachedData = localStorage.getItem('postData');
        if (cachedData) {
          data = JSON.parse(cachedData);
        }
      }
    }
  }

  // Lấy dữ liệu guides (guidesData)
  try {
    guidesData = await fetchWithTimeout(`/data/auto/guides-${todayStr}.json`);
  } catch {
    try {
      guidesData = await fetchWithTimeout(`/data/auto/guides-${yesterdayStr}.json`);
    } catch {
      try {
        guidesData = await fetchWithTimeout(`/data/manual/guides-original.json`);
      } catch {
        const cachedGuidesData = localStorage.getItem('guidesData');
        if (cachedGuidesData) {
          guidesData = JSON.parse(cachedGuidesData);
        }
      }
    }
  }

  // Lấy dữ liệu hexIndex
  try {
    hexIndexData = await fetchWithTimeout(`/data/manual/hex-index-set14.json`);
  } catch {
    console.warn('hex-index-set14 fetch failed');
  }

  // Lưu dữ liệu vào localStorage (nếu có)
  try {
    if (data) {
      localStorage.setItem('postData', JSON.stringify(data));
    }
    if (guidesData) {
      localStorage.setItem('guidesData', JSON.stringify(guidesData));
    }
    if (hexIndexData) {
      localStorage.setItem('hexIndexData', JSON.stringify(hexIndexData));
    }
  } catch (e) {
    console.warn('localStorage save failed:', e);
  }

  return { data, guidesData, hexIndexData };
};

// Hàm xử lý chuyển trang
async function handleNavigation(page, addToHistory = true) {
  const { data, guidesData, hexIndexData } = await fetchData();
  loadPage(page, { data, guidesData, hexIndexData });
  updateActiveLink(page);

  if (addToHistory) {
    const currentUrl = new URL(window.location);
    const newUrl = new URL(`/${page}`, window.location.origin);
    
    // Chỉ giữ query parameter 'comp' cho trang builder
    if (page === 'builder') {
      newUrl.search = currentUrl.search; // Giữ nguyên query string
    } else {
      // Xóa 'comp' cho các trang khác, giữ các query parameter khác
      const params = new URLSearchParams(currentUrl.search);
      params.delete('comp');
      newUrl.search = params.toString();
    }
    
    history.pushState({ page }, "", newUrl);
  }
}

// Xử lý sự kiện click trên các link
navLinks.forEach(link => {
  link.addEventListener("click", async (e) => {
    e.preventDefault();
    await handleNavigation(link.getAttribute("data-page"));
  });
});

// Xử lý nút Back/Forward
window.addEventListener("popstate", async (e) => {
  await handleNavigation(e.state?.page || "tierlist", false);
});

// Khởi tạo tooltip và load trang ban đầu
document.addEventListener('DOMContentLoaded', () => {
  const initialPage = window.location.pathname.slice(1) || "tierlist";
  handleNavigation(initialPage, false).then(() => {
    const currentUrl = new URL(window.location);
    const newUrl = new URL(`/${initialPage}`, window.location.origin);
    
    // Chỉ giữ query parameter 'comp' cho trang builder
    if (initialPage === 'builder') {
      newUrl.search = currentUrl.search; // Giữ nguyên query string
    } else {
      // Xóa 'comp' cho các trang khác
      const params = new URLSearchParams(currentUrl.search);
      params.delete('comp');
      newUrl.search = params.toString();
    }
    newUrl.hash = currentUrl.hash; // Giữ nguyên hash (nếu có)
    history.replaceState({ page: initialPage }, "", newUrl);
  });
});