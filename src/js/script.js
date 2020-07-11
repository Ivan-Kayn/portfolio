import sayHello from './modules/popup.js'
import '../less/style.less'
import '.babel'
// mobile nav
sayHello()
let navToggle = document.querySelector('#navToggle'),
    nav = document.querySelector('#nav')

navToggle.addEventListener('click', (e) => {
    event.preventDefault()

    nav.classList.add('show')
})