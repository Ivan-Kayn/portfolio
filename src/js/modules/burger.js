let burger = () => {
    let navToggle = document.querySelector('#navToggle'),
        nav = document.querySelector('#nav')

    navToggle.addEventListener('click', (e) => {
        event.preventDefault()

        nav.classList.add('show')
    })

}

export default burger