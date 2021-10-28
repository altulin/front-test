import './vendor';
import './helpers';
import './components/social';
// import makeScroll from './components/scroll-man';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import	'./vendor/jquery.sticky';
import getStickyBlock from './components/sticky';
import './components/scroll-man';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import backToTop from './modules/backToTop';
import makePreload from './modules/preload';

makePreload();

ieFix();

vhFix();
actualYear();
scrollToAnchor.init();

header.init();
header.makeStickyHeader();
lazyLoading.init();
// makeScroll();
backToTop.init();
getStickyBlock();
