
let indexer

/* Hàm active các nút ở menu: home, set14. comp, giải đấu, menu */
(function () {
    const currentPath = window.location.pathname.split("/").pop(); // Lấy tên file trang hiện tại
    document.querySelectorAll('.nav-list li > a').forEach(link => {
        if (link.getAttribute("href") === currentPath) {
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

    /* Renderr champions */
    if ("cost" in data) {
        const { name, cost, icon, traits, skillIcon, skillDesc, skillName, mana } = data
        return `
              <div class="champ-card champ-cost-${cost}"><div class="champ-header"><div><h3>${name}</h3><span>4 <img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/gold.png"></span></div><div><img src="${convertURL(icon)}" alt="${name}"><div class="traits">${traits.map(obj => `<span class="trait"><img src="${convertURL(obj.icon)}">${obj.name}</span>`).join('')}</div></div></div><div class="skill"><div class="skill-name"><div><img src="${convertURL(skillIcon)}" alt="${skillName}"></div><div><h4>${skillName}</h4><p><img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/Mana.png">${mana}</p></div></div><div class="skill-desc"><p>${skillDesc}</p></div></div></div>
          `;
    }

    /* Render origin class */
    if ("level" in data) {
        const { name, icon, desc, level } = data
    }
    /* Render item */
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
    const icons = document.querySelectorAll('img[data-api-name]');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', showTooltip);
        icon.addEventListener('mouseout', hideTooltip);
        icon.addEventListener('touchstart', showTooltip, { passive: true });
        icon.addEventListener('touchend', hideTooltip);
    });
}

/* Hàm get Data cho ToolTip, Champions, augments, items, trait */
(async function () {
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

        indexer = new TooltipDataIndexer(data);
        setupTooltips();

        // Lưu data vào localStorage
        localStorage.setItem('postData', JSON.stringify(data));
    } else {
        console.log('No data available from fetch or storage');
    }
})();
/* Hàm get Data cho ToolTip, Champions, augments, items, trait */


/* Hàm active các nút ở menu: champions, origins, augments, items */
(function () {
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll('#champions-menu a').forEach(link => {
        if (link.getAttribute("href") === currentPath) {
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

