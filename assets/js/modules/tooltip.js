function initTooltip() {
    const tooltips = document.querySelectorAll( '[data-tooltip]')

    const criarTooltip = ( element ) => {
        const text = element.getAttribute('aria-label')
        const tooltip = document.createElement('div')
        
        tooltip.classList.add('tooltip')
        tooltip.innerHTML = text
        document.body.appendChild( tooltip )
        return tooltip
    }
    
    function onMouserOver( event ) {
        const tooltip = criarTooltip( this )
        tooltip
        
        this.addEventListener('mouseout', onMouseOut)
        onMouseOut.tooltip = tooltip
        onMouseOut.element = this

        this.addEventListener( 'mousemove', onMouseMove )
        onMouseMove.tooltip = tooltip
    }

    const onMouseOut = {
        handleEvent() {
            this.tooltip.remove()
            this.element.removeEventListener('mouseout', onMouseOut)
            this.element.removeEventListener( 'mousemove', onMouseMove )
        }
    }

    const onMouseMove = {
        handleEvent( event ) {
            this.tooltip.style.top = event.pageY + 20 + 'px'
            this.tooltip.style.left = event.pageX + 20 + 'px'
        }
    }

    tooltips.forEach(tooltip => {
        tooltip.addEventListener( 'mouseover', onMouserOver )
    });
}

export default initTooltip