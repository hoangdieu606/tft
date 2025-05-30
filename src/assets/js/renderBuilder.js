import { apiNameAndData, filterInput, setupTooltips, customTooltip, initToggle } from '/src/assets/js/global.js';

export function renderBuilder(data) {
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
    const hexIndexData = data.champions
    const setNumber = data.set

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
        console.warn('Thiếu các phần tử DOM cần thiết');
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

    const { champions, items, augments, traits } = data;

    if (!champions || !items || !augments || !traits) {
        console.warn('Thiếu dữ liệu cần thiết');
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
            console.error('Lỗi mã hóa đội hình:', error);
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
                        console.warn(`Dữ liệu tướng không hợp lệ tại vị trí ${idx}:`, champ);
                        return null;
                    }
                    if (usedPositions.has(champ.pos)) {
                        console.warn(`Vị trí trùng lặp ${champ.pos} tại tướng ${idx}`);
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
                        console.warn(`Augments không hợp lệ tại vị trí ${idx}: augId=${augId}`);
                        return null;
                    }
                    return { apiName: augmentMap[augId] };
                })
                .filter(aug => aug !== null);

            return champions.length > 0 || augments.length > 0 ? { champions, augments } : null;
        } catch (error) {
            console.error('Lỗi giải mã chuỗi đội hình:', error, compString);
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
            console.error('Lỗi hiển thị đội hình:', error);
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
            console.warn('Không thể hiển thị đội hình từ URL:', compString);
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
            console.error('Lỗi tải dữ liệu đội hình:', error);
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
        return `02${hexIndexes.join('')}TFTSet${setNumber}`;
    }

    function renderBuilderTraits() {
        if (!shouldUpdateTraits) return;
        shouldUpdateTraits = false;

        const traitCounts = {};
        const processedChampionsForTraits = new Set();

        // Bước 1: Thu thập đặc điểm từ tướng và vật phẩm
        championOrder.forEach(({ apiName, index }) => {
            if (!processedChampionsForTraits.has(apiName)) {
                const champion = champions.find(c => c.apiName === apiName);
                if (champion && champion.traits) {
                    champion.traits.forEach(traitId => {
                        const trait = traits.find(t => t.id === traitId);
                        if (trait) {
                            traitCounts[trait.apiName] = (traitCounts[trait.apiName] || 0) + 1;
                        }
                    });
                    processedChampionsForTraits.add(apiName);
                }
            }

            const hexagon = document.querySelector(`.hexagon[data-index="${index}"]`);
            if (hexagon) {
                const hexagonItems = hexagon.querySelector('.hexagon-items');
                if (hexagonItems) {
                    Array.from(hexagonItems.children).forEach(span => {
                        const img = span.querySelector('img');
                        const item = items.find(i => i.apiName === img.dataset.apiName);
                        if (item && item.trait) {
                            traitCounts[item.trait] = (traitCounts[item.trait] || 0) + 1;
                        }
                    });
                }
            }
        });

        // Bước 2: Xử lý đặc điểm và tính colors
        const traitList = Object.keys(traitCounts)
            .map(traitApiName => {
                const trait = traits.find(t => t.apiName === traitApiName);
                if (!trait) return null;

                const count = traitCounts[traitApiName];
                let colorIndex = -1;
                for (let i = 0; i < trait.breakpoints.length; i++) {
                    if (count >= trait.breakpoints[i]) {
                        colorIndex = i;
                    } else {
                        break;
                    }
                }
                const colors = colorIndex >= 0 ? trait.colors[colorIndex] : 0;

                // Ánh xạ colors sang badgeImage, ưu tiên isUnique
                const isUnique = trait.breakpoints.length === 1;
                const badgeImage = isUnique ? '/assets/images/trait-unique.png' :
                    colors === 0 ? '/assets/images/trait-not.png' :
                        colors === 1 ? '/assets/images/trait-bronze.png' :
                            colors === 3 ? '/assets/images/trait-silver.png' :
                                colors === 4 ? '/assets/images/trait-gold.png' :
                                    colors === 5 ? '/assets/images/trait-gold.png' :
                                        colors >= 6 ? '/assets/images/trait-prism.png' :
                                            '/assets/images/trait-not.png';

                return {
                    apiName: trait.apiName,
                    name: trait.name,
                    icon: trait.icon,
                    count,
                    colors,
                    breakpoints: trait.breakpoints,
                    activeMinUnits: colorIndex >= 0 ? trait.breakpoints[colorIndex] : 0,
                    badgeImage,
                    isUnique
                };
            })
            .filter(t => t !== null); // Loại bỏ đặc điểm null hoặc không hoạt động

        // Bước 3: Sắp xếp theo colors giảm dần, nếu colors bằng nhau thì theo count giảm dần
        traitList.sort((a, b) => {
            if (a.colors !== b.colors) return b.colors - a.colors;
            return b.count - a.count;
        });
        // Bước 4: Render HTML
        if (traitList.length === 0) {
            builderTraits.innerHTML = `<span class="builder-title">Traits</span>`;
        } else {
            builderTraits.innerHTML = traitList
                .map(({ apiName, name, icon, count, colors, breakpoints, activeMinUnits, badgeImage }) => {
                    const traitNumberHTML = breakpoints
                        .map(minUnit => {
                            const isActive = count >= minUnit && minUnit === activeMinUnits;
                            return `<span style="opacity: ${isActive ? 1 : 0.5}">${minUnit}</span>`;
                        })
                        .join('<span>|</span>');

                    return `
                    <div class="trait-item style-${colors}" data-api-name="${apiName}">
                        <div class="trait-icon">
                            <img src="${icon}" alt="${name}" class="style-${colors}">
                            <img src="${badgeImage}" alt="huy hiệu đặc điểm">
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
                })
                .join('');
        }

        setupTooltips();
    }

    function createDragPreview(element, type) {
        const preview = document.createElement('div');
        preview.className = 'drag-preview';

        // Lấy kích thước thực tế của phần tử nguồn
        const rect = element.getBoundingClientRect();
        preview.style.width = `${rect.width}px`;
        preview.style.height = `${rect.height}px`;
        preview.style.visibility = 'hidden'; // Ẩn ban đầu

        if (type === 'champion') {
            if (element.classList.contains('tier-list')) {
                preview.classList.add('tier-list', element.classList[1]);
                preview.innerHTML = element.innerHTML;
                preview.setAttribute('data-api-name', element.dataset.apiName);
                preview.setAttribute('data-range', element.dataset.range);
                preview.setAttribute('data-icon', element.dataset.icon);
                preview.setAttribute('data-name', element.dataset.name);
            } else if (element.classList.contains('hexagon-icon')) {
                const hexagonWrapper = document.createElement('div');
                hexagonWrapper.className = 'hexagon has-champ';
                hexagonWrapper.style.width = `${rect.width}px`;
                hexagonWrapper.style.height = `${rect.height}px`;
                const hexagonIcon = document.createElement('div');
                hexagonIcon.className = `hexagon-icon ${element.classList[1]}`;
                hexagonIcon.innerHTML = element.innerHTML;
                hexagonIcon.setAttribute('data-star-state', element.dataset.starState || '0');
                hexagonIcon.setAttribute('data-api-name', element.dataset.apiName);
                hexagonWrapper.appendChild(hexagonIcon);
                preview.appendChild(hexagonWrapper);
            }
        } else if (type === 'item') {
            preview.classList.add('item-child', `item-${element.classList[1].split('-')[1]}`, element.classList[2]);
            preview.innerHTML = element.innerHTML;
            preview.setAttribute('data-api-name', element.dataset.apiName);
            preview.setAttribute('data-icon', element.dataset.icon);
            preview.setAttribute('data-name', element.dataset.name);
        } else if (type === 'item-span') {
            preview.classList.add('item-span');
            preview.innerHTML = element.innerHTML;
            const img = preview.querySelector('img');
            if (img) {
                img.setAttribute('data-api-name', img.dataset.apiName);
            }
        }

        document.body.appendChild(preview);
        return preview;
    }
    let rafId = null;
    function updateDragPreview(preview, x, y) {
        if (!preview) return;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;
            preview.style.left = `${x + scrollX - (preview.offsetWidth / 2)}px`;
            preview.style.top = `${y + scrollY - (preview.offsetHeight / 2)}px`;
            preview.style.visibility = 'visible';
        });
    }

    function removeDragPreview() {
        cancelAnimationFrame(rafId);
        document.querySelectorAll('.drag-preview').forEach(p => {
            if (p.parentNode) {
                p.parentNode.removeChild(p);
            }
        });
    }

    function findNearestHexagon(x, y) {
        let nearestHexagon = null;
        let minDistance = Infinity;
        const threshold = 50;

        hexagons.forEach(hexagon => {
            const rect = hexagon.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            if (distance < minDistance && distance < threshold) {
                minDistance = distance;
                nearestHexagon = hexagon;
            }
        });

        return nearestHexagon;
    }

    function attachHexagonEvents(hexagons) {
        let isDragging = false;
        hexagons.forEach(hexagon => {
            let touchStartTime = 0;
            let dragPreview = null;

            hexagon.addEventListener(
                'touchstart',
                e => {
                    const itemSpan = e.target.closest('.item-span');
                    if (itemSpan) return;
                    const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                    if (hexagonIcon) {
                        e.preventDefault(); // Ngăn hành vi mặc định (như cuộn trang)
                        touchStartTime = Date.now();
                        hexagon.dataset.touchData = JSON.stringify({
                            type: 'move-champion',
                            hexagonIndex: hexagon.dataset.index,
                        });
                        hexagonIcon.classList.add('dragging');
                        isDragging = true;
                        dragPreview = createDragPreview(hexagonIcon, 'champion');
                        const touch = e.touches[0];
                        updateDragPreview(dragPreview, touch.clientX, touch.clientY);
                        hexagon.querySelectorAll('.item-span').forEach(span => {
                            span.style.pointerEvents = 'none';
                        });
                    }
                },
                { passive: false }
            );

            hexagon.addEventListener('touchmove', e => {
                if (dragPreview) {
                    e.preventDefault(); // Ngăn cuộn trang khi kéo
                    const touch = e.touches[0];
                    updateDragPreview(dragPreview, touch.clientX, touch.clientY);
                    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                    const targetHexagon = targetElement?.closest('.hexagon');
                    hexagons.forEach(h => h.classList.remove('drag-over'));
                    if (targetHexagon) {
                        targetHexagon.classList.add('drag-over');
                    }
                }
            }, { passive: false });

            hexagon.addEventListener('touchend', e => {
                e.preventDefault();
                const touchDuration = Date.now() - touchStartTime;
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');

                hexagon.querySelectorAll('.item-span').forEach(span => {
                    span.style.pointerEvents = 'auto';
                });

                if (touchDuration < 300 && hexagonIcon && !e.target.closest('.item-span')) {
                    // Nhấn ngắn: thay đổi starState
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
                    removeDragPreview(); // Xóa drag-preview khi thay đổi starState
                } else {
                    // Nhấn lâu: xử lý kéo thả hoặc xóa tướng
                    handleTouchEnd(e, hexagon);
                }

                // Xóa touchData và trạng thái
                if (hexagon.dataset.touchData) {
                    delete hexagon.dataset.touchData;
                    if (hexagonIcon) {
                        hexagonIcon.classList.remove('dragging');
                    }
                }
                removeDragPreview(); // Xóa drag-preview dự phòng
                dragPreview = null;
                isDragging = false;
                hexagons.forEach(h => h.classList.remove('drag-over'));
            }, { passive: false });

            hexagon.addEventListener('touchcancel', () => {
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                if (hexagonIcon) {
                    hexagonIcon.classList.remove('dragging');
                    hexagon.querySelectorAll('.item-span').forEach(span => {
                        span.style.pointerEvents = 'auto';
                    });
                }
                if (hexagon.dataset.touchData) {
                    delete hexagon.dataset.touchData;
                }
                removeDragPreview();
                dragPreview = null;
                isDragging = false;
                hexagons.forEach(h => h.classList.remove('drag-over'));
            }, { passive: false });

            hexagon.addEventListener('dragover', e => {
                e.preventDefault();
                hexagon.classList.add('drag-over');
            }, { passive: false });

            hexagon.addEventListener('dragleave', () => {
                hexagon.classList.remove('drag-over');
            });

            hexagon.addEventListener('drop', e => {
                e.preventDefault();
                handleDrop(e, hexagon);
                hexagon.classList.remove('drag-over');
                removeDragPreview();
                dragPreview = null;
            }, { passive: false });

            hexagon.addEventListener('click', e => {
                if (isDragging) return;
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
                    const img = new Image();
                    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    e.dataTransfer.setDragImage(img, 0, 0);
                    dragPreview = createDragPreview(hexagonIcon, 'champion');
                    hexagonIcon.classList.add('dragging');
                }
            });

            hexagon.addEventListener('drag', e => {
                if (e.clientX && e.clientY) {
                    updateDragPreview(dragPreview, e.clientX, e.clientY);
                }
            });

            hexagon.addEventListener('dragend', () => {
                const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                if (hexagonIcon) {
                    hexagonIcon.classList.remove('dragging');
                }
                removeDragPreview();
                dragPreview = null;
                hexagons.forEach(h => h.classList.remove('drag-over'));
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

        // Gắn sự kiện touchmove chỉ một lần trên chessboard
        chessboard.removeEventListener('touchmove', handleTouchMove);
        chessboard.addEventListener('touchmove', handleTouchMove, { passive: false });

        function handleTouchMove(e) {
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
        }
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
            console.warn('Lỗi xử lý thả:', error);
        }
    }

    function handleTouchEnd(e, hexagon) {
        const touch = e.changedTouches[0];
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        const targetHexagon = targetElement?.closest('.hexagon');
        const data = hexagon.dataset.touchData ? JSON.parse(hexagon.dataset.touchData) : null;

        hexagons.forEach(h => h.classList.remove('drag-over'));

        try {
            if (data && targetHexagon && targetHexagon !== hexagon) {
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
            } else if (data && data.type === 'move-champion') {
                const nearestHexagon = findNearestHexagon(touch.clientX, touch.clientY);
                const sourceHexagon = document.querySelector(
                    `.hexagon[data-index="${data.hexagonIndex}"]`
                );
                if (sourceHexagon && nearestHexagon && nearestHexagon !== sourceHexagon && !nearestHexagon.querySelector('.hexagon-icon')) {
                    const sourceHexagonIcon = sourceHexagon.querySelector('.hexagon-icon');
                    if (sourceHexagonIcon) {
                        nearestHexagon.appendChild(sourceHexagonIcon);
                        sourceHexagon.classList.remove('has-champ');
                        nearestHexagon.classList.add('has-champ');
                        const sourceIndex = championOrder.findIndex(o => o.index === data.hexagonIndex);
                        if (sourceIndex !== -1) championOrder[sourceIndex].index = nearestHexagon.dataset.index;
                        shouldUpdateTraits = true;
                        renderBuilderTraits();
                        updateTeamUrl();
                    }
                } else if (sourceHexagon && (!nearestHexagon || (nearestHexagon !== sourceHexagon && targetHexagon !== hexagon))) {
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
            } else if (data && data.type === 'remove-item') {
                const sourceHexagon = document.querySelector(
                    `.hexagon[data-index="${data.hexagonIndex}"]`
                );
                if (sourceHexagon) {
                    const hexagonItems = sourceHexagon.querySelector('.hexagon-items');
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
            console.warn('Lỗi trong handleTouchEnd:', error);
        } finally {
            removeDragPreview(); // Xóa drag-preview trong mọi trường hợp
        }
    }

    function renderBuilderChampions(champions, label = 'cost') {
        let data = label === 'name' ? [...champions].sort((a, b) => a.name.localeCompare(b.name)) : champions;

        if (label === 'traits') {
            builderChampions.innerHTML = traits
                .map(
                    ({ apiName: apiNameTrait, icon: iconTrait, name: nameTrait, id }) => {
                        const traitChampions = champions.filter(champ => champ.traits.includes(id))

                        return `
                    <div class="builder-list-traits">
                        <div class="list-traits-title" draggable="false">
                            <span><img src="${iconTrait}" alt="${nameTrait}" data-api-name="${apiNameTrait}"></span>
                            <span>${nameTrait}</span>
                        </div>
                        <div class="list-traits-champions">
                            ${traitChampions
                                .map(
                                    ({ apiName, name, icon, cost, stats }) => `
                                    <div class="tier-list cost-${cost}" draggable="true" 
                                         data-api-name="${apiName}" data-range="${stats.range}" 
                                         data-icon="${icon}" data-name="${name}">
                                        <div class="hexagon-tier-champ">
                                            <span style="background-image: url(${icon})" title="${name}"></span>
                                        </div>
                                        <div class="hexagon-title">${name}</div>
                                    </div>
                                `
                                )
                                .join('')}
                        </div>
                    </div>
                `
                    }
                )
                .join('');
        } else {
            builderChampions.innerHTML = data
                .map(
                    ({ apiName, name, icon, cost, stats }) => `
                    <div class="tier-list cost-${cost}" draggable="true" 
                         data-api-name="${apiName}" data-range="${stats.range}" 
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
                const img = new Image();
                img.src = '/assets/images/transparent.png';
                e.dataTransfer.setDragImage(img, 0, 0);
                dragPreview = createDragPreview(champion, 'champion');
                champion.classList.add('dragging');
            });

            champion.addEventListener('drag', e => {
                if (e.clientX && e.clientY) {
                    updateDragPreview(dragPreview, e.clientX, e.clientY);
                }
            });

            champion.addEventListener('dragend', () => {
                champion.classList.remove('dragging');
                removeDragPreview(dragPreview);
                dragPreview = null;
                hexagons.forEach(h => h.classList.remove('drag-over'));
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
                dragPreview = createDragPreview(champion, 'champion');
                const touch = e.touches[0];
                updateDragPreview(dragPreview, touch.clientX, touch.clientY);
            }, { passive: true });

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
                    hexagons.forEach(h => h.classList.remove('drag-over'));
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
        setupTooltips();
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
            let numberActive = index + 1
            if (numberActive === allItemButtons.length) {
                numberActive = 'other'
            }
            if (numberActive === 4) {
                numberActive = 5
            }
            btn.addEventListener('click', () => {
                document.body.setAttribute(
                    'btn-filter',
                    `category-${numberActive}-active`
                );
            });
        });
    }

    builderItems.innerHTML = items
        .map(
            ({ name, icon, type, tier, apiName }) => `
            <div class="item-child item-${type} tier-${tier}" draggable="true" data-api-name="${apiName}" data-icon="${icon}" data-name="${name}">
                <img src="${icon}" alt="${name}">
                <span>${name}</span>
            </div>
        `
        )
        .join('');

    document.querySelectorAll('.item-child').forEach(item => {
        let dragPreview = null;
        item.dataset.touchStartTime = '0'; // Khởi tạo touchStartTime
        item.dataset.isDragging = 'false'; // Khởi tạo trạng thái kéo

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
            const img = new Image();
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            e.dataTransfer.setDragImage(img, 0, 0);
            dragPreview = createDragPreview(item, 'item');
            item.classList.add('dragging');
        });

        item.addEventListener('drag', e => {
            if (e.clientX && e.clientY) {
                updateDragPreview(dragPreview, e.clientX, e.clientY);
            }
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            removeDragPreview(dragPreview);
            dragPreview = null;
            hexagons.forEach(h => h.classList.remove('drag-over'));
        });

        item.addEventListener('touchstart', e => {
            if (item.dataset.isDragging === 'true') return;
            item.dataset.touchStartTime = Date.now().toString();
            item.dataset.touchData = JSON.stringify({
                type: 'item',
                apiName: item.dataset.apiName,
                icon: item.dataset.icon,
                name: item.dataset.name,
            });
            item.classList.add('dragging');
            item.dataset.isDragging = 'true';
            dragPreview = createDragPreview(item, 'item');
            const touch = e.touches[0];
            updateDragPreview(dragPreview, touch.clientX, touch.clientY);
        }, { passive: true });

        item.addEventListener('touchend', e => {
            const touchStartTime = item.dataset.touchStartTime && item.dataset.touchStartTime !== '0'
                ? parseInt(item.dataset.touchStartTime, 10)
                : Date.now(); // Giá trị mặc định
            const touchDuration = Date.now() - touchStartTime;
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
                delete item.dataset.touchStartTime;
                item.classList.remove('dragging');
                item.dataset.isDragging = 'false';
                removeDragPreview(dragPreview);
                dragPreview = null;
                hexagons.forEach(h => h.classList.remove('drag-over'));
            }
        }, { passive: true });

        item.addEventListener('touchcancel', e => {
            if (item.dataset.touchData) {
                delete item.dataset.touchData;
                delete item.dataset.touchStartTime;
                item.classList.remove('dragging');
                item.dataset.isDragging = 'false';
                removeDragPreview(dragPreview);
                dragPreview = null;
                hexagons.forEach(h => h.classList.remove('drag-over'));
            }
        }, { passive: true });
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

        if (item.type === 'emblems' && item.trait !== '') {
            const emblemTraitApiName = item.trait;
            const emblemTrait = traits.find(t => t.apiName === emblemTraitApiName);
            if (!emblemTrait) return;
            if (champion.traits.some(id => traits.find(c => c.id === id)?.apiName === emblemTraitApiName)) return;

            const existingItems = Array.from(hexagonItems.children).map(span => {
                const img = span.querySelector('img');
                return items.find(i => i.apiName === img.dataset.apiName);
            });
            if (
                existingItems.some(
                    ei => ei?.type === 'emblems' && ei.trait === emblemTraitApiName
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
        itemSpan.dataset.touchStartTime = '0'; // Khởi tạo touchStartTime

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
            const img = new Image();
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            e.dataTransfer.setDragImage(img, 0, 0);
            dragPreview = createDragPreview(itemSpan, 'item-span');
            itemSpan.classList.add('dragging');
        });

        itemSpan.addEventListener('drag', e => {
            if (e.clientX && e.clientY) {
                updateDragPreview(dragPreview, e.clientX, e.clientY);
            }
        });

        itemSpan.addEventListener('dragend', () => {
            itemSpan.classList.remove('dragging');
            removeDragPreview(dragPreview);
            dragPreview = null;
            hexagons.forEach(h => h.classList.remove('drag-over'));
        });

        itemSpan.addEventListener('touchstart', e => {
            if (itemSpan.dataset.isDragging === 'true') return;
            itemSpan.dataset.touchStartTime = Date.now().toString(); // Lưu thời gian bắt đầu
            itemSpan.dataset.touchData = JSON.stringify({
                type: 'remove-item',
                apiName: itemData.apiName,
                hexagonIndex: hexagon.dataset.index,
            });
            itemSpan.classList.add('dragging');
            itemSpan.dataset.isDragging = 'true';
            dragPreview = createDragPreview(itemSpan, 'item-span');
            const touch = e.touches[0];
            updateDragPreview(dragPreview, touch.clientX, touch.clientY);
        }, { passive: true });

        itemSpan.addEventListener('touchend', e => {
            const touchStartTime = parseInt(itemSpan.dataset.touchStartTime, 10); // Lấy từ dataset
            const touchDuration = Date.now() - touchStartTime;
            const touch = e.changedTouches[0];
            const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
            const targetHexagon = targetElement?.closest('.hexagon');
            const data = itemSpan.dataset.touchData ? JSON.parse(itemSpan.dataset.touchData) : null;

            if (data) {
                if (touchDuration < 300) {
                    e.preventDefault();
                    e.stopPropagation();
                    hexagonItems.removeChild(itemSpan);
                    shouldUpdateTraits = true;
                    renderBuilderTraits();
                    updateTeamUrl();
                } else if (!targetHexagon || targetHexagon.dataset.index !== data.hexagonIndex) {
                    hexagonItems.removeChild(itemSpan);
                    shouldUpdateTraits = true;
                    renderBuilderTraits();
                    updateTeamUrl();
                }
            }

            if (itemSpan.dataset.touchData) {
                delete itemSpan.dataset.touchData;
                delete itemSpan.dataset.touchStartTime; // Dọn dẹp
                itemSpan.classList.remove('dragging');
                itemSpan.dataset.isDragging = 'false';
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

    document.body.addEventListener('dragover', e => {
        e.preventDefault(); // Cho phép thả trên toàn bộ trang
    }, { passive: false });

    document.body.addEventListener('drop', e => {
        e.preventDefault(); // Ngăn hành vi mặc định của trình duyệt

        // Nếu thả vào hexagon, chỉ xóa drag-preview và để handleDrop xử lý
        if (e.target.closest('.hexagon')) {
            removeDragPreview();
            return;
        }

        try {
            const data = JSON.parse(e.dataTransfer.getData('text/plain'));
            if (data.type === 'move-champion') {
                const nearestHexagon = findNearestHexagon(e.clientX, e.clientY);
                const hexagon = document.querySelector(`.hexagon[data-index="${data.hexagonIndex}"]`);
                if (hexagon && nearestHexagon && nearestHexagon !== hexagon && !nearestHexagon.querySelector('.hexagon-icon')) {
                    const hexagonIcon = hexagon.querySelector('.hexagon-icon');
                    if (hexagonIcon) {
                        nearestHexagon.appendChild(hexagonIcon);
                        hexagon.classList.remove('has-champ');
                        nearestHexagon.classList.add('has-champ');
                        const index = championOrder.findIndex(o => o.index === data.hexagonIndex);
                        if (index !== -1) championOrder[index].index = nearestHexagon.dataset.index;
                        shouldUpdateTraits = true;
                        renderBuilderTraits();
                        updateTeamUrl();
                    }
                } else if (hexagon) {
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
                removeDragPreview(); // Xóa drag-preview
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
                removeDragPreview(); // Xóa drag-preview
            }
        } catch (error) {
            console.warn('Lỗi xử lý thả ngoài hexagon:', error);
            removeDragPreview(); // Xóa drag-preview ngay cả khi có lỗi
        }
    }, { passive: false });

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
        const showNameButton = document.querySelector('.name-chessboard');

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
            const apiName = augElement.dataset.apiName;
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
                    <img src="${icon}" alt="${name}">
                    <span>${name}</span>
                </div>
            `
            )
            .join('');

        document.querySelectorAll('.builder-render-augs .augments-child').forEach(augElement => {
            augElement.addEventListener('click', e => {
                const apiName = augElement.dataset.apiName;
                const aug = augments.find(a => a.apiName === apiName);
                if (!aug) return;

                const index = selectedAugments.findIndex(a => a.apiName === apiName);
                if (index !== -1) {
                    selectedAugments.splice(index, 1);
                } else if (selectedAugments.length < 8) {
                    selectedAugments.push(aug);
                } else if (selectedAugments.length === 8) {
                    customTooltip('Đã đủ 8 Augments', e.clientX, e.clientY);
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
            let numberActive
            switch (index) {
                case 0:
                    numberActive = 0
                    break;
                case 1:
                    numberActive = 3
                    break;
                case 2:
                    numberActive = 2
                    break;
                case 3:
                    numberActive = 1
                    break;
            }
            btn.addEventListener('click', () => {
                document.body.setAttribute('augs-btn-filter', `category-${numberActive}-active`);
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
    initToggle('name-chessboard', false)

    const loadedFromUrl = loadCompFromUrl();
    if (!loadedFromUrl) {
        loadCompFromTierList();
    }
}