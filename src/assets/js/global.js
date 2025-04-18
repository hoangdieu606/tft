/* convert URL */
export function convertURL(assetPath) {
    return assetPath;
    const baseUrl = "https://raw.communitydragon.org/latest/game/";

    if (assetPath) {
        const convertedPath = assetPath
            .toLowerCase()
            .replace(/\.tex$/i, ".png")

        return baseUrl + convertedPath;
    } else {
        return null
    }
}

/* return apiName and icon, items đang dùng */
export function apiNameAndIcon(data) {
    return Object.fromEntries(data.map(obj => [obj.apiName, obj.icon]))
}

/*  Render icon AD, AP, AS, ...items đang dùng */
export function generateStatsHTML(effects) {
    if (!effects) { return ""; }
    // Định nghĩa mapping giữa key và thông tin hình ảnh
    const statIcons = {
        "AD": { url: "/assets/images/AD.png", isPercent: true },
        "AP": { url: "/assets/images/AP.png", isPercent: false },
        "Mana": { url: "/assets/images/Mana.png", isPercent: false },
        "Armor": { url: "/assets/images/Armor.png", isPercent: false },
        "MagicResist": { url: "/assets/images/MR.png", isPercent: false },
        "Health": { url: "/assets/images/Health.png", isPercent: false },
        "AS": { url: "/assets/images/AS.png", isPercent: true },
        "CritChance": { url: "/assets/images/Crit.png", isPercent: true },
        "{1543aa48}": { url: "/assets/images/DA.png", isPercent: true },
        "PercentDR": { url: "/assets/images/DR.png", isPercent: true },
        "StatOmnivamp": { url: "/assets/images/SV.png", isPercent: true }
    };

    let html = "";

    // Duyệt qua từng key trong đối tượng effects
    for (const [stat, value] of Object.entries(effects)) {
        // Bỏ qua nếu stat không có trong mapping
        if (!statIcons[stat]) { continue; }

        const { url, isPercent } = statIcons[stat];
        // Chuyển đổi giá trị thành chuỗi
        let displayValue = value;
        if (typeof value === "number") {
            // Nếu là phần trăm và giá trị < 1, nhân 100
            if (isPercent && value < 1) {
                displayValue = Math.round(value * 100);
            } else {
                displayValue = Math.round(value);
            }
        }

        // Thêm ký hiệu % nếu là percent
        const suffix = isPercent ? "%" : "";

        // Tạo thẻ HTML
        html += `<span><img src="${url}" class="icon-stat">+${displayValue}${suffix}</span>`;
    }

    return html.trim();
}
