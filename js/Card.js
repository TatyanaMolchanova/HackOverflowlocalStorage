;(function() {
    'use strict'



    const Card = {}

    Card.getHTML = function getHTML(problem) {
		const divElement = document.createElement('div')
		
		divElement.innerHTML = cardTemplate
			.replace('%POINTS%', problem.points)
			.replace('%COMMENTS_NUMBER%', problem.comments.length)
			.replace('%VIEW_NUMBER%', problem.viewsNumber)
			.replace('%ID%', problem.id)
			.replace('%TITLE%', problem.title)

		const badgeplaceElement = divElement.querySelector('[data-badgeplace]')

		for (const badge of problem.badges) {
			const divElement = document.createElement('div')
			divElement.innerHTML = badgeTemplate.replace('%BADGE_LABEL%', badge)
			badgeplaceElement.append(divElement.firstElementChild)
			// console.log('badgeplaceElement', badgeplaceElement)
			// console.log('divElement', divElement)
		}
        return divElement.firstElementChild
    }

    window.Card = Card

    const cardTemplate = `
    <!-- Карточка -->
			<div class="my-3 p-3 bg-white rounded shadow-sm">
				<div class="row">
					<div class="col-1 text-muted">
						<div class="rate">
							<div class="rate__value">%POINTS%</div>
							<div class="rate__name">Голосов</div>
						</div>
					</div>
					<div class="col-1 text-muted">
						<div class="rate">
							<div class="rate__value">%COMMENTS_NUMBER%</div>
							<div class="rate__name">Ответов</div>
						</div>
					</div>
					<div class="col-1 text-muted">
						<div class="rate">
							<div class="rate__value">%VIEW_NUMBER%</div>
							<div class="rate__name">Просмотров</div>
						</div>
					</div>
					<div class="col pl-5">
						<div class="question-title-wrapper">
							<h5 class="question-title">
								<a href="inner.html?id=%ID%">%TITLE%</a>
							</h5>
							<div class="question-badges-wrapper" data-badgeplace></div>
						</div>
					</div>
				</div>
			</div>
            <!-- //Карточка -->`
            
            const badgeTemplate = `<a href="#" class="badge badge-light">%BADGE_LABEL%</a>`
})();
