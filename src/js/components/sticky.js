const getStickyBlock = () => {
	const manElem = $('.man');

	if (manElem.length > 0) {
		manElem.sticky({topSpacing: 100});
	}
};

export default getStickyBlock;
