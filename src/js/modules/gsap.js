import gsap from 'gsap';
const animationY = (elemClass) => {
	gsap.from(`.${elemClass}`, {
		opacity: 0,
		y: 100,
		duration: 2,
		ease: 'power4',
	});
};

const animationText = (elemClass, direction) => {
	gsap.from(`.${elemClass}`, {
		opacity: 0,
		x: direction === 'left' ? 40 : -40,
		duration: 1,
	});
};

const animationScroll = () => {
	gsap.from('.attainments__inner', {
		scrollTrigger: {
			trigger: '.attainments',
			scroller: '.scroll',
			start: '50% bottom',
		},
		duration: 2,
		scale: 0.3,
		rotation: 45,
		autoAlpha: 0,
		ease: 'power2',
	});
};

const animationFooter = () => {
	gsap.from('.footer__img', {
		scrollTrigger: {
			trigger: '.footer',
			scroller: '.scroll',
			start: '50% bottom',
		},
		duration: 1,
		scale: 0.3,
		autoAlpha: 0,
		ease: 'power2',
	});
};

export default {
	animationY,
	animationScroll,
	animationText,
	animationFooter,
};
