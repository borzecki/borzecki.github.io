(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{INYr:function(e,t,n){"use strict";var a=n("XKFU"),r=n("CkkT")(6),u="findIndex",c=!0;u in[]&&Array(1)[u]((function(){c=!1})),a(a.P+a.F*c,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(u)},eH5D:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),u=n("Bl7J"),c=(n("qnjk"),n("qKvR")),i=function(e){var t=e.label,n=e.min,a=e.max,u=e.step,i=e.value,o=e.onChange;return Object(c.b)(r.a.Fragment,null,Object(c.b)("label",null,t),Object(c.b)("input",{type:"range",min:n,max:a,step:u,value:i,onChange:function(e){return o(parseInt(e.target.value))}}))},o=(n("INYr"),function(e,t,n){var r=e.map((function(e){return window.matchMedia(e)})),u=function(){var e=r.findIndex((function(e){return e.matches}));return void 0!==t[e]?t[e]:n},c=Object(a.useState)(u),i=c[0],o=c[1];return Object(a.useEffect)((function(){var e=function(){return o(u)};return r.forEach((function(t){return t.addListener(e)})),function(){return r.forEach((function(t){return t.removeListener(e)}))}}),[]),i});t.default=function(){var e=Object(a.useRef)(),t=o(["(min-width: 1500px)","(min-width: 1000px)","(min-width: 300px)"],[1,.5,.5],1),n=8*t,r=900*t,l=670*t,b=Object(a.useState)(120),s=b[0],f=b[1],h=Object(a.useState)(5),m=h[0],d=h[1],v=Object(a.useState)(12),j=v[0],O=v[1],p=Object(a.useState)(10),g=p[0],w=p[1],x=function(){var t=e.current.getContext("2d");t.clearRect(0,0,e.current.width,e.current.height),function e(t,n,a,r,u,c,i,o,l){t.beginPath(),t.save(),t.translate(a,r),t.rotate(n?0:i*Math.ceil(Math.random()*o)*Math.PI/180),t.lineWidth=l,t.moveTo(0,0),t.lineTo(0,-u),t.stroke(),0!==c?(e(t,!1,0,-u,.8*u,c-1,-i,o,.8*l),e(t,!1,0,-u,.8*u,c-1,i,o,.8*l),t.restore()):t.restore()}(t,!0,r/2,l-70,s,j,m,g,n)};return Object(a.useEffect)(x,[s,m,g,j]),Object(c.b)(u.a,{className:"noselect"},Object(c.b)("h1",null,"Fractal Trees"),Object(c.b)("canvas",{onClick:x,ref:e,width:r,height:l}),Object(c.b)("br",null),Object(c.b)(i,{label:"length",min:40*t,max:120*t,step:10*t,value:s,onChange:f}),Object(c.b)(i,{label:"segments",min:1,max:15,step:1,value:j,onChange:O}),Object(c.b)(i,{label:"angle",min:5,max:50,step:1,value:m,onChange:d}),Object(c.b)(i,{label:"jitter",min:1,max:10,step:1,value:g,onChange:w}))}}}]);
//# sourceMappingURL=component---src-pages-projects-fractal-trees-js-b5f3dd1d133f9433b02c.js.map