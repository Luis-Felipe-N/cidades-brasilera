const sections = document.querySelectorAll('[data-js="animaScroll"]')
 
if ( sections ) {

    const animaScroll = ( ) => {
        const metadeTelUsuario = window.innerHeight * 0.65

        sections.forEach( section => {
            const sectionTop = section.getBoundingClientRect().top
            const sectionIsVisibile = (sectionTop - metadeTelUsuario) < 0

            console.log(sectionIsVisibile)
            if (sectionIsVisibile) {
                section.classList.add( 'active' )
            }
        })
    }

    window.addEventListener( 'scroll', () => animaScroll())

    animaScroll()




}