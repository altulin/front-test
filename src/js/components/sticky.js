import helpers from '../helpers';

const getStickyBlock = () => {
	const manElem = $('.man');
	const deviceWidth = 1024;
	const top = 100;
	const bottom = 950;
	// const scrollTop = window.pageYOffset;

	if (manElem.length > 0 && helpers.winWidth > deviceWidth) {
		manElem.sticky(
			{
				topSpacing: top,
				wrapperClassName: 'standing__sticky-wrapper',
				bottomSpacing: bottom,
			},
		);
	}
};

export default getStickyBlock;
