import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import	'./vendor/jquery.sticky';
import './components/scroll-man';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import backToTop from './modules/backToTop';
import './modules/preloader';
import resize from './modules/resize';
import locomotive from './modules/locomotive';
import progress from './components/progress';

ieFix();

vhFix();
actualYear();
scrollToAnchor.init();

header.init();
header.makeStickyHeader();
lazyLoading.init();
backToTop.init();
progress();
resize();
locomotive.initLocomotive();
