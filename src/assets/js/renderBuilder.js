import { apiNameAndData } from '/src/assets/js/global-defer.js'
import { setupTooltips, setIndexer } from '/src/assets/js/global-defer.js';


export function renderBuilder(data, hexIndex) {
    // Lấy các phần tử DOM cho danh sách tướng, vật phẩm, các ô hexagon và nút clear
    const builderChampions = document.querySelector('.builder-champions .builder-list');
    const builderItems = document.querySelector('.builder-items .builder-list');
    const hexagons = document.querySelectorAll('.hexagon');
    const clearButton = document.querySelector('.builder-clear');

    // Kiểm tra xem các phần tử DOM có tồn tại không
    if (!builderChampions || !builderItems || hexagons.length === 0 || !clearButton) {
        console.error('Không tìm thấy các phần tử DOM cần thiết!');
        return;
    }

    // Phân tích dữ liệu đầu vào để lấy danh sách tướng, vật phẩm, bổ trợ và đặc tính
    const { champions: { mainChampions: champions }, items: { mainItems: items }, augments: { mainAugs: augments }, traits: { mainTraits: traits } } = data;

    // Kiểm tra dữ liệu đầu vào
    if (!champions || !items) {
        console.error('Dữ liệu đầu vào không hợp lệ!');
        return;
    }

    // Hiển thị danh sách tướng trong giao diện
    function renderBuilderChampions(champions, label = "cost") {
        let data;
        if (label === "traits") {
            const apiNameAndIconCostRange = apiNameAndData(champions, ['icon', 'cost', 'range']);
            // Chưa triển khai logic cho traits, giữ nguyên code của bạn
            console.log(traits)
            builderChampions.innerHTML = ''; // Để tránh lỗi, tạm thời để trống
        } else {
            data = label === "name"
                ? [...champions].sort((a, b) => a.name.localeCompare(b.name))
                : champions;

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

        // Gắn sự kiện cho các phần tử .tier-list mới
        const championElements = document.querySelectorAll('.tier-list');
        championElements.forEach(champion => {
            // Khi nhấp chuột trái, thêm tướng vào ô trống theo range
            champion.addEventListener('click', () => {
                console.log('Nhấp vào tướng:', champion.dataset.apiName);
                const range = parseInt(champion.dataset.range);
                let targetRow;

                // Xác định hàng ưu tiên dựa trên tầm đánh
                if (range === 1) {
                    targetRow = [0, 1, 2, 3, 4, 5, 6]; // Hàng đầu tiên
                } else if (range === 2) {
                    targetRow = [7, 8, 9, 10, 11, 12, 13]; // Hàng thứ hai
                } else {
                    targetRow = [21, 22, 23, 24, 25, 26, 27]; // Hàng cuối cùng
                }

                // Nếu hàng ưu tiên đầy, thử các hàng khác
                const allRows = [
                    [0, 1, 2, 3, 4, 5, 6],
                    [7, 8, 9, 10, 11, 12, 13],
                    [14, 15, 16, 17, 18, 19, 20],
                    [21, 22, 23, 24, 25, 26, 27]
                ];

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
                    console.log('Đã thêm tướng vào ô hexagon:', targetHexagon.dataset.index);
                } else {
                    console.warn('Không còn ô trống để thêm tướng!');
                }
            });

            // Khi bắt đầu kéo, lưu thông tin tướng vào dữ liệu kéo
            champion.addEventListener('dragstart', (e) => {
                console.log('Bắt đầu kéo tướng:', champion.dataset.apiName);
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

    // Gọi hàm render ban đầu
    renderBuilderChampions(champions, "cost");

    // Lọc danh sách tướng
    function filterBuilderChampions() {
        const allChampionButtons = document.querySelectorAll('.builder-champions .builder-filter button');
        allChampionButtons.forEach(btn => {
            const label = btn.dataset.label;
            btn.addEventListener('click', () => {
                allChampionButtons.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                renderBuilderChampions(champions, label);
                setIndexer(data || {});
                setupTooltips();
            });
        });
    }

    // Lọc danh sách vật phẩm
    function filterBuilderItems() {
        const allItemButtons = document.querySelectorAll('.builder-items .builder-filter button');
        const body = document.body;
        const length = allItemButtons.length;

        allItemButtons.forEach((btn, index) => {
            const indexActive = (index + 1) === length ? "other" : (index + 1);
            btn.addEventListener('click', () => {
                body.setAttribute("btn-filter", `category-${indexActive}-active`);
            });
        });
    }

    // Hiển thị danh sách vật phẩm trong giao diện
    builderItems.innerHTML = items.map(({ name, icon, category, tier, apiName }) => {
        return `<div class="item-child item-${category} tier-${tier}" draggable="true" data-api-name="${apiName}" data-icon="${icon}" data-name="${name}">
                 <img src="${icon}" alt="${name}">
                 <span>${name}</span>
        </div>`;
    }).join('');

    // Gọi hàm lọc
    filterBuilderItems();
    filterBuilderChampions();

    // Hàm tạo cấu trúc HTML cho ô hexagon
    function createHexagonContent({ apiName, icon, name, cost }) {
        const hexagonIcon = document.createElement('div');
        hexagonIcon.classList.add('hexagon-icon', `champ-cost-${cost}`);

        const hexagonChamp = document.createElement('div');
        hexagonChamp.classList.add('hexagon-champ');
        const img = document.createElement('img');
        img.src = icon;
        img.dataset.apiName = apiName;
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

        // Kiểm tra số lượng item hiện tại
        if (hexagonItems.children.length >= 3) {
            console.warn('Ô hexagon đã chứa tối đa 3 vật phẩm!');
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

        // Thêm sự kiện kéo và nhấp chuột phải cho item
        itemSpan.setAttribute('draggable', 'true');
        itemSpan.addEventListener('dragstart', (e) => {
            console.log('Bắt đầu kéo vật phẩm ra khỏi ô hexagon:', itemData.apiName);
            e.dataTransfer.setData('text/plain', JSON.stringify({
                type: 'remove-item',
                apiName: itemData.apiName,
                hexagonIndex: hexagon.dataset.index
            }));
        });

        itemSpan.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Ngăn sự kiện lan truyền đến ô hexagon
            hexagonItems.removeChild(itemSpan);
            console.log('Đã xóa vật phẩm khỏi ô hexagon:', hexagon.dataset.index);
        });

        console.log('Đã thêm vật phẩm vào ô hexagon:', hexagon.dataset.index);
    }

    // Tính năng kéo thả vật phẩm
    const itemElements = document.querySelectorAll('.item-child');
    itemElements.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            console.log('Bắt đầu kéo vật phẩm:', item.dataset.apiName);
            e.dataTransfer.setData('text/plain', JSON.stringify({
                type: 'item',
                apiName: item.dataset.apiName,
                icon: item.dataset.icon,
                name: item.dataset.name
            }));
        });
    });

    // Xử lý sự kiện kéo thả cho các ô hexagon
    hexagons.forEach(hexagon => {
        // Cho phép thả tướng hoặc vật phẩm vào ô hexagon
        hexagon.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        // Xử lý khi thả tướng hoặc vật phẩm vào ô hexagon
        hexagon.addEventListener('drop', (e) => {
            e.preventDefault();
            console.log('Thả vào ô hexagon:', hexagon.dataset.index);
            try {
                const data = JSON.parse(e.dataTransfer.getData('text/plain'));
                if (data.type === 'champion') {
                    // Thả tướng từ danh sách tướng
                    if (!hexagon.querySelector('.hexagon-icon')) {
                        const hexagonContent = createHexagonContent(data);
                        hexagon.appendChild(hexagonContent);
                        hexagon.classList.add('has-champ');
                        console.log('Đã thêm tướng vào ô hexagon:', hexagon.dataset.index);
                    } else {
                        console.warn('Ô hexagon đã có tướng!');
                    }
                } else if (data.type === 'move-champion') {
                    // Di chuyển tướng từ ô hexagon khác
                    if (data.hexagonIndex === hexagon.dataset.index) {
                        console.log('Thả vào cùng ô hexagon, bỏ qua:', hexagon.dataset.index);
                        return; // Bỏ qua nếu thả vào cùng ô
                    }

                    const sourceHexagon = document.querySelector(`.hexagon[data-index="${data.hexagonIndex}"]`);
                    const sourceHexagonIcon = sourceHexagon?.querySelector('.hexagon-icon');
                    const targetHexagonIcon = hexagon.querySelector('.hexagon-icon');

                    if (sourceHexagon && sourceHexagonIcon) {
                        if (targetHexagonIcon) {
                            // Đổi chỗ hai tướng
                            hexagon.removeChild(targetHexagonIcon);
                            sourceHexagon.removeChild(sourceHexagonIcon);
                            hexagon.appendChild(sourceHexagonIcon);
                            sourceHexagon.appendChild(targetHexagonIcon);
                            console.log(`Đã đổi chỗ tướng giữa ô hexagon ${data.hexagonIndex} và ${hexagon.dataset.index}`);
                        } else {
                            // Di chuyển tướng đến ô trống
                            hexagon.appendChild(sourceHexagonIcon);
                            sourceHexagon.classList.remove('has-champ');
                            hexagon.classList.add('has-champ');
                            console.log(`Đã di chuyển tướng từ ô hexagon ${data.hexagonIndex} sang ${hexagon.dataset.index}`);
                        }
                    }
                } else if (data.type === 'item') {
                    // Thả vật phẩm
                    if (hexagon.querySelector('.hexagon-icon')) {
                        addItemToHexagon(hexagon, data);
                    } else {
                        console.warn('Ô hexagon chưa có tướng để thêm vật phẩm!');
                    }
                }
            } catch (error) {
                console.error('Lỗi khi thả:', error);
            }
        });

        // Cho phép kéo tướng ra khỏi ô hexagon
        hexagon.addEventListener('dragstart', (e) => {
            const hexagonIcon = hexagon.querySelector('.hexagon-icon');
            if (hexagonIcon && !e.target.closest('.item-span')) { // Chỉ kéo tướng, không phải item
                console.log('Bắt đầu kéo tướng ra khỏi ô hexagon:', hexagon.dataset.index);
                e.dataTransfer.setData('text/plain', JSON.stringify({
                    type: 'move-champion',
                    hexagonIndex: hexagon.dataset.index
                }));
                hexagonIcon.setAttribute('draggable', 'true');
            }
        });
    });

    // Xử lý thả ra ngoài để xóa tướng hoặc vật phẩm
    document.body.addEventListener('dragover', (e) => {
        e.preventDefault(); // Cho phép thả ra ngoài ô hexagon
    });

    document.body.addEventListener('drop', (e) => {
        // Chỉ xử lý nếu thả ngoài ô hexagon
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
                            console.log('Đã xóa tướng khỏi ô hexagon:', data.hexagonIndex);
                        }
                    }
                } else if (data.type === 'remove-item') {
                    const hexagon = document.querySelector(`.hexagon[data-index="${data.hexagonIndex}"]`);
                    if (hexagon) {
                        const hexagonItems = hexagon.querySelector('.hexagon-items');
                        const itemSpan = hexagonItems.querySelector(`.item-span img[data-api-name="${data.apiName}"]`)?.parentElement;
                        if (itemSpan && hexagonItems) {
                            hexagonItems.removeChild(itemSpan);
                            console.log('Đã xóa vật phẩm khỏi ô hexagon:', data.hexagonIndex);
                        }
                    }
                }
            } catch (error) {
                console.error('Lỗi khi thả ra ngoài:', error);
            }
        }
    });

    // Xử lý nút Clear để xóa tất cả tướng
    clearButton.addEventListener('click', () => {
        hexagons.forEach(hexagon => {
            const hexagonIcon = hexagon.querySelector('.hexagon-icon');
            if (hexagonIcon) {
                hexagon.removeChild(hexagonIcon);
                hexagon.classList.remove('has-champ');
            }
        });
        console.log('Đã xóa tất cả tướng khỏi các ô hexagon');
    });

    // Xử lý nhấp chuột phải để xóa tướng khỏi ô hexagon
    hexagons.forEach(hexagon => {
        hexagon.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const hexagonIcon = hexagon.querySelector('.hexagon-icon');
            if (hexagonIcon && !e.target.closest('.item-span')) { // Chỉ xóa tướng nếu không nhấp vào item
                hexagon.removeChild(hexagonIcon);
                hexagon.classList.remove('has-champ');
                console.log('Đã xóa tướng khỏi ô hexagon:', hexagon.dataset.index);
            }
        });
    });
}