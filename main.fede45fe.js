parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
!function(){var n=document.querySelectorAll("[data-menu-item-parent]"),e=document.querySelectorAll(".nav__content__overlay"),t=document.querySelector(".nav__content"),c=document.querySelectorAll(".nav__content__link-group");n.forEach(function(n){n.addEventListener("click",function(){var e=n.dataset.id;"0"===e&&t.classList.add("in"),c.forEach(function(n){n.classList.remove("in"),n.dataset.sourceId===e&&n.classList.add("in")})})}),e.forEach(function(n){n.addEventListener("click",function(){t.classList.remove("in"),c.forEach(function(n){n.classList.remove("in")})})})}();
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.fede45fe.js.map