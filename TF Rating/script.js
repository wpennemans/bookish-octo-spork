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

/***/ "./node_modules/formbouncerjs/dist/bouncer.polyfills.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/formbouncerjs/dist/bouncer.polyfills.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! formbouncerjs v1.4.6 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/bouncer */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||(function(e){"use strict";if("Element"in e){var t="classList",r="prototype",n=e.Element[r],a=Object,i=String[r].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[r].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1},l=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},u=function(e,t){if(""===t)throw new l("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new l("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(e,t)},s=function(e){for(var t=i.call(e.getAttribute("class")||""),r=t?t.split(/\s+/):[],n=0,a=r.length;n<a;n++)this.push(r[n]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},c=s[r]=[],f=function(){return new s(this)};if(l[r]=Error[r],c.item=function(e){return this[e]||null},c.contains=function(e){return-1!==u(this,e+="")},c.add=function(){for(var e,t=arguments,r=0,n=t.length,a=!1;e=t[r]+"",-1===u(this,e)&&(this.push(e),a=!0),++r<n;);a&&this._updateClassName()},c.remove=function(){var e,t,r=arguments,n=0,a=r.length,i=!1;do{for(e=r[n]+"",t=u(this,e);-1!==t;)this.splice(t,1),i=!0,t=u(this,e)}while(++n<a);i&&this._updateClassName()},c.toggle=function(e,t){e+="";var r=this.contains(e),n=r?!0!==t&&"remove":!1!==t&&"add";return n&&this[n](e),!0===t||!1===t?t:!r},c.toString=function(){return this.join(" ")},a.defineProperty){var d={get:f,enumerable:!0,configurable:!0};try{a.defineProperty(n,t,d)}catch(e){void 0!==e.number&&-2146823252!==e.number||(d.enumerable=!1,a.defineProperty(n,t,d))}}else a[r].__defineGetter__&&n.__defineGetter__(t,f)}})(self),(function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var n=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var t,r=arguments.length;for(t=0;t<r;t++)e=arguments[t],n.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:r.call(this,e)}}e=null})()),Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null}),(function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}e.prototype=window.Event.prototype,window.CustomEvent=e})(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),(function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t(e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(a){"use strict";var u={fieldClass:"error",errorClass:"error-message",fieldPrefix:"bouncer-field_",errorPrefix:"bouncer-error_",patterns:{email:/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,url:/^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,number:/^(?:[-+]?[0-9]*[.,]?[0-9]+)$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,time:/^(?:(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]))$/,month:/^(?:(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])))$/},customValidations:{},messageAfterField:!0,messageCustom:"data-bouncer-message",messageTarget:"data-bouncer-target",messages:{missingValue:{checkbox:"This field is required.",radio:"Please select a value.",select:"Please select a value.","select-multiple":"Please select at least one value.",default:"Please fill out this field."},patternMismatch:{email:"Please enter a valid email address.",url:"Please enter a URL.",number:"Please enter a number",color:"Please match the following format: #rrggbb",date:"Please use the YYYY-MM-DD format",time:"Please use the 24-hour time format. Ex. 23:00",month:"Please use the YYYY-MM format",default:"Please match the requested format."},outOfRange:{over:"Please select a value that is no more than {max}.",under:"Please select a value that is no less than {min}."},wrongLength:{over:"Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.",under:"Please lengthen this text to {minLength} characters or more. You are currently using {length} characters."},fallback:"There was an error with this field."},disableSubmit:!1,emitEvents:!0},s=function(e,t){Array.prototype.forEach.call(e,t)},c=function(){var r={};return s(arguments,(function(e){for(var t in e){if(!e.hasOwnProperty(t))return;"[object Object]"===Object.prototype.toString.call(e[t])?r[t]=c(r[t],e[t]):r[t]=e[t]}})),r},f=function(e,t,r){if("function"==typeof a.CustomEvent){var n=new CustomEvent(t,{bubbles:!0,detail:r||{}});e.dispatchEvent(n)}},d=function(e,t){return{missingValue:(function(e){if(!e.hasAttribute("required"))return!1;if("checkbox"===e.type)return!e.checked;var t=e.value.length;return"radio"===e.type&&(t=Array.prototype.filter.call(e.form.querySelectorAll('[name="'+m(e.name)+'"]'),(function(e){return e.checked})).length),t<1})(e),patternMismatch:(r=e,n=t,a=r.getAttribute("pattern"),!(!(a=a?new RegExp("^(?:"+a+")$"):n.patterns[r.type])||!r.value||r.value.length<1||r.value.match(a))),outOfRange:(function(e){if(!e.value||e.value.length<1)return!1;var t=e.getAttribute("max"),r=e.getAttribute("min"),n=parseFloat(e.value);return t&&t<n?"over":!!(r&&n<r)&&"under"})(e),wrongLength:(function(e){if(!e.value||e.value.length<1)return!1;var t=e.getAttribute("maxlength"),r=e.getAttribute("minlength"),n=e.value.length;return t&&t<n?"over":!!(r&&n<r)&&"under"})(e)};var r,n,a},m=function(e){for(var t,r=String(e),n=r.length,a=-1,i="",o=r.charCodeAt(0);++a<n;){if(0===(t=r.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===o?i+="\\"+t.toString(16)+" ":i+=128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?r.charAt(a):"\\"+r.charAt(a)}return i},h=function(e,t,r){var n=e.name?e.name:e.id;return!n&&r&&(n=t.fieldPrefix+Math.floor(999*Math.random()),e.id=n),"checkbox"===e.type&&(n+="_"+(e.value||e.id)),n},x=function(e,t){var r=document.createElement("div");r.className=t.errorClass,r.id=t.errorPrefix+h(e,t,!0);var n=(function(e,t,r){var n=e.getAttribute(r.messageTarget);if(n){var a=e.form.querySelector(n);if(a)return a.firstChild||a.appendChild(document.createTextNode(""))}return r.messageAfterField?(t.nextSibling||t.parentNode.appendChild(document.createTextNode("")),t.nextSibling):t})(e,(function(e){if("radio"===e.type&&e.name){var t=e.form.querySelectorAll('[name="'+m(e.name)+'"]');e=t[t.length-1]}"radio"!==e.type&&"checkbox"!==e.type||(e=e.closest("label")||e.form.querySelector('[for="'+e.id+'"]')||e);return e})(e),t);return n.parentNode.insertBefore(r,n),r},v=function(e,t,r){e.classList.add(r.fieldClass),e.setAttribute("aria-describedby",t.id),e.setAttribute("aria-invalid",!0)},g=function(e,t,r){var n,a,i,o=e.form.querySelector("#"+m(r.errorPrefix+h(e,r)))||x(e,r),l=(function(e,t,r){var n=r.messages;if(t.missingValue)return n.missingValue[e.type]||n.missingValue.default;if(t.outOfRange)return n.outOfRange[t.outOfRange].replace("{max}",e.getAttribute("max")).replace("{min}",e.getAttribute("min")).replace("{length}",e.value.length);if(t.wrongLength)return n.wrongLength[t.wrongLength].replace("{maxLength}",e.getAttribute("maxlength")).replace("{minLength}",e.getAttribute("minlength")).replace("{length}",e.value.length);if(t.patternMismatch){var a=e.getAttribute(r.messageCustom);return a||n.patternMismatch[e.type]||n.patternMismatch.default}for(var i in r.customValidations)if(r.customValidations.hasOwnProperty(i)&&t[i]&&n[i])return n[i];return n.fallback})(e,t,r);o.textContent="function"==typeof l?l(e,r):l,a=o,i=r,"radio"===(n=e).type&&n.name&&Array.prototype.forEach.call(document.querySelectorAll('[name="'+n.name+'"]'),(function(e){v(e,a,i)})),v(n,a,i),r.emitEvents&&f(e,"bouncerShowError",{errors:t})},i=function(e,t){e.classList.remove(t.fieldClass),e.removeAttribute("aria-describedby"),e.removeAttribute("aria-invalid")},p=function(e,t){var r,n,a=e.form.querySelector("#"+m(t.errorPrefix+h(e,t)));a&&(a.parentNode.removeChild(a),n=t,"radio"===(r=e).type&&r.name?Array.prototype.forEach.call(document.querySelectorAll('[name="'+r.name+'"]'),(function(e){i(e,n)})):i(r,n),t.emitEvents&&f(e,"bouncerRemoveError"))};return function(n,e){var l,r={};r.validate=function(e,t){if(!e.disabled&&!e.readOnly&&"reset"!==e.type&&"submit"!==e.type&&"button"!==e.type){var r,n,a,i=c(l,t||{}),o=(a=d(r=e,n=i),{valid:!(function(e){for(var t in e)if(e[t])return!0;return!1})(a=(function(e,t,r,n){for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a](e,n));return t})(r,a,n.customValidations,n)),errors:a});if(!o.valid)return g(e,o.errors,i),o;p(e,i)}},r.validateAll=function(e){return Array.prototype.filter.call(e.querySelectorAll("input, select, textarea"),(function(e){var t=r.validate(e);return t&&!t.valid}))};var a=function(e){e.target.form&&e.target.form.matches(n)&&r.validate(e.target)},i=function(e){e.target.form&&e.target.form.matches(n)&&e.target.classList.contains(l.fieldClass)&&r.validate(e.target)},o=function(e){if(e.target.matches(n)){e.preventDefault();var t=r.validateAll(e.target);if(0<t.length)return t[0].focus(),void f(e.target,"bouncerFormInvalid",{errors:t});l.disableSubmit||e.target.submit(),l.emitEvents&&f(e.target,"bouncerFormValid")}};r.destroy=function(){var e,t,r;document.removeEventListener("blur",a,!0),document.removeEventListener("input",i,!1),document.removeEventListener("click",i,!1),document.removeEventListener("submit",o,!1),e=n,t=l,s(document.querySelectorAll(e),(function(e){s(e.querySelectorAll("input, select, textarea"),(function(e){p(e,t)}))})),r=n,s(document.querySelectorAll(r),(function(e){e.removeAttribute("novalidate")})),l.emitEvents&&f(document,"bouncerDestroyed",{settings:l}),l=null};var t;return l=c(u,e||{}),t=n,s(document.querySelectorAll(t),(function(e){e.setAttribute("novalidate",!0)})),document.addEventListener("blur",a,!0),document.addEventListener("input",i,!1),document.addEventListener("click",i,!1),document.addEventListener("submit",o,!1),l.emitEvents&&f(document,"bouncerInitialized",{settings:l}),r}}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/intl-tel-input/build/js/intlTelInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/intl-tel-input/build/js/intlTelInput.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * International Telephone Input v17.0.3
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// wrap in UMD
(function(factory) {
    if ( true && module.exports) module.exports = factory(); else window.intlTelInput = factory();
})(function(undefined) {
    "use strict";
    return function() {
        // Array of country objects for the flag dropdown.
        // Here is the criteria for the plugin to support a given country/territory
        // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
        // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
        // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
        // Each country array has the following information:
        // [
        //    Country name,
        //    iso2 code,
        //    International dial code,
        //    Order (if >1 country with same dial code),
        //    Area codes
        // ]
        var allCountries = [ [ "Afghanistan (â€«Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†â€¬â€Ž)", "af", "93" ], [ "Albania (ShqipÃ«ri)", "al", "355" ], [ "Algeria (â€«Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±â€¬â€Ž)", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia (Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61", 0 ], [ "Austria (Ã–sterreich)", "at", "43" ], [ "Azerbaijan (AzÉ™rbaycan)", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain (â€«Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†â€¬â€Ž)", "bh", "973" ], [ "Bangladesh (à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶)", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus (Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÑŒ)", "by", "375" ], [ "Belgium (BelgiÃ«)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (BÃ©nin)", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan (à½ à½–à¾²à½´à½‚)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Ð‘Ð¾ÑÐ½Ð° Ð¸ Ð¥ÐµÑ€Ñ†ÐµÐ³Ð¾Ð²Ð¸Ð½Ð°)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria (Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (áž€áž˜áŸ’áž–áž»áž‡áž¶)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic (RÃ©publique centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (ä¸­å›½)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros (â€«Ø¬Ø²Ø± Ø§Ù„Ù‚Ù…Ø±â€¬â€Ž)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "CÃ´te dâ€™Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "CuraÃ§ao", "cw", "599", 0 ], [ "Cyprus (ÎšÏÏ€ÏÎ¿Ï‚)", "cy", "357" ], [ "Czech Republic (ÄŒeskÃ¡ republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic (RepÃºblica Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (â€«Ù…ØµØ±â€¬â€Ž)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (FÃ¸royar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane franÃ§aise)", "gf", "594" ], [ "French Polynesia (PolynÃ©sie franÃ§aise)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Î•Î»Î»Î¬Î´Î±)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea (GuinÃ©e)", "gn", "224" ], [ "Guinea-Bissau (GuinÃ© Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (é¦™æ¸¯)", "hk", "852" ], [ "Hungary (MagyarorszÃ¡g)", "hu", "36" ], [ "Iceland (Ãsland)", "is", "354" ], [ "India (à¤­à¤¾à¤°à¤¤)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (â€«Ø§ÛŒØ±Ø§Ù†â€¬â€Ž)", "ir", "98" ], [ "Iraq (â€«Ø§Ù„Ø¹Ø±Ø§Ù‚â€¬â€Ž)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel (â€«×™×©×¨××œâ€¬â€Ž)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (æ—¥æœ¬)", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan (â€«Ø§Ù„Ø£Ø±Ø¯Ù†â€¬â€Ž)", "jo", "962" ], [ "Kazakhstan (ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½)", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (â€«Ø§Ù„ÙƒÙˆÙŠØªâ€¬â€Ž)", "kw", "965" ], [ "Kyrgyzstan (ÐšÑ‹Ñ€Ð³Ñ‹Ð·ÑÑ‚Ð°Ð½)", "kg", "996" ], [ "Laos (àº¥àº²àº§)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (â€«Ù„Ø¨Ù†Ø§Ù†â€¬â€Ž)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (â€«Ù„ÙŠØ¨ÙŠØ§â€¬â€Ž)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (æ¾³é–€)", "mo", "853" ], [ "Macedonia (FYROM) (ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ð¸Ñ˜Ð°)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (â€«Ù…ÙˆØ±ÙŠØªØ§Ù†ÙŠØ§â€¬â€Ž)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico (MÃ©xico)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (ÐœÐ¾Ð½Ð³Ð¾Ð»)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco (â€«Ø§Ù„Ù…ØºØ±Ø¨â€¬â€Ž)", "ma", "212", 0 ], [ "Mozambique (MoÃ§ambique)", "mz", "258" ], [ "Myanmar (Burma) (á€™á€¼á€”á€ºá€™á€¬)", "mm", "95" ], [ "Namibia (NamibiÃ«)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (à¤¨à¥‡à¤ªà¤¾à¤²)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-CalÃ©donie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (ì¡°ì„  ë¯¼ì£¼ì£¼ì˜ ì¸ë¯¼ ê³µí™”êµ­)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (â€«Ø¹ÙÙ…Ø§Ù†â€¬â€Ž)", "om", "968" ], [ "Pakistan (â€«Ù¾Ø§Ú©Ø³ØªØ§Ù†â€¬â€Ž)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (â€«ÙÙ„Ø³Ø·ÙŠÙ†â€¬â€Ž)", "ps", "970" ], [ "Panama (PanamÃ¡)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (PerÃº)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (â€«Ù‚Ø·Ø±â€¬â€Ž)", "qa", "974" ], [ "RÃ©union (La RÃ©union)", "re", "262", 0 ], [ "Romania (RomÃ¢nia)", "ro", "40" ], [ "Russia (Ð Ð¾ÑÑÐ¸Ñ)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint BarthÃ©lemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ], [ "Saint Lucia", "lc", "1", 19, [ "758" ] ], [ "Saint Martin (Saint-Martin (partie franÃ§aise))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "SÃ£o TomÃ© and PrÃ­ncipe (SÃ£o TomÃ© e PrÃ­ncipe)", "st", "239" ], [ "Saudi Arabia (â€«Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©â€¬â€Ž)", "sa", "966" ], [ "Senegal (SÃ©nÃ©gal)", "sn", "221" ], [ "Serbia (Ð¡Ñ€Ð±Ð¸Ñ˜Ð°)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (ëŒ€í•œë¯¼êµ­)", "kr", "82" ], [ "South Sudan (â€«Ø¬Ù†ÙˆØ¨ Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)", "ss", "211" ], [ "Spain (EspaÃ±a)", "es", "34" ], [ "Sri Lanka (à·à·Šâ€à¶»à·“ à¶½à¶‚à¶šà·à·€)", "lk", "94" ], [ "Sudan (â€«Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (â€«Ø³ÙˆØ±ÙŠØ§â€¬â€Ž)", "sy", "963" ], [ "Taiwan (å°ç£)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (à¹„à¸—à¸¢)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia (â€«ØªÙˆÙ†Ø³â€¬â€Ž)", "tn", "216" ], [ "Turkey (TÃ¼rkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uganda", "ug", "256" ], [ "Ukraine (Ð£ÐºÑ€Ð°Ñ—Ð½Ð°)", "ua", "380" ], [ "United Arab Emirates (â€«Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©â€¬â€Ž)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (OÊ»zbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (CittÃ  del Vaticano)", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Viá»‡t Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (â€«Ø§Ù„ØµØ­Ø±Ø§Ø¡ Ø§Ù„ØºØ±Ø¨ÙŠØ©â€¬â€Ž)", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen (â€«Ø§Ù„ÙŠÙ…Ù†â€¬â€Ž)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Ã…land Islands", "ax", "358", 1, [ "18" ] ] ];
        // loop over all of the countries above, restructuring the data to be objects with named keys
        for (var i = 0; i < allCountries.length; i++) {
            var c = allCountries[i];
            allCountries[i] = {
                name: c[0],
                iso2: c[1],
                dialCode: c[2],
                priority: c[3] || 0,
                areaCodes: c[4] || null
            };
        }
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var intlTelInputGlobals = {
            getInstance: function getInstance(input) {
                var id = input.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[id];
            },
            instances: {}
        };
        if (typeof window === "object") window.intlTelInputGlobals = intlTelInputGlobals;
        // these vars persist through all instances of the plugin
        var id = 0;
        var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // if there is just a dial code in the input: remove it on blur
            autoHideDialCode: true,
            // add a placeholder in the input with an example number for the selected country
            autoPlaceholder: "polite",
            // modify the parentClass
            customContainer: "",
            // modify the auto placeholder
            customPlaceholder: null,
            // append menu to specified element
            dropdownContainer: null,
            // don't display these countries
            excludeCountries: [],
            // format the input value during initialisation and on setNumber
            formatOnDisplay: true,
            // geoIp lookup function
            geoIpLookup: null,
            // inject a hidden input with this name, and on submit, populate it with the result of getNumber
            hiddenInput: "",
            // initial country
            initialCountry: "",
            // localized country names e.g. { 'de': 'Deutschland' }
            localizedCountries: null,
            // don't insert international dial codes
            nationalMode: true,
            // display only these countries
            onlyCountries: [],
            // number type to use for placeholders
            placeholderNumberType: "MOBILE",
            // the countries at the top of the list. defaults to united states and united kingdom
            preferredCountries: [ "us", "gb" ],
            // display the country dial code next to the selected flag so it's not part of the typed number
            separateDialCode: false,
            // specify the path to the libphonenumber script to enable validation/formatting
            utilsScript: ""
        };
        // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
        var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
        if (typeof window === "object") {
            // keep track of if the window.load event has fired as impossible to check after the fact
            window.addEventListener("load", function() {
                // UPDATE: use a public static field so we can fudge it in the tests
                window.intlTelInputGlobals.windowLoaded = true;
            });
        }
        // utility function to iterate over an object. can't use Object.entries or native forEach because
        // of IE11
        var forEachProp = function forEachProp(obj, callback) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                callback(keys[i], obj[keys[i]]);
            }
        };
        // run a method on each instance of the plugin
        var forEachInstance = function forEachInstance(method) {
            forEachProp(window.intlTelInputGlobals.instances, function(key) {
                window.intlTelInputGlobals.instances[key][method]();
            });
        };
        // this is our plugin class that we will create an instance of
        // eslint-disable-next-line no-unused-vars
        var Iti = /*#__PURE__*/
        function() {
            function Iti(input, options) {
                var _this = this;
                _classCallCheck(this, Iti);
                this.id = id++;
                this.telInput = input;
                this.activeItem = null;
                this.highlightedItem = null;
                // process specified options / defaults
                // alternative to Object.assign, which isn't supported by IE11
                var customOptions = options || {};
                this.options = {};
                forEachProp(defaults, function(key, value) {
                    _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
                });
                this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
            }
            _createClass(Iti, [ {
                key: "_init",
                value: function _init() {
                    var _this2 = this;
                    // if in nationalMode, disable options relating to dial codes
                    if (this.options.nationalMode) this.options.autoHideDialCode = false;
                    // if separateDialCode then doesn't make sense to A) insert dial code into input
                    // (autoHideDialCode), and B) display national numbers (because we're displaying the country
                    // dial code next to them)
                    if (this.options.separateDialCode) {
                        this.options.autoHideDialCode = this.options.nationalMode = false;
                    }
                    // we cannot just test screen size as some smartphones/website meta tags will report desktop
                    // resolutions
                    // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
                    // rest of these declarations
                    // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
                    this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (this.isMobile) {
                        // trigger the mobile dropdown css
                        document.body.classList.add("iti-mobile");
                        // on mobile, we want a full screen dropdown, so we must append it to the body
                        if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                    }
                    // these promises get resolved when their individual requests complete
                    // this way the dev can do something like iti.promise.then(...) to know when all requests are
                    // complete
                    if (typeof Promise !== "undefined") {
                        var autoCountryPromise = new Promise(function(resolve, reject) {
                            _this2.resolveAutoCountryPromise = resolve;
                            _this2.rejectAutoCountryPromise = reject;
                        });
                        var utilsScriptPromise = new Promise(function(resolve, reject) {
                            _this2.resolveUtilsScriptPromise = resolve;
                            _this2.rejectUtilsScriptPromise = reject;
                        });
                        this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                    } else {
                        // prevent errors when Promise doesn't exist
                        this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                        this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                    }
                    // in various situations there could be no country selected initially, but we need to be able
                    // to assume this variable exists
                    this.selectedCountryData = {};
                    // process all the data: onlyCountries, excludeCountries, preferredCountries etc
                    this._processCountryData();
                    // generate the markup
                    this._generateMarkup();
                    // set the initial state of the input value and the selected flag
                    this._setInitialState();
                    // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
                    this._initListeners();
                    // utils script, and auto country
                    this._initRequests();
                }
            }, {
                key: "_processCountryData",
                value: function _processCountryData() {
                    // process onlyCountries or excludeCountries array if present
                    this._processAllCountries();
                    // process the countryCodes map
                    this._processCountryCodes();
                    // process the preferredCountries
                    this._processPreferredCountries();
                    // translate countries according to localizedCountries option
                    if (this.options.localizedCountries) this._translateCountriesByLocale();
                    // sort countries by name
                    if (this.options.onlyCountries.length || this.options.localizedCountries) {
                        this.countries.sort(this._countryNameSort);
                    }
                }
            }, {
                key: "_addCountryCode",
                value: function _addCountryCode(iso2, countryCode, priority) {
                    if (countryCode.length > this.countryCodeMaxLen) {
                        this.countryCodeMaxLen = countryCode.length;
                    }
                    if (!this.countryCodes.hasOwnProperty(countryCode)) {
                        this.countryCodes[countryCode] = [];
                    }
                    // bail if we already have this country for this countryCode
                    for (var i = 0; i < this.countryCodes[countryCode].length; i++) {
                        if (this.countryCodes[countryCode][i] === iso2) return;
                    }
                    // check for undefined as 0 is falsy
                    var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
                    this.countryCodes[countryCode][index] = iso2;
                }
            }, {
                key: "_processAllCountries",
                value: function _processAllCountries() {
                    if (this.options.onlyCountries.length) {
                        var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                        });
                    } else if (this.options.excludeCountries.length) {
                        var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                        });
                    } else {
                        this.countries = allCountries;
                    }
                }
            }, {
                key: "_translateCountriesByLocale",
                value: function _translateCountriesByLocale() {
                    for (var i = 0; i < this.countries.length; i++) {
                        var iso = this.countries[i].iso2.toLowerCase();
                        if (this.options.localizedCountries.hasOwnProperty(iso)) {
                            this.countries[i].name = this.options.localizedCountries[iso];
                        }
                    }
                }
            }, {
                key: "_countryNameSort",
                value: function _countryNameSort(a, b) {
                    return a.name.localeCompare(b.name);
                }
            }, {
                key: "_processCountryCodes",
                value: function _processCountryCodes() {
                    this.countryCodeMaxLen = 0;
                    // here we store just dial codes
                    this.dialCodes = {};
                    // here we store "country codes" (both dial codes and their area codes)
                    this.countryCodes = {};
                    // first: add dial codes
                    for (var i = 0; i < this.countries.length; i++) {
                        var c = this.countries[i];
                        if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                        this._addCountryCode(c.iso2, c.dialCode, c.priority);
                    }
                    // next: add area codes
                    // this is a second loop over countries, to make sure we have all of the "root" countries
                    // already in the map, so that we can access them, as each time we add an area code substring
                    // to the map, we also need to include the "root" country's code, as that also matches
                    for (var _i = 0; _i < this.countries.length; _i++) {
                        var _c = this.countries[_i];
                        // area codes
                        if (_c.areaCodes) {
                            var rootCountryCode = this.countryCodes[_c.dialCode][0];
                            // for each area code
                            for (var j = 0; j < _c.areaCodes.length; j++) {
                                var areaCode = _c.areaCodes[j];
                                // for each digit in the area code to add all partial matches as well
                                for (var k = 1; k < areaCode.length; k++) {
                                    var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                                    // start with the root country, as that also matches this dial code
                                    this._addCountryCode(rootCountryCode, partialDialCode);
                                    this._addCountryCode(_c.iso2, partialDialCode);
                                }
                                // add the full area code
                                this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                            }
                        }
                    }
                }
            }, {
                key: "_processPreferredCountries",
                value: function _processPreferredCountries() {
                    this.preferredCountries = [];
                    for (var i = 0; i < this.options.preferredCountries.length; i++) {
                        var countryCode = this.options.preferredCountries[i].toLowerCase();
                        var countryData = this._getCountryData(countryCode, false, true);
                        if (countryData) this.preferredCountries.push(countryData);
                    }
                }
            }, {
                key: "_createEl",
                value: function _createEl(name, attrs, container) {
                    var el = document.createElement(name);
                    if (attrs) forEachProp(attrs, function(key, value) {
                        return el.setAttribute(key, value);
                    });
                    if (container) container.appendChild(el);
                    return el;
                }
            }, {
                key: "_generateMarkup",
                value: function _generateMarkup() {
                    // if autocomplete does not exist on the element and its form, then
                    // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                    // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                    // autocompleted number, which on submit could mean wrong number is saved (esp in nationalMode)
                    if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
                        this.telInput.setAttribute("autocomplete", "off");
                    }
                    // containers (mostly for positioning)
                    var parentClass = "iti";
                    if (this.options.allowDropdown) parentClass += " iti--allow-dropdown";
                    if (this.options.separateDialCode) parentClass += " iti--separate-dial-code";
                    if (this.options.customContainer) {
                        parentClass += " ";
                        parentClass += this.options.customContainer;
                    }
                    var wrapper = this._createEl("div", {
                        "class": parentClass
                    });
                    this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                    this.flagsContainer = this._createEl("div", {
                        "class": "iti__flag-container"
                    }, wrapper);
                    wrapper.appendChild(this.telInput);
                    // selected flag (displayed to left of input)
                    this.selectedFlag = this._createEl("div", {
                        "class": "iti__selected-flag",
                        role: "combobox",
                        "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                        "aria-expanded": "false"
                    }, this.flagsContainer);
                    this.selectedFlagInner = this._createEl("div", {
                        "class": "iti__flag"
                    }, this.selectedFlag);
                    if (this.options.separateDialCode) {
                        this.selectedDialCode = this._createEl("div", {
                            "class": "iti__selected-dial-code"
                        }, this.selectedFlag);
                    }
                    if (this.options.allowDropdown) {
                        // make element focusable and tab navigable
                        this.selectedFlag.setAttribute("tabindex", "0");
                        this.dropdownArrow = this._createEl("div", {
                            "class": "iti__arrow"
                        }, this.selectedFlag);
                        // country dropdown: preferred countries, then divider, then all countries
                        this.countryList = this._createEl("ul", {
                            "class": "iti__country-list iti__hide",
                            id: "iti-".concat(this.id, "__country-listbox"),
                            role: "listbox"
                        });
                        if (this.preferredCountries.length) {
                            this._appendListItems(this.preferredCountries, "iti__preferred", true);
                            this._createEl("li", {
                                "class": "iti__divider",
                                role: "separator",
                                "aria-disabled": "true"
                            }, this.countryList);
                        }
                        this._appendListItems(this.countries, "iti__standard");
                        // create dropdownContainer markup
                        if (this.options.dropdownContainer) {
                            this.dropdown = this._createEl("div", {
                                "class": "iti iti--container"
                            });
                            this.dropdown.appendChild(this.countryList);
                        } else {
                            this.flagsContainer.appendChild(this.countryList);
                        }
                    }
                    if (this.options.hiddenInput) {
                        var hiddenInputName = this.options.hiddenInput;
                        var name = this.telInput.getAttribute("name");
                        if (name) {
                            var i = name.lastIndexOf("[");
                            // if input name contains square brackets, then give the hidden input the same name,
                            // replacing the contents of the last set of brackets with the given hiddenInput name
                            if (i !== -1) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                        }
                        this.hiddenInput = this._createEl("input", {
                            type: "hidden",
                            name: hiddenInputName
                        });
                        wrapper.appendChild(this.hiddenInput);
                    }
                }
            }, {
                key: "_appendListItems",
                value: function _appendListItems(countries, className, preferred) {
                    // we create so many DOM elements, it is faster to build a temp string
                    // and then add everything to the DOM in one go at the end
                    var tmp = "";
                    // for each country
                    for (var i = 0; i < countries.length; i++) {
                        var c = countries[i];
                        var idSuffix = preferred ? "-preferred" : "";
                        // open the list item
                        tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "'>");
                        // add the flag
                        tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
                        // and the country name and dial code
                        tmp += "<span class='iti__country-name'>".concat(c.name, "</span>");
                        tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>");
                        // close the list item
                        tmp += "</li>";
                    }
                    this.countryList.insertAdjacentHTML("beforeend", tmp);
                }
            }, {
                key: "_setInitialState",
                value: function _setInitialState() {
                    var val = this.telInput.value;
                    var dialCode = this._getDialCode(val);
                    var isRegionlessNanp = this._isRegionlessNanp(val);
                    var _this$options = this.options, initialCountry = _this$options.initialCountry, nationalMode = _this$options.nationalMode, autoHideDialCode = _this$options.autoHideDialCode, separateDialCode = _this$options.separateDialCode;
                    // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                    // flag, else fall back to the default country
                    if (dialCode && !isRegionlessNanp) {
                        this._updateFlagFromNumber(val);
                    } else if (initialCountry !== "auto") {
                        // see if we should select a flag
                        if (initialCountry) {
                            this._setFlag(initialCountry.toLowerCase());
                        } else {
                            if (dialCode && isRegionlessNanp) {
                                // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                                this._setFlag("us");
                            } else {
                                // no dial code and no initialCountry, so default to first in list
                                this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                if (!val) {
                                    this._setFlag(this.defaultCountry);
                                }
                            }
                        }
                        // if empty and no nationalMode and no autoHideDialCode then insert the default dial code
                        if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) {
                            this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                        }
                    }
                    // NOTE: if initialCountry is set to auto, that will be handled separately
                    // format - note this wont be run after _updateDialCode as that's only called if no val
                    if (val) this._updateValFromNumber(val);
                }
            }, {
                key: "_initListeners",
                value: function _initListeners() {
                    this._initKeyListeners();
                    if (this.options.autoHideDialCode) this._initBlurListeners();
                    if (this.options.allowDropdown) this._initDropdownListeners();
                    if (this.hiddenInput) this._initHiddenInputListener();
                }
            }, {
                key: "_initHiddenInputListener",
                value: function _initHiddenInputListener() {
                    var _this3 = this;
                    this._handleHiddenInputSubmit = function() {
                        _this3.hiddenInput.value = _this3.getNumber();
                    };
                    if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                }
            }, {
                key: "_getClosestLabel",
                value: function _getClosestLabel() {
                    var el = this.telInput;
                    while (el && el.tagName !== "LABEL") {
                        el = el.parentNode;
                    }
                    return el;
                }
            }, {
                key: "_initDropdownListeners",
                value: function _initDropdownListeners() {
                    var _this4 = this;
                    // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                    // open the dropdown would then automatically trigger a 2nd click on the input which would
                    // close it again
                    this._handleLabelClick = function(e) {
                        // if the dropdown is closed, then focus the input, else ignore the click
                        if (_this4.countryList.classList.contains("iti__hide")) _this4.telInput.focus(); else e.preventDefault();
                    };
                    var label = this._getClosestLabel();
                    if (label) label.addEventListener("click", this._handleLabelClick);
                    // toggle country dropdown on click
                    this._handleClickSelectedFlag = function() {
                        // only intercept this event if we're opening the dropdown
                        // else let it bubble up to the top ("click-off-to-close" listener)
                        // we cannot just stopPropagation as it may be needed to close another instance
                        if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
                            _this4._showDropdown();
                        }
                    };
                    this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                    // open dropdown list if currently focused
                    this._handleFlagsContainerKeydown = function(e) {
                        var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");
                        if (isDropdownHidden && [ "ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter" ].indexOf(e.key) !== -1) {
                            // prevent form from being submitted if "ENTER" was pressed
                            e.preventDefault();
                            // prevent event from being handled again by document
                            e.stopPropagation();
                            _this4._showDropdown();
                        }
                        // allow navigation from dropdown to input on TAB
                        if (e.key === "Tab") _this4._closeDropdown();
                    };
                    this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                }
            }, {
                key: "_initRequests",
                value: function _initRequests() {
                    var _this5 = this;
                    // if the user has specified the path to the utils script, fetch it on window.load, else resolve
                    if (this.options.utilsScript && !window.intlTelInputUtils) {
                        // if the plugin is being initialised after the window.load event has already been fired
                        if (window.intlTelInputGlobals.windowLoaded) {
                            window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                        } else {
                            // wait until the load event so we don't block any other requests e.g. the flags image
                            window.addEventListener("load", function() {
                                window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                            });
                        }
                    } else this.resolveUtilsScriptPromise();
                    if (this.options.initialCountry === "auto") this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                }
            }, {
                key: "_loadAutoCountry",
                value: function _loadAutoCountry() {
                    // 3 options:
                    // 1) already loaded (we're done)
                    // 2) not already started loading (start)
                    // 3) already started loading (do nothing - just wait for loading callback to fire)
                    if (window.intlTelInputGlobals.autoCountry) {
                        this.handleAutoCountry();
                    } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                        // don't do this twice!
                        window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                        if (typeof this.options.geoIpLookup === "function") {
                            this.options.geoIpLookup(function(countryCode) {
                                window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                                // tell all instances the auto country is ready
                                // TODO: this should just be the current instances
                                // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                                // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                                // setTimeout means that the current thread of execution will finish before executing
                                // this, which allows the plugin to finish initialising.
                                setTimeout(function() {
                                    return forEachInstance("handleAutoCountry");
                                });
                            }, function() {
                                return forEachInstance("rejectAutoCountryPromise");
                            });
                        }
                    }
                }
            }, {
                key: "_initKeyListeners",
                value: function _initKeyListeners() {
                    var _this6 = this;
                    // update flag on keyup
                    this._handleKeyupEvent = function() {
                        if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
                            _this6._triggerCountryChange();
                        }
                    };
                    this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                    // update flag on cut/paste events (now supported in all major browsers)
                    this._handleClipboardEvent = function() {
                        // hack because "paste" event is fired before input is updated
                        setTimeout(_this6._handleKeyupEvent);
                    };
                    this.telInput.addEventListener("cut", this._handleClipboardEvent);
                    this.telInput.addEventListener("paste", this._handleClipboardEvent);
                }
            }, {
                key: "_cap",
                value: function _cap(number) {
                    var max = this.telInput.getAttribute("maxlength");
                    return max && number.length > max ? number.substr(0, max) : number;
                }
            }, {
                key: "_initBlurListeners",
                value: function _initBlurListeners() {
                    var _this7 = this;
                    // on blur or form submit: if just a dial code then remove it
                    this._handleSubmitOrBlurEvent = function() {
                        _this7._removeEmptyDialCode();
                    };
                    if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                    this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                }
            }, {
                key: "_removeEmptyDialCode",
                value: function _removeEmptyDialCode() {
                    if (this.telInput.value.charAt(0) === "+") {
                        var numeric = this._getNumeric(this.telInput.value);
                        // if just a plus, or if just a dial code
                        if (!numeric || this.selectedCountryData.dialCode === numeric) {
                            this.telInput.value = "";
                        }
                    }
                }
            }, {
                key: "_getNumeric",
                value: function _getNumeric(s) {
                    return s.replace(/\D/g, "");
                }
            }, {
                key: "_trigger",
                value: function _trigger(name) {
                    // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
                    var e = document.createEvent("Event");
                    e.initEvent(name, true, true);
                    // can bubble, and is cancellable
                    this.telInput.dispatchEvent(e);
                }
            }, {
                key: "_showDropdown",
                value: function _showDropdown() {
                    this.countryList.classList.remove("iti__hide");
                    this.selectedFlag.setAttribute("aria-expanded", "true");
                    this._setDropdownPosition();
                    // update highlighting and scroll to active list item
                    if (this.activeItem) {
                        this._highlightListItem(this.activeItem, false);
                        this._scrollTo(this.activeItem, true);
                    }
                    // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                    this._bindDropdownListeners();
                    // update the arrow
                    this.dropdownArrow.classList.add("iti__arrow--up");
                    this._trigger("open:countrydropdown");
                }
            }, {
                key: "_toggleClass",
                value: function _toggleClass(el, className, shouldHaveClass) {
                    if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className); else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                }
            }, {
                key: "_setDropdownPosition",
                value: function _setDropdownPosition() {
                    var _this8 = this;
                    if (this.options.dropdownContainer) {
                        this.options.dropdownContainer.appendChild(this.dropdown);
                    }
                    if (!this.isMobile) {
                        var pos = this.telInput.getBoundingClientRect();
                        // windowTop from https://stackoverflow.com/a/14384091/217866
                        var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                        var inputTop = pos.top + windowTop;
                        var dropdownHeight = this.countryList.offsetHeight;
                        // dropdownFitsBelow = (dropdownBottom < windowBottom)
                        var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                        var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                        // by default, the dropdown will be below the input. If we want to position it above the
                        // input, we add the dropup class.
                        this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove);
                        // if dropdownContainer is enabled, calculate postion
                        if (this.options.dropdownContainer) {
                            // by default the dropdown will be directly over the input because it's not in the flow.
                            // If we want to position it below, we need to add some extra top value.
                            var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                            // calculate placement
                            this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                            this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                            // close menu on window scroll
                            this._handleWindowScroll = function() {
                                return _this8._closeDropdown();
                            };
                            window.addEventListener("scroll", this._handleWindowScroll);
                        }
                    }
                }
            }, {
                key: "_getClosestListItem",
                value: function _getClosestListItem(target) {
                    var el = target;
                    while (el && el !== this.countryList && !el.classList.contains("iti__country")) {
                        el = el.parentNode;
                    }
                    // if we reached the countryList element, then return null
                    return el === this.countryList ? null : el;
                }
            }, {
                key: "_bindDropdownListeners",
                value: function _bindDropdownListeners() {
                    var _this9 = this;
                    // when mouse over a list item, just highlight that one
                    // we add the class "highlight", so if they hit "enter" we know which one to select
                    this._handleMouseoverCountryList = function(e) {
                        // handle event delegation, as we're listening for this event on the countryList
                        var listItem = _this9._getClosestListItem(e.target);
                        if (listItem) _this9._highlightListItem(listItem, false);
                    };
                    this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                    // listen for country selection
                    this._handleClickCountryList = function(e) {
                        var listItem = _this9._getClosestListItem(e.target);
                        if (listItem) _this9._selectListItem(listItem);
                    };
                    this.countryList.addEventListener("click", this._handleClickCountryList);
                    // click off to close
                    // (except when this initial opening click is bubbling up)
                    // we cannot just stopPropagation as it may be needed to close another instance
                    var isOpening = true;
                    this._handleClickOffToClose = function() {
                        if (!isOpening) _this9._closeDropdown();
                        isOpening = false;
                    };
                    document.documentElement.addEventListener("click", this._handleClickOffToClose);
                    // listen for up/down scrolling, enter to select, or letters to jump to country name.
                    // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                    // just hit down and hold it to scroll down (no keyup event).
                    // listen on the document because that's where key events are triggered if no input has focus
                    var query = "";
                    var queryTimer = null;
                    this._handleKeydownOnDropdown = function(e) {
                        // prevent down key from scrolling the whole page,
                        // and enter key from submitting a form etc
                        e.preventDefault();
                        // up and down to navigate
                        if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") _this9._handleUpDownKey(e.key); else if (e.key === "Enter") _this9._handleEnterKey(); else if (e.key === "Escape") _this9._closeDropdown(); else if (/^[a-zA-ZÃ€-Ã¿Ð°-ÑÐ-Ð¯ ]$/.test(e.key)) {
                            // jump to countries that start with the query string
                            if (queryTimer) clearTimeout(queryTimer);
                            query += e.key.toLowerCase();
                            _this9._searchForCountry(query);
                            // if the timer hits 1 second, reset the query
                            queryTimer = setTimeout(function() {
                                query = "";
                            }, 1e3);
                        }
                    };
                    document.addEventListener("keydown", this._handleKeydownOnDropdown);
                }
            }, {
                key: "_handleUpDownKey",
                value: function _handleUpDownKey(key) {
                    var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                    if (next) {
                        // skip the divider
                        if (next.classList.contains("iti__divider")) {
                            next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
                        }
                        this._highlightListItem(next, true);
                    }
                }
            }, {
                key: "_handleEnterKey",
                value: function _handleEnterKey() {
                    if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                }
            }, {
                key: "_searchForCountry",
                value: function _searchForCountry(query) {
                    for (var i = 0; i < this.countries.length; i++) {
                        if (this._startsWith(this.countries[i].name, query)) {
                            var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i].iso2));
                            // update highlighting and scroll
                            this._highlightListItem(listItem, false);
                            this._scrollTo(listItem, true);
                            break;
                        }
                    }
                }
            }, {
                key: "_startsWith",
                value: function _startsWith(a, b) {
                    return a.substr(0, b.length).toLowerCase() === b;
                }
            }, {
                key: "_updateValFromNumber",
                value: function _updateValFromNumber(originalNumber) {
                    var number = originalNumber;
                    if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                        var useNational = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) !== "+");
                        var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                        var format = useNational ? NATIONAL : INTERNATIONAL;
                        number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                    }
                    number = this._beforeSetNumber(number);
                    this.telInput.value = number;
                }
            }, {
                key: "_updateFlagFromNumber",
                value: function _updateFlagFromNumber(originalNumber) {
                    // if we're in nationalMode and we already have US/Canada selected, make sure the number starts
                    // with a +1 so _getDialCode will be able to extract the area code
                    // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
                    // from the number), that means we're initialising the plugin with a number that already has a
                    // dial code, so fine to ignore this bit
                    var number = originalNumber;
                    var selectedDialCode = this.selectedCountryData.dialCode;
                    var isNanp = selectedDialCode === "1";
                    if (number && this.options.nationalMode && isNanp && number.charAt(0) !== "+") {
                        if (number.charAt(0) !== "1") number = "1".concat(number);
                        number = "+".concat(number);
                    }
                    // update flag if user types area code for another country
                    if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
                        number = "+".concat(selectedDialCode).concat(number);
                    }
                    // try and extract valid dial code from input
                    var dialCode = this._getDialCode(number, true);
                    var numeric = this._getNumeric(number);
                    var countryCode = null;
                    if (dialCode) {
                        var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                        // check if the right country is already selected. this should be false if the number is
                        // longer than the matched dial code because in this case we need to make sure that if
                        // there are multiple country matches, that the first one is selected (note: we could
                        // just check that here, but it requires the same loop that we already have later)
                        var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                        var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
                        // only update the flag if:
                        // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
                        // AND
                        // B) the right country is not already selected
                        if (!isRegionlessNanpNumber && !alreadySelected) {
                            // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
                            // non-empty index
                            for (var j = 0; j < countryCodes.length; j++) {
                                if (countryCodes[j]) {
                                    countryCode = countryCodes[j];
                                    break;
                                }
                            }
                        }
                    } else if (number.charAt(0) === "+" && numeric.length) {
                        // invalid dial code, so empty
                        // Note: use getNumeric here because the number has not been formatted yet, so could contain
                        // bad chars
                        countryCode = "";
                    } else if (!number || number === "+") {
                        // empty, or just a plus, so default
                        countryCode = this.defaultCountry;
                    }
                    if (countryCode !== null) {
                        return this._setFlag(countryCode);
                    }
                    return false;
                }
            }, {
                key: "_isRegionlessNanp",
                value: function _isRegionlessNanp(number) {
                    var numeric = this._getNumeric(number);
                    if (numeric.charAt(0) === "1") {
                        var areaCode = numeric.substr(1, 3);
                        return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                    }
                    return false;
                }
            }, {
                key: "_highlightListItem",
                value: function _highlightListItem(listItem, shouldFocus) {
                    var prevItem = this.highlightedItem;
                    if (prevItem) prevItem.classList.remove("iti__highlight");
                    this.highlightedItem = listItem;
                    this.highlightedItem.classList.add("iti__highlight");
                    if (shouldFocus) this.highlightedItem.focus();
                }
            }, {
                key: "_getCountryData",
                value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                    var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                    for (var i = 0; i < countryList.length; i++) {
                        if (countryList[i].iso2 === countryCode) {
                            return countryList[i];
                        }
                    }
                    if (allowFail) {
                        return null;
                    }
                    throw new Error("No country data for '".concat(countryCode, "'"));
                }
            }, {
                key: "_setFlag",
                value: function _setFlag(countryCode) {
                    var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                    // do this first as it will throw an error and stop if countryCode is invalid
                    this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                    // update the defaultCountry - we only need the iso2 from now on, so just store that
                    if (this.selectedCountryData.iso2) {
                        this.defaultCountry = this.selectedCountryData.iso2;
                    }
                    this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                    // update the selected country's title attribute
                    var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                    this.selectedFlag.setAttribute("title", title);
                    if (this.options.separateDialCode) {
                        var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                        this.selectedDialCode.innerHTML = dialCode;
                        // offsetWidth is zero if input is in a hidden container during initialisation
                        var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                        // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css
                        this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                    }
                    // and the input's placeholder
                    this._updatePlaceholder();
                    // update the active list item
                    if (this.options.allowDropdown) {
                        var prevItem = this.activeItem;
                        if (prevItem) {
                            prevItem.classList.remove("iti__active");
                            prevItem.setAttribute("aria-selected", "false");
                        }
                        if (countryCode) {
                            // check if there is a preferred item first, else fall back to standard
                            var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                            nextItem.setAttribute("aria-selected", "true");
                            nextItem.classList.add("iti__active");
                            this.activeItem = nextItem;
                            this.selectedFlag.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
                        }
                    }
                    // return if the flag has changed or not
                    return prevCountry.iso2 !== countryCode;
                }
            }, {
                key: "_getHiddenSelectedFlagWidth",
                value: function _getHiddenSelectedFlagWidth() {
                    // to get the right styling to apply, all we need is a shallow clone of the container,
                    // and then to inject a deep clone of the selectedFlag element
                    var containerClone = this.telInput.parentNode.cloneNode();
                    containerClone.style.visibility = "hidden";
                    document.body.appendChild(containerClone);
                    var flagsContainerClone = this.flagsContainer.cloneNode();
                    containerClone.appendChild(flagsContainerClone);
                    var selectedFlagClone = this.selectedFlag.cloneNode(true);
                    flagsContainerClone.appendChild(selectedFlagClone);
                    var width = selectedFlagClone.offsetWidth;
                    containerClone.parentNode.removeChild(containerClone);
                    return width;
                }
            }, {
                key: "_updatePlaceholder",
                value: function _updatePlaceholder() {
                    var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                    if (window.intlTelInputUtils && shouldSetPlaceholder) {
                        var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                        var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                        placeholder = this._beforeSetNumber(placeholder);
                        if (typeof this.options.customPlaceholder === "function") {
                            placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                        }
                        this.telInput.setAttribute("placeholder", placeholder);
                    }
                }
            }, {
                key: "_selectListItem",
                value: function _selectListItem(listItem) {
                    // update selected flag and active list item
                    var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                    this._closeDropdown();
                    this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
                    // focus the input
                    this.telInput.focus();
                    // put cursor at end - this fix is required for FF and IE11 (with nationalMode=false i.e. auto
                    // inserting dial code), who try to put the cursor at the beginning the first time
                    var len = this.telInput.value.length;
                    this.telInput.setSelectionRange(len, len);
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "_closeDropdown",
                value: function _closeDropdown() {
                    this.countryList.classList.add("iti__hide");
                    this.selectedFlag.setAttribute("aria-expanded", "false");
                    // update the arrow
                    this.dropdownArrow.classList.remove("iti__arrow--up");
                    // unbind key events
                    document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                    document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                    this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                    this.countryList.removeEventListener("click", this._handleClickCountryList);
                    // remove menu from container
                    if (this.options.dropdownContainer) {
                        if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                        if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                    }
                    this._trigger("close:countrydropdown");
                }
            }, {
                key: "_scrollTo",
                value: function _scrollTo(element, middle) {
                    var container = this.countryList;
                    // windowTop from https://stackoverflow.com/a/14384091/217866
                    var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                    var containerHeight = container.offsetHeight;
                    var containerTop = container.getBoundingClientRect().top + windowTop;
                    var containerBottom = containerTop + containerHeight;
                    var elementHeight = element.offsetHeight;
                    var elementTop = element.getBoundingClientRect().top + windowTop;
                    var elementBottom = elementTop + elementHeight;
                    var newScrollTop = elementTop - containerTop + container.scrollTop;
                    var middleOffset = containerHeight / 2 - elementHeight / 2;
                    if (elementTop < containerTop) {
                        // scroll up
                        if (middle) newScrollTop -= middleOffset;
                        container.scrollTop = newScrollTop;
                    } else if (elementBottom > containerBottom) {
                        // scroll down
                        if (middle) newScrollTop += middleOffset;
                        var heightDifference = containerHeight - elementHeight;
                        container.scrollTop = newScrollTop - heightDifference;
                    }
                }
            }, {
                key: "_updateDialCode",
                value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
                    var inputVal = this.telInput.value;
                    // save having to pass this every time
                    var newDialCode = "+".concat(newDialCodeBare);
                    var newNumber;
                    if (inputVal.charAt(0) === "+") {
                        // there's a plus so we're dealing with a replacement (doesn't matter if nationalMode or not)
                        var prevDialCode = this._getDialCode(inputVal);
                        if (prevDialCode) {
                            // current number contains a valid dial code, so replace it
                            newNumber = inputVal.replace(prevDialCode, newDialCode);
                        } else {
                            // current number contains an invalid dial code, so ditch it
                            // (no way to determine where the invalid dial code ends and the rest of the number begins)
                            newNumber = newDialCode;
                        }
                    } else if (this.options.nationalMode || this.options.separateDialCode) {
                        // don't do anything
                        return;
                    } else {
                        // nationalMode is disabled
                        if (inputVal) {
                            // there is an existing value with no dial code: prefix the new dial code
                            newNumber = newDialCode + inputVal;
                        } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                            // no existing value and either they've just selected a list item, or autoHideDialCode is
                            // disabled: insert new dial code
                            newNumber = newDialCode;
                        } else {
                            return;
                        }
                    }
                    this.telInput.value = newNumber;
                }
            }, {
                key: "_getDialCode",
                value: function _getDialCode(number, includeAreaCode) {
                    var dialCode = "";
                    // only interested in international numbers (starting with a plus)
                    if (number.charAt(0) === "+") {
                        var numericChars = "";
                        // iterate over chars
                        for (var i = 0; i < number.length; i++) {
                            var c = number.charAt(i);
                            // if char is number (https://stackoverflow.com/a/8935649/217866)
                            if (!isNaN(parseInt(c, 10))) {
                                numericChars += c;
                                // if current numericChars make a valid dial code
                                if (includeAreaCode) {
                                    if (this.countryCodes[numericChars]) {
                                        // store the actual raw string (useful for matching later)
                                        dialCode = number.substr(0, i + 1);
                                    }
                                } else {
                                    if (this.dialCodes[numericChars]) {
                                        dialCode = number.substr(0, i + 1);
                                        // if we're just looking for a dial code, we can break as soon as we find one
                                        break;
                                    }
                                }
                                // stop searching as soon as we can - in this case when we hit max len
                                if (numericChars.length === this.countryCodeMaxLen) {
                                    break;
                                }
                            }
                        }
                    }
                    return dialCode;
                }
            }, {
                key: "_getFullNumber",
                value: function _getFullNumber() {
                    var val = this.telInput.value.trim();
                    var dialCode = this.selectedCountryData.dialCode;
                    var prefix;
                    var numericVal = this._getNumeric(val);
                    if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
                        // when using separateDialCode, it is visible so is effectively part of the typed number
                        prefix = "+".concat(dialCode);
                    } else {
                        prefix = "";
                    }
                    return prefix + val;
                }
            }, {
                key: "_beforeSetNumber",
                value: function _beforeSetNumber(originalNumber) {
                    var number = originalNumber;
                    if (this.options.separateDialCode) {
                        var dialCode = this._getDialCode(number);
                        // if there is a valid dial code
                        if (dialCode) {
                            // in case _getDialCode returned an area code as well
                            dialCode = "+".concat(this.selectedCountryData.dialCode);
                            // a lot of numbers will have a space separating the dial code and the main number, and
                            // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
                            // rid of it
                            // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc
                            var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                            number = number.substr(start);
                        }
                    }
                    return this._cap(number);
                }
            }, {
                key: "_triggerCountryChange",
                value: function _triggerCountryChange() {
                    this._trigger("countrychange");
                }
            }, {
                key: "handleAutoCountry",
                value: function handleAutoCountry() {
                    if (this.options.initialCountry === "auto") {
                        // we must set this even if there is an initial val in the input: in case the initial val is
                        // invalid and they delete it - they should see their auto country
                        this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                        // if there's no initial value in the input, then update the flag
                        if (!this.telInput.value) {
                            this.setCountry(this.defaultCountry);
                        }
                        this.resolveAutoCountryPromise();
                    }
                }
            }, {
                key: "handleUtils",
                value: function handleUtils() {
                    // if the request was successful
                    if (window.intlTelInputUtils) {
                        // if there's an initial value in the input, then format it
                        if (this.telInput.value) {
                            this._updateValFromNumber(this.telInput.value);
                        }
                        this._updatePlaceholder();
                    }
                    this.resolveUtilsScriptPromise();
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var form = this.telInput.form;
                    if (this.options.allowDropdown) {
                        // make sure the dropdown is closed (and unbind listeners)
                        this._closeDropdown();
                        this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                        this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                        // label click hack
                        var label = this._getClosestLabel();
                        if (label) label.removeEventListener("click", this._handleLabelClick);
                    }
                    // unbind hiddenInput listeners
                    if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                    // unbind autoHideDialCode listeners
                    if (this.options.autoHideDialCode) {
                        if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                        this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                    }
                    // unbind key events, and cut/paste events
                    this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                    this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                    this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                    // remove attribute of id instance: data-intl-tel-input-id
                    this.telInput.removeAttribute("data-intl-tel-input-id");
                    // remove markup (but leave the original input)
                    var wrapper = this.telInput.parentNode;
                    wrapper.parentNode.insertBefore(this.telInput, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                    delete window.intlTelInputGlobals.instances[this.id];
                }
            }, {
                key: "getExtension",
                value: function getExtension() {
                    if (window.intlTelInputUtils) {
                        return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                    }
                    return "";
                }
            }, {
                key: "getNumber",
                value: function getNumber(format) {
                    if (window.intlTelInputUtils) {
                        var iso2 = this.selectedCountryData.iso2;
                        return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                    }
                    return "";
                }
            }, {
                key: "getNumberType",
                value: function getNumberType() {
                    if (window.intlTelInputUtils) {
                        return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                    }
                    return -99;
                }
            }, {
                key: "getSelectedCountryData",
                value: function getSelectedCountryData() {
                    return this.selectedCountryData;
                }
            }, {
                key: "getValidationError",
                value: function getValidationError() {
                    if (window.intlTelInputUtils) {
                        var iso2 = this.selectedCountryData.iso2;
                        return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                    }
                    return -99;
                }
            }, {
                key: "isValidNumber",
                value: function isValidNumber() {
                    var val = this._getFullNumber().trim();
                    var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                    return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
                }
            }, {
                key: "setCountry",
                value: function setCountry(originalCountryCode) {
                    var countryCode = originalCountryCode.toLowerCase();
                    // check if already selected
                    if (!this.selectedFlagInner.classList.contains("iti__".concat(countryCode))) {
                        this._setFlag(countryCode);
                        this._updateDialCode(this.selectedCountryData.dialCode, false);
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setNumber",
                value: function setNumber(number) {
                    // we must update the flag first, which updates this.selectedCountryData, which is used for
                    // formatting the number before displaying it
                    var flagChanged = this._updateFlagFromNumber(number);
                    this._updateValFromNumber(number);
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setPlaceholderNumberType",
                value: function setPlaceholderNumberType(type) {
                    this.options.placeholderNumberType = type;
                    this._updatePlaceholder();
                }
            } ]);
            return Iti;
        }();
        /********************
 *  STATIC METHODS
 ********************/
        // get the country data object
        intlTelInputGlobals.getCountryData = function() {
            return allCountries;
        };
        // inject a <script> element to load utils.js
        var injectScript = function injectScript(path, handleSuccess, handleFailure) {
            // inject a new script element into the page
            var script = document.createElement("script");
            script.onload = function() {
                forEachInstance("handleUtils");
                if (handleSuccess) handleSuccess();
            };
            script.onerror = function() {
                forEachInstance("rejectUtilsScriptPromise");
                if (handleFailure) handleFailure();
            };
            script.className = "iti-load-utils";
            script.async = true;
            script.src = path;
            document.body.appendChild(script);
        };
        // load the utils script
        intlTelInputGlobals.loadUtils = function(path) {
            // 2 options:
            // 1) not already started loading (start)
            // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
            // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                // only do this once
                window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                // if we have promises, then return a promise
                if (typeof Promise !== "undefined") {
                    return new Promise(function(resolve, reject) {
                        return injectScript(path, resolve, reject);
                    });
                }
                injectScript(path);
            }
            return null;
        };
        // default options
        intlTelInputGlobals.defaults = defaults;
        // version
        intlTelInputGlobals.version = "17.0.3";
        // convenience wrapper
        return function(input, options) {
            var iti = new Iti(input, options);
            iti._init();
            input.setAttribute("data-intl-tel-input-id", iti.id);
            window.intlTelInputGlobals.instances[iti.id] = iti;
            return iti;
        };
    }();
});

