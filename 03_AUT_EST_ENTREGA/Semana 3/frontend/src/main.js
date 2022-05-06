$(document).ready(function () {
	function isScrolledIntoView(elem) {
		// Function source from http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
		var docViewTop = $(window).scrollTop()
		var docViewBottom = docViewTop + $(window).height()

		var elemTop = $(elem).offset().top
		var elemBottom = elemTop + $(elem).height()

		return elemBottom <= docViewBottom && elemTop >= docViewTop
	}

	$(window).scroll(function () {
		$('.scroll-sides .animated').each(function () {
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

		$('.wrap-item').each(function () {
			if (isScrolledIntoView(this) === true) {
				this.classList.add('wrap')
				let item = this.getElementsByTagName('div')[0]
				item.classList.add('bar')
				item.classList.add(this.getElementsByTagName('p')[0].innerHTML)
			}
		})
	})
})
