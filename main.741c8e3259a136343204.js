(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(e,t,r){},QPpE:function(e,t,r){var n=r("mp5j");e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,n,s){var a,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,i="function",o=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<span class="data-results-title data-results-title__green">Profit</span>\r\n<ul class="data-results-list">\r\n  <li class="data-results-list-item">\r\n    <span class="data-results-percent">1%</span>\r\n    <span class="data-results-currency currency-profit-js">'+o(typeof(a=null!=(a=u(r,"profitPrice1Percent")||(null!=t?u(t,"profitPrice1Percent"):t))?a:c)===i?a.call(l,{name:"profitPrice1Percent",hash:{},data:s,loc:{start:{line:5,column:59},end:{line:5,column:82}}}):a)+'</span>\r\n  </li>\r\n  <li class="data-results-list-item">\r\n    <span class="data-results-percent">2%</span>\r\n    <span class="data-results-currency currency-profit-js">'+o(typeof(a=null!=(a=u(r,"profitPrice2Percent")||(null!=t?u(t,"profitPrice2Percent"):t))?a:c)===i?a.call(l,{name:"profitPrice2Percent",hash:{},data:s,loc:{start:{line:9,column:59},end:{line:9,column:82}}}):a)+'</span>\r\n  </li>\r\n  <li class="data-results-list-item">\r\n    <span class="data-results-percent">5%</span>\r\n    <span class="data-results-currency currency-profit-js">'+o(typeof(a=null!=(a=u(r,"profitPrice5Percent")||(null!=t?u(t,"profitPrice5Percent"):t))?a:c)===i?a.call(l,{name:"profitPrice5Percent",hash:{},data:s,loc:{start:{line:13,column:59},end:{line:13,column:82}}}):a)+'</span>\r\n  </li>\r\n  <li class="data-results-list-item">\r\n    <span class="data-results-percent">15%</span>\r\n    <span class="data-results-currency currency-profit-js">'+o(typeof(a=null!=(a=u(r,"profitPrice15Percent")||(null!=t?u(t,"profitPrice15Percent"):t))?a:c)===i?a.call(l,{name:"profitPrice15Percent",hash:{},data:s,loc:{start:{line:17,column:59},end:{line:17,column:83}}}):a)+'</span>\r\n  </li>\r\n</ul>\r\n<span class="data-results-title data-results-title__red">Loss</span>\r\n<ul class="data-results-list">\r\n  <li class="data-results-list-item data-results-list__red">\r\n    <span class="data-results-percent">1%</span>\r\n    <span class="data-results-currency currency-loss-js">'+o(typeof(a=null!=(a=u(r,"lossPrice1Percent")||(null!=t?u(t,"lossPrice1Percent"):t))?a:c)===i?a.call(l,{name:"lossPrice1Percent",hash:{},data:s,loc:{start:{line:24,column:57},end:{line:24,column:78}}}):a)+'</span>\r\n  </li>\r\n  <li class="data-results-list-item data-results-list__red">\r\n    <span class="data-results-percent">2%</span>\r\n    <span class="data-results-currency currency-loss-js">'+o(typeof(a=null!=(a=u(r,"lossPrice2Percent")||(null!=t?u(t,"lossPrice2Percent"):t))?a:c)===i?a.call(l,{name:"lossPrice2Percent",hash:{},data:s,loc:{start:{line:28,column:57},end:{line:28,column:78}}}):a)+'</span>\r\n  </li>\r\n  <li class="data-results-list-item data-results-list__red">\r\n    <span class="data-results-percent">5%</span>\r\n    <span class="data-results-currency currency-loss-js">'+o(typeof(a=null!=(a=u(r,"lossPrice5Percent")||(null!=t?u(t,"lossPrice5Percent"):t))?a:c)===i?a.call(l,{name:"lossPrice5Percent",hash:{},data:s,loc:{start:{line:32,column:57},end:{line:32,column:78}}}):a)+'</span>\r\n  </li>\r\n  <li class="data-results-list-item data-results-list__red">\r\n    <span class="data-results-percent">15%</span>\r\n    <span class="data-results-currency currency-loss-js">'+o(typeof(a=null!=(a=u(r,"lossPrice15Percent")||(null!=t?u(t,"lossPrice15Percent"):t))?a:c)===i?a.call(l,{name:"lossPrice15Percent",hash:{},data:s,loc:{start:{line:36,column:57},end:{line:36,column:79}}}):a)+"</span>\r\n  </li>\r\n</ul>"},useData:!0})},QfWi:function(e,t,r){"use strict";r.r(t);r("1DEj"),r("RtS0"),r("ZEAQ"),r("3dw1");var n=r("QPpE"),s=r.n(n),a=document.querySelectorAll(".input-price-js"),l=document.querySelector(".results-card-one-js"),c=document.querySelector(".results-card-two-js"),i=document.querySelector(".results-card-three-js"),o=document.querySelector(".results-card-four-js"),u=document.querySelectorAll(".reset-btn-js");a.forEach((function(e){e.addEventListener("input",(function(t){var r,n=e.value,a=t.target.id;if(r={profitPrice1Percent:(1.01*n).toFixed(5),profitPrice2Percent:(1.02*n).toFixed(5),profitPrice5Percent:(1.05*n).toFixed(5),profitPrice15Percent:(1.15*n).toFixed(5),lossPrice1Percent:(.99*n).toFixed(5),lossPrice2Percent:(.98*n).toFixed(5),lossPrice5Percent:(.95*n).toFixed(5),lossPrice15Percent:(.85*n).toFixed(5)},"one"===a){var u=s()(r);l.innerHTML="",l.insertAdjacentHTML("beforeend",u),localStorage.setItem("card1",n)}if("two"===a){var d=s()(r);c.innerHTML="",c.insertAdjacentHTML("beforeend",d)}if("three"===a){var p=s()(r);i.innerHTML="",i.insertAdjacentHTML("beforeend",p)}if("four"===a){var P=s()(r);o.innerHTML="",o.insertAdjacentHTML("beforeend",P)}}))})),u.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.id;"one"===t&&(l.innerHTML="",l.insertAdjacentHTML("beforeend",'<span class="default-text">Enter data</span>')),"two"===t&&(c.innerHTML="",c.insertAdjacentHTML("beforeend",'<span class="default-text">Enter data</span>')),"three"===t&&(i.innerHTML="",i.insertAdjacentHTML("beforeend",'<span class="default-text">Enter data</span>')),"four"===t&&(o.innerHTML="",o.insertAdjacentHTML("beforeend",'<span class="default-text">Enter data</span>'))}))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.741c8e3259a136343204.js.map