/***/ }),

/***/ "./node_modules/intl-tel-input/index.js":
/*!**********************************************!*\
  !*** ./node_modules/intl-tel-input/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Exposing intl-tel-input as a component
 */
module.exports = __webpack_require__(/*! ./build/js/intlTelInput */ "./node_modules/intl-tel-input/build/js/intlTelInput.js");


/***/ }),

/***/ "./node_modules/mailcheck/src/mailcheck.js":
/*!*************************************************!*\
  !*** ./node_modules/mailcheck/src/mailcheck.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Mailcheck https://github.com/mailcheck/mailcheck
 * Author
 * Derrick Ko (@derrickko)
 *
 * Released under the MIT License.
 *
 * v 1.1.1
 */

var Mailcheck = {
  domainThreshold: 2,
  secondLevelThreshold: 2,
  topLevelThreshold: 2,

  defaultDomains: ['msn.com', 'bellsouth.net',
    'telus.net', 'comcast.net', 'optusnet.com.au',
    'earthlink.net', 'qq.com', 'sky.com', 'icloud.com',
    'mac.com', 'sympatico.ca', 'googlemail.com',
    'att.net', 'xtra.co.nz', 'web.de',
    'cox.net', 'gmail.com', 'ymail.com',
    'aim.com', 'rogers.com', 'verizon.net',
    'rocketmail.com', 'google.com', 'optonline.net',
    'sbcglobal.net', 'aol.com', 'me.com', 'btinternet.com',
    'charter.net', 'shaw.ca'],

  defaultSecondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],

  defaultTopLevelDomains: ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de",
    "fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu",
    "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz",
    "in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu"],

  run: function(opts) {
    opts.domains = opts.domains || Mailcheck.defaultDomains;
    opts.secondLevelDomains = opts.secondLevelDomains || Mailcheck.defaultSecondLevelDomains;
    opts.topLevelDomains = opts.topLevelDomains || Mailcheck.defaultTopLevelDomains;
    opts.distanceFunction = opts.distanceFunction || Mailcheck.sift3Distance;

    var defaultCallback = function(result){ return result };
    var suggestedCallback = opts.suggested || defaultCallback;
    var emptyCallback = opts.empty || defaultCallback;

    var result = Mailcheck.suggest(Mailcheck.encodeEmail(opts.email), opts.domains, opts.secondLevelDomains, opts.topLevelDomains, opts.distanceFunction);

    return result ? suggestedCallback(result) : emptyCallback()
  },

  suggest: function(email, domains, secondLevelDomains, topLevelDomains, distanceFunction) {
    email = email.toLowerCase();

    var emailParts = this.splitEmail(email);

    if (secondLevelDomains && topLevelDomains) {
        // If the email is a valid 2nd-level + top-level, do not suggest anything.
        if (secondLevelDomains.indexOf(emailParts.secondLevelDomain) !== -1 && topLevelDomains.indexOf(emailParts.topLevelDomain) !== -1) {
            return false;
        }
    }

    var closestDomain = this.findClosestDomain(emailParts.domain, domains, distanceFunction, this.domainThreshold);

    if (closestDomain) {
      if (closestDomain == emailParts.domain) {
        // The email address exactly matches one of the supplied domains; do not return a suggestion.
        return false;
      } else {
        // The email address closely matches one of the supplied domains; return a suggestion
        return { address: emailParts.address, domain: closestDomain, full: emailParts.address + "@" + closestDomain };
      }
    }

    // The email address does not closely match one of the supplied domains
    var closestSecondLevelDomain = this.findClosestDomain(emailParts.secondLevelDomain, secondLevelDomains, distanceFunction, this.secondLevelThreshold);
    var closestTopLevelDomain    = this.findClosestDomain(emailParts.topLevelDomain, topLevelDomains, distanceFunction, this.topLevelThreshold);

    if (emailParts.domain) {
      var closestDomain = emailParts.domain;
      var rtrn = false;

      if(closestSecondLevelDomain && closestSecondLevelDomain != emailParts.secondLevelDomain) {
        // The email address may have a mispelled second-level domain; return a suggestion
        closestDomain = closestDomain.replace(emailParts.secondLevelDomain, closestSecondLevelDomain);
        rtrn = true;
      }

      if(closestTopLevelDomain && closestTopLevelDomain != emailParts.topLevelDomain) {
        // The email address may have a mispelled top-level domain; return a suggestion
        closestDomain = closestDomain.replace(emailParts.topLevelDomain, closestTopLevelDomain);
        rtrn = true;
      }

      if (rtrn == true) {
        return { address: emailParts.address, domain: closestDomain, full: emailParts.address + "@" + closestDomain };
      }
    }

    /* The email address exactly matches one of the supplied domains, does not closely
     * match any domain and does not appear to simply have a mispelled top-level domain,
     * or is an invalid email address; do not return a suggestion.
     */
    return false;
  },

  findClosestDomain: function(domain, domains, distanceFunction, threshold) {
    threshold = threshold || this.topLevelThreshold;
    var dist;
    var minDist = 99;
    var closestDomain = null;

    if (!domain || !domains) {
      return false;
    }
    if(!distanceFunction) {
      distanceFunction = this.sift3Distance;
    }

    for (var i = 0; i < domains.length; i++) {
      if (domain === domains[i]) {
        return domain;
      }
      dist = distanceFunction(domain, domains[i]);
      if (dist < minDist) {
        minDist = dist;
        closestDomain = domains[i];
      }
    }

    if (minDist <= threshold && closestDomain !== null) {
      return closestDomain;
    } else {
      return false;
    }
  },

  sift3Distance: function(s1, s2) {
    // sift3: http://siderite.blogspot.com/2007/04/super-fast-and-accurate-string-distance.html
    if (s1 == null || s1.length === 0) {
      if (s2 == null || s2.length === 0) {
        return 0;
      } else {
        return s2.length;
      }
    }

    if (s2 == null || s2.length === 0) {
      return s1.length;
    }

    var c = 0;
    var offset1 = 0;
    var offset2 = 0;
    var lcs = 0;
    var maxOffset = 5;

    while ((c + offset1 < s1.length) && (c + offset2 < s2.length)) {
      if (s1.charAt(c + offset1) == s2.charAt(c + offset2)) {
        lcs++;
      } else {
        offset1 = 0;
        offset2 = 0;
        for (var i = 0; i < maxOffset; i++) {
          if ((c + i < s1.length) && (s1.charAt(c + i) == s2.charAt(c))) {
            offset1 = i;
            break;
          }
          if ((c + i < s2.length) && (s1.charAt(c) == s2.charAt(c + i))) {
            offset2 = i;
            break;
          }
        }
      }
      c++;
    }
    return (s1.length + s2.length) /2 - lcs;
  },

  splitEmail: function(email) {
    var parts = email.trim().split('@');

    if (parts.length < 2) {
      return false;
    }

    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === '') {
        return false;
      }
    }

    var domain = parts.pop();
    var domainParts = domain.split('.');
    var sld = '';
    var tld = '';

    if (domainParts.length == 0) {
      // The address does not have a top-level domain
      return false;
    } else if (domainParts.length == 1) {
      // The address has only a top-level domain (valid under RFC)
      tld = domainParts[0];
    } else {
      // The address has a domain and a top-level domain
      sld = domainParts[0];
      for (var i = 1; i < domainParts.length; i++) {
        tld += domainParts[i] + '.';
      }
      tld = tld.substring(0, tld.length - 1);
    }

    return {
      topLevelDomain: tld,
      secondLevelDomain: sld,
      domain: domain,
      address: parts.join('@')
    }
  },

  // Encode the email address to prevent XSS but leave in valid
  // characters, following this official spec:
  // http://en.wikipedia.org/wiki/Email_address#Syntax
  encodeEmail: function(email) {
    var result = encodeURI(email);
    result = result.replace('%20', ' ').replace('%25', '%').replace('%5E', '^')
                   .replace('%60', '`').replace('%7B', '{').replace('%7C', '|')
                   .replace('%7D', '}');
    return result;
  }
};

