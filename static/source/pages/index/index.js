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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('#menu-toggle').click(function () {
  $(this).toggleClass('open');
  $('.scroll_menu').toggleClass('scroll_menu_active');
  $('body').toggleClass('body_active');
  $('.nav_menu__block').toggleClass('nav_menu__block_active');

  if ($('.logo__wrap').hasClass('logo_wrap_active')) {
    $('.logo__wrap').removeClass('logo_wrap_active');
    $('.logo__wrap').addClass('logo_wrap_native');
  } else {
    $('.logo__wrap').addClass('logo_wrap_active');
    $('.logo__wrap').removeClass('logo_wrap_native');
  }
}); // $(".hamburger").on('click', function(e) {
//     if($('.hamburger').hasClass('is-active')){    
//         $('.hamburger').removeClass('is-active');
//         $('.header__menu').removeClass('header__menu-active');
//         // $('.header__menu').removeClass('responsive__box-active');
//         $('body').removeClass('body-active');
//     }else{
//         $('.hamburger').addClass('is-active');
//         $('.header__menu').addClass('header__menu-active');
//         // $('.bg-page').addClass(' bg-page-active');
//         $('body').addClass(' body-active');
//     }
// });

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.btn-lean_more').on('mouseenter', function () {
  $(this).addClass('is-focus-over');
  $(this).removeClass('is-focus-out');
});
$('.btn-lean_more').on('mouseleave', function () {
  $(this).addClass('is-focus-out');
  $(this).removeClass('is-focus-over');
});

/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/form_errors/index.js":
/*!*************************************************!*\
  !*** ../components/module/form_errors/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/module/form_errors/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  Onload();
});
/**
 * valide_form - Валідація форм
 * @param {selector form} ID Форми на яку підвішують валідацію
 * @param {class name} class групи куди виводять помилки
 * @param {bull} true Чи виводи вспливайку пісял відповіді ajax
 *
 **/

function Onload() {
  valide_form('#brief_st', '.input', false);
  valide_form('#contacts', '.input', true);
  valide_form('#feedback_smal', '.input', true);
  valide_form('#contacts', '.input', true);
  valide_form('#contact_seo', '.input', true);
}

function location_leng() {
  return location.pathname.split('/')[1];
}

