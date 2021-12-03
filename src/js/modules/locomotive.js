import LocomotiveScroll from 'locomotive-scroll';
import helpers from '../helpers';
import toTop from '../components/svgAnimation';
const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
});

const initLocomotive = () => {
	const className = '.js-back-to-top';
	const shownClass = 'is-shown';
	const footerHeight = $('.footer').outerHeight();
	const windowHeight = helpers.$window.height();
	const headerWrap = $('.main-body__header-wrapper');
	let lastScrollTop = 0;

	const scrollHandler = (e) => {
		const scrollTop = e.scroll.y;
		const bodyHeight = helpers.$document.height();

		if (scrollTop > 0) {
			headerWrap.addClass('is-sticky');
		} else {
			headerWrap.removeClass('is-sticky');
		}

		if (scrollTop + windowHeight >= bodyHeight - footerHeight) {
			if (lastScrollTop > scrollTop) {
				// $(className).removeClass(shownClass);
			} else {
				$(className).addClass(shownClass);
				toTop.play(4);
			}
		} else {
			$(className).removeClass(shownClass);
			toTop.stop().reset();
		}
		lastScrollTop = scrollTop;
	};

	scroll.on('scroll', (e) => {
		scrollHandler(e);
	});
};

export default {
	initLocomotive,
	scroll,
};
