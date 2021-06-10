function initAnimaScroll() {
    const sections = document.querySelectorAll('[data-js="animaScroll"]')
 
    if ( sections ) {

        const animaScroll = ( ) => {
            const metadeTelUsuario = window.innerHeight * 0.65

            sections.forEach( section => {
                const sectionTop = section.getBoundingClientRect().top
                const sectionIsVisibile = (sectionTop - metadeTelUsuario) < 0

                if (sectionIsVisibile) {
                    section.classList.add( 'active' )
                }
            })
        }

        window.addEventListener( 'scroll', () => animaScroll())

        animaScroll()
    }
}

export default initAnimaScroll