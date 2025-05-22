import { setupTooltips, setupStyleMenu, apiNameAndData, formatDateLocale, initToggle, singleLoadPage } from '/src/assets/js/global.js';


export function renderComp(data, guidesData, hexIndexData, setNumber) {
  const tierCompContainer = document.querySelector(".tier-comp-container");
  if (!tierCompContainer) return;

  const titleInit = document.title
  const itemAndIcon = apiNameAndData(data.items, ['icon'], 'items', setNumber);
  const augsAndIconTier = apiNameAndData(data.augments, ['icon', 'tier2'], 'augments', setNumber);
  const champAndIconCost = apiNameAndData(data.champions, ['icon', 'cost', 'name', 'traits'], 'champions', setNumber);

  // tierList
  tierList(guidesData.guides, champAndIconCost, itemAndIcon, augsAndIconTier);


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
      document.title = titleInit
      return;
    }

    const allTierContainers = document.querySelectorAll(".tier-container");
    const allIcons = document.querySelectorAll(".hexagon-tier-champ a");

    allTierContainers.forEach(tier => tier.classList.add("hide-post-comp"));
    allIcons.forEach(icon => icon.classList.remove("active"));

    tierContainer.classList.remove("hide-post-comp");
    clickedLink.classList.add("active");
    renderPostComp(guidesData.guides[index], champAndIconCost, itemAndIcon, augsAndIconTier, postCompTag, hexIndexData, titleInit, setNumber);

    requestAnimationFrame(() => {
      scrollToPost(tierContainer, postCompTag);
    });

    history.pushState(null, '', `#${hashtag}`);
  }

  // Xử lý hash URL ngay sau khi render xong
  handleHashURL(data, guidesData, hexIndexData, titleInit, setNumber);

  // Xử lý sự kiện loadPage khi nhấn vào link
  setupStyleMenu('.style-btn.champ-link', '.style-menu.champ-link', '.style-menu.champ-link a');
  singleLoadPage('.revival-link a')

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