// Export the mailcheck object if we're in a CommonJS env (e.g. Node).
// Modeled off of Underscore.js.
if ( true && module.exports) {
    module.exports = Mailcheck;
}

// Support AMD style definitions
// Based on jQuery (see http://stackoverflow.com/a/17954882/1322410)
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return Mailcheck;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

if (typeof window !== 'undefined' && window.jQuery) {
  (function($){
    $.fn.mailcheck = function(opts) {
      var self = this;
      if (opts.suggested) {
        var oldSuggested = opts.suggested;
        opts.suggested = function(result) {
          oldSuggested(self, result);
        };
      }

      if (opts.empty) {
        var oldEmpty = opts.empty;
        opts.empty = function() {
          oldEmpty.call(null, self);
        };
      }

      opts.email = this.val();
      Mailcheck.run(opts);
    }
  })(jQuery);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* Polyfill */
__webpack_require__(/*! ./polyfill/foreach */ "./resources/js/polyfill/foreach.js"); // 1bk


__webpack_require__(/*! ./polyfill/closest */ "./resources/js/polyfill/closest.js"); // 1bk

/* Features, Functionality */


__webpack_require__(/*! ./features/smooth-scroll */ "./resources/js/features/smooth-scroll.js"); // 1bk


__webpack_require__(/*! ./features/select-dynamic */ "./resources/js/features/select-dynamic.js"); // 1bk


__webpack_require__(/*! ./features/accordion */ "./resources/js/features/accordion.js"); //2kb

/* Vanilla from validation */
// require('./form/vanilla/tailselect.js'); // 54kb


__webpack_require__(/*! ./form/change-filled.js */ "./resources/js/form/change-filled.js"); // 2kb


__webpack_require__(/*! ./form/mailcheck.js */ "./resources/js/form/mailcheck.js"); // 12kb


__webpack_require__(/*! ./form/intl-tel-input.js */ "./resources/js/form/intl-tel-input.js"); // 99 Kb


__webpack_require__(/*! ./form/password.js */ "./resources/js/form/password.js"); // 2kb


__webpack_require__(/*! ./form/validation.js */ "./resources/js/form/validation.js"); // 26kb

/***/ }),

