let burger = () => {
    let navToggle = document.querySelector('#navToggle'),
        nav = document.querySelector('#nav'),
        backgroundDiv = document.querySelector('#background'),
        navLinks = document.querySelectorAll('.nav__link')


    navToggle.addEventListener('click', (e) => {
        e.preventDefault()

        nav.classList.add('show')
        backgroundDiv.style.display = 'flex'

    })

    backgroundDiv.addEventListener('click', () => {
        nav.classList.remove('show')
        backgroundDiv.style.display = 'none'
    })

    navLinks.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('show')
            backgroundDiv.style.display = 'none'
        })
    });

}

export default burger