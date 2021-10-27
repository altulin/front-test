import LocomotiveScroll from 'locomotive-scroll';

const makeScroll = () => {
	const container = document.querySelector('.man');

	if (container !== null) {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
		});

		scroll.init();
	}
};

export default makeScroll;
