import { loadPage } from '/src/assets/js/routes.js';




/* Toggle Button Menu */
(function () {
    const body = document.body;
    const menuToggle = document.querySelector(".nav-list li > div");
    const menuList = document.querySelector(".menu-list");

    if (!menuToggle || !menuList) return;

    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Ngăn chặn sự kiện lan ra document
        toggleMenu();
    });

    document.addEventListener("click", (e) => {
        if (!menuList.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    menuList.addEventListener("click", (e) => {
        if (e.target.tagName === "A") closeMenu(); // Chỉ đóng khi click vào link
    });

    function toggleMenu() {
        const isActive = body.classList.toggle("active-menu");
        menuToggle.classList.toggle("active", isActive);
        menuList.style.height = isActive ? `${menuList.scrollHeight}px` : "0";
    }

    function closeMenu() {
        body.classList.remove("active-menu");
        menuToggle.classList.remove("active");
        menuList.style.height = "0";
    }
})();


/*  ToolTip START */
export let indexer;
export class TooltipDataIndexer {
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

export function renderTooltipContent(data) {
    /* Render champions */
    if ("cost" in data) {
        const { name, cost, icon, traits, skillIcon, skillDesc, skillName, mana } = data;
        return `
            <div class="champ-card champ-cost-${cost}">
                <div class="champ-header">
                    <div>
                        <h3>${name}</h3>
                        <span>${cost}<img src="/assets/images/gold.png" loading="lazy" alt="Gold"></span>
                    </div>
                    <div>
                        <img src="${icon}" alt="${name}">
                        <div class="traits">
                            ${traits.map(obj => `<span class="trait"><img src="${obj.icon}">${obj.name}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">
                        <div><img src="${skillIcon || icon}" alt="${skillName}"></div>
                        <div>
                            <h4>${skillName}</h4>
                            <p><img src="/assets/images/Mana.png" loading="lazy" alt="Mana">${mana}</p>
                        </div>
                    </div>
                    <div class="skill-desc"><p>${skillDesc}</p></div>
                </div>
            </div>`;
    }

    /* Render traits */
    if ("level" in data) {
        const { name, desc, level, icon, champions, category } = data;
        let renderChamp = "";

        const cachedData = localStorage.getItem('postData');
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            const apiNameIconCost = Object.fromEntries(parsedData.champions.mainChampions.map(({ apiName, icon, cost }) => [apiName, [icon, cost]]));
            renderChamp = champions.map(({ apiName }) =>
                `<li class="champ-cost-${apiNameIconCost[apiName][1]}"><img src="${apiNameIconCost[apiName][0]}"></li>`
            ).join("");
        }

        return `
            <div class="trait-card trait-${category}">
                <div class="trait-header">
                    <div class="trait-style">
                        <img src="${icon}" alt="${name}">
                        <h3>${name}</h3>
                    </div>
                    <ul class="champ-list">${renderChamp}</ul>
                </div>
                <div class="trait-desc">
                    <div class="origin-desc"><p>${desc}</p></div>
                    <div class="origin-level"><ul>${level.map(value => `<li>${value}</li>`).join("")}</ul></div>
                </div>
            </div>`;
    }

    /* Render items */
    if ("effects" in data) {
        const { name, icon, desc, tier, effects, category, composition } = data;
        let iconComp = "";
        const cachedData = localStorage.getItem('postData');

        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            const itemAndIcon = apiNameAndData(parsedData.items.mainItems, ['icon']);
            iconComp = composition?.length ?
                `<span class="item-composition">
                    <span><img src="${itemAndIcon[composition[0]][0]}"></span>
                    <span>+</span>
                    <span><img src="${itemAndIcon[composition[1]][0]}"></span>
                </span>` : "";
        }

        return `
            <div class="items-item item-${category} tier-${tier}">
                <div class="item-icon">
                    <img src="${icon}" alt="${name}">
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
            </div>`;
    }

    /* Render augments */
    if ("tier2" in data) {
        const { name, icon, desc, tier, tier2 } = data;
        return `
            <div class="aug-item augs-tier-${tier} tier-${tier2}">
                <div class="aug-icon">
                    <img src="${icon}" alt="${name} icon">
                    <span>${tier2}</span>
                </div>
                <div class="aug-content">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                </div>
            </div>`;
    }
}

export function showTooltip(event) {
    // Kiểm tra xem tooltip đã tồn tại chưa khi nhấp
    const existingTooltip = document.querySelector('.tooltip');
    if (event.type === 'click' && existingTooltip) {
        existingTooltip.remove();
        return; // Ẩn tooltip nếu nhấp lần nữa (toggle)
    }

    // Nếu không phải nhấp hoặc chưa có tooltip, tạo mới
    if (!existingTooltip) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';

        const apiName = event.target.dataset.apiName;
        const data = indexer.getTooltipData(apiName);
        if (!data) { return; }

        tooltip.innerHTML = renderTooltipContent(data);
        document.body.appendChild(tooltip);

        const x = event.clientX || (event.touches && event.touches[0].clientX);
        const y = event.clientY || (event.touches && event.touches[0].clientY);

        let left = x + 10;
        let top = y + 10;

        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (left + tooltipWidth > viewportWidth) { left = x - tooltipWidth - 10; }
        if (top + tooltipHeight > viewportHeight) { top = y - tooltipHeight - 10; }

        left = Math.max(10, Math.min(left, viewportWidth - tooltipWidth - 10));
        top = Math.max(10, Math.min(top, viewportHeight - tooltipHeight - 10));

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }
}

export function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) { tooltip.remove(); }
}

export function setupTooltips() {
    const icons = document.querySelectorAll('[data-api-name]');

    // Kiểm tra thiết bị có hỗ trợ cảm ứng không (mobile)
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    icons.forEach(icon => {
        if (isMobile) {
            // Trên mobile: chỉ dùng click để toggle tooltip
            icon.addEventListener('click', (event) => {
                event.preventDefault(); // Ngăn hành vi mặc định nếu cần
                showTooltip(event);
            });
        } else {
            // Trên desktop: hover và click đều hoạt động
            icon.addEventListener('mouseover', showTooltip);
            icon.addEventListener('mouseout', hideTooltip);
            icon.addEventListener('click', (event) => {
                event.preventDefault(); // Ngăn hành vi mặc định nếu cần
                showTooltip(event);
            });
        }
    });

    // Ẩn tooltip khi nhấp ra ngoài (chỉ áp dụng cho mobile)
    if (isMobile) {
        document.addEventListener('click', (event) => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip && !event.target.matches('[data-api-name]')) {
                hideTooltip();
            }
        });
    }
}

export function setIndexer(data) {
    indexer = new TooltipDataIndexer(data);
}

/*  Style Menu */
export function setupStyleMenu(styleBtnSelector, styleMenuSelector, styleOptionSelector) {
    const styleBtn = document.querySelector(styleBtnSelector);
    const styleMenu = document.querySelector(styleMenuSelector);
    const styleOptions = document.querySelectorAll(styleOptionSelector);

    if (!styleBtn || !styleMenu) return;

    // Xử lý đóng/mở menu phong cách
    styleBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Ngăn sự kiện click lan ra document
        styleBtn.classList.toggle('active');
        styleMenu.classList.toggle('show');
    });

    // Đóng menu khi click ra ngoài
    document.addEventListener('click', (e) => {
        if (!styleBtn.contains(e.target) && !styleMenu.contains(e.target)) {
            styleBtn.classList.remove('active');
            styleMenu.classList.remove('show');
        }
    });

    // Xử lý chọn phong cách
    styleOptions.forEach((option, index) => {
        option.addEventListener('click', async (e) => {
            e.stopPropagation(); // Ngăn sự kiện click lan ra document
            e.preventDefault();

            // Cập nhật UI
            styleOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Cập nhật text cho button
            const buttonText = option.textContent;
            styleBtn.innerHTML = `${buttonText}<i class="fa-solid fa-chevron-down"></i>`;

            // Cập nhật thuộc tính cho body
            if (option.tagName === "BUTTON") {
                document.body.setAttribute("btn-filter", `category-${index}-active`);
            }

            if (option.tagName === "A") {
                const page = option.getAttribute("data-page");
                if (page) {
                    // Lưu text hiện tại của button
                    const currentButtonText = styleBtn.innerHTML;

                    // Gọi loadPage
                    await loadPage(page);

                    // Sau khi loadPage hoàn thành, cập nhật lại text của button
                    const styleBtnAfterLoad = document.querySelector(styleBtnSelector);
                    if (styleBtnAfterLoad) {
                        styleBtnAfterLoad.innerHTML = currentButtonText;
                    }

                    // Cập nhật URL
                    history.pushState({ page }, "", `/${page}`);
                }
            }

            // Đóng menu
            styleBtn.classList.remove('active');
            styleMenu.classList.remove('show');
        });
    });
}

/* single LoadPage */
export function singleLoadPage(aTag) {
    const link = document.querySelector(aTag)
    console.log(link)
    link.addEventListener('click', async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const page = link.getAttribute("data-page");
        if (page) {
            await loadPage(page);
            history.pushState({ page }, "", `/${page}`);
        }
    })
}

/* apiNameAndData */
export function apiNameAndData(dataArray, fields, type) {
    return Object.fromEntries(
        dataArray.map(obj => [obj.apiName, fields.map(field => {
            if (obj[field] === undefined) {
                const setNumber = 10
                let iconURL

                iconURL = `/assets/images/set${setNumber}/${type}/${type === 'champions' ? "icon_" + obj.apiName : obj.apiName}.webp`
                return iconURL
            }
            return obj[field]
        })])
    );
}

export function formatDateLocale(date = new Date()) {
    const d = new Date(date);
    return new Intl.DateTimeFormat(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(d);
}

// NormalizeText
export function normalizeText(text) {
    return text.trim().toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
        .replace(/[\u0111]/g, "d")       // Chuyển "đ" thành "d"
        .replace(/\s+/g, " ");           // Thay nhiều khoảng trắng bằng 1 khoảng trắng
}

// Xử lý sự kiện khi nhập giá trị vào ô filterInput
export function filterInput(container, input) {
    const list = document.querySelectorAll(container);
    const tag = document.querySelector(input);
    if (!tag || !list) return;

    tag.addEventListener("input", function () {
        const searchTerm = normalizeText(this.value);
        list.forEach(item => {
            const itemText = normalizeText(item.textContent);
            if (itemText.includes(searchTerm)) {
                item.style.removeProperty("display");
            } else {
                item.style.display = "none";
            }
        });
    });
}

// customTooltip
export function customTooltip(message, x, y, duration = 2000) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('custom-tooltip');
    tooltip.textContent = message;

    // Tính toán vị trí dựa trên scroll
    tooltip.style.left = `${x + window.scrollX + 10}px`;
    tooltip.style.top = `${y + window.scrollY + 10}px`;

    document.body.appendChild(tooltip);

    // Thêm lớp show để kích hoạt hiệu ứng
    requestAnimationFrame(() => {
        tooltip.classList.add('show');
    });

    setTimeout(() => {
        tooltip.classList.remove('show'); // Xóa lớp show trước khi xóa
        setTimeout(() => tooltip.remove(), 200); // Đợi hiệu ứng hoàn tất
    }, duration);
}

// Toggle Name
/**
 * Cấu hình mặc định cho các nút toggle.
 * @constant
 * @type {Object}
 * @property {string} DISPLAY_VARIABLE - Tên thuộc tính CSS variable (ví dụ: '--an-tierlist').
 * @property {Object} DISPLAY_VALUES - Giá trị hiển thị (active: 'flex', inactive: 'none').
 * @property {Object} LABEL_TEXT - Văn bản cho label (active: 'Ẩn Tên', inactive: 'Hiện Tên').
 */
const TOGGLE_CONFIG = {
    DISPLAY_VARIABLE: '--an',
    DISPLAY_VALUES: { active: 'flex', inactive: 'none' },
    LABEL_TEXT: { active: 'Ẩn Tên', inactive: 'Hiện Tên' },
};

/**
 * Đồng bộ trạng thái của một nút toggle, cập nhật DOM, CSS variable, và localStorage.
 * @param {string} toggleId - ID của nút toggle (ví dụ: 'toggle1').
 * @param {boolean} isActive - Trạng thái hiển thị (true: hiển thị, false: ẩn).
 * @param {Object} [config=TOGGLE_CONFIG] - Cấu hình tùy chỉnh cho nút toggle.
 * @returns {void}
 */
export function syncToggleState(toggleId, isActive, config = TOGGLE_CONFIG) {
    const toggleElement = document.querySelector(`#${toggleId}`);
    if (!toggleElement) {
        console.warn(`Toggle with ID ${toggleId} not found`);
        return;
    }

    const labelElement = toggleElement.querySelector('.toggle-label');
    const rootElement = document.documentElement;
    const displayPropertyName = `${config.DISPLAY_VARIABLE}-${toggleId}`;

    toggleElement.classList.toggle('active', isActive);
    rootElement.style.setProperty(displayPropertyName, isActive ? config.DISPLAY_VALUES.active : config.DISPLAY_VALUES.inactive);

    if (labelElement) {
        labelElement.textContent = isActive ? config.LABEL_TEXT.active : config.LABEL_TEXT.inactive;
    }

    localStorage.setItem(`toggle_${toggleId}`, isActive ? config.DISPLAY_VALUES.active : config.DISPLAY_VALUES.inactive);
}

/**
 * Khởi tạo một nút toggle, khôi phục trạng thái từ localStorage và gắn sự kiện click.
 * @param {string} toggleId - ID của nút toggle (ví dụ: 'toggle1').
 * @param {Object} [config=TOGGLE_CONFIG] - Cấu hình tùy chỉnh cho nút toggle.
 * @returns {void}
 */
export function initToggle(toggleId, displayDefault = true, config = TOGGLE_CONFIG) {
    const toggleElement = document.querySelector(`#${toggleId}`);
    if (!toggleElement) {
        console.warn(`Toggle with ID ${toggleId} not found`);
        return;
    }

    const storedState = localStorage.getItem(`toggle_${toggleId}`);
    let isActive

    if (storedState) {
        isActive = storedState === config.DISPLAY_VALUES.active;
    } else {
        isActive = displayDefault
    }

    syncToggleState(toggleId, isActive, config);

    toggleElement.addEventListener('click', () => {
        const isCurrentlyActive = localStorage.getItem(`toggle_${toggleId}`) === config.DISPLAY_VALUES.active;
        syncToggleState(toggleId, !isCurrentlyActive, config);
    });
}

/*  Render icon AD, AP, AS, ...items đang dùng */
export function generateStatsHTML(effects) {
    if (!effects) { return ""; }
    // Định nghĩa mapping giữa key và thông tin hình ảnh
    const statIcons = {
        "AD": { url: "/assets/images/AD.png", isPercent: true },
        "AP": { url: "/assets/images/AP.png", isPercent: false },
        "Mana": { url: "/assets/images/Mana.png", isPercent: false },
        "Armor": { url: "/assets/images/Armor.png", isPercent: false },
        "MagicResist": { url: "/assets/images/MR.png", isPercent: false },
        "Health": { url: "/assets/images/Health.png", isPercent: false },
        "AS": { url: "/assets/images/AS.png", isPercent: true },
        "CritChance": { url: "/assets/images/Crit.png", isPercent: true },
        "{1543aa48}": { url: "/assets/images/DA.png", isPercent: true },
        "PercentDR": { url: "/assets/images/DR.png", isPercent: true },
        "StatOmnivamp": { url: "/assets/images/SV.png", isPercent: true }
    };

    let html = "";

    // Duyệt qua từng key trong đối tượng effects
    for (const [stat, value] of Object.entries(effects)) {
        // Bỏ qua nếu stat không có trong mapping
        if (!statIcons[stat]) { continue; }

        const { url, isPercent } = statIcons[stat];
        // Chuyển đổi giá trị thành chuỗi
        let displayValue = value;
        if (typeof value === "number") {
            // Nếu là phần trăm và giá trị < 1, nhân 100
            if (isPercent && value < 1) {
                displayValue = Math.round(value * 100);
            } else {
                displayValue = Math.round(value);
            }
        }

        // Thêm ký hiệu % nếu là percent
        const suffix = isPercent ? "%" : "";

        // Tạo thẻ HTML
        html += `<span><img src="${url}" class="icon-stat">+${displayValue}${suffix}</span>`;
    }

    return html.trim();
}

export const Variables = {
    SET_NUMBER: 14,
    SET_NUMBER_REVIVAL: 10
}