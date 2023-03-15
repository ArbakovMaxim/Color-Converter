"use strict";(self.webpackChunkcolor_converter=self.webpackChunkcolor_converter||[]).push([[859],{859:function(e,n,r){r.r(n),r.d(n,{default:function(){return ce}});var t,o=r(168),i=r(444),a=i.ZP.div(t||(t=(0,o.Z)(["\n  width-max:1440px;\n  height: 100%;\n  background-color: #f5fffa;\n"])));function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var u=r(439),d=r(791);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},f.apply(this,arguments)}var p=255,h=100,g=function(e){var n=v(e);return"hsla("+n.h+", "+n.s+"%, "+n.l+"%, "+n.a+")"},v=function(e){var n=e.h,r=e.s,t=e.v,o=e.a,i=(200-r)*t/h;return{h:n,s:i>0&&i<200?r*t/h/(i<=h?i:200-i)*h:0,l:i/2,a:o}},b=(Math.PI,function(e){var n,r=e.r,t=e.g,o=e.b;return"#"+(n=(r<<16|t<<8|o).toString(16),new Array(7-n.length).join("0")+n)}),x=function(e){var n=e.h,r=e.s,t=e.v,o=e.a,i=n/60,a=r/h,s=t/h,l=Math.floor(i)%6,c=i-Math.floor(i),u=p*s*(1-a),d=p*s*(1-a*c),g=p*s*(1-a*(1-c));s*=p;var v={};switch(l){case 0:v.r=s,v.g=g,v.b=u;break;case 1:v.r=d,v.g=s,v.b=u;break;case 2:v.r=u,v.g=s,v.b=g;break;case 3:v.r=u,v.g=d,v.b=s;break;case 4:v.r=g,v.g=u,v.b=s;break;case 5:v.r=s,v.g=u,v.b=d}return v.r=Math.round(v.r),v.g=Math.round(v.g),v.b=Math.round(v.b),f({},v,{a:o})},w=function(e){return b(x(e))};function j(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}function m(e){var n=(0,d.useRef)(e);return(0,d.useEffect)((function(){n.current=e})),(0,d.useCallback)((function(e,r){return n.current&&n.current(e,r)}),[])}var y=function(e){return"touches"in e},A=function(e){!y(e)&&e.preventDefault&&e.preventDefault()},C=function(e,n,r){return void 0===n&&(n=0),void 0===r&&(r=1),e>r?r:e<n?n:e},k=function(e,n){var r=e.getBoundingClientRect(),t=y(n)?n.touches[0]:n;return{left:C((t.pageX-(r.left+window.pageXOffset))/r.width),top:C((t.pageY-(r.top+window.pageYOffset))/r.height),width:r.width,height:r.height,x:t.pageX-(r.left+window.pageXOffset),y:t.pageY-(r.top+window.pageYOffset)}},O=r(184),P=["prefixCls","className","onMove","onDown"],Z=d.forwardRef((function(e,n){var r=e.prefixCls,t=void 0===r?"w-color-interactive":r,o=e.className,i=e.onMove,a=e.onDown,s=j(e,P),l=(0,d.useRef)(null),c=(0,d.useRef)(!1),p=(0,d.useState)(!1),h=(0,u.Z)(p,2),g=h[0],v=h[1],b=m(i),x=m(a),w=(0,d.useCallback)((function(e){A(e),(y(e)?e.touches.length>0:e.buttons>0)&&l.current?b&&b(k(l.current,e),e):v(!1)}),[b]),C=(0,d.useCallback)((function(){return v(!1)}),[]),Z=(0,d.useCallback)((function(e){var n=e?window.addEventListener:window.removeEventListener;n(c.current?"touchmove":"mousemove",w),n(c.current?"touchend":"mouseup",C)}),[]);(0,d.useEffect)((function(){return Z(g),function(){g&&Z(!1)}}),[g,Z]);var N=(0,d.useCallback)((function(e){A(e.nativeEvent),function(e){return!(c.current&&!y(e))&&(c.current=y(e),!0)}(e.nativeEvent)&&(x&&x(k(l.current,e.nativeEvent),e.nativeEvent),v(!0))}),[x]);return(0,O.jsx)("div",f({},s,{className:[t,o||""].filter(Boolean).join(" "),style:f({},s.style,{touchAction:"none"}),ref:l,tabIndex:0,onMouseDown:N,onTouchStart:N}))}));Z.displayName="Interactive";var N=Z,R=function(e){var n=e.className,r=e.prefixCls,t=e.left,o=e.top,i={position:"absolute",left:t,top:o};return(0,d.useMemo)((function(){return(0,O.jsx)("div",{className:r+"-pointer "+(n||""),style:i,children:(0,O.jsx)("div",{className:r+"-fill",style:{width:18,height:18,transform:t?"translate(-9px, -1px)":"translate(-1px, -9px)",boxShadow:"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:"50%",backgroundColor:"rgb(248, 248, 248)"}})})}),[n,t,o,r])},S=["prefixCls","className","hsva","background","bgProps","innerProps","radius","width","height","direction","style","onChange","pointer"],B=d.forwardRef((function(e,n){var r=e.prefixCls,t=void 0===r?"w-color-alpha":r,o=e.className,i=e.hsva,a=e.background,s=e.bgProps,l=void 0===s?{}:s,c=e.innerProps,u=void 0===c?{}:c,p=e.radius,h=void 0===p?0:p,v=e.width,b=e.height,x=void 0===b?16:b,w=e.direction,m=void 0===w?"horizontal":w,y=e.style,A=e.onChange,C=e.pointer,k=j(e,S),P=(0,d.useCallback)((function(e){A&&A(f({},i,{a:"horizontal"===m?e.left:e.top}),e)}),[i]),Z=g(Object.assign({},i,{a:1})),B="linear-gradient(to "+("horizontal"===m?"right":"bottom")+", rgba(244, 67, 54, 0) 0%, "+Z+" 100%)",E={};return"horizontal"===m?E.left=100*i.a+"%":E.top=100*i.a+"%",(0,O.jsxs)("div",f({},k,{className:[t,t+"-"+m,o||""].filter(Boolean).join(" "),style:f({borderRadius:h,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center",backgroundColor:"#fff"},y,{position:"relative"},{width:v,height:x}),ref:n,children:[(0,O.jsx)("div",f({},l,{style:f({inset:0,position:"absolute",background:a||B,borderRadius:h},l.style)})),(0,O.jsx)(N,f({},u,{style:f({},u.style,{inset:0,zIndex:1,position:"absolute"}),onMove:P,onDown:P,children:d.createElement(C||R,f({prefixCls:t},E))}))]}))}));B.displayName="Aplha";var E=B,M=["prefixCls","className","hue","onChange","direction"],D=d.forwardRef((function(e,n){var r=e.prefixCls,t=void 0===r?"w-color-hue":r,o=e.className,i=e.hue,a=void 0===i?0:i,s=e.onChange,l=e.direction,c=void 0===l?"horizontal":l,u=j(e,M);return(0,O.jsx)(E,f({ref:n,className:t+" "+(o||"")},u,{direction:c,background:"linear-gradient(to "+("horizontal"===c?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:a,s:100,v:100,a:a/360},onChange:function(e,n){s&&s({h:"horizontal"===c?360*n.left:360*n.top})}}))}));D.displayName="Hue";var G=D,Y=function(e){var n=e.className,r=e.color,t=e.left,o=e.top,i=e.prefixCls,a={position:"absolute",top:o,left:t};return(0,d.useMemo)((function(){return(0,O.jsx)("div",{className:i+"-pointer "+(n||""),style:a,children:(0,O.jsx)("div",{className:i+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:r}})})}),[o,t,r,n,i])},z=["prefixCls","radius","pointer","className","style","hsva","onChange"],L=d.forwardRef((function(e,n){var r=e.prefixCls,t=void 0===r?"w-color-saturation":r,o=e.radius,i=void 0===o?0:o,a=e.pointer,s=e.className,l=e.style,c=e.hsva,u=e.onChange,p=j(e,z),h=f({width:200,height:200,borderRadius:i},l,{position:"relative"}),v=function(e,n){u&&u({h:c.h,s:100*e.left,v:100*(1-e.top),a:c.a})},b={top:100-c.v+"%",left:c.s+"%",color:g(c)};return(0,O.jsx)(N,f({className:[t,s||""].filter(Boolean).join(" ")},p,{style:f({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+c.h+", 100%, 50%))"},h),ref:n,onMove:v,onDown:v,children:d.createElement(a||Y,f({prefixCls:t},b))}))}));L.displayName="Saturation";var X,H,I,Q,U,F,J,T,K,V=L,_=i.ZP.section(X||(X=(0,o.Z)(["\n padding: 30px 0px;\n"]))),W=function(e){var n=e.children;return(0,O.jsx)(_,{children:n})},q=i.ZP.div(H||(H=(0,o.Z)(["\npadding-left: 147px;\npadding-right: 147px;\n"]))),$=i.ZP.div(I||(I=(0,o.Z)(["\ndisplay:flex;\nbackground-color: #F5F5F5;\npadding-top: 38px;\npadding-left:87px;\npadding-right:110px;\npadding-bottom:53px;\n"]))),ee=i.ZP.div(Q||(Q=(0,o.Z)(["\nmargin-left:77px;\n"]))),ne=i.ZP.div(U||(U=(0,o.Z)(["\nwidth:225px;\nheight:225px;\n\n"]))),re=i.ZP.div(F||(F=(0,o.Z)(["\nmargin-left:12px;\n\n"]))),te=function(){var e=(0,d.useState)({h:0,s:0,v:68,a:1}),n=(0,u.Z)(e,2),r=n[0],t=n[1],o=(0,d.useState)("#adadad"),i=(0,u.Z)(o,2),a=i[0],s=i[1];return(0,d.useEffect)((function(){s(w(r))}),[r]),(0,O.jsx)(W,{children:(0,O.jsx)(q,{children:(0,O.jsxs)($,{children:[(0,O.jsx)(ne,{style:{backgroundColor:a}}),(0,O.jsx)(ee,{children:(0,O.jsx)(G,{hue:r.h,direction:"vertical",width:18,height:225,onChange:function(e){t(c(c({},r),e))}})}),(0,O.jsx)(re,{children:(0,O.jsx)(V,{style:{width:"582px",height:"225px"},hsva:r,onChange:function(e){t(c(c(c({},r),e),{},{a:r.a}))}})})]})})})},oe=i.ZP.main(J||(J=(0,o.Z)([""]))),ie=i.ZP.p(T||(T=(0,o.Z)([""]))),ae=i.ZP.div(K||(K=(0,o.Z)(["\npadding-left: 147px;\npadding-right: 147px;\ndisplay:flex;\njustify-content: space-between;\nalign-items:center;\n"]))),se=function(){return(0,O.jsx)(W,{children:(0,O.jsx)(ae,{children:(0,O.jsxs)(ie,{children:["\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0446\u0432\u0435\u0442\u043e\u0432 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0435\u0433\u043a\u043e \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0446\u0432\u0435\u0442 \u0438\u0437 \u043e\u0434\u043d\u043e\u0439 \u0446\u0432\u0435\u0442\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 \u0440\u044f\u0434 \u0434\u0440\u0443\u0433\u0438\u0445.",(0,O.jsx)("br",{}),"\u0412 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c, \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0441\u043b\u0443\u0436\u0438\u0442 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u043c\u0438 CSS3-\u0446\u0432\u0435\u0442\u043e\u0432.",(0,O.jsx)("br",{}),"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0438\u0437 HEX \u0432 RGB/RGBA \u0438 HSL/HSLA, RGB \u0432 CMYK, XYZ, LAB, \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e.",(0,O.jsx)("br",{}),"\u0410 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0430\u043b\u044c\u0444\u0430-\u043a\u0430\u043d\u0430\u043b\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438\u0437 RGBA \u0432 RGB (\u0438 HSLA \u0432 HSL)."]})})})},le=function(){return(0,O.jsxs)(oe,{children:[(0,O.jsx)(se,{}),(0,O.jsx)(te,{})]})},ce=function(){return(0,O.jsx)(a,{children:(0,O.jsx)(le,{})})}}}]);
//# sourceMappingURL=859.1f1a4eb0.chunk.js.map