export function tierList(guidesData, champAndIconCost, itemAndIcon, augsAndIconTier) {
  const tierContainer = document.querySelector(".tier-comp-container");

  // guidesData
  const tierGroups = guidesData.reduce((acc, { mainChampion, mainItem, mainAugment, tier, title, style }, index) => {
    if (!champAndIconCost[mainChampion.apiName]) return acc;
    const iconChamp = champAndIconCost[mainChampion.apiName][0];
    const costChamp = champAndIconCost[mainChampion.apiName][1];
    const champName = champAndIconCost[mainChampion.apiName][2];
    const itemApiName = mainItem ? mainItem.apiName : null;
    const augsApiName = mainAugment ? mainAugment.apiName : null;
    const hashtag = toHashtag(title);

    const html = `
    <div class="tier-list cost-${costChamp}">
    ${tier === "X" && augsApiName ? `<div class='hero-tier tier-${augsAndIconTier[augsApiName][1] || ""}'>${augsAndIconTier[augsApiName][1] || ""}</div>` : ""}
      <div class="hexagon-tier-champ">
        <a href="${hashtag}" style="background-image: url(${iconChamp})" title="${title}" data-index="${index}" data-style="${style}" data-name="${champName}"></a>
      </div>
      ${itemApiName && itemAndIcon[itemApiName] ? `<div class="hexagon-item"> 
        <div class="hexagon-icon" style="background-image: url(${itemAndIcon[itemApiName][0]})" data-api-name="${itemApiName}"></div>
      </div>` : ""}
      ${augsApiName && augsAndIconTier[augsApiName] ? `<div class="hexagon-item"> 
        <div class="hexagon-icon" style="background-image: url(${augsAndIconTier[augsApiName][0]})" data-api-name="${augsApiName}"></div>
      </div>` : ""}
      <div class="hexagon-title">${title}</div>
    </div>
    `;

    switch (tier) {
      case "S": acc.groupS += html; break;
      case "A": acc.groupA += html; break;
      case "B": acc.groupB += html; break;
      case "C": acc.groupC += html; break;
      case "X": acc.groupX += html; break;
    }

    return acc;
  }, { groupS: "", groupA: "", groupB: "", groupC: "", groupX: "" });


  function createTierTemplate(tier, groupContent) {

    const regex = /<div[^>]*class=["'][^"']*tier-list[^"']*["'][^>]*>/gi;
    const tierListCount = (groupContent.match(regex) || []).length;

    let extraClass = "";

    if (tierListCount > 15) {
      extraClass = " more-than-12 more-than-15";
    } else if (tierListCount > 12) {
      extraClass = " more-than-12";
    } else if (tierListCount > 9) {
      extraClass = " more-than-9";
    }



    return `
      <div class="tier-container comp-tier-${tier}${extraClass}">
        <div class="comp-list">
          <div class="tier-title">
            <img src="/assets/images/${tier}-Tier.webp" loading="lazy" alt="${tier} Tier">
            <img src="/assets/images/${tier}-Tier-Wide.webp" loading="lazy" alt="${tier} Tier Wide">
            <img src="/assets/images/${tier}-Tier-Texture.webp" loading="lazy" alt="${tier} Tier Texture">
          </div>
          <div class="tier-group">${tier === "X" ? `<div class="hero-tier-title">Hero Tier</div>` : ""}${groupContent}</div>
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


  // Sử dụng hàm createTierHead để thêm nút toggle và last update
  // Sử dụng hàm initToggle để thiết lập trạng thái ẩn hiện tên
  const { fragment} = createTierHead(formatDateLocale, 'tierlist');
  tierContainer.prepend(fragment);
  initToggle('tierlist')

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

export function renderPostComp(guideData, champAndIconCost, itemAndIcon, augsAndIconTier, postCompTag, hexIndexData, titleInit, setNumber) {
  if (!postCompTag || !guideData) return;

  const { mainChampion, mainItem, mainAugment, tier, title, style, augments, augmentTypes, augmentsTip, finalComp, earlyComp, carousel, tips, altBuilds } = guideData;

  const teamCode = generateTeamCode(hexIndexData, finalComp, setNumber);

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
        finalEmblem.push({ "apiName": item });
      }
      return `<span><img src="${itemAndIcon[item][0]}" width="24" height="24" data-api-name="${item}"></span>`;
    }).join('');

    return `
      <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
        ${starHTML}
        <div class="hexagon-champ">
          <img src="${champAndIconCost[apiName][0]}" width="80" height="80" data-api-name="${apiName}">
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
          ${tier === "X" ? `<div class="hero-tier tier-${augsAndIconTier[mainAugment?.apiName]?.[1]}">${augsAndIconTier[mainAugment?.apiName]?.[1] || ""}</div>` : ""}
          <div class="comp-champ-tier">${tier}</div>
          <div class="comp-champ-icon">
            <div style="background-image: url(${champAndIconCost[mainChampion.apiName][0]})" data-api-name="${mainChampion.apiName}"></div>
          </div>
          ${mainItem && itemAndIcon[mainItem.apiName][0] ? `<div class="comp-champ-trait"><img src="${itemAndIcon[mainItem.apiName][0]}" data-api-name="${mainItem.apiName}"></div>` : ""}
          ${mainAugment && augsAndIconTier[mainAugment.apiName][0] ? `<div class="comp-champ-trait"><img src="${augsAndIconTier[mainAugment.apiName][0]}" data-api-name="${mainAugment.apiName}"></div>` : ""}
        </div>
        <div class="comp-title">
          ${title}
        </div>
        <div class="comp-style">
          Phong Cách: ${style}
        </div>
        <div class="comp-traits">
          ${traitsEmblem.map(({ apiName, icon, maxTraits }) => `<div data-api-name="${apiName}"><img src="${icon}"><span>${maxTraits}</span></div>`).join("")}
        </div>
      </div>
      <div class="right-one">
        <div class="comp-buttons">
          <div class="copy-menu">
            <button class="comp-copy-link" title="Copy">
            <i class="fa-solid fa-ellipsis"></i>
            </button>
            <div class="copy-dropdown">
              <button class="copy-option" data-action="teamCode">
                <i class="fa-solid fa-copy"></i>
                <span>Copy TeamCode</span>
              </button>
              <button class="copy-option" data-action="link">
                <i class="fa-solid fa-link"></i>
                <span>Copy Link</span>
              </button>
              <button class="copy-option" data-action="open-in-builder">
                 <i class="fa-solid fa-tools"></i>
                 <span>Open in builder</span>
              </button>
            </div>
          </div>
          <button class="comp-close" title="Close post">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="comp-augs-list">
          <div class="title-comp">Những Lõi Mạnh</div>
          <div>${augments.map(({ apiName }) => augsAndIconTier[apiName] ? `<img src="${augsAndIconTier[apiName][0]}" data-api-name="${apiName}">` : '').join("")}</div>
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
                <img src="${champAndIconCost[apiName][0]}" width="58" height="58" data-api-name="${apiName}">
              </div>
              <div class="hexagon-items">
                ${items ? items.map(item => `<span><img src="${itemAndIcon[item][0]}" width="20" height="20" data-api-name="${item}"></span>`).join('') : ""}
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
    if (!itemAndIcon[apiName][0]) return '';
    return `
            <div class="hexagon-icon">
              <div class="hexagon-champ">
                <img src="${itemAndIcon[apiName][0]}" width="58" height="58" data-api-name="${apiName}">
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
                <img src="${champAndIconCost[apiName][0]}" width="80" height="80" data-api-name="${apiName}">
              </div>
              <div class="hexagon-items">
                ${items ? items.map(item => `<span><img src="${itemAndIcon[item][0]}" width="24" height="24" data-api-name="${item}"></span>`).join('') : ""}
              </div>
              <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
            </div>
          `;
  }).join("")}
      </div>
    </div>
    <div class="row-comp">
      <div class="toggle-container" id="tier-post">
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
  const copyMenu = postCompTag.querySelector('.copy-menu');
  const copyButton = copyMenu.querySelector('.comp-copy-link');
  const copyOptions = copyMenu.querySelectorAll('.copy-option');

  if (closeButton) {
    closeButton.onclick = () => {
      const tierContainer = postCompTag.closest('.tier-container');
      tierContainer.querySelector('.hexagon-tier-champ a.active')?.classList.remove('active');
      tierContainer.classList.add('hide-post-comp');
      document.title = titleInit
      history.pushState(null, '', window.location.pathname);
    };
  }

  copyButton.addEventListener('click', (e) => {
    e.stopPropagation();
    copyMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!copyMenu.contains(e.target)) {
      copyMenu.classList.remove('active');
    }
  });

  copyOptions.forEach(option => {
    option.addEventListener('click', async (e) => {
      e.stopPropagation();
      const action = option.dataset.action;

      if (action === 'teamCode') {
        try {
          await navigator.clipboard.writeText(teamCode);
          showTooltip('Đã sao chép', copyButton);
        } catch (err) {
          console.error('Không thể copy teamCode:', err);
        }
      } else if (action === 'link') {
        try {
          await navigator.clipboard.writeText(window.location.href);
          showTooltip('Đã sao chép', copyButton);
        } catch (err) {
          console.error('Không thể copy link:', err);
        }
      } else if (action === 'open-in-builder') {
        const compData = finalComp.map(({ apiName, boardIndex, items, stars }) => ({
          apiName,
          boardIndex,
          items,
          stars
        }));
        const augmentsData = augments.map(({ apiName }) => ({ apiName })); // Lưu apiName của augments
        localStorage.setItem('builderCompData', JSON.stringify(compData));
        localStorage.setItem('builderAugmentsData', JSON.stringify(augmentsData));
        window.location.href = '/builder';
      }

      copyMenu.classList.remove('active');
    });
  });

  initToggle('tier-post',false);
  setupTooltips();
  document.title = title;
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
      nochamp.className = 'no-champ'
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
      itemAndIcon[item][0] ? `<span><img src="${itemAndIcon[item][0]}" width="24" height="24" data-api-name="${item}"></span>` : ''
    ).join('') : '';


    hexagon.className = 'hexagon has-champ';
    hexagon.innerHTML = `
      <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
        ${stars === 3 ? `<div class="star-champ three-stars"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>` : ''}
        ${stars === 4 ? `<div class="star-champ four-stars"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>` : ''}
        <div class="hexagon-champ">
          <img src="${champAndIconCost[apiName][0]}" data-api-name="${apiName}">
        </div>
        <div class="hexagon-items">
          ${itemsHTML}
        </div>
        <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
      </div>
    `;
  });
}

