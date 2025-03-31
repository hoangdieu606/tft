import { convertURL, apiNameAndIcon, generateStatsHTML } from '/src/assets/js/global.js';
import { loadPage } from '/src/assets/js/routes.js';

export let indexer;



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

    menuList.addEventListener('click', () => {
        menuList.style.height = '0';
        body.classList.remove("active-menu")
    })
})();

/*  ToolTip START */
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
                        <img src="${convertURL(icon)}" alt="${name}">
                        <div class="traits">
                            ${traits.map(obj => `<span class="trait"><img src="${convertURL(obj.icon)}">${obj.name}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">
                        <div><img src="${convertURL(skillIcon || icon)}" alt="${skillName}"></div>
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
                `<li class="champ-cost-${apiNameIconCost[apiName][1]}"><img src="${convertURL(apiNameIconCost[apiName][0])}"></li>`
            ).join("");
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
            </div>`;
    }

    /* Render items */
    if ("effects" in data) {
        const { name, icon, desc, tier, effects, category, composition } = data;
        let iconComp = "";

        const cachedData = localStorage.getItem('postData');
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            const apiNameIcon = apiNameAndIcon(parsedData.items.mainItems);
            iconComp = composition?.length ?
                `<span class="item-composition">
                    <span><img src="${convertURL(apiNameIcon[composition[0]])}"></span>
                    <span>+</span>
                    <span><img src="${convertURL(apiNameIcon[composition[1]])}"></span>
                </span>` : "";
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
            </div>`;
    }

    /* Render augments */
    if ("tier2" in data) {
        const { name, icon, desc, tier, tier2 } = data;
        return `
            <div class="aug-item augs-tier-${tier} tier-${tier2}">
                <div class="aug-icon">
                    <img src="${convertURL(icon)}" alt="${name} icon">
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
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    const apiName = event.target.dataset.apiName;
    const data = indexer.getTooltipData(apiName);
    if (!data) { return; }

    tooltip.innerHTML = renderTooltipContent(data);
    document.body.appendChild(tooltip);

    const isTouchEvent = event.touches?.length > 0;
    const x = isTouchEvent ? event.touches[0].clientX : event.clientX;
    const y = isTouchEvent ? event.touches[0].clientY : event.clientY;

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

export function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) { tooltip.remove(); }
}

export function setupTooltips() {
    const icons = document.querySelectorAll('[data-api-name]');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', showTooltip);
        icon.addEventListener('mouseout', hideTooltip);
        icon.addEventListener('touchstart', showTooltip, { passive: true });
        icon.addEventListener('touchend', hideTooltip);
    });
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


export function setIndexer(data) {
    indexer = new TooltipDataIndexer(data);
}


