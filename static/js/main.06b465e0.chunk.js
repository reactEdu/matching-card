(this["webpackJsonpmatching-card"]=this["webpackJsonpmatching-card"]||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),l=a(16),n=a.n(l),s=(a(23),a(5)),u=a.n(s),i=a(3),m=a(2),p=a(6),d=a(4),o=function(e){e.isEnd;var t=e.dispatch,a=e.pass,l=e.onClass,n=e.cellData,s=e.rowIndex,u=e.cellIndex,i=Object(c.useCallback)((function(){t({type:O,row:s,cell:u})}),[n]);return r.a.createElement("div",Object(d.a)({onClick:i,className:l},"className",a?"td pass":"td"),r.a.createElement("p",{className:"ico_"+n},n))},h=function(e){var t=e.isEnd,a=e.dispatch,c=e.passData,l=e.rowIndex,n=e.rowData,s=e.clickedValue;return r.a.createElement("div",{className:"tr"},Array(n.length).fill().map((function(e,u){return r.a.createElement(o,{onClass:s[0]===l&&s[1]===u?"ON":"OFF",isEnd:t,pass:c[l][u],dispatch:a,clickedValue:s,key:l+""+u,rowIndex:l,cellIndex:u,cellData:n[u]})})))},E=function(e){var t=e.isEnd,a=e.dispatch,c=e.tableData,l=e.clickedValue,n=e.passData;return r.a.createElement("div",{className:"flex_table"},r.a.createElement("div",{className:"tbody"},Array(c.length).fill().map((function(e,s){return r.a.createElement(h,{isEnd:t,dispatch:a,passData:n,clickedValue:l,key:"r"+s,rowIndex:s,rowData:c[s]})}))))},v=(a(25),a(17)),f=a.n(v).a.create({baseURL:"https://ds2lvg.gabia.io/"}),b={tableData:Object(p.a)(k()),passData:[[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1]],clickedValue:[-1,-1],isEnd:!1,count:0};function k(){var e=4,t=[];function a(){for(var t=[];t.length<4;){var a=String.fromCharCode(Math.floor(Math.random()*e)+65);-1===t.indexOf(a)&&t.push(a)}return t}t=[a(),a(),a(),a()];for(var c=0;c<t.length;c++){var r=t[0][c];t[0][c]=t[1][c],t[1][c]=r}return t}var O="CLICK_CELL",C="CHOICE_OK",N="CHOICE_NO",w="CHECK_END",M="RESTART_GAME",y=function(e,t){switch(t.type){case O:return Object(m.a)({},e,{clickedValue:[t.row,t.cell],count:e.count+.5});case C:return Object(m.a)({},e,{},e.passData[t.bRow][t.bCell]=!0,{},e.passData[t.aRow][t.aCell]=!0);case N:return Object(m.a)({},e,{},e.passData[t.bRow][t.bCell]=!1,{},e.passData[t.aRow][t.aCell]=!1);case w:return Object(m.a)({},e,{isEnd:!0});case M:return{tableData:Object(p.a)(k()),passData:[[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1]],clickedValue:[-1,-1],isEnd:!1,count:0};default:return e}};var j=function(){var e=Object(c.useRef)(""),t=Object(c.useRef)([]),a=Object(c.useReducer)(y,b),l=Object(i.a)(a,2),n=l[0],s=l[1],m=n.tableData,p=n.clickedValue,d=n.passData,o=n.isEnd,h=Object(c.useRef)(!1);Object(c.useEffect)((function(){h.current||(h.current=!0);var a=Object(i.a)(p,2),c=a[0],r=a[1];if(function(e){var t=!1;return-1===e[0].indexOf(!1)&&-1===e[1].indexOf(!1)&&-1===e[2].indexOf(!1)&&(t=!0),t}(d))return f.post("/card/score",{try:n.count}),s({type:w}),void alert("\uac8c\uc784 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4");if(-1!==c){if(""===e.current)return e.current=m[c][r],void(t.current=[c,r]);if(t.current[0]===c&&t.current[1]===r)return alert("\uac19\uc740 \uce78 \ud074\ub9ad\ud588\uc2b5\ub2c8\ub2e4."),e.current=[],void(e.current="");if(e.current===m[c][r])s({type:C,bRow:t.current[0],bCell:t.current[1],aRow:c,aCell:r});else{var l=t.current[0],u=t.current[1];s({type:C,bRow:l,bCell:u,aRow:c,aCell:r}),setTimeout((function(){s({type:N,bRow:l,bCell:u,aRow:c,aCell:r})}),900)}return e.current="",void(t.current=[])}}),[p,d]);var v=Object(c.useState)(0),k=Object(i.a)(v,2),O=k[0],j=k[1],g=Object(c.useState)(0),D=Object(i.a)(g,2),P=D[0],R=D[1];return Object(c.useEffect)((function(){0===n.count&&function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.awrap(f.get("/card/score"));case 3:e=t.sent,j(e.data[0].avg),R(e.data[0].min),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),null,null,[[0,8]])}()}),[o,j,R]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("p",{className:"try_len"},r.a.createElement("span",{className:"get_score try"},"Your Try: ",Math.floor(n.count),r.a.createElement("br",null)),O>0?r.a.createElement("span",{className:"get_score avg"},"Users average: ",O,r.a.createElement("br",null)):null,P>0?r.a.createElement("span",{className:"get_score min"},"Users best: ",P,r.a.createElement("br",null)):null,o?r.a.createElement("button",{className:"btn_restart",onClick:function(){s({type:M})}},"Restart"):"")),r.a.createElement(E,{isEnd:o,tableData:m,passData:d,dispatch:s,clickedValue:n.clickedValue}),r.a.createElement("pre",null))},g=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){setTimeout((function(){e.current.style.display="none",document.querySelector("body").style.position="static"}),3e3)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner",ref:e},r.a.createElement("svg",{viewBox:"0 0 300 200"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"letter-s-mask"},r.a.createElement("path",{d:"M34.835,110.589c0, 0,5.03,5.787,11.852,5.787c3.719,0,7.027-1.998,7.027-5.787c0-8.339-23.013-7.648-23.013-22.876c0-7.926,6.89-13.779,16.329-13.779c5.718,0,14.538,2.684,14.538,9.644v4.55h-8.13V85.92c0-2.273-3.238-3.789-6.477-3.789c-4.134,0-7.165,2.137-7.165,5.237c0,8.336,23.011,6.685,23.011,22.739c0,7.785-5.994,14.401-16.259,14.401c-10.818,0-16.812-7.58-16.812-7.58L34.835,110.589z"})),r.a.createElement("clipPath",{id:"letter-u-mask"},r.a.createElement("path",{d:"M103.985,75.167h-0.401h-4.679l-0.006,31.144c0,6.475-4.066,10.197-10.198,10.197c-6.133,0-10.197-3.721-10.197-10.13V75.167h-4.686h-0.393h-3.948v31.486c0,10.82,7.647,18.261,19.292,18.261c11.507,0,19.155-7.441,19.155-18.261l0.008-31.486H103.985z"})),r.a.createElement("clipPath",{id:"letter-p1-1-mask"},r.a.createElement("path",{d:"M127.65,82.81v41.28h-9.03V82.81H127.65z"})),r.a.createElement("clipPath",{id:"letter-p1-2-mask"},r.a.createElement("path",{d:"M152.11,91.08c0,9.51-6.41,16.13-15.57,16.13h-9.227v-7.72h7.578c5.09,0,7.99-3.31,7.99-8.41c0-5.03-2.9-8.27-7.86-8.27h-20.88v-7.64h22.4C145.7,75.17,152.11,81.58,152.11,91.08z"})),r.a.createElement("clipPath",{id:"letter-p2-1-mask"},r.a.createElement("path",{d:"M169.34,82.81v41.28h-9.03V82.81H169.34z"})),r.a.createElement("clipPath",{id:"letter-p2-2-mask"},r.a.createElement("path",{d:"M193.8,91.08c0,9.51-6.41,16.13-15.57,16.13h-9.227v-7.72h7.578c5.09,0,7.99-3.31,7.99-8.41c0-5.03-2.9-8.27-7.86-8.27h-20.88v-7.64h22.4C187.39,75.17,193.8,81.58,193.8,91.08z"})),r.a.createElement("clipPath",{id:"letter-l-mask"},r.a.createElement("path",{d:"M232.93,111.96v7.44c0,3.31-1.38,4.69-4.68,4.69h-21.57c-3.3,0-4.68-1.38-4.68-4.69V84.33c0-0.96-0.55-1.52-1.52-1.52h-2.96v-7.64h8.82c3.31,0,4.68,1.44,4.68,4.68v35.07c0,0.97,0.55,1.52,1.52,1.52h10.68c0.96,0,1.52-0.55,1.52-1.52v-2.96H232.93z"})),r.a.createElement("clipPath",{id:"letter-e-1-mask"},r.a.createElement("path",{d:"M268.0800171,79.8499756v7.4400024h-8.2000122v-2.960022c0-0.9599609-0.5499878-1.5199585-1.5200195-1.5199585h-24.5299683v-7.6400146h29.5599976C266.6300049,75.1699829,268.0800171,76.6099854,268.0800171,79.8499756z"})),r.a.createElement("clipPath",{id:"letter-e-2-mask"},r.a.createElement("path",{d:"M269.87,111.96v7.44c0,3.31-1.45,4.69-4.69,4.69H243c-3.31,0-4.69-1.38-4.69-4.69V82.76h9.03v32.16c0,0.97,0.55,1.52,1.51,1.52h11.3c0.97,0,1.52-0.55,1.52-1.52v-2.96H269.87z"})),r.a.createElement("clipPath",{id:"letter-e-3-mask"},r.a.createElement("path",{d:"M263.19,95.63v7.65h-15.98v-7.65H263.19z"}))),r.a.createElement("path",{className:"letter letter--s",clipPath:"url(#letter-s-mask)",d:"M58,88.5c0.181-5.833-2-10.013-11.167-10c-6.039,0.009-11.25,1.5-11.583,9.583C34.844,97.93,54.867,98.581,58.036,107c2.41,6.403-3.619,13.47-10.449,13.423c-5.031-0.034-10.396-2.116-15.837-7.34"}),r.a.createElement("path",{className:"letter letter--u",clipPath:"url(#letter-u-mask)",d:"M74.042,74.333c0,30.417-3.958,46.5,14.625,46.5s14.776-16.755,14.71-46.271"}),r.a.createElement("path",{className:"letter letter--p1-1",clipPath:"url(#letter-p1-1-mask)",d:"M123.135,124.09V82.81"}),r.a.createElement("path",{className:"letter letter--p1-2",clipPath:"url(#letter-p1-2-mask)",d:"M114.14,79c22.922,0,33.339-1.688,33.339,12.19c0,12.435-10.292,12.185-20.167,12.185"}),r.a.createElement("path",{className:"letter letter--p2-1",clipPath:"url(#letter-p2-1-mask)",d:"M164.825,124.09V82.81"}),r.a.createElement("path",{className:"letter letter--p2-2",clipPath:"url(#letter-p2-2-mask)",d:"M155.83,79c22.922,0,33.339-1.688,33.339,12.19c0,12.435-10.292,12.185-20.167,12.185"}),r.a.createElement("path",{className:"letter letter--l",clipPath:"url(#letter-l-mask)",d:"M197.52,78.935c7.105,0,9.063,0.752,9.063,7.229c0,7.583,0,21.671,0,28.838c0,5.539,3.851,5.498,8.919,5.498c2.987,0,5.3,0,7.311,0c6.063,0,5.938-8.618,5.938-8.618"}),r.a.createElement("path",{className:"letter letter--e-1",clipPath:"url(#letter-e-1-mask)",d:"M233.8300171,79.125c0,0,18.0449829,0,24.1699829,0c5.3125,0,6,1.375,6,8.164978"}),r.a.createElement("path",{className:"letter letter--e-2",clipPath:"url(#letter-e-2-mask)",d:"M242.958,82.76c0,0,0,25.075,0,32.242c0,5.539,3.851,5.498,8.919,5.498c2.987,0,5.904,0,7.915,0c6.063,0,5.938-8.618,5.938-8.618"}),r.a.createElement("path",{className:"letter letter--e-3",clipPath:"url(#letter-e-3-mask)",d:"M247.208,99.455h15.982"}))),r.a.createElement(j,null))};n.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.06b465e0.chunk.js.map