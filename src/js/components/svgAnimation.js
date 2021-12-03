import Vivus from 'vivus';
const elem = $('#back-to-top');
let toTop;

if (elem.length > 0) {
	toTop = new Vivus('back-to-top', {duration: 200});
}

export default toTop;
