"use strict";(self.webpackChunkcolor_converter=self.webpackChunkcolor_converter||[]).push([[917],{917:function(e,t,n){n.r(t),n.d(t,{default:function(){return Se}});var r,i=n(168),o=n(444),a=o.ZP.div(r||(r=(0,i.Z)(["\n  width-max:1440px;\n  height: 100%;\n  background-color: #f5fffa;\n  padding-left: 147px;\n  padding-right: 147px;\n"])));function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n(439),d=n(791);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var p=255,f=100,g=function(e){var t=x(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},x=function(e){var t=e.h,n=e.s,r=e.v,i=e.a,o=(200-n)*r/f;return{h:t,s:o>0&&o<200?n*r/f/(o<=f?o:200-o)*f:0,l:o/2,a:i}},v=(Math.PI,function(e){var t,n=e.r,r=e.g,i=e.b;return"#"+(t=(n<<16|r<<8|i).toString(16),new Array(7-t.length).join("0")+t)}),b=function(e){var t=e.h,n=e.s,r=e.v,i=e.a,o=t/60,a=n/f,s=r/f,l=Math.floor(o)%6,c=o-Math.floor(o),u=p*s*(1-a),d=p*s*(1-a*c),g=p*s*(1-a*(1-c));s*=p;var x={};switch(l){case 0:x.r=s,x.g=g,x.b=u;break;case 1:x.r=d,x.g=s,x.b=u;break;case 2:x.r=u,x.g=s,x.b=g;break;case 3:x.r=u,x.g=d,x.b=s;break;case 4:x.r=g,x.g=u,x.b=s;break;case 5:x.r=s,x.g=u,x.b=d}return x.r=Math.round(x.r),x.g=Math.round(x.g),x.b=Math.round(x.b),h({},x,{a:i})},w=function(e){return v(b(e))};function m(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function y(e){var t=(0,d.useRef)(e);return(0,d.useEffect)((function(){t.current=e})),(0,d.useCallback)((function(e,n){return t.current&&t.current(e,n)}),[])}var S=function(e){return"touches"in e},j=function(e){!S(e)&&e.preventDefault&&e.preventDefault()},C=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),e>n?n:e<t?t:e},Z=function(e,t){var n=e.getBoundingClientRect(),r=S(t)?t.touches[0]:t;return{left:C((r.pageX-(n.left+window.pageXOffset))/n.width),top:C((r.pageY-(n.top+window.pageYOffset))/n.height),width:n.width,height:n.height,x:r.pageX-(n.left+window.pageXOffset),y:r.pageY-(n.top+window.pageYOffset)}},A=n(184),k=["prefixCls","className","onMove","onDown"],P=d.forwardRef((function(e,t){var n=e.prefixCls,r=void 0===n?"w-color-interactive":n,i=e.className,o=e.onMove,a=e.onDown,s=m(e,k),l=(0,d.useRef)(null),c=(0,d.useRef)(!1),p=(0,d.useState)(!1),f=(0,u.Z)(p,2),g=f[0],x=f[1],v=y(o),b=y(a),w=(0,d.useCallback)((function(e){j(e),(S(e)?e.touches.length>0:e.buttons>0)&&l.current?v&&v(Z(l.current,e),e):x(!1)}),[v]),C=(0,d.useCallback)((function(){return x(!1)}),[]),P=(0,d.useCallback)((function(e){var t=e?window.addEventListener:window.removeEventListener;t(c.current?"touchmove":"mousemove",w),t(c.current?"touchend":"mouseup",C)}),[]);(0,d.useEffect)((function(){return P(g),function(){g&&P(!1)}}),[g,P]);var O=(0,d.useCallback)((function(e){j(e.nativeEvent),function(e){return!(c.current&&!S(e))&&(c.current=S(e),!0)}(e.nativeEvent)&&(b&&b(Z(l.current,e.nativeEvent),e.nativeEvent),x(!0))}),[b]);return(0,A.jsx)("div",h({},s,{className:[r,i||""].filter(Boolean).join(" "),style:h({},s.style,{touchAction:"none"}),ref:l,tabIndex:0,onMouseDown:O,onTouchStart:O}))}));P.displayName="Interactive";var O=P,F=function(e){var t=e.className,n=e.prefixCls,r=e.left,i=e.top,o={position:"absolute",left:r,top:i};return(0,d.useMemo)((function(){return(0,A.jsx)("div",{className:n+"-pointer "+(t||""),style:o,children:(0,A.jsx)("div",{className:n+"-fill",style:{width:18,height:18,transform:r?"translate(-9px, -1px)":"translate(-1px, -9px)",boxShadow:"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:"50%",backgroundColor:"rgb(248, 248, 248)"}})})}),[t,r,i,n])},T=["prefixCls","className","hsva","background","bgProps","innerProps","radius","width","height","direction","style","onChange","pointer"],R=d.forwardRef((function(e,t){var n=e.prefixCls,r=void 0===n?"w-color-alpha":n,i=e.className,o=e.hsva,a=e.background,s=e.bgProps,l=void 0===s?{}:s,c=e.innerProps,u=void 0===c?{}:c,p=e.radius,f=void 0===p?0:p,x=e.width,v=e.height,b=void 0===v?16:v,w=e.direction,y=void 0===w?"horizontal":w,S=e.style,j=e.onChange,C=e.pointer,Z=m(e,T),k=(0,d.useCallback)((function(e){j&&j(h({},o,{a:"horizontal"===y?e.left:e.top}),e)}),[o]),P=g(Object.assign({},o,{a:1})),R="linear-gradient(to "+("horizontal"===y?"right":"bottom")+", rgba(244, 67, 54, 0) 0%, "+P+" 100%)",N={};return"horizontal"===y?N.left=100*o.a+"%":N.top=100*o.a+"%",(0,A.jsxs)("div",h({},Z,{className:[r,r+"-"+y,i||""].filter(Boolean).join(" "),style:h({borderRadius:f,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center",backgroundColor:"#fff"},S,{position:"relative"},{width:x,height:b}),ref:t,children:[(0,A.jsx)("div",h({},l,{style:h({inset:0,position:"absolute",background:a||R,borderRadius:f},l.style)})),(0,A.jsx)(O,h({},u,{style:h({},u.style,{inset:0,zIndex:1,position:"absolute"}),onMove:k,onDown:k,children:d.createElement(C||F,h({prefixCls:r},N))}))]}))}));R.displayName="Aplha";var N=R,B=["prefixCls","className","hue","onChange","direction"],H=d.forwardRef((function(e,t){var n=e.prefixCls,r=void 0===n?"w-color-hue":n,i=e.className,o=e.hue,a=void 0===o?0:o,s=e.onChange,l=e.direction,c=void 0===l?"horizontal":l,u=m(e,B);return(0,A.jsx)(N,h({ref:t,className:r+" "+(i||"")},u,{direction:c,background:"linear-gradient(to "+("horizontal"===c?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:a,s:100,v:100,a:a/360},onChange:function(e,t){s&&s({h:"horizontal"===c?360*t.left:360*t.top})}}))}));H.displayName="Hue";var L=H,M=function(e){var t=e.className,n=e.color,r=e.left,i=e.top,o=e.prefixCls,a={position:"absolute",top:i,left:r};return(0,d.useMemo)((function(){return(0,A.jsx)("div",{className:o+"-pointer "+(t||""),style:a,children:(0,A.jsx)("div",{className:o+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:n}})})}),[i,r,n,t,o])},E=["prefixCls","radius","pointer","className","style","hsva","onChange"],D=d.forwardRef((function(e,t){var n=e.prefixCls,r=void 0===n?"w-color-saturation":n,i=e.radius,o=void 0===i?0:i,a=e.pointer,s=e.className,l=e.style,c=e.hsva,u=e.onChange,p=m(e,E),f=h({width:200,height:200,borderRadius:o},l,{position:"relative"}),x=function(e,t){u&&u({h:c.h,s:100*e.left,v:100*(1-e.top),a:c.a})},v={top:100-c.v+"%",left:c.s+"%",color:g(c)};return(0,A.jsx)(O,h({className:[r,s||""].filter(Boolean).join(" ")},p,{style:h({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+c.h+", 100%, 50%))"},f),ref:t,onMove:x,onDown:x,children:d.createElement(a||M,h({prefixCls:r},v))}))}));D.displayName="Saturation";var Y,G,z,X,I,K,Q,U,J,V,_,W,q,$,ee=D,te=o.ZP.section(Y||(Y=(0,i.Z)(["\n padding: 30px 0px;\n"]))),ne=function(e){var t=e.children;return(0,A.jsx)(te,{children:t})},re=o.ZP.div(G||(G=(0,i.Z)(["\n/* padding-left: 147px;\npadding-right: 147px; */\n"]))),ie=o.ZP.div(z||(z=(0,i.Z)(["\ndisplay:flex;\nbackground-color: #F5F5F5;\npadding-top: 38px;\npadding-left:87px;\npadding-right:110px;\npadding-bottom:53px;\n"]))),oe=o.ZP.div(X||(X=(0,i.Z)(["\nmargin-left:77px;\n"]))),ae=o.ZP.div(I||(I=(0,i.Z)(["\nwidth:225px;\nheight:225px;\n\n"]))),se=o.ZP.div(K||(K=(0,i.Z)(["\nmargin-left:12px;\n\n"]))),le=o.ZP.ul(Q||(Q=(0,i.Z)(["\nposition: absolute;\npadding-top:21px;\npadding-left:30px;\npadding-right:61px;\n\ndisplay:flex;\nflex-direction: column;\nflex-wrap: wrap;\nheight: 225px;\nwidth: 435px;\n&:not(:last-child) {\n    gap-right:46px;;\n  }\n  /* display:grid; */\n  /* grid-template-columns: 48px 44px 38px 78px;\n  grid-template: repeat(6,48px)/ repeat(6,44px)/ repeat(6,38px)/ repeat(3,78px); */\n  /* grid-template-columns: 48px 44px 38px 78px;\n  grid-gap: 5px 50px;\n  align-items: start; */\n\n"]))),ce=o.ZP.li(U||(U=(0,i.Z)(["\nposition: relative;\nwidth : auto;\nheight:35px;\nlist-style-type: none;\nfont-family: 'Roboto';\nfont-style: normal;\nfont-weight: 300;\nfont-size: 16px;\nline-height: 35px;\n"]))),ue=["RGB","RGBA","HEX","CMYK","Name","HSL","HSLA","HSIA","HLSA","HSI","HLS","HSV","HSB","Safe","CMY","XYZ","Yxy","Lab","LCH","HunterLab","Luv"],de=function(e){var t=e.target;return(0,A.jsx)(le,{children:ue.map((function(e){return(0,A.jsx)(ce,{onClick:t,children:e},e)}))})},he=o.ZP.div(J||(J=(0,i.Z)(["\nheight: 245px;\nwidth: 435px;\nbackground-color: #D9D9D9;\n"]))),pe=o.ZP.button(V||(V=(0,i.Z)(["\nwidth: 100px;\nheight: 40px;\nborder-top-left-radius:10px;\nborder-top-right-radius:10px;\n&:not(:first-child) {\n    margin-left:10px;\n  }"]))),fe=o.ZP.input(_||(_=(0,i.Z)(["\ndisplay:block;\nwidth: 435px;\nheight: 25px;\npadding: 20px 30px 15px 30px;\n  "]))),ge=function(){var e=(0,d.useState)(!1),t=(0,u.Z)(e,2),n=t[0],r=t[1],i=(0,d.useState)(!1),o=(0,u.Z)(i,2),a=o[0],s=o[1],l=(0,d.useState)(""),c=(0,u.Z)(l,2),h=c[0],p=c[1],f=(0,d.useState)("RGB"),g=(0,u.Z)(f,2),x=g[0],v=g[1],b=(0,d.useState)("HLS"),w=(0,u.Z)(b,2),m=w[0],y=w[1],S=(0,d.useState)("CMYK"),j=(0,u.Z)(S,2),C=j[0],Z=j[1],k=(0,d.useState)("HSL"),P=(0,u.Z)(k,2),O=P[0],F=P[1],T=(0,d.useState)(""),R=(0,u.Z)(T,2),N=R[0],B=R[1],H=(0,d.useState)("RGB"),L=(0,u.Z)(H,2),M=L[0],E=L[1],D=(0,d.useState)("HLS"),Y=(0,u.Z)(D,2),G=Y[0],z=Y[1],X=(0,d.useState)("CMYK"),I=(0,u.Z)(X,2),K=I[0],Q=I[1],U=(0,d.useState)("HSL"),J=(0,u.Z)(U,2),V=J[0],_=J[1];function W(e){return"flowerSystem"===h?(q(),v(e.target.innerText)):"flowerSystemSecond"===h?(q(),y(e.target.innerText)):"flowerSystemThird"===h?(q(),Z(e.target.innerText)):"flowerSystemFourth"===h?(q(),F(e.target.innerText)):"rightsFlowerSystem"===N?($(),E(e.target.innerText)):"rightsFlowerSystemSecond"===N?($(),z(e.target.innerText)):"rightsFlowerSystemThird"===N?($(),Q(e.target.innerText)):"rightsFlowerSystemFourth"===N?($(),_(e.target.innerText)):void 0}function q(){r(!n)}function $(){s(!a)}function ee(e){return q(),"flowerSystem"===e.currentTarget.id?p("flowerSystem"):"flowerSystemSecond"===e.currentTarget.id?p("flowerSystemSecond"):"flowerSystemThird"===e.currentTarget.id?p("flowerSystemThird"):"flowerSystemFourth"===e.currentTarget.id?p("flowerSystemFourth"):void 0}function te(e){return $(),"rightsFlowerSystem"===e.currentTarget.id?B("rightsFlowerSystem"):"rightsFlowerSystemSecond"===e.currentTarget.id?B("rightsFlowerSystemSecond"):"rightsFlowerSystemThird"===e.currentTarget.id?B("rightsFlowerSystemThird"):"rightsFlowerSystemFourth"===e.currentTarget.id?B("rightsFlowerSystemFourth"):void 0}return(0,A.jsxs)("div",{children:[(0,A.jsxs)("div",{children:[(0,A.jsx)(pe,{id:"flowerSystem",onClick:ee,children:x}),(0,A.jsx)(pe,{id:"flowerSystemSecond",onClick:ee,children:m}),(0,A.jsx)(pe,{id:"flowerSystemThird",onClick:ee,children:C}),(0,A.jsx)(pe,{id:"flowerSystemFourth",onClick:ee,children:O}),n?(0,A.jsx)(he,{children:(0,A.jsx)(de,{target:W})}):null,(0,A.jsx)(fe,{})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(pe,{id:"rightsFlowerSystem",onClick:te,children:M}),(0,A.jsx)(pe,{id:"rightsFlowerSystemSecond",onClick:te,children:G}),(0,A.jsx)(pe,{id:"rightsFlowerSystemThird",onClick:te,children:K}),(0,A.jsx)(pe,{id:"rightsFlowerSystemFourth",onClick:te,children:V}),a?(0,A.jsx)(he,{children:(0,A.jsx)(de,{target:W})}):null,(0,A.jsx)(fe,{})]})]})},xe=function(){var e=(0,d.useState)({h:0,s:0,v:68,a:1}),t=(0,u.Z)(e,2),n=t[0],r=t[1],i=(0,d.useState)("#adadad"),o=(0,u.Z)(i,2),a=o[0],s=o[1];return(0,d.useEffect)((function(){s(w(n))}),[n]),(0,A.jsx)(ne,{children:(0,A.jsxs)(re,{children:[(0,A.jsxs)(ie,{children:[(0,A.jsx)(ae,{style:{backgroundColor:a}}),(0,A.jsx)(oe,{children:(0,A.jsx)(L,{hue:n.h,direction:"vertical",width:18,height:225,onChange:function(e){r(c(c({},n),e))}})}),(0,A.jsx)(se,{children:(0,A.jsx)(ee,{style:{width:"582px",height:"225px"},hsva:n,onChange:function(e){r(c(c(c({},n),e),{},{a:n.a}))}})})]}),(0,A.jsx)(ge,{})]})})},ve=o.ZP.main(W||(W=(0,i.Z)([""]))),be=o.ZP.p(q||(q=(0,i.Z)([""]))),we=o.ZP.div($||($=(0,i.Z)(["\n\ndisplay:flex;\njustify-content: space-between;\nalign-items:center;\n"]))),me=function(){return(0,A.jsx)(ne,{children:(0,A.jsx)(we,{children:(0,A.jsxs)(be,{children:["\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0446\u0432\u0435\u0442\u043e\u0432 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043b\u0435\u0433\u043a\u043e \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0446\u0432\u0435\u0442 \u0438\u0437 \u043e\u0434\u043d\u043e\u0439 \u0446\u0432\u0435\u0442\u043e\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 \u0440\u044f\u0434 \u0434\u0440\u0443\u0433\u0438\u0445.",(0,A.jsx)("br",{}),"\u0412 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c, \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0441\u043b\u0443\u0436\u0438\u0442 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u043c\u0438 CSS3-\u0446\u0432\u0435\u0442\u043e\u0432.",(0,A.jsx)("br",{}),"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0438\u0437 HEX \u0432 RGB/RGBA \u0438 HSL/HSLA, RGB \u0432 CMYK, XYZ, LAB, \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e.",(0,A.jsx)("br",{}),"\u0410 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0430\u043b\u044c\u0444\u0430-\u043a\u0430\u043d\u0430\u043b\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438\u0437 RGBA \u0432 RGB (\u0438 HSLA \u0432 HSL)."]})})})},ye=function(){return(0,A.jsxs)(ve,{children:[(0,A.jsx)(me,{}),(0,A.jsx)(xe,{})]})},Se=function(){return(0,A.jsx)(a,{children:(0,A.jsx)(ye,{})})}}}]);
//# sourceMappingURL=917.39ef4e89.chunk.js.map