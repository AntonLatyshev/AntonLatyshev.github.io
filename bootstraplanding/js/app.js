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

	'use strict';

	var _markupMenu = __webpack_require__(1);

	var _video = __webpack_require__(3);

	var _video2 = _interopRequireDefault(_video);

	var _team = __webpack_require__(4);

	var _team2 = _interopRequireDefault(_team);

	var _header = __webpack_require__(5);

	var _header2 = _interopRequireDefault(_header);

	var _anchor = __webpack_require__(6);

	var _anchor2 = _interopRequireDefault(_anchor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _markupMenu.markupMenu)(window.document);


	$(function () {
	  (0, _video2.default)();
	  (0, _team2.default)();
	  (0, _header2.default)();
	  (0, _anchor2.default)();
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
	var video = function video() {

	  $('.header__video-btn').on('click', function () {
	    $('.header__video-overlay').addClass('active');
	  });
	};
	exports.default = video;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var team = function team() {

	  $('.team__min-copy').on('click', function () {

	    var $this = $(this),
	        name = $this.find('.team__photo-min__name span').html(),
	        text = $this.find('.team__description__text').html(),
	        social = $this.find('.team__description__social').html(),
	        image = $this.find('img').attr('src');

	    $('.team__min-copy').removeClass('active');
	    $this.addClass('active');
	    $('.team__name').html(name);
	    $('.team__info').html(text);
	    $('.team__social').html(social);
	    $('.team__photo-big img').attr('src', image);
	  });
	};
	exports.default = team;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var header = function header() {

	  $(window).scroll(function () {
	    $('.header').removeClass('sticky');
	    if ($(this).scrollTop() > 30) {
	      $('.header').addClass('sticky');
	    } else {
	      $('.header').removeClass('sticky');
	    }
	  });
	};
	exports.default = header;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var anchor = function anchor() {

		$(".nav.navbar-nav").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
			    top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 1500);
		});
	};
	exports.default = anchor;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map