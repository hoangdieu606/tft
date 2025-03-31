import { convertURL, apiNameAndIcon } from '/src/assets/js/global.js';
import { setupTooltips, setupStyleMenu } from '/src/assets/js/global-defer.js';


export function renderComp(data, guidesData) {
  const tierCompContainer = document.querySelector(".tier-comp-container");
  if (!tierCompContainer) return;
  
  const itemAndIcon = apiNameAndIcon(data.items.mainItems);
  const augsAndIcon = apiNameAndIcon(data.augments.mainAugs);
  const champAndIconCost = Object.fromEntries(data.champions.mainChampions.map(obj => [obj.apiName, [obj.icon, obj.cost, obj.name, obj.traits]]))

  // tierList
  tierList(guidesData.guides, champAndIconCost, itemAndIcon, augsAndIcon);
 
  
  tierCompContainer.removeEventListener("click", handleIconClick);
  tierCompContainer.addEventListener("click", handleIconClick);

  function handleIconClick(e) {
    const clickedLink = e.target.closest(".hexagon-tier-champ a");
    if (!clickedLink) return;
    
    e.preventDefault();
    
    const hashtag = clickedLink.hash.substring(1);
    const index = clickedLink.getAttribute("data-index");
    const postCompTag = clickedLink.closest(".comp-list").nextElementSibling;
    const tierContainer = clickedLink.closest(".tier-container");
    const currentHash = window.location.hash.substring(1);

    if (hashtag === currentHash) {
      tierContainer.classList.toggle("hide-post-comp");
      clickedLink.classList.toggle("active");
      history.pushState(null, '', tierContainer.classList.contains("hide-post-comp") ? window.location.pathname : `#${hashtag}`);
      return;
    }

    const allTierContainers = document.querySelectorAll(".tier-container");
    const allIcons = document.querySelectorAll(".hexagon-tier-champ a");

    allTierContainers.forEach(tier => tier.classList.add("hide-post-comp"));
    allIcons.forEach(icon => icon.classList.remove("active"));

    tierContainer.classList.remove("hide-post-comp");
    clickedLink.classList.add("active");
    renderPostComp(guidesData.guides[index], champAndIconCost, itemAndIcon, augsAndIcon, postCompTag);

    requestAnimationFrame(() => {
      scrollToPost(tierContainer, postCompTag);
    });

    history.pushState(null, '', `#${hashtag}`);
  }

  // Xử lý hash URL ngay sau khi render xong
  handleHashURL(data, guidesData);

  // Xử lý sự kiện loadPage khi nhấn vào link
  setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');

}

export function scrollToPost(tierContainer, postCompTag) {
  const tierRect = tierContainer.getBoundingClientRect();
  const postCompRect = postCompTag.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const headerOffset = 60;
  
  const idealScrollPosition = window.pageYOffset + tierRect.top - headerOffset;
  
  if (postCompRect.bottom > viewportHeight || tierRect.top < headerOffset) {
    window.scrollTo({
      top: idealScrollPosition,
      behavior: 'smooth'
    });
  }
}