/***/ "./resources/js/features/accordion.js":
/*!********************************************!*\
  !*** ./resources/js/features/accordion.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var accodrions = document.querySelectorAll('.accordion');

var selectorAllRemoveClass = function selectorAllRemoveClass(element, array) {
  var elements = document.querySelectorAll(element);
  elements.forEach(function (element) {
    element.classList.remove(array);
  });
};

accodrions.forEach(function (accordion) {
  var cta = accordion.querySelector('.accordion-head');
  var panel = accordion.querySelector('.accordion-content');
  var allPanels = document.querySelectorAll('.accordion-content');
  panel.style.height = '0px';
  cta.addEventListener('click', function (e) {
    var panelHeight = panel.querySelector('.container').offsetHeight;
    var isActive = accordion.classList.contains('is-active');
    allPanels.forEach(function (allPanel) {
      allPanel.style.height = '0px';
    });

    if (!isActive) {
      selectorAllRemoveClass('.accordion', 'is-active');
      accordion.classList.add('is-active');
      panel.style.height = panelHeight + 'px';
    } else {
      accordion.classList.remove('is-active');
      panel.style.height = '0px';
    }
  });
});

/***/ }),

/***/ "./resources/js/features/select-dynamic.js":
/*!*************************************************!*\
  !*** ./resources/js/features/select-dynamic.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var dynamicSelects = document.querySelectorAll('.select-dynamic select');
dynamicSelects.forEach(function (dynamicSelect) {
  dynamicSelect.addEventListener('change', function () {
    var url = dynamicSelect.value; // get selected value

    if (url) {
      // require a URL
      window.location.href = url; // redirect
      // alert(window.location)

      return false;
    }
  });
});

/***/ }),

