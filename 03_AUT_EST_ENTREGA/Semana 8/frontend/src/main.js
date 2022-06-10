const competitionFactory = (name, description, reward) => {
	return `
	<div class="card w-40 m-3">
		<h5 class="card-header bg-light-green">${name}</h5>
		<div class="card-body">
		<h5 class="card-title">${reward}</h5>
		<p class="card-text">${description}</p>
		</div>
	</div>`
}

const setCompetitions = () => {
	$.get('http://127.0.0.1:8080/competitions', function (res) {
		res.forEach((competition) => {
			$('#competitions-container').append(competitionFactory(competition.name, competition.description, competition.reward))
		})
	})
}

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

	setCompetitions()
})
