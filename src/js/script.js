import '../less/style.less' //importing styles for webpack 
import burger from './modules/burger'
import modals from './modules/modals'

window.addEventListener('DOMContentLoaded', () => {

    // mobile nav
    burger()

    //modals
    modals()


})