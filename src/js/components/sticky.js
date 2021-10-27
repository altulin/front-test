import helpers from '../helpers';

const getStickyBlock = () => {
	const manElem = $('.man');
	const deviceWidth = 1024;

	if (manElem.length > 0 && helpers.winWidth > deviceWidth) {
		manElem.sticky(
			{
				topSpacing: 100,
				wrapperClassName: 'standing__sticky-wrapper',
			},
		);
	}
};

export default getStickyBlock;
