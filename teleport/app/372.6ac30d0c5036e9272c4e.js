"use strict";(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[372],{KpAw:(e,t,r)=>{r.r(t),r.d(t,{DataContainer:()=>m,DataItem:()=>v,Support:()=>p,default:()=>d});var l=r("ERkP"),o=r("CIn/"),n=r("yLdc"),a=r("Qm3L"),i=r("xKXO"),s=r("bVd7"),c=r("igdO");function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},u.apply(this,arguments)}function d(e){let{children:t}=e;const r=(0,s.Z)().storeUser.state.cluster;return l.createElement(p,u({},r,{isEnterprise:c.Z.isEnterprise,tunnelPublicAddress:c.Z.tunnelPublicAddress,isCloud:c.Z.isCloud,children:t}))}const p=e=>{let{clusterId:t,authVersion:r,publicURL:a,isEnterprise:s,tunnelPublicAddress:c,isCloud:u,children:d}=e;const p=h(r,s);return l.createElement(i.Ob,{pt:"4"},l.createElement(o.Zb,{px:5,pt:1,pb:6},l.createElement(o.kC,{justifyContent:"space-between",flexWrap:"wrap"},l.createElement(o.xu,null,l.createElement(x,{title:"Support",icon:l.createElement(n.LT,null)}),s&&l.createElement(b,{title:"Create a Support Ticket",url:"https://gravitational.zendesk.com/hc/en-us/requests/new"}),l.createElement(b,{title:"Ask the Community Questions",url:"https://github.com/gravitational/teleport/discussions"}),l.createElement(b,{title:"Request a New Feature",url:"https://github.com/gravitational/teleport/issues/new/choose"}),l.createElement(b,{title:"Send Product Feedback",url:"mailto:support@goteleport.com"})),l.createElement(o.xu,null,l.createElement(x,{title:"Resources",icon:l.createElement(n.P0,null)}),l.createElement(b,{title:"Quickstart Guide",url:p.quickstart}),l.createElement(b,{title:"tsh User Guide",url:p.userManual}),l.createElement(b,{title:"Admin Guide",url:p.adminGuide}),l.createElement(b,{title:"Download Page",url:g(u,s)}),l.createElement(b,{title:"FAQ",url:p.faq})),l.createElement(o.xu,null,l.createElement(x,{title:"Troubleshooting",icon:l.createElement(n.kJ,null)}),l.createElement(b,{title:"Monitoring & Debugging",url:p.troubleshooting})),l.createElement(o.xu,null,l.createElement(x,{title:"Updates",icon:l.createElement(n.Bd,null)}),l.createElement(b,{title:"Product Changelog",url:"https://github.com/gravitational/teleport/blob/master/CHANGELOG.md"}),l.createElement(b,{title:"Teleport Blog",url:"https://goteleport.com/blog/"})))),l.createElement(m,{title:"Cluster Information"},l.createElement(v,{title:"Cluster Name",data:t}),l.createElement(v,{title:"Teleport Version",data:r}),l.createElement(v,{title:"Public Address",data:a}),c&&l.createElement(v,{title:"Public SSH Tunnel",data:c})),d)},m=e=>{let{title:t,children:r}=e;return l.createElement(o.xu,{border:"1px solid",borderColor:"primary.light",mt:4,borderRadius:3,px:5,py:4},l.createElement(o.xv,{as:"h5",mb:4,fontWeight:"bold",caps:!0},t),r)},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;const r=t?"e":"oss",l=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return`${t}?product=teleport&version=${r}_${e}${l}`};return{quickstart:l("https://goteleport.com/docs/getting-started"),userManual:l("https://goteleport.com/docs/server-access/guides/tsh"),adminGuide:l("https://goteleport.com/docs/setup/admin"),troubleshooting:l("https://goteleport.com/docs/setup/admin/troubleshooting"),faq:l("https://goteleport.com/docs/faq")}},g=(e,t)=>e?"https://goteleport.com/docs/cloud/downloads/":t?"https://dashboard.gravitational.com/web/downloads":"https://goteleport.com/download/",b=e=>{let{title:t="",url:r=""}=e;return l.createElement(E,{href:r},t)},E=a.ZP.a.attrs({rel:"noreferrer"})(["display:block;color:",";border-radius:4px;text-decoration:none;margin-bottom:8px;padding:4px 8px;transition:all 0.3s;"," &:hover,&:focus{background:",";}"],(e=>e.theme.colors.light),(e=>e.theme.typography.body2),(e=>e.theme.colors.primary.lighter)),v=e=>{let{title:t="",data:r=null}=e;return l.createElement(o.kC,{mb:3},l.createElement(o.xv,{typography:"body2",bold:!0,style:{width:"130px"}},t,":"),l.createElement(o.xv,{typography:"body2"},r))},x=e=>{let{title:t="",icon:r=null}=e;return l.createElement(o.kC,{alignItems:"center",borderBottom:"1px solid",borderColor:"primary.dark",mb:3,width:210,mt:4,pb:2},l.createElement(o.xv,{pr:2,fontSize:18},r),l.createElement(o.xv,{as:"h5",caps:!0},t))}}}]);