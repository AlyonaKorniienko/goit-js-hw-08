function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function T(e){return c=e,u=setTimeout(S,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function S(){var e=p();if(j(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function h(e){return u=void 0,g&&r?b(e):(r=i=void 0,a)}function w(){var e=p(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,v(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(p())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector("input"),inputMessage:document.querySelector("textarea")},T={};b.form.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements,n=t.email.value,r=t.message.value,i={email:n,message:r};console.log(i),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),b.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(b.inputEmail.value=t.email,b.inputMessage.value=t.message)}();
//# sourceMappingURL=03-feedback.349fafd5.js.map
