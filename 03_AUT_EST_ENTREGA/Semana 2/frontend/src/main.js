$(document).ready(function() {
    function isScrolledIntoView(elem) {
        // Source from http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
        var docViewTop = $(window).scrollTop()
        var docViewBottom = docViewTop + $(window).height()

        var elemTop = $(elem).offset().top
        var elemBottom = elemTop + $(elem).height()

        return elemBottom <= docViewBottom && elemTop >= docViewTop
    }

    $(window).scroll(function() {
        $('.scroll-sides .animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                if (this.classList.contains('left')) {
                    $(this).addClass('fadeInLeft')
                } else if (this.classList.contains('right')) {
                    $(this).addClass('fadeInRight')
                } else {
                    $(this).addClass('fadeIn')
                }
            }
        })
    })
})