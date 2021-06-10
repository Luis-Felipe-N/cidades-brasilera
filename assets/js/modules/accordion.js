function initAccordion() {
    const faqs = document.querySelectorAll('[data-js="faqArccordion"] dt')

    function activeAccordion() {
        const dd = this.nextElementSibling
        this.classList.toggle('active')
        dd.classList.toggle('active')
    }

    faqs.forEach( faq => faq.addEventListener('click', activeAccordion))
}

export default initAccordion