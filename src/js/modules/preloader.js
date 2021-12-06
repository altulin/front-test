import helpers from '../helpers';
import gsap from './gsap';

const imagesAll = document.images;

const imagesViewList = Array.from(imagesAll).filter((item) => {
	return !$(item).is('.preloader__img');
});

const imagesTotalCountView = imagesViewList.length;
let imagesLoadedCount = 0;
const preloader = document.querySelector('#preloader');
const preloaderImg = $('.preloader__img-wrap');
const height = preloaderImg.height();
const width = preloaderImg.width();
const stepHeight = Math.trunc((helpers.winHeight + height) / imagesTotalCountView);
const stepWidth = (helpers.winWidth + width) / imagesTotalCountView;
const elapsedMin = 1000;

function imageLoader(elapsed) {
	imagesLoadedCount++;
	preloaderImg.css('transition-duration', `${elapsed}ms`);
	preloaderImg.css('transform', `translate(${stepWidth * imagesLoadedCount}px, ${-stepHeight * imagesLoadedCount}px)`);

	if (imagesLoadedCount >= imagesTotalCountView) {
		setTimeout(() => {
			if (!preloader.classList.contains('preloader-style__loader__done')) {
				preloader.classList.add('preloader-style__loader__done');
				gsap.animationY('candidate__title');
				gsap.animationY('candidate__text-block');
				gsap.animationText('standing__left', 'left');
				gsap.animationText('standing__right', 'right');
			}
		}, elapsed);
	}
}

for (let image of imagesViewList) {
	const imageClone = new Image();
	const startTime = new Date();
	imageClone.src = image.src;
	imageClone.addEventListener('load', () => {
		const endTime = new Date();
		const result = endTime.getTime() - startTime.getTime();
		// если слишком быстро
		const elapsed = result < elapsedMin ? elapsedMin : result;
		imageLoader(elapsed);
	});
}
