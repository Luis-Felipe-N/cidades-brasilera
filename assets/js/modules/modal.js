function initModal() {
    const btnModal = document.querySelector( '[data-btn="btn-modal"]' )
    const btnModalClose = document.querySelector( '[data-btn="btn-close"]' )
    const containerModal = document.querySelector( '[data-modal="modal-container"]' )
    
    const showActive = () => {
        containerModal.classList.add( 'active' )
    }
    const closeModal = () => {
        containerModal.classList.remove( 'active' )
    }

    btnModal.addEventListener( 'click', () => showActive())
    btnModalClose.addEventListener( 'click', () => closeModal())
}

export default initModal