/***/ "./resources/js/features/smooth-scroll.js":
/*!************************************************!*\
  !*** ./resources/js/features/smooth-scroll.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () // Code in a function to create an isolate scope
{
  var speed = 500;
  var moving_frequency = 15; // Affects performance !

  var links = document.getElementsByTagName('a');
  var href;

  for (var i = 0; i < links.length; i++) {
    href = links[i].attributes.href === undefined ? null : links[i].attributes.href.nodeValue.toString();

    if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
      links[i].onclick = function () {
        var element;
        var href = this.attributes.href.nodeValue.toString();

        if (element = document.getElementById(href.substr(1))) {
          var hop_count = speed / moving_frequency;
          var getScrollTopDocumentAtBegin = getScrollTopDocument();
          var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

          for (var i = 1; i <= hop_count; i++) {
            (function () {
              var hop_top_position = gap * i;
              setTimeout(function () {
                window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
              }, moving_frequency * i);
            })();
          }
        }

        return false;
      };
    }
  }

  var getScrollTopElement = function getScrollTopElement(e) {
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null) {
      top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
      e = e.offsetParent;
    }

    return top;
  };

  var getScrollTopDocument = function getScrollTopDocument() {
    return document.documentElement.scrollTop + document.body.scrollTop;
  };
})();

/***/ }),

