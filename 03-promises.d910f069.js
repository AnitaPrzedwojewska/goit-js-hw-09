function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o("1GAPJ");const a=document.querySelector(".form");a.querySelector("[name='delay']"),a.querySelector("[name='step']"),a.querySelector("[name='amount']");let u={};a.querySelector("[type='submit']");a.addEventListener("input",(t=>{t.target.value<=0&&e(l).Notify.warning("Please enter a number greater than 0")})),a.addEventListener("submit",(e=>{e.preventDefault(),u={delay:a.delay.value,step:a.step.value,amount:a.amount.value};for(let e=1;e<=u.amount;e++)console.log(`Promise ${e}`)}));
//# sourceMappingURL=03-promises.d910f069.js.map