/**
 * Xử lý mảng traits, đếm số lần xuất hiện và xử lý emblem items.
 * Emblem items được nhận diện bằng "Emblem" trong apiName, phần trước "Emblem"
 * khớp với một trait. Nếu không ánh xạ được, cộng vào trait có số lượng cao nhất.
 * Trả về mảng traits đạt minUnits, sắp xếp theo maxTraits giảm dần.
 * @param {Array} traits - Mảng các trait với apiName, name, icon, minUnits
 * @returns {Array} - Mảng traits đã lọc và sắp xếp
 */
function processTraits(traits) {
  if (!Array.isArray(traits) || !traits.length) return [];

  const traitMap = {};
  const countMap = {};
  const traitNameMap = {};

  traits.forEach(trait => {
    if (!trait?.apiName || typeof trait.apiName !== 'string') return;

    const { apiName } = trait;
    if (apiName.includes('Emblem') && apiName.endsWith('EmblemItem')) return;

    countMap[apiName] = (countMap[apiName] || 0) + 1;
    traitMap[apiName] = traitMap[apiName] || {
      apiName,
      name: trait.name,
      icon: trait.icon,
      minUnits: trait.minUnits
    };

    traitNameMap[apiName.split('_').pop()] = apiName;
  });

  const emblemCounts = {};
  traits.forEach(trait => {
    if (!trait?.apiName || typeof trait.apiName !== 'string') return;

    const { apiName } = trait;
    if (apiName.includes('Emblem') && apiName.endsWith('EmblemItem')) {
      let targetTrait;
      const match = apiName.match(/(.+)Emblem/);
      if (match) {
        const traitName = match[1].split('_').pop();
        targetTrait = traitNameMap[traitName];
      }

      if (!targetTrait) {
        targetTrait = Object.keys(countMap).reduce((maxTrait, trait) =>
          countMap[trait] > (countMap[maxTrait] || 0) ? trait : maxTrait
          , null);
      }

      if (targetTrait) {
        emblemCounts[targetTrait] = (emblemCounts[targetTrait] || 0) + 1;
      }
    }
  });

  for (const trait in emblemCounts) {
    if (countMap[trait]) countMap[trait] += emblemCounts[trait];
  }

  return Object.keys(traitMap)
    .map(apiName => ({
      ...traitMap[apiName],
      maxTraits: countMap[apiName] || 0
    }))
    .filter(trait => trait.maxTraits >= trait.minUnits)
    .sort((a, b) => b.maxTraits - a.maxTraits);
}

