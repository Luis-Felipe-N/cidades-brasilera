function initDropDown() {
    const dropdowns = document.querySelectorAll( '[data-dropdown]' )

    dropdowns.forEach( dropdown => {
        ['touchstart', 'click' ].forEach( userEvent => {
            dropdown.addEventListener( userEvent, handleClick )
        })
    })

    function handleClick( e ) {
        e.preventDefault()
        this.classList.toggle('active')

        outSideClick( this, () => {
            this.classList.remove('active')
        })
    }

    function outSideClick( element, callback ) {
        const html = document.documentElement
        const outSideEvent = 'data-outsideevent'

        if( !element.hasAttribute( outSideEvent ) ) {
            element.setAttribute(outSideEvent, '')
            html.addEventListener( 'click', handleOutSide )
        }
    
        function handleOutSide( event ) {
            if ( !element.contains( event.target )) {
                html.removeEventListener( 'click', handleOutSide )
                element.removeAttribute( outSideEvent )
                callback()
            }
        }
    }
}



export default initDropDown