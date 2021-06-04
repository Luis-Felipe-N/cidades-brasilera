const tabMenu = document.querySelectorAll('[data-js="tabmenu"] li')
const tabDescricao = document.querySelectorAll('[data-js="tabdescricao"] section')

const removeActive = () => tabDescricao.forEach(descricao => descricao.classList.remove('active'))

const activeTab = index => {
    removeActive()
    tabDescricao[index].classList.add('active')
}

tabMenu.forEach( (menu, index ) => menu.addEventListener( 'click', () => activeTab( index )))