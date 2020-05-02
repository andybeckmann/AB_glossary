/**
 * AB_glossary
 * version: 1.0.0
 *
 * glossary() adds accordion-like functionality to a list
 *
 * @param {string} glossaryId - HTML element
 */

function glossary(glossaryId) {
	let glossary = document.querySelectorAll(glossaryId + ' li .item'),
		headers = document.querySelectorAll(glossaryId + ' li .item h3'),
		paragraphs = document.querySelectorAll(glossaryId + ' li .item p');

	for (let i = 0; i < glossary.length; i++ ) {
		glossary[i].addEventListener('click', function () { 
			headers[i].classList.toggle('header-open');
			paragraphs[i].classList.toggle('paragraph-open');
		});
	}
}