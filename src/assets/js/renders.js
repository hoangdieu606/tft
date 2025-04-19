import { convertURL, apiNameAndIcon, generateStatsHTML } from '/src/assets/js/global.js';
import { setupStyleMenu } from '/src/assets/js/global-defer.js'
import { syncNameDisplayState } from '/src/assets/js/tierlist.js'


// Render danh sách tướng
export function renderChampions(mainChampions) {
    const championsContainer = document.querySelector('#champ-container');
    if (!championsContainer) return;

    let previousCategory = null;
    const arrCategory = {
        1: "Tướng 1 Vàng",
        2: "Tướng 2 Vàng",
        3: "Tướng 3 Vàng",
        4: "Tướng 4 Vàng",
        5: "Tướng 5 Vàng",
        6: "Tướng 6 Vàng",
        general: ""
    }

    document.querySelector(".champions-list").innerHTML = mainChampions.map(({ name, cost, icon, traits, skillIcon, skillDesc, skillName, mana }) => {

        let categoryHeader = "";
        if (cost !== previousCategory) {
            categoryHeader = `<div class="category-group champ-cost-${cost}">${arrCategory[cost] || arrCategory.general}</div>`;
            previousCategory = cost;
        }

        return `${categoryHeader}
                <div class="champ-card champ-cost-${cost}">
                    <div class="champ-header">
                        <div>
                            <h3>${name}</h3>
                            <span>${cost}<img src="/assets/images/gold.png" alt="icon-gold"></span>
                        </div>
                        <div>
                            <img src="${convertURL(icon)}" alt="${name}">
                            <div class="traits">${traits.map(obj => `<span class="trait"><img src="${convertURL(obj.icon)}" style="width: 18px; height: 18px;">${obj.name}</span>`).join("")}</div>
                        </div>
                    </div>
                    <div class="skill">
                            <div class="skill-name">
                                <div><img src="${convertURL(skillIcon || icon)}" alt="${skillName}"></div>
                                <div><h4>${skillName}</h4><p><img src="/assets/images/Mana.png">${mana}</p></div>
                            </div>
                            <div class="skill-desc"><p>${skillDesc}</p></div>
                    </div>
                </div>
                `
    }).join("");

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.champions-list>div', '.search-input.champ-input');
}

// Render danh sách tộc/nguồn gốc
export function renderTraits(mainTraits, mainChampions) {
    const traitsList = document.querySelector(".traits-list");
    if (!traitsList) return;
    const champIcons = Object.fromEntries(mainChampions.map(({ name, icon, cost, apiName }) => [name, [icon, cost, apiName]]));

    let previousCategory = null;

    traitsList.innerHTML = mainTraits.map(({ name, desc, level, icon, champions, category }) => {
        let renderChamp;

        if (champions.length) {
            renderChamp = champions.map(obj =>
                `<li class="champ-cost-${champIcons[obj.name][1]}">
                 <img src="${convertURL(champIcons[obj.name][0])}" alt="${champIcons[obj.name][1]}" data-api-name="${obj.apiName}">
              </li>`
            ).join("");
        } else {
            const obj1 = Object.fromEntries(desc?.replace(/[.,!?]/g, "").split(" ").map(word => [word, true]));
            const setKeys1 = new Set(Object.keys(obj1));

            renderChamp = Object.keys(champIcons)
                .filter(champion => setKeys1.has(champion))
                .map(champion =>
                    `<li class="champ-cost-${champIcons[champion][1]}">
            <img src="${convertURL(champIcons[champion][0])}" alt="${champion}" data-api-name="${champIcons[champion][2]}">
        </li>`
                )
                .join("");
        }

        let categoryHeader = "";
        if (category !== previousCategory) {
            categoryHeader = `<div class="category-group trait-${category}">${category}</div>`;
            previousCategory = category;
        }

        return `
${categoryHeader} 
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
`;
    }).join("");

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.traits-list>div', '.search-input.champ-input');
}