/***/ "./resources/js/form/change-filled.js":
/*!********************************************!*\
  !*** ./resources/js/form/change-filled.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
var getClosest = function getClosest(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  } // Get the closest matching element


  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }

  return null;
}; ///


var inputs = document.querySelectorAll('.change-filled input, .change-filled textarea, .change-filled select');

var setInputClasses = function setInputClasses(input, _boolean) {
  // let wrapper = input.parentNode.parentNode;
  var wrapper = getClosest(input, '.field');

  if (input.value.length > 0) {
    wrapper.classList.add('is-filled');
  } else {
    if (input.id != 'intl-tel-input') {
      wrapper.classList.remove('is-filled');
    }
  }

  if (_boolean == true) wrapper.classList.add('is-filled');
};

inputs.forEach(function (input) {
  input.onchange = function () {
    setInputClasses(input);
  };

  input.addEventListener("input", function (event) {
    setInputClasses(input);
  });
  input.addEventListener("click", function (event) {
    if (input.tagName != "SELECT") setInputClasses(input, true);
  });
  input.addEventListener("focusout", function (event) {
    setInputClasses(input);
  });
  setTimeout(function () {
    setInputClasses(input);
  }, 200);
});

/***/ }),

/***/ "./resources/js/form/error-msg.js":
/*!****************************************!*\
  !*** ./resources/js/form/error-msg.js ***!
  \****************************************/
/*! exports provided: defaultErrorMsg, messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultErrorMsg", function() { return defaultErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
var lang = document.documentElement.lang;
var fr = lang == 'fr';
var messages = {
  missingValue: {
    checkbox: fr ? "Ce champ est requis." : "Dit veld is verplicht.",
    radio: fr ? "Veuillez sÃ©lectionner une valeur." : "Selecteer een waarde.",
    selectMultiple: fr ? "Veuillez sÃ©lectionner au moins une valeur." : "Selecteer ten minste Ã©Ã©n waarde.",
    "default": fr ? "Veuillez remplir ce champ." : "Vul alstublieft dit veld in."
  },
  patternMismatch: {
    email: fr ? "S'il vous plaÃ®t, mettez une adresse email valide." : "Vul een geldig e-mailadres in.",
    phone: fr ? "Le format 04xx xx xx xx nâ€™est pas respectÃ©." : "Het formaat 04xx xx xx xx wordt niet gerespecteerd.",
    url: fr ? "Veuillez saisir une URL." : "Voer een URL in.",
    number: fr ? "Veuillez saisir un nombre" : "Voer alstublieft een nummer in",
    color: fr ? "Veuillez respecter le format suivant: #rrggbb" : "Pas het volgende formaat aan: #rrggbb",
    date: fr ? "Veuillez utiliser le format JJ-MM-AAA" : "Gebruik het formaat DD-MM-JJJJ",
    time: fr ? "Veuillez utiliser le format de l'heure sur 24 heures. Ex. 23h00" : "Gebruik het 24-uurs tijdformaat. Ex. 23:00",
    month: fr ? "Veuillez utiliser le format MM-AAAA" : "Gebruik het formaat MM-JJJJ",
    match: fr ? "Veuillez rÃ©pÃ©ter votre mot de passe" : "Herhaal uw wachtwoord",
    "default": fr ? "Veuillez correspondre au format demandÃ©." : "Pas het gevraagde formaat aan."
  },
  outOfRange: {
    over: fr ? "Veuillez sÃ©lectionner une valeur qui ne dÃ©passe pas {max}." : "Selecteer een waarde die niet meer is dan {max}",
    under: fr ? "Veuillez sÃ©lectionner une valeur qui n'est pas infÃ©rieure Ã  {min}." : "Selecteer een waarde die niet lager is dan {min}"
  },
  wrongLength: {
    over: fr ? "Veuillez raccourcir ce texte Ã  un maximum de {maxLength} caractÃ¨res. Vous utilisez actuellement {length} caractÃ¨res." : "Kort deze tekst in tot niet meer dan {maxLength} tekens. U gebruikt momenteel {length} tekens.",
    under: fr ? "Veuillez allonger ce texte Ã  {minLength} caractÃ¨res ou plus. Vous utilisez actuellement {length} caractÃ¨res." : "Verleng deze tekst tot {minLength} tekens of meer. U gebruikt momenteel {length} tekens."
  },
  fallback: fr ? "Une erreur s'est produite dans ce champ." : "Er is een fout opgetreden met dit veld."
};

var defaultErrorMsg = function defaultErrorMsg(field, message) {
  // console.log('field:', field)
  // console.log('message:', message)
  var customMessage = field.getAttribute('data-error-msg');
  return customMessage ? customMessage : message;
};



/***/ }),

