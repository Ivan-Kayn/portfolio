import '../less/style.less' //importing styles for webpack 
import burger from './modules/burger'
import modals from './modules/modals'
import filter from './modules/filter'


window.addEventListener('DOMContentLoaded', () => {

    // mobile nav
    burger()

    //modals
    modals()

    //filter for works
    filter()


})