export function tierList(guidesData, champAndIconCost, itemAndIcon, augsAndIcon) {
  const tierContainer = document.querySelector(".tier-comp-container");
  // guidesData
  const tierGroups = guidesData.reduce((acc, { mainChampion, mainItem, mainAugment, tier, title, style }, index) => {
    if (!champAndIconCost[mainChampion.apiName]) return acc;
    
    const iconChamp = convertURL(champAndIconCost[mainChampion.apiName][0]);
    const costChamp = champAndIconCost[mainChampion.apiName][1];
    const hashtag = toHashtag(title);
    
    const html = `
    <div class="tier-list cost-${costChamp}">
      <div class="hexagon-tier-champ">
        <a href="${hashtag}" style="background-image: url(${iconChamp})" title="${title}" data-index="${index}" data-style="${style}" data-name="${champAndIconCost[mainChampion.apiName][2]}"></a>
      </div>
      ${mainItem && itemAndIcon[mainItem.apiName] ? `<div class="hexagon-item"> 
        <div class="hexagon-icon" style="background-image: url(${convertURL(itemAndIcon[mainItem.apiName])})" data-api-name="${mainItem.apiName}"></div>
      </div>` : ""}
      ${mainAugment && augsAndIcon[mainAugment.apiName] ? `<div class="hexagon-item"> 
        <div class="hexagon-icon" style="background-image: url(${convertURL(augsAndIcon[mainAugment.apiName])})" data-api-name="${mainAugment.apiName}"></div>
      </div>` : ""}
    </div>
    `;
    
    switch(tier) {
      case "S": acc.groupS += html; break;
      case "A": acc.groupA += html; break;
      case "B": acc.groupB += html; break;
      case "C": acc.groupC += html; break;
      case "X": acc.groupX += html; break;
    }
    
    return acc;
  }, { groupS: "", groupA: "", groupB: "", groupC: "", groupX: "" });

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

  tierContainer.innerHTML = 
    createTierTemplate("S", tierGroups.groupS) +
    createTierTemplate("A", tierGroups.groupA) +
    createTierTemplate("B", tierGroups.groupB) +
    createTierTemplate("C", tierGroups.groupC) +
    createTierTemplate("X", tierGroups.groupX);

  // Khởi tạo các phần tử UI
  const tierLists = document.querySelectorAll('.tier-list');
  const searchInput = document.querySelector('.search-input');
  const styleBtn = document.querySelector('.style-btn.tierlist-btn');
  const styleMenu = document.querySelector('.style-menu.tierlist-menu');
  const styleOptions = document.querySelectorAll('.tierlist-menu .style-option');

  // Xử lý đóng/mở menu phong cách
  if (styleBtn && styleMenu) {
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
  }

  // Xử lý chọn phong cách
  if (styleOptions) {
    styleOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation(); // Ngăn sự kiện click lan ra document
        const selectedStyle = option.dataset.style;
        console.log(selectedStyle);
        // Cập nhật UI
        styleOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        styleBtn.textContent = selectedStyle;
        styleBtn.appendChild(document.createElement('i')).className = 'fa-solid fa-chevron-down';
        
        // Lọc danh sách theo phong cách
        filterTierLists();
        
        // Đóng menu
        styleBtn.classList.remove('active');
        styleMenu.classList.remove('show');
      });
    });
  }

  // Hàm lọc danh sách
  function filterTierLists() {
    const searchText = searchInput?.value.toLowerCase() || '';
    const selectedStyle = document.querySelector('.style-option.active')?.dataset.style || 'Show All';

    tierLists.forEach(tierList => {
      const link = tierList.querySelector('.hexagon-tier-champ a');
      if (!link) return;

      const name = link.getAttribute('data-name')?.toLowerCase() || '';
      const style = link.getAttribute('data-style') || '';
      
      const matchesSearch = name.includes(searchText);
      const matchesStyle = selectedStyle === 'Show All' || style === selectedStyle;
      
      if (matchesSearch && matchesStyle) {
        tierList.classList.remove('not-match');
      } else {
        tierList.classList.add('not-match');
      }
    });
  }

  // Xử lý tìm kiếm
  if (searchInput) {
    searchInput.addEventListener('input', filterTierLists);
  }
}