/***/ "./resources/js/form/intl-tel-input.js":
/*!*********************************************!*\
  !*** ./resources/js/form/intl-tel-input.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_0__);
 // import { parsePhoneNumberFromString } from 'libphonenumber-js'

var hashCountryDataTranslation = {};

if (document.documentElement.lang == 'fr') {
  hashCountryDataTranslation = {
    "af": "Afghanistan (â€«Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†â€¬â€Ž)",
    "al": "Albanie (ShqipÃ«ri)",
    "dz": "AlgÃ©rie (â€«Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±â€¬â€Ž)",
    "as": "Samoa amÃ©ricaines (American Samoa)",
    "ad": "Andorre (Andorra)",
    "ao": "Angola",
    "ai": "Anguilla",
    "ag": "Antigua-et-Barbuda (Antigua and Barbuda)",
    "ar": "Argentine (Argentina)",
    "am": "ArmÃ©nie (Õ€Õ¡ÕµÕ¡Õ½Õ¿Õ¡Õ¶)",
    "aw": "Aruba",
    "au": "Australie (Australia)",
    "at": "Autriche (Ã–sterreich)",
    "az": "AzerbaÃ¯djan (AzÉ™rbaycan)",
    "bs": "Bahamas",
    "bh": "BahreÃ¯n (â€«Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†â€¬â€Ž)",
    "bd": "Bangladesh (à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶)",
    "bb": "Barbade (Barbados)",
    "by": "BiÃ©lorussie (Ð‘ÐµÐ»Ð°Ñ€ÑƒÑÑŒ)",
    "be": "Belgique (BelgiÃ«)",
    "bz": "Belize",
    "bj": "BÃ©nin",
    "bm": "Bermudes (Bermuda)",
    "bt": "Bhoutan (à½ à½–à¾²à½´à½‚)",
    "bo": "Bolivie (Bolivia)",
    "ba": "Bosnie-HerzÃ©govine (Ð‘Ð¾ÑÐ½Ð° Ð¸ Ð¥ÐµÑ€Ñ†ÐµÐ³Ð¾Ð²Ð¸Ð½Ð°)",
    "bw": "Botswana",
    "br": "BrÃ©sil (Brasil)",
    "io": "Territoire britannique de lâ€™ocÃ©an Indien (British Indian Ocean Territory)",
    "vg": "ÃŽles Vierges britanniques (British Virgin Islands)",
    "bn": "Brunei",
    "bg": "Bulgarie (Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ)",
    "bf": "Burkina Faso",
    "bi": "Burundi (Uburundi)",
    "kh": "Cambodge (áž€áž˜áŸ’áž–áž»áž‡áž¶)",
    "cm": "Cameroun",
    "ca": "Canada",
    "cv": "Cap-Vert (Kabu Verdi)",
    "bq": "Bonaire, Saint-Eustache et Saba (Caribbean Netherlands)",
    "ky": "ÃŽles CaÃ¯mans (Cay Islands)",
    "cf": "RÃ©publique centrafricaine",
    "td": "Tchad",
    "cl": "Chili (Chile)",
    "cn": "Chine (ä¸­å›½)",
    "co": "Colombie (Colombia)",
    "km": "Comores (â€«Ø¬Ø²Ø± Ø§Ù„Ù‚Ù…Ø±â€¬â€Ž)",
    "cd": "RÃ©publique dÃ©mocratique du Congo (Jamhuri ya Kidemokrasia ya Kongo)",
    "cg": "RÃ©publique du Congo / (Congo) (Congo-Brazzaville)",
    "ck": "ÃŽles Cook (Cook Islands)",
    "cr": "Costa Rica",
    "ci": "CÃ´te dâ€™Ivoire",
    "hr": "Croatie (Hrvatska)",
    "cu": "Cuba",
    "cw": "CuraÃ§ao",
    "cy": "Chypre (ÎšÏÏ€ÏÎ¿Ï‚)",
    "cz": "RÃ©publique tchÃ¨que (ÄŒeskÃ¡ republika)",
    "dk": "Danemark (Danmark)",
    "dj": "Djibouti",
    "dm": "Dominique (Dominica)",
    "do": "RÃ©publique dominicaine (RepÃºblica Dominicana)",
    "ec": "Ã‰quateur (Ecuador)",
    "eg": "Ã‰gypte (â€«Ù…ØµØ±â€¬â€Ž)",
    "sv": "Salvador (El Salvador)",
    "gq": "GuinÃ©e Ã©quatoriale (Guinea Ecuatorial)",
    "er": "Ã‰rythrÃ©e (Eritrea)",
    "ee": "Estonie (Eesti)",
    "et": "Ã‰thiopie (Ethiopia)",
    "fk": "ÃŽles Malouines (Islas Malvinas)",
    "fo": "ÃŽles FÃ©roÃ© (FÃ¸royar)",
    "fj": "Fidji (Fiji)",
    "fi": "Finlande (Suomi)",
    "fr": "France",
    "gf": "Guyane (Guyane franÃ§aise)",
    "pf": "PolynÃ©sie franÃ§aise",
    "ga": "Gabon",
    "gm": "Gambie (Gambia)",
    "ge": "GÃ©orgie (áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ)",
    "de": "Allemagne (Deutschland)",
    "gh": "Ghana (Gaana)",
    "gi": "Gibraltar",
    "gr": "GrÃ¨ce (Î•Î»Î»Î¬Î´Î±)",
    "gl": "Groenland (Kalaallit Nunaat)",
    "gd": "Grenade (Grenada)",
    "gp": "Guadeloupe",
    "gu": "Guam",
    "gt": "Guatemala",
    "gn": "GuinÃ©e",
    "gw": "GuinÃ©e-Bissau (RepÃºblica da GuinÃ©-Bissau)",
    "gy": "Guyana",
    "ht": "HaÃ¯ti (Haiti)",
    "hn": "Honduras",
    "hk": "Hong Kong (é¦™æ¸¯)",
    "hu": "Hongrie (MagyarorszÃ¡g)",
    "is": "Islande (Ãsland)",
    "in": "Inde (à¤­à¤¾à¤°à¤¤)",
    "id": "IndonÃ©sie (Indonesia)",
    "ir": "Iran (â€«Ø§ÛŒØ±Ø§Ù†â€¬â€Ž)",
    "iq": "Irak (â€«Ø§Ù„Ø¹Ø±Ø§Ù‚â€¬â€Ž)",
    "ie": "Irlande (Ireland)",
    "il": "IsraÃ«l (â€«×™×©×¨××œâ€¬â€Ž)",
    "it": "Italie (Italia)",
    "jm": "JamaÃ¯que (Jamaica)",
    "jp": "Japon (æ—¥æœ¬)",
    "jo": "Jordanie (â€«Ø§Ù„Ø£Ø±Ø¯Ù†â€¬â€Ž)",
    "kz": "Kazakhstan (ÐšÐ°Ð·Ð°Ñ…ÑÑ‚Ð°Ð½)",
    "ke": "Kenya",
    "ki": "Kiribati",
    "kw": "KoweÃ¯t (â€«Ø§Ù„ÙƒÙˆÙŠØªâ€¬â€Ž)",
    "kg": "Kirghizistan (ÐšÑ‹Ñ€Ð³Ñ‹Ð·ÑÑ‚Ð°Ð½)",
    "la": "Laos (àº¥àº²àº§)",
    "lv": "Lettonie (Latvija)",
    "lb": "Liban (â€«Ù„Ø¨Ù†Ø§Ù†â€¬â€Ž)",
    "ls": "Lesotho",
    "lr": "Liberia",
    "ly": "Libye (â€«Ù„ÙŠØ¨ÙŠØ§â€¬â€Ž)",
    "li": "Liechtenstein",
    "lt": "Lituanie (Lietuva)",
    "lu": "Luxembourg",
    "mo": "Macao (æ¾³é–€)",
    "mk": "MacÃ©doine (ÐœÐ°ÐºÐµÐ´Ð¾Ð½Ð¸Ñ˜Ð°)",
    "mg": "Madagascar (Madagasikara)",
    "mw": "Malawi",
    "my": "Malaisie (Malaysia)",
    "mv": "Maldives",
    "ml": "Mali",
    "mt": "Malte (Malta)",
    "mh": "Marshall (Marshall Islands)",
    "mq": "Martinique",
    "mr": "Mauritanie (â€«Ù…ÙˆØ±ÙŠØªØ§Ù†ÙŠØ§â€¬â€Ž)",
    "mu": "Maurice (Moris)",
    "mx": "Mexique (MÃ©xico)",
    "fm": "MicronÃ©sie (Micronesia)",
    "md": "Moldavie (Republica Moldova)",
    "mc": "Monaco",
    "mn": "Mongolie (ÐœÐ¾Ð½Ð³Ð¾Ð»)",
    "me": "MontÃ©nÃ©gro (Crna Gora)",
    "ms": "Montserrat",
    "ma": "Maroc (â€«Ø§Ù„Ù…ØºØ±Ø¨â€¬â€Ž)",
    "mz": "Mozambique (MoÃ§ambique)",
    "mm": "Birmanie (á€™á€¼á€”á€ºá€™á€¬)",
    "na": "Namibie (NamibiÃ«)",
    "nr": "Nauru",
    "np": "NÃ©pal (à¤¨à¥‡à¤ªà¤¾à¤²)",
    "nl": "Pays-Bas (Nederland)",
    "nc": "Nouvelle-CalÃ©donie",
    "nz": "Nouvelle-ZÃ©lande (New Zealand)",
    "ni": "Nicaragua",
    "ne": "Niger (Nijar)",
    "ng": "Nigeria",
    "nu": "Niue",
    "nf": "ÃŽle Norfolk (Norfolk Island)",
    "kp": "CorÃ©e du Nord (ì¡°ì„  ë¯¼ì£¼ì£¼ì˜ ì¸ë¯¼ ê³µí™”êµ­)",
    "mp": "ÃŽles Mariannes du Nord (Northern Mariana Islands)",
    "no": "NorvÃ¨ge (Norge)",
    "om": "Oman (â€«Ø¹ÙÙ…Ø§Ù†â€¬â€Ž)",
    "pk": "Pakistan (â€«Ù¾Ø§Ú©Ø³ØªØ§Ù†â€¬â€Ž)",
    "pw": "Palaos (Palau)",
    "ps": "AutoritÃ© palestinienne (â€«ÙÙ„Ø³Ø·ÙŠÙ†â€¬â€Ž)",
    "pa": "Panama (PanamÃ¡)",
    "pg": "Papouasie-Nouvelle-GuinÃ©e (Papua New Guinea)",
    "py": "Paraguay",
    "pe": "PÃ©rou (PerÃº)",
    "ph": "Philippines",
    "pl": "Pologne (Polska)",
    "pt": "Portugal",
    "pr": "Porto Rico (Puerto Rico)",
    "qa": "Qatar (â€«Ù‚Ø·Ø±â€¬â€Ž)",
    "re": "La RÃ©union",
    "ro": "Roumanie (RomÃ¢nia)",
    "ru": "Russie (Ð Ð¾ÑÑÐ¸Ñ)",
    "rw": "Rwanda",
    "bl": "Saint-BarthÃ©lemy",
    "sh": "Sainte-HÃ©lÃ¨ne, Ascension et Tristan da Cunha (Saint Helena)",
    "kn": "Saint-Christophe-et-NiÃ©vÃ¨s (Saint Kitts and Nevis)",
    "lc": "Sainte-Lucie (Saint Lucia)",
    "mf": "Saint-Martin (Antilles franÃ§aises) (partie franÃ§aise))",
    "pm": "Saint-Pierre-et-Miquelon",
    "vc": "Saint-Vincent-et-les-Grenadines (Saint Vincent and the Grenadines)",
    "ws": "Samoa",
    "sm": "Saint-Marin (San Marino)",
    "st": "Sao TomÃ©-et-Principe (SÃ£o TomÃ© e PrÃ­ncipe)",
    "sa": "Arabie saoudite (â€«Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©â€¬â€Ž)",
    "sn": "SÃ©nÃ©gal",
    "rs": "Serbie (Ð¡Ñ€Ð±Ð¸Ñ˜Ð°)",
    "sc": "Seychelles",
    "sl": "Sierra Leone",
    "sg": "Singapour (Singapore)",
    "sx": "Saint-Martin (Sint Maarten)",
    "sk": "Slovaquie (Slovensko)",
    "si": "SlovÃ©nie (Slovenija)",
    "sb": "Salomon (Solomon Islands)",
    "so": "Somalie (Soomaaliya)",
    "za": "Afrique du Sud (South Africa)",
    "kr": "CorÃ©e du Sud (ëŒ€í•œë¯¼êµ­)",
    "ss": "Soudan du Sud (â€«Ø¬Ù†ÙˆØ¨ Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)",
    "es": "Espagne (EspaÃ±a)",
    "lk": "Sri Lanka (à·à·Šâ€à¶»à·“ à¶½à¶‚à¶šà·à·€)",
    "sd": "Soudan (â€«Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€Ž)",
    "sr": "Suriname",
    "sz": "Swaziland",
    "se": "SuÃ¨de (Sverige)",
    "ch": "Suisse (Schweiz)",
    "sy": "Syrie (â€«Ø³ÙˆØ±ÙŠØ§â€¬â€Ž)",
    "tw": "TaÃ¯wan / (RÃ©publique de Chine (TaÃ¯wan)) (å°ç£)",
    "tj": "Tadjikistan (Tajikistan)",
    "tz": "Tanzanie (Tanzania)",
    "th": "ThaÃ¯lande (à¹„à¸—à¸¢)",
    "tl": "Timor oriental (Timor-Leste)",
    "tg": "Togo",
    "tk": "Tokelau",
    "to": "Tonga",
    "tt": "TrinitÃ©-et-Tobago (Trinidad and Tobago)",
    "tn": "Tunisie (â€«ØªÙˆÙ†Ø³â€¬â€Ž)",
    "tr": "Turquie (TÃ¼rkiye)",
    "tm": "TurkmÃ©nistan (Turkmenistan)",
    "tc": "ÃŽles Turques-et-CaÃ¯ques (Turks and Caicos Islands)",
    "tv": "Tuvalu",
    "vi": "ÃŽles Vierges des Ã‰tats-Unis (U.S. Virgin Islands)",
    "ug": "Ouganda (Uganda)",
    "ua": "Ukraine (Ð£ÐºÑ€Ð°Ñ—Ð½Ð°)",
    "ae": "Ã‰mirats arabes unis (â€«Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©â€¬â€Ž)",
    "gb": "Royaume-Uni (United Kingdom)",
    "us": "Ã‰tats-Unis (United States)",
    "uy": "Uruguay",
    "uz": "OuzbÃ©kistan (OÊ»zbekiston)",
    "vu": "Vanuatu",
    "va": "Ã‰tat de la CitÃ© du Vatican (CittÃ  del Vaticano)",
    "ve": "Venezuela",
    "vn": "ViÃªt Nam (Viá»‡t Nam)",
    "wf": "Wallis-et-Futuna (Wallis and Futuna)",
    "ye": "YÃ©men (â€«Ø§Ù„ÙŠÙ…Ù†â€¬â€Ž)",
    "zm": "Zambie (Zambia)",
    "zw": "Zimbabwe"
  };
} else {
  hashCountryDataTranslation = {
    'be': 'BelgiÃ«'
  };
}

var input = document.querySelector('#intl-tel-input');

if (input) {
  var lang = input.dataset.lang;
  var preferredCountries = ['be', 'nl', 'lu'];

  if (lang == 'nl_nl') {
    preferredCountries = ['nl', 'be', 'lu'];
  } //


  var iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_0___default()(input, {
    preferredCountries: preferredCountries,
    separateDialCode: true,
    localizedCountries: hashCountryDataTranslation,
    hiddenInput: "full_number",
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.0/js/utils.js",
    // utilsScript: "~intl-tel-input/src/js/utils.js",
    customPlaceholder: function customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
      return selectedCountryPlaceholder;
    }
  });
  var phoneNumberValue = input.getAttribute('data-init-value');
  var phoneCountryIso = input.getAttribute('data-init-country');

  if (phoneNumberValue) {
    input.value = phoneNumberValue;
  }

  if (phoneCountryIso) {
    iti.setCountry(phoneCountryIso);
  } // const pl = $input.css('paddingLeft');
  // const label = $input.parents('.field').find('label');
  // label.css({'padding-left':pl})


  var getCode = iti.getSelectedCountryData();
  var form = input.closest('form'); // console.log('form:', form)

  form.addEventListener("submit", function (event) {
    var countryCodeInput = document.querySelector('#intl-tel-input-country-code');
    var fullNumberLessInput = document.querySelector('#intl-tel-input-full-number-less');
    var getCode = iti.getSelectedCountryData();
    countryCodeInput.value = '' + getCode.dialCode + '';
    fullNumberLessInput.value = '' + iti.getNumber().replace('+', '') + '';
  });
}

/***/ }),

