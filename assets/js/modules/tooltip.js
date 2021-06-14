function initTooltip() {
    const tooltips = document.querySelectorAll( '[data-tooltip]')
    const eventsOut = [ 'mouseout', 'touchend' ]
    const eventMove = [ 'mousemove', 'touchmove' ]

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
        
        eventsOut.forEach( userEvent => this.addEventListener( userEvent, onMouseOut) )
        
        onMouseOut.tooltip = tooltip
        onMouseOut.element = this

        eventMove.forEach( userEvent => this.addEventListener( userEvent, onMouseMove) )
        onMouseMove.tooltip = tooltip
    }

    const onMouseOut = {
        handleEvent() {
            this.tooltip.remove()
            this.element.removeEventListener('mouseout', onMouseOut)
            this.element.removeEventListener( 'mousemove', onMouseMove )
            eventsOut.forEach( userEvent => this.element.removeEventListener( userEvent, onMouseOut) )
            eventMove.forEach( userEvent => this.element.removeEventListener( userEvent, onMouseMove) )
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