function toHashtag(str) {
  if (!str) return '#';

  return '#' + str
    .normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-');
}

function handleHashURL(data, guidesData, hexIndexData, titleInit, setNumber) {
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

  const itemAndIcon = apiNameAndData(data.items, ['icon'], 'items', setNumber);
  const augsAndIconTier = apiNameAndData(data.augments, ['icon', 'tier2'], 'augments', setNumber);
  const champAndIconCost = apiNameAndData(data.champions, ['icon',' cost', 'name', 'traits'], 'champions', setNumber);

  renderPostComp(guidesData.guides[index], champAndIconCost, itemAndIcon, augsAndIconTier, postCompTag, hexIndexData, titleInit, setNumber);

  requestAnimationFrame(() => {
    scrollToPost(tierContainer, postCompTag);
  });
}

function generateTeamCode(champHexIndex, finalComp, setNumber) {
  // Chuyển chuỗi thành mảng để thao tác hiệu quả hơn
  let teamCodeArray = `02000000000000000000000000000000TFTSet${setNumber}`.split('');

  // Tạo Map để tra cứu hexIndex
  const lookupMap = new Map(champHexIndex.map(champ => [champ.apiName, champ.hexIndex]));

  // Vị trí bắt đầu từ index 2
  let position = 2;

  // Thay thế giá trị trong mảng
  finalComp.forEach(champ => {
    const hexIndex = lookupMap.get(champ.apiName);
    if (position + hexIndex.length <= 32) { // Kiểm tra giới hạn
      for (let i = 0; i < hexIndex.length; i++) {
        teamCodeArray[position + i] = hexIndex[i];
      }
      position += hexIndex.length;
    }
  });

  // Ghép mảng thành chuỗi
  return teamCodeArray.join('');
}

// Hàm hiển thị tooltip
function showTooltip(message, element) {
  const tooltip = document.createElement('div');
  tooltip.className = 'copy-tooltip';
  tooltip.textContent = message;

  const rect = element.getBoundingClientRect();
  tooltip.style.left = `${rect.left}px`;
  tooltip.style.top = `${rect.top - 30}px`;

  document.body.appendChild(tooltip);

  // Tooltip sẽ tự động biến mất sau 2s nhờ animation CSS
}


export function createTierHead(dateFormatter, toggleId='toggleId') {
  const fragment = document.createDocumentFragment();
  const tierHead = document.createElement("div");
  tierHead.className = "tier-head";

  // Toggle container
  const toggleContainer = document.createElement("div");
  toggleContainer.id = toggleId
  toggleContainer.className = "toggle-container tierlist-toggle";
  const toggleLabel = document.createElement("span");
  toggleLabel.className = "toggle-label";
  toggleLabel.textContent = "Hiện Tên";
  const toggleDiv = document.createElement("div");
  toggleDiv.className = "toggle";
  toggleContainer.append(toggleLabel, toggleDiv);

  // Last update
  const lastUpdate = document.createElement("div");
  lastUpdate.className = "last-update";
  const updateSpan = document.createElement("span");
  updateSpan.textContent = "Update: ";
  const dateSpan = document.createElement("span");
  dateSpan.className = "date";
  dateSpan.textContent = dateFormatter();
  updateSpan.append(dateSpan);
  lastUpdate.append(updateSpan);

  tierHead.append(toggleContainer, lastUpdate);
  fragment.append(tierHead);

  return { fragment, toggleContainer };
}
