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
    }
}

export default initDropDown