"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3237],{19401:(e,t,n)=>{n.d(t,{T:()=>g});var a=n(87462),r=n(67294),l=n(89747),o=n(76743),i=n(61802),c=n(85214),s=n(81284),m=n(81719);const u=(0,m.ZP)(c.Z)({position:"relative",padding:0}),d=(0,m.ZP)(s.ZP)({position:"absolute",width:"100%",paddingLeft:0,transition:"all .5s ease",opacity:.4,"&.item-enter":{opacity:0,transform:"translate3d(-10%, 0, 0) scale(0.85)"},"&.item-enter-active":{opacity:.4,transform:"none"},"&.item-exit":{opacity:.4,transform:"none"},"&.item-exit-active":{opacity:0,transform:"translate3d(-10%, 0, 0) scale(0.85)"},"&:hover":{opacity:1}});function p(e,t){let{maxLength:n,itemHeight:c,getKey:s,children:m,...p}=e;const[g,h]=(0,r.useState)([]),E=(0,r.useCallback)((e=>{h((t=>t.length===n?[e].concat(t.slice(0,n-1)):[e].concat(t)))}),[n]);return(0,r.useEffect)((()=>{const e={add:E};(0,i.nf)(t)&&("function"==typeof t?t(e):t.current=e)}),[]),r.createElement(l.Z,(0,a.Z)({component:u},p,{sx:{height:c*n}}),g.map(((e,t)=>r.createElement(o.Z,{key:s(e),timeout:500,classNames:"item"},r.createElement(d,{sx:{top:t*c,height:c}},m(e))))))}const g=(0,r.forwardRef)(p)},41109:(e,t,n)=>{n.d(t,{C:()=>Z});var a=n(67294),r=n(26432),l=n(19604),o=n(61953),i=n(36336),c=n(31470),s=n(91655),m=n(18661),u=n(62348),d=n(14850),p=n(6971),g=n(47135),h=n(61802);const E={cop:"distributed",batchCop:"distributed",tikv:"row",tiflash:"column"},f=e=>{if(!e)return e;for(const[t,n]of Object.entries(E))e=e.replace(new RegExp(t,"g"),n);return e},b=e=>{let{sql:t,query:n,params:E,open:b,onClose:v}=e;const[y,Z]=(0,a.useState)(null),{data:w,error:k}=(0,p.WV)(`${y??"undefined"}/${n}`,E,!1,b&&!!y&&(0,h.nf)(E)),_=(0,r.Z)(((e,t)=>{Z(t)}));return a.createElement(a.Fragment,null,a.createElement(c.Z,{open:b,maxWidth:"xl",fullWidth:!0,onClose:v},a.createElement(i.Z,null,a.createElement(u.Z,{value:y,onChange:_},a.createElement(m.Z,{value:null,label:"SQL"}),a.createElement(m.Z,{value:"explain",label:"EXPLAIN"})),a.createElement("br",null),y?(0,h.nf)(k)?a.createElement(l.Z,{severity:"error"},"Request failed $",(0,g.e$)(k)):(0,h.Rw)(w)?a.createElement(o.Z,{sx:{pt:.5}},a.createElement(s.Z,{width:"80%"}),a.createElement(s.Z,{width:"50%"}),a.createElement(s.Z,{width:"70%"})):a.createElement(o.Z,{sx:{overflowX:"scroll",color:"rgb(248, 248, 242)",backgroundColor:"rgb(40, 42, 54)",borderRadius:2,py:2},mb:2},a.createElement(o.Z,{display:"table",fontFamily:"monospace",fontSize:16,lineHeight:1,sx:{borderSpacing:"16px 0"}},a.createElement(o.Z,{display:"table-header-group"},a.createElement(o.Z,{display:"table-row"},w.fields.map((e=>a.createElement(o.Z,{key:e.name,display:"table-cell"},e.name))))),a.createElement(o.Z,{display:"table-footer-group"},w.data.map(((e,t)=>a.createElement(o.Z,{key:t,display:"table-row"},w.fields.map((t=>a.createElement(o.Z,{key:f(t.name),display:"table-cell",whiteSpace:"pre"},f(e[t.name])))))))))):a.createElement(d.Z,{className:"language-sql"},t))))};var v=n(54225),y=n(96214);function Z(e){const[t,n]=(0,a.useState)(!1),l=(0,r.Z)((()=>{n(!1)})),o=(0,r.Z)((()=>{n(!0)}));return{dialog:a.createElement(b,{query:(null==e?void 0:e.query)??"",sql:null==e?void 0:e.sql,params:null==e?void 0:e.params,open:(0,h.nf)(e)&&t,onClose:l}),button:a.createElement(v.Z,{size:"small",onClick:o,endIcon:a.createElement(y.Z,null),disabled:(0,h.Rw)(e)},"SHOW SQL"),show:t}}},77249:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(54364),l=n(26613),o=n(61953);const i=e=>e.toFixed(1).replace(/[.,]0$/,""),c=a.createElement(r.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),s=a.createElement(l.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),m="#E30C34",u="#52FF52",d=e=>{let{val:t,suffix:n,reverse:r=!1}=e;return t>0?a.createElement("span",{className:"diff",style:{color:r?m:u}},r?s:c,a.createElement(o.Z,{component:"span",fontSize:14},i(t),n)):t<0?a.createElement("span",{className:"diff",style:{color:r?u:m}},r?c:s,a.createElement(o.Z,{component:"span",fontSize:14},i(-t),n)):a.createElement("span",{className:"diff",style:{color:"gray"}})}},69050:(e,t,n)=>{n.d(t,{V:()=>g,Z:()=>p});var a=n(77249),r=n(39960),l=n(9566),o=n(67294),i=n(16550),c=n(61953),s=n(29630),m=n(9144),u=n(44731),d=n(91655);function p(e){let{variant:t="clickable",name:n,repos:d,collectionRepos:p}=e;const g=(0,i.k6)(),E=(0,o.useCallback)((()=>{g.push(`/collections/${(0,l.o)(n)}`)}),[n]);return o.createElement(h,{onClick:E,className:t},o.createElement(s.Z,{variant:"body1",fontSize:16},n),o.createElement(s.Z,{variant:"body2",color:"#7C7C7C",mt:2,mb:2},d," repositories"),p.map((e=>o.createElement(m.Z,{key:e.repo_id,direction:"row",mt:1,alignItems:"center"},o.createElement(c.Z,{maxWidth:48,minWidth:48},e.rank,o.createElement(a.Z,{val:e.rank_changes})),o.createElement(c.Z,{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.createElement(r.Z,{href:`/analyze/${e.repo_name}`,target:"_blank"},o.createElement(m.Z,{direction:"row",alignItems:"center"},o.createElement(c.Z,{component:"span",display:"inline-flex",bgcolor:"lightgrey",borderRadius:"24px",padding:"0px",alignItems:"center",justifyContent:"center",sx:{verticalAlign:"text-bottom"},mr:1},o.createElement(u.Z,{src:`https://github.com/${e.repo_name.split("/")[0]}.png`})),o.createElement(c.Z,{component:"span",whiteSpace:"nowrap",ml:1},e.repo_name))))))),"link"===t?o.createElement(c.Z,{mt:2,fontSize:14},o.createElement(r.Z,{href:`/collections/${(0,l.o)(n)}`,target:"_blank"},"> See All")):o.createElement(r.Z,{href:`/collections/${(0,l.o)(n)}`,target:"_blank",hidden:!0},"> See All"))}function g(){return o.createElement(c.Z,{border:"2px dashed #3c3c3c",p:2,borderRadius:1,sx:{"&:not(:first-of-type)":{ml:2}}},o.createElement(d.Z,{width:150}),o.createElement(d.Z,{width:160,sx:{mt:2}}),o.createElement(d.Z,{width:120,sx:{my:2}}),[0,1,2].map((e=>o.createElement(m.Z,{key:e,direction:"row"},o.createElement(d.Z,{width:48}),o.createElement(d.Z,{width:36,height:36,variant:"circular",sx:{mx:1}}),o.createElement(d.Z,{width:120})))))}const h=(0,n(81719).ZP)(c.Z)((e=>{let{theme:t}=e;return{border:"2px dashed #3c3c3c",padding:t.spacing(2),borderRadius:t.spacing(1),"&:not(:first-of-type)":{marginLeft:t.spacing(2)},"&.clickable":{cursor:"pointer",transition:"box-shadow .2s ease, transform .2s ease","&:hover":{boxShadow:t.shadows[16],transform:"translateY(-1px) scale(1.02)"}}}}))},15848:(e,t,n)=>{n.d(t,{Z:()=>i,h:()=>c});var a=n(67294),r=n(70131),l=n(95487),o=n(10981);function i(e){let{children:t}=e;const n=(0,l.Z)(),{inView:i,ref:c}=(0,r.YD)({fallbackInView:!0}),s=n&&i;let m;return m="function"==typeof t?t(s):a.createElement(o.Z.Provider,{value:{inView:s}},t),a.createElement("div",{ref:c},m)}function c(e){const t=t=>a.createElement(i,null,a.createElement(e,t));return t.displayName="InViewContainerHOC",t}},79411:(e,t,n)=>{n.d(t,{k:()=>p});var a=n(87462),r=n(67294),l=n(55343),o=n(58316),i=n(49669),c=n(26432),s=n(53442),m=n(31538),u=n(92770);function d(e){return(0,u.HD)(e)?"":e.title}function p(e,t,n,u,p){void 0===u&&(u={}),void 0===p&&(p={});const[g,h]=(0,r.useState)(t),E=(0,i.Z)()??"fatal-id",f=(0,c.Z)((e=>{h(e.target.value)}));return{select:(0,r.useMemo)((()=>r.createElement(l.Z,(0,a.Z)({variant:"standard"},u),n&&r.createElement(o.Z,{id:`selector-${E}-label`},n),r.createElement(s.Z,(0,a.Z)({id:`selector-${E}`,size:"small",value:g,onChange:f,label:n,native:!1,autoWidth:!0,renderValue:d},p),e.map((e=>r.createElement(m.Z,{key:e.key,value:e},e.title)))))),[e,g,E]),value:""===g?null:g}}},14454:(e,t,n)=>{n.d(t,{I:()=>o});var a=n(6971),r=n(67294),l=n(61802);function o(){const{data:e,loading:t,error:n}=(0,a.WV)("recent-hot-collections",{},!1);return{data:(0,r.useMemo)((()=>{if((0,l.Rw)(e))return;const t=[];for(const a of e.data){var n;a.id===(null==(n=t[t.length-1])?void 0:n.id)?t[t.length-1].collectionRepos.push({repo_id:a.repo_id,repo_name:a.repo_name,last_2nd_month_rank:a.last_2nd_month_rank,last_month_rank:a.last_month_rank,rank:a.rank,rank_changes:a.rank_changes}):t.push({id:a.id,name:a.name,repos:a.repos,visits:a.visits,collectionRepos:[{repo_id:a.repo_id,repo_name:a.repo_name,last_2nd_month_rank:a.last_2nd_month_rank,last_month_rank:a.last_month_rank,rank:a.rank,rank_changes:a.rank_changes}]})}return{...e,fields:e.fields,data:t}}),[e]),loading:t,error:n}}},80627:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pt});var a=n(67294),r=n(88242),l=n(33457),o=n(61953),i=n(81719);const c={xs:"column",md:"row"},s=(0,i.ZP)(o.Z)((e=>{let{theme:t}=e;return{paddingLeft:t.spacing(4),paddingRight:t.spacing(4),flex:1,[t.breakpoints.down("md")]:{width:"100%",padding:t.spacing(1)}}})),m=(0,i.ZP)(s)((e=>{let{theme:t}=e;return{textAlign:"right",[t.breakpoints.down("md")]:{textAlign:"left"}}}));var u=n(87151),d=n(87462),p=n(29167),g=n(41556),h=n(29630);const E={h1:(0,g.j)("fontSize",28,48,64),h2:(0,g.j)("fontSize",24,36,48),h2plus:(0,g.j)("fontSize",28,48,64),subtitle:(0,g.j)("fontSize",14,18,24),body:(0,g.j)("fontSize",12,16,20)},f={heading:(0,g.j)("textAlign","center",void 0,void 0)},b=e=>a.createElement(h.Z,(0,d.Z)({},e,{variant:"h1",sx:(0,p.R)(E.h1,f.heading,e.sx)})),v=e=>a.createElement(h.Z,(0,d.Z)({},e,{variant:"h2",sx:(0,p.R)(E.h2,f.heading,e.sx)})),y=e=>a.createElement(h.Z,(0,d.Z)({},e,{component:"span",display:"inline",variant:"inherit"})),Z=e=>a.createElement(h.Z,(0,d.Z)({},e,{component:"div",variant:"subtitle2",sx:[{color:"#C4C4C4"},E.subtitle,f.heading]})),w=e=>a.createElement(h.Z,(0,d.Z)({},e,{variant:"body2",sx:(0,p.R)([{color:"#C4C4C4"},(0,g.j)("mt",2,4,6),E.body],e.sx)}));var k=n(62097),_=n(61225);const x=()=>{const e=(0,k.Z)(),t=(0,_.Z)(e.breakpoints.down("md"));return a.createElement(a.Fragment,null,a.createElement(o.Z,{mt:4,display:"flex",justifyContent:["center","center","flex-end"],sx:{"> *":{flex:1,maxWidth:450,mx:"unset"}}},a.createElement(u.Z,{align:"left",size:t?void 0:"large",contrast:!0})),a.createElement(h.Z,{variant:"body2",mt:1,color:"#7c7c7c",sx:f.heading},"Deep insight into developers and repos on GitHub",a.createElement("br",null),"about stars, pull requests, issues, pushes, comments, reviews..."))};var C=n(45344),S=n(70131),A=n(6971),R=n(95487);const L=(0,i.ZP)(C.Z)({color:"#E30C34",marginLeft:4,marginRight:4}),P=e=>{let{fontSize:t=24}=e;const n=(0,R.Z)(),{inView:r,ref:l}=(0,S.YD)(),o=(0,A.Ox)(r&&n);return a.createElement("div",{style:{display:"inline"},ref:l},a.createElement(L,{value:o,hasComma:!0,duration:200,size:t}))},N=()=>{const e=(0,k.Z)(),t=(0,_.Z)(e.breakpoints.down("md")),n=(0,_.Z)(e.breakpoints.down("lg"));return a.createElement(Z,null,"SELECT insights FROM",a.createElement(P,{fontSize:t?14:n?18:24}),"GitHub events")},z=(0,i.ZP)("img")((e=>{let{theme:t}=e;return{verticalAlign:"text-bottom",marginLeft:t.spacing(1)}})),T=()=>a.createElement(w,{sx:f.heading},"Powered by",a.createElement("a",{href:"https://en.pingcap.com/tidb-cloud/?utm_source=ossinsight&utm_medium=referral",target:"_blank",rel:"noreferrer"},a.createElement(z,{src:"/img/tidb-cloud-logo-o.png",height:20,alt:"TiDB"})));var D=n(2525);const I=()=>a.createElement(b,null,"Open Source Software",a.createElement("br",null),a.createElement(y,{sx:{color:"#FFE895"}},a.createElement(D.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}),"\xa0Insight")),H=()=>a.createElement(m,null,a.createElement(N,null),a.createElement(I,null),a.createElement(x,null),a.createElement(T,null));var F=n(24039),B=n(15848),O=n(85529),W=n(19401),M=n(61802);const V=e=>e.id;function j(e){let{show:t}=e;const n=(0,a.useRef)(null),r=(0,a.useRef)(),l=(0,a.useRef)([[],0]),o=(0,A.ve)("events-increment-list",{},!1,t,"unique");(0,a.useEffect)((()=>{(0,M.nf)(o.data)&&(l.current=[o.data.data,0])}),[o.data]);const i=(0,a.useCallback)((()=>{clearInterval(r.current),r.current=setInterval((()=>{const[e,t]=l.current;var a;t<e.length&&(e[t].id=`${e[t].id}-${Date.now()}`,null==(a=n.current)||a.add(e[t]),l.current[1]++)}),500)}),[]),c=(0,a.useCallback)((()=>{clearInterval(r.current)}),[]);return(0,a.useEffect)((()=>(t&&i(),c)),[t]),a.createElement(W.T,{ref:n,maxLength:7,itemHeight:24,getKey:V,onMouseEnter:c,onMouseLeave:i},q)}const $=(0,i.ZP)("span")({fontSize:12,lineHeight:"12px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"});function q(e){return a.createElement($,null,function(e){const t=a.createElement("a",{href:`https://github.com/${e.actor_login}`,rel:"noopener"},e.actor_login);switch(e.type){case"PushEvent":return a.createElement(a.Fragment,null,a.createElement(O.Mfv,{size:12})," ",t," pushed to");case"CreateEvent":return a.createElement(a.Fragment,null,a.createElement(O.H0r,{size:12})," ",t," created");case"PullRequestEvent":{const n=a.createElement("a",{href:G(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return"closed"===e.action?e.pr_merged?a.createElement(a.Fragment,null,a.createElement(O.Rvi,{size:12})," ",t," merged PR ",n," in"):a.createElement(a.Fragment,null,a.createElement(O.BRS,{size:12})," ",t," closed PR ",n," in"):a.createElement(a.Fragment,null,a.createElement(O.UWO,{size:12})," ",t," ",e.action," PR ",n," in")}case"WatchEvent":return a.createElement(a.Fragment,null,a.createElement(O.qNz,{size:12})," ",t," starred");case"ForkEvent":return a.createElement(a.Fragment,null,a.createElement(O.jcu,{size:12})," ",t," forked");case"IssuesEvent":{const n=a.createElement("a",{href:J(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return"closed"===e.action?a.createElement(a.Fragment,null,a.createElement(O.GFI,{size:12})," ",t," closed ",n," in"):a.createElement(a.Fragment,null,a.createElement(O.hEv,{size:12})," ",t," ",e.action," ",n," in")}case"PullRequestReviewCommentEvent":{const n=a.createElement("a",{href:G(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return a.createElement(a.Fragment,null,a.createElement(O.qtd,{size:12})," ",t," commented review PR ",n," in")}case"PullRequestReviewEvent":{const n=a.createElement("a",{href:G(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return a.createElement(a.Fragment,null,a.createElement(O.fg9,{size:12})," ",t," review PR ",n," in")}case"IssueCommentEvent":{const n=a.createElement("a",{href:J(e),target:"_blank",rel:"noopener noreferrer"},"#",e.number);return a.createElement(a.Fragment,null,a.createElement(O.qtd,{size:12})," ",t," commented issue ",n," in")}case"CommitCommentEvent":return a.createElement(a.Fragment,null,a.createElement(O.qtd,{size:12})," ",t," commented commit in");case"ReleaseEvent":return a.createElement(a.Fragment,null,a.createElement(O.lO_,{size:12})," ",t," released in");case"DeleteEvent":return a.createElement(a.Fragment,null,a.createElement(O.Vlp,{size:12})," ",t," deleted");case"GollumEvent":return a.createElement(a.Fragment,null,t," updated wiki in");case"GistEvent":return a.createElement(a.Fragment,null,a.createElement(O.xBm,{size:12})," ",t," ",e.action," gist");case"MemberEvent":return a.createElement(a.Fragment,null,a.createElement(O.TqF,{size:12})," ",t," ",e.action," member in");case"PublicEvent":case"DownloadEvent":case"TeamAddEvent":case"FollowEvent":case"ForkApplyEvent":case"Event":return a.createElement("span",null,e.type)}}(e),"\xa0",function(e){if(e.repo_name)return a.createElement("a",{href:`https://github.com/${e.repo_name}`,target:"_blank",rel:"noopener noreferrer"},e.repo_name)}(e))}function G(e){return`https://github.com/${e.repo_name}/pull/${e.number}`}function J(e){return`https://github.com/${e.repo_name}/issues/${e.number}`}var Q=n(60338),U=n(52483),K=n(74118),Y=n(50982),X=n(21832),ee=n(11905),te=n(39488);const ne=e=>{let{show:t}=e;const n=(0,te.s)(t),r=(0,k.Z)(),l=(0,_.Z)(r.breakpoints.down("sm")),i=(0,a.useRef)(null);return(0,a.useLayoutEffect)((()=>{var e;null==(e=i.current)||e.resize({width:"auto"})}),[l]),a.createElement(o.Z,{width:l?"100%":"61.8%"},a.createElement(Q.zU,{init:{height:l?160:120,renderer:"canvas"},ref:i},a.createElement(ee.Z,null,a.createElement(X.r,{containLabel:!0,top:0,bottom:8,left:0,right:0}),a.createElement(U.Z.Category.X,{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}}),a.createElement(U.Z.Value.Y,{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,align:"right",fontSize:12,showMinLabel:!0,showMaxLabel:!1,hideOverlap:!0},splitLine:{show:!1},position:"left",interval:100}),a.createElement(K.Q,{datasetId:"original",silent:!0,color:"#F77C00",encode:{x:"latest_timestamp",y:"cnt"},barMaxWidth:12})),a.createElement(Y.q,{id:"original",source:n})))};var ae=n(88784),re=n(54225),le=n(68346);const oe=(0,i.ZP)("p")({fontSize:"14px",color:"#C4C4C4",fontWeight:"bold",marginBottom:"8px",marginTop:"16px"}),ie=(0,i.ZP)("strong")({color:"#47D9A1"}),ce=()=>a.createElement(s,{sx:[{flex:.618},E.h1]},a.createElement(oe,{sx:{mt:0}},"Events per 5 seconds"),a.createElement(B.Z,null,(e=>a.createElement(ne,{show:e}))),a.createElement(oe,null,"What is happening on GitHub ",a.createElement(ie,null,"NOW!"),"\xa0",a.createElement(ae.Z,{title:"Random pick from all realtime events"},a.createElement(F.Z,{fontSize:"inherit",sx:{verticalAlign:"text-bottom"}}))),a.createElement(B.Z,null,(e=>a.createElement(j,{show:e}))),a.createElement(o.Z,{fontSize:12,mt:3},a.createElement(re.Z,{sx:{fontSize:12,fontWeight:"regular",verticalAlign:"baseline",textDecoration:"underline",color:"#7c7c7c"},component:le.Z,href:"/blog/why-we-choose-tidb-to-support-ossinsight"},"\ud83e\udd16\ufe0f How do we create this real-time effect?")));var se=n(44373),me=n(9144);function ue(){return a.createElement(l.Z,{pt:4},a.createElement(me.Z,{divider:a.createElement(se.Z,{orientation:"vertical",flexItem:!0}),direction:c},a.createElement(H,null),a.createElement(ce,null)))}var de=n(14454),pe=n(26432);var ge=n(21596),he=n(93412),Ee=n(69050);function fe(){const{data:e}=(0,de.I)(),t=(0,a.useRef)(0);return a.createElement(ve,{version:++t.current},null==e?void 0:e.data.slice(0,10).map((e=>{let{id:t,name:n,repos:r,collectionRepos:l}=e;return a.createElement(Ee.Z,{key:t,variant:"link",name:n,repos:r,collectionRepos:l})})),(0,M.Rw)(e)?a.createElement(be,null):void 0)}const be=()=>a.createElement(a.Fragment,null,a.createElement(Ee.V,null),a.createElement(Ee.V,null),a.createElement(Ee.V,null)),ve=e=>{let{version:t,children:n}=e;const{ref:r,scrollable:l,scroll:i,recompute:c}=function(e){let{direction:t="x"}=e;const[n,r]=(0,a.useState)(null),[l,o]=(0,a.useState)(!1),i=(0,pe.Z)((e=>{r(e)})),c=(0,a.useCallback)((()=>{if(!n)return void o(!1);let e,a,r;"x"===t?(e=n.getBoundingClientRect().width,a=n.scrollWidth,r=n.scrollLeft):(e=n.getBoundingClientRect().height,a=n.scrollHeight,r=n.scrollTop),a===e?o(!1):r<1?o("forward"):Math.abs(r+e-a)<1?o("backward"):o(!0)}),[n,t]);return(0,a.useEffect)((()=>{if(n)return n.addEventListener("scroll",c),window.addEventListener("resize",c),c(),()=>{n.removeEventListener("scroll",c),window.removeEventListener("resize",c)}}),[n,t,c]),{ref:i,scroll:(0,a.useCallback)((function(e){if(void 0===e&&(e=100),!n)return;const{width:a,height:r}=n.getBoundingClientRect();n.scrollBy({["x"===t?"left":"top"]:e*("x"===t?a:r),behavior:"smooth"})}),[n]),scrollable:l,recompute:c}}({direction:"x"});return(0,a.useEffect)((()=>{c()}),[t]),a.createElement(o.Z,{position:"relative"},a.createElement(ye,{type:"backward",onClick:()=>i(-.6),show:(0,M.N6)(l)&&"forward"!==l}),a.createElement(ye,{type:"forward",onClick:()=>i(.6),show:(0,M.N6)(l)&&"backward"!==l}),a.createElement(me.Z,{direction:"row",overflow:"auto",ref:r},n))},ye=e=>{let{type:t,onClick:n,show:r}=e;return a.createElement(o.Z,{sx:{transition:"opacity .2s ease",cursor:"pointer",opacity:r?1:0,pointerEvents:r?void 0:"none",zIndex:1},position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"24px",top:0,left:"backward"===t?0:void 0,right:"forward"===t?0:void 0,onClick:n,bgcolor:"#2c2c2c",border:"2px dashed #3c3c3c",fontSize:36},"forward"===t?a.createElement(ge.Z,{fontSize:"inherit"}):a.createElement(he.Z,{fontSize:"inherit"}))};function Ze(){return a.createElement(l.Z,{darker:!0,maxWidth:!1},a.createElement(v,{sx:{fontSize:24}},"\ud83d\udcd6 Hot Collections"),a.createElement(w,{sx:{mb:4,mt:2,fontSize:14}},"Insights about the monthly and historical rankings and trends in technical fields with curated repository lists."),a.createElement(fe,null))}const we=JSON.parse('{"f":[{"name":"period","description":"Trending time period.","replaces":"DATE_SUB(NOW(), INTERVAL 1 MONTH)","default":"past_24_hours","enums":["past_24_hours","past_week","past_month","past_3_months"],"template":{"past_24_hours":"DATE_SUB(NOW(), INTERVAL 1 DAY)","past_week":"DATE_SUB(NOW(), INTERVAL 1 WEEK)","past_month":"DATE_SUB(NOW(), INTERVAL 1 MONTH)","past_3_months":"DATE_SUB(NOW(), INTERVAL 3 MONTH)"}},{"name":"language","description":"Primary language","replaces":"AND primary_language = \'Java\'","default":"All","enums":["All","JavaScript","Java","Python","PHP","C++","C#","TypeScript","Shell","C","Ruby","Rust","Go","Kotlin","HCL","PowerShell","CMake","Groovy","PLpgSQL","TSQL","Dart","Swift","HTML","CSS","Elixir","Haskell","Solidity","Assembly","R","Scala","Julia","Lua","Clojure","Erlang","Common Lisp","Emacs Lisp","OCaml","MATLAB","Objective-C","Perl","Fortran"],"template":{"All":"","JavaScript":"AND primary_language = \'JavaScript\'","Java":"AND primary_language = \'Java\'","Python":"AND primary_language = \'Python\'","PHP":"AND primary_language = \'PHP\'","C++":"AND primary_language = \'C++\'","C#":"AND primary_language = \'C#\'","TypeScript":"AND primary_language = \'TypeScript\'","Shell":"AND primary_language = \'Shell\'","C":"AND primary_language = \'C\'","Ruby":"AND primary_language = \'Ruby\'","Rust":"AND primary_language = \'Rust\'","Go":"AND primary_language = \'Go\'","Kotlin":"AND primary_language = \'Kotlin\'","HCL":"AND primary_language = \'HCL\'","PowerShell":"AND primary_language = \'PowerShell\'","CMake":"AND primary_language = \'CMake\'","Groovy":"AND primary_language = \'Groovy\'","PLpgSQL":"AND primary_language = \'PLpgSQL\'","TSQL":"AND primary_language = \'TSQL\'","Dart":"AND primary_language = \'Dart\'","Swift":"AND primary_language = \'Swift\'","HTML":"AND primary_language = \'HTML\'","CSS":"AND primary_language = \'CSS\'","Elixir":"AND primary_language = \'Elixir\'","Haskell":"AND primary_language = \'Haskell\'","Solidity":"AND primary_language = \'Solidity\'","Assembly":"AND primary_language = \'Assembly\'","R":"AND primary_language = \'R\'","Scala":"AND primary_language = \'Scala\'","Julia":"AND primary_language = \'Julia\'","Lua":"AND primary_language = \'Lua\'","Clojure":"AND primary_language = \'Clojure\'","Erlang":"AND primary_language = \'Erlang\'","Common Lisp":"AND primary_language = \'Common Lisp\'","Emacs Lisp":"AND primary_language = \'Emacs Lisp\'","OCaml":"AND primary_language = \'OCaml\'","MATLAB":"AND primary_language = \'MATLAB\'","Objective-C":"AND primary_language = \'Objective-C\'","Perl":"AND primary_language = \'Perl\'","Fortran":"AND primary_language = \'Fortran\'"}}]}');var ke=n(79411),_e=n(53442),xe=n(31538);function Ce(e){let{options:t,value:n,onSelect:r}=e;const l=(0,a.useRef)(),i=(0,a.useRef)(t.map((()=>null))),[c,s]=(0,a.useState)(t.length);(0,a.useEffect)((()=>{i.current=t.map((()=>null))}),[t]);const m=(0,pe.Z)((()=>{if((0,M.Rw)(l.current))return;const e=l.current.clientWidth;let t=0;for(const n of i.current){if(!n)break;if(n.clientWidth+n.offsetLeft>=e)break;t+=1}s(t)}));(0,a.useLayoutEffect)((()=>{if(!(0,M.Rw)(l.current)){if(m(),"undefined"!=typeof ResizeObserver){const e=new ResizeObserver((()=>{m()}));return e.observe(l.current),()=>{l.current&&e.unobserve(l.current),e.disconnect()}}return window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}}}),[m]);const u=(0,a.useCallback)((e=>{r(e.target.value)}),[r]),d=(0,a.useMemo)((()=>{var e;return(null==(e=t.slice(c).find((e=>{let{key:t}=e;return t===n})))?void 0:e.key)??""}),[t,c,n]);return a.createElement(o.Z,{flex:1,position:"relative",maxWidth:"100%",overflow:"hidden"},a.createElement(me.Z,{direction:"row",position:"relative",width:"100%",alignContent:"center"},a.createElement(o.Z,{position:"absolute",left:0,top:0,width:"calc(100% - 120px)"},a.createElement(me.Z,{ref:l,component:"ol",direction:"row",visibility:"hidden",position:"absolute",left:0,top:0,width:"100%",p:0,m:0,sx:{pointerEvents:"none",listStyle:"none"}},t.map(((e,t)=>{let{key:l,label:o}=e;return a.createElement(Se,{ref:e=>{i.current[t]=e},key:l,value:l,label:o,selected:n===l,onClick:r})})))),a.createElement(o.Z,null,a.createElement(me.Z,{component:"ol",direction:"row",alignItems:"center",p:0,m:0,height:"100%",sx:{listStyle:"none"}},t.slice(0,c).map((e=>{let{key:t,label:l,icon:o}=e;return a.createElement(Se,{key:t,value:t,label:l,icon:o,selected:n===t,onClick:r})})))),t.length>c?a.createElement(_e.Z,{label:"Other",displayEmpty:!0,size:"small",value:d,onChange:u,sx:{fontSize:14,ml:c>0?2:0,".MuiSelect-select":{pb:0,pl:1},color:d?"primary.main":void 0,border:"1px solid transparent",borderColor:d?"primary.main":void 0,borderRadius:.75},variant:"standard",disableUnderline:!0,renderValue:e=>{var n;return(null==(n=t.find((t=>{let{key:n}=t;return n===e})))?void 0:n.label)??"Others"}},t.slice(c).map((e=>{let{key:t,label:n}=e;return a.createElement(xe.Z,{key:t,value:t},n)}))):void 0))}const Se=(0,a.forwardRef)((function(e,t){let{value:n,label:r,icon:l,selected:i=!1,onClick:c}=e;const s=(0,a.useCallback)((()=>{null==c||c(n)}),[c,n]);return a.createElement(o.Z,{ref:t,component:"li",onClick:s,display:"flex",alignItems:"center",justifyContent:"center",border:"transparent 1px solid",borderRadius:.75,fontSize:14,lineHeight:"1",sx:{transition:"all .2s ease","&:not(:first-of-type)":{ml:2},px:1,py:.5,userSelect:"none",cursor:i?void 0:"pointer",borderColor:i?"primary.main":void 0,color:i?"primary.main":void 0}},l,(0,M.N6)(l)&&a.createElement(o.Z,{mx:.5}),r)}));var Ae,Re,Le=n(9566);const Pe=(null==(Ae=we.f.find((e=>"period"===e.name)))?void 0:Ae.enums)??[],Ne=Object.keys((null==(Re=we.f.find((e=>"language"===e.name)))?void 0:Re.template)??{}),ze=Pe.map((e=>{return{key:e,title:(t=e,(0,Le.o)(t).replace(/^\w/g,(e=>e.toUpperCase())).replace(/-/g," "))};var t})),Te=Ne.map((e=>({key:e,label:e})));O.Rg1,O.r7p,O.jcu,O.Mfv,O.Rvi;var De=n(39960),Ie=n(21448),He=n(34573),Fe=n(90244),Be=n(93978),Oe=n(69417),We=n(5605),Me=n(39807),Ve=n(91655),je=n(44731),$e=n(86777),qe=n(16550),Ge=n(41109);const Je=JSON.parse('{"JavaScript":"#f1e05a","Java":"#b07219","Python":"#3572A5","PHP":"#4F5D95","C++":"#f34b7d","C#":"#178600","Typescript":"#3178c6","Shell":"#89e051","C":"#555555","Ruby":"#701516","Rust":"#dea584","Go":"#00ADD8","Kotlin":"#A97BFF","HCL":"#ccc","PowerShell":"#012456","CMake":"#DA3434","Groovy":"#4298b8","PLpgSQL":"#336790","TSQL":"#e38c00","Dart":"#00B4AB","Swift":"#F05138","HTML":"#e34c26","CSS":"#563d7c","Elixir":"#6e4a7e","Haskell":"#5e5086","Solidity":"#AA6746","Assembly":"#6E4C13","R":"#198CE7","Scala":"#c22d40","Julia":"#a270ba","Lua":"#000080","Clojure":"#db5855","Erlang":"#B83998","Common Lisp":"#3fb68b","Emacs Lisp":"#c065db","OCaml":"#3be133","MATLAB":"#e16737","Objective-C":"#438eff","Perl":"#0298c3","Fortran":"#4d41b1"}');for(const gt in Je)Je[gt.toLowerCase()]=Je[gt];function Qe(){const{select:e,value:t}=(0,ke.k)(ze,ze[0],"",{variant:"standard"},{disableUnderline:!0,sx:{font:"inherit",color:"primary.main",lineHeight:"inherit",".MuiSelect-select":{pb:0}}}),{select:n,value:r}=function(){const[e,t]=(0,a.useState)(Te[0].key);return{select:a.createElement(Ce,{value:e,onSelect:t,options:Te}),value:e}}(),{data:l,loading:i}=function(e,t,n){const{data:r,loading:l,error:o}=(0,A.WV)("trending-repos",{language:e,period:t},!1);return{data:(0,a.useMemo)((()=>{if(!(0,M.Rw)(r))return{...r,data:r.data.slice().sort(((e,t)=>(t[n]??0)-e[n]??0)).map((e=>{var t,n;return{...e,contributor_logins:null==(t=e.contributor_logins)?void 0:t.split(","),collection_names:null==(n=e.collection_names)?void 0:n.split(",")}}))}}),[r,n]),loading:l,error:o}}(r,t.key,"total_score"),{dialog:c,button:s}=(0,Ge.C)(l),{page:m,rowsPerPage:u,list:d,handleChangePage:p,handleChangeRowsPerPage:g}=function(e,t){const[n,r]=(0,a.useState)(0),[l,o]=(0,a.useState)(20);(0,a.useEffect)((()=>{r(0)}),t);const i=(0,a.useCallback)(((e,t)=>{r(t)}),[r]),c=(0,a.useCallback)((e=>{o(parseInt(e.target.value,10)),r(0)}),[r,o]),s=(0,a.useMemo)((()=>{if(!(0,M.Rw)(e))return e.data.slice(n*l,(n+1)*l)}),[e,n,l]);return{page:n,rowsPerPage:l,handleChangePage:i,handleChangeRowsPerPage:c,list:s}}(l,[t.key,r]);return a.createElement(o.Z,null,a.createElement(me.Z,{direction:"row",justifyContent:"start",alignItems:"center",flexWrap:"wrap"},e,a.createElement(o.Z,{mx:.5}),a.createElement("span",null,"Language\xa0:\xa0\xa0\xa0"),n,s),a.createElement(He.Z,{sx:{".MuiTablePagination-spacer":{display:"none"},".MuiToolbar-root":{padding:0,"& > p":{margin:"0 !important"}}},size:"small",rowsPerPageOptions:[20,50,100],component:"div",count:(null==l?void 0:l.data.length)??0,rowsPerPage:u,page:m,onPageChange:p,onRowsPerPageChange:g}),a.createElement(Ue,{data:d,loading:i,rowsPerPage:u,page:m}),a.createElement(h.Z,{variant:"body2"},a.createElement(De.Z,{href:"/blog/why-we-choose-tidb-to-support-ossinsight",target:"_blank"},"\ud83e\udd16\ufe0f How do we display these rankings?")),c)}const Ue=e=>{let{data:t,loading:n,page:r,rowsPerPage:l}=e;const o=(0,qe.k6)();return a.createElement($e.Z,null,a.createElement(Fe.Z,{className:"clearTable"},a.createElement(Be.Z,null,a.createElement(Oe.Z,null,a.createElement(We.Z,{variant:"head"},"Rank"),a.createElement(We.Z,{variant:"head"},"Repository"),a.createElement(We.Z,{variant:"head"},"Stars"),a.createElement(We.Z,{variant:"head"},"Forks"),a.createElement(We.Z,{variant:"head"},"Pushes"),a.createElement(We.Z,{variant:"head"},"PRs"),a.createElement(We.Z,{variant:"head"},"Top Contributors"))),a.createElement(Me.Z,{sx:e=>({".MuiTableRow-root:nth-of-type(odd)":{}})},(0,M.nf)(t)?nt(t,r*l,o):at())))},Ke=(0,i.ZP)("span")({fontSize:18,fontWeight:"bold"}),Ye=(0,i.ZP)("p")({fontSize:14,color:"#adadad",margin:0,marginTop:8,maxWidth:600}),Xe=(0,i.ZP)("div")({fontSize:14,color:"#7d7d7d",margin:0,marginTop:8,maxWidth:600,display:"inline-flex",alignItems:"center"}),et=(0,i.ZP)("span")({display:"inline-block",width:6,height:6,borderRadius:"50%",marginRight:4,verticalAlign:"middle"}),tt=(0,i.ZP)("a")({marginLeft:4,color:"#7c7c7c"}),nt=(e,t,n)=>e.map(((e,r)=>{var l;return a.createElement(Oe.Z,{key:e.repo_id},a.createElement(We.Z,{component:"th"},"#",r+1+t),a.createElement(We.Z,null,a.createElement(Ke,null,a.createElement(De.Z,{href:`/analyze/${e.repo_name}`,target:"_blank"},e.repo_name),a.createElement(tt,{href:`https://github.com/${e.repo_name}`,target:"_blank"},a.createElement(O.Pfi,{size:16,verticalAlign:"middle"}))),rt(e.collection_names,n),a.createElement(Ye,null,e.description),e.language&&a.createElement(Xe,null,a.createElement(et,{sx:{backgroundColor:Je[null==(l=e.language)?void 0:l.toLowerCase()]??"#d1d1d1"}}),e.language)),a.createElement(We.Z,null,e.stars??0),a.createElement(We.Z,null,e.forks??0),a.createElement(We.Z,null,e.pushes??0),a.createElement(We.Z,null,e.pull_requests??0),a.createElement(We.Z,null,lt(e.contributor_logins)))})),at=()=>[0,1,2,3,4,5].map(((e,t)=>a.createElement(Oe.Z,{key:e},a.createElement(We.Z,{component:"th"},a.createElement(Ve.Z,{sx:{display:"inline-block",width:16}})),a.createElement(We.Z,null,a.createElement(Ve.Z,{sx:{display:"inline-block",width:32}})),a.createElement(We.Z,null,a.createElement(Ve.Z,{sx:{display:"inline-block",width:32}})),a.createElement(We.Z,null,a.createElement(Ve.Z,{sx:{display:"inline-block",width:32}})),a.createElement(We.Z,null,a.createElement(Ve.Z,{sx:{display:"inline-block",width:32}})),a.createElement(We.Z,null,a.createElement(Ve.Z,{sx:{display:"inline-block",width:32}})),a.createElement(We.Z,null,a.createElement(Ve.Z,{variant:"circular",sx:{display:"inline-block",width:16,height:16}}),a.createElement(Ve.Z,{variant:"circular",sx:{display:"inline-block",width:16,height:16,ml:1}}))))),rt=(e,t)=>a.createElement(me.Z,{direction:"row",gap:1,display:"inline-flex",ml:1},null==e?void 0:e.map((e=>a.createElement(Ie.Z,{key:e,size:"small",label:e,onClick:()=>t.push(`/collections/${(0,Le.o)(e)}`)})))),lt=e=>a.createElement(me.Z,{direction:"row",gap:1},null==e?void 0:e.map((e=>a.createElement(De.Z,{key:e,href:`/analyze/${e}`,target:"_blank"},a.createElement(je.Z,{sx:{width:22,height:22},src:`https://github.com/${e}.png`})))));function ot(){return a.createElement(l.Z,{id:"trending-repos",maxWidth:!1},a.createElement("a",{href:"#trending-repos"},a.createElement(v,{sx:{fontSize:24,mb:2,color:"white"}},"\ud83d\udd25 Trending Repos")),a.createElement(w,{sx:{mb:4,mt:2,fontSize:14}},"We ranked all repositories with score. ",a.createElement("b",null,"Total Score = Stars score + Forks score + Base score"),". See ",a.createElement(De.Z,{href:"https://github.com/pingcap/ossinsight/issues/778",target:"_blank"},"details"),"."),a.createElement(Qe,null))}const it=[{title:"Mini OSS Insight",href:"/docs/workshop/mini-ossinsight/introduction"},{title:"NFT Insight",href:"/docs/workshop/nft-insight"},{title:"Twitter Insight",href:"/docs/workshop/twitter-insight"},{title:"Stack Overflow Insight",href:"/docs/workshop/stackoverflow-insight"}];function ct(){return a.createElement(me.Z,{direction:["column","column","row"]},a.createElement(st,null,a.createElement(mt,null,it.map((e=>{let{title:t,href:n}=e;return a.createElement(ut,{key:n,direction:"row",justifyContent:"space-between",alignItems:"center"},a.createElement(h.Z,{variant:"body1"},t),a.createElement(De.Z,{href:n,target:"_blank"},">\xa0Tutorial"))})))),a.createElement(o.Z,{minWidth:36,maxWidth:36,minHeight:36,maxHeight:36}),a.createElement(st,null,a.createElement(me.Z,{justifyContent:"space-between",alignItems:"start",minHeight:140},a.createElement(h.Z,{variant:"body1"},"We suggest running your insight tool on a ",a.createElement(De.Z,{href:"https://docs.pingcap.com/tidb/dev/explore-htap?utm_source=ossinsight&utm_medium=referral",target:"_blank"},"Hybrid Transactional and Analytical Processing (HTAP)")," database like ",a.createElement(De.Z,{href:"https://www.pingcap.com/tidb-cloud/?utm_source=ossinsight&utm_medium=referral",target:"_blank"}," TiDB Cloud"),"."),a.createElement(re.Z,{variant:"contained",color:"primary",component:De.Z,rel:"noopener",href:"/blog/why-we-choose-tidb-to-support-ossinsight",target:"_link"},"\ud83d\udcd6 Learn why we chose TiDB to support OSS Insight"),a.createElement(re.Z,{variant:"contained",color:"primary",component:De.Z,rel:"noopener",href:"https://www.pingcap.com/developers/?utm_source=ossinsight&utm_medium=referral",target:"_link"},"\ud83d\ude80 Check out TiDB demos and tutorials"))))}const st=(0,i.ZP)(o.Z)((e=>{let{theme:t}=e;return{flex:1,padding:t.spacing(4),borderRadius:t.spacing(.75),border:"1px solid rgba(124, 124, 124, 0.3)",minHeight:204}})),mt=(0,i.ZP)("ul")((e=>{let{theme:t}=e;return{padding:0,margin:0,listStyle:"none"}})),ut=(0,i.ZP)((e=>a.createElement(me.Z,(0,d.Z)({},e,{component:"li"}))))((e=>{let{theme:t}=e;return{margin:0,paddingTop:t.spacing(.5),paddingBottom:t.spacing(.5),paddingLeft:t.spacing(1),paddingRight:t.spacing(1)}}));function dt(){return a.createElement(l.Z,{maxWidth:!1},a.createElement(me.Z,{direction:["column","column","row"]},a.createElement(o.Z,{flex:1.5},a.createElement(v,{sx:{fontSize:24,mb:2}},"\ud83d\udca1 How to build your own insight tool"),a.createElement(w,{sx:{mb:4,mt:2,fontSize:14}},"Would you like to gain insights about platforms other than GitHub? You\u2019re in the right place. Our ",a.createElement(De.Z,{href:"/docs/workshop",target:"_blank"},"tutorials")," teach you how to build an insight tool for other kinds of source data, like non-fungible tokens (NFTs), Twitter, and Stack Overflow."),a.createElement(ct,null))))}function pt(){return a.createElement(r.Z,{description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",dark:!0,image:"/img/screenshots/homepage.png"},a.createElement(ue,null),a.createElement(ot,null),a.createElement(Ze,null),a.createElement(dt,null))}},8106:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010),l=n(95999);const o={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function i(e){let{code:t,className:n}=e;const[i,c]=(0,a.useState)(!1),s=(0,a.useRef)(void 0),m=(0,a.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),c(!0),s.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),a.createElement("button",{type:"button","aria-label":i?(0,l.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,l.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,l.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,o.copyButton,i&&o.copyButtonCopied),onClick:m},a.createElement("span",{className:o.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:o.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:o.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},88242:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(52859),l=n(67294),o=n(61802),i=n(61953);function c(e){let{children:t,header:n,dark:c,sideWidth:s,Side:m,footer:u=!0,...d}=e;return(0,l.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),l.createElement(r.Z,(0,a.Z)({},d,{customFooter:u,header:n,sideWidth:s,side:s&&(0,o.nf)(m)?l.createElement(i.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},l.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},l.createElement(m,null))):void 0}),l.createElement("div",{hidden:!0,style:{height:72}}),l.createElement("div",{style:{paddingLeft:s,paddingRight:s}},l.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}},29167:(e,t,n)=>{function a(){const e=[];for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(const r of n)r&&(r instanceof Array?r.forEach((t=>{"boolean"!=typeof t&&e.push(t)})):e.push(r));return e}n.d(t,{R:()=>a})}}]);