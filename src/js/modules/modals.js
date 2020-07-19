import {
    bind
} from "file-loader"

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            scroll = calcScroll()

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {

                if (e.target) {
                    e.preventDefault()

                }

                modal.style.display = "flex"
                document.body.style.marginRight = `${scroll}px`
                document.body.style.overflow = "hidden"

            })
        })


        close.addEventListener('click', () => {
            modal.style.display = "none"
            document.body.style.marginRight = `0px`
            document.body.style.overflow = "visible"
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modal.style.display = "none"
                document.body.style.marginRight = `0px`
                document.body.style.overflow = "visible"
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'flex'
            document.body.style.overflow = "hidden"
        }, time)
    }

    function calcScroll() {
        let div = document.createElement('div')

        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'hidden'

        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()

        return scrollWidth

    }

    //contact form modals
    bindModal('.hireme__btn', '#modal_hire_me', '#close_modal_3')

    //work projects modals

    bindModal('.work__image-1', '#modal_project_1', '#close_project_1')
    bindModal('.work__image-2', '#modal_project_2', '#close_project_2')
    bindModal('.work__image-3', '#modal_project_3', '#close_project_3')
    bindModal('.work__image-4', '#modal_project_4', '#close_project_4')
    bindModal('.work__image-4', '#modal_project_4', '#close_project_4')
    bindModal('.work__image-5', '#modal_project_5', '#close_project_5')
    bindModal('.work__image-6', '#modal_project_6', '#close_project_6')

}

export default modals