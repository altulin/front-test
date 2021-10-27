import helpers from '../helpers';
import toTop from '../components/svgAnimation';

/**
* Модуль "Возврат наверх"
*/
const init = () => {
	const className = '.js-back-to-top';
	const shownClass = 'is-shown';
	let lastScrollTop = 0;

	helpers.$document.on('click.backTop', `${className}`, () => {
		helpers.scrollTo($('body'));
	});

	helpers.$window.on('scroll.backTop', () => {
		const scrollTop = window.pageYOffset;

		if (scrollTop > window.innerHeight) {
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
	});
};

const destroy = () => {
	helpers.$window.off('.backTop');
	helpers.$document.off('.backTop');
};

export default {
	init,
	destroy,
};
