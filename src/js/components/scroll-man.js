import LocomotiveScroll from 'locomotive-scroll';

const makeScroll = () => {
	const container = document.querySelector('[data-scroll-container]');

	if (container !== null) {
		const scroll = new LocomotiveScroll({
			el: container,
			smooth: true,
		});

		scroll.init();
	}
};

export default makeScroll;