// Render danh sách tăng cường
export function renderAugments(mainAugs) {
    const augmentsList = document.querySelector(".augments-list");
    if (!augmentsList) return;
    let previousCategory = null;
    const arrTier = {
        silver: "Lõi Bạc",
        gold: "Lõi Vàng",
        prism: "Lõi Kim Cương"
    }
    augmentsList.innerHTML = mainAugs.map(({ name, icon, desc, tier, tier2, apiName }) => {

        let categoryHeader = "";
        if (tier !== previousCategory) {
            categoryHeader = `<div class="category-group augs-tier-${tier}">${arrTier[tier]}</div>`;
            previousCategory = tier;
        }

        return `${categoryHeader}<div class="aug-item augs-tier-${tier} tier-${tier2}">
             <div class="aug-icon">
              <img src="${convertURL(icon)}" alt="${name} icon">
              <span>${tier2}</span>
            </div>
            <div class="aug-content">
                <h3>${name}</h3>
                <p>${desc}</p>
            </div>
            </div>`}).join('')

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.augments-list>div', '.search-input.champ-input');
}

// Render danh sách trang bị
export function renderItems(mainItems) {
    const itemsList = document.querySelector(".items-list");
    if (!itemsList) return;
    const apiNameIcon = apiNameAndIcon(mainItems)
    let previousCategory = null;
    const arrCategory = {
        core: "Trang Bị Thường",
        radiant: "Trang Bị Ánh Sáng",
        artifact: "Trang Bị Tạo Tác",
        support: "Trang Bị Hỗ Trợ",
        emblem: "Ấn",
        synergy: "Trang Bị Khác",
        component: "Mảnh Trang Bị"
    }

    itemsList.innerHTML = mainItems.map(({ name, icon, category, effects, desc, tier, apiName, composition }) => {

        const iconComp = composition?.length ? `<span class="item-composition"><span><img src="${convertURL(apiNameIcon[composition[0]])}"></span><span>+</span><span><img src="${convertURL(apiNameIcon[composition[1]])}"></span></span>` : "";

        let categoryHeader = "";
        if (category !== previousCategory) {
            categoryHeader = `<div class="category-group item-${category}">${arrCategory[category]}</div>`;
            previousCategory = category;
        }

        return `${categoryHeader}
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
    }).join('')

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.items-list>div', '.search-input.champ-input');
}

// Render danh sách augments trong tierlist
export function renderTierlistAugments(mainAugs) {
    const augmentsList = document.querySelector(".tierlist-augments");
    if (!augmentsList) return;

    const tierGroups = mainAugs.reduce((acc, { name, icon, tier, tier2, apiName }) => {

        const html = `
        <div class="augments-child augs-tier-${tier} tier-${tier2}">
                 <img src="${convertURL(icon)}" alt="${name}" data-api-name="${apiName}">
                 <span>${name}</span>
        </div>
        `;

        switch (tier2) {
            case "S": acc.groupS += html; break;
            case "A": acc.groupA += html; break;
            case "B": acc.groupB += html; break;
            case "C": acc.groupC += html; break;
            /* case "Synergy": acc.groupSynergy += html; break;
            default: acc.groupSynergy += html; break; */
        }

        return acc;
    }, { groupS: "", groupA: "", groupB: "", groupC: "", groupSynergy: "" });

    function createTierTemplate(tier, groupContent) {
        return `
        <div class="tier-container comp-tier-${tier}">
          <div class="comp-list">
            <div class="tier-title">
              <img src="/assets/images/${tier}-Tier.webp" loading="lazy" alt="${tier} Tier">
              <img src="/assets/images/${tier}-Tier-Wide.webp" loading="lazy" alt="${tier} Tier Wide">
              <img src="/assets/images/${tier}-Tier-Texture.webp" loading="lazy" alt="${tier} Tier Texture">
            </div>
            <div class="tier-group">${groupContent}</div>
          </div>
          <div class="post-comp"></div>
        </div>`;
    }

    augmentsList.innerHTML =
        createTierTemplate("S", tierGroups.groupS) +
        createTierTemplate("A", tierGroups.groupA) +
        createTierTemplate("B", tierGroups.groupB) +
        createTierTemplate("C", tierGroups.groupC);

    // Thêm nút toggle hiện/ẩn tên
    const toggleContainer = document.createElement("div");
    toggleContainer.className = "toggle-container tierlist-toggle";
    toggleContainer.innerHTML = `
    <span class="toggle-label">Hiện Tên</span>
    <div class="toggle"></div>
  `;
    augmentsList.insertBefore(toggleContainer, augmentsList.firstChild);


    // Thiết lập trạng thái hiện/ẩn tên
    const toggle = toggleContainer.querySelector(".toggle");
    const body = document.body;
    const savedState = localStorage.getItem("nameDisplay") === "flex";
    syncNameDisplayState(savedState);

    toggle.addEventListener("click", function () {
        const isActive = body.classList.contains("name-active");
        syncNameDisplayState(!isActive);
    });

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.tierlist-augments .augments-child', '.search-input.champ-input');
}

// Render danh sách trang bị trong tierlist
export function renderTierlistItems(mainItems) {
    const itemsList = document.querySelector(".tierlist-items");
    if (!itemsList) return;

    const tierGroups = mainItems.reduce((acc, { name, icon, category, tier, apiName }) => {
        const html = `
        <div class="item-child item-${category} tier-${tier}">
                 <img src="${convertURL(icon)}" alt="${name}" data-api-name="${apiName}">
                 <span>${name}</span>
        </div>
        `;

        switch (tier) {
            case "S": acc.groupS += html; break;
            case "A": acc.groupA += html; break;
            case "B": acc.groupB += html; break;
            case "C": acc.groupC += html; break;
            case "Synergy": acc.groupSynergy += html; break;
            default: acc.groupSynergy += html; break;
        }

        return acc;
    }, { groupS: "", groupA: "", groupB: "", groupC: "", groupSynergy: "" });

    function createTierTemplate(tier, groupContent) {
        return `
        <div class="tier-container comp-tier-${tier}">
          <div class="comp-list">
            <div class="tier-title">
              <img src="/assets/images/${tier}-Tier.webp" loading="lazy" alt="${tier} Tier">
              <img src="/assets/images/${tier}-Tier-Wide.webp" loading="lazy" alt="${tier} Tier Wide">
              <img src="/assets/images/${tier}-Tier-Texture.webp" loading="lazy" alt="${tier} Tier Texture">
            </div>
            <div class="tier-group">
            ${tier === "X" ? "<div class='unranked'>Không Xếp Hạng</div>" : ""}
            ${groupContent}
            </div>
          </div>
        </div>`;
    }

    itemsList.innerHTML =
        createTierTemplate("S", tierGroups.groupS) +
        createTierTemplate("A", tierGroups.groupA) +
        createTierTemplate("B", tierGroups.groupB) +
        createTierTemplate("C", tierGroups.groupC) +
        createTierTemplate("X", tierGroups.groupSynergy);

    // Thêm nút toggle hiện/ẩn tên
    const toggleContainer = document.createElement("div");
    toggleContainer.className = "toggle-container tierlist-toggle";
    toggleContainer.innerHTML = `
    <span class="toggle-label">Hiện Tên</span>
    <div class="toggle"></div>
  `;
    itemsList.insertBefore(toggleContainer, itemsList.firstChild);


    // Thiết lập trạng thái hiện/ẩn tên
    const toggle = toggleContainer.querySelector(".toggle");
    const body = document.body;
    const savedState = localStorage.getItem("nameDisplay") === "flex";
    syncNameDisplayState(savedState);

    toggle.addEventListener("click", function () {
        const isActive = body.classList.contains("name-active");
        syncNameDisplayState(!isActive);
    });

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.tierlist-items .item-child', '.search-input.champ-input');
}

function normalizeText(text) {
    return text.trim().toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
        .replace(/[\u0111]/g, "d")       // Chuyển "đ" thành "d"
        .replace(/\s+/g, " ");           // Thay nhiều khoảng trắng bằng 1 khoảng trắng
}

// Xử lý sự kiện khi nhập giá trị vào ô filterInput
function filterInput(container, input) {
    const list = document.querySelectorAll(container);
    const tag = document.querySelector(input);
    if (!tag || !list) return;

    tag.addEventListener("input", function () {
        const searchTerm = normalizeText(this.value);
        list.forEach(item => {
            const itemText = normalizeText(item.textContent);
            if (itemText.includes(searchTerm)) {
                item.style.removeProperty("display"); // Xóa thuộc tính display để dùng lại giá trị gốc
            } else {
                item.style.display = "none"; // Ẩn nếu không khớp
            }
        });
    });
}

