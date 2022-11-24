(()=>{"use strict";var e,a,r,t={},o={};function d(e){var a=o[e];if(void 0!==a)return a.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=t,d.amdD=function(){throw new Error("define cannot be used indirect")},e=[],d.O=(a,r,t,o)=>{if(!r){var c=1/0;for(s=0;s<e.length;s++){for(var[r,t,o]=e[s],n=!0,f=0;f<r.length;f++)(!1&o||c>=o)&&Object.keys(d.O).every((e=>d.O[e](r[f])))?r.splice(f--,1):(n=!1,o<c&&(c=o));if(n){e.splice(s--,1);var i=t();void 0!==i&&(a=i)}}return a}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,t,o]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a}),a},d.d=(e,a)=>{for(var r in a)d.o(a,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,r)=>(d.f[r](e,a),a)),[])),d.u=e=>(({23:"discover",35:"player",55:"apps",58:"databases",65:"trusted-clusters",179:"main",202:"app-launcher",232:"login-failed",246:"login-success",290:"console",380:"desktop",384:"kubes",426:"audit",434:"clusters",438:"roles",456:"desktop-session",465:"recordings",509:"nodes",535:"login",551:"support",681:"users",773:"welcome",784:"sessions",809:"account",860:"auth-connectors"}[e]||e)+"."+{23:"0fcb17ceef8a95b4c011",35:"47e9a48e2c93d618c2f1",55:"6620fd3d1d0d3461a699",58:"f67cb8d1a28764fca472",65:"ac2787373e312ec53c3f",152:"6a7d39168928fe779845",179:"904d0b02a7d19a4c6cd2",202:"3096dab15f493b833ca0",232:"e8f9f141213f83bed7a7",246:"17c2bcc4b9847dce9049",290:"3deec47ea2cb09709df1",297:"d68d3ba79acfb4c8f8ff",310:"e0ffe60027234e1aab9f",316:"c5b0f6396aa4b082a80e",335:"7a48f152922252cd5625",353:"25b92b35a3eadd5dc584",379:"ca2cb52f13d99c26891a",380:"74aae28969d2c2c50daf",384:"5876c1ad74da73a4491b",426:"185b689a6e14a6b105b7",434:"361006ceed0b40694270",438:"46df84315671b8ae692c",456:"92e3163de37354e74538",465:"beaaf59299adf7d044b9",509:"372f2e5e9ec9f8e0a415",515:"2a34e4fe562398f2e79a",522:"7fa7f2f8db32266a5c08",535:"a260a5bc5dc44678aa1f",550:"e8af8109f535e3d64c26",551:"671be59eb29662c6be1a",585:"5de0c4a40063691e7602",664:"5a7580d7059e591f0262",681:"e3642c0da12879dafd02",692:"e379904e7cf373bbf401",703:"56e6ad033c33a28e908c",773:"fcb59991c3fe57aea481",784:"8c74365e1958b85e5f21",809:"aeb5d0408f9a11f1123f",825:"4af19ba0166c1e89b92e",860:"5e44b8eff80a770d65c6"}[e]+".js"),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),a={},r="@gravitational/teleport:",d.l=(e,t,o,c)=>{if(a[e])a[e].push(t);else{var n,f;if(void 0!==o)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var l=i[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+o){n=l;break}}n||(f=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.setAttribute("data-webpack",r+o),n.src=e),a[e]=[t];var b=(r,t)=>{n.onerror=n.onload=null,clearTimeout(u);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},u=setTimeout(b.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=b.bind(null,n.onerror),n.onload=b.bind(null,n.onload),f&&document.head.appendChild(n)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),d.p="/web/app/",(()=>{var e={523:0};d.f.j=(a,r)=>{var t=d.o(e,a)?e[a]:void 0;if(0!==t)if(t)r.push(t[2]);else if(523!=a){var o=new Promise(((r,o)=>t=e[a]=[r,o]));r.push(t[2]=o);var c=d.p+d.u(a),n=new Error;d.l(c,(r=>{if(d.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+a+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,t[1](n)}}),"chunk-"+a,a)}else e[a]=0},d.O.j=a=>0===e[a];var a=(a,r)=>{var t,o,[c,n,f]=r,i=0;if(c.some((a=>0!==e[a]))){for(t in n)d.o(n,t)&&(d.m[t]=n[t]);if(f)var s=f(d)}for(a&&a(r);i<c.length;i++)o=c[i],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(s)},r=self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})(),d.nc=void 0})();