function valide_form(id_form, append_error_box, check_request) {
  var check_request = check_request;

  if ($(id_form).length > 0) {
    var lang_site;
    var errore_text = {};
    lang_site = location_leng();
    console.log(id_form);

    switch (lang_site) {
      case 'uk':
        errore_text.required = 'Поле обов\'язково для заповнення';
        errore_text.email = 'Поле має містити email';
        errore_text.rating = 'Оцінка товару є обов\'язкова';
        break;

      case 'ru':
        errore_text.required = 'Поле обязательно для заполнения';
        errore_text.email = 'Поле должно содержать email';
        errore_text.rating = 'Оценка товара является обязательная';
        break;

      case 'en':
        errore_text.required = 'The field is required';
        errore_text.email = 'The field must contain an email';
        errore_text.rating = 'Evaluation of the goods is required';
        break;

      default:
        errore_text.required = 'Поле обов\'язково для заповнення';
        errore_text.email = 'Поле має містити email';
        errore_text.rating = 'Оцінка товару є обов\'язкова';
    }

    $(id_form).validate({
      errorPlacement: function errorPlacement(event, validator) {
        $(validator).parents(append_error_box).append($(event));
        $(validator).parents(append_error_box).addClass('is-error');
      },
      ignore: "not:hidden.product_rating",
      rules: {
        name: {
          required: true
        },
        username: {
          required: true
        },
        password: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        user_last_name: {
          required: true
        },
        product_rating: {
          required: true
        },
        payment: {
          required: true
        },
        phone: {
          required: true
        },
        address: {
          required: true
        },
        pass: {
          required: true
        },
        repeat_pass: {
          required: true
        },
        text: {
          required: true
        }
      },
      messages: {
        username: {
          required: errore_text.required
        },
        password: {
          required: errore_text.required
        },
        name: {
          required: errore_text.required,
          email: errore_text.email
        },
        email: {
          required: errore_text.required,
          email: errore_text.email
        },
        user_last_name: {
          required: errore_text.required
        },
        payment: {
          required: errore_text.required
        },
        product_rating: {
          required: errore_text.rating
        },
        phone: {
          required: errore_text.required
        },
        address: {
          required: errore_text.required
        },
        pass: {
          required: errore_text.required
        },
        repeat_pass: {
          required: errore_text.required
        },
        text: {
          required: errore_text.required
        }
      },
      submitHandler: function submitHandler(form) {
        event.preventDefault();
        var data = formSerialize({
          'form': form
        }); // send_form({'form': form,'data':data});

        var all_form_input = form.querySelectorAll('input'); // const all_form_textaria = form.querySelectorAll('textarea');

        for (var key in all_form_input) {
          if (all_form_input.hasOwnProperty(key)) {
            var element = all_form_input[key];
            console.log(element.type);
          }
        }

        function send_form(params) {
          var form = params.form;
          var form_data = params.data;
          var url_form = form.action;
          var form_json = {};

          if (url_form != '') {
            $('.loader_all').addClass('loader_all-active');
            var loader = '<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
            document.getElementById('loader_all__wrap').innerHTML = loader;
            fetch(url_form, {
              method: 'POST',
              body: form_data
            }).then(function (data) {
              return data.json();
            }).then(function (data) {
              $('.loader_all').removeClass('loader_all-active');

              if (data.status == 'OK' && typeof data['status'] !== "undefined") {
                if (typeof data['redirect_url'] !== "undefined" && data.redirect_url != '') {
                  clear_input();
                  location.href = data.redirect_url;
                } else {// sayHi();
                }
              }
            });
          } else {
            console.error("URL Form is #".concat(params.form.id, " not fond "));
          }
        }

        function clear_input() {
          var TYPE_INPUT = {
            TEXT: 'text',
            EMAIL: 'email',
            CHECKBOX: 'checkbox',
            HIDDEN: 'hidden',
            TEL: 'tel',
            FILE: 'file'
          };
          var all_form_input = form.querySelectorAll('input');
          var all_form_textaria = form.querySelectorAll('textarea');

          for (var _key in all_form_textaria) {
            if (all_form_textaria.hasOwnProperty(_key)) {
              var _element = all_form_textaria[_key];
              _element.value = '';
            }
          }

          for (var _key2 in all_form_input) {
            if (all_form_input.hasOwnProperty(_key2)) {
              var _element2 = all_form_input[_key2];
              console.log(_element2);

              switch (_element2.type) {
                case TYPE_INPUT.TEXT:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.EMAIL:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.TEL:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.HIDDEN:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.FILE:
                  _element2.value = '';
                  break;

                case TYPE_INPUT.CHECKBOX:
                  $(_element2).prop("checked", false);
                  break;
              }
            }
          }
        }

        function formSerialize(params) {
          var form = params.form;
          var serialize = $(form).serializeArray();
          var data = {};
          data['inputs'] = [], data['item_category_ids'] = [], data['item_ids'] = [], data['inputs'] = [];
          var inputs_other = form.querySelectorAll('input[name=other]');
          Array.apply(null, inputs_other).map(function (item) {
            var categories_input = $(item).parents('.form_container__main').find('.form_box__header-input');
            data['inputs'].push({
              'item_category_id': categories_input[0].name,
              'text': item.value
            });
          });
          $(serialize).each(function (index, input) {
            if (input.value == 'category') {
              data['item_category_ids'].push(input.name);
            } else if (input.value == 'item') {
              data['item_ids'].push(input.name);
            } else {
              data[input.name] = input.value;
            }
          });
          var file_logo__life = form.querySelectorAll('#file_logo__life')[0];
          var Formdata = new FormData();

          if (file_logo__life != undefined) {
            if (file_logo__life.files[0] !== undefined) {
              Formdata.append('logo', file_logo__life.files[0]);
            }
          }

          Formdata.append('data', JSON.stringify(data));
          return Formdata;
        }
      }
    });
  }
}

/***/ }),

/***/ "../components/module/form_errors/index.scss":
/*!***************************************************!*\
  !*** ../components/module/form_errors/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/index.js":
/*!******************************************!*\
  !*** ../components/pages/index/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

var slickFinder1 = $('.bike_trailer__block').length;

if (slickFinder1 >= 1) {
  $('.bike_trailer__block').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    prevArrow: '<div class="slick-first"><</div>',
    nextArrow: '<div class="slick-second">></div>',
    lazyLoad: "ondemand"
  });
  $('.slick-first').click(function () {
    $(".bike_trailer__block").slick('slickPrev');
  });
  $('.slick-second').click(function () {
    $(".bike_trailer__block").slick('slickNext');
  });
}

/***/ }),

/***/ "../components/pages/index/index.scss":
/*!********************************************!*\
  !*** ../components/pages/index/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/interface/button */ "../components/interface/button/index.js");
/* harmony import */ var _components_module_form_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/module/form_errors */ "../components/module/form_errors/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/pages/index/index */ "../components/pages/index/index.js");
// script interface


 // script common elements

 // script pages




/***/ })

/******/ });
//# sourceMappingURL=index.js.map