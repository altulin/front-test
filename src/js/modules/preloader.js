// import helpers from '../helpers';

// Get all images on page in HTMLCollection
const imagesAll = document.images;
// Get all images qty
const imagesTotalCount = imagesAll.length;
// const imagesTotalCountView = imagesTotalCount - 2;
// Set image counter
let imagesLoadedCount = 0;
// Get preloader block
const preloader = document.querySelector('#preloader');
const preloaderImg = preloader.querySelector('.preloader__img-wrap');
// Get percent block
// let showPercent = document.querySelector('#percent');
// Get progress block
// let showProgress = document.querySelector('.progress');
// const diagonal = Math.trunc(Math.sqrt(Math.pow(helpers.winWidth, 2) + Math.pow(helpers.winHeight, 2)));
// const stepHeight = Math.trunc(helpers.winHeight / imagesTotalCountView);
// const stepWidth = helpers.winWidth / imagesTotalCount;
// const height = $(preloaderImg).height();
// const width = $(preloaderImg).width();

// console.log(stepHeight);

// let i = 0;

// let newPosition = (x, y) => {
// 	$(preloaderImg).css({
// 		'-webkit-transform': `translate(${x}px,${y}px)`,
// 		'-ms-transform': `translate(${x}px,${y}px)`,
// 		'transform': `translate(${x}px,${y}px)`,
// 		'transition': '2s',
// 	});
// };

$(preloaderImg).css(
	{
		// opacity: 1,
		// left: `-${width}px`,
		// bottom: `-${height}px`,
	},
);

// Run counter and showing loader progress
function imageLoader() {
	// Add plus image counter
	// const newBottom = imagesLoadedCount * stepHeight + (stepHeight - height) / 2;
	// console.log(newBottom);

	imagesLoadedCount++;
	// Calc percent from tolal images to loaded
	// let calcPercent = `${Math.trunc(100 / imagesTotalCount * imagesLoadedCount)}`;
	// Show percent in HTML
	// showPercent.innerHTML = calcPercent;
	// Show progress in HTML
	// showProgress.style.width = calcPercent;
	// console.log(imagesAll);
	// console.log(imagesLoadedCount);
	// newPosition(stepWidth * imagesLoadedCount, stepHeight * imagesLoadedCount);

	// $(preloaderImg).css(
	// {transform: `translate(${stepWidth * imagesLoadedCount - width}px, ${stepHeight * imagesLoadedCount}px)`});
	// $(preloaderImg)
	// .css({transform: `translate(${stepWidth * imagesLoadedCount + width / 2}px, ${helpers.winHeight}px`});

	if (imagesLoadedCount === 1) {
		// console.log(height);
		// console.log(width);
		// $(preloaderImg).css(
		// {transform: `translate(${stepWidth * imagesLoadedCount + width}px, ${stepHeight * imagesLoadedCount}px)`});
		// $(preloaderImg).css({transform: `translate(${stepWidth * imagesLoadedCount + width / 2}px, 0px`});
	}

	// Check and stop when all images was loaded
	if (imagesLoadedCount >= imagesTotalCount) {
		// Set delay before show content on page
		setTimeout(() => {
			// Add hide class to preloader if dont contains
			if (!preloader.classList.contains('preloader-style__loader__done')) {
				preloader.classList.add('preloader-style__loader__done');
			}
		}, 500);
	}
}

// Error function
// function imageNone(errorImage) {
// Create error image path
// let badWay = 'http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png';
// Assing new path to error image
// errorImage.src = badWay;
// Run counter and showing loader progress againe
// imageLoader();
// }

// Сycle start
for (let image of imagesAll) {
	// i++;
	// console.log();
	const imageClone = new Image();
	// Assign the origin image path to new image
	// const startTime = new Date();
	imageClone.src = image.src;
	// Start Listener on load
	imageClone.addEventListener('load', () => {
		// const endTime = new Date();
		// const elapsed = endTime.getTime() - startTime.getTime();
		imageLoader();
		// console.log(elapsed);

		// setTimeout(() => {

		// }, 2000);
	});
	// Start Listener on erroe
	// imageClone.addEventListener('error', () => {
	// 	// Run function on error and give image
	// 	imageNone(image);
	// });
}
