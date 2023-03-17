"use strict";(self.webpackChunkcolor_converter=self.webpackChunkcolor_converter||[]).push([[833],{5088:function(e,r,t){t.d(r,{A:function(){return l},Gg:function(){return i}});var n=t(7462),o=255,a=100,i=function(e){var r=s(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},s=function(e){var r=e.h,t=e.s,n=e.v,o=e.a,i=(200-t)*n/a;return{h:r,s:i>0&&i<200?t*n/a/(i<=a?i:200-i)*a:0,l:i/2,a:o}},u=(Math.PI,function(e){var r,t=e.r,n=e.g,o=e.b;return"#"+(r=(t<<16|n<<8|o).toString(16),new Array(7-r.length).join("0")+r)}),c=function(e){var r=e.h,t=e.s,i=e.v,s=e.a,u=r/60,c=t/a,l=i/a,f=Math.floor(u)%6,d=u-Math.floor(u),p=o*l*(1-c),h=o*l*(1-c*d),g=o*l*(1-c*(1-d));l*=o;var v={};switch(f){case 0:v.r=l,v.g=g,v.b=p;break;case 1:v.r=h,v.g=l,v.b=p;break;case 2:v.r=p,v.g=l,v.b=g;break;case 3:v.r=p,v.g=h,v.b=l;break;case 4:v.r=g,v.g=p,v.b=l;break;case 5:v.r=l,v.g=p,v.b=h}return v.r=Math.round(v.r),v.g=Math.round(v.g),v.b=Math.round(v.b),(0,n.Z)({},v,{a:s})},l=function(e){return u(c(e))}},4689:function(e,r,t){t.d(r,{Z:function(){return g}});var n=t(7462),o=t(3366),a=t(2791),i=t(5088),s=t(5894),u=t(184),c=function(e){var r=e.className,t=e.prefixCls,n=e.left,o=e.top,i={position:"absolute",left:n,top:o};return(0,a.useMemo)((function(){return(0,u.jsx)("div",{className:t+"-pointer "+(r||""),style:i,children:(0,u.jsx)("div",{className:t+"-fill",style:{width:18,height:18,transform:n?"translate(-9px, -1px)":"translate(-1px, -9px)",boxShadow:"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:"50%",backgroundColor:"rgb(248, 248, 248)"}})})}),[r,n,o,t])},l=["prefixCls","className","hsva","background","bgProps","innerProps","radius","width","height","direction","style","onChange","pointer"],f=a.forwardRef((function(e,r){var t=e.prefixCls,f=void 0===t?"w-color-alpha":t,d=e.className,p=e.hsva,h=e.background,g=e.bgProps,v=void 0===g?{}:g,b=e.innerProps,w=void 0===b?{}:b,x=e.radius,m=void 0===x?0:x,y=e.width,A=e.height,C=void 0===A?16:A,j=e.direction,Z=void 0===j?"horizontal":j,O=e.style,k=e.onChange,N=e.pointer,P=(0,o.Z)(e,l),R=(0,a.useCallback)((function(e){k&&k((0,n.Z)({},p,{a:"horizontal"===Z?e.left:e.top}),e)}),[p]),E=(0,i.Gg)(Object.assign({},p,{a:1})),D="linear-gradient(to "+("horizontal"===Z?"right":"bottom")+", rgba(244, 67, 54, 0) 0%, "+E+" 100%)",M={};return"horizontal"===Z?M.left=100*p.a+"%":M.top=100*p.a+"%",(0,u.jsxs)("div",(0,n.Z)({},P,{className:[f,f+"-"+Z,d||""].filter(Boolean).join(" "),style:(0,n.Z)({borderRadius:m,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center",backgroundColor:"#fff"},O,{position:"relative"},{width:y,height:C}),ref:r,children:[(0,u.jsx)("div",(0,n.Z)({},v,{style:(0,n.Z)({inset:0,position:"absolute",background:h||D,borderRadius:m},v.style)})),(0,u.jsx)(s.ZP,(0,n.Z)({},w,{style:(0,n.Z)({},w.style,{inset:0,zIndex:1,position:"absolute"}),onMove:R,onDown:R,children:a.createElement(N||c,(0,n.Z)({prefixCls:f},M))}))]}))}));f.displayName="Aplha";var d=f,p=["prefixCls","className","hue","onChange","direction"],h=a.forwardRef((function(e,r){var t=e.prefixCls,a=void 0===t?"w-color-hue":t,i=e.className,s=e.hue,c=void 0===s?0:s,l=e.onChange,f=e.direction,h=void 0===f?"horizontal":f,g=(0,o.Z)(e,p);return(0,u.jsx)(d,(0,n.Z)({ref:r,className:a+" "+(i||"")},g,{direction:h,background:"linear-gradient(to "+("horizontal"===h?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:c,s:100,v:100,a:c/360},onChange:function(e,r){l&&l({h:"horizontal"===h?360*r.left:360*r.top})}}))}));h.displayName="Hue";var g=h},4742:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(7462),o=t(3366),a=t(2791),i=t(5088),s=t(5894),u=t(184),c=function(e){var r=e.className,t=e.color,n=e.left,o=e.top,i=e.prefixCls,s={position:"absolute",top:o,left:n};return(0,a.useMemo)((function(){return(0,u.jsx)("div",{className:i+"-pointer "+(r||""),style:s,children:(0,u.jsx)("div",{className:i+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:t}})})}),[o,n,t,r,i])},l=["prefixCls","radius","pointer","className","style","hsva","onChange"],f=a.forwardRef((function(e,r){var t=e.prefixCls,f=void 0===t?"w-color-saturation":t,d=e.radius,p=void 0===d?0:d,h=e.pointer,g=e.className,v=e.style,b=e.hsva,w=e.onChange,x=(0,o.Z)(e,l),m=(0,n.Z)({width:200,height:200,borderRadius:p},v,{position:"relative"}),y=function(e,r){w&&w({h:b.h,s:100*e.left,v:100*(1-e.top),a:b.a})},A={top:100-b.v+"%",left:b.s+"%",color:(0,i.Gg)(b)};return(0,u.jsx)(s.ZP,(0,n.Z)({className:[f,g||""].filter(Boolean).join(" ")},x,{style:(0,n.Z)({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+b.h+", 100%, 50%))"},m),ref:r,onMove:y,onDown:y,children:a.createElement(h||c,(0,n.Z)({prefixCls:f},A))}))}));f.displayName="Saturation";var d=f},5894:function(e,r,t){t.d(r,{ZP:function(){return g}});var n=t(9439),o=t(7462),a=t(3366),i=t(2791);function s(e){var r=(0,i.useRef)(e);return(0,i.useEffect)((function(){r.current=e})),(0,i.useCallback)((function(e,t){return r.current&&r.current(e,t)}),[])}var u=function(e){return"touches"in e},c=function(e){!u(e)&&e.preventDefault&&e.preventDefault()},l=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},f=function(e,r){var t=e.getBoundingClientRect(),n=u(r)?r.touches[0]:r;return{left:l((n.pageX-(t.left+window.pageXOffset))/t.width),top:l((n.pageY-(t.top+window.pageYOffset))/t.height),width:t.width,height:t.height,x:n.pageX-(t.left+window.pageXOffset),y:n.pageY-(t.top+window.pageYOffset)}},d=t(184),p=["prefixCls","className","onMove","onDown"],h=i.forwardRef((function(e,r){var t=e.prefixCls,l=void 0===t?"w-color-interactive":t,h=e.className,g=e.onMove,v=e.onDown,b=(0,a.Z)(e,p),w=(0,i.useRef)(null),x=(0,i.useRef)(!1),m=(0,i.useState)(!1),y=(0,n.Z)(m,2),A=y[0],C=y[1],j=s(g),Z=s(v),O=(0,i.useCallback)((function(e){c(e),(u(e)?e.touches.length>0:e.buttons>0)&&w.current?j&&j(f(w.current,e),e):C(!1)}),[j]),k=(0,i.useCallback)((function(){return C(!1)}),[]),N=(0,i.useCallback)((function(e){var r=e?window.addEventListener:window.removeEventListener;r(x.current?"touchmove":"mousemove",O),r(x.current?"touchend":"mouseup",k)}),[]);(0,i.useEffect)((function(){return N(A),function(){A&&N(!1)}}),[A,N]);var P=(0,i.useCallback)((function(e){c(e.nativeEvent),function(e){return!(x.current&&!u(e))&&(x.current=u(e),!0)}(e.nativeEvent)&&(Z&&Z(f(w.current,e.nativeEvent),e.nativeEvent),C(!0))}),[Z]);return(0,d.jsx)("div",(0,o.Z)({},b,{className:[l,h||""].filter(Boolean).join(" "),style:(0,o.Z)({},b.style,{touchAction:"none"}),ref:w,tabIndex:0,onMouseDown:P,onTouchStart:P}))}));h.displayName="Interactive";var g=h},7462:function(e,r,t){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:function(){return n}})},8683:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{Z:function(){return a}})},3366:function(e,r,t){function n(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=833.a52c10c5.chunk.js.map