export function renderPostComp(guideData, champAndIconCost, itemAndIcon, augsAndIcon, postCompTag) {
  if (!postCompTag || !guideData) return;
  
  const { mainChampion, mainItem, mainAugment, tier, title, style, augments, augmentTypes, augmentsTip, finalComp, earlyComp, carousel, tips, altBuilds } = guideData;
  
  const valueTypes = {
    "ECON": "Kinh Tế",
    "ECON-URL": "/assets/images/econ.png",
    "EMBLEM": "Ấn",
    "EMBLEM-URL": "/assets/images/emblem.png",
    "ITEMS": "Trang Bị",
    "ITEMS-URL": "/assets/images/item.png",
    "COMBAT": "Combat",
    "COMBAT-URL": "/assets/images/combat.png",
    "HERO": "Anh hùng",
    "HERO-URL": "/assets/images/hero.png",
  };
  
  const finalEmblem = [];
  
  if (!champAndIconCost[mainChampion.apiName]) {
    postCompTag.innerHTML = '<div class="error">Không tìm thấy dữ liệu tướng</div>';
    return;
  }
  
  const finalCompHTML = finalComp.map(({ apiName, items, stars }) => {
    if (!champAndIconCost[apiName]) return '';
    
    if (champAndIconCost[apiName][3]) {
      finalEmblem.push(...champAndIconCost[apiName][3]);
    }

    let starHTML = "";
    if (stars === 3) {
      starHTML = `<div class="star-champ three-stars"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>`;
    } else if (stars === 4) {
      starHTML = `<div class="star-champ four-stars"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>`;
    }

    const itemsHTML = (items || []).map(item => {
      if (item.includes("Emblem")) { 
        finalEmblem.push({ "apiName": "Emblem" });
      }
      return `<span><img src="${convertURL(itemAndIcon[item])}" width="24" height="24" data-api-name="${item}"></span>`;
    }).join('');
    
    return `
      <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
        ${starHTML}
        <div class="hexagon-champ">
          <img src="${convertURL(champAndIconCost[apiName][0])}" width="80" height="80" data-api-name="${apiName}">
        </div>
        <div class="hexagon-items">
          ${itemsHTML}
        </div>
        <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
      </div>
    `;
  }).join("");

  const traitsEmblem = processTraits(finalEmblem);

  postCompTag.innerHTML = `
    <div class="row-comp row-1-comp comp-tier-${tier}">
      <div class="left-one">
        <div class="comp-shadow"></div>
        <div class="comp-main-champ">
          <div class="comp-champ-tier">${tier}</div>
          <div class="comp-champ-icon">
            <div style="background-image: url(${convertURL(champAndIconCost[mainChampion.apiName][0])})" data-api-name="${mainChampion.apiName}"></div>
          </div>
          ${mainItem && itemAndIcon[mainItem.apiName] ? `<div class="comp-champ-trait"><img src="${convertURL(itemAndIcon[mainItem.apiName])}" data-api-name="${mainItem.apiName}"></div>` : ""}
          ${mainAugment && augsAndIcon[mainAugment.apiName] ? `<div class="comp-champ-trait"><img src="${convertURL(augsAndIcon[mainAugment.apiName])}" data-api-name="${mainAugment.apiName}"></div>` : ""}
        </div>
        <div class="comp-title">
          ${title}
        </div>
        <div class="comp-style">
          Phong Cách: ${style}
        </div>
        <div class="comp-traits">
          ${traitsEmblem.map(({ apiName, icon, maxTraits }) => `<div data-api-name="${apiName}"><img src="${convertURL(icon)}"><span>${maxTraits}</span></div>`).join("")}
        </div>
      </div>
      <div class="right-one">
        <div class="comp-buttons">
          <button class="comp-copy-link" title="Copy link"><i class="fa-solid fa-link"></i></button>
          <button class="comp-close" title="Close post"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="comp-augs-list">
          <div class="title-comp">Những Lõi Mạnh</div>
          <div>${augments.map(({ apiName }) => augsAndIcon[apiName] ? `<img src="${convertURL(augsAndIcon[apiName])}" data-api-name="${apiName}">` : '').join("")}</div>
        </div>
        <div class="comp-augs-priority">
          <div class="title-comp">Ưu tiên lõi</div>
          <div>${augmentTypes.map(value => `<div class="priority-icon"><img src="${valueTypes[value + '-URL']}" loading="lazy" alt="${valueTypes[value]}"><span>${valueTypes[value]}</span></div><svg width="9" height="13" viewBox="0 0 149 213" fill="none">
            <path d="M137.225 81.825L55.625 8.625C34.325-10.475.525 4.625.525 33.225v146.3c0 28.6 33.8 43.7 55.1 24.6l81.6-73.2c14.6-13.1 14.6-36.1 0-49.2z" fill="#FFC808"></path>
             </svg>`).join("")}
          
          </div>
          
        </div>
        <div class="comp-tip">
          <span>Mẹo</span>
          <p>${augmentsTip}</p>
        </div>
      </div>
    </div>
    <div class="row-comp">
      <div class="title-comp">Đội hình hoàn thiện</div>
      <div class="final-comp">
        ${finalCompHTML}
      </div>    
    </div>
    <div class="row-comp">
      <div class="title-comp">Đội hình đầu trận</div>
      <div class="early-comp">
        ${earlyComp.map(({ apiName, items }) => {
          if (!champAndIconCost[apiName]) return '';
          return `
            <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
              <div class="hexagon-champ">
                <img src="${convertURL(champAndIconCost[apiName][0])}" width="58" height="58" data-api-name="${apiName}">
              </div>
              <div class="hexagon-items">
                ${items ? items.map(item => `<span><img src="${convertURL(itemAndIcon[item])}" width="20" height="20" data-api-name="${item}"></span>`).join('') : ""}
              </div>
              <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
    <div class="row-comp">
      <div class="title-comp">Ưu tiên mảnh trang bị</div>
      <div class="item-priority">
        ${carousel.map(({ apiName }) => {
          if (!itemAndIcon[apiName]) return '';
          return `
            <div class="hexagon-icon">
              <div class="hexagon-champ">
                <img src="${convertURL(itemAndIcon[apiName])}" width="58" height="58" data-api-name="${apiName}">
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
    <div class="row-comp">
      <div class="title-comp">Tạo tác nếu có</div>
      <div class="alt-comp">
        ${altBuilds.map(({ apiName, items }) => {
          if (!champAndIconCost[apiName]) return '';
          return `
            <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
              <div class="hexagon-champ">
                <img src="${convertURL(champAndIconCost[apiName][0])}" width="80" height="80" data-api-name="${apiName}">
              </div>
              <div class="hexagon-items">
                ${items ? items.map(item => `<span><img src="${convertURL(itemAndIcon[item])}" width="24" height="24" data-api-name="${item}"></span>`).join('') : ""}
              </div>
              <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
    <div class="row-comp">
      <div class="toggle-container">
        <span class="toggle-label">Hiện Tên</span>
        <div class="toggle"></div>
      </div>
      <div class="title-comp">Hướng dẫn xếp tướng</div>
      <div class="position-comp"></div>
    </div>
    <div class="row-comp">
      <div class="title-comp">Tips các giai đoạn</div>
      <div class="end-comp">
        ${tips.map(({ stage, tip }) => `<div class="tip-end-comp"><span>${stage}</span><span>${tip}</span></div>`).join("")}
      </div>
    </div>
  `;

  createBoard(finalComp, champAndIconCost, itemAndIcon, postCompTag);
  
  const closeButton = postCompTag.querySelector("button.comp-close");
  const copyButton = postCompTag.querySelector("button.comp-copy-link");
  
  if (closeButton) {
    closeButton.onclick = () => {
      const tierContainer = postCompTag.closest('.tier-container');
      tierContainer.querySelector('.hexagon-tier-champ a.active')?.classList.remove('active');
      tierContainer.classList.add('hide-post-comp');
      history.pushState(null, '', window.location.pathname);
    };
  }

  if (copyButton) {
    copyButton.onclick = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        copyButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
          copyButton.innerHTML = '<i class="fa-solid fa-link"></i>';
        }, 2000);
      } catch (err) {
        console.error('Không thể copy link:', err);
      }
    };
  }

  setupToggle(postCompTag);
  setupTooltips();
}

function createBoard(finalCompData, champAndIconCost, itemAndIcon, postCompTag) {
  const board = postCompTag.querySelector('.position-comp');
  if (!board) return;

  board.innerHTML = '';

  const rows = 4;
  const cols = 7;
  
  const fragment = document.createDocumentFragment();
  
  for (let row = 0; row < rows; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';

    for (let col = 0; col < cols; col++) {
      const hexagon = document.createElement('div');
      hexagon.className = 'hexagon';
      hexagon.dataset.index = row * cols + col;
      rowDiv.appendChild(hexagon);
      const nochamp = document.createElement('span')
      nochamp.className='no-champ'
      hexagon.appendChild(nochamp)
    }

    fragment.appendChild(rowDiv);
  }

  board.appendChild(fragment);

  placeChampions(finalCompData, champAndIconCost, itemAndIcon, board);
}

function placeChampions(finalCompData, champAndIconCost, itemAndIcon, board) {
  if (!board || !finalCompData) return;

  const hexagons = Array.from(board.querySelectorAll('.hexagon'));
  
  finalCompData.forEach(({ apiName, boardIndex, items, stars }) => {
    if (!apiName || !champAndIconCost[apiName]) return;

    const hexagon = hexagons.find(hex => hex.dataset.index === boardIndex.toString());
    if (!hexagon) return;

    const itemsHTML = items ? items.map(item => 
      itemAndIcon[item] ? `<span><img src="${convertURL(itemAndIcon[item])}" width="24" height="24" data-api-name="${item}"></span>` : ''
        ).join('') : '';


    hexagon.className = 'hexagon has-champ';
    hexagon.innerHTML = `
      <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
        ${stars === 3 ? `<div class="star-champ three-stars"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>` : ''}
        ${stars === 4 ? `<div class="star-champ four-stars"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>` : ''}
        <div class="hexagon-champ">
          <img src="${convertURL(champAndIconCost[apiName][0])}" data-api-name="${apiName}">
        </div>
        <div class="hexagon-items">
          ${itemsHTML}
        </div>
        <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
      </div>
    `;
  });
}

function processTraits(traits) {
  if (!Array.isArray(traits) || traits.length === 0) return [];
  
  const traitMap = {};
  const countMap = {};

  traits.forEach(trait => {
    if (!trait) return;
    
    const apiName = trait.apiName;
    if (apiName !== "Emblem") {
      countMap[apiName] = (countMap[apiName] || 0) + 1;
      if (!traitMap[apiName]) {
        traitMap[apiName] = {
          apiName: trait.apiName,
          name: trait.name,
          icon: trait.icon,
          minUnits: trait.minUnits
        };
      }
    }
  });

  const emblemCount = traits.filter(trait => trait && trait.apiName === "Emblem").length;

  if (emblemCount > 0) {
    let maxCount = 0;
    let maxApiName = null;

    for (const apiName in countMap) {
      if (countMap[apiName] > maxCount) {
        maxCount = countMap[apiName];
        maxApiName = apiName;
      }
    }

    if (maxApiName) {
      countMap[maxApiName] += emblemCount;
    }
  }

  const result = Object.keys(traitMap).map(apiName => {
    return {
      ...traitMap[apiName],
      maxTraits: countMap[apiName]
    };
  });

  return result.filter(trait => trait.maxTraits >= trait.minUnits).sort((a, b) => b.maxTraits - a.maxTraits);
}

function setupToggle(postCompTag) {
  const toggleContainer = postCompTag.querySelector(".toggle-container");
  if (!toggleContainer) return;

  const toggle = toggleContainer.querySelector(".toggle");
  const label = toggleContainer.querySelector(".toggle-label");
  if (!toggle || !label) return;
  
  const body = document.body;
  const root = document.documentElement;

  function updateToggleState(isActive) {
    body.classList.toggle("name-active", isActive);
    root.style.setProperty('--name-display', isActive ? "flex" : "none");
    label.textContent = isActive ? "Ẩn Tên" : "Hiện Tên";
  }

  const savedState = localStorage.getItem("nameDisplay") === "flex";
  updateToggleState(savedState);

  toggle.addEventListener("click", function () {
    const isActive = body.classList.toggle("name-active");
    
    root.style.setProperty('--name-display', isActive ? "flex" : "none");
    
    label.textContent = isActive ? "Ẩn Tên" : "Hiện Tên";
    
    localStorage.setItem("nameDisplay", isActive ? "flex" : "none");
  });
}

function toHashtag(str) {
  if (!str) return '#';
  
  return '#' + str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-');
}

function handleHashURL(data, guidesData) {

  if (!data || !guidesData || !guidesData.guides) return;
  
  const hash = window.location.hash;
  if (!hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    return;
  }

  const targetLink = document.querySelector(`.hexagon-tier-champ a[href="${hash}"]`);
  if (!targetLink) return;
  
  const index = targetLink.getAttribute("data-index");
  if (!guidesData.guides[index]) return;
  
  const tierContainer = targetLink.closest(".tier-container");
  const postCompTag = tierContainer.querySelector(".post-comp");
  if (!postCompTag) return;

  document.querySelectorAll(".tier-container").forEach(tier => {
    tier.classList.add("hide-post-comp");
  });
  document.querySelectorAll(".hexagon-tier-champ a").forEach(icon => {
    icon.classList.remove("active");
  });

  tierContainer.classList.remove("hide-post-comp");
  targetLink.classList.add("active");

  const itemAndIcon = apiNameAndIcon(data.items.mainItems);
  const augsAndIcon = apiNameAndIcon(data.augments.mainAugs);
  const champAndIconCost = Object.fromEntries(data.champions.mainChampions.map(obj => [obj.apiName, [obj.icon, obj.cost, obj.name, obj.traits]]));
  
  renderPostComp(guidesData.guides[index], champAndIconCost, itemAndIcon, augsAndIcon, postCompTag);

  requestAnimationFrame(() => {
    scrollToPost(tierContainer, postCompTag);
  });
}

