const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll()

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()

                }

                windows.forEach(item => {
                    item.style.display = 'none'
                })


                modal.style.display = "flex"
                document.body.classList.add('modal-open')
                document.body.style.marginRight = `${scroll}px`
            })
        })


        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none'
            })
            modal.style.display = "none"
            document.body.classList.remove('modal-open')
            document.body.style.marginRight = `0px`
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none'
                })
                modal.style.display = "none"
                document.body.classList.remove('modal-open')
                document.body.style.marginRight = `0px`
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'flex'
            document.body.style.overflow = "hiden"
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


    //resume modals
    bindModal('.see__resume-btn', '#modal_resume', '#close_modal_2')

    //work projects modals
    bindModal('.work__image', '#modal_project_1', '#close_modal_1')


}

export default modals