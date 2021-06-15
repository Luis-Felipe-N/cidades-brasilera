function initMenuMobile() {
    const btnMenu = document.querySelector( '[data-menu="button"]' )
    const menu = document.querySelector( '[data-js="menu"]' )

    
    const outSideClick = () => {
        const html = document.documentElement
        const dataEvent = 'data-eventclick'

        const handleClickOutSide = ( event ) => {
            if (!menu.contains(event.target)) {
                menu.classList.remove('active')
                menu.removeAttribute(dataEvent)
                html.removeEventListener( 'click', handleClickOutSide )
            }
        }

        if (!menu.hasAttribute(dataEvent)) {
            html.addEventListener( 'click', handleClickOutSide )
            menu.setAttribute(dataEvent, '')
        }

    }

    const handleClick = () => {
        menu.classList.toggle('active')

        outSideClick()
    }

    btnMenu.addEventListener( 'click', handleClick)
}

export default initMenuMobile