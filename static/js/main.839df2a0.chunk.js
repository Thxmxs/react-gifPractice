(this["webpackJsonpgift-expert-reforzamiento"]=this["webpackJsonpgift-expert-reforzamiento"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setcategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value)}})})},j=n(6),d=n.n(j),m=n(8),l=function(){var t=Object(m.a)(d.a.mark((function t(e){var n,a,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=TTLEgQCJmQRXJFbcPwGzhxbGterPx1wj&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:t.img.url,alt:t.img.title}),Object(u.jsx)("p",{children:t.img.title})]})},b=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){l(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"card animate__animated animate__fadeIn",children:e}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(f,{img:t},t.id)}))})]})},p=function(){var t=Object(a.useState)(["One punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setcategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(b,{category:t},t)}))})]})};n(16);c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.839df2a0.chunk.js.map