function filter() {
    let triggers = document.querySelectorAll('.works__nav-link')

    function hideTabs() {

        let elements = document.querySelectorAll('.all')
        elements.forEach(item => {
            item.style.display = 'none'
        })

    }

    function showTabs(elements) {
        elements.forEach(item => {
            item.style.display = 'flex'
        });
    }

    triggers.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()

            let selector = e.target.textContent.toLowerCase()
            selector = `.${selector}`
            let works = document.querySelectorAll(selector)
            hideTabs()
            showTabs(works)

        })
    })

}

export default filter