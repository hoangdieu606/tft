import { apiNameAndData, setupTooltips, setIndexer, filterInput } from '/src/assets/js/global-defer.js';

export function renderBuilder(data, hexIndexData) {
    // Lấy các phần tử DOM
    const builderChampions = document.querySelector('.builder-champions .builder-list');
    const builderItems = document.querySelector('.builder-items .builder-list');
    const builderTraits = document.querySelector('.builder-traits');
    const builderAugments = document.querySelector('.builder-augments');
    const builderListAugments = document.querySelector('.builder-list-augments');
    const builderRenderAugs = document.querySelector('.builder-render-augs');
    const selectedAugs = document.querySelector('.selected-augs');
    const countAuguments = document.querySelector('.count-auguments');
    const selectedAugsClear = document.querySelector('.selected-augs-clear');
    const selectedAugsOk = document.querySelector('.selected-augs-ok');
    const hexagons = document.querySelectorAll('.hexagon');
    const clearButton = document.querySelector('.builder-clear');
    const teamCodeButton = document.querySelector('.builder-copy');

    // Kiểm tra DOM
    if (!builderChampions || !builderItems || !builderTraits || !builderAugments || !builderListAugments || 
        !builderRenderAugs || !selectedAugs || !countAuguments || !selectedAugsClear || !selectedAugsOk || 
        hexagons.length === 0 || !clearButton || !teamCodeButton) {
        console.error('Không tìm thấy các phần tử DOM cần thiết!');
        return;
    }

    // Phân tích dữ liệu
    const { champions: { mainChampions: champions }, items: { mainItems: items }, augments: { mainAugs: augments }, traits: { mainTraits: traits } } = data;

    // Kiểm tra dữ liệu
    if (!champions || !items || !augments || !traits) {
        console.error('Dữ liệu đầu vào không hợp lệ!');
        return;
    }

    // Danh sách lưu thứ tự thêm tướng và augment
    const championOrder = [];
    const selectedAugments = [];

    // Hàm hiển thị tooltip tái sử dụng
    function showTooltip(message, x, y, duration = 2000) {
        const tooltip = document.createElement('div');
        tooltip.classList.add('custom-tooltip');
        tooltip.textContent = message;
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${x + 10}px`;
        tooltip.style.top = `${y + 10}px`;
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.zIndex = '1000';
        tooltip.style.fontSize = '14px';
        document.body.appendChild(tooltip);

        setTimeout(() => {
            tooltip.remove();
        }, duration);
    }

    // Hàm tạo teamcode
    function generateTeamCode() {
        const hexIndexes = Array(10).fill('000');
        championOrder.slice(0, 10).forEach(({ apiName }, i) => {
            const hexIndexEntry = hexIndexData.find(h => h.apiName === apiName);
            if (hexIndexEntry && hexIndexEntry.hexIndex) {
                hexIndexes[i] = hexIndexEntry.hexIndex;
            }
        });
        return `02${hexIndexes.join('')}TFTSet14`;
    }

    // Hiển thị danh sách đặc điểm
    function renderBuilderTraits() {
        const traitCounts = {};
        const uniqueChampions = new Set();

        championOrder.forEach(({ apiName, index }) => {
            if (!uniqueChampions.has(apiName)) {
                uniqueChampions.add(apiName);
                const champion = champions.find(c => c.apiName === apiName);
                if (champion && champion.traits) {
                    champion.traits.forEach(trait => {
                        traitCounts[trait.apiName] = (traitCounts[trait.apiName] || 0) + 1;
                    });
                }

                const hexagon = document.querySelector(`.hexagon[data-index="${index}"]`);
                if (hexagon) {
                    const hexagonItems = hexagon.querySelector('.hexagon-items');
                    if (hexagonItems) {
                        Array.from(hexagonItems.children).forEach(span => {
                            const img = span.querySelector('img');
                            const item = items.find(i => i.apiName === img.dataset.apiName);
                            if (item?.category === 'emblem' && item.incompatibleTraits?.length > 0) {
                                const emblemTraitApiName = item.incompatibleTraits[0];
                                traitCounts[emblemTraitApiName] = (traitCounts[emblemTraitApiName] || 0) + 1;
                            }
                        });
                    }
                }
            }
        });

        const traitList = Object.keys(traitCounts).map(traitApiName => {
            const trait = traits.find(t => t.apiName === traitApiName);
            if (!trait) return null;

            const count = traitCounts[traitApiName];
            let style = 0;
            let maxMinUnits = 0;

            if (trait.effects) {
                trait.effects.forEach(effect => {
                    if (count >= effect.minUnits && effect.minUnits > maxMinUnits) {
                        style = effect.style;
                        maxMinUnits = effect.minUnits;
                    }
                });
            }

            let badgeImage = '/assets/images/trait-not.png';
            if (trait.effects?.length === 1) {
                badgeImage = '/assets/images/trait-unique.png';
            } else {
                badgeImage = {
                    0: '/assets/images/trait-not.png',
                    1: '/assets/images/trait-bronze.png',
                    3: '/assets/images/trait-silver.png',
                    4: '/assets/images/trait-gold.png',
                    5: '/assets/images/trait-prism.png'
                }[style] || '/assets/images/trait-not.png';
            }

            return {
                apiName: trait.apiName,
                name: trait.name,
                icon: trait.icon,
                count,
                style,
                category: trait.category || 'other',
                effects: trait.effects || [],
                activeMinUnits: maxMinUnits,
                badgeImage,
                isUnique: trait.effects?.length === 1
            };
        }).filter(t => t !== null);

        traitList.sort((a, b) => {
            if (a.style !== b.style) return b.style - a.style;
            if (a.isUnique !== b.isUnique) return a.isUnique ? -1 : 1;
            if (a.category !== b.category) return a.category === 'origin' ? -1 : 1;
            return b.count - a.count;
        });

        // Hiển thị đặc điểm hoặc HTML mặc định nếu trống
        if (traitList.length === 0) {
            builderTraits.innerHTML = `<span class="builder-title">traits</span>`;
        } else {
            builderTraits.innerHTML = traitList.map(({ apiName, name, icon, count, style, effects, activeMinUnits, badgeImage }) => {
                const minUnitsList = effects.map(effect => effect.minUnits).sort((a, b) => a - b);
                const traitNumberHTML = minUnitsList.map(minUnit => {
                    const isActive = count >= minUnit && minUnit === activeMinUnits;
                    return `<span style="opacity: ${isActive ? 1 : 0.5}">${minUnit}</span>`;
                }).join('<span>I</span>');

                return `
                    <div class="trait-item style-${style}" data-api-name="${apiName}">
                        <div class="trait-icon">
                            <img src="${icon}" alt="${name}" class="style-${style}">
                            <img src="${badgeImage}" alt="trait badge">
                        </div>
                        <div class="trait-content">
                            <div class="trait-title">
                                <span class="trait-count">${count}</span>
                                <span>-</span>
                                <span class="trait-name">${name}</span>
                            </div>
                            <div class="trait-number">${traitNumberHTML}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        setIndexer(data || {});
        setupTooltips();
    }

    // Hiển thị danh sách tướng
    function renderBuilderChampions(champions, label = "cost") {
        let data = label === "name" ? [...champions].sort((a, b) => a.name.localeCompare(b.name)) : champions;

        if (label === "traits") {
            const apiNameAndIconCostRange = apiNameAndData(champions, ['icon', 'cost', 'range']);
            builderChampions.innerHTML = traits.map(({ name: nameTrait, icon: iconTrait, champions, apiName: apiNameTrait }) => `
                <div class="builder-list-traits">
                    <div class="list-traits-title" draggable="false">
                        <span><img src="${iconTrait}" alt="${nameTrait}" data-api-name="${apiNameTrait}"></span>
                        <span>${nameTrait}</span>
                    </div>
                    <div class="list-traits-champions">
                        ${champions.map(({ apiName, name }) => `
                            <div class="tier-list cost-${apiNameAndIconCostRange[apiName][1]}" draggable="true" 
                                 data-api-name="${apiName}" data-range="${apiNameAndIconCostRange[apiName][2]}" 
                                 data-icon="${apiNameAndIconCostRange[apiName][0]}" data-name="${name}">
                                <div class="hexagon-tier-champ">
                                    <span style="background-image: url(${apiNameAndIconCostRange[apiName][0]})" title="${name}"></span>
                                </div>
                                <div class="hexagon-title">${name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        } else {
            builderChampions.innerHTML = data.map(({ apiName, name, icon, cost, range }) => `
                <div class="tier-list cost-${cost}" draggable="true" 
                     data-api-name="${apiName}" data-range="${range}" 
                     data-icon="${icon}" data-name="${name}">
                    <div class="hexagon-tier-champ">
                        <span style="background-image: url(${icon})" title="${name}"></span>
                    </div>
                    <div class="hexagon-title">${name}</div>
                </div>
            `).join('');
        }

        document.querySelectorAll('.tier-list').forEach(champion => {
            champion.addEventListener('click', () => {
                const range = parseInt(champion.dataset.range);
                const targetRow = range === 1 ? [0, 1, 2, 3, 4, 5, 6] : range === 2 ? [7, 8, 9, 10, 11, 12, 13] : [21, 22, 23, 24, 25, 26, 27];
                const allRows = [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27]];

                let targetHexagon = null;
                for (const row of [targetRow, ...allRows.filter(r => r !== targetRow)]) {
                    for (const index of row) {
                        const hexagon = document.querySelector(`.hexagon[data-index="${index}"]`);
                        if (hexagon && !hexagon.querySelector('.hexagon-icon')) {
                            targetHexagon = hexagon;
                            break;
                        }
                    }
                    if (targetHexagon) break;
                }

                if (targetHexagon) {
                    const hexagonContent = createHexagonContent({
                        apiName: champion.dataset.apiName,
                        icon: champion.dataset.icon,
                        name: champion.dataset.name,
                        cost: parseInt(champion.classList[1].split('-')[1])
                    });
                    targetHexagon.appendChild(hexagonContent);
                    targetHexagon.classList.add('has-champ');
                    championOrder.push({ index: targetHexagon.dataset.index, timestamp: Date.now(), apiName: champion.dataset.apiName });
                    renderBuilderTraits();
                }
            });

            champion.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', JSON.stringify({
                    type: 'champion',
                    apiName: champion.dataset.apiName,
                    icon: champion.dataset.icon,
                    name: champion.dataset.name,
                    cost: parseInt(champion.classList[1].split('-')[1])
                }));
            });
        });
    }

    // Lọc danh sách tướng
    function filterBuilderChampions() {
        document.querySelectorAll('.builder-champions .builder-filter button').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.builder-champions .builder-filter button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderBuilderChampions(champions, btn.dataset.label);
                filterInput(".builder-champions .tier-list", ".builder-champions input");
                setIndexer(data || {});
                setupTooltips();
            });
        });
    }

    // Lọc danh sách vật phẩm
    function filterBuilderItems() {
        const allItemButtons = document.querySelectorAll('.builder-items .builder-filter button');
        allItemButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                document.body.setAttribute("btn-filter", `category-${index + 1 === allItemButtons.length ? 'other' : index + 1}-active`);
            });
        });
    }

    // Hiển thị danh sách vật phẩm
    builderItems.innerHTML = items.map(({ name, icon, category, tier, apiName }) => `
        <div class="item-child item-${category} tier-${tier}" draggable="true" data-api-name="${apiName}" data-icon="${icon}" data-name="${name}">
            <img src="${icon}" alt="${name}">
            <span>${name}</span>
        </div>
    `).join('');

    // Hàm tạo cấu trúc HTML cho ô hexagon
    function createHexagonContent({ apiName, icon, name, cost }) {
        const hexagonIcon = document.createElement('div');
        hexagonIcon.classList.add('hexagon-icon', `champ-cost-${cost}`);
        hexagonIcon.dataset.starState = '0';
        hexagonIcon.dataset.apiName = apiName;

        const hexagonChamp = document.createElement('div');
        hexagonChamp.classList.add('hexagon-champ');
        const img = document.createElement('img');
        img.src = icon;
        hexagonChamp.appendChild(img);

        const hexagonItems = document.createElement('div');
        hexagonItems.classList.add('hexagon-items');

        const hexagonName = document.createElement('div');
        hexagonName.classList.add('hexagon-name');
        hexagonName.textContent = name;

        hexagonIcon.appendChild(hexagonChamp);
        hexagonIcon.appendChild(hexagonItems);
        hexagonIcon.appendChild(hexagonName);
        return hexagonIcon;
    }

    // Hàm thêm item vào ô hexagon
    function addItemToHexagon(hexagon, itemData) {
        const hexagonItems = hexagon.querySelector('.hexagon-items');
        if (!hexagonItems) {
            console.warn('Không tìm thấy hexagon-items trong ô hexagon!');
            return;
        }

        if (hexagonItems.children.length >= 3) {
            console.warn('Ô hexagon đã chứa tối đa 3 vật phẩm!');
            return;
        }

        const championApiName = hexagon.querySelector('.hexagon-icon')?.dataset.apiName;
        const champion = champions.find(c => c.apiName === championApiName);
        if (!champion) {
            console.warn('Không tìm thấy thông tin tướng trong ô hexagon!');
            return;
        }

        const item = items.find(i => i.apiName === itemData.apiName);
        if (!item) {
            console.warn('Không tìm thấy thông tin vật phẩm!');
            return;
        }

        if (item.category === 'emblem' && item.incompatibleTraits?.length > 0) {
            const emblemTraitApiName = item.incompatibleTraits[0];
            const emblemTrait = traits.find(t => t.apiName === emblemTraitApiName);

            if (!emblemTrait) {
                console.warn('Không tìm thấy đặc điểm tương ứng với emblem:', emblemTraitApiName);
                return;
            }

            if (champion.traits.some(trait => trait.apiName === emblemTraitApiName)) {
                console.warn(`Tướng ${champion.name} đã có đặc điểm ${emblemTrait.name}, không thể thêm emblem!`);
                return;
            }

            const existingItems = Array.from(hexagonItems.children).map(span => {
                const img = span.querySelector('img');
                return items.find(i => i.apiName === img.dataset.apiName);
            });
            if (existingItems.some(ei => ei?.category === 'emblem' && ei.incompatibleTraits?.[0] === emblemTraitApiName)) {
                console.warn(`Tướng ${champion.name} đã có emblem ${emblemTrait.name}, không thể thêm trùng!`);
                return;
            }
        }

        const itemSpan = document.createElement('span');
        itemSpan.classList.add('item-span');
        const itemImg = document.createElement('img');
        itemImg.src = itemData.icon;
        itemImg.width = 24;
        itemImg.height = 24;
        itemImg.dataset.apiName = itemData.apiName;
        itemSpan.appendChild(itemImg);
        hexagonItems.appendChild(itemSpan);

        itemSpan.setAttribute('draggable', 'true');
        itemSpan.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', JSON.stringify({
                type: 'remove-item',
                apiName: itemData.apiName,
                hexagonIndex: hexagon.dataset.index
            }));
        });

        itemSpan.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            hexagonItems.removeChild(itemSpan);
            renderBuilderTraits();
        });

        itemSpan.addEventListener('contextmenu', e => {
            e.preventDefault();
            e.stopPropagation();
            hexagonItems.removeChild(itemSpan);
            renderBuilderTraits();
        });

        renderBuilderTraits();
    }

    // Xử lý click và kéo thả vật phẩm
    document.querySelectorAll('.item-child').forEach(item => {
        item.addEventListener('click', () => {
            const sortedOrder = [...championOrder].sort((a, b) => b.timestamp - a.timestamp);
            let targetHexagon = null;
            for (const { index } of sortedOrder) {
                const hexagon = document.querySelector(`.hexagon[data-index="${index}"]`);
                if (hexagon && hexagon.querySelector('.hexagon-icon') && hexagon.querySelector('.hexagon-items')?.children.length < 3) {
                    targetHexagon = hexagon;
                    break;
                }
            }

            if (targetHexagon) {
                addItemToHexagon(targetHexagon, {
                    apiName: item.dataset.apiName,
                    icon: item.dataset.icon,
                    name: item.dataset.name
                });
            }
        });

        item.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', JSON.stringify({
                type: 'item',
                apiName: item.dataset.apiName,
                icon: item.dataset.icon,
                name: item.dataset.name
            }));
        });
    });

    // Xử lý kéo thả cho ô hexagon
    hexagons.forEach(hexagon => {
        hexagon.addEventListener('dragover', e => e.preventDefault());

        hexagon.addEventListener('drop', e => {
            e.preventDefault();
            try {
                const data = JSON.parse(e.dataTransfer.getData('text/plain'));
                if (data.type === 'champion') {
                    if (!hexagon.querySelector('.hexagon-icon')) {
                        const hexagonContent = createHexagonContent(data);
                        hexagon.appendChild(hexagonContent);
                        hexagon.classList.add('has-champ');
                        championOrder.push({ index: hexagon.dataset.index, timestamp: Date.now(), apiName: data.apiName });
                        renderBuilderTraits();
                    }
                } else if (data.type === 'move-champion') {
                    if (data.hexagonIndex !== hexagon.dataset.index) {
                        const sourceHexagon = document.querySelector(`.hexagon[data-index="${data.hexagonIndex}"]`);
                        const sourceHexagonIcon = sourceHexagon?.querySelector('.hexagon-icon');
                        const targetHexagonIcon = hexagon.querySelector('.hexagon-icon');

                        if (sourceHexagon && sourceHexagonIcon) {
                            if (targetHexagonIcon) {
                                hexagon.removeChild(targetHexagonIcon);
                                sourceHexagon.removeChild(sourceHexagonIcon);
                                hexagon.appendChild(sourceHexagonIcon);
                                sourceHexagon.appendChild(targetHexagonIcon);
                                const sourceIndex = championOrder.findIndex(o => o.index === data.hexagonIndex);
                                const targetIndex = championOrder.findIndex(o => o.index === hexagon.dataset.index);
                                if (sourceIndex !== -1) championOrder[sourceIndex].index = hexagon.dataset.index;
                                if (targetIndex !== -1) championOrder[targetIndex].index = data.hexagonIndex;
                            } else {
                                hexagon.appendChild(sourceHexagonIcon);
                                sourceHexagon.classList.remove('has-champ');
                                hexagon.classList.add('has-champ');
                                const sourceIndex = championOrder.findIndex(o => o.index === data.hexagonIndex);
                                if (sourceIndex !== -1) championOrder[sourceIndex].index = hexagon.dataset.index;
                            }
                            renderBuilderTraits();
                        }
                    }
                } else if (data.type === 'item') {
                    if (hexagon.querySelector('.hexagon-icon')) {
                        addItemToHexagon(hexagon, data);
                    }
                }
            } catch (error) {
                console.error('Lỗi khi thả:', error);
            }
        });

        hexagon.addEventListener('dragstart', e => {
            const hexagonIcon = hexagon.querySelector('.hexagon-icon');
            if (hexagonIcon && !e.target.closest('.item-span')) {
                e.dataTransfer.setData('text/plain', JSON.stringify({
                    type: 'move-champion',
                    hexagonIndex: hexagon.dataset.index
                }));
                hexagonIcon.setAttribute('draggable', 'true');
            }
        });
    });

    // Xử lý thả ra ngoài
    document.body.addEventListener('dragover', e => e.preventDefault());

    document.body.addEventListener('drop', e => {
        if (!e.target.closest('.hexagon')) {
            try {
                const data = JSON.parse(e.dataTransfer.getData('text/plain'));
                if (data.type === 'move-champion') {
                    const hexagon = document.querySelector(`.hexagon[data-index="${data.hexagonIndex}"]`);
                    if (hexagon) {
                        const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                        if (hexagonIcon) {
                            hexagon.removeChild(hexagonIcon);
                            hexagon.classList.remove('has-champ');
                            const index = championOrder.findIndex(o => o.index === data.hexagonIndex);
                            if (index !== -1) championOrder.splice(index, 1);
                            renderBuilderTraits();
                        }
                    }
                } else if (data.type === 'remove-item') {
                    const hexagon = document.querySelector(`.hexagon[data-index="${data.hexagonIndex}"]`);
                    if (hexagon) {
                        const hexagonItems = hexagon.querySelector('.hexagon-items');
                        const itemSpan = hexagonItems.querySelector(`.item-span img[data-api-name="${data.apiName}"]`)?.parentElement;
                        if (itemSpan) {
                            hexagonItems.removeChild(itemSpan);
                            renderBuilderTraits();
                        }
                    }
                }
            } catch (error) {
                console.error('Lỗi khi thả ra ngoài:', error);
            }
        }
    });

    // Xử lý nút Clear
    clearButton.addEventListener('click', () => {
        hexagons.forEach(hexagon => {
            const hexagonIcon = hexagon.querySelector('.hexagon-icon');
            if (hexagonIcon) {
                hexagon.removeChild(hexagonIcon);
                hexagon.classList.remove('has-champ');
            }
        });
        championOrder.length = 0;
        renderBuilderTraits();
    });

    // Xử lý nhấp chuột phải và trái cho ô hexagon
    hexagons.forEach(hexagon => {
        hexagon.addEventListener('contextmenu', e => {
            e.preventDefault();
            const hexagonIcon = hexagon.querySelector('.hexagon-icon');
            if (hexagonIcon && !e.target.closest('.item-span')) {
                hexagon.removeChild(hexagonIcon);
                hexagon.classList.remove('has-champ');
                const index = championOrder.findIndex(o => o.index === hexagon.dataset.index);
                if (index !== -1) championOrder.splice(index, 1);
                renderBuilderTraits();
            }
        });

        hexagon.addEventListener('click', e => {
            const hexagonIcon = hexagon.querySelector('.hexagon-icon');
            if (!hexagonIcon || e.target.closest('.item-span')) return;

            e.stopPropagation();
            let starState = parseInt(hexagonIcon.dataset.starState) || 0;
            starState = (starState + 1) % 3;
            hexagonIcon.dataset.starState = starState;

            const existingStarChamp = hexagonIcon.querySelector('.star-champ');
            if (existingStarChamp) hexagonIcon.removeChild(existingStarChamp);

            if (starState === 1) {
                const starChamp = document.createElement('div');
                starChamp.classList.add('star-champ', 'three-stars');
                starChamp.innerHTML = `
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                `;
                hexagonIcon.insertAdjacentElement('afterbegin', starChamp);
            } else if (starState === 2) {
                const starChamp = document.createElement('div');
                starChamp.classList.add('star-champ', 'four-stars');
                starChamp.innerHTML = `
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                `;
                hexagonIcon.insertAdjacentElement('afterbegin', starChamp);
            }
        });
    });

    // Xử lý teamCodeButton
    teamCodeButton.addEventListener('click', e => {
        const teamCode = generateTeamCode();
        navigator.clipboard.writeText(teamCode).then(() => {
            showTooltip('Đã copy', e.clientX, e.clientY);
        }).catch(err => {
            console.error('Lỗi khi copy teamcode:', err);
            showTooltip('Lỗi khi copy', e.clientX, e.clientY);
        });
    });

    // Hàm hiển thị augments trong selectedAugs và cập nhật countAuguments
    function renderSelectedAugments() {
        selectedAugs.innerHTML = selectedAugments.map(aug => `
            <div class="augments-child augs-tier-${aug.tier} tier-${aug.tier2}" data-api-name="${aug.apiName}">
                <img src="${aug.icon}" alt="${aug.name}">
                <span>${aug.name}</span>
            </div>
        `).join('');
        
        countAuguments.textContent = selectedAugments.length;
        
        // Cập nhật trạng thái active trong builderRenderAugs
        document.querySelectorAll('.builder-render-augs .augments-child').forEach(augElement => {
            const apiName = augElement.querySelector('img').dataset.apiName;
            if (selectedAugments.some(aug => aug.apiName === apiName)) {
                augElement.classList.add('active');
            } else {
                augElement.classList.remove('active');
            }
        });

        // Cập nhật builderAugments nếu selectedAugs trống
        if (selectedAugments.length === 0) {
            builderAugments.innerHTML = `
                <span class="builder-title">Augments</span>
                <span class="builder-icon-augs"><img src="/assets/images/add-augs.png" alt=""></span>
            `;
        }
    }

    // Hiển thị augments trong builderRenderAugs
    function renderBuilderAugments() {
        builderRenderAugs.innerHTML = augments.map(({ name, icon, tier, tier2, apiName }) => `
            <div class="augments-child augs-tier-${tier} tier-${tier2}" data-api-name="${apiName}">
                <img src="${icon}" alt="${name}" data-api-name="${apiName}">
                <span>${name}</span>
            </div>
        `).join('');

        // Thêm sự kiện click cho các augment trong builderRenderAugs
        document.querySelectorAll('.builder-render-augs .augments-child').forEach(augElement => {
            augElement.addEventListener('click', () => {
                const apiName = augElement.querySelector('img').dataset.apiName;
                const aug = augments.find(a => a.apiName === apiName);
                if (!aug) return;

                const index = selectedAugments.findIndex(a => a.apiName === apiName);
                if (index !== -1) {
                    // Nếu augment đã có, xóa nó
                    selectedAugments.splice(index, 1);
                } else if (selectedAugments.length < 8) {
                    // Nếu chưa có và chưa đủ 8, thêm augment
                    selectedAugments.push(aug);
                }
                renderSelectedAugments();
            });
        });

        renderSelectedAugments();
    }

    // Lọc danh sách augments
    function filterBuilderAugs() {
        const allItemButtons = document.querySelectorAll('.builder-list-augments .builder-filter button');
        allItemButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                document.body.setAttribute("augs-btn-filter", `category-${index}-active`);
            });
        });
    }

    // Xử lý click vào builderAugments để toggle lớp active
    builderAugments.addEventListener('click', () => {
        builderListAugments.classList.add('active');
    });

    // Xử lý click vào augment trong selectedAugs để xóa
    selectedAugs.addEventListener('click', e => {
        const augElement = e.target.closest('.augments-child');
        if (augElement) {
            const apiName = augElement.dataset.apiName;
            const index = selectedAugments.findIndex(aug => aug.apiName === apiName);
            if (index !== -1) {
                selectedAugments.splice(index, 1);
                renderSelectedAugments();
            }
        }
    });

    // Xử lý nút Clear cho selectedAugs
    selectedAugsClear.addEventListener('click', () => {
        selectedAugments.length = 0;
        renderSelectedAugments();
    });

    // Xử lý nút OK cho selectedAugs
    selectedAugsOk.addEventListener('click', () => {
        if (selectedAugments.length === 0) {
            builderAugments.innerHTML = `
                <span class="builder-title">Augments</span>
                <span class="builder-icon-augs"><img src="/assets/images/add-augs.png" alt=""></span>
            `;
        } else {
            builderAugments.innerHTML = selectedAugments.map(aug => `
                <div class="augments-child augs-tier-${aug.tier} tier-${aug.tier2}" data-api-name="${aug.apiName}">
                    <img src="${aug.icon}" alt="${aug.name}">
                    <span>${aug.name}</span>
                </div>
            `).join('');
        }
        builderListAugments.classList.remove('active');
    });

    // Gọi hàm khởi tạo
    renderBuilderChampions(champions, "cost");
    renderBuilderTraits();
    renderBuilderAugments();
    filterBuilderItems();
    filterBuilderChampions();
    filterBuilderAugs();
    filterInput(".builder-champions .tier-list", ".builder-champions input");
    filterInput(".builder-items .item-child", ".builder-items input");
    filterInput(".builder-render-augs .augments-child", ".builder-list-augments input");
}