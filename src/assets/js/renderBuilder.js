

export function renderBuilder(data, hexIndex) {
    const builderChampions = document.querySelector('.builder-champions .builder-list')
    const builderItems = document.querySelector('.builder-items .builder-list')
    const { champions: { mainChampions: champions }, items: { mainItems: items }, augments: { mainAugs: augments }, traits: { mainTraits: traits } } = data;
    console.log(champions)
    builderChampions.innerHTML = champions.map(({apiName, name, icon, cost, range }) => {
        return `<div class="tier-list cost-${cost}">
      <div class="hexagon-tier-champ">
        <span style="background-image: url(${icon})" title="${name}" data-name="${apiName}"></span>
      </div>
      <div class="hexagon-title">${name}</div>
    </div>`
    }).join('')
}