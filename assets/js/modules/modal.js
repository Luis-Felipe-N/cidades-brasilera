function initModal() {
    const btnModal = document.querySelector( '[data-btn="btn-modal"]' )
    const btnModalClose = document.querySelector( '[data-btn="btn-close"]' )
    const containerModal = document.querySelector( '[data-modal="modal-container"]' )
    const modal = containerModal.querySelector('div')
    
    function showModal() {
        containerModal.classList.add( 'active' )
        outSideClick( this )
    }
    
    function outSideClick( element ) {
        const html = document.documentElement

        html.addEventListener( 'click', handleClick )

        function handleClick( event ) {
            console.log(!containerModal.contains( event.target ), !element.contains( event.target ) )
            if( (!modal.contains( event.target )) && (!element.contains( event.target )) ) {
                console.log( 'teste' )
                html.removeEventListener( 'click', handleClick )
                closeModal()
            }
        }
    }
    
    function closeModal() {
        containerModal.classList.remove( 'active' )
    }

    btnModal.addEventListener( 'click', showModal)
    btnModalClose.addEventListener( 'click', closeModal)
}

export default initModal