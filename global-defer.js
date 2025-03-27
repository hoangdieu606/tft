
let indexer

/* Hàm active các nút ở menu: home, set14. comp, giải đấu, menu */
(function () {
    const currentPath = window.location.pathname; 
    document.querySelectorAll('.nav-list li > a').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
})();


/* Toggle Button Menu */
(function () {
    const body = document.body;
    const menuToggle = document.querySelector(".nav-list li > div");
    const menuList = document.querySelector(".menu-list");

    if (!menuToggle || !menuList) { return; }

    menuToggle.addEventListener('click', toggleMenu);

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        body.classList.toggle('active-menu');
        updateMenuHeight();
    }

    function updateMenuHeight() {
        if (body.classList.contains('active-menu')) {
            menuList.style.height = menuList.scrollHeight + 15 + 'px';
        } else {
            menuList.style.height = '0';
        }
    }
})();


/*  ToolTip START */
class TooltipDataIndexer {
    constructor(transformedData) {
        this.index = new Map();
        this.buildIndex(transformedData);
    }

    buildIndex(transformedData) {
        if (!transformedData) { return; }
        const arrays = [
            transformedData.champions?.mainChampions,
            transformedData.champions?.revivalChampions,
            transformedData.traits?.mainTraits,
            transformedData.traits?.revivalTraits,
            transformedData.augments?.mainAugs,
            transformedData.augments?.revivalAugs,
            transformedData.items?.mainItems,
            transformedData.items?.revivalItems
        ];
        for (const array of arrays) {
            if (!Array.isArray(array)) { continue; }
            for (const obj of array) {
                if (obj && obj.apiName) {
                    this.index.set(obj.apiName, obj);
                }
            }
        }
    }

    getTooltipData(apiName) {
        return this.index.get(apiName) || null;
    }
}

/*  Hàm render nội dung tooltip */
function renderTooltipContent(data) {
    // console.log(data)
    /* Renderr champions */
    if ("cost" in data) {
        const { name, cost, icon, traits, skillIcon, skillDesc, skillName, mana } = data
        return `
              <div class="champ-card champ-cost-${cost}"><div class="champ-header"><div><h3>${name}</h3><span>${cost}<img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/gold.png"></span></div><div><img src="${convertURL(icon)}" alt="${name}"><div class="traits">${traits.map(obj => `<span class="trait"><img src="${convertURL(obj.icon)}">${obj.name}</span>`).join('')}</div></div></div><div class="skill"><div class="skill-name"><div><img src="${convertURL(skillIcon || icon)}" alt="${skillName}"></div><div><h4>${skillName}</h4><p><img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/Mana.png">${mana}</p></div></div><div class="skill-desc"><p>${skillDesc}</p></div></div></div>
          `;
    }

    /* Render traits */
    if ("level" in data) {
        
        const cachedData = localStorage.getItem('postData');
        if(!cachedData) { return }
        const { name, desc, level, icon, champions, category } = data
        let renderChamp = "";

        if (cachedData) {
            const data = JSON.parse(cachedData)
            const apiNameIconCost = Object.fromEntries(data.champions.mainChampions.map(({apiName, icon, cost})=>[apiName, [icon,cost]]))
            renderChamp = champions.map(({apiName})=>`<li class="champ-cost-${apiNameIconCost[apiName][1]}"><img src="${convertURL(apiNameIconCost[apiName][0])}"></liv>`).join("")
            
        }

        return `
        <div class="trait-card trait-${category}">
                <div class="trait-header">
                    <div class="trait-style">
                        <img src="${convertURL(icon)}" alt="${name}">
                        <h3>${name}</h3>
                    </div>
                    <ul class="champ-list">${renderChamp}</ul>
                </div>
                <div class="trait-desc">
                    <div class="origin-desc"><p>${desc}</p></div>
                    <div class="origin-level"><ul>${level.map(value => `<li>${value}</li>`).join("")}</ul></div>
                </div>
            </div>
        `
        
    }
    /* Render items */
    if ("effects" in data) {
        const { name, icon, desc, tier, effects, category, composition } = data

        let iconComp = "";
        const cachedData = localStorage.getItem('postData');
        if (cachedData) {
            const data = JSON.parse(cachedData)
            const apiNameIcon = apiNameAndIcon(data.items.mainItems)

            iconComp = composition?.length ? `<span class="item-composition"><span><img src="${convertURL(apiNameIcon[composition[0]])}"></span><span>+</span><span><img src="${convertURL(apiNameIcon[composition[1]])}"></span></span>` : "";
        }


        return `
              <div class="items-item item-${category} tier-${tier}">
                  <div class="item-icon">
                      <img src="${convertURL(icon)}" alt="${name}">
                      <span>${tier}</span>
                      ${iconComp}
                  </div>
                  <div class="item-content">
                      <div class="item-title">
                        <div><h3>${name}</h3></div>
                        <span>${generateStatsHTML(effects)}</span>
                      </div>
                      <p>${desc}</p>
                  </div>
              </div>
  `
    }
    // Render augments
    if ("tier2" in data) {
        const { name, icon, desc, tier, tier2 } = data
        return `<div class="aug-item augs-tier-${tier} tier-${tier2}">
                 <div class="aug-icon">
                  <img src="${convertURL(icon)}" alt="${name} icon">
                  <span>${tier2}</span>
                </div>
                <div class="aug-content">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                </div>
                </div>`
    }

}

function showTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    // Lấy dữ liệu tooltip từ dataset
    const apiName = event.target.dataset.apiName;
    const data = indexer.getTooltipData(apiName);
    if (!data) { return; }

    tooltip.innerHTML = renderTooltipContent(data);
    document.body.appendChild(tooltip);

    // Kiểm tra nếu là thiết bị di động (touch event)
    const isTouchEvent = event.touches?.length > 0;
    const x = isTouchEvent ? event.touches[0].clientX : event.clientX;
    const y = isTouchEvent ? event.touches[0].clientY : event.clientY;

    let left = x + 10;
    let top = y + 10;

    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Điều chỉnh vị trí tránh tràn màn hình
    if (left + tooltipWidth > viewportWidth) { left = x - tooltipWidth - 10; }
    if (top + tooltipHeight > viewportHeight) { top = y - tooltipHeight - 10; }

    // Đảm bảo tooltip luôn nằm trong màn hình
    left = Math.max(10, Math.min(left, viewportWidth - tooltipWidth - 10));
    top = Math.max(10, Math.min(top, viewportHeight - tooltipHeight - 10));

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) { tooltip.remove(); }
}

/*  Thêm sự kiện lắng nghe cho mobile và desktop */
function setupTooltips() {
    const icons = document.querySelectorAll('[data-api-name]');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', showTooltip);
        icon.addEventListener('mouseout', hideTooltip);
        icon.addEventListener('touchstart', showTooltip, { passive: true });
        icon.addEventListener('touchend', hideTooltip);
    });
}

/* Hàm get Data cho ToolTip, Champions, augments, items, trait */
/* (async function () {
    let data = null;
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            controller.abort();
            console.warn("Fetch timed out after 10 seconds");
        }, 10000); // Timeout sau 10 giây

        const response = await fetch("https://hocvientft.hoquocdieu.workers.dev", {
            signal: controller.signal
        });
        clearTimeout(timeoutId); // Xóa timeout nếu fetch thành công

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        data = await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    let dataSource = 'fetch'; // Mặc định giả sử từ fetch

    // Nếu fetch thất bại, thử lấy từ localStorage
    if (!data) {
        const cachedData = localStorage.getItem('postData');
        if (cachedData) {
            data = JSON.parse(cachedData);
            dataSource = 'storage'; // Cập nhật nguồn khi lấy từ storage
        }
    }

    // Chỉ chạy nếu có data (từ fetch hoặc cache)
    if (data) {
        console.log(`Using data from: ${dataSource}`); // Log nguồn data

        if (typeof renderData === 'function') {
            renderData(data.champions.mainChampions);
        }
        if (typeof renderClassOrigin === 'function') {
            renderClassOrigin(data.traits.mainTraits, data.champions.mainChampions);
        }
        if (typeof renderArguments === 'function') {
            renderArguments(data.augments.mainAugs);
        }

        if (typeof renderItems === 'function') {
            renderItems(data.items.mainItems);
        }
        
        if (typeof renderComp === 'function') {
            renderComp(data);
        }
        

        indexer = new TooltipDataIndexer(data);
        setupTooltips();

        // Lưu data vào localStorage
        localStorage.setItem('postData', JSON.stringify(data));
    } else {
        console.log('No data available from fetch or storage');
    }
})(); */
/* Hàm get Data cho ToolTip, Champions, augments, items, trait */

