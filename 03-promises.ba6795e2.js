!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var u=i("ejkSG"),o=document.querySelector(".form"),a=o.querySelector("[name='delay']");a.setAttribute("verified","N");var f=o.querySelector("[name='step']");f.setAttribute("verified","N");var d=o.querySelector("[name='amount']");d.setAttribute("verified","N");var c=o.querySelector("[type='submit']");function l(e,t){return new Promise((function(r,n){setTimeout((function(){Math.random()>.3?r("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):n("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}c.disabled=!0,o.addEventListener("input",(function(t){if(t.target.value<=0)return e(u).Notify.warning("Please enter a number greater than 0"),void(c.disabled=!0);t.target.setAttribute("verified","Y"),"Y"==a.getAttribute("verified")&&"Y"==f.getAttribute("verified")&&"Y"==d.getAttribute("verified")&&(c.disabled=!1)})),o.addEventListener("submit",(function(){event.preventDefault();var t=Number.parseInt(o.delay.value),r=Number.parseInt(o.step.value),n=Number.parseInt(o.amount.value),i=1;for(l(i,t).then((function(t){return e(u).Notify.success(t)})).catch((function(t){return e(u).Notify.failure(t)})),i++;i<=n;){l(i,t+i*r).then((function(t){return e(u).Notify.success(t)})).catch((function(t){return e(u).Notify.failure(t)})),i++}}))}();
//# sourceMappingURL=03-promises.ba6795e2.js.map
