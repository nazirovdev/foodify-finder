(()=>{var t={43:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(c[u]=!0)}for(var f=0;f<t.length;f++){var s=[].concat(t[f]);r&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},313:t=>{"use strict";t.exports=function(t){return t[1]}},538:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}var o=function(t){"use strict";var n,e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,i=Object.create(o.prototype),c=new R(r||[]);return i._invoke=function(t,n,e){var r=p;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return M()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var a=S(c,e);if(a){if(a===v)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===p)throw r=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=d;var u=l(t,n,e);if("normal"===u.type){if(r=e.done?y:h,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=y,e.method="throw",e.arg=u.arg)}}}(t,e,c),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function b(){}function m(){}function w(){}var g={};f(g,c,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(T([])));_&&_!==e&&o.call(_,c)&&(g=_);var O=w.prototype=b.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function e(i,c,a,u){var f=l(t[i],t,c);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===r(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):n.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,u)}))}u(f.arg)}var i;this._invoke=function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:M}}function M(){return{value:n,done:!0}}return m.prototype=w,f(O,"constructor",w),f(w,"constructor",m),m.displayName=f(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},j(E.prototype),f(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var c=new E(s(n,e,r,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(O),f(O,u,"Generator"),f(O,c,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var u=o.call(c,"catchLoc"),f=o.call(c,"finallyLoc");if(u&&f){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},t}("object"===r(t=e.nmd(t))?t.exports:{});try{regeneratorRuntime=o}catch(t){"object"===("undefined"==typeof globalThis?"undefined":r(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},402:(t,n,e)=>{"use strict";e.d(n,{Z:()=>a});var r=e(313),o=e.n(r),i=e(43),c=e.n(i)()(o());c.push([t.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\napp-bar {\n    background-color: #1c6161;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nsearch-bar {\n    margin: 5em auto;\n    display: flex;\n    width: 60%;\n    justify-content: space-between;\n    padding: 0.8em;\n    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n}\n\nfood-list {\n    display: flex;\n    flex-wrap: wrap;\n    width: 80%;\n    justify-content: space-between;\n}\n\nfood-list.jancok {\n    color: red;\n    text-align: center;\n    display: block;\n    font-family: sans-serif;\n    font-size: 2em;\n    color: #1c6161;\n}\n\nfood-menu {\n    background-color: #e6e4e4;\n    display: block;\n    width: 27%;\n    margin-bottom: 2em;\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\n}\n\n/* food-menu img {\n    width: 100%;\n    height: 231px;\n    display: block;\n} */\n\n/* food-menu h1 {\n    font-family: sans-serif;\n    font-size: 1.5em;\n    display: flex;\n    justify-content: center;\n    padding: 0.5em;\n} */",""]);const a=c},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},c=[],a=0;a<t.length;a++){var u=t[a],f=r.base?u[0]+r.base:u[0],s=i[f]||0,l="".concat(f," ").concat(s);i[f]=s+1;var p=e(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var d=o(h,r);r.byIndex=a,n.splice(a,0,{identifier:l,updater:d,references:1})}c.push(l)}return c}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=e(i[c]);n[a].references--}for(var u=r(t,o),f=0;f<i.length;f++){var s=e(i[f]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=u}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,e),i.loaded=!0,i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";var t=e(379),n=e.n(t),r=e(795),o=e.n(r),i=e(569),c=e.n(i),a=e(565),u=e.n(a),f=e(216),s=e.n(f),l=e(589),p=e.n(l),h=e(402),d={};function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,n){if(n&&("object"===y(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function m(t){var n="function"==typeof Map?new Map:void 0;return m=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return w(t,arguments,_(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),x(r,t)},m(t)}function w(t,n,e){return w=g()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&x(o,e.prototype),o},w.apply(null,arguments)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function x(t,n){return x=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},x(t,n)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}d.styleTagTransform=p(),d.setAttributes=u(),d.insert=c().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=s(),n()(h.Z,d),h.Z&&h.Z.locals&&h.Z.locals,e(538);var O=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&x(t,n)}(c,t);var n,e,r,o,i=(n=c,e=g(),function(){var t,r=_(n);if(e){var o=_(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return b(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t}return r=c,(o=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this._shadowRoot.innerHTML="\n            <style>\n                h1 {\n                    font-family: sans-serif;\n                    color: #e7e7e7;\n                    font-size: 1.5em;\n                    cursor: default;\n                }\n            </style>\n        ",this._shadowRoot.innerHTML+="\n            <h1>Foodify Finder</h1>\n        "}}])&&v(r.prototype,o),c}(m(HTMLElement));function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function E(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,n){if(n&&("object"===j(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){var n="function"==typeof Map?new Map:void 0;return L=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return k(t,arguments,M(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),T(r,t)},L(t)}function k(t,n,e){return k=R()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&T(o,e.prototype),o},k.apply(null,arguments)}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function T(t,n){return T=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},T(t,n)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}customElements.define("app-bar",O);var P=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&T(t,n)}(c,t);var n,e,r,o,i=(n=c,e=R(),function(){var t,r=M(n);if(e){var o=M(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return S(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t}return r=c,(o=[{key:"connectedCallback",value:function(){this.render()}},{key:"foodList",set:function(t){this._food=t,this.render()}},{key:"render",value:function(){this._shadowRoot.innerHTML="\n            <style>\n                .card {\n                    box-shadow:3px 3px 10px rgba(0,0,0,0.5);\n                    background: #f2f2f2;\n                    border-radius:10px;\n                    overflow: hidden;\n                    margin-bottom:2.5em;\n                }\n\n                img {\n                    width: 100%;\n                    height: 234px;\n                    display: block;\n                }\n\n                h1 {\n                    font-family: sans-serif;\n                    font-size:1em;\n                    display:flex;\n                    justify-content: center;\n                }\n            </style>\n        ",this._shadowRoot.innerHTML+='\n            <div class="card">\n                <div class="img-card">\n                    <img src="'.concat(this._food.strMealThumb,'" alt="">\n                </div>\n                <div class="title-card">\n                    <h1>').concat(this._food.strMeal,"</h1>\n                </div>\n            </div>\n        ")}}])&&E(r.prototype,o),c}(L(HTMLElement));function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function F(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H(t,n){if(n&&("object"===C(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function N(t){var n="function"==typeof Map?new Map:void 0;return N=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return I(t,arguments,A(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),z(r,t)},N(t)}function I(t,n,e){return I=B()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&z(o,e.prototype),o},I.apply(null,arguments)}function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function z(t,n){return z=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},z(t,n)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}customElements.define("food-menu",P);var G=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&z(t,n)}(c,t);var n,e,r,o,i=(n=c,e=B(),function(){var t,r=A(n);if(e){var o=A(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return H(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t}return r=c,(o=[{key:"foodLists",set:function(t){this._food=t,this.render()}},{key:"errorMessage",set:function(t){this._shadowRoot.innerHTML="",this.setAttribute("class","jancok"),this.classList.add("jancok"),this._shadowRoot.innerHTML+=t}},{key:"render",value:function(){var t=this;this.classList.remove("jancok"),this._shadowRoot.innerHTML="\n            <style>\n            \n            </style>\n        ",this._shadowRoot.innerHTML+="",this._food.forEach((function(n){var e=document.createElement("food-menu");e.foodList=n,t._shadowRoot.appendChild(e)}))}}])&&F(r.prototype,o),c}(N(HTMLElement));function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function q(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Z(t,n){if(n&&("object"===D(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){var n="function"==typeof Map?new Map:void 0;return U=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return Y(t,arguments,Q(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),K(r,t)},U(t)}function Y(t,n,e){return Y=J()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&K(o,e.prototype),o},Y.apply(null,arguments)}function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function K(t,n){return K=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},K(t,n)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}customElements.define("food-list",G);var V=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&K(t,n)}(c,t);var n,e,r,o,i=(n=c,e=J(),function(){var t,r=Q(n);if(e){var o=Q(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Z(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t}return r=c,(o=[{key:"connectedCallback",value:function(){this.render()}},{key:"value",get:function(){return this._shadowRoot.querySelector("#searchInput").value}},{key:"eventClick",set:function(t){this._event=t,this.render()}},{key:"render",value:function(){this._shadowRoot.innerHTML="\n            <style>\n                ::placeholder {\n                    color: #1c6161;\n                    font-size: 15px;\n                }\n\n                input {\n                    width: 80%;\n                    outline: none;\n                    border: none;\n                    padding: 0.4em;\n                    border-bottom: solid 1px #1c6161;\n                }\n                \n                input:focus {\n                    color: #1c6161;\n                    border-bottom: solid 2px #1c6161;\n                    font-size: 15px;\n                }\n                \n                input:focus::placeholder {\n                    color: #1c6161;\n                    font-weight: 600;\n                }\n\n                button {\n                    display: block;\n                    width: 150px;\n                    background-color: #1c6161;\n                    outline: none;\n                    border-style: none;\n                    color: #e7e7e7;\n                    text-transform: uppercase;\n                    padding: 0.7em;\n                    cursor: pointer;\n                    font-size: 0.9em;\n                    border-radius: 5px;\n                    transition: 0.2s;\n                }\n                \n                button:hover {\n                    background-color: #298585;\n                }\n                \n                button:active {\n                    background-color: #1c6161;\n                }\n            </style>\n        ",this._shadowRoot.innerHTML+='\n            <input type="search" id="searchInput" placeholder="Masukan Menu Makanan">\n            <button id="searchButton">Search</button>\n        ',this._shadowRoot.querySelector("#searchButton").addEventListener("click",this._event)}}])&&q(r.prototype,o),c}(U(HTMLElement));function W(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}customElements.define("search-bar",V);const X=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e;return n=t,e=[{key:"searchFood",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("https://themealdb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(t){return t})).then((function(t){return t.json()})).then((function(n){return n.meals.filter((function(n){return n.strMeal.toLowerCase().includes(t.toLowerCase())}))})).catch((function(n){throw new Error("".concat(t," Not Found"))}))}}],null&&W(n.prototype,null),e&&W(n,e),t}();function $(t,n,e,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(r,o)}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("search-bar"),n=document.querySelector("food-list"),e=function(){var n,e=(n=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,X.searchFood(t.value);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function c(t){$(i,r,o,c,a,"next",t)}function a(t){$(i,r,o,c,a,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(t){n.foodLists=t},o=function(t){n.errorMessage=t};t.eventClick=e}))})()})();