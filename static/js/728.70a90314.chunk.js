"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[728],{941:function(e,t,n){n.d(t,{H:function(){return o}});var r=n(731),c=n(470),a="MovieItem_item__WgbZd",i="MovieItem_itemLink__VPH1t",u=n(184),o=function(e){var t=e.filmTitle,n=e.movieId,o=(0,c.TH)();return(0,u.jsx)("li",{className:a,children:(0,u.jsx)(r.rU,{className:i,to:"/movies/".concat(n),state:{from:o},children:t})})}},126:function(e,t,n){n.d(t,{e:function(){return c}});var r=n(184);function c(e){var t=e.children;return(0,r.jsx)("ul",{children:t})}},728:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),c=n(885),a=n(757),i=n.n(a),u=n(791),o=n(731),s=n(430),p="SearcmMovie_Searchbar__u9OII",f=n(184);function d(e){var t=e.onSubmit,n=e.value,r=(0,u.useState)(n),a=(0,c.Z)(r,2),i=a[0],o=a[1];return(0,f.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault(),""!==i.trim()&&t(i),o("")},children:[(0,f.jsx)("input",{value:i,type:"text",autoComplete:"off",autoFocus:!0,onChange:function(e){o(e.target.value.toLowerCase())}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})}var h=n(126),v=n(941);function m(){var e,t=(0,u.useState)([]),n=(0,c.Z)(t,2),a=n[0],p=n[1],m=(0,o.lr)(),l=(0,c.Z)(m,2),b=l[0],g=l[1],y=null!==(e=b.get("query"))&&void 0!==e?e:"";(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==y){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,s.z1)(y);case 5:t=e.sent,n=t.data,p(n.results),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[y]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{value:y,onSubmit:function(e){g({query:e.toLowerCase().trim()})}}),(0,f.jsx)(h.e,{children:a.map((function(e){var t=e.id,n=e.title;return(0,f.jsx)(v.H,{filmTitle:n,movieId:t},t)}))})]})}},430:function(e,t,n){n.d(t,{Je:function(){return o},TP:function(){return d},tx:function(){return l},vJ:function(){return v},z1:function(){return p}});var r=n(861),c=n(757),a=n.n(c),i=n(388),u="api_key=ec03e9e57e4c2ad62d7d835cb4534f63";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?".concat(u));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie","api_key=ec03e9e57e4c2ad62d7d835cb4534f63",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat("api_key=ec03e9e57e4c2ad62d7d835cb4534f63","&query=").concat(t,"&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","api_key=ec03e9e57e4c2ad62d7d835cb4534f63",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?").concat("api_key=ec03e9e57e4c2ad62d7d835cb4534f63","&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","api_key=ec03e9e57e4c2ad62d7d835cb4534f63",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?").concat("api_key=ec03e9e57e4c2ad62d7d835cb4534f63","&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/","api_key=ec03e9e57e4c2ad62d7d835cb4534f63",e.next=4,i.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?").concat("api_key=ec03e9e57e4c2ad62d7d835cb4534f63","&language=en-US"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=728.70a90314.chunk.js.map