!function n(s,i,r){function u(t,e){if(!i[t]){if(!s[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(d)return d(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=i[t]={exports:{}},s[t][0].call(o.exports,function(e){return u(s[t][1][e]||e)},o,o.exports,n,s,i,r)}return i[t].exports}for(var d="function"==typeof require&&require,e=0;e<r.length;e++)u(r[e]);return u}({1:[function(e,t,o){"use strict";var n=l(e("./modules/sliders")),s=l(e("./modules/popup")),i=l(e("./modules/survey")),r=l(e("./modules/responsive")),u=l(e("./modules/toggle-mobile-menu")),d=l(e("./modules/load-more"));function l(e){return e&&e.__esModule?e:{default:e}}function a(){$(this).hasClass("active")||($(this).siblings().each(function(e,t){$(t).removeClass("active")}),$(this).addClass("active"))}$(function(){(0,n.default)(),(0,s.default)(),(0,r.default)(),$(window).resize(function(){(0,r.default)()}),(0,u.default)(),$("[data-fancybox]").fancybox({}),$(".item__label").on("click",a);var e=$("[data-survey-item]"),e=new i.default(e);e.enableMoveOn(),e.enableMoveBackw(),e.displayCurrentQuestion(),e.blockSubmit(),e.submitForm(),(0,d.default)(),(new WOW).init()})},{"./modules/load-more":2,"./modules/popup":3,"./modules/responsive":4,"./modules/sliders":5,"./modules/survey":6,"./modules/toggle-mobile-menu":7}],2:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(){$(".catalog__item").slice(0,4).show(),$(".catalog__item").slice(4,8).hide(),$("[data-show-more]").on("click",function(e){e.preventDefault(),$(".catalog__item:hidden").slice(0,4).slideDown(),0==$(".catalog__item:hidden").length&&$("[data-show-more]").fadeOut("slow")})}},{}],3:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n,s=(n=e("./validate"))&&n.__esModule?n:{default:n};o.default=function(){$("[data-callback]").on("click",function(){$("[data-popup-form]").addClass("shown"),$("body").css("padding-right",window.innerWidth-document.body.clientWidth),$(".header").css("padding-right",window.innerWidth-document.body.clientWidth),$("body").addClass("lock")}),$(document).on("keydown",function(e){"Escape"===e.key&&($("[data-popup]").removeClass("shown"),$("body").removeClass("lock"),$("body").css("padding-right",0),$(".header").css("padding-right",0))}),$("[data-submit]").on("click",function(e){e.preventDefault(),(0,s.default)($("#popup-form")),$("#popup-form").valid()&&($("[data-popup-form]").removeClass("shown"),$("[data-popup-message]").addClass("shown"))}),$("[data-form-submit]").on("click",function(){(0,s.default)($("#discuss-form")),$("#discuss-form").valid()&&$("[data-popup-message]").addClass("shown")}),$("[data-close]").on("click",function(){$("[data-popup]").removeClass("shown"),$("body").removeClass("lock"),$("body").css("padding-right",0),$(".header").css("padding-right",0)})}},{"./validate":8}],4:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,o.default=function(){$(window).outerWidth()<769&&$(".menu").appendTo(".mob-menu__body")}},{}],5:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,o.default=function(){$(".portfolio__slider").slick({slidesToShow:2,slidesToScroll:2,infinite:!1,prevArrow:'<button type="button" class="slick-btn slick-prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12.5H5" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L5 12.5L12 19.5" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',nextArrow:'<button type="button" class="slick-btn slick-next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5H19" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L19 12.5L12 19.5" stroke="#373737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',responsive:[{breakpoint:610,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".reviews__slider").slick({slidesToShow:4,slidesToScroll:1,infinite:!1,prevArrow:'<button type="button" class="slick-btn slick-prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12.5H5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L5 12.5L12 19.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',nextArrow:'<button type="button" class="slick-btn slick-next"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5H19" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5.5L19 12.5L12 19.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',responsive:[{breakpoint:993,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:741,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:441,settings:{slidesToShow:1,slidesToScroll:1}}]})}},{}],6:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n,s=(n=e("./validate"))&&n.__esModule?n:{default:n};function i(e){this.items=e,this.currentQuestion=0,this.totalQuestions=this.items.length,this.isSomethingChosen=!1,this.currentQuestionInputs=[],this.btnNext=$('[data-next]:not([type="submit"])'),this.btnPrev=$("[data-prev]")}i.prototype.blockSubmit=function(){$('[data-next]:not([type="submit"])').on("click",function(e){return e.preventDefault()}),$("[data-prev]").on("click",function(e){return e.preventDefault()})},i.prototype.enableMoveOn=function(){var t=this;this.btnNext.on("click",function(){t.currentQuestionInputs=$(t.items[t.currentQuestion]).find("input[required]"),t.currentQuestionInputs.each(function(e){$(t.currentQuestionInputs[e]).prop("checked")&&(t.isSomethingChosen=!0)}),t.isSomethingChosen&&(t.currentQuestion+=1,t.isSomethingChosen=!1,t.displayCurrentQuestion())})},i.prototype.enableMoveBackw=function(){var e=this;this.btnPrev.on("click",function(){--e.currentQuestion,e.displayCurrentQuestion()})},i.prototype.displayCurrentQuestion=function(){var t=this;this.items.each(function(e){return $(t.items[e]).removeClass("shown")}),$(this.items[this.currentQuestion]).addClass("shown")},i.prototype.submitForm=function(){var e=this;$('[data-next][type="submit"]').on("click",function(){(0,s.default)($("[data-survey-form]")),$("[data-survey-form]").valid()&&(e.currentQuestion+=1,e.isSomethingChosen=!1,e.displayCurrentQuestion())})},o.default=i},{"./validate":8}],7:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,o.default=function(){$(".menu-btn").on("click",function(){$(".mob-menu").addClass("opened"),setTimeout(function(){$(".mob-menu__body").addClass("opened")},200),$("body").addClass("lock")}),$(".mob-menu__close").on("click",function(){$(".mob-menu__body").removeClass("opened"),setTimeout(function(){$(".mob-menu").removeClass("opened")},200),$("body").removeClass("lock")})}},{}],8:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,jQuery.validator.addMethod("isPhone",function(e,t){return this.optional(t)||/^[0-9-()+]{11,30}/.test(e)},"Please, enter the correct phone number"),jQuery.validator.addMethod("isName",function(e,t){return this.optional(t)||/^[А-ЯЁа-яёA-Za-z]{1,40}$/.test(e)}),o.default=function(e){$(e).validate({rules:{name:{isName:!0},phone:{required:!0,isPhone:!0}},messages:{name:{required:"Enter your name",isName:"Please, enter the correct name"},phone:{required:"Enter your phone number",isPhone:"Please, enter the correct phone number"},isAgree:{required:"Please, fill this field"},messenger:{required:"Please, fill this field"}}})}},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
