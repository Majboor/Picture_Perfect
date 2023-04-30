/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3M/ZjRkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL2Fzc2V0cy9jc3MvYXBwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/css/app.css\n");

/***/ }),

/***/ "./public/js/ll-before-after-gallery-public.js":
/*!*****************************************************!*\
  !*** ./public/js/ll-before-after-gallery-public.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  'use strict';\n\n  $('.slider-for').slick({\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    draggable: false,\n    asNavFor: '.slider-nav',\n    arrows: false\n  });\n  $('.slider-nav').slick({\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    asNavFor: '.slider-for',\n    vertical: true,\n    arrows: true,\n    draggable: false,\n    focusOnSelect: true,\n    nextArrow: '<div class=\"next\"></div>',\n    prevArrow: '<div class=\"hidden\"></div>',\n    responsive: [{\n      breakpoint: 768,\n      settings: {\n        vertical: false,\n        arrows: false,\n        draggable: true,\n        centerMode: true,\n        slidesToShow: 2\n      }\n    }]\n  });\n  $('.slider').on('input change', function (e) {\n    var sliderPosition = e.target.value; // Update the width of the foreground image\n\n    $('.foreground').css('width', \"calc(\".concat(sliderPosition, \"% - 4px)\")); // Update the position of the slider button\n\n    $('.slider-button').css('left', \"calc(\".concat(sliderPosition, \"% - 36px)\"));\n  });\n  $('.bag_gallery-image').on('click', function () {\n    // Reset the width of the foreground image\n    $('.foreground').css('width', \"calc(50% - 4px)\"); // Reset the position of the slider button\n\n    $('.slider-button').css('left', \"calc(50% - 36px)\"); // Reset the position of the slider bar\n\n    $('.slider').val('50');\n  });\n  $('.bag_filter-menu-wrapper').on({\n    mouseenter: function mouseenter() {\n      $(this).addClass('bag_active');\n    },\n    mouseleave: function mouseleave() {\n      $(this).removeClass('bag_active');\n    }\n  });\n  $('.bag_mobile-filter-toggle').on('click', function () {\n    $('.bag_mobile-filter').toggleClass('bag_active');\n  });\n  $('.bag_mobile-filter-exit').on('click', function () {\n    $('.bag_mobile-filter').toggleClass('bag_active');\n  });\n  $('.bag_init-popup').magnificPopup({\n    disableOn: 700,\n    type: 'iframe',\n    mainClass: 'mfp-fade',\n    removalDelay: 160,\n    preloader: false,\n    fixedContentPos: false\n  });\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbGwtYmVmb3JlLWFmdGVyLWdhbGxlcnktcHVibGljLmpzP2RhYmMiXSwibmFtZXMiOlsiJCIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJmYWRlIiwiZHJhZ2dhYmxlIiwiYXNOYXZGb3IiLCJhcnJvd3MiLCJ2ZXJ0aWNhbCIsImZvY3VzT25TZWxlY3QiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2VudGVyTW9kZSIsIm9uIiwiZSIsInNsaWRlclBvc2l0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJjc3MiLCJ2YWwiLCJtb3VzZWVudGVyIiwiYWRkQ2xhc3MiLCJtb3VzZWxlYXZlIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsIm1hZ25pZmljUG9wdXAiLCJkaXNhYmxlT24iLCJ0eXBlIiwibWFpbkNsYXNzIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiZml4ZWRDb250ZW50UG9zIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFFLFVBQVVBLENBQVYsRUFBYztBQUNkOztBQUNBQSxHQUFDLENBQUUsYUFBRixDQUFELENBQW1CQyxLQUFuQixDQUEwQjtBQUN4QkMsZ0JBQVksRUFBRSxDQURVO0FBRXhCQyxrQkFBYyxFQUFFLENBRlE7QUFHeEJDLFFBQUksRUFBRSxJQUhrQjtBQUl4QkMsYUFBUyxFQUFFLEtBSmE7QUFLeEJDLFlBQVEsRUFBRSxhQUxjO0FBTXhCQyxVQUFNLEVBQUU7QUFOZ0IsR0FBMUI7QUFRQVAsR0FBQyxDQUFFLGFBQUYsQ0FBRCxDQUFtQkMsS0FBbkIsQ0FBMEI7QUFDeEJDLGdCQUFZLEVBQUUsQ0FEVTtBQUV4QkMsa0JBQWMsRUFBRSxDQUZRO0FBR3hCRyxZQUFRLEVBQUUsYUFIYztBQUl4QkUsWUFBUSxFQUFFLElBSmM7QUFLeEJELFVBQU0sRUFBRSxJQUxnQjtBQU14QkYsYUFBUyxFQUFFLEtBTmE7QUFPeEJJLGlCQUFhLEVBQUUsSUFQUztBQVF4QkMsYUFBUyxFQUFFLDBCQVJhO0FBU3hCQyxhQUFTLEVBQUUsNEJBVGE7QUFVeEJDLGNBQVUsRUFBRSxDQUNWO0FBQ0VDLGdCQUFVLEVBQUUsR0FEZDtBQUVFQyxjQUFRLEVBQUU7QUFDUk4sZ0JBQVEsRUFBRSxLQURGO0FBRVJELGNBQU0sRUFBRSxLQUZBO0FBR1JGLGlCQUFTLEVBQUUsSUFISDtBQUlSVSxrQkFBVSxFQUFFLElBSko7QUFLUmIsb0JBQVksRUFBRTtBQUxOO0FBRlosS0FEVTtBQVZZLEdBQTFCO0FBd0JBRixHQUFDLENBQUUsU0FBRixDQUFELENBQWVnQixFQUFmLENBQW1CLGNBQW5CLEVBQW1DLFVBQUVDLENBQUYsRUFBTztBQUN4QyxRQUFNQyxjQUFjLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFoQyxDQUR3QyxDQUV4Qzs7QUFDQXBCLEtBQUMsQ0FBRSxhQUFGLENBQUQsQ0FBbUJxQixHQUFuQixDQUF3QixPQUF4QixpQkFBeUNILGNBQXpDLGVBSHdDLENBSXhDOztBQUNBbEIsS0FBQyxDQUFFLGdCQUFGLENBQUQsQ0FBc0JxQixHQUF0QixDQUEyQixNQUEzQixpQkFBMkNILGNBQTNDO0FBQ0QsR0FORDtBQU9BbEIsR0FBQyxDQUFFLG9CQUFGLENBQUQsQ0FBMEJnQixFQUExQixDQUE4QixPQUE5QixFQUF1QyxZQUFXO0FBQ2hEO0FBQ0FoQixLQUFDLENBQUUsYUFBRixDQUFELENBQW1CcUIsR0FBbkIsQ0FBd0IsT0FBeEIscUJBRmdELENBR2hEOztBQUNBckIsS0FBQyxDQUFFLGdCQUFGLENBQUQsQ0FBc0JxQixHQUF0QixDQUEyQixNQUEzQixzQkFKZ0QsQ0FLaEQ7O0FBQ0FyQixLQUFDLENBQUUsU0FBRixDQUFELENBQWVzQixHQUFmLENBQW9CLElBQXBCO0FBQ0QsR0FQRDtBQVFBdEIsR0FBQyxDQUFFLDBCQUFGLENBQUQsQ0FBZ0NnQixFQUFoQyxDQUFvQztBQUNsQ08sY0FBVSxFQUFFLHNCQUFXO0FBQ3JCdkIsT0FBQyxDQUFFLElBQUYsQ0FBRCxDQUFVd0IsUUFBVixDQUFvQixZQUFwQjtBQUNELEtBSGlDO0FBSWxDQyxjQUFVLEVBQUUsc0JBQVc7QUFDckJ6QixPQUFDLENBQUUsSUFBRixDQUFELENBQVUwQixXQUFWLENBQXVCLFlBQXZCO0FBQ0Q7QUFOaUMsR0FBcEM7QUFRQTFCLEdBQUMsQ0FBRSwyQkFBRixDQUFELENBQWlDZ0IsRUFBakMsQ0FBcUMsT0FBckMsRUFBOEMsWUFBVztBQUN2RGhCLEtBQUMsQ0FBRSxvQkFBRixDQUFELENBQTBCMkIsV0FBMUIsQ0FBdUMsWUFBdkM7QUFDRCxHQUZEO0FBR0EzQixHQUFDLENBQUUseUJBQUYsQ0FBRCxDQUErQmdCLEVBQS9CLENBQW1DLE9BQW5DLEVBQTRDLFlBQVc7QUFDckRoQixLQUFDLENBQUUsb0JBQUYsQ0FBRCxDQUEwQjJCLFdBQTFCLENBQXVDLFlBQXZDO0FBQ0QsR0FGRDtBQUdBM0IsR0FBQyxDQUFFLGlCQUFGLENBQUQsQ0FBdUI0QixhQUF2QixDQUFzQztBQUNwQ0MsYUFBUyxFQUFFLEdBRHlCO0FBRXBDQyxRQUFJLEVBQUUsUUFGOEI7QUFHcENDLGFBQVMsRUFBRSxVQUh5QjtBQUlwQ0MsZ0JBQVksRUFBRSxHQUpzQjtBQUtwQ0MsYUFBUyxFQUFFLEtBTHlCO0FBTXBDQyxtQkFBZSxFQUFFO0FBTm1CLEdBQXRDO0FBUUQsQ0F2RUQsRUF1RUtDLE1BdkVMIiwiZmlsZSI6Ii4vcHVibGljL2pzL2xsLWJlZm9yZS1hZnRlci1nYWxsZXJ5LXB1YmxpYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiggZnVuY3Rpb24oICQgKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgJCggJy5zbGlkZXItZm9yJyApLnNsaWNrKCB7XG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGZhZGU6IHRydWUsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICBhc05hdkZvcjogJy5zbGlkZXItbmF2JyxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICB9ICk7XG4gICQoICcuc2xpZGVyLW5hdicgKS5zbGljaygge1xuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhc05hdkZvcjogJy5zbGlkZXItZm9yJyxcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgIG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJuZXh0XCI+PC9kaXY+JyxcbiAgICBwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+JyxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0gKTtcblxuICAkKCAnLnNsaWRlcicgKS5vbiggJ2lucHV0IGNoYW5nZScsICggZSApPT57XG4gICAgY29uc3Qgc2xpZGVyUG9zaXRpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAvLyBVcGRhdGUgdGhlIHdpZHRoIG9mIHRoZSBmb3JlZ3JvdW5kIGltYWdlXG4gICAgJCggJy5mb3JlZ3JvdW5kJyApLmNzcyggJ3dpZHRoJywgYGNhbGMoJHtzbGlkZXJQb3NpdGlvbn0lIC0gNHB4KWAgKTtcbiAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBzbGlkZXIgYnV0dG9uXG4gICAgJCggJy5zbGlkZXItYnV0dG9uJyApLmNzcyggJ2xlZnQnLCBgY2FsYygke3NsaWRlclBvc2l0aW9ufSUgLSAzNnB4KWAgKTtcbiAgfSApO1xuICAkKCAnLmJhZ19nYWxsZXJ5LWltYWdlJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBSZXNldCB0aGUgd2lkdGggb2YgdGhlIGZvcmVncm91bmQgaW1hZ2VcbiAgICAkKCAnLmZvcmVncm91bmQnICkuY3NzKCAnd2lkdGgnLCBgY2FsYyg1MCUgLSA0cHgpYCApO1xuICAgIC8vIFJlc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2xpZGVyIGJ1dHRvblxuICAgICQoICcuc2xpZGVyLWJ1dHRvbicgKS5jc3MoICdsZWZ0JywgYGNhbGMoNTAlIC0gMzZweClgICk7XG4gICAgLy8gUmVzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzbGlkZXIgYmFyXG4gICAgJCggJy5zbGlkZXInICkudmFsKCAnNTAnICk7XG4gIH0gKTtcbiAgJCggJy5iYWdfZmlsdGVyLW1lbnUtd3JhcHBlcicgKS5vbigge1xuICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgJCggdGhpcyApLmFkZENsYXNzKCAnYmFnX2FjdGl2ZScgKTtcbiAgICB9LFxuICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgJCggdGhpcyApLnJlbW92ZUNsYXNzKCAnYmFnX2FjdGl2ZScgKTtcbiAgICB9LFxuICB9ICk7XG4gICQoICcuYmFnX21vYmlsZS1maWx0ZXItdG9nZ2xlJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCAnLmJhZ19tb2JpbGUtZmlsdGVyJyApLnRvZ2dsZUNsYXNzKCAnYmFnX2FjdGl2ZScgKTtcbiAgfSApO1xuICAkKCAnLmJhZ19tb2JpbGUtZmlsdGVyLWV4aXQnICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoICcuYmFnX21vYmlsZS1maWx0ZXInICkudG9nZ2xlQ2xhc3MoICdiYWdfYWN0aXZlJyApO1xuICB9ICk7XG4gICQoICcuYmFnX2luaXQtcG9wdXAnICkubWFnbmlmaWNQb3B1cCgge1xuICAgIGRpc2FibGVPbjogNzAwLFxuICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICByZW1vdmFsRGVsYXk6IDE2MCxcbiAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXG4gIH0gKTtcbn0gKSggalF1ZXJ5ICk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/js/ll-before-after-gallery-public.js\n");

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./public/js/ll-before-after-gallery-public.js ./assets/css/app.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/megan/Local Sites/pearlman/app/public/wp-content/plugins/ll-before-after-gallery/public/js/ll-before-after-gallery-public.js */"./public/js/ll-before-after-gallery-public.js");
module.exports = __webpack_require__(/*! /Users/megan/Local Sites/pearlman/app/public/wp-content/plugins/ll-before-after-gallery/assets/css/app.css */"./assets/css/app.css");


/***/ })

/******/ });