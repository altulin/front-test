// процент скролла + контур
import helpers from '../helpers';

const init = () => {
	helpers.$window.on('load', () => {
		const bar = $('.percent__bar');
		const radius = bar.attr('r');
		const path = Math.trunc(2 * Math.PI * radius * 1000) / 1000;
		const windowHeight = helpers.$window.height();
		const percentElem = $('.js-percent-val');

		bar.css({
			'stroke-dasharray': `${path} `,
			'stroke-dashoffset': `${path} `,
		});

		helpers.$window.on('scroll', () => {
			const bodyHeight = helpers.$document.height();
			const scrollTop = helpers.$window.scrollTop();
			const delta = scrollTop / (bodyHeight - windowHeight);
			const dashoffset = Math.trunc((path - path * delta) * 1000) / 1000;
			const percent = Math.trunc(delta * 100);

			bar.css('stroke-dashoffset', `${dashoffset} `);
			percentElem.text(percent);
		});
	});
};

export default init;
