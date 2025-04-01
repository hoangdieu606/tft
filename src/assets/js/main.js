import '/src/assets/css/style.css';
import '/src/assets/css/champions.css';
import '/src/assets/css/traits.css';
import '/src/assets/css/items.css';
import '/src/assets/css/augments.css';
import '/src/assets/css/variables.css';
import '/src/assets/css/tierlist.css';

import { loadPage } from "/src/assets/js/routes.js";



// Chọn tất cả các link có thuộc tính data-page
const navLinks = document.querySelectorAll("a[data-page]");

function updateActiveLink(page) {
  
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute("data-page") === page);
    });
  }
  
// Hàm xử lý chuyển trang
function handleNavigation(page, addToHistory = true) {
  loadPage(page); // Tải nội dung trang
  updateActiveLink(page); // Cập nhật trạng thái active của menu

  if (addToHistory) {
    history.pushState({ page }, "", `/${page}`);
  }
}

// Xử lý sự kiện click trên các link
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    handleNavigation(link.getAttribute("data-page"));
  });
});

// Xử lý nút Back/Forward
window.addEventListener("popstate", e => {
  handleNavigation(e.state?.page || "tierlist", false);
});

// Load trang ban đầu
const initialPage = window.location.pathname.slice(1) || "tierlist";
handleNavigation(initialPage, false);
history.replaceState({ page: initialPage }, "", `/${initialPage}${window.location.hash}`);


/* FETCH */
document.addEventListener("DOMContentLoaded", async () => {
  try {
    let data = null;
    let guidesData = null;
    let dataSource = '';
    let guidesDataSource = '';

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
      return `${day}-${month}-${year}`;
    };

    // Lấy ngày hiện tại và ngày hôm trước
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const todayStr = formatDate(today); // Ví dụ: "31-03-2025"
    const yesterdayStr = formatDate(yesterday); // Ví dụ: "30-03-2025"

    // Lấy dữ liệu chính (data)
    try {
      // 1. Thử lấy file data-dd-mm-yyyy.json
      data = await fetchWithTimeout(`/data/auto/data-${todayStr}.json`);
      dataSource = `data-${todayStr}`;
    } catch {
      try {
        // 2. Thử lấy file data-(dd-1)-mm-yyyy.json
        data = await fetchWithTimeout(`/data/auto/data-${yesterdayStr}.json`);
        dataSource = `data-${yesterdayStr}`;
      } catch {
        try {
          // 3. Thử lấy file data-original.json
          data = await fetchWithTimeout(`/data/manual/data-original.json`);
          dataSource = 'data-original';
        } catch {
          // 4. Thử lấy từ localStorage
          const cachedData = localStorage.getItem('postData');
          if (cachedData) {
            data = JSON.parse(cachedData);
            dataSource = 'storage';
          }
          // Nếu không có dữ liệu, để data là null và tiếp tục (không ném lỗi)
        }
      }
    }

    // Lấy dữ liệu guides (guidesData)
    try {
      // 1. Thử lấy file guides-dd-mm-yyyy.json
      guidesData = await fetchWithTimeout(`/data/auto/guides-${todayStr}.json`);
      guidesDataSource = `guides-${todayStr}`;
    } catch {
      try {
        // 2. Thử lấy file guides-(dd-1)-mm-yyyy.json
        guidesData = await fetchWithTimeout(`/data/auto/guides-${yesterdayStr}.json`);
        guidesDataSource = `guides-${yesterdayStr}`;
      } catch {
        try {
          // 3. Thử lấy file guides-original.json
          guidesData = await fetchWithTimeout(`/data/manual/guides-original.json`);
          guidesDataSource = 'guides-original';
        } catch {
          // 4. Thử lấy từ localStorage
          const cachedGuidesData = localStorage.getItem('guidesData');
          if (cachedGuidesData) {
            guidesData = JSON.parse(cachedGuidesData);
            guidesDataSource = 'storage';
          }
          // Nếu không có dữ liệu, để guidesData là null và tiếp tục (không ném lỗi)
        }
      }
    }

    console.log(`Main data from: ${dataSource || 'none'}`);
    console.log(`Guides data from: ${guidesDataSource || 'none'}`);

    // Lưu dữ liệu vào localStorage (nếu có)
    try {
      if (data) {
        localStorage.setItem('postData', JSON.stringify(data));
      }
      if (guidesData) {
        localStorage.setItem('guidesData', JSON.stringify(guidesData));
      }
    } catch (e) {
      console.warn('localStorage save failed:', e);
    }

  } catch (error) {
    console.error('App initialization error:', error);
  }
});
