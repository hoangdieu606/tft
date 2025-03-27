function renderComp(data, guidesData) {
  console.log(data, guidesData)

  const { mainChampion, tier, title, style, augments, augmentTypes, augmentsTip, finalComp, earlyComp, carousel, tips, mainItem, mainAugment, altBuilds } = guidesData.guides[17];

  const itemAndIcon = apiNameAndIcon(data.items.mainItems);
  const augsAndIcon = apiNameAndIcon(data.augments.mainAugs);
  const champAndIconCost = Object.fromEntries(data.champions.mainChampions.map(obj => [obj.apiName, [obj.icon, obj.cost, obj.name, obj.traits]]))
  const finalEmblem = []
  let finalCompHTML

  const valueTypes = {
    "ECON": "Kinh Tế",
    "ECON-URL": "https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/econ.png",

    "EMBLEM": "Ấn",
    "EMBLEM-URL": "https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/emblem.png",

    "ITEMS": "Trang Bị",
    "ITEMS-URL": "https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/item.png",

    "COMBAT": "Combat",
    "COMBAT-URL": "https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/combat.png",

  }
// tierList
const tierListHTML = tierList(guidesData.guides, champAndIconCost, itemAndIcon, augsAndIcon);   
document.querySelector(".tier-comp-container").innerHTML = tierListHTML.groupS + tierListHTML.groupA + tierListHTML.groupB + tierListHTML.groupC + tierListHTML.groupX; 

  console.log(mainChampion, tier, title, style, augments, augmentTypes, augmentsTip, finalComp, earlyComp, carousel, tips, mainItem, altBuilds)

  /* Render finalCompHTML */
  finalCompHTML = finalComp.map(({ apiName, items, stars }) => {

            finalEmblem.push(...champAndIconCost[apiName][3])

            let starHTML = ""
            if(stars===3) {
              starHTML = `<div class="star-champ three-stars"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>`
            }
            if(stars===4) {
              starHTML = `<div class="star-champ four-stars"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div>`
            }

            /* Render itemsHTML */
            const itemsHTML = (items || []).map(item => {
              if (item.includes("Emblem")) { finalEmblem.push({ "apiName": "Emblem" }) }
              return `<span><img src="${convertURL(itemAndIcon[item])}" width="24" height="24" data-api-name="${item}"></span>`
            }).join('')
            // console.log(champAndIconCost)
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
                            
          `}).join("")

  /* traitsEmblem */
const traitsEmblem = processTraits(finalEmblem);

  /* Render HTML */
  document.querySelector("#post-comp").innerHTML = `
    <div class="row-comp row-1-comp comp-tier-${tier}">
      <div class="left-one">
        <div class="comp-shadow"></div>
        <div class="comp-main-champ">
          <div class="comp-champ-tier">${tier}</div>
          <div class="comp-champ-icon">
            <div style="background-image: url(${convertURL(champAndIconCost[mainChampion.apiName][0])})" data-api-name="${mainChampion.apiName}"></div>
          </div>
          ${mainItem ? `<div class="comp-champ-trait"><img src="${convertURL(itemAndIcon[mainItem.apiName])}" data-api-name="${mainItem.apiName}"></div>` : ""}
          ${mainAugment ? `<div class="comp-champ-trait"><img src="${convertURL(augsAndIcon[mainAugment.apiName])}" data-api-name="${mainAugment.apiName}"></div>` : ""}
        </div>
        <div class="comp-title">
          ${title}
        </div>
        <div class="comp-style">
          Phong Cách: ${style}
        </div>
        <div class="comp-traits">
        ${
          traitsEmblem.map(({apiName, icon, maxTraits})=>`<div data-api-name="${apiName}"><img src="${convertURL(icon)}"><span>${maxTraits}</span></div>`).join("")
        }
        </div>
      </div>
      <div class="right-one">
        <button class="comp-close"><i class="fa-solid fa-xmark"></i></button>
        <div class="comp-augs-list">
          <div class="title-comp">Những Lõi Mạnh</div>
          <div>${augments.map(({ apiName }) => `<img src="${convertURL(augsAndIcon[apiName])}" data-api-name="${apiName}">`).join("")}</div>
        </div>
        <div class="comp-augs-priority">
          <div class="title-comp">Ưu tiên lõi</div>
          <div>${augmentTypes.map(value => `<div class="priority-icon"><img src="${valueTypes[`${value}-URL`]}"><span>${valueTypes[value]}</span></div><svg width="9" height="13" viewBox="0 0 149 213" fill="none">
            <path d="M137.225 81.825L55.625 8.625C34.325-10.475.525 4.625.525 33.225v146.3c0 28.6 33.8 43.7 55.1 24.6l81.6-73.2c14.6-13.1 14.6-36.1 0-49.2z" fill="#FFC808"/>
             </svg>`).join("")}</div>
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
                ${earlyComp.map(({ apiName, items }) => `
                      <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
                        <div class="hexagon-champ">
                            <img src="${convertURL(champAndIconCost[apiName][0])}" width="58" height="58" data-api-name="${apiName}">
                        </div>
                        <div class="hexagon-items">
                            ${items ? items.map(item => `<span><img src="${convertURL(itemAndIcon[item])}" width="20" height="20" data-api-name="${item}"></span>`).join('') : ""}
                        </div>
                        <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
                      </div>
            
                `).join("")}
                </div>
          </div>
          <div class="row-comp">
                <div class="title-comp">Ưu tiên mảnh trang bị</div>
                <div class="item-priority">
                ${carousel.map(({ apiName }) => `
                <div class="hexagon-icon">
                  <div class="hexagon-champ">
                      <img src="${convertURL(itemAndIcon[apiName])}" width="58" height="58" data-api-name="${apiName}">
                  </div>
                </div>
      
                `).join("")}
                </div>
          </div>

          <div class="row-comp">
            <div class="title-comp">Tạo tác nếu có</div>
            <div class="alt-comp">
            ${altBuilds.map(({ apiName, items }) => `
                  <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
                     <div class="hexagon-champ">
                        <img src="${convertURL(champAndIconCost[apiName][0])}" width="80" height="80" data-api-name="${apiName}">
                     </div>
                     <div class="hexagon-items">
                        ${items ? items.map(item => `<span><img src="${convertURL(itemAndIcon[item])}" width="24" height="24" data-api-name="${item}"></span>`).join('') : ""}
                     </div>
                     <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
                  </div>
              
              `).join("")}
            </div>
          </div>


          <div class="row-comp">
            <div class="toggle-container" id="toggleSwitch">
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
    
  `

  /* createBoard */
createBoard(finalComp, champAndIconCost, itemAndIcon);
/* Toggle Name setupToggle */
setupToggle("toggleSwitch");
}

// tierList
function tierList(guidesData, champAndIconCost, itemAndIcon, augsAndIcon) {
  const tierList = guidesData.reduce((acc, {mainChampion, mainItem, mainAugment, tier, title}) => {
    const iconChamp = convertURL(champAndIconCost[mainChampion.apiName][0])
    const costChamp = champAndIconCost[mainChampion.apiName][1]
    const hashtag = toHashtag(title)
    const html = `
    <div class="tier-list cost-${costChamp}">
      <div class="hexagon-tier-champ">
        <a href="${hashtag}" style="background-image: url(${iconChamp})" title="${title}"></a>
      </div>
      ${mainItem ? `<div class="hexagon-item"> 
        <div class="hexagon-icon" style="background-image: url(${convertURL(itemAndIcon[mainItem.apiName])})"></div>
      </div>` : ""}
      ${mainAugment ? `<div class="hexagon-item"> 
        <div class="hexagon-icon" style="background-image: url(${convertURL(augsAndIcon[mainAugment.apiName])})"></div>
      </div>` : ""}
    </div>
    `
    if (tier === "S") {
      acc.groupS += html
    }
    if (tier === "A") {
      acc.groupA += html
    }
    if (tier === "B") {
      acc.groupB += html
    }
    if (tier === "C") {
      acc.groupC += html
    }
    if (tier === "X") {
      acc.groupX += html
    }
    return acc;
  }, {groupS:"", groupA:"", groupB:"", groupC:"", groupX:""});

  // Bọc mỗi group trong một thẻ div riêng
  return {
    groupS: `<div class="tier-container comp-tier-S"><div class="tier-title"><img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/S-Tier.webp"></div><div class="tier-group">${tierList.groupS}</div></div>`,
    groupA: `<div class="tier-container comp-tier-A"><div class="tier-title"><img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/A-Tier.webp"></div><div class="tier-group">${tierList.groupA}</div></div>`,
    groupB: `<div class="tier-container comp-tier-B"><div class="tier-title"><img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/B-Tier.webp"></div><div class="tier-group">${tierList.groupB}</div></div>`,
    groupC: `<div class="tier-container comp-tier-C "><div class="tier-title"><img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/C-Tier.webp"></div><div class="tier-group">${tierList.groupC}</div></div>`,
    groupX: `<div class="tier-container comp-tier-X"><div class="tier-title"><img src="https://cdn.jsdelivr.net/gh/hoangdieu606/tft@main/images/X-Tier.webp"></div><div class="tier-group">${tierList.groupX}</div></div>`
  };
}


// Hàm tạo bàn cờ
function createBoard(finalCompData, champAndIconCost, itemAndIcon) {
  const board = document.querySelector('.position-comp');
  const rows = 4; // Số hàng
  const cols = 7; // Số cột
  let index = 0;
  console.log(board)
  // Tạo 4 hàng
  for (let row = 0; row < rows; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    // Tạo 7 ô lục giác cho mỗi hàng
    for (let col = 0; col < cols; col++) {
      const hexagon = document.createElement('div');
      hexagon.classList.add('hexagon');
      hexagon.dataset.index = index;
      rowDiv.appendChild(hexagon);
      index++;
    }

    board.appendChild(rowDiv);
  }

  // Đặt các tướng lên bàn cờ
  placeChampions(finalCompData, champAndIconCost, itemAndIcon);
}

// Hàm đặt các tướng dựa trên boardIndex
function placeChampions(finalCompData, champAndIconCost, itemAndIcon) {
  finalCompData.forEach(({ apiName, boardIndex, items }) => {
    const hexagon = document.querySelector(`.hexagon[data-index="${boardIndex}"]`);
    if (hexagon) {
      hexagon.classList.add("has-champ");

      hexagon.innerHTML = `
        <div class="hexagon-icon champ-cost-${champAndIconCost[apiName][1]}">
                     <div class="hexagon-champ">
                        <img src="${convertURL(champAndIconCost[apiName][0])}"  data-api-name="${apiName}">
                     </div>
                     <div class="hexagon-items">
                        ${items ? items.map(item => `<span><img src="${convertURL(itemAndIcon[item])}" width="24" height="24" data-api-name="${item}"></span>`).join('') : ""}
                     </div>
                     <div class="hexagon-name">${champAndIconCost[apiName][2]}</div>
        </div>
      `
    }
  });
}


function processTraits(traits) {
  // Bước 1: Đếm số lần xuất hiện của từng apiName và lưu thông tin đối tượng
  const traitMap = {};
  const countMap = {};

  // Lặp qua mảng để đếm và lưu thông tin
  traits.forEach(trait => {
    const apiName = trait.apiName;
    if (apiName !== "Emblem") {
      // Đếm số lần xuất hiện
      countMap[apiName] = (countMap[apiName] || 0) + 1;
      // Lưu thông tin đối tượng (chỉ cần lưu 1 lần cho mỗi apiName)
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

  // Bước 2: Xử lý Emblem
  const emblemCount = traits.filter(trait => trait.apiName === "Emblem").length;

  if (emblemCount > 0) {
    // Tìm apiName có số lần xuất hiện cao nhất
    let maxCount = 0;
    let maxApiName = null;

    for (const apiName in countMap) {
      if (countMap[apiName] > maxCount) {
        maxCount = countMap[apiName];
        maxApiName = apiName;
      }
    }

    // Cộng số lần xuất hiện của Emblem vào apiName có giá trị cao nhất
    if (maxApiName) {
      countMap[maxApiName] += emblemCount;
    }
  }

  // Bước 3: Tạo mảng kết quả với maxTraits
  const result = Object.keys(traitMap).map(apiName => {
    return {
      ...traitMap[apiName],
      maxTraits: countMap[apiName]
    };
  });

  // Bước 4: Lọc các đối tượng có maxTraits >= minUnits
  return result.filter(trait => trait.maxTraits >= trait.minUnits).sort((a,b)=>b.maxTraits-a.maxTraits);
}



function setupToggle(toggleId) {
  const toggleContainer = document.getElementById(toggleId);
  if (!toggleContainer) return;

  const toggle = toggleContainer.querySelector(".toggle");
  const label = toggleContainer.querySelector(".toggle-label");
  const body = document.body;
  const root = document.documentElement;

  // Hàm cập nhật trạng thái
  function updateToggleState(isActive) {
      body.classList.toggle("name-active", isActive);
      root.style.setProperty('--name-display', isActive ? "flex" : "none");
      label.textContent = isActive ? "Ẩn Tên" : "Hiện Tên";
  }

  if (toggle) {
      toggle.addEventListener("click", function () {
          const isActive = body.classList.toggle("name-active");

          // Cập nhật biến CSS
          root.style.setProperty('--name-display', isActive ? "flex" : "none");

          // Thay đổi nội dung nhãn khi bật/tắt
          label.textContent = isActive ? "Ẩn Tên" : "Hiện Tên";

          // Lưu trạng thái vào localStorage
          localStorage.setItem("nameDisplay", isActive ? "flex" : "none");
      });
  }

  // Khôi phục trạng thái khi tải trang
  const savedState = localStorage.getItem("nameDisplay") === "flex";
  updateToggleState(savedState);
}

function toHashtag(str) {
  return '#' + str
      .normalize("NFD").replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu tiếng Việt
      .toLowerCase().replace(/đ/g, 'd')                // Chuyển về chữ thường & đổi 'đ' -> 'd'
      .replace(/[^a-z0-9\s-]/g, '')                    // Loại bỏ ký tự đặc biệt
      .trim().replace(/\s+/g, '-');                    // Xóa khoảng trắng và thay bằng dấu '-'
}


