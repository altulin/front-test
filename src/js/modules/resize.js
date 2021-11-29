// reload

import helpers from '../helpers';
let resizeTimeout;
const startWidth = helpers.$window.width();

const actualResizeHandler = () => {
	document.location.reload();
};

const resizeThrottler = () => {
	const endWidth = helpers.$window.width();
	const deltaWidth = startWidth - endWidth;

	if (!resizeTimeout && Math.abs(deltaWidth) > 100) {
		resizeTimeout = setTimeout(() => {
			resizeTimeout = null;
			actualResizeHandler();
		}, 1000);
	}
};

const addEventResize = () => {
	return window.addEventListener('resize', resizeThrottler, false);
};
export default addEventResize;
