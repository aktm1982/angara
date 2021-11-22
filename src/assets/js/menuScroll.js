
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 0) {
		document.querySelector('.header_f').classList.add('header--scroll')
	}
	else {
		document.querySelector('.header_f').classList.remove('header--scroll')
	}
});
