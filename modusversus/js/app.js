/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _markupMenu = __webpack_require__(1);

	var _header = __webpack_require__(3);

	var _header2 = _interopRequireDefault(_header);

	var _carousel = __webpack_require__(4);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _openclose = __webpack_require__(5);

	var _openclose2 = _interopRequireDefault(_openclose);

	var _mobilemenu = __webpack_require__(6);

	var _mobilemenu2 = _interopRequireDefault(_mobilemenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _markupMenu.markupMenu)(window.document);


	$(function () {
	  (0, _header2.default)();
	  (0, _carousel2.default)();
	  (0, _openclose2.default)();
	  (0, _mobilemenu2.default)();
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.markupMenu = markupMenu;

	var _files = __webpack_require__(2);

	var _files2 = _interopRequireDefault(_files);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function markupMenu(document) {
	  var nav = document.createElement('div');
	  var style = document.createElement('style');
	  var button = document.createElement('button');
	  var wrapper = document.createElement('div');
	  wrapper.appendChild(button);
	  wrapper.appendChild(nav);
	  wrapper.className = 'helper-nav-wrapper';
	  button.innerHTML = "Open pages list";
	  button.className = 'helper-nav-button';
	  nav.className = 'helper-nav';
	  style.innerHTML = '.helper-nav a:hover {\n      color:#fff;\n      background-color:#000;\n    }\n    .helper-nav a {\n      display:block;\n      color: #000;\n      padding: 3px;\n      margin:0\n    }\n    .helper-nav-button {\n      background: #000;\n      color: #fff;\n      padding: 5px;\n      font-weight: 300;\n      font-size: 12px;\n      border: none;\n      border-radius: 3px 0 0 0;\n      cursor: pointer;\n    }\n    .helper-nav-wrapper {\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      font-family: monospace;\n      z-index: 9999;\n      text-align: right;\n      font-size: 14px;\n    }\n    .helper-nav {\n      text-align: left;\n      background-color: #fff;\n      border: 1px solid #000;\n      padding: 3px;\n      boxShadow: 0 0 40px 0 rgba(0,0,0,.2);\n      max-height: 300px;\n      overflow-y: auto;\n    }\n    @media all and (max-width:1024px) {\n      .helper-nav {\n        height: 160px;\n        overflow-y: scroll;\n      }\n    }';
	  document.head.appendChild(style);
	  if (_files2.default[0] !== 'dev') {
	    console.warn('Art Lemon production');
	    return;
	  }
	  for (var i = 1; i < _files2.default.length; i++) {
	    nav.innerHTML += '<a href="/' + _files2.default[i] + '">' + i + '-' + _files2.default[i] + '</a>';
	  }
	  document.body.appendChild(wrapper);
	  var flag = localStorage.getItem('flag') ? JSON.parse(localStorage.getItem('flag')) : false;
	  var display = flag ? 'block' : 'none';
	  var btnText = flag ? 'Close pages list' : 'Open pages list';
	  nav.style.display = display;
	  button.innerHTML = btnText;

	  function toggleNav() {
	    if (flag) {
	      nav.style.display = 'none';
	      button.innerHTML = 'Open pages list';
	    } else {
	      nav.style.display = 'block';
	      button.innerHTML = 'Close pages list';
	    }
	    flag = !flag;
	    localStorage.setItem('flag', flag);
	  }
	  document.addEventListener('keyup', function (e) {
	    if (e.type === 'keyup' && e.ctrlKey && e.keyCode === 88) {
	      toggleNav();
	    }
	  });
	  button.addEventListener('click', toggleNav);
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ["dev", "index.html"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var header = function header() {

	  $('.header__search-open').on('click', function () {
	    $('.search').slideToggle();
	  });
	};
	exports.default = header;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var carousel = function carousel() {

	  $('.main-carousel').slick({
	    dots: true,
	    responsive: [{
	      breakpoint: 418,
	      settings: {
	        arrows: false
	      }
	    }]
	  });

	  $('.big-slider__box').slick({
	    slidesToShow: 3,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    speed: 1000,
	    swipeToSlide: true,
	    arrows: false,
	    centerMode: true,
	    centerPadding: "0px",
	    responsive: [{
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        autoplay: false,
	        centerMode: false,
	        dots: true
	      }
	    }]
	  });

	  $('.slider-bottom__box').slick({
	    slidesToShow: 6,
	    responsive: [{
	      breakpoint: 999,
	      settings: {
	        slidesToShow: 5
	      }
	    }, {
	      breakpoint: 849,
	      settings: {
	        slidesToShow: 4
	      }
	    }, {
	      breakpoint: 601,
	      settings: {
	        slidesToShow: 3
	      }
	    }, {
	      breakpoint: 470,
	      settings: {
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 360,
	      settings: {
	        slidesToShow: 1
	      }
	    }]
	  });
	};
	exports.default = carousel;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var openclose = function openclose() {

	  $('.services__btn').on('click', function () {
	    $('.services__text, .services__btn').toggleClass('active');
	  });
	};
	exports.default = openclose;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mobilemenu = function mobilemenu() {

	  $('.hamburger').on('click', function () {
	    $('.hamburger').toggleClass('active');
	    $('.menu__list').toggleClass('mobile');
	    $('.menu__link').removeClass('active');
	    $('.menu__insert').css('display', 'none');
	  });

	  $('.menu__link').on('click', function (e) {
	    e.preventDefault();

	    var $this = $(this),
	        item = $this.closest('.menu__item'),
	        list = $this.closest('.menu__list'),
	        links = list.find('.menu__link'),
	        items = list.find('.menu__item'),
	        content = item.find('.menu__insert'),
	        otherContent = list.find('.menu__insert'),
	        duration = 300;

	    if (!item.hasClass('active')) {
	      items.removeClass('active');
	      item.addClass('active');
	      links.removeClass('active');
	      $this.addClass('active');
	      otherContent.stop().slideUp(duration);
	      content.stop().slideDown(duration);
	    } else {
	      content.stop().slideUp(duration);
	      $this.removeClass('active');
	      item.removeClass('active');
	    }
	  });

	  $(window).on('load resize', function () {
	    if ($(window).width() < 768) {
	      $('.menu__list').appendTo('.header');
	    } else {
	      $('.menu__list').appendTo('.menu');
	    }

	    if ($(window).width() > 1024) {
	      $('.hamburger').removeClass('active');
	      $('.menu__list').removeClass('mobile');
	    }
	  });
	};
	exports.default = mobilemenu;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map