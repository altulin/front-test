import header from '../components/header';
import helpers from '../helpers';
import locomotive from './locomotive';

/**
* Модуль "Плавный переход к якорю"
*/
const init = () => {
	helpers.$document.on('click.anchor', '.js-to-anchor', (e) => {
		e.preventDefault();
		e.stopPropagation();

		const id = $(e.currentTarget).attr('href');

		header.closeMenu().then(() => {
			$('.js-burger').removeClass('is-active');
			locomotive.scroll.scrollTo(id);
		});
	});
};

const destroy = () => {
	helpers.$document.off('.anchor');
};

export default {
	init,
	destroy,
};
