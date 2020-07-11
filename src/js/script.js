import '../less/style.less' //importing styles for webpack 
import modal from './modules/modals'
import burger from './modules/burger'
import modals from './modules/modals'

window.addEventListener('DOMContentLoaded', () => {
    // mobile nav
    burger()

    //modals
    modals()


})