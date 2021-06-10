function initTab() {
    const tabMenu = document.querySelectorAll('[data-js="tabmenu"] li')
    const tabDescricao = document.querySelectorAll('[data-js="tabdescricao"] section')

    const removeActive = classSection => tabDescricao.forEach(descricao => descricao.classList.remove('active'))

    const activeTab = index => {
        removeActive()
        const direction = tabDescricao[index].getAttribute( 'data-anime' ) 
        tabDescricao[index].classList.add('active', direction)
    }

    tabMenu.forEach( (menu, index ) => menu.addEventListener( 'click', () => activeTab( index )))

}

export default initTab