parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
var e,n=document.querySelector(".navbar"),t=document.querySelectorAll(".nav-link-span"),o=function(){document.querySelectorAll(".main__section").forEach(function(e){ScrollReveal({duration:1e3}).reveal(e,{delay:300})})},c=document.querySelectorAll(".slider-trigger-button"),l=function n(t){var o=document.querySelectorAll(".slider__testimonial");o.forEach(function(e){e.style.display="none"}),c.forEach(function(e){e.style.backgroundColor="rgb(42, 14, 2)"}),o[t].style.display="flex",c[t].style.backgroundColor="#ffffff",t=t<=1?t+1:0,e=setTimeout(function(){n(t)},3500)},r=function(){for(var e=document.querySelectorAll(".rounded__anchor-screens"),n=document.querySelectorAll(".slider__screen-image"),t=function(t){for(var o=function(o){t==o&&e[t].addEventListener("click",function(){e.forEach(function(e){e.classList.remove("active-anchor")}),n.forEach(function(e){e.style.display="none"}),e[t].classList.add("active-anchor"),n[o].style.display="flex"})},c=0;c<n.length;c++)o(c)},o=0;o<e.length;o++)t(o)};function i(n){console.log("testimonial id : ",e),clearInterval(e),l(n)}var s=document.querySelector("#screenButtonLeft"),a=document.querySelector("#screenButtonRight"),d=document.querySelector("#secondScreenButtonLeft"),u=document.querySelector("#secondScreenButtonRight"),f=0,y=0,v=function(e,n,t){for(var o=0;o<t.length;o++)t[o].style.display="none";console.log("index : ",n),n>=0&&n<2?(t[n].style.display="flex","counter"==e?f++:y++):(n=n%2==0?0:1,console.log("Index else block : ",n),t[n].style.display="flex","counter"==e?(f=f%2==0?0:1,f++):(y=y%2==0?0:1,y++))};s.addEventListener("click",function(){var e=document.querySelectorAll(".slider__slider-item--screens--first-section");v("counter",f-1,e)}),a.addEventListener("click",function(){var e=document.querySelectorAll(".slider__slider-item--screens--first-section");v("counter",f+1,e)}),d.addEventListener("click",function(){var e=document.querySelectorAll(".slider__slider-item--screens--second-section");v("secondCounter",y-1,e)}),u.addEventListener("click",function(){var e=document.querySelectorAll(".slider__slider-item--screens--second-section");v("secondCounter",y+1,e)}),window.addEventListener("scroll",function(){window.pageYOffset>n.offsetTop?(n.classList.add("navbar--sticky"),t.forEach(function(e){e.classList.add("nav-link-span--backgroundColor")}),document.querySelector(".header").style.paddingTop="0px"):(n.classList.remove("navbar--sticky"),t.forEach(function(e){e.classList.remove("nav-link-span--backgroundColor")}),document.querySelector(".header").style.paddingTop="40px")}),window.addEventListener("load",function(){o(),l(0),r();var e=document.getElementById("nav_link_trigger"),n=document.querySelector(".nav-links"),t=document.querySelectorAll(".nav-links .nav-links__div"),c=!1;e.addEventListener("click",function(){0==c?(n.classList.add("link-animate"),n.style.display="flex",console.log("should effect")):(n.classList.remove("link-animate"),n.classList.add("link-animate-close"),setTimeout(function(){n.classList.remove("link-animate-close"),n.style.display="none"},900)),c=!c,t.forEach(function(e){e.addEventListener("click",function(e){c=!1,n.style.display="none"})})});for(var s=document.querySelectorAll(".slider-trigger-button"),a=function(e){s[e].addEventListener("click",function(){i(e)})},d=0;d<s.length;d++)a(d)});
},{}]},{},["QdeU"], null)
//# sourceMappingURL=/app.a14d6fc6.js.map