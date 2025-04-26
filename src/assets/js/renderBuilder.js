import { apiNameAndData, filterInput, setupTooltips, customTooltip } from '/src/assets/js/global-defer.js';

export function renderBuilder(data, hexIndexData) {
    const builderChampions = document.querySelector('.builder-champions .builder-list');
    const builderItems = document.querySelector('.builder-items .builder-list');
    const builderTraits = document.querySelector('.builder-traits');
    const builderAugments = document.querySelector('.builder-augments');
    const builderListAugments = document.querySelector('.builder-list-augments');
    const builderRenderAugs = document.querySelector('.builder-render-augs');
    const selectedAugs = document.querySelector('.selected-augs');
    const countAugments = document.querySelector('.count-augments');
    const selectedAugsClear = document.querySelector('.selected-augs-clear');
    const selectedAugsOk = document.querySelector('.selected-augs-ok');
    let hexagons = document.querySelectorAll('.hexagon');
    const clearButton = document.querySelector('.builder-clear');
    const teamCodeButton = document.querySelector('.builder-copy');
    const positionComp = document.querySelector('.position-comp');
    const chessboard = document.querySelector('.builder-chessboard');

    if (
        !builderChampions ||
        !builderItems ||
        !builderTraits ||
        !builderAugments ||
        !builderListAugments ||
        !builderRenderAugs ||
        !selectedAugs ||
        !countAugments ||
        !selectedAugsClear ||
        !selectedAugsOk ||
        !clearButton ||
        !teamCodeButton ||
        !positionComp ||
        !chessboard
    ) {
        console.warn('Missing required DOM elements');
        return;
    }

    if (hexagons.length !== 28) {
        positionComp.innerHTML = '';
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
            }
            fragment.appendChild(rowDiv);
        }
        positionComp.appendChild(fragment);
        hexagons = document.querySelectorAll('.hexagon');
    }

    const {
        champions: { mainChampions: champions },
        items: { mainItems: items },
        augments: { mainAugs: augments },
        traits: { mainTraits: traits },
    } = data;

    if (!champions || !items || !augments || !traits) {
        console.warn('Missing required data');
        return;
    }

    const champAndIconCost = apiNameAndData(champions, ['icon', 'cost', 'name', 'traits']);
    const itemAndIcon = apiNameAndData(items, ['icon']);
    const championOrder = [];
    const selectedAugments = [];
    let shouldUpdateTraits = false;

    const championMap = champions.map(c => c.apiName);
    const itemMap = items.map(i => i.apiName);
    const augmentMap = augments.map(a => a.apiName);

    let urlUpdateTimeout = null;
    function updateTeamUrl() {
        clearTimeout(urlUpdateTimeout);
        urlUpdateTimeout = setTimeout(() => {
            const teamString = encodeTeamToString();
            const newUrl = new URL(window.location);
            if (championOrder.length > 0 || selectedAugments.length > 0) {
                if (teamString) {
                    newUrl.searchParams.set('comp', teamString);
                }
            } else {
                newUrl.searchParams.delete('comp');
            }
            history.replaceState(null, '', newUrl);
        }, 100);
    }

    function encodeTeamToString() {
        const teamData = {
            champions: championOrder.map(({ apiName, index }) => {
                const hexagon = document.querySelector(`.hexagon[data-index="${index}"]`);
                const items = hexagon
                    ? Array.from(hexagon.querySelectorAll('.hexagon-items .item-span img')).map(
                          img => itemMap.indexOf(img.dataset.apiName)
                      )
                    : [];
                const stars = hexagon
                    ? parseInt(hexagon.querySelector('.hexagon-icon')?.dataset.starState || 0)
                    : 0;
                return {
                    id: championMap.indexOf(apiName),
                    pos: parseInt(index),
                    stars,
                    items,
                };
            }),
            augments: selectedAugments.map(({ apiName }) => augmentMap.indexOf(apiName)),
        };
        try {
            return btoa(JSON.stringify(teamData));
        } catch (error) {
            console.error('Error encoding team:', error);
            return '';
        }
    }

    function decodeTeamFromString(compString) {
        if (!compString) return null;

        try {
            const jsonString = atob(compString);
            const teamData = JSON.parse(jsonString);
            const usedPositions = new Set();

            const champions = (teamData.champions || [])
                .map((champ, idx) => {
                    if (
                        typeof champ.id !== 'number' ||
                        champ.id < 0 ||
                        champ.id >= championMap.length ||
                        typeof champ.pos !== 'number' ||
                        champ.pos < 0 ||
                        champ.pos > 27 ||
                        typeof champ.stars !== 'number' ||
                        champ.stars < 0 ||
                        champ.stars > 2 ||
                        (champ.items && !Array.isArray(champ.items)) ||
                        champ.items?.some(item => item < 0 || item >= itemMap.length)
                    ) {
                        console.warn(`Invalid champion data at index ${idx}:`, champ);
                        return null;
                    }
                    if (usedPositions.has(champ.pos)) {
                        console.warn(`Duplicate position ${champ.pos} at champion index ${idx}`);
                        return null;
                    }
                    usedPositions.add(champ.pos);
                    return {
                        apiName: championMap[champ.id],
                        boardIndex: champ.pos,
                        stars: champ.stars,
                        items: champ.items ? champ.items.map(i => itemMap[i]).filter(i => i) : [],
                    };
                })
                .filter(champ => champ !== null);

            const augments = (teamData.augments || [])
                .map((augId, idx) => {
                    if (typeof augId !== 'number' || augId < 0 || augId >= augmentMap.length) {
                        console.warn(`Invalid augment at index ${idx}: augId=${augId}`);
                        return null;
                    }
                    return { apiName: augmentMap[augId] };
                })
                .filter(aug => aug !== null);

            return champions.length > 0 || augments.length > 0 ? { champions, augments } : null;
        } catch (error) {
            console.error('Error decoding team string:', error, compString);
            return null;
        }
    }

    function renderTeam(teamData) {
        if (!teamData) return false;

        try {
            const { champions: finalComp, augments: augmentsData } = teamData;

            hexagons.forEach(hexagon => {
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                if (hexagonIcon) {
                    hexagon.removeChild(hexagonIcon);
                    hexagon.classList.remove('has-champ');
                }
            });
            championOrder.length = 0;
            selectedAugments.length = 0;

            finalComp.forEach(({ apiName, boardIndex, items, stars }) => {
                if (!apiName || !champAndIconCost[apiName]) return;

                const hexagon = positionComp.querySelector(`.hexagon[data-index="${boardIndex}"]`);
                if (!hexagon) return;

                const championData = champAndIconCost[apiName];
                const hexagonContent = createHexagonContent({
                    apiName,
                    icon: championData[0],
                    name: championData[2],
                    cost: championData[1],
                    stars,
                });

                hexagon.appendChild(hexagonContent);
                hexagon.classList.add('has-champ');

                championOrder.push({ index: hexagon.dataset.index, timestamp: Date.now(), apiName });

                if (items && items.length > 0) {
                    items.forEach(item => {
                        if (itemAndIcon[item]) {
                            addItemToHexagon(hexagon, {
                                apiName: item,
                                icon: itemAndIcon[item],
                                name: item,
                            });
                        }
                    });
                }
            });

            if (augmentsData) {
                const augmentsToRender = augmentsData
                    .map(({ apiName }) => augments.find(aug => aug.apiName === apiName))
                    .filter(aug => aug);

                selectedAugments.push(...augmentsToRender);
                builderAugments.innerHTML = augmentsToRender.length > 0
                    ? augmentsToRender
                          .map(
                              aug => `
                              <div class="augments-child augs-tier-${aug.tier} tier-${aug.tier2}" data-api-name="${aug.apiName}">
                                  <img src="${aug.icon}" alt="${aug.name}">
                                  <span>${aug.name}</span>
                              </div>
                          `
                          )
                          .join('')
                    : `
                      <span class="builder-title">Augments</span>
                      <span class="builder-icon-augs"><img src="/assets/images/add-augs.png" alt=""></span>
                  `;
                countAugments.textContent = augmentsToRender.length;
                renderSelectedAugments();
            }

            shouldUpdateTraits = true;
            renderBuilderTraits();
            return true;
        } catch (error) {
            console.error('Error rendering team:', error);
            return false;
        }
    }

    function loadCompFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const compString = urlParams.get('comp');
        if (!compString) return false;

        const teamData = decodeTeamFromString(compString);
        const success = renderTeam(teamData);
        if (!success) {
            console.warn('Failed to render team from URL:', compString);
            customTooltip('Đội hình không hợp lệ, kiểm tra chuỗi comp', 100, 100, 3000);
        }
        return success;
    }

    function loadCompFromTierList() {
        const compData = localStorage.getItem('builderCompData');
        const augmentsData = localStorage.getItem('builderAugmentsData');
        if (!compData) return false;

        try {
            const teamData = {
                champions: JSON.parse(compData).map(champ => ({
                    ...champ,
                    stars: champ.stars === 3 ? 1 : champ.stars === 4 ? 2 : 0,
                })),
                augments: augmentsData ? JSON.parse(augmentsData) : [],
            };
            const loaded = renderTeam(teamData);
            if (loaded) {
                localStorage.removeItem('builderCompData');
                localStorage.removeItem('builderAugmentsData');
                updateTeamUrl();
            }
            return loaded;
        } catch (error) {
            console.error('Error loading comp data:', error);
            return false;
        }
    }

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

    function renderBuilderTraits() {
        if (!shouldUpdateTraits) return;
        shouldUpdateTraits = false;

        const traitCounts = {};
        const processedChampionsForTraits = new Set();
        const emblemTraitsByApiName = {};

        championOrder.forEach(({ apiName, index }) => {
            if (!processedChampionsForTraits.has(apiName)) {
                const champion = champions.find(c => c.apiName === apiName);
                if (champion && champion.traits) {
                    champion.traits.forEach(trait => {
                        traitCounts[trait.apiName] = (traitCounts[trait.apiName] || 0) + 1;
                    });
                }
                processedChampionsForTraits.add(apiName);
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
                            if (!emblemTraitsByApiName[apiName]) {
                                emblemTraitsByApiName[apiName] = new Set();
                            }
                            if (!emblemTraitsByApiName[apiName].has(emblemTraitApiName)) {
                                emblemTraitsByApiName[apiName].add(emblemTraitApiName);
                                traitCounts[emblemTraitApiName] =
                                    (traitCounts[emblemTraitApiName] || 0) + 1;
                            }
                        }
                    });
                }
            }
        });

        const traitList = Object.keys(traitCounts)
            .map(traitApiName => {
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
                        5: '/assets/images/trait-prism.png',
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
                    isUnique: trait.effects?.length === 1,
                };
            })
            .filter(t => t !== null);

        traitList.sort((a, b) => {
            if (a.style !== b.style) return b.style - a.style;
            if (a.isUnique !== b.isUnique) return a.isUnique ? -1 : 1;
            if (a.category !== b.category) return a.category === 'origin' ? -1 : 1;
            return b.count - a.count;
        });

        if (traitList.length === 0) {
            builderTraits.innerHTML = `<span class="builder-title">traits</span>`;
        } else {
            builderTraits.innerHTML = traitList
                .map(
                    ({ apiName, name, icon, count, style, effects, activeMinUnits, badgeImage }) => {
                        const minUnitsList = effects
                            .map(effect => effect.minUnits)
                            .sort((a, b) => a - b);
                        const traitNumberHTML = minUnitsList
                            .map(minUnit => {
                                const isActive = count >= minUnit && minUnit === activeMinUnits;
                                return `<span style="opacity: ${
                                    isActive ? 1 : 0.5
                                }">${minUnit}</span>`;
                            })
                            .join('<span>|</span>');

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
                    }
                )
                .join('');
        }
        setupTooltips();
    }

    function createDragPreview(icon, name) {
        const preview = document.createElement('div');
        preview.className = 'drag-preview';
        preview.style.position = 'absolute';
        preview.style.zIndex = '1000';
        preview.style.pointerEvents = 'none';
        preview.style.width = '48px';
        preview.style.height = '48px';
        preview.style.backgroundImage = `url(${icon})`;
        preview.style.backgroundSize = 'cover';
        preview.style.border = '2px solid #fff';
        preview.style.borderRadius = '8px';
        preview.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        preview.dataset.name = name;
        document.body.appendChild(preview);
        return preview;
    }

    function updateDragPreview(preview, x, y) {
        if (preview) {
            preview.style.left = `${x - 24}px`;
            preview.style.top = `${y - 24}px`;
        }
    }

    function removeDragPreview(preview) {
        if (preview && preview.parentNode) {
            preview.parentNode.removeChild(preview);
        }
    }

    function attachHexagonEvents(hexagons) {
        hexagons.forEach(hexagon => {
            let touchStartTime = 0;
            let dragPreview = null;
    
            hexagon.addEventListener('dragover', e => {
                e.preventDefault();
                hexagon.classList.add('drag-over');
            });
    
            hexagon.addEventListener('dragleave', () => {
                hexagon.classList.remove('drag-over');
            });
    
            hexagon.addEventListener('drop', e => {
                e.preventDefault();
                handleDrop(e, hexagon);
                hexagon.classList.remove('drag-over');
                removeDragPreview(dragPreview);
                dragPreview = null;
            });
    
            hexagon.addEventListener('click', e => {
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                if (hexagonIcon && !e.target.closest('.item-span')) {
                    e.preventDefault();
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
                    updateTeamUrl();
                }
            });
    
            hexagon.addEventListener('touchstart', e => {
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                if (hexagonIcon && !e.target.closest('.item-span')) {
                    touchStartTime = Date.now();
                    hexagon.dataset.touchData = JSON.stringify({
                        type: 'move-champion',
                        hexagonIndex: hexagon.dataset.index,
                    });
                    hexagonIcon.classList.add('dragging');
                    const icon = hexagonIcon.querySelector('.hexagon-champ img').src;
                    const name = hexagonIcon.querySelector('.hexagon-name').textContent;
                    dragPreview = createDragPreview(icon, name);
                    const touch = e.touches[0];
                    updateDragPreview(dragPreview, touch.clientX, touch.clientY);
                }
            });
    
            hexagon.addEventListener('touchend', e => {
                e.preventDefault();
                const touchDuration = Date.now() - touchStartTime;
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');
    
                if (touchDuration < 200 && hexagonIcon && !e.target.closest('.item-span')) {
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
                    updateTeamUrl();
                } else {
                    handleTouchEnd(e, hexagon);
                }
    
                if (hexagon.dataset.touchData) {
                    delete hexagon.dataset.touchData;
                    if (hexagonIcon) {
                        hexagonIcon.classList.remove('dragging');
                    }
                    removeDragPreview(dragPreview);
                    dragPreview = null;
                }
            });
    
            hexagon.addEventListener('dragstart', e => {
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                if (hexagonIcon && !e.target.closest('.item-span')) {
                    e.dataTransfer.setData(
                        'text/plain',
                        JSON.stringify({
                            type: 'move-champion',
                            hexagonIndex: hexagon.dataset.index,
                        })
                    );
                    hexagonIcon.setAttribute('draggable', 'true');
                }
            });
    
            hexagon.addEventListener('contextmenu', e => {
                e.preventDefault();
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                if (hexagonIcon && !e.target.closest('.item-span')) {
                    hexagon.removeChild(hexagonIcon);
                    hexagon.classList.remove('has-champ');
                    const index = championOrder.findIndex(o => o.index === hexagon.dataset.index);
                    if (index !== -1) championOrder.splice(index, 1);
                    shouldUpdateTraits = true;
                    renderBuilderTraits();
                    updateTeamUrl();
                }
            });
        });
    
        chessboard.addEventListener(
            'touchmove',
            e => {
                const source = document.querySelector('[data-touch-data]');
                if (source) {
                    e.preventDefault();
                    const touch = e.touches[0];
                    const dragPreview = document.querySelector('.drag-preview');
                    updateDragPreview(dragPreview, touch.clientX, touch.clientY);
    
                    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                    const targetHexagon = targetElement?.closest('.hexagon');
                    hexagons.forEach(h => h.classList.remove('drag-over'));
                    if (targetHexagon) {
                        targetHexagon.classList.add('drag-over');
                    }
                }
            },
            { passive: false }
        );
    }

    function handleDrop(e, hexagon) {
        try {
            const data = JSON.parse(e.dataTransfer.getData('text/plain'));
            if (data.type === 'champion') {
                if (!hexagon.querySelector('.hexagon-icon')) {
                    const hexagonContent = createHexagonContent(data);
                    hexagon.appendChild(hexagonContent);
                    hexagon.classList.add('has-champ');
                    championOrder.push({
                        index: hexagon.dataset.index,
                        timestamp: Date.now(),
                        apiName: data.apiName,
                    });
                    shouldUpdateTraits = true;
                    renderBuilderTraits();
                    updateTeamUrl();
                }
            } else if (data.type === 'move-champion') {
                if (data.hexagonIndex !== hexagon.dataset.index) {
                    const sourceHexagon = document.querySelector(
                        `.hexagon[data-index="${data.hexagonIndex}"]`
                    );
                    const sourceHexagonIcon = sourceHexagon?.querySelector('.hexagon-icon');
                    const targetHexagonIcon = hexagon.querySelector('.hexagon-icon');

                    if (sourceHexagon && sourceHexagonIcon) {
                        if (targetHexagonIcon) {
                            hexagon.removeChild(targetHexagonIcon);
                            sourceHexagon.removeChild(sourceHexagonIcon);
                            hexagon.appendChild(sourceHexagonIcon);
                            sourceHexagon.appendChild(targetHexagonIcon);
                            const sourceIndex = championOrder.findIndex(
                                o => o.index === data.hexagonIndex
                            );
                            const targetIndex = championOrder.findIndex(
                                o => o.index === hexagon.dataset.index
                            );
                            if (sourceIndex !== -1) championOrder[sourceIndex].index = hexagon.dataset.index;
                            if (targetIndex !== -1)
                                championOrder[targetIndex].index = data.hexagonIndex;
                        } else {
                            hexagon.appendChild(sourceHexagonIcon);
                            sourceHexagon.classList.remove('has-champ');
                            hexagon.classList.add('has-champ');
                            const sourceIndex = championOrder.findIndex(
                                o => o.index === data.hexagonIndex
                            );
                            if (sourceIndex !== -1) championOrder[sourceIndex].index = hexagon.dataset.index;
                        }
                        shouldUpdateTraits = true;
                        renderBuilderTraits();
                        updateTeamUrl();
                    }
                }
            } else if (data.type === 'item') {
                if (hexagon.querySelector('.hexagon-icon')) {
                    addItemToHexagon(hexagon, data);
                    updateTeamUrl();
                }
            }
        } catch (error) {
            console.warn('Error handling drop:', error);
        }
    }

    function handleTouchEnd(e, hexagon) {
        const touch = e.changedTouches[0];
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        const targetHexagon = targetElement?.closest('.hexagon');
        const data = hexagon.dataset.touchData ? JSON.parse(hexagon.dataset.touchData) : null;

        hexagons.forEach(h => h.classList.remove('drag-over'));

        if (data && targetHexagon && targetHexagon !== hexagon) {
            try {
                if (data.type === 'champion') {
                    if (!targetHexagon.querySelector('.hexagon-icon')) {
                        const championElement = document.querySelector(
                            `.tier-list[data-api-name="${data.apiName}"]`
                        );
                        const hexagonContent = createHexagonContent({
                            apiName: data.apiName,
                            icon: championElement.dataset.icon,
                            name: championElement.dataset.name,
                            cost: parseInt(championElement.classList[1].split('-')[1]),
                        });
                        targetHexagon.appendChild(hexagonContent);
                        targetHexagon.classList.add('has-champ');
                        championOrder.push({
                            index: targetHexagon.dataset.index,
                            timestamp: Date.now(),
                            apiName: data.apiName,
                        });
                        shouldUpdateTraits = true;
                        renderBuilderTraits();
                        updateTeamUrl();
                    }
                } else if (data.type === 'move-champion') {
                    const sourceHexagon = document.querySelector(
                        `.hexagon[data-index="${data.hexagonIndex}"]`
                    );
                    const sourceHexagonIcon = sourceHexagon?.querySelector('.hexagon-icon');
                    const targetHexagonIcon = targetHexagon.querySelector('.hexagon-icon');

                    if (sourceHexagon && sourceHexagonIcon) {
                        if (targetHexagonIcon) {
                            targetHexagon.removeChild(targetHexagonIcon);
                            sourceHexagon.removeChild(sourceHexagonIcon);
                            targetHexagon.appendChild(sourceHexagonIcon);
                            sourceHexagon.appendChild(targetHexagonIcon);
                            const sourceIndex = championOrder.findIndex(
                                o => o.index === data.hexagonIndex
                            );
                            const targetIndex = championOrder.findIndex(
                                o => o.index === targetHexagon.dataset.index
                            );
                            if (sourceIndex !== -1) championOrder[sourceIndex].index = targetHexagon.dataset.index;
                            if (targetIndex !== -1)
                                championOrder[targetIndex].index = data.hexagonIndex;
                        } else {
                            targetHexagon.appendChild(sourceHexagonIcon);
                            sourceHexagon.classList.remove('has-champ');
                            targetHexagon.classList.add('has-champ');
                            const sourceIndex = championOrder.findIndex(
                                o => o.index === data.hexagonIndex
                            );
                            if (sourceIndex !== -1) championOrder[sourceIndex].index = targetHexagon.dataset.index;
                        }
                        shouldUpdateTraits = true;
                        renderBuilderTraits();
                        updateTeamUrl();
                    }
                } else if (data.type === 'item') {
                    if (targetHexagon.querySelector('.hexagon-icon')) {
                        const itemElement = document.querySelector(
                            `.item-child[data-api-name="${data.apiName}"]`
                        );
                        addItemToHexagon(targetHexagon, {
                            apiName: data.apiName,
                            icon: itemElement.dataset.icon,
                            name: itemElement.dataset.name,
                        });
                        updateTeamUrl();
                    }
                }
            } catch (error) {
                console.warn('Error handling touch end:', error);
            }
        } else if (data && !targetHexagon && data.type === 'move-champion') {
            const sourceHexagon = document.querySelector(
                `.hexagon[data-index="${data.hexagonIndex}"]`
            );
            if (sourceHexagon) {
                const hexagonIcon = sourceHexagon.querySelector('.hexagon-icon');
                if (hexagonIcon) {
                    sourceHexagon.removeChild(hexagonIcon);
                    sourceHexagon.classList.remove('has-champ');
                    const index = championOrder.findIndex(o => o.index === data.hexagonIndex);
                    if (index !== -1) championOrder.splice(index, 1);
                    shouldUpdateTraits = true;
                    renderBuilderTraits();
                    updateTeamUrl();
                }
            }
        }
    }

    function renderBuilderChampions(champions, label = 'cost') {
        let data = label === 'name' ? [...champions].sort((a, b) => a.name.localeCompare(b.name)) : champions;

        if (label === 'traits') {
            const apiNameAndIconCostRange = apiNameAndData(champions, ['icon', 'cost', 'range']);
            builderChampions.innerHTML = traits
                .map(
                    ({ name: nameTrait, icon: iconTrait, champions, apiName: apiNameTrait }) => `
                    <div class="builder-list-traits">
                        <div class="list-traits-title" draggable="false">
                            <span><img src="${iconTrait}" alt="${nameTrait}" data-api-name="${apiNameTrait}"></span>
                            <span>${nameTrait}</span>
                        </div>
                        <div class="list-traits-champions">
                            ${champions
                                .map(
                                    ({ apiName, name }) => `
                                    <div class="tier-list cost-${
                                        apiNameAndIconCostRange[apiName][1]
                                    }" draggable="true" 
                                         data-api-name="${apiName}" data-range="${
                                        apiNameAndIconCostRange[apiName][2]
                                    }" 
                                         data-icon="${apiNameAndIconCostRange[apiName][0]}" data-name="${name}">
                                        <div class="hexagon-tier-champ">
                                            <span style="background-image: url(${
                                                apiNameAndIconCostRange[apiName][0]
                                            })" title="${name}"></span>
                                        </div>
                                        <div class="hexagon-title">${name}</div>
                                    </div>
                                `
                                )
                                .join('')}
                        </div>
                    </div>
                `
                )
                .join('');
        } else {
            builderChampions.innerHTML = data
                .map(
                    ({ apiName, name, icon, cost, range }) => `
                    <div class="tier-list cost-${cost}" draggable="true" 
                         data-api-name="${apiName}" data-range="${range}" 
                         data-icon="${icon}" data-name="${name}">
                        <div class="hexagon-tier-champ">
                            <span style="background-image: url(${icon})" title="${name}"></span>
                        </div>
                        <div class="hexagon-title">${name}</div>
                    </div>
                `
                )
                .join('');
        }

        document.querySelectorAll('.tier-list').forEach(champion => {
            let touchStartTime = 0;
            let dragPreview = null;

            champion.addEventListener('click', () => {
                const range = parseInt(champion.dataset.range);
                const rows = {
                    1: [
                        [0, 1, 2, 3, 4, 5, 6],
                        [7, 8, 9, 10, 11, 12, 13],
                        [14, 15, 16, 17, 18, 19, 20],
                        [21, 22, 23, 24, 25, 26, 27],
                    ],
                    2: [
                        [7, 8, 9, 10, 11, 12, 13],
                        [14, 15, 16, 17, 18, 19, 20],
                        [21, 22, 23, 24, 25, 26, 27],
                        [0, 1, 2, 3, 4, 5, 6],
                    ],
                    long: [
                        [21, 22, 23, 24, 25, 26, 27],
                        [14, 15, 16, 17, 18, 19, 20],
                        [7, 8, 9, 10, 11, 12, 13],
                        [0, 1, 2, 3, 4, 5, 6],
                    ],
                };

                const targetRows = range === 1 ? rows[1] : range === 2 ? rows[2] : rows.long;

                let targetHexagon = null;
                for (const row of targetRows) {
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
                        cost: parseInt(champion.classList[1].split('-')[1]),
                    });
                    targetHexagon.appendChild(hexagonContent);
                    targetHexagon.classList.add('has-champ');
                    championOrder.push({
                        index: targetHexagon.dataset.index,
                        timestamp: Date.now(),
                        apiName: champion.dataset.apiName,
                    });
                    shouldUpdateTraits = true;
                    renderBuilderTraits();
                    updateTeamUrl();
                }
            });

            champion.addEventListener('dragstart', e => {
                e.dataTransfer.setData(
                    'text/plain',
                    JSON.stringify({
                        type: 'champion',
                        apiName: champion.dataset.apiName,
                        icon: champion.dataset.icon,
                        name: champion.dataset.name,
                        cost: parseInt(champion.classList[1].split('-')[1]),
                    })
                );
            });

            champion.addEventListener('touchstart', e => {
                touchStartTime = Date.now();
                champion.dataset.touchData = JSON.stringify({
                    type: 'champion',
                    apiName: champion.dataset.apiName,
                    icon: champion.dataset.icon,
                    name: champion.dataset.name,
                    cost: parseInt(champion.classList[1].split('-')[1]),
                });
                champion.classList.add('dragging');
                dragPreview = createDragPreview(champion.dataset.icon, champion.dataset.name);
                const touch = e.touches[0];
                updateDragPreview(dragPreview, touch.clientX, touch.clientY);
            });

            champion.addEventListener('touchend', e => {
                const touch = e.changedTouches[0];
                const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                const targetHexagon = targetElement?.closest('.hexagon');
                const data = champion.dataset.touchData ? JSON.parse(champion.dataset.touchData) : null;

                if (data && targetHexagon) {
                    if (!targetHexagon.querySelector('.hexagon-icon')) {
                        const hexagonContent = createHexagonContent(data);
                        targetHexagon.appendChild(hexagonContent);
                        targetHexagon.classList.add('has-champ');
                        championOrder.push({
                            index: targetHexagon.dataset.index,
                            timestamp: Date.now(),
                            apiName: data.apiName,
                        });
                        shouldUpdateTraits = true;
                        renderBuilderTraits();
                        updateTeamUrl();
                    }
                }

                if (champion.dataset.touchData) {
                    delete champion.dataset.touchData;
                    champion.classList.remove('dragging');
                    removeDragPreview(dragPreview);
                    dragPreview = null;
                }
            });
        });

        builderChampions.addEventListener(
            'touchmove',
            e => {
                const source = document.querySelector('[data-touch-data]');
                if (source) {
                    e.preventDefault();
                    const touch = e.touches[0];
                    const dragPreview = document.querySelector('.drag-preview');
                    updateDragPreview(dragPreview, touch.clientX, touch.clientY);

                    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                    const targetHexagon = targetElement?.closest('.hexagon');
                    hexagons.forEach(h => h.classList.remove('drag-over'));
                    if (targetHexagon) {
                        targetHexagon.classList.add('drag-over');
                    }
                }
            },
            { passive: false }
        );
    }

    function filterBuilderChampions() {
        document.querySelectorAll('.builder-champions .builder-filter button').forEach(btn => {
            btn.addEventListener('click', () => {
                document
                    .querySelectorAll('.builder-champions .builder-filter button')
                    .forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderBuilderChampions(champions, btn.dataset.label);
                filterInput('.builder-champions .tier-list', '.builder-champions input');
            });
        });
    }

    function filterBuilderItems() {
        const allItemButtons = document.querySelectorAll('.builder-items .builder-filter button');
        allItemButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                document.body.setAttribute(
                    'btn-filter',
                    `category-${index + 1 === allItemButtons.length ? 'other' : index + 1}-active`
                );
            });
        });
    }

    builderItems.innerHTML = items
        .map(
            ({ name, icon, category, tier, apiName }) => `
            <div class="item-child item-${category} tier-${tier}" draggable="true" data-api-name="${apiName}" data-icon="${icon}" data-name="${name}">
                <img src="${icon}" alt="${name}">
                <span>${name}</span>
            </div>
        `
        )
        .join('');

    document.querySelectorAll('.item-child').forEach(item => {
        let dragPreview = null;

        item.addEventListener('click', () => {
            const sortedOrder = [...championOrder].sort((a, b) => b.timestamp - a.timestamp);
            let targetHexagon = null;
            for (const { index } of sortedOrder) {
                const hexagon = document.querySelector(`.hexagon[data-index="${index}"]`);
                if (
                    hexagon &&
                    hexagon.querySelector('.hexagon-icon') &&
                    hexagon.querySelector('.hexagon-items')?.children.length < 3
                ) {
                    targetHexagon = hexagon;
                    break;
                }
            }

            if (targetHexagon) {
                addItemToHexagon(targetHexagon, {
                    apiName: item.dataset.apiName,
                    icon: item.dataset.icon,
                    name: item.dataset.name,
                });
                updateTeamUrl();
            }
        });

        item.addEventListener('dragstart', e => {
            e.dataTransfer.setData(
                'text/plain',
                JSON.stringify({
                    type: 'item',
                    apiName: item.dataset.apiName,
                    icon: item.dataset.icon,
                    name: item.dataset.name,
                })
            );
        });

        item.addEventListener('touchstart', e => {
            item.dataset.touchData = JSON.stringify({
                type: 'item',
                apiName: item.dataset.apiName,
                icon: item.dataset.icon,
                name: item.dataset.name,
            });
            item.classList.add('dragging');
            dragPreview = createDragPreview(item.dataset.icon, item.dataset.name);
            const touch = e.touches[0];
            updateDragPreview(dragPreview, touch.clientX, touch.clientY);
        });

        item.addEventListener('touchend', e => {
            const touch = e.changedTouches[0];
            const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
            const targetHexagon = targetElement?.closest('.hexagon');
            const data = item.dataset.touchData ? JSON.parse(item.dataset.touchData) : null;

            if (data && targetHexagon && targetHexagon.querySelector('.hexagon-icon')) {
                addItemToHexagon(targetHexagon, data);
                updateTeamUrl();
            }

            if (item.dataset.touchData) {
                delete item.dataset.touchData;
                item.classList.remove('dragging');
                removeDragPreview(dragPreview);
                dragPreview = null;
            }
        });
    });

    builderItems.addEventListener(
        'touchmove',
        e => {
            const source = document.querySelector('[data-touch-data]');
            if (source) {
                e.preventDefault();
                const touch = e.touches[0];
                const dragPreview = document.querySelector('.drag-preview');
                updateDragPreview(dragPreview, touch.clientX, touch.clientY);

                const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                const targetHexagon = targetElement?.closest('.hexagon');
                hexagons.forEach(h => h.classList.remove('drag-over'));
                if (targetHexagon) {
                    targetHexagon.classList.add('drag-over');
                }
            }
        },
        { passive: false }
    );

    function createHexagonContent({ apiName, icon, name, cost, stars = 0 }) {
        const hexagonIcon = document.createElement('div');
        hexagonIcon.classList.add('hexagon-icon', `champ-cost-${cost}`);
        hexagonIcon.dataset.starState = stars;
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

        if (stars === 1) {
            const starChamp = document.createElement('div');
            starChamp.classList.add('star-champ', 'three-stars');
            starChamp.innerHTML = `
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
            `;
            hexagonIcon.appendChild(starChamp);
        } else if (stars === 2) {
            const starChamp = document.createElement('div');
            starChamp.classList.add('star-champ', 'four-stars');
            starChamp.innerHTML = `
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
            `;
            hexagonIcon.appendChild(starChamp);
        }

        hexagonIcon.appendChild(hexagonChamp);
        hexagonIcon.appendChild(hexagonItems);
        hexagonIcon.appendChild(hexagonName);
        return hexagonIcon;
    }

    function addItemToHexagon(hexagon, itemData) {
        const hexagonItems = hexagon.querySelector('.hexagon-items');
        if (!hexagonItems || hexagonItems.children.length >= 3) return;
    
        const championApiName = hexagon.querySelector('.hexagon-icon')?.dataset.apiName;
        const champion = champions.find(c => c.apiName === championApiName);
        if (!champion) return;
    
        const item = items.find(i => i.apiName === itemData.apiName);
        if (!item) return;
    
        if (item.category === 'emblem' && item.incompatibleTraits?.length > 0) {
            const emblemTraitApiName = item.incompatibleTraits[0];
            const emblemTrait = traits.find(t => t.apiName === emblemTraitApiName);
            if (!emblemTrait) return;
    
            if (champion.traits.some(trait => trait.apiName === emblemTraitApiName)) return;
    
            const existingItems = Array.from(hexagonItems.children).map(span => {
                const img = span.querySelector('img');
                return items.find(i => i.apiName === img.dataset.apiName);
            });
            if (
                existingItems.some(
                    ei => ei?.category === 'emblem' && ei.incompatibleTraits?.[0] === emblemTraitApiName
                )
            )
                return;
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
    
        let dragPreview = null;
        let touchStartTime = 0;
    
        itemSpan.setAttribute('draggable', 'true');
        itemSpan.addEventListener('dragstart', e => {
            e.dataTransfer.setData(
                'text/plain',
                JSON.stringify({
                    type: 'remove-item',
                    apiName: itemData.apiName,
                    hexagonIndex: hexagon.dataset.index,
                })
            );
        });
    
        itemSpan.addEventListener('touchstart', e => {
            touchStartTime = Date.now();
            itemSpan.dataset.touchData = JSON.stringify({
                type: 'remove-item',
                apiName: itemData.apiName,
                hexagonIndex: hexagon.dataset.index,
            });
            itemSpan.classList.add('dragging');
            dragPreview = createDragPreview(itemData.icon, itemData.name);
            const touch = e.touches[0];
            updateDragPreview(dragPreview, touch.clientX, touch.clientY);
        });
    
        itemSpan.addEventListener('touchend', e => {
            const touchDuration = Date.now() - touchStartTime;
            const touch = e.changedTouches[0];
            const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
            const targetHexagon = targetElement?.closest('.hexagon');
            const data = itemSpan.dataset.touchData ? JSON.parse(itemSpan.dataset.touchData) : null;
    
            if (data) {
                // Xử lý tap (chạm ngắn) như click
                if (touchDuration < 200) {
                    e.preventDefault();
                    e.stopPropagation();
                    hexagonItems.removeChild(itemSpan);
                    shouldUpdateTraits = true;
                    renderBuilderTraits();
                    updateTeamUrl();
                }
                // Xử lý kéo (drag) ra ngoài hexagon
                else if (!targetHexagon || targetHexagon.dataset.index !== data.hexagonIndex) {
                    hexagonItems.removeChild(itemSpan);
                    shouldUpdateTraits = true;
                    renderBuilderTraits();
                    updateTeamUrl();
                }
            }
    
            if (itemSpan.dataset.touchData) {
                delete itemSpan.dataset.touchData;
                itemSpan.classList.remove('dragging');
                removeDragPreview(dragPreview);
                dragPreview = null;
            }
        });
    
        itemSpan.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            hexagonItems.removeChild(itemSpan);
            shouldUpdateTraits = true;
            renderBuilderTraits();
            updateTeamUrl();
        });
    
        itemSpan.addEventListener('contextmenu', e => {
            e.preventDefault();
            e.stopPropagation();
            hexagonItems.removeChild(itemSpan);
            shouldUpdateTraits = true;
            renderBuilderTraits();
            updateTeamUrl();
        });
    
        shouldUpdateTraits = true;
        renderBuilderTraits();
    }

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
                            shouldUpdateTraits = true;
                            renderBuilderTraits();
                            updateTeamUrl();
                        }
                    }
                } else if (data.type === 'remove-item') {
                    const hexagon = document.querySelector(`.hexagon[data-index="${data.hexagonIndex}"]`);
                    if (hexagon) {
                        const hexagonItems = hexagon.querySelector('.hexagon-items');
                        const itemSpan = hexagonItems.querySelector(
                            `.item-span img[data-api-name="${data.apiName}"]`
                        )?.parentElement;
                        if (itemSpan) {
                            hexagonItems.removeChild(itemSpan);
                            shouldUpdateTraits = true;
                            renderBuilderTraits();
                            updateTeamUrl();
                        }
                    }
                }
            } catch (error) {
                console.warn('Error handling body drop:', error);
            }
        }
    });

    clearButton.addEventListener('click', () => {
        hexagons.forEach(hexagon => {
            const hexagonIcon = hexagon.querySelector('.hexagon-icon');
            if (hexagonIcon) {
                hexagon.removeChild(hexagonIcon);
                hexagon.classList.remove('has-champ');
            }
        });
        championOrder.length = 0;
        selectedAugments.length = 0;
        builderAugments.innerHTML = `
            <span class="builder-title">Augments</span>
            <span class="builder-icon-augs"><img src="/assets/images/add-augs.png" alt=""></span>
        `;
        countAugments.textContent = '0';
        renderSelectedAugments();
        shouldUpdateTraits = true;
        renderBuilderTraits();
        updateTeamUrl();
    });

    teamCodeButton.addEventListener('click', e => {
        const teamCode = generateTeamCode();
        navigator.clipboard.writeText(teamCode).then(() => {
            customTooltip('Đã copy', e.clientX, e.clientY);
        }).catch(() => {
            customTooltip('Lỗi khi copy', e.clientX, e.clientY);
        });
    });

    function showNameChessBoard() {
        const nameChessboard = document.querySelector('.builder-chessboard');
        const showNameButton = document.querySelector('.btn-builder-show-name');

        const savedState = localStorage.getItem('builder-show-name');
        if (savedState === 'true') {
            nameChessboard.classList.add('builder-show-name');
        }

        showNameButton.addEventListener('click', () => {
            const isVisible = nameChessboard.classList.toggle('builder-show-name');
            localStorage.setItem('builder-show-name', isVisible);
        });
    }

    function setupSaveCompButton() {
        const saveCompButton = document.querySelector('.builder-save-comp');
        const menu = document.querySelector('.save-comp-menu');

        saveCompButton.addEventListener('click', e => {
            menu.classList.toggle('show');
        });

        menu.addEventListener('click', e => {
            const option = e.target.closest('.save-comp-option');
            if (option) {
                const action = option.dataset.action;
                const currentUrl = window.location.href;
                if (action === 'copy-url') {
                    navigator.clipboard.writeText(currentUrl).then(() => {
                        customTooltip('Đã copy URL', e.clientX, e.clientY);
                    }).catch(() => {
                        customTooltip('Lỗi khi copy URL', e.clientX, e.clientY);
                    });
                } else if (action === 'add-bookmark') {
                    const title = 'TFT Team Comp';
                    try {
                        if (window.sidebar && window.sidebar.addPanel) {
                            window.sidebar.addPanel(title, currentUrl, '');
                        } else if (window.external && 'AddFavorite' in window.external) {
                            window.external.AddFavorite(currentUrl, title);
                        } else {
                            customTooltip(
                                'Nhấn Ctrl+D (Windows) hoặc Cmd+D (Mac) để lưu bookmark',
                                e.clientX,
                                e.clientY,
                                3000
                            );
                        }
                    } catch (error) {
                        customTooltip(
                            'Không thể lưu bookmark tự động. Vui lòng sử dụng Ctrl+D/Cmd+D',
                            e.clientX,
                            e.clientY
                        );
                    }
                }
                menu.classList.remove('show');
            }
        });

        document.addEventListener('click', e => {
            if (!saveCompButton.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
    }

    function renderSelectedAugments() {
        selectedAugs.innerHTML = selectedAugments
            .map(
                aug => `
                <div class="augments-child augs-tier-${aug.tier} tier-${aug.tier2}" data-api-name="${aug.apiName}">
                    <img src="${aug.icon}" alt="${aug.name}">
                    <span>${aug.name}</span>
                </div>
            `
            )
            .join('');

        countAugments.textContent = selectedAugments.length;

        document.querySelectorAll('.builder-render-augs .augments-child').forEach(augElement => {
            const apiName = augElement.querySelector('img').dataset.apiName;
            if (selectedAugments.some(aug => aug.apiName === apiName)) {
                augElement.classList.add('active');
            } else {
                augElement.classList.remove('active');
            }
        });

        if (selectedAugments.length === 0) {
            builderAugments.innerHTML = `
                <span class="builder-title">Augments</span>
                <span class="builder-icon-augs"><img src="/assets/images/add-augs.png" alt=""></span>
            `;
        }
        setupTooltips();
        updateTeamUrl();
    }

    function renderBuilderAugments() {
        builderRenderAugs.innerHTML = augments
            .map(
                ({ name, icon, tier, tier2, apiName }) => `
                <div class="augments-child augs-tier-${tier} tier-${tier2}" data-api-name="${apiName}">
                    <img src="${icon}" alt="${name}" data-api-name="${apiName}">
                    <span>${name}</span>
                </div>
            `
            )
            .join('');

        document.querySelectorAll('.builder-render-augs .augments-child').forEach(augElement => {
            augElement.addEventListener('click', e => {
                const apiName = augElement.querySelector('img').dataset.apiName;
                const aug = augments.find(a => a.apiName === apiName);
                if (!aug) return;

                const index = selectedAugments.findIndex(a => a.apiName === apiName);
                if (index !== -1) {
                    selectedAugments.splice(index, 1);
                } else if (selectedAugments.length < 8) {
                    selectedAugments.push(aug);
                } else if (selectedAugments.length === 8) {
                    customTooltip('Đã đủ 8 Nâng Cấp', e.clientX, e.clientY);
                }
                renderSelectedAugments();
            });
        });

        renderSelectedAugments();
    }

    function filterBuilderAugs() {
        const allItemButtons = document.querySelectorAll(
            '.builder-list-augments .builder-filter button'
        );
        allItemButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                document.body.setAttribute('augs-btn-filter', `category-${index}-active`);
            });
        });
    }

    builderAugments.addEventListener('click', () => {
        builderListAugments.classList.add('active');
    });

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

    selectedAugsClear.addEventListener('click', () => {
        selectedAugments.length = 0;
        renderSelectedAugments();
    });

    selectedAugsOk.addEventListener('click', () => {
        if (selectedAugments.length === 0) {
            builderAugments.innerHTML = `
                <span class="builder-title">Augments</span>
                <span class="builder-icon-augs"><img src="/assets/images/add-augs.png" alt=""></span>
            `;
        } else {
            builderAugments.innerHTML = selectedAugments
                .map(
                    aug => `
                    <div class="augments-child augs-tier-${aug.tier} tier-${aug.tier2}" data-api-name="${aug.apiName}">
                        <img src="${aug.icon}" alt="${aug.name}">
                        <span>${aug.name}</span>
                    </div>
                `
                )
                .join('');
        }
        builderListAugments.classList.remove('active');
        setupTooltips();
        countAugments.textContent = selectedAugments.length;
        updateTeamUrl();
    });

    function builderOptionsBtn() {
        const [champBtn, itemBtn] = document.querySelectorAll('.builder-options button');
        const champPanel = document.querySelector('.builder-champions');
        const itemPanel = document.querySelector('.builder-items');
        function activate(tab) {
            const isChamp = tab === 'champions';
            champPanel.style.display = isChamp ? 'flex' : 'none';
            itemPanel.style.display = isChamp ? 'none' : 'flex';
            champBtn.classList.toggle('active', isChamp);
            itemBtn.classList.toggle('active', !isChamp);
        }

        champBtn.onclick = () => activate('champions');
        itemBtn.onclick = () => activate('items');
    }

    attachHexagonEvents(hexagons);
    renderBuilderChampions(champions, 'cost');
    renderBuilderTraits();
    renderBuilderAugments();
    filterBuilderItems();
    filterBuilderChampions();
    filterBuilderAugs();
    filterInput('.builder-champions .tier-list', '.builder-champions input');
    filterInput('.builder-items .item-child', '.builder-items input');
    filterInput('.builder-render-augs .augments-child', '.builder-list-augments input');
    builderOptionsBtn();
    setupSaveCompButton();
    showNameChessBoard();

    const loadedFromUrl = loadCompFromUrl();
    if (!loadedFromUrl) {
        loadCompFromTierList();
    }
}