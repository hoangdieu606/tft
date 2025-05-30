import { generateStatsHTML } from '/src/assets/js/global.js';
import { setupStyleMenu, formatDateLocale, filterInput, initToggle } from '/src/assets/js/global.js'
import { createTierHead } from '/src/assets/js/tierlist.js'


// Render danh sách champions
export function renderChampions(data) {
    const championsContainer = document.querySelector('#champ-container');
    if (!championsContainer) return;

    const { champions, traits } = data

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

    document.querySelector(".champions-list").innerHTML = champions.map(({ name, icon, abilityIcon, cost, traits: traitChamps, ability, abilityName, apiName, stats }) => {
        const mana = `${stats.initialMana} / ${stats.mana}`
        const champTraits = traitChamps.map(id => {
            const objTrait = traits.find(trait => trait.id === id)
            return { name: objTrait.name, icon: objTrait.icon }
        })

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
                            <img src="${icon}" alt="${name}">
                            <div class="traits">${champTraits.map(obj => `<span class="trait"><img src="${obj.icon}" style="width: 18px; height: 18px;">${obj.name}</span>`).join("")}</div>
                        </div>
                    </div>
                    <div class="skill">
                            <div class="skill-name">
                                <div><img src="${abilityIcon || icon}" alt="${abilityName}"></div>
                                <div><h4>${abilityName}</h4><p><img src="/assets/images/Mana.png">${mana}</p></div>
                            </div>
                            <div class="skill-desc"><p>${ability}</p></div>
                    </div>
                </div>
                `
    }).join("");

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.champions-list>div', '.search-input.champ-input');
}

// Render danh sách traits
export function renderTraits(data) {
    const traitsList = document.querySelector(".traits-list");
    if (!traitsList) return;
    const { champions, traits } = data


    let previousCategory = null;

    traitsList.innerHTML = traits.map(({ icon, name, id, description, effects, type }) => {
        const traitChampions = champions.filter(champ => champ.traits.includes(id))
        let renderChamp = ''
        let renderEffects = ''

        if (traitChampions.length) {
            renderChamp = traitChampions.map(obj =>
                `<li class="champ-cost-${obj.cost}">
                 <img src="${obj.icon}" alt="${obj.name}" data-api-name="${obj.apiName}">
              </li>`
            ).join("");
        }

        if (effects) {
            for (const key in effects) {
                renderEffects += `<li>${key}: ${effects[key]}</li>`;
            }
        }

        let categoryHeader = "";
        if (type !== previousCategory) {
            categoryHeader = `<div class="category-group trait-${type}">${type}</div>`;
            previousCategory = type;
        }

        return `
                ${categoryHeader} 
                <div class="trait-card trait-${type}">
                    <div class="trait-header">
                        <div class="trait-style">
                            <img src="${icon}" alt="${name}">
                            <h3>${name}</h3>
                        </div>
                        <ul class="champ-list">${renderChamp}</ul>
                    </div>
                    <div class="trait-desc">
                        <div class="origin-desc"><p>${description}</p></div>
                        <div class="origin-level"><ul>${renderEffects}</ul></div>
                    </div>
                </div>
`;
    }).join("");

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.traits-list>div', '.search-input.champ-input');
}

// Render danh sách augments
export function renderAugments(data) {
    const augmentsList = document.querySelector(".augments-list");
    if (!augmentsList) return;

    const { augments } = data
    let previousCategory = null;
    const arrTier = {
        silver: "Lõi Bạc",
        gold: "Lõi Vàng",
        prism: "Lõi Kim Cương"
    }
    augmentsList.innerHTML = augments.map(({ icon, name, description, tier, tier2 }) => {

        let categoryHeader = "";
        if (tier !== previousCategory) {
            categoryHeader = `<div class="category-group augs-tier-${tier}">${arrTier[tier]}</div>`;
            previousCategory = tier;
        }

        return `${categoryHeader}<div class="aug-item augs-tier-${tier} tier-${tier2}">
             <div class="aug-icon">
              <img src="${icon}" alt="${name} icon">
              <span>${tier2}</span>
            </div>
            <div class="aug-content">
                <h3>${name}</h3>
                <p>${description}</p>
            </div>
            </div>`}).join('')

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.augments-list>div', '.search-input.champ-input');
}

// Render danh sách items
export function renderItems(data) {
    const itemsList = document.querySelector(".items-list");
    if (!itemsList) return;

    const { items } = data
    let previousCategory = null;
    const arrCategory = {
        craftables: "Trang Bị Thường",
        radiants: "Trang Bị Ánh Sáng",
        ornns: "Trang Bị Tạo Tác",
        supports: "Trang Bị Hỗ Trợ",
        emblems: "Ấn",
        set_items: "Trang Bị Độc Nhất",
        components: "Mảnh Trang Bị"
    }

    itemsList.innerHTML = items.map(({ name, icon, type, stats, description, tier, composition }) => {

        let iconComp = ''
        if (composition?.length) {
            const itemComps = composition.map(compoApi => items.find(item => item.apiName === compoApi))
            iconComp = `<span class="item-composition"><span><img src="${itemComps[0].icon}"></span><span>+</span><span><img src="${itemComps[1].icon}"></span></span>`
        }

        let categoryHeader = "";
        if (type !== previousCategory) {
            categoryHeader = `<div class="category-group item-${type}">${arrCategory[type]}</div>`;
            previousCategory = type;
        }

        return `${categoryHeader}
            <div class="items-item item-${type} tier-${tier}">
               <div class="item-icon">
                 <img src="${icon}" alt="${name}">
                 <span>${tier}</span>
                 ${iconComp}
                </div>
                <div class="item-content">
                    <div class="item-title">
                        <div><h3>${name}</h3></div>
                         <span>${generateStatsHTML(stats)}</span>
                    </div>
                    <p>${description}</p>
                 </div>
            </div>
    `
    }).join('')

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.items-list>div', '.search-input.champ-input');
}

// Render danh sách augments trong tierlist
export function renderTierlistAugments(data) {
    const augmentsList = document.querySelector(".tierlist-augments");
    if (!augmentsList) return;

    const { augments } = data
    const tierGroups = augments.reduce((acc, { name, icon, tier, tier2, apiName }) => {
        const html = `
        <div class="augments-child augs-tier-${tier} tier-${tier2}">
                 <img src="${icon}" alt="${name}" data-api-name="${apiName}">
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

    // Sử dụng hàm createTierHead để thêm nút toggle và last update
    // Sử dụng hàm initToggle để thiết lập trạng thái ẩn hiện tên
    const { fragment } = createTierHead(formatDateLocale, 'tier-aug');
    augmentsList.prepend(fragment);
    initToggle('tier-aug')

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.tierlist-augments .augments-child', '.search-input.champ-input');
}

// Render danh sách items trong tierlist
export function renderTierlistItems(data) {
    const itemsList = document.querySelector(".tierlist-items");
    if (!itemsList) return;

    const { items } = data
    const tierGroups = items.reduce((acc, { name, icon, type, tier, apiName }) => {
        const html = `
        <div class="item-child item-${type} tier-${tier}">
                 <img src="${icon}" alt="${name}" data-api-name="${apiName}">
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

    // Sử dụng hàm createTierHead để thêm nút toggle và last update
    // Sử dụng hàm initToggle để thiết lập trạng thái ẩn hiện tên
    const { fragment } = createTierHead(formatDateLocale, 'tier-item');
    itemsList.prepend(fragment);
    initToggle('tier-item')

    setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
    setupStyleMenu('.style-btn.champ-btn', '.style-menu.champ-btn', '.style-menu.champ-btn button');
    filterInput('.tierlist-items .item-child', '.search-input.champ-input');
}

