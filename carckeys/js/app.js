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

	var _carousel = __webpack_require__(3);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _scrollbar = __webpack_require__(4);

	var _scrollbar2 = _interopRequireDefault(_scrollbar);

	var _maskedinput = __webpack_require__(5);

	var _maskedinput2 = _interopRequireDefault(_maskedinput);

	var _openclose = __webpack_require__(6);

	var _openclose2 = _interopRequireDefault(_openclose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _markupMenu.markupMenu)(window.document);

	$(function () {
	  (0, _carousel2.default)();
	  (0, _scrollbar2.default)();
	  (0, _maskedinput2.default)();
	  (0, _openclose2.default)();
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
	var carousel = function carousel(node) {
	    $('.slider-big').slick({
	        dots: true,
	        arrows: false,
	        swipeToSlide: true
	    });
	    $('.slider-mini').slick({
	        slidesToShow: 5,
	        initialSlide: 2,
	        slidesToScroll: 1,
	        swipeToSlide: true,
	        responsive: [{
	            breakpoint: 845,
	            settings: {
	                slidesToShow: 4
	            }
	        }, {
	            breakpoint: 664,
	            settings: {
	                slidesToShow: 3
	            }
	        }, {
	            breakpoint: 505,
	            settings: {
	                slidesToShow: 2
	            }
	        }, {
	            breakpoint: 375,
	            settings: {
	                slidesToShow: 1
	            }
	        }]
	    });
	    $('.slider-block').slick({
	        slidesToShow: 4,
	        swipeToSlide: true,
	        responsive: [{
	            breakpoint: 1149,
	            settings: {
	                slidesToShow: 3
	            }
	        }, {
	            breakpoint: 988,
	            settings: {
	                slidesToShow: 2
	            }
	        }, {
	            breakpoint: 569,
	            settings: {
	                slidesToShow: 1
	            }
	        }, {
	            breakpoint: 399,
	            settings: {
	                slidesToShow: 1,
	                arrows: false,
	                dots: true
	            }
	        }]
	    });
	    $('.slider-category').slick({
	        slidesToShow: 6,
	        swipeToSlide: true,
	        responsive: [{
	            breakpoint: 1218,
	            settings: {
	                slidesToShow: 5
	            }
	        }, {
	            breakpoint: 1024,
	            settings: {
	                slidesToShow: 4
	            }
	        }, {
	            breakpoint: 840,
	            settings: {
	                slidesToShow: 3
	            }
	        }, {
	            breakpoint: 656,
	            settings: {
	                slidesToShow: 2
	            }
	        }, {
	            breakpoint: 472,
	            settings: {
	                slidesToShow: 1,
	                arrows: false,
	                dots: true
	            }
	        }]
	    });
	};
	exports.default = carousel;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var scrollbar = function scrollbar(node) {
	    $('.content-text').mCustomScrollbar();
	};
	exports.default = scrollbar;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var maskedinput = function maskedinput(node) {
	    $('input[type="tel"]').mask('+38 (099) 999-99-99');
	};
	exports.default = maskedinput;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var openclose = function openclose(node) {

	    /* Обратный звонок */
	    $('.feedback-call-btn').click(function () {
	        $('.popup-overlay').addClass('active');
	        setTimeout("$('.popup-holder').find('input').eq(0).focus();", 100);
	    });
	    $('.popup-overlay, .close-popup').click(function () {
	        $('.popup-overlay').removeClass('active');
	    });
	    $('.popup-holder').click(function (e) {
	        e.stopPropagation();
	    });

	    /* Вертикальное меню */
	    if ($(window).width() <= 1179) {
	        $('.menu-link').bind('click', function () {
	            $('.menu-holder').toggleClass('active');
	            $('.nav-menu-holder').removeClass('active');
	            $('.hamburger').removeClass('active');
	        });
	    }
	    $(window).resize(function () {
	        if ($(window).width() <= 1179) {
	            $('.menu-link').bind('click', function () {
	                $('.menu-holder').toggleClass('active');
	                $('.nav-menu-holder').removeClass('active');
	                $('.hamburger').removeClass('active');
	            });
	        }
	    });
	    if ($(window).width() > 1179) {
	        $('.menu-holder').removeClass('active');
	        $('.menu-link').unbind('click');
	    }
	    $(window).resize(function () {
	        if ($(window).width() > 1179) {
	            $('.menu-holder').removeClass('active');
	            $('.menu-link').unbind('click');
	        }
	    });

	    /* Навигационное меню */
	    $('.hamburger').click(function () {
	        $('.nav-menu-holder').toggleClass('active');
	        $('.hamburger').toggleClass('active');
	        $('.menu-holder').removeClass('active');
	    });
	    if ($(window).width() > 676) {
	        $('.nav-menu-holder').removeClass('active');
	        $('.hamburger').removeClass('active');
	    }
	    $(window).resize(function () {
	        if ($(window).width() > 676) {
	            $('.nav-menu-holder').removeClass('active');
	            $('.hamburger').removeClass('active');
	        }
	    });
	};
	exports.default = openclose;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map