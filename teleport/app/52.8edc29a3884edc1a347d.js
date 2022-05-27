"use strict";(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[52],{QtRT:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p,Support:()=>d});var l=r("ERkP"),o=r("NL5n"),n=r("qaZA"),a=r("jsLx"),i=r("9Faq"),c=r("w9iA"),u=r("Qm3L");function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},s.apply(this,arguments)}function p(){var e=(0,i.Z)().storeUser.state.cluster;return l.createElement(d,s({},e,{isEnterprise:c.Z.isEnterprise,tunnelPublicAddress:c.Z.tunnelPublicAddress,isCloud:c.Z.isCloud}))}var d=function(e){var t=e.clusterId,r=e.authVersion,i=e.publicURL,c=e.isEnterprise,u=e.tunnelPublicAddress,s=e.isCloud,p=m(r,c);return l.createElement(a.Ob,{pt:"4"},l.createElement(n.Zb,{px:5,pt:1,pb:6},l.createElement(n.kC,{justifyContent:"space-between",flexWrap:"wrap"},l.createElement(n.xu,null,l.createElement(v,{title:"Support",icon:l.createElement(o.LT,null)}),c&&l.createElement(g,{title:"Create a Support Ticket",url:"https://gravitational.zendesk.com/hc/en-us/requests/new"}),l.createElement(g,{title:"Ask the Community Questions",url:"https://github.com/gravitational/teleport/discussions"}),l.createElement(g,{title:"Request a New Feature",url:"https://github.com/gravitational/teleport/issues/new/choose"}),l.createElement(g,{title:"Send Product Feedback",url:"mailto:support@goteleport.com"})),l.createElement(n.xu,null,l.createElement(v,{title:"Resources",icon:l.createElement(o.P0,null)}),l.createElement(g,{title:"Quickstart Guide",url:p.quickstart}),l.createElement(g,{title:"tsh User Guide",url:p.userManual}),l.createElement(g,{title:"Admin Guide",url:p.adminGuide}),l.createElement(g,{title:"Download Page",url:h(s,c)}),l.createElement(g,{title:"FAQ",url:p.faq})),l.createElement(n.xu,null,l.createElement(v,{title:"Troubleshooting",icon:l.createElement(o.kJ,null)}),l.createElement(g,{title:"Monitoring & Debugging",url:p.troubleshooting})),l.createElement(n.xu,null,l.createElement(v,{title:"Updates",icon:l.createElement(o.Bd,null)}),l.createElement(g,{title:"Product Changelog",url:"https://github.com/gravitational/teleport/blob/master/CHANGELOG.md"}),l.createElement(g,{title:"Teleport Blog",url:"https://goteleport.com/blog/"})))),l.createElement(n.xu,{border:"1px solid",borderColor:"primary.light",mt:4,mb:10,borderRadius:3,px:5,py:4},l.createElement(n.xv,{as:"h5",mb:4,fontWeight:"bold",caps:!0},"Cluster Information"),l.createElement(E,{title:"Cluster Name",data:t}),l.createElement(E,{title:"Teleport Version",data:r}),l.createElement(E,{title:"Public Address",data:i}),u&&l.createElement(E,{title:"Public SSH Tunnel",data:u})))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=t?"e":"oss",l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(t,"?product=teleport&version=").concat(r,"_").concat(e).concat(l)};return{quickstart:l("https://goteleport.com/teleport/docs/quickstart"),userManual:l("https://goteleport.com/teleport/docs/user-manual"),adminGuide:l("https://goteleport.com/teleport/docs/admin-guide"),troubleshooting:l("https://goteleport.com/teleport/docs/setup/admin/troubleshooting","#troubleshooting"),faq:l("https://goteleport.com/teleport/docs/faq")}},h=function(e,t){return e?"https://goteleport.com/docs/cloud/downloads/":t?"https://dashboard.gravitational.com/web/downloads":"https://goteleport.com/teleport/download"},g=function(e){var t=e.title,r=void 0===t?"":t,o=e.url,n=void 0===o?"":o;return l.createElement(b,{href:n},r)},b=u.ZP.a.attrs({rel:"noreferrer"})(["display:block;color:",";border-radius:4px;text-decoration:none;margin-bottom:8px;padding:4px 8px;transition:all 0.3s;"," &:hover,&:focus{background:",";}"],(function(e){return e.theme.colors.light}),(function(e){return e.theme.typography.body2}),(function(e){return e.theme.colors.primary.lighter})),E=function(e){var t=e.title,r=void 0===t?"":t,o=e.data,a=void 0===o?null:o;return l.createElement(n.kC,{mb:3},l.createElement(n.xv,{typography:"body2",bold:!0,style:{width:"130px"}},r,":"),l.createElement(n.xv,{typography:"body2"},a))},v=function(e){var t=e.title,r=void 0===t?"":t,o=e.icon,a=void 0===o?null:o;return l.createElement(n.kC,{alignItems:"center",borderBottom:"1px solid",borderColor:"primary.dark",mb:3,width:210,mt:4,pb:2},l.createElement(n.xv,{pr:2,fontSize:18},a),l.createElement(n.xv,{as:"h5",caps:!0},r))}}}]);