!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||f.default(e,t)||l.default()};var u=s(o("8slrw")),a=s(o("7AJDX")),l=s(o("ifqQW")),f=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var c=o("h6c0i");function d(e,t){return new Promise((function(r,n){setTimeout((function(){Math.random()>.3&&r({position:e,delay:t}),n({position:e,delay:t})}),t)}))}function p(e){var t=e.position,r=e.delay;c.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))}function y(e){var t=e.position,r=e.delay;c.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var r=t.currentTarget,n=new FormData(r),o={},u=!0,a=!1,l=void 0;try{for(var f,s=n.entries()[Symbol.iterator]();!(u=(f=s.next()).done);u=!0){var c=e(i)(f.value,2),v=c[0],m=c[1];o[v]=Number(m)}}catch(e){a=!0,l=e}finally{try{u||null==s.return||s.return()}finally{if(a)throw l}}r.reset();for(var b=1;b<=o.amount;b+=1)d(b,o.delay).then(p).catch(y),o.delay=o.delay+o.step}))}();
//# sourceMappingURL=03-promises.fc204a14.js.map
