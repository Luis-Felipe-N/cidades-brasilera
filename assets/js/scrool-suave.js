const linksInternos = document.querySelectorAll('[data-js="menu"] ul li a[href^="#')

function scrollMenu( section ) {
    section.scrollIntoView({behavior: "smooth"})
}

linksInternos.forEach( link => {
    const href = link.getAttribute('href')
    const section = document.querySelector(href)
    link.addEventListener( 'click', (e) => {
        e.preventDefault()
        scrollMenu( section )
    })
})