/* Hàm get Data cho ToolTip, Champions, augments, items, trait */
(async function () {
    let data = null;
    let guidesData = null;
    let dataSource = 'fetch'; // Mặc định giả sử từ fetch
    let guidesDataSource = 'fetch'; // Mặc định giả sử từ fetch

    // Hàm fetch với timeout
    const fetchWithTimeout = async (url, timeout = 10000) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            controller.abort();
            console.warn(`Fetch timed out after ${timeout / 1000} seconds for URL: ${url}`);
        }, timeout);

        try {
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId); // Xóa timeout nếu fetch thành công
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} for URL: ${url}`);
            }
            return await response.json();
        } catch (error) {
            clearTimeout(timeoutId); // Đảm bảo xóa timeout nếu có lỗi
            throw error;
        }
    };

    // Lấy dữ liệu chính từ API hiện tại
    try {
        data = await fetchWithTimeout("https://hocvientft.hoquocdieu.workers.dev");
    } catch (error) {
        console.error("Error fetching main data from hocvientft:", error.message);
    }

    // Nếu fetch chính thất bại, thử lấy từ localStorage
    if (!data) {
        const cachedData = localStorage.getItem('postData');
        if (cachedData) {
            data = JSON.parse(cachedData);
            dataSource = 'storage'; // Cập nhật nguồn khi lấy từ storage
        }
    }

    // Lấy dữ liệu guidesData với thứ tự ưu tiên
    try {
        // Ưu tiên 1: Lấy từ comp-hocvientft
        guidesData = await fetchWithTimeout("https://comp-hocvientft.hoquocdieu.workers.dev/");
        guidesDataSource = 'comp-hocvientft';
    } catch (error) {
        console.error("Error fetching guidesData from comp-hocvientft:", error.message);
        try {
            // Ưu tiên 2: Lấy từ cdn.jsdelivr.net
            guidesData = await fetchWithTimeout("https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/guides.json");
            guidesDataSource = 'cdn.jsdelivr';
        } catch (error) {
            console.error("Error fetching guidesData from cdn.jsdelivr:", error.message);
            // Ưu tiên 3: Lấy từ localStorage
            const cachedGuidesData = localStorage.getItem('guidesData');
            if (cachedGuidesData) {
                guidesData = JSON.parse(cachedGuidesData);
                guidesDataSource = 'storage';
            }
        }
    }

    // Chỉ chạy nếu có data chính (từ fetch hoặc cache)
    if (data) {
        console.log(`Using main data from: ${dataSource}`); // Log nguồn data chính
        console.log(`Using guidesData from: ${guidesDataSource}`); // Log nguồn guidesData

        // Gọi các hàm render với dữ liệu chính
        if (typeof renderData === 'function') {
            renderData(data.champions.mainChampions);
        }
        if (typeof renderClassOrigin === 'function') {
            renderClassOrigin(data.traits.mainTraits, data.champions.mainChampions);
        }
        if (typeof renderArguments === 'function') {
            renderArguments(data.augments.mainAugs);
        }
        if (typeof renderItems === 'function') {
            renderItems(data.items.mainItems);
        }

        // Gọi renderComp với cả data và guidesData
        if (typeof renderComp === 'function') {
            renderComp(data, guidesData || {}); // Nếu không có guidesData, truyền object rỗng
        }

        // Khởi tạo tooltip
        indexer = new TooltipDataIndexer(data);
        setupTooltips();

        // Lưu data chính và guidesData vào localStorage
        localStorage.setItem('postData', JSON.stringify(data));
        if (guidesData) {
            localStorage.setItem('guidesData', JSON.stringify(guidesData));
        }
    } else {
        console.log('No main data available from fetch or storage');
    }
})();

/* Hàm active các nút ở menu: champions, origins, augments, items */
(function () {
    const currentPath = window.location.pathname;
    document.querySelectorAll('#champions-menu a').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
})();

/* Hàm filter các loại category-${index}-active */
(function () {
    const body = document.body;

    body.setAttribute("btn-filter", "category-0-active");

    document.querySelectorAll(".menu-btn-filter-category button").forEach((button, index) => {
        button.addEventListener('click', () => {
            body.setAttribute("btn-filter", `category-${index}-active`);
        });
    });
})();

