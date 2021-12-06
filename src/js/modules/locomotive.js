import LocomotiveScroll from 'locomotive-scroll';
import helpers from '../helpers';
import toTop from '../components/svgAnimation';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import animation from './gsap';

gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
	el: document.querySelector('.scroll'),
	smooth: true,
	smoothMobile: true,
});

const locoScroll = new LocomotiveScroll({
	el: document.querySelector('.scroll'),
	smooth: true,
});

ScrollTrigger.scrollerProxy('.scroll', {
	scrollTop(value) {
		return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return {top: 0,
			left: 0,
			width: window.innerWidth,
			height: window.innerHeight};
	},

	pinType: document.querySelector('.scroll').style.transform ? 'transform' : 'fixed',
});

animation.animationScroll();
animation.animationFooter();

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

ScrollTrigger.refresh();

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
		// eslint-disable-next-line no-unused-expressions
		ScrollTrigger.update;
	});
};

export default {
	initLocomotive,
	scroll,
};