/***/ "./resources/js/form/mailcheck.js":
/*!****************************************!*\
  !*** ./resources/js/form/mailcheck.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mailcheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mailcheck */ "./node_modules/mailcheck/src/mailcheck.js");
/* harmony import */ var mailcheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mailcheck__WEBPACK_IMPORTED_MODULE_0__);
// import $ from "jquery";


if (document.querySelector('#email')) {
  // console.log('sdfds');
  var $email = document.querySelector('#email');
  var $suggestion = document.querySelector('#suggestionEmail');
  var $suggestionSentencePt1 = document.querySelector('#suggestionEmail').getAttribute('data-sentence-pt1');
  var $suggestionSentencePt2 = document.querySelector('#suggestionEmail').getAttribute('data-sentence-pt2');
  var domains = ['gmail.com', 'hotmail.com', 'outlook.com'];
  var secondLevelDomains = ['gmail', 'hotmail', 'outlook'];
  var topLevelDomains = ["com", "be", "nl", "fr", "lu", "eu", "info", "net", "org", "online", "vlaanderen", "immo", "store", "design", "world", "tech", "website", "de", "brussels", "digital", "pro", "rocks", "live", "amsterdam", "ch", "uk"];

  var mailCheckRun = function mailCheckRun() {
    mailcheck__WEBPACK_IMPORTED_MODULE_0___default.a.run({
      email: $email.value,
      domains: domains,
      // optional
      topLevelDomains: topLevelDomains,
      // optional
      secondLevelDomains: secondLevelDomains,
      // optional
      // distanceFunction: superStringDistance,  // optional
      suggested: function suggested(suggestion) {
        // callback code
        window.mailcheck.push($email.value); // console.log(window.mailcheck)
        // console.log($email.value)
        // console.log(window.mailcheck.length)

        $suggestion.innerHTML = "" + $suggestionSentencePt1 + " <b><i>" + suggestion.full + "</b></i> " + $suggestionSentencePt2 + "";
      },
      empty: function empty() {
        // callback code
        $suggestion.innerHTML = "";
      }
    });
  };

  $email.addEventListener("keyup", mailCheckRun);
  $email.addEventListener("keydown", mailCheckRun);
}

/***/ }),

/***/ "./resources/js/form/password.js":
/*!***************************************!*\
  !*** ./resources/js/form/password.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btnSiwtchTypes = document.querySelectorAll('.input-switch-type');
btnSiwtchTypes.forEach(function (btnSiwtchType) {
  var input = btnSiwtchType.closest('.control').querySelector('.input');

  var displayTheGoodLabel = function displayTheGoodLabel() {
    if (input.getAttribute('type') == 'password') {
      btnSiwtchType.querySelector('.display').style.display = 'block';
      btnSiwtchType.querySelector('.hide').style.display = 'none';
    } else {
      btnSiwtchType.querySelector('.display').style.display = 'none';
      btnSiwtchType.querySelector('.hide').style.display = 'block';
    }
  };

  displayTheGoodLabel();
  btnSiwtchType.addEventListener('click', function (e) {
    if (input.getAttribute('type') == 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }

    input.focus();
    displayTheGoodLabel();
  });
});

/***/ }),

/***/ "./resources/js/form/validation.js":
/*!*****************************************!*\
  !*** ./resources/js/form/validation.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formbouncerjs */ "./node_modules/formbouncerjs/dist/bouncer.polyfills.min.js");
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validation_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation/email */ "./resources/js/form/validation/email.js");
/* harmony import */ var _validation_email_exclude_mailcheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/email-exclude-mailcheck */ "./resources/js/form/validation/email-exclude-mailcheck.js");
/* harmony import */ var _validation_phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation/phone */ "./resources/js/form/validation/phone.js");
/* harmony import */ var _validation_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation/match */ "./resources/js/form/validation/match.js");
/* harmony import */ var _error_msg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-msg */ "./resources/js/form/error-msg.js");
// https://github.com/cferdinandi/bouncer
// https://www.npmjs.com/package/formbouncerjs
 // Import custom validations




 // Import Default Error Message


var validate = new formbouncerjs__WEBPACK_IMPORTED_MODULE_0___default.a('[data-validate]', {
  disableSubmit: false,
  messageCustom: 'data-error-msg',
  messageTarget: 'data-error-location',
  customValidations: {
    email: function email(field) {
      return Object(_validation_email__WEBPACK_IMPORTED_MODULE_1__["validationEmail"])(field);
    },
    emailExcludeMailCheck: function emailExcludeMailCheck(field) {
      return Object(_validation_email_exclude_mailcheck__WEBPACK_IMPORTED_MODULE_2__["validationEmailExcludeMailCheck"])(field);
    },
    phone: function phone(field) {
      return Object(_validation_phone__WEBPACK_IMPORTED_MODULE_3__["validationPhone"])(field);
    },
    match: function match(field) {
      return Object(_validation_match__WEBPACK_IMPORTED_MODULE_4__["validationMatch"])(field);
    }
  },
  messages: {
    missingValue: {
      checkbox: function checkbox(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].missingValue.checkbox);
      },
      radio: function radio(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].missingValue.radio);
      },
      select: function select(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].missingValue.select);
      },
      'select-multiple': function selectMultiple(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].missingValue.selectMultiple);
      },
      "default": function _default(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].missingValue["default"]);
      }
    },
    patternMismatch: {
      email: function email(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.email);
      },
      url: function url(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.url);
      },
      number: function number(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.number);
      },
      color: function color(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.color);
      },
      date: function date(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.date);
      },
      time: function time(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.time);
      },
      month: function month(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.month);
      },
      "default": function _default(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch["default"]);
      }
    },
    outOfRange: {
      over: function over(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].outOfRange.over);
      },
      under: function under(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].outOfRange.under);
      }
    },
    wrongLength: {
      over: function over(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].wrongLength.over);
      },
      under: function under(field) {
        return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].wrongLength.under);
      }
    },
    email: function email(field) {
      return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.email);
    },
    emailExcludeMailCheck: function emailExcludeMailCheck(field) {
      return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.email);
    },
    phone: function phone(field) {
      return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.phone);
    },
    match: function match(field) {
      return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].patternMismatch.match);
    },
    fallback: function fallback(field) {
      return Object(_error_msg__WEBPACK_IMPORTED_MODULE_5__["defaultErrorMsg"])(field, _error_msg__WEBPACK_IMPORTED_MODULE_5__["messages"].fallback);
    }
  }
});
console.log(validate); // document.addEventListener('bouncerFormInvalid', function (event) {
// 	console.log(event.detail.errors);
// 	console.log(event.detail.errors[0].offsetTop);
// 	window.scrollTo(0, event.detail.errors[0].offsetTop);
// }, false);
// document.addEventListener('bouncerFormValid', function () {
// 	alert('Form submitted successfully!');
// 	window.location.reload();
// }, false);
// Detect show error events

document.addEventListener('bouncerShowError', function (event) {
  // The field with the error
  var input = event.target;
  var field = input.closest('.field');

  if (field) {
    field.classList.add('error');
  }
}, false); // Detect remove error events

document.addEventListener('bouncerRemoveError', function (event) {
  // The field with the error
  var input = event.target;
  var field = input.closest('.field');

  if (field) {
    field.classList.remove('error');
  }
}, false);

/***/ }),

/***/ "./resources/js/form/validation/email-exclude-mailcheck.js":
/*!*****************************************************************!*\
  !*** ./resources/js/form/validation/email-exclude-mailcheck.js ***!
  \*****************************************************************/
/*! exports provided: validationEmailExcludeMailCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationEmailExcludeMailCheck", function() { return validationEmailExcludeMailCheck; });
var required = function required(field, attribute) {
  var selector = field.getAttribute('required');

  if (selector === attribute) {
    return true;
  }
};

window.mailcheck = [' '];

var excludeMailCheck = function excludeMailCheck(value) {
  var mailValue = false;

  for (var i = 0; i < window.mailcheck.length; i++) {
    // console.log(`${value} == ${window.mailcheck[i]}`);
    if (value == window.mailcheck[i]) {
      mailValue = false;
      return false;
    } else {
      mailValue = true;
    }
  }

  if (mailValue == true) {
    return true;
  }

  return false;
};

var validationEmailExcludeMailCheck = function validationEmailExcludeMailCheck(field) {
  var regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (required(field, 'email')) {
    // Return false because there is NO error
    if (excludeMailCheck(field.value) == true) {
      return false;
    }

    return true;
  }
};



/***/ }),

/***/ "./resources/js/form/validation/email.js":
/*!***********************************************!*\
  !*** ./resources/js/form/validation/email.js ***!
  \***********************************************/
/*! exports provided: validationEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationEmail", function() { return validationEmail; });
var required = function required(field, attribute) {
  var selector = field.getAttribute('required');

  if (selector === attribute) {
    return true;
  }
};

var validationEmail = function validationEmail(field) {
  var regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (required(field, 'email')) {
    // Return false because there is NO error
    if (regxEmail.test(field.value) && field.value.length >= 5) {
      return false;
    }

    return true;
  }
};

 // BY FUNCTION:
// const validateEmail = (field) => {
//     const $field = field;
//     const regxEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if ($field.attributes.required.value === 'email'){
//         // Return false because there is NO error
//         if( regxEmail.test($field.value) && $field.value.length >= 5 ){
//             return false;
//         }
//         return true;
//     } 
//     // Return true when there is
//     return true;
// }
// export {validateEmail};

/***/ }),

/***/ "./resources/js/form/validation/match.js":
/*!***********************************************!*\
  !*** ./resources/js/form/validation/match.js ***!
  \***********************************************/
/*! exports provided: validationMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationMatch", function() { return validationMatch; });
var required = function required(field, attribute) {
  var selector = field.getAttribute('required');

  if (selector === attribute) {
    return true;
  }
};

var validationMatch = function validationMatch(field) {
  if (required(field, 'match')) {
    console.log('MOT DE PASSE REP7TE'); // Look for a selector for a field to compare
    // If there isn't one, return false (no error)

    var selector = field.getAttribute('data-match');
    if (!selector) return false; // Get the field to compare

    var otherField = field.form.querySelector(selector);
    if (!otherField) return false; // Compare the two field values
    // We use a negative comparison here because if they do match, the field validates
    // We want to return true for failures, which can be confusing

    return otherField.value !== field.value;
  }
};



/***/ }),

/***/ "./resources/js/form/validation/phone.js":
/*!***********************************************!*\
  !*** ./resources/js/form/validation/phone.js ***!
  \***********************************************/
/*! exports provided: validationPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationPhone", function() { return validationPhone; });
var required = function required(field, attribute) {
  var selector = field.getAttribute('required');

  if (selector === attribute) {
    return true;
  }
};

var sliceVal = 0;
var regexPhone = new RegExp("^[0-9 ]+$"); // let $phone = $('input[data-required="phone"]')

var validationPhone = function validationPhone(field) {
  if (required(field, 'phone')) {
    var $this = field;
    var thisValRe = $this.value.replace(/ /g, "");

    if (thisValRe.length <= 10) {
      sliceVal = $this.value.length;
    }

    if (regexPhone.test($this.value)) {
      if (thisValRe.length >= 8) {
        $this.value = $this.value.slice(0, sliceVal); // Return false because there is NO error

        return false;
      }

      return true;
    }

    return true;
  }
};

var phoneInputs = document.querySelectorAll('input[required="phone"]');
phoneInputs.forEach(function (input) {
  input.addEventListener("keyup", function (event) {
    validationPhone(input);
  });
  input.addEventListener("keydown", function (event) {
    validationPhone(input);
  });
});


/***/ }),

/***/ "./resources/js/polyfill/closest.js":
/*!******************************************!*\
  !*** ./resources/js/polyfill/closest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
if (!Element.prototype.closest) Element.prototype.closest = function (s) {
  var el = this;
  if (!document.documentElement.contains(el)) return null;

  do {
    if (el.matches(s)) return el;
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType == 1);

  return null;
};

/***/ }),

/***/ "./resources/js/polyfill/foreach.js":
/*!******************************************!*\
  !*** ./resources/js/polyfill/foreach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback
  /*, thisArg*/
  ) {
    var T, k;

    if (this === null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);
    var len = O.length >>> 0;

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
      T = arguments[1];
    }

    k = 0;

    while (k < len) {
      var kValue;

      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }

      k++;
    }
  };
}

(function () {
  var instance = null,
      container; // Constructor

  this.MarvLightbox = function () {
    // Initialise plugin
    this.init();
  }; // Initilise the plugin


  MarvLightbox.prototype.init = function () {
    document.querySelectorAll('[data-click]').forEach(function (e) {
      e.addEventListener('click', [clickevent]);
    });
  };
})(); // https://gist.github.com/bob-lee/e7520bfcdac266e5490f40c2759cc955


if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/scss/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yde/Dropbox/R+S/PROJETS/QUICK/20210505_RATE/HTML/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/yde/Dropbox/R+S/PROJETS/QUICK/20210505_RATE/HTML/resources/scss/app.scss */"./resources/scss/app.scss");


/***/ })

/******/ });