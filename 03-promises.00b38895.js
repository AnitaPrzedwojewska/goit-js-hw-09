function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n);var u=n("1GAPJ");const o=document.querySelector(".form"),a=o.querySelector("[name='delay']");a.setAttribute("verified","N");const s=o.querySelector("[name='step']");s.setAttribute("verified","N");const d=o.querySelector("[name='amount']");d.setAttribute("verified","N");const l=o.querySelector("[type='submit']");function f(e,t){return new Promise(((r,i)=>{setTimeout((()=>{Math.random()>.3?r(`✅ Fulfilled promise ${e} in ${t}ms`):i(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}l.disabled=!0,o.addEventListener("input",(t=>{if(t.target.value<=0)return e(u).Notify.warning("Please enter a number greater than 0"),void(l.disabled=!0);t.target.setAttribute("verified","Y"),"Y"==a.getAttribute("verified")&&"Y"==s.getAttribute("verified")&&"Y"==d.getAttribute("verified")&&(l.disabled=!1)})),o.addEventListener("submit",(()=>{event.preventDefault();const t=Number.parseInt(o.delay.value),r=Number.parseInt(o.step.value),i=Number.parseInt(o.amount.value);let n=1;for(f(n,t).then((t=>e(u).Notify.success(t))).catch((t=>e(u).Notify.failure(t))),n++;n<=i;){f(n,t+n*r).then((t=>e(u).Notify.success(t))).catch((t=>e(u).Notify.failure(t))),n++}}));
//# sourceMappingURL=03-promises.00b38895.js.map
