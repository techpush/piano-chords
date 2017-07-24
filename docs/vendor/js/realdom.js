// realdom@3.2.11, by @ndaidong - built on Wed, 28 Jun 2017 02:09:15 GMT - published under MIT license
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.realdom=e.realdom||{})}(this,function(e){"use strict";var t=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},n=function(e){return{}.toString.call(e)},r=function(e){return"[object Undefined]"===n(e)},o=function(e){return"[object Function]"===n(e)},i=function(e){return"[object String]"===n(e)},u=function(e){return"[object Number]"===n(e)},a=function(e){return Array.isArray(e)},c=function(e){return"[object Object]"===n(e)&&!a(e)},f=function(e){return n(e).match(/^\[object HTML\w*Element]$/)},l=function(e){var t=u(e)?String(e):e;if(!i(t))throw new Error("InvalidInput: String required.");return t},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=l(e);return(n=n.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""))&&t&&(n=n.replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," ")),n};Array.from||(Array.from=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t});var s,d=function(e,t){var n=/^([a-z]+)([A-Z]{1})([a-z]+)$/,r=e.match(n);if(r&&0===r.index){var o=[];o.push(r[1]),o.push("-"),o.push(r[2]),o.push(r[3]),e=o.join("").toLowerCase()}return u(t)&&(t+="px"),{key:e,value:t}},p=navigator,g=window,h=document,y=function(e){var t=(i(e)?h.getElementById(e):e)||null;return t&&!t.___BEHAVIORS_ATTACHED?s(t):t},m=function(e){var t=void 0,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:h).querySelector(e);return n&&(t=y(n)),t},E=function(e){var t=[],n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:h).querySelectorAll(e);return n&&Array.from(n).forEach(function(e){t.push(y(e))}),t};s=function(e){if(e&&f(e)){e.query=function(t){return m(t,e)},e.queryAll=function(t){return E(t,e)};var n=e.classList;e.hasClass=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=v(e,!0);return!!t&&n.contains(t)},e.addClass=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=v(r,!0);if(!o)return!1;var i=o.split(" ");return n.add.apply(n,t(i)),e},e.removeClass=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=v(r,!0);if(!o)return!1;var i=o.split(" ");return n.remove.apply(n,t(i)),e},e.toggleClass=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=v(t,!0);if(!r)return!1;var o=r.split(" ");return o.length>1?o.forEach(function(e){n.toggle(e)}):n.toggle(r),e},e.replaceClass=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=v(t,!0),o=v(n,!0);return e.removeClass(r),e.addClass(o),e},e.setProperty=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in t)if(""!==t[n]){var r=t[n];(i(r)||u(r))&&e.setAttribute(n,r)}return e};var o=function(e){return e.replace(/;+/gi,";").replace(/:/gi,": ")+";"};e.setStyle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=[];if(c(t)){for(var r in t)if(""!==t[r]){var a=t[r];if(i(a)||u(a)){var f=d(r,a);n.push([f.key,f.value].join(":"))}}}else i(t)&&(n=t.split(";"));var l=e.getAttribute("style");l&&(n=l.split(";").concat(n)),n.push("");var s=n.filter(function(e){return v(e,!0).length>0}).map(function(e){return e.split(":").map(function(e){return v(e,!0)}).join(":")}).join("; ");return e.setAttribute("style",o(s)),e},e.empty=function(){return e.innerHTML="",e},e.html=function(t){return r(t)?e.innerHTML:(e.innerHTML=t,e)},e.destroy=function(){e.parentNode&&e.parentNode.removeChild(e)},e.___BEHAVIORS_ATTACHED=1}return e};var A=function(){var e=function(e){var t=e.toLowerCase();return/gecko/i.test(t)}(p.userAgent);return{on:function(t,n,r){if(r&&o(r)){var u=i(t)?y(t):t;u&&f(u)&&("wheel"===n&&(n=e?"DOMMouseScroll":"mousewheel"),u.addEventListener?u.addEventListener(n,r,!1):u.attachEvent&&u.attachEvent("on"+n,r))}},off:function(e,t,n){if(n&&o(n)){var r=i(e)?y(e):e;r&&f(r)&&(r.removeEventListener?r.removeEventListener(t,n,!1):r.detachEvent&&r.detachEvent("on"+t,n))}},simulate:function(e,t){var n=void 0,r=i(e)?y(e):e;h.createEventObject?(n=h.createEventObject(),r.fireEvent("on"+t,n)):((n=h.createEvent("HTMLEvents")).initEvent(t,!0,!0),r.dispatchEvent(n))},stop:function(e){return e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),!1},locate:function(e){var t=e||g.event,n=t.target||t.srcElement;return n&&3===n.nodeType&&(n=n.parentNode),y(n)}}}();e.get=y,e.add=function(e,t){var n=t?y(t):h.body,r=f(e)?e:h.createElement(e);return n.appendChild(r),y(r)},e.create=function(e){return y(h.createElement(e))},e.query=m,e.queryAll=E,e.ready=function(e){"loading"!==h.readyState?setTimeout(e,0):h.addEventListener("DOMContentLoaded",e)},e.Event=A,Object.defineProperty(e,"__esModule",{value:!0})});