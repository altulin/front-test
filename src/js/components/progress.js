// процент скролла + контур
import helpers from '../helpers';

const init = () => {
	helpers.$window.on('load', () => {
		const bar = $('.percent__bar');
		const radius = bar.attr('r');
		const path = Math.trunc(2 * Math.PI * radius * 1000) / 1000;
		console.log(path);
	});
};

export default init;
