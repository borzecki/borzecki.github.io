(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{INYr:function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(6),u="findIndex",i=!0;u in[]&&Array(1)[u]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(u)},eH5D:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),u=n("Bl7J"),i=(n("qnjk"),n("qKvR")),c=function(e){var t=e.label,n=e.min,r=e.max,u=e.step,c=e.value,o=e.onChange;return Object(i.b)(a.a.Fragment,null,Object(i.b)("label",null,t),Object(i.b)("input",{type:"range",min:n,max:r,step:u,value:c,onChange:function(e){return o(parseInt(e.target.value))}}))},o=(n("INYr"),function(e,t,n){var a=function(){return"undefined"!=typeof window?e.map((function(e){return window.matchMedia(e)})):[]},u=function(){var e=a().findIndex((function(e){return e.matches}));return void 0!==t[e]?t[e]:n},i=Object(r.useState)(u),c=i[0],o=i[1];return Object(r.useEffect)((function(){var e=function(){return o(u)};return a().forEach((function(t){return t.addListener(e)})),function(){return a().forEach((function(t){return t.removeListener(e)}))}}),[]),c});t.default=function(){var e=Object(r.useRef)(),t=o(["(min-width: 1500px)","(min-width: 1000px)","(min-width: 300px)"],[1,.5,.5],1),n=8*t,a=900*t,l=670*t,b=Object(r.useState)(120*t),s=b[0],f=b[1],h=Object(r.useState)(5),d=h[0],m=h[1],v=Object(r.useState)(12),j=v[0],p=v[1],O=Object(r.useState)(10),g=O[0],w=O[1],x=function(){var t=e.current.getContext("2d");t.clearRect(0,0,e.current.width,e.current.height),function e(t,n,r,a,u,i,c,o,l){t.beginPath(),t.save(),t.translate(r,a),t.rotate(n?0:c*Math.ceil(Math.random()*o)*Math.PI/180),t.lineWidth=l,t.moveTo(0,0),t.lineTo(0,-u),t.stroke(),0!==i?(e(t,!1,0,-u,.8*u,i-1,-c,o,.8*l),e(t,!1,0,-u,.8*u,i-1,c,o,.8*l),t.restore()):t.restore()}(t,!0,a/2,l-70,s,j,d,g,n)};return Object(r.useEffect)(x,[s,d,g,j,t]),Object(i.b)(u.a,{className:"noselect"},Object(i.b)("h1",null,"Fractal Trees"),Object(i.b)("canvas",{onClick:x,ref:e,width:a,height:l}),Object(i.b)("br",null),Object(i.b)(c,{label:"length",min:40*t,max:120*t,step:10*t,value:s,onChange:f}),Object(i.b)(c,{label:"segments",min:1,max:15,step:1,value:j,onChange:p}),Object(i.b)(c,{label:"angle",min:5,max:50,step:1,value:d,onChange:m}),Object(i.b)(c,{label:"jitter",min:1,max:10,step:1,value:g,onChange:w}))}}}]);
//# sourceMappingURL=component---src-pages-projects-fractal-trees-js-740f0ffd378b669adcb0.js.map