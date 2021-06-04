const faqs = document.querySelectorAll('[data-js="faqArccordion"] dt')
console.log( faqs )

function activeAccordion() {
    const dd = this.nextElementSibling
    console.log(dd)
    this.classList.toggle('active')
    dd.classList.toggle('active')
}

faqs.forEach( faq => faq.addEventListener('click', activeAccordion))