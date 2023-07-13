import{r as p}from"./index-c4905b50.js";var y=function(){return y=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},y.apply(this,arguments)};function W(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function Z(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,i;r<a;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}var b="right-scroll-bar-position",w="width-before-scroll-bar",k="with-scroll-bars-hidden",R="--removed-body-scroll-bar-size";function j(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function N(e,n){var t=p.useState(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(r){var a=t.value;a!==r&&(t.value=r,t.callback(r,a))}}}})[0];return t.callback=n,t.facade}function $(e,n){return N(n||null,function(t){return e.forEach(function(r){return j(r,t)})})}function P(e){return e}function T(e,n){n===void 0&&(n=P);var t=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(i){var u=n(i,r);return t.push(u),function(){t=t.filter(function(o){return o!==u})}},assignSyncMedium:function(i){for(r=!0;t.length;){var u=t;t=[],u.forEach(i)}t={push:function(o){return i(o)},filter:function(){return t}}},assignMedium:function(i){r=!0;var u=[];if(t.length){var o=t;t=[],o.forEach(i),u=t}var m=function(){var s=u;u=[],s.forEach(i)},d=function(){return Promise.resolve().then(m)};d(),t={push:function(s){u.push(s),d()},filter:function(s){return u=u.filter(s),t}}}};return a}function ee(e){e===void 0&&(e={});var n=T(null);return n.options=y({async:!0,ssr:!1},e),n}var _=function(e){var n=e.sideCar,t=W(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,y({},t))};_.isSideCarExport=!0;function ne(e,n){return e.useMedium(n),_}var O,I=function(){if(O)return O;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function z(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=I();return n&&e.setAttribute("nonce",n),e}function B(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function D(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var G=function(){var e=0,n=null;return{add:function(t){e==0&&(n=z())&&(B(n,t),D(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},L=function(){var e=G();return function(n,t){p.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},Q=function(){var e=L(),n=function(t){var r=t.styles,a=t.dynamic;return e(r,a),null};return n},q={left:0,top:0,right:0,gap:0},S=function(e){return parseInt(e||"",10)||0},H=function(e){var n=window.getComputedStyle(document.body),t=n[e==="padding"?"paddingLeft":"marginLeft"],r=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[S(t),S(r),S(a)]},K=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return q;var n=H(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},V=Q(),F=function(e,n,t,r){var a=e.left,i=e.top,u=e.right,o=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(k,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(b,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(w,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(b," .").concat(b,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(w," .").concat(w,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(R,": ").concat(o,`px;
  }
`)},te=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,i=p.useMemo(function(){return K(a)},[a]);return p.createElement(V,{styles:F(i,!n,a,t?"":"!important")})},J=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},l=new WeakMap,h=new WeakMap,g={},x=0,M=function(e){return e&&(e.host||M(e.parentNode))},U=function(e,n){return n.map(function(t){if(e.contains(t))return t;var r=M(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},X=function(e,n,t,r){var a=U(n,Array.isArray(e)?e:[e]);g[t]||(g[t]=new WeakMap);var i=g[t],u=[],o=new Set,m=new Set(a),d=function(c){!c||o.has(c)||(o.add(c),d(c.parentNode))};a.forEach(d);var s=function(c){!c||m.has(c)||Array.prototype.forEach.call(c.children,function(f){if(o.has(f))s(f);else{var v=f.getAttribute(r),E=v!==null&&v!=="false",A=(l.get(f)||0)+1,C=(i.get(f)||0)+1;l.set(f,A),i.set(f,C),u.push(f),A===1&&E&&h.set(f,!0),C===1&&f.setAttribute(t,"true"),E||f.setAttribute(r,"true")}})};return s(n),o.clear(),x++,function(){u.forEach(function(c){var f=l.get(c)-1,v=i.get(c)-1;l.set(c,f),i.set(c,v),f||(h.has(c)||c.removeAttribute(r),h.delete(c)),v||c.removeAttribute(t)}),x--,x||(l=new WeakMap,l=new WeakMap,h=new WeakMap,g={})}},re=function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=n||J(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),X(r,a,t,"aria-hidden")):function(){return null}};export{te as R,W as _,y as a,Z as b,ee as c,ne as e,w as f,re as h,Q as s,$ as u,b as z};
//# sourceMappingURL=index-335037e7.js.map
