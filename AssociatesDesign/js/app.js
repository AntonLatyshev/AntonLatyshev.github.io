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
/***/ function(module, exports) {

	'use strict';

	$(function () {

	    var flag = true;
	    $('.cmn-toggle-switch').click(function () {
	        if (flag) {
	            flag = false;
	            func1.call(this);
	        } else {
	            flag = true;
	            func2.call(this);
	        }
	        return false;
	    });

	    function func1() {
	        $('.navigation').show();
	        $('.cmn-toggle-switch__htx').addClass("active");
	    }
	    function func2() {
	        $('.navigation').hide();
	        $('.cmn-toggle-switch__htx').removeClass("active");
	    }
	});

	$(document).ready(function () {
	    $('.click-fondue').click(function () {
	        $('.fondue-project').show();
	    });
	    $('.button-close-fondue').click(function () {
	        $('.fondue-project').hide();
	    });
	});

	$(document).ready(function () {
	    $('.click-potter').click(function () {
	        $('.potter-project').show();
	    });
	    $('.button-close-potter').click(function () {
	        $('.potter-project').hide();
	    });
	});

	$(document).ready(function () {
	    $('.click-louis').click(function () {
	        $('.louis-project').show();
	    });
	    $('.button-close-louis').click(function () {
	        $('.louis-project').hide();
	    });
	});

	$(document).ready(function () {
	    $('.click-armchairs').click(function () {
	        $('.armchairs-project').show();
	    });
	    $('.button-close-armchairs').click(function () {
	        $('.armchairs-project').hide();
	    });
	});

	$(document).ready(function () {
	    $('.click-tabano').click(function () {
	        $('.tabano-project').show();
	    });
	    $('.button-close-tabano').click(function () {
	        $('.tabano-project').hide();
	    });
	});

	$(document).ready(function () {
	    $('.click-fiji').click(function () {
	        $('.fiji-project').show();
	    });
	    $('.button-close-fiji').click(function () {
	        $('.fiji-project').hide();
	    });
	});

	$(document).ready(function () {
	    $('.click-sesann').click(function () {
	        $('.sesann-project').show();
	    });
	    $('.button-close-sesann').click(function () {
	        $('.sesann-project').hide();
	    });
	});

	$(document).ready(function () {
	    $('.click-alessi').click(function () {
	        $('.alessi-project').show();
	    });
	    $('.button-close-alessi').click(function () {
	        $('.alessi-project').hide();
	    });
	});

	$(document).ready(function () {
	    $('.project-slider').slick({
	        slidesToShow: 2
	    });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map