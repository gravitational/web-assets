(()=>{"use strict";var e,a,r,t={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=t,o.amdD=function(){throw new Error("define cannot be used indirect")},e=[],o.O=(a,r,t,d)=>{if(!r){var c=1/0;for(l=0;l<e.length;l++){for(var[r,t,d]=e[l],f=!0,n=0;n<r.length;n++)(!1&d||c>=d)&&Object.keys(o.O).every((e=>o.O[e](r[n])))?r.splice(n--,1):(f=!1,d<c&&(c=d));if(f){e.splice(l--,1);var i=t();void 0!==i&&(a=i)}}return a}d=d||0;for(var l=e.length;l>0&&e[l-1][2]>d;l--)e[l]=e[l-1];e[l]=[r,t,d]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a}),a},o.d=(e,a)=>{for(var r in a)o.o(a,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,r)=>(o.f[r](e,a),a)),[])),o.u=e=>(({23:"discover",35:"player",55:"apps",58:"databases",65:"trusted-clusters",179:"main",202:"app-launcher",232:"login-failed",246:"login-success",290:"console",380:"desktop",384:"kubes",426:"audit",434:"clusters",438:"roles",456:"desktop-session",465:"recordings",509:"nodes",535:"login",551:"support",681:"users",773:"welcome",784:"sessions",809:"account",860:"auth-connectors",913:"telemetry"}[e]||e)+"."+{23:"e168187b0ece527bcb56",35:"385592649cdadfb85d61",55:"8d8f2e66928e8d40c100",58:"909fffde7cf09a6cf99e",65:"d753b1dd319f070a40de",152:"ffc9ca2f3fa9973d5b60",179:"63c80e559120c609bf56",202:"0f8941646255bc657496",232:"03da2d5cd744820aaebc",246:"31e8a81afca5c9134c25",290:"08d7e3525223bde7b4ad",297:"03a9b94465d23202dd50",310:"e0ffe60027234e1aab9f",335:"7a48f152922252cd5625",353:"d1d877c90e5fce01a6ca",379:"ca2cb52f13d99c26891a",380:"168a131aa2ea47549b2f",384:"5623dae6b6342ec52dad",426:"b2251facbd76d8fc4b76",434:"0ac4ffe582f2e0d7736f",438:"0cdd16361c6a0af72527",452:"1f687982da0c5562c063",456:"b76aef8d034a7758d99a",465:"2df75d42db89211ac836",509:"0e964b4d584f8483343b",515:"ec5a0d882611b9f3aa55",522:"9e6b4fee7c69671f3874",535:"72f705e8a2e7e42e4548",550:"67498cf7bc4718a1687e",551:"d793cb1c4c31fe8af16d",585:"0aa7ac384a3b54e531fd",621:"2aa51c36241b45648923",664:"5a7580d7059e591f0262",681:"1c4a4e847c3223b75949",692:"e379904e7cf373bbf401",703:"fa3460d181df03ecb555",756:"332ba21fef068a8f20ae",773:"1a31eac242c8124907f8",784:"24d3987572690225ff7f",809:"6ae3a2cc25d8f722c327",825:"e02967bb2925a74d1c61",860:"58e7ff6719f656af7b7d",913:"88bafe9aaa217c62abc4"}[e]+".js"),o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),a={},r="@gravitational/teleport:",o.l=(e,t,d,c)=>{if(a[e])a[e].push(t);else{var f,n;if(void 0!==d)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var s=i[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==r+d){f=s;break}}f||(n=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.setAttribute("data-webpack",r+d),f.src=e),a[e]=[t];var b=(r,t)=>{f.onerror=f.onload=null,clearTimeout(u);var d=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),d&&d.forEach((e=>e(t))),r)return r(t)},u=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),n&&document.head.appendChild(f)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/web/app/",(()=>{var e={523:0};o.f.j=(a,r)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)r.push(t[2]);else if(523!=a){var d=new Promise(((r,d)=>t=e[a]=[r,d]));r.push(t[2]=d);var c=o.p+o.u(a),f=new Error;o.l(c,(r=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var d=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;f.message="Loading chunk "+a+" failed.\n("+d+": "+c+")",f.name="ChunkLoadError",f.type=d,f.request=c,t[1](f)}}),"chunk-"+a,a)}else e[a]=0},o.O.j=a=>0===e[a];var a=(a,r)=>{var t,d,[c,f,n]=r,i=0;if(c.some((a=>0!==e[a]))){for(t in f)o.o(f,t)&&(o.m[t]=f[t]);if(n)var l=n(o)}for(a&&a(r);i<c.length;i++)d=c[i],o.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return o.O(l)},r=self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})(),o.nc=void 0})();