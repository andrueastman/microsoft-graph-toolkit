!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){var n,a,c;n=e,a=r,c=o[r],(a=t(a))in n?Object.defineProperty(n,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[a]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var o=self,a=new Map;o.onconnect=function(e){var t=e.ports[0];t.onmessage=function(e){var r=e.data,o=r.delay,c=r.id;switch(r.type){case"setInterval":var i=setInterval((function(){var r=n(n({},e.data),{type:"runCallback"});t.postMessage(r)}),o);a.set(c,i);break;case"setTimeout":var u=setTimeout((function(){var r=n(n({},e.data),{type:"runCallback"});t.postMessage(r)}),o);a.set(c,u);break;case"clearTimeout":clearTimeout(a.get(c)),a.delete(c);break;case"clearInterval":clearInterval(a.get(c)),a.delete(c)}}}}();
//# sourceMappingURL=timer-worker.2b558275.chunk.js.map