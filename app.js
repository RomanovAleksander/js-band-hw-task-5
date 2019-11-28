!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);var n=function e(t){var r=t.model,n=t.costByCargo,o=t.costByDistance;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=r,this.costByCargo=n,this.costByDistance=o};function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.instance?e.instance:(e.instance=this,this.prefix="JS-Band-",this)}var t,r,n;return t=e,(r=[{key:"getItem",value:function(e){return JSON.parse(localStorage.getItem("".concat(this.prefix).concat(e)))}},{key:"setItem",value:function(e,t){return localStorage.setItem("".concat(this.prefix).concat(e),JSON.stringify(t))}}])&&o(t.prototype,r),n&&o(t,n),e}(),c="transport",i="costs";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,l(t).call(this,e))).transport=[],r.costs=[],r.storage=new a,r.transportKey="".concat(r.prefix).concat(c),r.costsKey="".concat(r.prefix).concat(i),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"getItemsFromLocalStorage",value:function(){console.log(localStorage),localStorage[this.transportKey]&&(this.transport=this.storage.getItem(c)||[],this.renderList(this.transport)),localStorage[this.costsKey]&&(this.costs=this.storage.getItem(i)||[],this.renderList(this.costs))}},{key:"renderList",value:function(e){var t=this;e.forEach((function(e){t.renderLogic(e)}))}},{key:"renderLogic",value:function(e){var t=document.querySelector(".costs-list-header"),r=document.querySelector(".transport-list-header");e.costOfCargo?this.renderItem(t,e):this.renderItem(r,e)}},{key:"renderItem",value:function(e,t){var r=t.type?t.type:"Cost";e.insertAdjacentHTML("afterEnd",'\n      <div class="list-item">\n      <div class="item-text"><b>'.concat(r,"</b></div>\n        ").concat(function(e){var t="";for(var r in e)e.hasOwnProperty(r)&&(t+='<div class="item-text"><span>'.concat(r,":</span> <i>").concat(e[r],"</i></div>"));return t}(t),"\n      </div>\n      "))}}])&&s(r.prototype,n),o&&s(r,o),t}(a);function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var b=function(){function e(t,r,n,o,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=Date.now(),this.model=r,this.producedYear=n,this.capacity=o,this.averageSpeed=a}var t,r,n;return t=e,(r=[{key:"showCapacityInPounds",value:function(){return this.capacity=2.2046*this.capacity,"Capacity in pounds ".concat(this.capacity,"nm.")}},{key:"showAverageSpeed",value:function(){return"Average is ".concat(this.averageSpeed)}}])&&h(t.prototype,r),n&&h(t,n),e}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(e){var r,n=e.id,o=e.model,a=e.producedYear,c=e.capacity,i=e.averageSpeed,u=e.name,s=e.countOfTeam;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=d(this,g(t).call(this,n,o,a,c,i))).name=u,r.countOfTeam=s,r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),r=t,(n=[{key:"showAverageSpeed",value:function(){return"Average speed = ".concat(this.averageSpeed,"nm.")}}])&&m(r.prototype,n),o&&m(r,o),t}(b);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var r,n=e.id,o=e.model,a=e.producedYear,c=e.capacity,i=e.averageSpeed,u=e.licensePlate,s=e.typeOfGas;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=_(this,P(t).call(this,n,o,a,c,i))).licensePlate=u,r.typeOfGas=s,r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),r=t,(n=[{key:"showAverageSpeed",value:function(){return"Average speed = ".concat(this.averageSpeed,"km.")}}])&&j(r.prototype,n),o&&j(r,o),t}(b);function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,n=[{key:"create",value:function(e,t){switch(e){case"ship":return new O(t);case"truck":return new E(t)}}}],(r=null)&&T(t.prototype,r),n&&T(t,n),e}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}new(function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=I(this,L(t).call(this))).forms=e,r.init(),r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),r=t,(o=[{key:"init",value:function(){this.getItemsFromLocalStorage(),this.forms.addEventListener("submit",this.submitEvent.bind(this))}},{key:"submitEvent",value:function(e){e.preventDefault();var t=e.target,r=t.querySelector(".model"),o=t.querySelector(".producedYear"),a=t.querySelector(".capacity"),c=t.querySelector(".averageSpeed"),i={};switch("form-costs"!==t.className&&this.setData(i,r,o,a,c),t.className){case"form-ship":var u=t.querySelector(".name"),s=t.querySelector(".countOfTeam");i.type="Ship",this.setData(i,u,s),x.create("ship",i),this.transport.push(i),this.renderLogic(i),this.clearValues(r,o,a,c,u,s);break;case"form-truck":var f=t.querySelector(".licensePlate"),l=t.querySelector(".typeOfGas");i.type="Truck",this.setData(i,f,l),x.create("truck",i),this.transport.push(i),this.renderLogic(i),this.clearValues(r,o,a,c,f,l);break;case"form-costs":var p=t.querySelector(".transportModel"),y=t.querySelector(".costOfCargo"),h=t.querySelector(".costOfDistance");this.setData(i,p,y,h),new n(i),this.costs.push(i),this.renderLogic(i),this.clearValues(p,y,h)}this.storage.setItem("transport",this.transport),this.storage.setItem("costs",this.costs)}},{key:"setData",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];r.forEach((function(t){e[t.name]=t.value}))}},{key:"clearValues",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){e.value=""}))}}])&&q(r.prototype,o),a&&q(r,a),t}(y))(document.querySelector(".forms"))}]);